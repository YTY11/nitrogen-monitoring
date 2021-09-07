<template>
    <ul class="select" @click="clickOther">
      <li>
        <span>楼层:</span>
        <input type="text" class="select-input" v-model="floor" @click="isShowFloorList" readonly placeholder="请选择" />
        <i @click="isShowFloorList"></i>
        <ul class="floor-list" v-show="isShowFloors">
          <li @click="selectedFloor('All')">All</li>
          <li
            v-for="(item, index) of floors"
            :key="index"
            @click="selectedFloor(item)"
          >{{ item }}</li>
        </ul>
      </li>
      <li>
        <span>线体:</span>
        <input type="text" class="select-input" v-model="line" @click="isShowLineList" readonly placeholder="请选择" />
        <i @click="isShowLineList"></i>
        <ul class="line-list" v-show="isShowLine">
          <li @click="selectedLine('All')">All</li>
          <li
              v-for="(item, index) of lines[floor]"
              :key="index"
              @click="selectedLine(item)"
          >{{ item }}</li>
        </ul>
      </li>
      <li>
        <button @click="search" @touchstart="touchStart" @touchend="touchEnd">查询</button>
      </li>
    </ul>

</template>

<script>
export default {
name: 'Select',
  props: {
    floors: Array,
    lines: Object,
    isMountedTrigger: {
      type: Boolean,
      default: true
    },
    floor2:{
      type: String,
      default: '请选择'
    },
    line2:{
      type: String,
      default: '请选择'
    },
  },
  data() {
    return {
      isShowFloors: false,
      isShowLine: false,
      floor: '请选择',
      line: '请选择',
      isHighLight: '',
    }
  },
   methods: {
    selectedFloor(item) {
      this.floor = item
      this.line = 'All'

      this.hideFloorList()
    },
    selectedLine(item) {
      this.line = item

      this.hideLineList()
    },
    search() {
      let floor = this.floor
      let line = this.line
      if (floor === '请选择') {
        floor = 'D061F'
      } else if (floor === 'All') {
        floor = ''
      }
      if (line === '请选择' || line === 'All') {
        line = ''
      }

      this.$emit('search', {
        floor,
        line
      })
    },
    clickOther(e) {
      const target = e.target
      if (target.nodeName === 'UL') {
        this.hideFloorList()
        this.hideLineList()
      }
    },
    touchStart() {
      this.isHighLight = 'button-active'
    },
    touchEnd() {
      this.isHighLight = ''
    },
    isShowFloorList() {
      this.hideLineList()
      this.isShowFloors = !this.isShowFloors
    },
    hideFloorList() {
      this.isShowFloors = false
    },
    isShowLineList() {
      if (this.floor === '') {
        this.$message.error("请选择楼层")
        return
      }
      this.hideFloorList()
      this.isShowLine = !this.isShowLine
    },
    hideLineList() {
      this.isShowLine = false
    }
  },
}
</script>

<style lang="scss" scoped>
.select{
width 100%
  height 0.8rem
  color black
  display flex
  flex-direction row
  align-items center
  padding-left 0.1rem
  box-sizing border-box
  position relative
  > li
    position relative
    > span
      margin-right .208333rem
      opacity .8
    > input
      width 1.38rem
      height 0.34rem
      line-height .364583rem
      text-indent .104167rem
      border-radius .052083rem
      border 1px solid gray
    > i
      display inline-block
      width 0.10rem
      height 0.10rem
      border-top 0.02rem solid #000000
      border-left 0.02rem solid #000000
      opacity .8
      position absolute
      margin-top 0.09rem
      right .195313rem
      transform rotate(-135deg)
    > button
      width 1.015625rem
      height .364583rem
      background #F7B500
      box-shadow 0.02rem 0.02rem 0.06rem 0 rgba(0,0,0,0.50)
      border-radius 0.08rem
      color white
      :active
        background red
        color black
    &:nth-child(2), &:last-child
      margin-left 0.3rem
    &:nth-child(2)
     > input
      width 1.7rem
    .floor-list, .line-list
      width 1.38rem
      height 1.5rem
      max-height 2rem
      position absolute
      left 0.57rem
      top .4rem
      overflow auto
      z-index 40
      letter-spacing 0.02rem
      > li
        width 100%
        height 0.3rem
        line-height 0.3rem
        box-sizing border-box
        padding-left 0.1rem
        border-top 1px solid gray
        border-left 1px solid gray
        border-right 1px solid gray
        color black
        background white
        &:active
          background lightgray
    .line-list
      width 1.7rem
}
  
</style>