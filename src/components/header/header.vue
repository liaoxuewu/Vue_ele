<template>
    <div class="header">
      <div class="content-wrapper">
        <div class="avatar">
          <img src="http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg" alt="avatar">
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
            <span class="text">在线支付，满28减5，满50减10</span>
          </div>
        </div>
        <!--圆角按钮-->
        <div class="supports-count">
          <span class="count">5个</span>
          <span class="icon-keyboard_arrow_right"></span>
        </div>
      </div>
      <!--公告-->
      <div class="bulletin-wrapper">
        <span class="title"></span>
        <span class="text">
          粥品香坊其烹饪粥料的秘方源于中国千年古法，在融和现代制作工艺，由世界烹饪大师屈浩先生领衔研发。坚守纯天然、0添加的良心品质深得消费者青睐，发展至今成为粥类的引领品牌。是2008年奥运会和2013年园博会指定餐饮服务商。
        </span>
        <span class="icon-keyboard_arrow_right"></span>
      </div>
      <!--背景-->
      <div class="background">
        <img src="http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg" height="100%" width="100%">
      </div>
      <!--浮层-->
      <div class="mask">
        <div class="mask-wrapper">
          <div class="mask-main">
            <h2 class="title">粥品香坊（回龙观）</h2>
            <!--小星星-->
            <div class="stars-wrapper">
              <div class="stars stars-48">
                <span class="star on"></span>
                <span class="star on"></span>
                <span class="star on"></span>
                <span class="star half"></span>
                <span class="star off"></span>
              </div>
            </div>
            <!--优惠信息-->
            <div class="info">
              <div class="line"></div>
              <div class="title">优惠信息</div>
              <div class="line"></div>
            </div>
            <!--优惠列表-->
            <ul class="info-list">
              <li class="item">
                <span class="icon decrease"></span>
                <span class="text">在线支付满28减5，满50减10</span>
              </li>
              <li class="item">
                <span class="icon discount"></span>
                <span class="text">单人精彩赛</span>
              </li>
              <li class="item">
                <span class="icon guarantee"></span>
                <span class="text">清肺雪梨汤8折抢购</span>
              </li>
              <li class="item">
                <span class="icon invoice"></span>
                <span class="text">特价饮品八折抢购</span>
              </li>
              <li class="item">
                <span class="icon special"></span>
                <span class="text">单人特色套餐</span>
              </li>
            </ul>
            <!--商家公告-->
            <div class="info">
              <div class="line"></div>
              <div class="title">商家公告</div>
              <div class="line"></div>
            </div>
            <!--公告信息-->
            <div class="bulletin">
              <p class="text">
                粥品香坊其烹饪粥料的秘方源于中国千年古法，在融和现代制作工艺，由世界烹饪大师屈浩先生领衔研发。坚守纯天然、0添加的良心品质深得消费者青睐，发展至今成为粥类的引领品牌。是2008年奥运会和2013年园博会指定餐饮服务商。
              </p>
            </div>
          </div>
        </div>
        <!--底部按钮-->
        <div class="mask-footer">
          <span class="icon-close"></span>
        </div>
      </div>
    </div>
</template>
<script>
  export default {

  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"

  .header
    position relative
    //background-color yellowgreen
    color rgb(255,255,255)
    font-weight 200
    overflow hidden
    .content-wrapper
      position relative
      margin 24px 12px 18px 14px
      .avatar
        display inline-block
        vertical-align top
        img
          width 64px
          height 64px
          border-radius 2px
      .content
        display inline-block
        margin-left 16px
        .title
          margin 2px 0 8px 0
          .brand
            display inline-block
            width 30px
            height 18px
            bg-image(brand)
            background-size 30px 18px
            background-repeat no-repeat
            vertical-align middle
          .name
            margin-left 6px
            font-size 16px
            line-height 18px
        .description
          font-size 12px
          line-height 12px
        .supports
          margin 10px 0 2px 0
          .icon
            display inline-block
            width 12px
            height 12px
            background-size 12px 12px
            background-repeat no-repeat
            vertical-align middle
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
      .supports-count //圆角按钮
        position absolute
        right 12px
        bottom 15px
        height 10px
        line-height 10px
        background-color rgba(0,0,0,.2)
        padding 7px 8px
        border-radius 10px
        .count
          font-size 10px
          line-height 12px
        .icon-keyboard_arrow_right
          font-size 10px
          line-height 10px
    .bulletin-wrapper //公告
      position relative
      overflow hidden
      text-overflow ellipsis
      white-space nowrap
      padding 0 22px 0 12px
      background-color rgba(7,17,27,.2)
      .title
        display inline-block
        width 22px
        height 12px
        background-size 22px 12px
        background-repeat no-repeat
        bg-image(bulletin)
        vertical-align middle
      .text
        font-size 10px
        line-height 28px
      .icon-keyboard_arrow_right
        position absolute
        right 12px
        bottom 0
        font-size 10px
        line-height 28px
    .background //背景
      position absolute
      top 0
      left 0
      z-index -1
      filter blur(10px)
      width 100%
      height 100%
    .mask //浮层
      position fixed
      z-index 100
      top 0
      left 0
      width 100%
      height 100%
      background-color rgba(7,17,27,.8)
      overflow auto
      .mask-wrapper
        min-height 100%
        .mask-main
          padding 64px 36px
          .title
            text-align center
            font-size 16px
            font-weight 700
            line-height 16px
          .stars-wrapper //评星
            margin 16px 0 28px 0
            .stars
              text-align center
              height 24px
              .star
                display inline-block
                background-repeat no-repeat
              &.stars-48
                .star
                  margin-right 15px
                  width 20px
                  height 20px
                  background-size 20px 20px
                  &.last-child
                    margin-right 0
                  &.on
                    bg-image('../star/star48_on')
                  &.half
                    bg-image('../star/star48_half')
                  &.off
                    bg-image('../star/star48_off')
              &.stars-36
              .star
                margin-right 12px
                width 15px
                height 15px
                background-size 15px 15px
                &.last-child
                  margin-right 0
                &.on
                  bg-image('../star/star36_on')
                &.half
                  bg-image('../star/star36_half')
                &.off
                  bg-image('../star/star36_off')
              &.stars-24
                margin-right 10px
                .star
                  width 10px
                  height 10px
                  background-size 10px 10px
                  &.last-child
                    margin-right 0
                  &.on
                    bg-image('../star/star24_on')
                  &.half
                    bg-image('../star/star24_half')
                  &.off
                    bg-image('../star/star24_off')

          .info
            display flex
            margin 0 auto
            .line
              position relative
              top 8px
              flex 1
              height 2px
              background-color rgba(255,255,255,.2)
            .title
              margin 0 12px
          .info-list //优惠新列表
            margin 24px 0 28px 0
            .item
              margin-bottom 12px
              &.last-child
                margin-bottom 0
              .text
                font-size 12px
                font-weight 200
                line-height 12px
              .icon
                display inline-block
                width 16px
                height 16px
                background-size 16px 16px
                background-repeat no-repeat
                vertical-align top
                &.decrease
                  bg-image(decrease_2)
                &.discount
                  bg-image(discount_2)
                &.guarantee
                  bg-image(guarantee_2)
                &.invoice
                  bg-image(invoice_2)
                &.special
                  bg-image(special_2)
          .bulletin //公告详情
            margin 24px 12px auto 12px
            .text
              font-size 12px
              line-height 24px
      .mask-footer //底部退出按钮
        margin-bottom -64px
        text-align center
        .icon-close
          font-size 32px
          color rgba(255,255,255,.5)

</style>
