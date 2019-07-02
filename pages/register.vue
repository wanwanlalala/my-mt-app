<template>
    <div class='register'>
        <header class='header'>
            <div class='header-cont'>
                <nuxt-link to='\meituan' class='logo'></nuxt-link>
                <div class='go-login'>
                    <span>已有美团账号？</span>
                    <el-button size='mini' class='header-login-btn'>
                        <nuxt-link to="/login">登录</nuxt-link>
                       </el-button>
                </div>
            </div>
        </header>
        <main class='main'>
            <el-form ref="form" :model="form" :rules='rules' label-width="80px" class='main-form'>
                <el-form-item label="用户名"  prop='username'>
                    <el-input v-model="form.username"></el-input>
                </el-form-item>
                <el-form-item label="邮箱"  prop='email'>
                    <el-input v-model="form.email"></el-input>
                    <el-button size='mini' round @click='sendCode' maxlength='4' :disabled='isDisabled'>发送验证码</el-button>
                    <span class='send-tip'>{{sendTip}}</span>
                </el-form-item>
                <el-form-item label="验证码"  prop='code'>
                    <el-input v-model="form.code"></el-input>
                </el-form-item>
                <el-form-item label="创建密码"  prop='pwd'>
                    <el-input v-model="form.pwd" type='password'></el-input>
                </el-form-item>
                <el-form-item label="确认密码"  prop='cpwd'>
                    <el-input v-model="form.cpwd" type='password'></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button size='small' type="primary" @click="register" class='submit-btn'>同意以下协议并注册</el-button>
                    <div class='error-tip'>{{errorTip}}</div>
                </el-form-item>
                <el-form-item>
                    <nuxt-link to='http://www.meituan.com/about/terms'>《美团网用户协议》</nuxt-link>
                </el-form-item>
            </el-form>
        </main>
        <footer class='footer'>
            <p>
                <nuxt-link to='/meituan' class='footer-link'>©meituan.com</nuxt-link>
                <nuxt-link to="/meituan" class='footer-link'>京ICP证070791号</nuxt-link>
                京公网安备11010502025545号
            </p>
        </footer>
    </div>
</template>
<script>
import CryptoJS from 'crypto-js'        /** 加密库，密码等需要加密 **/
export default {
    layout:'blank',
    data(){
        return {
            form:{
                username:'',
                email:'',
                code:'',
                pwd:'',
                cpwd:''
            },
            sendTip:'',
            isDisabled:false,       /** 按钮是否有效 **/
            errorTip:'',
            rules:{
                username:[
                    { required: true, type:'string',message: '请输入用户名', trigger: 'blur' },
                ],
                email:[
                    { required: true, type:'email',message: '请输入邮箱地址', trigger: 'blur' }
                ],
                code:[
                    { required: true, message: '请输入验证码', trigger: 'blur' },
                ],
                pwd:[
                    { required: true, message: '请输入创建密码', trigger: 'blur' },
                ],
                cpwd:[
                    { required: true, message: '请输入确认密码', trigger: 'blur' },
                    {
                        validator:(rule,value,callback)=>{
                            if(value === ''){
                                callback(new Error('请再次输入密码！'))
                            }else if(value !== this.form.pwd){
                                callback(new Error('两次输入的密码不一致！'))
                            }else{
                                callback();
                            }
                        },
                        trigger:'blur'
                    }
                ]

            }
        }
    },
    methods:{
        sendCode(){
            console.log("发送验证码")
            const self = this;
            let namePass;
            let emailPass;
            if(self.timerid){
                return;
            }

            self.$refs.form.validateField('name',(valid) =>{
                namePass = valid
            })
            self.sendTip = ''

            if(namePass){       //用户名校验不通过
                return false;
            }

            self.$refs.form.validateField('emailPass',(valid) =>{
                emailPass = valid
            })

            if(emailPass){      //邮箱校验不通过
                return false;
            }

            self.$axios.post('/users/verify',{
                username:encodeURIComponent(self.form.username),
                email:self.form.email
            }).then(({status,data}) =>{
                if(status === 200 && data && data.code === 1){
                    let count = 60
                    self.sendTip = `已发送验证码，剩余${--count}秒`
                    self.isDisabled = true
                    self.timerid = setInterval(()=>{
                        self.sendTip = `已发送验证码，剩余${--count}秒`
                        if(count === 0){
                            self.isDisabled = false
                            clearInterval(self.timerid)
                        }
                    },1000);
                }else{
                    self.sendTip = data.msg
                }
            })
        },
        register(){
            const self = this;
            self.$refs.form.validate((valid) => {
                if(valid){
                    self.$axios.post('/users/signup',{
                        username:encodeURIComponent(self.form.username),
                        password:CryptoJS.MD5(self.form.pwd).toString(),    /** 必须用toString() **/
                        email:self.form.email,
                        code:self.form.code
                    }).then(({status,data}) => {
                        if(status === 200){
                            if(data && data.code === 1){
                                location.href = '/login'
                            }else{
                                self.errorTip = data.msg
                            }
                        }else{
                            self.errorTip = `服务器出错，错误码：${status}`
                        }

                        setTimeout(()=>{
                            self.errorTip = ''
                        },2000)
                    })
                }
            })
        }
    }
}
</script>
<style lang="scss" scoped>
    @import '@/assets/css/register.scss';
</style>


