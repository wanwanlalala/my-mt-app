<template>
    <el-row class='banner-container'>
        <el-col :span='5' class='side-nav-wrap'>
            <side-nav/>
        </el-col>
        <el-col :span='14' class='pic-nav-wrap'>
            <pic-nav/>
        </el-col>
        <el-col :span='5' class='user-center-wrap'>
            <user-center/>
        </el-col>
    </el-row>
</template>
<script>
import SideNav from './sideNav.vue'
import PicNav from './picNav.vue'
import UserCenter from './userCenter.vue'
export default {
    components:{
        SideNav,
        PicNav,
        UserCenter
    }
}
</script>
<style lang="scss" scoped>
      @import '@/assets/css/index/bannerContainer.scss';
</style>



