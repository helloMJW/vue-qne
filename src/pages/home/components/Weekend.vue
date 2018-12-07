<template>
  <div>
    <div class="title">周末去哪</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key='item.id' >
        <div class="item-img-wrapper">
          <img class="item-img" :src='item.imgUrl' alt="">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  data () {
    return {
      recommendList: [{
        id: '001',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1811/f8/29dfa785277839.jpg_r_640x214_7d051523.jpg',
        title: '阳江温泉知多少',
        desc: '海洋奇梦馆海洋奇梦馆海洋奇梦馆海洋洋奇梦馆海洋洋奇梦馆海洋'
      }, {
        id: '002',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1811/f8/29dfa785277839.jpg_r_640x214_7d051523.jpg',
        title: '海洋奇s梦馆',
        desc: '海洋奇梦馆海洋奇梦馆海洋奇梦馆海洋洋奇梦馆海洋洋奇梦馆海洋'
      }, {
        id: '003',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1811/f8/29dfa785277839.jpg_r_640x214_7d051523.jpg',
        title: '海洋奇a梦馆',
        desc: '海洋奇梦馆海洋奇梦馆海洋奇梦馆海洋洋奇梦馆海洋洋奇梦馆海洋'
      }, {
        id: '004',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1811/f8/29dfa785277839.jpg_r_640x214_7d051523.jpg',
        title: '阳江温泉知多少',
        desc: '海洋奇梦馆海洋奇梦馆海洋奇梦馆海洋洋奇梦馆海洋洋奇梦馆海洋'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
.title
  margin-top: .2rem
  line-height: .8rem
  background: #eee
  text-index: .2rem
.item-img-wrapper
  overflow: hidden
  height: 0
  padding-bottom: 33.9%
  .item-img
    width: 100%
.item-info
  padding: .1rem
  .item-title
    line-height: .54rem
    font-size: .32rem
    ellipsis()
  .item-desc
    line-height: .4rem
    color: #ccc
    ellipsis()
</style>
