<template>
  <div>
    <div class="banner" @click="handleBannerOnClick">
      <img class="banner-img" src="//img1.qunarzz.com/sight/p0/1502/15/15ca1d0eab6bf46c.water.jpg_600x330_1108fbd3.jpg" alt="">
      <div class="banner-info">
        <div class="banner-tittle">东部华侨城大侠谷</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe692;</span>
          39
        </div>
      </div>
    </div>
    <common-gallary
      :imgs="imgs"
      v-show="showGallary"
      @close="handleGallaryClose"
    ></common-gallary>
  </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
  name: 'DetailBanner',
  data () {
    return {
      showGallary: false,
      imgs: ['http://img1.qunarzz.com/sight/p0/201301/16/4593d3d5a27f445b93835fbb.jpg_r_800x800_8c52fe48.jpg', 'http://img1.qunarzz.com/sight/p0/1502/f7/f7d60ec7c9af477f.water.jpg_r_800x800_cdffead6.jpg']
    }
  },
  methods: {
    handleBannerOnClick () {
      this.showGallary = true
    },
    handleGallaryClose () {
      this.showGallary = false
    }
  },
  components: {
    CommonGallary
  }
}
</script>

<style lang="stylus" scoped>
  .banner
    position: relative
    overflow: hidden
    height: 0
    padding-bottom: 55%
    .banner-img
      width: 100%
    .banner-info
      display: flex
      position: absolute
      left: 0
      right: 0
      bottom: 0
      line-height: .6rem
      color: #fff
      background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
      .banner-tittle
        flex: 1
        font-size: .32rem
        padding: 0 .2rem
      .banner-number
        padding: 0 .4rem
        height: .32rem
        line-height: .32rem
        margin-top: .14rem
        border-radius: .2rem
        background: rgba(0, 0, 0, .8)
        font-size: .24rem
        .banner-icon
          font-size: .24rem
</style>
