<template>
  <div class="header">
    <div class="content-wrapper">
      <div class="avatar">
        <img src="http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg" width="64" height="64">
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">粥品香坊（回龙观）</span>
        </div>
        <div class="description">
          蜂鸟专送/38分钟送达
        </div>
        <div class="supports">
          <span class="icon special"></span>
          <span class="text">在线支付 满28送张晓飞</span>
        </div>
      </div>
      <div class="supports-count">
        <span class="count">5个</span>
        <span class="icon-keyboard_arrow_right"></span>
      </div>
    </div>
    <div class="bulletin-wrapper">
      <span class="bulletin-title"></span>
      <span class="bulletin-text">
        粥品香坊其烹饪粥料的秘方源于中国千年古法，在融和现代制作工艺，由世界烹饪大师屈浩先生领衔研发。坚守纯天然、0添加的良心品质深得消费者青睐，发展至今成为粥类的引领品牌。是2008年奥运会和2013年园博会指定餐饮服务商。
      </span>
      <span class="icon-keyboard_arrow_right"></span>
    </div>
    <div class="background">
      <img src="http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg" width="100%" height="100%">
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/styuls/mixin.styl"
  .header
    position relative
    color #fff
    background-color rgba(7,17,27,.5)
    overflow hidden
    .content-wrapper
      position relative
      padding 24px 12px 18px 24px
      font-size 0
      .avatar
        display inline-block
        vertical-align top
      .content
        display inline-block
        margin-left 16px
        .title
          margin 2px 0  8px 0
          .brand
            display inline-block
            width 30px
            height 18px
            bg-image(brand)
            background-size 30px 18px
            background-repeat no-repeat
            vertical-align top
           /* background-image url(brand@2x.png)
            background-image url(brand@3x.png)*/
          .name
            margin-left 6px
            font-size 16px
            font-weight bold
            line-height 18px
        .description
          font-size 12px
          line-height 12px
          font-weight 200
        .supports
          margin 10px 0 2px 0
          .icon
            display inline-block
            width 12px
            height 12px
            background-size 12px 12px
            background-repeat no-repeat
            vertical-align top
            &.decrease
              bg-image(decrease_1)
            &.discount
              bg-image(discount_1)
            &.guarantee
              bg-image(guarantee_1)
            &.invoice
              bg-image(invoice_1)
            &.special
              bg-image(special_1)
          .text
            margin-left 4px
            font-size 10px
            line-height 12px
            font-weight 200
      .supports-count
        position absolute
        right 12px
        bottom 15px
        height 10px
        line-height 10px
        padding 7px 8px
        border-radius 10px
        background-color rgba(0,0,0,.2)
        .count
          font-size 10px
          line-height 10px
          font-weight 200
        .icon-keyboard_arrow_right
          font-size 10px
          line-height 10px
          font-weight 200
    .bulletin-wrapper
      position relative
      overflow hidden
      text-overflow ellipsis
      white-space nowrap
      padding 0 22px 0 12px
      background-color rgba(7,17,27,.2)
      .bulletin-title
        display inline-block
        width 22px
        height 12px
        vertical-align top
        margin-top 7px
        background-size 22px 12px
        background-repeat no-repeat
        bg-image(bulletin)
      .bulletin-text
        font-size 10px
        line-height 28px
        font-weight 200
      .icon-keyboard_arrow_right
        position absolute
        right 12px
        bottom 0
        font-size 10px
        line-height 28px
        font-weight 200
    .background
      position absolute
      left 0
      top 0
      filter:blur(10px)
      z-index -1
      width 100%
      height 100%

</style>
