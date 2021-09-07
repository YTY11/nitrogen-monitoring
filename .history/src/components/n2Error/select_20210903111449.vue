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
        this.me
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

<style>

</style>