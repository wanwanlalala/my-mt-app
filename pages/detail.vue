<template>
    <div class="page-detail">
        <el-row>
            <el-col :span="24">
                <crumbs :type="type" :keyword="keyword"/>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                <summa :meta="product"/>
            </el-col>
        </el-row>
        <el-row class="m-title">
            <el-col :span="24">
                <h3>商家团购及优惠</h3>
            </el-col>
        </el-row>
        <el-row v-if="canOrder || !login">
            <el-col :span="24">
                <list :list="list" v-if="login"/>
                <div v-else class="deal-need-login">
                    <img src="//p0.meituan.net/codeman/56a7d5abcb5ce3d90fc91195e5b5856911194.png" alt="登录查看">
                    <span>请登录后查看详细团购优惠</span>
                    <el-button type="primary" round>
                        <a href="/login">立即登录</a>
                    </el-button>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import crumbs from '@/components/detail/crumbs'
import summa from '@/components/detail/summary'
import list from '@/components/detail/list'
export default {
    components:{
        crumbs,
        summa,
        list
    },
    data(){
        return {
            type:"",
            detail:"",
            product:{},
            list:[],
            login:""
        }
    },
    computed:{
        canOrder(){
            return this.list.filter(item=>item.photos.length).length
        }
    },
    async asyncData(ctx){
        let {keyword,type} = ctx.query;
        let {status,data:{product,more:list,login}} = await ctx.$axios.get("/search/products",{
            params:{
                keyword,
                type,
                city:ctx.store.state.geo.position.city
            }
        })

        if(status === 200){
            return {
                keyword,
                type,
                product,
                list,
                login
            }
        }else{
            return {
                keyword,
                type,
                product:{},
                list:[],
                login:false
            }
        }
    }
}
</script>
<style lang="scss">
    @import '@/assets/css/detail/index.scss';
</style>


