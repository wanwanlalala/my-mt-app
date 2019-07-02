import Router from 'koa-router'
import Redis from 'koa-redis'
import nodeMailer from 'nodemailer'

import Users from '../dbs/models/users'
import Passport from './utils/passport'
import axios from './utils/axios'
import Email from '../dbs/config'

let router = new Router({
    prefix:'/users'
})

let Store = new Redis().client      /** reidis客户端 **/

router.post('/signup',async (ctx) =>{
    const {
        username,
        password,
        email,
        code
    } = ctx.request.body

    /** 校验验证码是否正确 **/
    if(code){
        const saveCode = await Store.hget(`nodemail:${username}`,'code')
        const saveExpire = await Store.hget(`nodemail:${username}`,'expire')

        if(code === saveCode){
            if(new Date().getTime() - saveExpire > 0){      /**已过期 **/
                ctx.body = {
                    code:-1,
                    msg:'验证码已过期'
                }
                return false
            }else{
                ctx.body = {
                    code:-1,
                    msg:'请填写正确的验证码'
                }
            }
        }
    }else{
        ctx.body = {
            code:-1,
            msg:'请填写验证码'
        }
    }


    /** 校验用户名 **/
    let user = await Users.find({
        email
    })

    if(user.length){
        ctx.body = {
            code:-1,
            msg:'已被注册'
        }
        return
    }else{
        let newUser = await Users.create({
            username,
            password,
            email
        })

        if(newUser){
            let res = await axios.post('users/signin',{
                username,
                password
            })

            if(res.data && res.data.code === 1){
                ctx.body = {
                    code:1,
                    msg:'注册成功',
                    user:res.data.user
                }
            }else{
                ctx.body = {
                    code:-1,
                    msg:'error'
                }
            }
        }else{
            ctx.body = {
                code:-1,
                msg:'注册失败'
            }
        }
    }
})

/** 登录 **/
router.post('/signin',async (ctx,next)=>{
    return Passport.authenticate('local',function(err,user,info,status){
        if(err){
            ctx.body = {
                code:-1,
                msg:error
            }
        }else{
            if(user){
                ctx.body = {
                    code:1,
                    msg:'登录成功',
                    user
                }
                return ctx.login(user)      /** 登录动作 **/
            }else{      /** 异常状态 **/
                ctx.body = {
                    code:0,
                    msg:info
                }
            }
        }
    })(ctx,next)
})

/** 验证码验证 **/
router.post('/verify',async (ctx,next)=>{
    let username = ctx.request.body.username
    const saveExpire = await Store.hget(`nodemail:${username}`,'expire')

    if(saveExpire && new Date().getTime() - saveExpire < 0){
        ctx.body = {
            code:-1,
            msg:'验证请求过于频繁'
        }
        return false
    }

    let transporter = nodeMailer.createTransport({
        host:Email.smtp.host,
        port:587,
        secure:false, /** 如果为true,监听405端口，false,则监听其他端口 **/
        auth:{
            user:Email.smtp.user,
            pass:Email.smtp.pass
        }

        
    })

    let mailConfig = {
        code:Email.smtp.code(),
        expire:Email.smtp.expire(),
        email:ctx.request.body.email,
        user:ctx.request.body.username
    }

    let mailOptions = {
        from:`'认证邮件' <${Email.smtp.user}>`,
        to:mailConfig.email,
        subject:'验证码',
        html:`您在美团网注册，您的注册码是${mailConfig.code}`
    }

    await transporter.sendMail(mailOptions,(error,info)=>{
        if(error){
            return console.log('error')
        }else{
            Store.hmset(`nodemail:${mailConfig.user}`,'code',mailConfig.code,
                        'expire',mailConfig.expire,
                        'email',mailConfig.email
            )
        }
    })

    ctx.body = {
        code:1,
        msg:'验证码已发送。可能会有延时，有效期一分钟'
    }
})

/** 退出 **/
router.get('/exit',async (ctx,next)=>{
    await ctx.logout()
    if(!ctx.isAuthenticated()){
        ctx.body = {
            code:1
        }
    }else{
        ctx.body = {
            code:-1
        }
    }
})

/** 获取用户名 **/
router.get('/getUser',async (ctx)=>{
    if(ctx.isAuthenticated()){
        const {
            username,
            email
        } = ctx.session.passport.user
        ctx.body = {
            user:username,
            email
        }
    }else{
        ctx.body = {
            user:'',
            email:''
        }
    }
})

export default router

