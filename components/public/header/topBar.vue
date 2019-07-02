<template>
    <el-row class='m-top-bar'>
        <el-col :span='9'>
           <el-row :gutter="10">
               <el-col :span='17'>
                   <geo/>
               </el-col>
               <el-col :span='7'>
                   <user/> 
               </el-col>
           </el-row>
        </el-col>
        <el-col :span='8' :offset='7'>
            <nav-bar/>
        </el-col>
    </el-row>
</template>
<script>
import Geo from './geo.vue'
import User from './user.vue'
import NavBar from './navBar.vue'
export default {
    components:{
        Geo,
        User,
        NavBar
    }
}
</script>
<style lang="scss" scoped>
    @import '@/assets/css/public/header/topBar.scss';
</style>


