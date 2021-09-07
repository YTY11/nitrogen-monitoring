<template>
  <div class="more-floor" ref="echartsName"></div>
</template>

<script>
export default {
  name: "ChartsMoreFloor",
  props: {
    xDatas: {
      type: Array,
      default() {
        return ["aa", "bb"];
      },
    },
    yDatas: {
      type: Array,
      default() {
        return [20, 50];
      },
    },
  },
  data() {
    return {
      myChart: "",
    };
  },
  //挂载开始之前被调用
  beforeMount() {
    //监听窗口变化
    window.addEventListener("resize", this.chartResize);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.chartResize);
  },
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.setEcharts();
      }, 100);
    });
  },
  methods: {
    //设置样式
    getOption() {
      
      return option;
    },
    //绘制图形
    setEcharts() {
      //初始化
      let dom = this.$refs.echartsName;
      this.myChart = this.$echarts.init(dom);
      this.myChart.setOption(this.getOption());
    },
    //重置
    chartResize() {
      this.myChart.resize();
    },
  },
};
</script>
<style lang="scss" scoped>
.more-floor {
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.75);
  border-radius: .2rem;
}
</style>

