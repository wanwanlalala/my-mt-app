<template>
    <div class='m-search-bar'>
        <el-row>
            <el-col :span='3'>
                <div class='header-logo'>
                    <nuxt-link to='/meituan' class='header-logo-img'>
                        <img src="../../../assets/img/public/header/logo.png" alt="logo">
                    </nuxt-link>
                </div>
            </el-col>
            <el-col :span='11' :offset='3'>
                <div class='search-box'>
                    <el-input placeholder='搜索商家或地点' class='search-input' v-model='searchVal' @focus='searchFocus' @blur='searchBlur' @input='searchInput'>
                        <el-button slot='append' icon="el-icon-search" class='search-button'></el-button>
                    </el-input>
                    <div class='search-focus'>
                        <ul class='hot-list' v-if='isHot'>
                            <li v-for='(item,idx) of this.$store.state.search.hotPlace' :key='idx' class='list-item'>
                                <nuxt-link :to="'/products?keyword=' + encodeURIComponent(item.name)" class='list-link'>{{item.name}}</nuxt-link>
                            </li>
                        </ul>
                        <ul class='search-list' v-if='isSearch'>
                            <li v-for='(item,idx) of searchList' :key='idx' class='list-item'>
                                <nuxt-link :to="'/products?keyword=' + encodeURIComponent(item.name)" class='list-link'>{{item.name}}</nuxt-link>
                            </li>
                        </ul>
                    </div>
                    <div class='suggest'>
                        <nuxt-link v-for='(item,idx) of this.$store.state.search.hotPlace' :key='idx' :to="'/products?keyword=' + encodeURIComponent(item.name)" class='suggest-link'>{{item.name}}</nuxt-link>
                    </div> 
                    <ul class='search-main-link clearfix'>
                        <li>
                            <nuxt-link to='/meituan' class='link-item waimai'>美团外卖</nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to='/meituan' class='link-item maoyan'>猫眼电影</nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to='/meituan' class='link-item hotel'>美团酒店</nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to='/meituan' class='link-item apartment'>民宿/公寓</nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to='/meituan' class='link-item bussess'>商家入驻</nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to='/meituan' class='link-item charity'>美团公益</nuxt-link>
                        </li>
                    </ul>
                </div> 
            </el-col>
            <el-col :span='7'></el-col>
        </el-row>
    </div>
</template>
<script>
import lodash from 'lodash'
export default {
    data(){
        return{
            searchVal:'',
            isFocus:false,
            searchList:[]
        }
    },
    methods:{
        searchFocus(){
            this.isFocus = true;
        },
        searchBlur(){
            //this.isFocus = false;
            let self = this;
            let timer = setTimeout(function(){      //设置延时，否则先触发blur事件，this.isFocus变为false，搜索列表会隐藏
                self.isFocus = false;
            },100);
        },
        searchInput:lodash.debounce(async function(){
            let self = this;
            let city = self.$store.state.geo.position.city.replace("市","")
            let {status,data:{top}} = await self.$axios('/search/top',{
                params:{
                    searchVal:self.searchVal,
                    city:city
                }
            })

            self.searchList = top.slice(0,10)
        },50)
    },
    computed:{
        isSearch(){
            return this.isFocus && this.searchVal !== ''
        },
        isHot(){
            return this.isFocus && this.searchVal === ''
        }
    }
}
</script>
<style lang="scss" scoped>
    @import '@/assets/css/public/header/searchBar.scss'
</style>

