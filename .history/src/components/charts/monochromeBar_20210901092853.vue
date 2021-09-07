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
    getOption() {
      const option = {
        grid: {
          top: "20%", //距上边距
          left: "2%", //距离左边距
          right: "2%", //距离右边距
          bottom: "5%", //距离下边距
          containLabel: true,
        },
        toolbox: {
          show: true,
          feature: {
            mark: { show: true },
          },
        },
        xAxis: {
          type: "category",
          data: ['aa','bbb'],
          axisTick: {
            show: false,//去除刻度点
          },
          axisLabel: {
            textStyle: {//设置字体
              fontFamily: "PingFangSC-Regular",
              fontSize: 14,
              color: "rgba(0,0,0,0.85)",
              letterSpacing: -0.04,
            },
          },
        },

        yAxis: {
          axisLabel: {
            textStyle: {//设置字体
              fontFamily: "PingFangSC-Regular",
              fontSize: 14,
              color: "#000000",
              letterSpacing: -1.48,
              lineHeight: 20,
            },
            interval: 0,
          },

          type: "value",
          axisTick: {
            show: false,//去除刻度点
          },
          axisLine: {
            show: false,//去除刻度线
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: ["#CFD5EB"],
              width: 1,
              type: "solid",
            },
          },
        },
        series: [
          {
            name: "计划",
            type: "bar",
            data: [50],
            itemStyle: {
              normal: {//设置柱形图渐变色
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: "#29BEF8" },
                  { offset: 0.5, color: "#60CFFA" },
                  { offset: 1, color: "#86DAFA" },
                ]),
                label: {//图形上显示数据
                  show: true,
                  position: "top",
                  textStyle: {
                    fontFamily: "PingFangSC-Regular",
                    fontSize: 12,
                    letterSpacing: 0,
                    color: "rgba(0,0,0,0.85)",
                    // backgroundColor:'#E1E7FD',
                  },
                },
              },
            },
          },
          {
            name: "实际",
            type: "bar",
            data: [50],
            itemStyle: {
              normal: {//设置柱形图渐变色
                color: new echarts.graphic.LinearGradient( 0,0,0,1,[
                    { offset: 0, color: "#21E344" },
                    { offset: 0.5, color: "#54E36E" },
                    { offset: 1, color: "#82E494" },
                  ]
                ),
                label: {//图形上显示数据
                  show: true,
                  position: "top",
                  textStyle: {
                    fontFamily: "PingFangSC-Regular",
                    fontSize: 12,
                    letterSpacing: 0,
                    color: "rgba(0,0,0,0.85)",
                  },
                },
              },
            },
          },
        ],
      };
      return option;
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