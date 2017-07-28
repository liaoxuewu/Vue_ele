<template>
  <div class="stars" :class="`stars-${size}`">
    <span class="star" v-for="starClass in starClasses" :class="starClass"></span>
  </div>
</template>
<script>
  const CLASS_ON = 'on'
  const CLASS_HALF = 'half'
  const CLASS_OFF = 'off'

  export default {
    props: {
      score: Number,
      size: Number
    },
    computed: { //计算属性
      starClasses () {
        const starClasses = []
        const score = this.score
        const scoreInteger = Math.floor(score)

        // 添加CLASS_ON
        for (var i = 0; i < scoreInteger; i++) {
          starClasses.push(CLASS_ON)
        }
        // 添加CLASS_HALF
        if(score-scoreInteger > 0.5){
          starClasses.push(CLASS_HALF)
        }
        // 添加CLASS_OFF
        while (starClasses.length < 5){
          starClasses.push(CLASS_OFF)
        }
        return starClasses
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/mixin.styl'

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

</style>
