<template>
    <div>
        <template v-if='user === ""'>
            <nuxt-link to='/login' class='user-link login' v-if='user === ""'>立即登录</nuxt-link>
            <nuxt-link to='/register' class='user-link'>注册</nuxt-link>
        </template>
        <template v-else>
            <span>{{user}}</span>
            <nuxt-link to='/exit' class='user-link' @click='exit'>退出</nuxt-link>
        </template>
    </div>
</template>
<script>
export default {
    data(){
        return {
            user:''
        }
    },
    async mounted(){
        let {status,data:{user}} = await this.$axios.get('/users/getUser')
        if(status === 200){
            this.user = user
            console.log("user~~~~~~~~~~~~~~~~",user)
        }
    },
    methods:{
        async exit(){
            location.href = '/users/exit'
        }
    }
}
</script>
<style lang="scss" scoped>
    @import '@/assets/css/public/header/user.scss'
</style>


