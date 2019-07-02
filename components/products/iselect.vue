<template>
    <div class="m-product-select">
        <dl class="tab">
            <dt>{{name}}<i class="el-icon-arrow-down el-icon--right"/></dt>
            <dd>
                <h4>{{name}}</h4>
                <span v-for="(item,idx) in filterList" :key="idx">{{item}}</span>
            </dd>
        </dl>
    </div>
</template>
<script>
export default {
    props:{
        name:{
            type:String,
            default(){
                return "";
            }
        },
        list:{
            type:Array,
            default(){
                return [];
            }
        }
    },
    computed:{
        filterList:function(){
            return this.list.slice(0,48);
        }
    }
}
</script>
<style lang="scss" scoped>
    @import '@/assets/css/products/iselect.scss';
</style>





