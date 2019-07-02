<template>
  <div class='page-index'>
    <banner-container />
    <content-wrap />
  </div>
</template>

<script>
import BannerContainer from '../components/index/bannerContainer.vue';
import ContentWrap from '../components/index/contentWrap.vue'
export default {
  components:{
    BannerContainer,
    ContentWrap
  }
}
</script>
