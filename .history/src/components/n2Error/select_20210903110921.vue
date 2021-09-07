<template>
    <ul class="select" @click="clickOther">
      <li>
        <span v-if="!clientWidth">楼层:</span>
        <input type="text" class="select-input" v-model="floor" @click="isShowFloorList" readonly placeholder="请选择" />
        <i v-if="!clientWidth" @click="isShowFloorList"></i>
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
        <span v-if="!clientWidth">线体:</span>
        <input type="text" class="select-input" v-model="line" @click="isShowLineList" readonly placeholder="请选择" />
        <i v-if="!clientWidth" @click="isShowLineList"></i>
        <ul class="line-list" v-show="isShowLine" v-if="!clientWidth">
          <li @click="selectedLine('All')">All</li>
          <li
              v-for="(item, index) of lines[floor]"
              :key="index"
              @click="selectedLine(item)"
          >{{ item }}</li>
        </ul>
        <ul class="line-list" v-show="isShowLine" v-if="clientWidth">
          <li @click="selectedLine('All')">All</li>
          <li
              v-for="(item, index) of lines[floor]"
              :key="index"
              @click="selectedLine(item)"
          >{{ item === "All" ? "All":item.length > 5 ? item.substring(5):item }}</li>
        </ul>
      </li>
      <li>
        <button v-if="!clientWidth" @click="search" :class="isHighLight" @touchstart="touchStart" @touchend="touchEnd">查询</button>
        <img class="imgSeek"  v-if="clientWidth" src="../../assets/imgs/chaxun@2x.png" @click="search" @touchstart="touchStart" @touchend="touchEnd"/>
      </li>
    </ul>

</template>

<script>
export default {

}
</script>

<style>

</style>