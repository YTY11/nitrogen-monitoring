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
    yName: {
      type: Object,
      default(){
        return{
          "name":'',
          "size":'10'
        }
      }
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
          show: false,
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
        dataZoom : [
                                //1.横向使用滚动条
                                // {
                                //     type: 'slider',//有单独的滑动条，用户在滑动条上进行缩放或漫游。inside是直接可以是在内部拖动显示
                                //     show: true,//是否显示 组件。如果设置为 false，不会显示，但是数据过滤的功能还存在。
                                //     start: 0,//数据窗口范围的起始百分比0-100
                                //     end: 50,//数据窗口范围的结束百分比0-100
                                //     xAxisIndex: [0],// 此处表示控制第一个xAxis，设置 dataZoom-slider 组件控制的 x轴 可是已数组[0,2]表示控制第一，三个；xAxisIndex: 2 ，表示控制第二个。yAxisIndex属性同理
                                //     bottom:-10 //距离底部的距离
                                // },
                                //2.在内部可以横向拖动
                                {
                                    type: 'inside',// 内置于坐标系中
                                    startValue: 0,
                                    endValue: 3,
                                    xAxisIndex: [0],
                                    zoomOnMouseWheel:false,  //滚轮是否触发缩放
                                    preventDefaultMouseMove: false,//解决移动端影响手机上下滑动问题
                                    // MoveOnMouseMove:true,  //鼠标滚轮触发滚动
                                    moveOnMouseWheel:true //鼠标滚轮触发滚动
                                    // zoomLock:false,
                                    // zoomLock: true
                                },

                                //3.纵向使用滚动条
                                // {
                                //     type: 'slider',
                                //     show: true,
                                //     yAxisIndex: [0],//设置组件控制的y轴
                                //     left: '93%',//距离左侧的距离 可以使百分比，也可以是像素 left: '30'（30像素）
                                //     start: 29,
                                //     end: 36
                                // },
                                //4.在内部可以纵向拖动
                                // {
                                //     type: 'inside',
                                //     yAxisIndex: [0],
                                //     start: 29,
                                //     end: 36
                                // }
                            ],
        grid: {
          top: this.top, //距上边距
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
          name: this.yName.name,
          nameLocation: "end",
          nameTextStyle: {
            color: "rgba(0,0,0,0.85)",
            fontSize: this.yName.size,
            align: "center",
          },
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