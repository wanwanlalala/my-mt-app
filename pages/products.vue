<template>
    <el-row class="page-product">
        <el-col :span="19">
            <crumbs :keyword="keyword"/>
            <categroy :types="types" :areas="areas"/>
            <list :list="list"/>
        </el-col>
        <el-col :span="5">
            <a-map v-if="point.length" :width="230" :height="290" :id="id" :point="point"/>
        </el-col>
    </el-row>   
</template>
<script>
import crumbs from '@/components/products/crumbs'
import categroy from '@/components/products/categroy'
import list from '@/components/products/list'
import AMap from '@/components/public/map'
export default {
    components:{
        crumbs,
        categroy,
        list,
        AMap
    },
    data(){
        return {
            keyword:"",
            list:[],
            types:[],
            areas:[],
            point:[114.06667,22.61667],
            id:"mapContainer"
        }
    },
    methods:{
        selectNav(item){
            this.sortType = item.name;
            item.active = true;
        }
    },
    async asyncData(ctx){
        let keyword = ctx.query.keyword;
        let city = ctx.store.state.geo.position.city;

        let {status,data:{count,pois}} = await ctx.$axios.get('/search/resultsByKeywords',{
            params:{
                city,
                keyword
            }
        })

        let {status:categoryStatus,data:{areas,types}} = await ctx.$axios.get('/categroy/crumbs',{
            params:{
                city
            }
        })
    
        if(status === 200 && categoryStatus === 200){
            return {
                list:pois.filter((item) => item.photos.length).map((item)=>{
                    return {
                        type:item.type,
                        img:item.photos[0].url,
                        name:item.name,
                        comment:Math.floor(Math.random() * 10000),
                        rate:Number(item.biz_ext.rating),
                        price:Number(item.biz_ext.cost),
                        scene:item.tag,
                        tel:item.tel,
                        status:'可订明日',
                        location:item.location,
                        module:item.type.split(";")[0]
                    }              
                }),
                keyword,
                areas:areas.filter((item)=>item.type !== '').slice(0,5),
                types:types.filter((item)=>item.type !== '').slice(0,5),
                point:(pois.find(item=>item.location).location || "").split(",")
            }
        }
    }
}
</script>
<style lang="scss" scoped>
    @import '@/assets/css/products/index.scss';
</style>

