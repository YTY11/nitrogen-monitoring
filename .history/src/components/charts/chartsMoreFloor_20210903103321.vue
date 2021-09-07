<template>
  <div class="more-floor" ref="echartsName"></div>
</template>

<script>
export default {
  name: "ChartsMoreFloor",
  props: {
    detailMessageByFloor: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  watch: {
    detailMessageByFloor() {
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
          left: "3%", //距离左边距
          right: "3%", //距离右边距
          bottom: "5%", //距离下边距
          containLabel: true,
        },
        legend: {
          //图标
          padding: [12, 0, 0, 0],
          left: "30",
          itemWidth: 12,
          data: ["正常", "异常", "关机"],
          itemHeight: 12,
          itemGap: 12,
          textStyle: {
            fontFamily: "PingFangSC-Regular",
            fontSize: 12,
            color: "rgba(0,0,0,0.85)",
          },
        },
        xAxis: {
          type: "category",
          data: this.detailMessageByFloor.Floor,
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
            borderWidth:1,
            borderColor:'#4381DA',
             borderRadius:4,
             padding:[3,3,3,3],
             verticalAlign:""//zhui
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
            show: true, //去除刻度线
          },
          splitLine: {
            //横向网格线
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
            barWidth: "30",
            name: "正常",
            type: "bar",
            data: this.detailMessageByFloor.Normal,
            itemStyle: {
              normal: {
                //设置柱形图渐变色
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: "#46C44A" },
                  { offset: 0.5, color: "#52C455" },
                  { offset: 1, color: "#82CE85" },
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
          {
            barWidth: "30",
            name: "异常",
            type: "bar",
            data: this.detailMessageByFloor.Abnormal,
            itemStyle: {
              normal: {
                //设置柱形图渐变色
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: "#DE2C19" },
                  { offset: 0.5, color: "#DC4433" },
                  { offset: 1, color: "#DC5C4E" },
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
          {
            barWidth: "30",
            name: "关机",
            type: "bar",
            data: this.detailMessageByFloor.Offline,
            itemStyle: {
              normal: {
                //设置柱形图渐变色
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: "#7D838E" },
                  { offset: 0.5, color: "#858C97" },
                  { offset: 1, color: "#9097A2" },
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
.more-floor {
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.75);
  border-radius: 0.2rem;
  border: 0;
}
</style>

