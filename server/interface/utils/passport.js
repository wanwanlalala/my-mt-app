import passport from 'koa-passport'
import localStrategy from 'passport-local'
import UserModel from '../../dbs/models/users'

passport.use(new localStrategy(async function(username,password,done){   //注册策略
    let where = {
        username:username
    }

    let result = await UserModel.findOne(where)
    if(result != null){
        if(result.password === password){
            return done(null,result);
        }else{
            return done(null,false,'密码错误')
        }
    }else{
        return done(null,false,'用户不存在')
    }
}))

/** 用户进入时，自动通过session去验证 **/
passport.serializeUser(function(user,done){     /** 系列化，把用户对象存到session里 **/
    done(null,user)
})

passport.deserializeUser(function(user,done){       /** 反系列化，从session里取用户数据成对象 **/
    return done(null,user)
})

export default passport;

