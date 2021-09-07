<template>
  <div class="monochrome-bar"></div>
</template>

<script>
import * as echarts from "echarts";
export default {
  name: "MonochromeBar",
  methods:{
    //绘制图形
    setEcharts(){

    }
  }
};
</script>

<style lang="scss" scoped>
.monochrome-bar {
  background: rgba(255, 255, 255, 0.75);
  border-radius: .2rem;
}
</style>