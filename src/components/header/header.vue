<template>
    <div class="header">
      <div class="content-wrapper">
        <div class="avatar">
          <img :src="seller.avatar" width="64" height="64">
        </div>
        <div class="content">
          <div class="title">
            <span class="brand"></span>
            <span class="name">{{seller.name}}</span>
          </div>
          <div class="description">
            {{seller.description}}/{{seller.deliveryTime}}分钟送达
          </div>
          <div class="supports" v-if="seller.supports">
            <span class="icon" :class="supportClasses[seller.supports[0].type]"></span>
            <span class="text">{{seller.supports[0].description}}</span>
          </div>
        </div>
        <!--圆角按钮-->
        <div class="supports-count" v-if="seller.supports" @click="showMask(true)">
          <span class="count">{{seller.supports.length}}个</span>
          <span class="icon-keyboard_arrow_right"></span>
        </div>
      </div>
      <!--公告-->
      <div class="bulletin-wrapper" @click="showMask(true)">
        <span class="title"></span>
        <span class="text">
          {{seller.bulletin}}
        </span>
        <span class="icon-keyboard_arrow_right"></span>
      </div>
      <!--背景-->
      <div class="background">
        <img :src="seller.avatar" height="100%" width="100%">
      </div>
      <!--浮层-->
      <transition name="fade">
      <div class="mask" v-show="maskShow">
        <div class="mask-wrapper clearfix">
          <div class="mask-main">
            <h2 class="title">{{seller.name}}</h2>
            <!--小星星-->
            <div class="stars-wrapper">
              <star :score="seller.score" :size="48"></star>
            </div>
            <!--优惠信息-->
            <div class="info">
              <div class="line"></div>
              <div class="title">优惠信息</div>
              <div class="line"></div>
            </div>
            <!--优惠列表-->
            <ul class="info-list">
              <li class="item" v-for="support in seller.supports">
                <span class="icon" :class="supportClasses[support.type]"></span>
                <span class="text">{{support.description}}</span>
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
                {{seller.bulletin}}
              </p>
            </div>
          </div>
        </div>
        <!--底部按钮-->
        <div class="mask-footer" @click="showMask(false)">
          <span class="icon-close"></span>
        </div>
      </div>
      </transition>
    </div>
</template>
<script>
  import star from '../star/star.vue'

  export default {
    props: ['seller'],
    data () {
      return {
        maskShow: false,
        supportClasses: ['decrease', 'discount', 'guarantee', 'invoice', 'special']
      }
    },
    methods: {
      showMask (isshow) {
        this.maskShow = isshow
      }
    },
    components: {
      star
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"

  .header
    position relative
    background-color rgba(7,17,27,.5)
    color rgb(255,255,255)
    font-weight 200
    overflow hidden
    .content-wrapper
      position relative
      padding 24px 12px 18px 14px
      font-size 0
      .avatar
        display inline-block
        vertical-align top
        img
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
            vertical-align top
          .name
            margin-left 6px
            font-size 16px
            font-weight bold
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
      filter blur(10px)
      z-index -1
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
      &.fade-enter-active, &.fade-leave-active
        transition: opacity .5s
      &.fade-enter, &.fade-leave-to
        opacity 0
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
              font-size 14px
              font-weight 700
              line-height 14px
          .info-list //优惠新列表
            margin 24px auto 28px auto
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
            margin 24px auto 0 auto
            .text
              font-size 12px
              line-height 24px
      .mask-footer //底部退出按钮
        margin-top -64px
        text-align center
        .icon-close
          font-size 32px
          color rgba(255,255,255,.5)

</style>
