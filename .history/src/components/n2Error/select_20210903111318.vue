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
name: 'WarnSelect',
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
}
</script>

<style>

</style>