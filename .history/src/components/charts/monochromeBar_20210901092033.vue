<template>
  <div class="monochrome-bar" ref="echartsName"></div>
</template>

<script>
import * as echarts from "echarts";
export default {
  name: "MonochromeBar",
  data() {
    return {
      myChart: "",
    };
  },
  //挂载开始之前被调用
  beforeMount() {
    //监听窗口变化
    window.addEventListener("resize", this.setEcharts);
  },
  methods: {
    //设置样式
    getOption(){
      const option = {}
    },

    //绘制图形
    setEcharts() {
      //初始化
      this.myChart = echarts.init(this.$refs.echartsName);
    },
  },
};
</script>

<style lang="scss" scoped>
.monochrome-bar {
  background: rgba(255, 255, 255, 0.75);
  border-radius: 0.2rem;
}
</style>