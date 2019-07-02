<template>
    <div class='m-geo'>
        <i class='el-icon-location'></i>{{$store.state.geo.position.city}}
        <nuxt-link to='/changeCity' class='change-city-link'>切换城市</nuxt-link>
        [
        <nuxt-link  v-for='(item,idx) of cityList' :key='idx' :to='item.urlHref' class='geo-city-list-link'>{{item.name}}</nuxt-link>
        ]
    </div>
</template> 
<script>
export default {
    data(){
        return {
            cityName:'北京',
            cityList:[{
                    name:'大厂回族自治县',
                    urlHref:'https://dachangzizhixian.meituan.com'
                },
                {
                    name:'廊坊',
                    urlHref:'https://lf.meituan.com/'
                },{
                    name:'固安县',
                    urlHref:'https://guanxian.meituan.com/'
                }
            ]
        }
    }
}
</script>
<style lang="scss" scoped>
    @import '@/assets/css/public/header/geo.scss'
</style>


