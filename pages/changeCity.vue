<template>
    <div class='change-city-wrap'>
        <city-search/>
        <hot-city/>
        <categroy/>
    </div>
</template>
<script>
import citySearch from '@/components/changeCity/citySearch.vue'
import hotCity from '@/components/changeCity/hotCity.vue'
import categroy from '@/components/changeCity/categroy.vue'
export default {
    components:{
        citySearch,
        hotCity,
        categroy
    }
}
</script>
<style lang="scss" scoped>
    @import '@/assets/css/changeCity/index.scss'
</style>


