<template>
  <div class="monochrome-bar" ref="echartsName"></div>
</template>

<script>
export default {
  name: "MonochromeBar",
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
    barWidth: {
      type: String,
      default: "40",
    },
    left: {
      type: String,
      default: "5%",
    },
    top: {
      type: String,
      default: "20%",
    },
    title: {
      type: Object,
      default() {
        return {
          show: true,
          size: "12",
          text: "sssss",
        };
      },
    },
  },
  watch: {
    xDatas() {
      this.$nextTick(() => {
        setTimeout(() => {
          this.setEcharts();
        }, 100);
      });
    },
    yDatas() {
      this.$nextTick(() => {
        setTimeout(() => {
          this.setEcharts();
        }, 100);
      });
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
      const option = {
        grid: {
          top: "20%", //距上边距
          left: this.left, //距离左边距
          right: this.left, //距离右边距
          bottom: "5%", //距离下边距
          containLabel: true,
        },
        title: {
          top: "8",
          show: this.title.show,
          left: "center",
          text: this.title.text,
          textStyle: {
            fontFamily: "PingFangSC-Regular",
            fontSize: this.title.size,
            color: "rgba(0,0,0,0.85)",
            fontWeight: "normal",
          },
        },
        toolbox: {
          show: true,
          feature: {
            mark: { show: true },
          },
        },
        xAxis: {
          type: "category",
          data: this.xDatas,
          axisTick: {
            show: false, //去除刻度点
          },
          axisLabel: {
            textStyle: {
              //设置字体
              fontFamily: "PingFangSC-Regular",
              fontSize: 12,
              color: "rgba(0,0,0,0.85)",
              letterSpacing: -0.04,
            },
          },
        },

        yAxis: {
          axisLabel: {
            textStyle: {
              //设置字体
              fontFamily: "PingFangSC-Regular",
              fontSize: 12,
              color: "#000000",
              letterSpacing: -1.48,
              lineHeight: 20,
            },
            interval: 0,
          },

          type: "value",
          axisTick: {
            show: false, //去除刻度点
          },
          axisLine: {
            show: false, //去除刻度线
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
            barWidth: this.barWidth,
            type: "bar",
            data: this.yDatas,
            itemStyle: {
              normal: {
                //设置柱形图渐变色
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: "#719DF9" },
                  { offset: 0.5, color: "#7FA6F9" },
                  { offset: 1, color: "#91B2F8" },
                ]),
                label: {
                  //图形上显示数据
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
.monochrome-bar {
  background: rgba(255, 255, 255, 0.75);
  border-radius: 0.2rem;
  height: 100%;
  width: 100%;
}
</style>