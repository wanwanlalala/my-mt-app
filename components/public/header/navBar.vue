<template>
    <div class='header-nav-bar'>
        <ul class='clearfix'>
            <li class='nav-list my-mt'>
                <nuxt-link to='/myMt' class='header-nav-link my-mt-link'>我的美团</nuxt-link>
                <dl class='mt-list'>
                    <dd>
                        <nuxt-link to='/order' class='header-nav-link'>我的订单</nuxt-link>
                    </dd>
                    <dd>
                        <nuxt-link to='/collect' class='header-nav-link'>我的收藏</nuxt-link>
                    </dd>
                    <dd>
                        <nuxt-link to='/voucher' class='header-nav-link'>抵用券</nuxt-link>
                    </dd>
                    <dd>
                        <nuxt-link to='/userSetting' class='header-nav-link'>账户设置</nuxt-link>
                    </dd>
                </dl>
            </li>
            <li class='nav-list'>
                <nuxt-link to='/phoneApp' class='header-nav-link'>手机APP</nuxt-link>
            </li>
            <li class='nav-list user-center'>
                <span class='header-nav-link user-center-link'>商家中心</span>
                <dl class='user-center-list'>
                    <dd>
                        <nuxt-link to='/busCenter' class='header-nav-link'>登录商家中心</nuxt-link>
                    </dd>
                    <dd>
                        <nuxt-link to='/shouyin' class='header-nav-link'>美团智能收银</nuxt-link>
                    </dd>
                    <dd>
                        <nuxt-link to='/cooerate' class='header-nav-link'>我想合作</nuxt-link>
                    </dd>
                    <dd>
                        <nuxt-link to='/mobile' class='header-nav-link'>手机免费开店</nuxt-link>
                    </dd>
                    <dd>
                        <nuxt-link to='/daili' class='header-nav-link'>餐饮代理商招募</nuxt-link>
                    </dd>
                    <dd>
                        <nuxt-link to='/kaipiao' class='header-nav-link'>商家申请开票</nuxt-link>
                    </dd>
                    <dd>
                        <nuxt-link to='/paidui' class='header-nav-link'>免费合作美团排队</nuxt-link>
                    </dd>
                </dl>
            </li>
            <li class='nav-list web-nav'>
                <span class='header-nav-link'>网站导航</span>
                <el-row class='web-nav-wrap'>
                    <el-col :span='14' class="web-content">
                        <el-row :gutter='20'>
                            <el-col :span='10' class='hotel'>
                                <dl class='clearfix'>
                                    <dt>酒店旅游</dt>
                                    <dd><nuxt-link to='/detail' class='header-nav-link'>国际机票</nuxt-link></dd>
                                    <dd><nuxt-link to='/detail' class='header-nav-link'>火车票</nuxt-link></dd>
                                    <dd><nuxt-link to='/detail' class='header-nav-link'>榛果民宿</nuxt-link></dd>
                                    <dd><nuxt-link to='/detail' class='header-nav-link'>经济型酒店</nuxt-link></dd>
                                    <dd><nuxt-link to='/detail' class='header-nav-link'>主题酒店</nuxt-link></dd>
                                    <dd><nuxt-link to='/detail' class='header-nav-link'>商务酒店</nuxt-link></dd>
                                    <dd><nuxt-link to='/detail' class='header-nav-link'>公寓</nuxt-link></dd>
                                    <dd><nuxt-link to='/detail' class='header-nav-link'>豪华酒店</nuxt-link></dd>
                                    <dd><nuxt-link to='/detail' class='header-nav-link'>客栈</nuxt-link></dd>
                                    <dd><nuxt-link to='/detail' class='header-nav-link'>青年旅社</nuxt-link></dd>
                                    <dd><nuxt-link to='/detail' class='header-nav-link'>度假酒店</nuxt-link></dd>
                                    <dd><nuxt-link to='/detail' class='header-nav-link'>别墅</nuxt-link></dd>
                                    <dd><nuxt-link to='/detail' class='header-nav-link'>农家院</nuxt-link></dd>
                                </dl>
                            </el-col>
                            <el-col :span='8' class='food'>
                                <dl class='clearfix'>
                                    <dt>吃美食</dt>
                                    <dd><nuxt-link to='/detail' class='header-nav-link'>烤鱼</nuxt-link></dd>
                                    <dd><nuxt-link to='/detail' class='header-nav-link'>特色小吃</nuxt-link></dd>
                                    <dd><nuxt-link to='/detail' class='header-nav-link'>烧烤</nuxt-link></dd>
                                    <dd><nuxt-link to='/detail' class='header-nav-link'>自助餐</nuxt-link></dd>
                                    <dd><nuxt-link to='/detail' class='header-nav-link'>火锅</nuxt-link></dd>
                                    <dd><nuxt-link to='/detail' class='header-nav-link'>代金券</nuxt-link></dd>
                                </dl>
                            </el-col>
                            <el-col :span='6' class='movie'>
                                <dl class='clearfix'>
                                    <dt>热映电影</dt>
                                    <dd><nuxt-link to='/detail' class='header-nav-link'>热门影院</nuxt-link></dd>
                                    <dd><nuxt-link to='/detail' class='header-nav-link'>热映电影口碑榜</nuxt-link></dd>
                                    <dd><nuxt-link to='/detail' class='header-nav-link'>最受期待电影</nuxt-link></dd>
                                    <dd><nuxt-link to='/detail' class='header-nav-link'>国内票房榜</nuxt-link></dd>
                                    <dd><nuxt-link to='/detail' class='header-nav-link'>北美票房榜</nuxt-link></dd>
                                    <dd><nuxt-link to='/detail' class='header-nav-link'>电影排行榜</nuxt-link></dd>
                                </dl>
                            </el-col>
                        </el-row>
                    </el-col>
                    <el-col :span='8' :offset='2' class='mobile-app'>
                        <dl>
                            <dt>手机APP</dt>
                            <dd><nuxt-link to='/meituan'><img src="../../../assets/img/public/header/meituan.png" alt="美团"></nuxt-link></dd>
                            <dd><nuxt-link to='/waimai'><img src="../../../assets/img/public/header/waimai.png" alt="外卖"></nuxt-link></dd>
                            <dd><nuxt-link to='/zhenguo'><img src="../../../assets/img/public/header/zhenguo.png" alt="榛果"></nuxt-link></dd>
                            <dd><nuxt-link to='/dianping'><img src="../../../assets/img/public/header/dianping.png" alt="点评"></nuxt-link></dd>
                            <dd><nuxt-link to='/maoyan'><img src="../../../assets/img/public/header/maoyan.png" alt="猫眼"></nuxt-link></dd>
                        </dl>
                    </el-col>
                </el-row>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
}
</script>
<style lang="scss" scoped>
    @import '@/assets/css/public/header/navBar.scss'
</style>


