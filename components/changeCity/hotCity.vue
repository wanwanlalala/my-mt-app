<template>
    <dl class='hot-city-wrap clearfix'>
        <dt class='title'>热门城市：</dt>
        <dd v-for='item of hotCity' :key='item.value' class='city-item'>
            <nuxt-link to="/meituan" class='item-link'>{{item.value}}</nuxt-link>
        </dd>
    </dl>
</template>
<script>
export default {
    data(){
        return {
            hotCity:[]
        }
    },
    async mounted(){
        let {status,data:{hotCity}} = await this.$axios.get('/geo/hotCity')
        if(status === 200){
            this.hotCity = hotCity.map(item =>{
                return {
                    value:item.name === '市辖区' ? item.province : item.name
                }
            })
        }else{
            this.hotCity = []
        }
        
    }
}
</script>
<style lang="scss" scoped>
    @import '@/assets/css/changeCity/hotCity.scss'
</style>