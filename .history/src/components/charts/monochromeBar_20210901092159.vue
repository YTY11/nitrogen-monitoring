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
        
        legend: {
          padding: [15, 0, 0, 0],
          right: "30",
          itemWidth: 35,
          data: ["计划", "实际"],
          itemHeight: 13,
          itemGap: 50,
          textStyle: {
            fontFamily: "PingFangSC-Regular",
            fontSize: 14,
            color: "rgba(0,0,0,0.85)",
          },
        },

        xAxis: {
          type: "category",
          data: sysbarxList,
          axisTick: {
            show: false,
          },
          axisLabel: {
            textStyle: {
              fontFamily: "PingFangSC-Regular",
              fontSize: 14,
              color: "rgba(0,0,0,0.85)",
              letterSpacing: -0.04,
            },
          },
        },

        yAxis: {
          axisLabel: {
            textStyle: {
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
            show: false,
          },
          axisLine: {
            show: false,
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
            data: sysbarTarList,
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: "#29BEF8" },
                  { offset: 0.5, color: "#60CFFA" },
                  { offset: 1, color: "#86DAFA" },
                ]),
                label: {
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
            data: sysbarActionList,
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,

                  [
                    { offset: 0, color: "#21E344" },
                    { offset: 0.5, color: "#54E36E" },
                    { offset: 1, color: "#82E494" },
                  ]
                ),
                label: {
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