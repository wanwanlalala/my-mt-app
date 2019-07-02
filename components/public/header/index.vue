<template>
    <div class='m-header'>
        <top-bar/>
        <search-bar/>
    </div>
</template>
<script>
import TopBar from '@/components/public/header/topBar'
import SearchBar from '@/components/public/header/searchBar'
export default {
    components:{
        TopBar,
        SearchBar
    }
}
</script>
<style lang="scss" scoped>
    @import '@/assets/css/public/header/index.scss';
</style>


