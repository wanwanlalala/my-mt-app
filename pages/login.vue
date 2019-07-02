<template>
    <div class='login'>
        <header class='header'>
            <nuxt-link to='/meituan' class='logo-link'></nuxt-link>
        </header>
        <main class='main clearfix'>
            <div class='left-pic'>
                <img src="@/assets/img/login/www.jpg" alt="美团网" width='480' height='370'>
            </div>
            <div class='right-form'>
                <p class='error-tip' v-show='errorTip'>
                    <i class='error-tip-icon'></i>
                    <span>{{errorTip}}</span>
                </p>
                <el-form ref="form" :model="form" :rules='rules' class='main-form'>
                    <p class='login-desc'>账号登录</p>
                    <el-form-item prop='username'>
                        <el-input v-model="form.username" placeholder="用户名" prefix-icon="profile">
                        </el-input>
                    </el-form-item>
                    <el-form-item  prop='pwd'>
                        <el-input type='password' v-model="form.pwd" placeholder="密码" class='login-pwd' prefix-icon="password">
                        </el-input>
                    </el-form-item>
                    <p class='forget-link'>
                        <nuxt-link to='/register'>忘记密码</nuxt-link>
                    </p>
                    <el-form-item>
                        <el-button size='small' type="primary" @click="onLogin" class='login-btn'>登录</el-button>
                    </el-form-item>
                    <p class='register-desc'>
                        还没有账号?
                        <nuxt-link to='/register'>免费注册</nuxt-link>
                    </p>
                </el-form>
            </div>
            
        </main>
        <footer class='footer'>
            <div class='footer-link-group'>
                <nuxt-link to="/meituan">关于美团</nuxt-link>
                <nuxt-link to="/meituan">加入我们</nuxt-link>
                <nuxt-link to="/meituan">商家入驻</nuxt-link>
                <nuxt-link to="/meituan">帮助中心</nuxt-link>
                <nuxt-link to="/meituan">美团手机版</nuxt-link>
            </div>
            <div class='footer-copyright'>
                ©2019 
                <nuxt-link to="/meituan">美团网团购</nuxt-link>
                meituan.com 
                <nuxt-link to="/meituan">京ICP证070791号</nuxt-link> 
                京公网安备11010502025545号
            </div>
        </footer>
    </div>
</template>
<script>
import CryptoJS from 'crypto-js'
export default {
    layout:'blank',
    data(){
        return {
            form:{
                username:'',
                pwd:''
            },
            rules:{
                username:[
                    {require:true, type:'string', message:'请输入用户名',triger:'blur'},
                ], 
                pwd:[
                    {require:true, type:'string', message:'请输入密码',triger:'blur'},
                ]
            },
            errorTip:''
        }
    },
    methods:{
        onLogin(){
            const self = this
            self.$refs.form.validate((valid) =>{
                if(valid){
                    self.$axios.post('users/signin',{
                        username: encodeURIComponent(self.form.username),
                        password:CryptoJS.MD5(self.form.pwd).toString()
                    }).then(({status,data})=>{
                        if(status === 200){
                            if(data && data.code === 1){
                                location.href = '/'
                            }else{
                                self.errorTip = data.msg
                            }
                        }else{
                            self.errorTip = `服务器出错，错误码:${status}`
                        }

                        setTimeout(() => {
                            self.errorTip = ''
                        },3000)
                    })
                }
            })
        }
    }
}
</script>
<style lang="scss" scoped>
    @import '@/assets/css/login.scss'
</style>

