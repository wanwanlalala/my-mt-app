<template>
    <div class='side-nav-wrap'>
        <div class='side-nav'>
        <dl @mouseleave='unselect'>
            <dt class='main-title'>全部分类</dt>
            <dd v-for='(item,idx) of $store.state.home.menu' :key='idx' class='side-nav-item' @mouseenter='selectItem(item)'>
                <i class='side-nav-icon' :class='item.type'></i>
                <nuxt-link :to='"/meituan"' class='side-nav-link'>{{item.name}}</nuxt-link>
                <i class='el-icon-arrow-right arrow-right'></i>
            </dd>
        </dl>
        </div>
        <div class='nav-detail' v-if='type !== ""' @mouseenter='detailEnter' @mouseleave="detailOut">
            <dl v-for='(item,idx) of detailData[0].child' :key='idx' class='nav-detail-item'>
                <dt>
                    <h3 class='nav-detail-title'>{{item.title}}</h3>
                    <nuxt-link to='/meituan' class='more-link'>更多 &gt;</nuxt-link>
                </dt>
                <dd>
                    <nuxt-link v-for='(ite,id) of item.child' :key='id' to='/meituan' class='item-list'>
                        {{ite}}
                    </nuxt-link>
                </dd>
            </dl>
        </div>
    </div>
    
    
</template>
<script>
export default {
    data(){
        return {
            navData:[
                {
                    "name": "丽人 / 美发 / 医学美容",
                    "type": "hair",
                    "child": [
                        {
                            "title": "丽人",
                            "child": [
                                "美发",
                                "美甲美睫",
                                "美容美体",
                                "医学美容",
                                "瑜伽舞蹈",
                                "瘦身纤体",
                                "韩式定妆",
                                "祛痘纹身",
                                "化妆品"
                            ]
                        }
                    ]
                }
            ],
            type:''
        }
    },
    computed:{
        detailData:function(){
            return this.$store.state.home.menu.filter(item => item.name === this.type)
        }
    },
    methods:{
        selectItem(item){
            this.type = item.name;
        },
        unselect(event){
            const self = this;
            this.timer = setTimeout(function(){
                self.type = '';
            },150);
        },
        detailEnter(){
            clearTimeout(this.timer);
        },
        detailOut(){
            this.type = '';
        }
    }
}
</script>
<style lang="scss" scoped>
    @import '../../assets/css/index/sideNav.scss' 
</style>


