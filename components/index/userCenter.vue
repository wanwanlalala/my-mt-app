<template>
    <div class='user-center'>
        <div class='user-part user-operate'>
            <img src="@/assets/img/index/bannerContainer/avatar.jpg" alt="头像">
            <p class="desc"><span>Hi ! </span>你好</p>
            <el-button round><nuxt-link to="/login">注册</nuxt-link></el-button>
            <el-button round><nuxt-link to="/register">登录</nuxt-link></el-button>
        </div>
        <div class='user-part app-code'>
            <img src="//s1.meituan.net/bs/fe-web-meituan/60ac9a0/img/download-qr.png" alt="下载APP">
            <p class="imgDesc">美团APP手机版</p>
            <p class="addInfo"><span>1元起</span>吃喝玩乐</p>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    @import '@/assets/css/index/userCenter.scss'
</style>