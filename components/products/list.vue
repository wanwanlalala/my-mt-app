<template>
    <div class="m-products-list">
        <dl>
            <dd v-for="item in nav" 
                :key="item.name" 
                :class="[item.name,item.active?'s-nav-active':'']"
                @click="selectNav(item)"
            >
                {{item.txt}}
            </dd>
        </dl>
        <ul>
            <product-item v-for="(item,idx) in list" :key="idx" :meta="item"/>
        </ul>
    </div>
</template>
<script>
import productItem from './productItem'
export default {
    props:{
        list:{
            type:Array,
            default(){
                return [];
            }
        }
    },
    data(){
        return {
            sortType:"s-default",
            nav: [
                {
                name: 's-default',
                txt: '智能排序',
                acitve: true
                }, {
                name: 's-price',
                txt: '价格最低',
                active: false
                }, {
                name: 's-visit',
                txt: '人气最高',
                active: false
                }, {
                name: 's-comment',
                txt: '评价最高',
                active: false
                }
            ]
        }
    },
    components:{
        productItem
    },
    methods:{
        selectNav(item){
            this.sortType = item.name;
            item.active = true;
        }
    }
}
</script>
<style lang="scss" scoped>
    @import '@/assets/css/products/list.scss';
</style>

