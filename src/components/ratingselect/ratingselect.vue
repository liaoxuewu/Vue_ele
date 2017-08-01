<template>
    <div class="ratingselect">
      <!--评价的类型按钮，全部/满意/不满意-->
      <div class="rating-type border-1px">
        <span class="block positive" :class="{active:selectType===2}" @click="setType(2)">
          {{desc.all}}
          <span class="count">{{ratings.length}}</span>
        </span>
        <span class="block positive" :class="{active:selectType===0}" @click="setType(0)">
          {{desc.positive}}
          <span class="count">{{positiveLength}}</span>
        </span>
        <span class="block negative" :class="{active:selectType===1}" @click="setType(1)">
          {{desc.negative}}
          <span class="count">{{ratings.length-positiveLength}}</span>
        </span>
      </div>

      <!--选择有评价内容按钮-->
      <div class="switch" :class="{on: contentOnly}" @click="toggle">
        <span class="icon-check_circle"></span>
        <span class="text">只看有内容的评价</span>
      </div>
    </div>
</template>
<script>
  export default {
    props: {
      contentOnly: Boolean,
      selectType: Number, //0,1,2
      desc: Object,
      ratings: Array
    },

    computed: {
      positiveLength () {
        //对数组数据进行统计
        //reduce结果是最后一次遍历执行回调函数返回的结果
        //如果rating.rateType为0则加1，否则加0
        return this.ratings.reduce((preTotal,rating) => {
          return preTotal + (rating.rateType === 0 ? 1 : 0)
        },0)
      }
    },

    methods: {
      setType (type) {
        //触发setSelectType事件
        this.$emit('setSelectType',type)
      },
      toggle () {
        //触发toggleContentOnly事件
        this.$emit('toggleContentOnly')
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"

  .ratingselect
    .rating-type
      padding: 18px 0
      margin: 0 18px
      border-1px(rgba(7, 17, 27, 0.1))
      font-size: 0
      .block
        display: inline-block
        padding: 8px 12px
        margin-right: 8px
        line-height: 16px
        border-radius: 1px
        font-size: 12px
        color: rgb(77, 85, 93)
        &.active
          color: #fff
        .count
          margin-left: 2px
          font-size: 8px
        &.positive
          background: rgba(0, 160, 220, 0.2)
          &.active
            background: rgb(0, 160, 220)
        &.negative
          background: rgba(77, 85, 93, 0.2)
          &.active
            background: rgb(77, 85, 93)
    .switch
      padding: 12px 18px
      line-height: 24px
      border-bottom: 1px solid rgba(7, 17, 27, 0.1)
      color: rgb(147, 153, 159)
      font-size: 0
      &.on
        .icon-check_circle
          color: #00c850
      .icon-check_circle
        display: inline-block
        vertical-align: top
        margin-right: 4px
        font-size: 24px
      .text
        display: inline-block
        vertical-align: top
        font-size: 12px
</style>
