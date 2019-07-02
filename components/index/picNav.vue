<template>
    <el-row :gutter='10' class='pic-nav'>
        <el-col :span='19' class='left'>
            <el-row class='top'>
                <el-col class='banner-pannel'>
                    <el-carousel trigger="click" class='banner-item-wrap' height='240px'>
                        <el-carousel-item v-for="item in picList" :key="item.url">
                            <img :src='item.img'>
                        </el-carousel-item>
                    </el-carousel>
                </el-col>
            </el-row>
            <el-row class='bottom'>
                <el-col :span='12' class='icon hotel'>
                </el-col>
                <el-col :span='12' class='icon konwledge'>
                </el-col>
            </el-row>
        </el-col>
        <el-col :span='5' class='right'>
            <div class='top'>
                <div class='icon life'></div>
            </div>
            <div class='bottom'>
                <div class='icon bussiness'></div>
            </div>
        </el-col>
    </el-row>
</template>
<script>
export default {
    data(){
        return {
            picList:[{
                alt: '住酒店',
                url: '#hotel',
                img: require('@/assets/img/index/bannerContainer/banner_hotel.png')
            }, {
                alt: '吃美食',
                url: '#food',
                img: require('@/assets/img/index/bannerContainer/banner_food.jpg')
            }, {
                alt: '点外卖',
                url: '#waimai',
                img: require('@/assets/img/index/bannerContainer/banner_waimai.jpg')
            }, {
                alt:'看电影',
                url: '#movie',
                img: require('@/assets/img/index/bannerContainer/banner_movie.jpg')
            }, {
                alt: '商家排队',
                url: '#paidui',
                img: require('@/assets/img/index/bannerContainer/banner_paidui.jpg')
            }]
        }
    }
}
</script>
<style lang="scss" scoped>
    @import '@/assets/css/index/picNav.scss'
</style>