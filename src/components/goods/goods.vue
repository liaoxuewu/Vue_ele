<template>
    <div>
      <div class="goods">
        <!--左边分类项-->
        <div class="menu-wrapper" ref="menuWrapper">
          <ul>
            <li class="menu-item" v-for="(good,index) in goods"
                :class="{current: index===currIndex}" @click="clickMenuItem(index,$event)">
              <!--current:true/false-->
              <span class="text border-1px">
                <span class="icon" v-if="good.type>=0" :class="supportClasses[good.type]"></span>{{good.name}}
              </span>
            </li>
          </ul>
        </div>
        <!--右边食物列表-->
        <div class="foods-wrapper" ref="foodsWrapper">
          <ul>
            <li class="food-list food-list-hook" v-for="good in goods">
              <h2 class="title">{{good.name}}</h2>
              <ul>
                <li class="food-item border-1px" v-for="food in good.foods">
                  <!--食物图片-->
                  <div class="icon">
                    <img :src="food.icon" width="57" height="57">
                  </div>
                  <!--食物内容-->
                  <div class="content">
                    <h2 class="name">{{food.name}}</h2>
                    <p class="desc">{{food.description}}</p>
                    <div class="extra">
                      <span class="count">月售{{food.sellCount}}份</span>
                      <span>好评率{{food.rating}}%</span>
                    </div>
                    <div class="price">
                      <span class="now">￥{{food.price}}</span>
                      <span class="old" v-show="food.oldPrice">￥{{food.oldPrice}}</span>
                    </div>
                    <!--添加食物和删除食物按钮-->
                    <div class="cartcontrol-wrapper">
                      <cartcontrol :food="food" :update-food-count="updateFoodCount"></cartcontrol>
                    </div>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div>food组件</div>
    </div>
</template>
<script>
  import axios from 'axios'
  import BScroll from 'better-scroll'
  import cartcontrol from '../cartcontrol/cartcontrol.vue'

  const OK = 0
  export default {
    data () {
      return {
        goods: [],
        supportClasses: ["decrease", "discount", "guarantee", "invoice", "special"],
        tops: [], //数组里存放每个li的top值
        scrollY: 0
      }
    },
    created () {
      axios.get('/api2/goods')
        .then(response => {
          const result = response.data
          console.log(result)
          if (result.code === OK) {
            //更新数据
            this.goods = result.data
            //下面的代码要延迟到界面更新完毕后执行，可用setTimeout,但延迟事时间不好控制
            /*setTimeout(() => {
              this._initScroll()
            },300)*/
            //$.nextTick(callback)将回调延迟到下次DOM元素更新完之后执行
            this.$nextTick(() => {
              this._initScroll()
              this._initTops()
            })
          }
        })
    },
    methods: {
      _initScroll () {
        //创建左边menu的scroll
        new BScroll(this.$refs.menuWrapper,{
          click: true //响应点击事件
        })
        //创建右边foods的scroll
        this.foodsScroll = new BScroll(this.$refs.foodsWrapper,{
          probeType: 3, //手指move的时候出发scroll事件
          click: true //响应点击事件
        })
        //监视foods的滚动
        this.foodsScroll.on('scroll',(pos) => {
          //console.log(pos.y)
          this.scrollY = Math.abs(pos.y)
        })
      },
      _initTops () {
        const tops = []
        let top = 0
        tops.push(top)
        //获取所有对应的li
        const lis = this.$refs.foodsWrapper.getElementsByClassName('food-list-hook')
        for (var i = 0; i < lis.length; i++) {
          var li = lis[i]
          top += li.clientHeight
          tops.push(top)
        }
        this.tops = tops
        console.log(tops)
      },

      clickMenuItem (index,event) {
        //console.log(index,event)
        //过滤到原生的回调（pc端会触发两次）
        if(!event._constructed) {
          return
        }
        const lis = this.$refs.foodsWrapper.getElementsByClassName('food-list-hook')
        const li = lis[index]
        //滑动到对应的li
        this.foodsScroll.scrollToElement(li,300)
      },

      updateFoodCount (food,isAdd,event) {
        //过滤到原生的回调（pc端会触发两次）
        if(!event._constructed) {
          return
        }
        if(isAdd){ //加1
          if(!food.count){ //如果是第一次添加,food中还没有count属性
            //food.count = 1 //添加新的属性，没有数据绑定，变化了不更新界面
            this.$set(food,'count',1)
          }else {
            food.count++
          }
        }else { //减1
          if(food.count){
            food.count--
          }
        }
      },
    },


    computed: {
      currIndex () {//当前被选中的menu item的下标
        const {tops,scrollY} = this
        return tops.findIndex((top,index) => {
          //scrollY大于或等于当前的top,且小于下一个top
          return scrollY>=top && scrollY<tops[index+1]
        })
      }
    },
    components: {
      cartcontrol
    }
  }

</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"

  .goods
    display: flex
    position: absolute
    top: 174px
    bottom: 46px
    width: 100%
    overflow: hidden
    .menu-wrapper
      flex: 0 0 80px
      width: 80px
      background: #f3f5f7
      .menu-item
        display: table
        height: 54px
        width: 56px
        padding: 0 12px
        line-height: 14px
        &.current
          position: relative
          z-index: 10
          margin-top: -1px
          background: #fff
          font-weight: 700
          .text
            border-none()
        .icon
          display: inline-block
          vertical-align: top
          width: 12px
          height: 12px
          margin-right: 2px
          background-size: 12px 12px
          background-repeat: no-repeat
          &.decrease
            bg-image('decrease_3')
          &.discount
            bg-image('discount_3')
          &.guarantee
            bg-image('guarantee_3')
          &.invoice
            bg-image('invoice_3')
          &.special
            bg-image('special_3')
        .text
          display: table-cell
          width: 56px
          vertical-align: middle
          border-1px(rgba(7, 17, 27, 0.1))
          font-size: 12px
    .foods-wrapper
      flex: 1
      .title
        padding-left: 14px
        height: 26px
        line-height: 26px
        border-left: 2px solid #d9dde1
        font-size: 12px
        color: rgb(147, 153, 159)
        background: #f3f5f7
      .food-item
        display: flex
        margin: 18px
        padding-bottom: 18px
        border-1px(rgba(7, 17, 27, 0.1))
        &:last-child
          border-none()
          margin-bottom: 0
        .icon
          flex: 0 0 57px
          margin-right: 10px
        .content
          flex: 1
          .name
            margin: 2px 0 8px 0
            height: 14px
            line-height: 14px
            font-size: 14px
            color: rgb(7, 17, 27)
          .desc, .extra
            line-height: 10px
            font-size: 10px
            color: rgb(147, 153, 159)
          .desc
            line-height: 12px
            margin-bottom: 8px
          .extra
            .count
              margin-right: 12px
          .price
            font-weight: 700
            line-height: 24px
            .now
              margin-right: 8px
              font-size: 14px
              color: rgb(240, 20, 20)
            .old
              text-decoration: line-through
              font-size: 10px
              color: rgb(147, 153, 159)
          .cartcontrol-wrapper
            position: absolute
            right: 0
            bottom: 12px
</style>
