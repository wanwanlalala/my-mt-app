<template>
    <div class="m-crumbs">
        <el-breadcrumb separator=">">
            <el-breadcrumb-item to="/">{{$store.state.geo.position.city.replace("市","")}}美团</el-breadcrumb-item>
            <el-breadcrumb-item to="/">{{$store.state.geo.position.city.replace("市","")}}{{keyword}}</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>
<script>
export default {
    props:{
        keyword:{
            type:String,
            default:""
        }
    }
}
</script>

