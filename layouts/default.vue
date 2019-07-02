<template>
  <div>
    <el-container>
      <el-header class='header-wrap' style='height:auto;'>
        <my-header></my-header>
      </el-header>
      <el-main class='container-wrap'>
          <nuxt />
      </el-main>
      <el-footer class='footer-wrap' style='height:auto;'>
        <my-footer></my-footer>
      </el-footer>
    </el-container>
  </div>
</template>
<script>
import MyHeader from '@/components/public/header/index'
import MyFooter from '@/components/public/footer/index'
export default {
  components:{
    MyHeader,
    MyFooter
  }
}
</script>
<style lang="scss" scoped>
  @import '@/assets/css/public/layouts/default.scss';
</style>


