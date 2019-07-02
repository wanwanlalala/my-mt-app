export default {
    dbs:'mongodb://127.0.0.1:27017/mtTest',         //mtTest为数据库名称 
    redis:{
        get host(){
            return '127.0.0.1'
        },
        get port(){
            return 6379
        }
    },
    smtp:{
        get host(){
            return 'smtp.qq.com'
        },
        get user(){
            return '1174702396@qq.com'
        },
        get pass(){
            return 'ieaclsylldejfjfb'       /** snxijnrxygikbabd  **/
        },
        get code(){     /** 邮箱发送的验证码码 **/
            return () => {
                return Math.random().toString(16).slice(2,6).toUpperCase()
            }
        },
        get expire(){       /** 验证码有效时间，一分钟内有效 **/
            return () =>{
                return new Date().getTime() + 60*1000
            }
        }
    },
}