<template>
  <div class="monochrome-bar" ref="echartsName"></div>
</template>

<script>
import { observable } from 'vue/types/umd';
export default {
  name: "MonochromeLine",
  props: {
    lintNames:{
      type:Object,
      default(){
        return{
         "S01":[2,2],
         "S02":[2,3],
         "S03":[2,5],
         "S04":[2,8],
         "S05":[2,1],
         "S06":[2,4],
         "S07":[2,7],
         "S08":[2,9],
         "S09":[1,5],
         "S10":[1,4],
        }
      }
    },
    yName: {
      type: Object,
      default() {
        return {
          name: "单位：RMB",
          size: "12",
        };
      },
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
        legend: {
          //图标
          padding: [12, 0, 0, 0],
          right: "30",
          itemWidth: 14,
          data: ['S01', 'S02', 'S03', 'S04', 'S05', 'S06', 'S07', 'S08', 'S09', 'S10'],
          itemHeight: 2,
          itemGap: 10,
          icon: 'rect',
          textStyle: {
            fontFamily: "PingFangSC-Regular",
            fontSize: 10,
            color: "rgba(0,0,0,0.85)",
          },
        },
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
            show: false,
            lineStyle: {
              color: ["#CFD5EB"],
              width: 1,
              type: "solid",
            },
          },
        },
        series: [
          {
            name:'S01',
            type: "line",
            data: this.lintNames["S01"],
            symbol: "none",
            color: "#44D7B6",
          },
          {name:'S02',
            type: "line",
            data: this.lintNames["S02"],
            symbol: "none",
            color: "#F76A6A",
          },
          {name:'S03',
            type: "line",
            data: this.lintNames["S02"],
            symbol: "none",
            color: "#A5A5A5",
          },
          {
            name:'S04',
            type: "line",
            data: this.lintNames["S02"],
            symbol: "none",
            color: "#FFC000",
          },
          {
            name:'S05',
            type: "line",
            data: this.lintNames["S02"],
            symbol: "none",
            color: "#6236FF",
          },
          {
            name:'S06',
            type: "line",
            data: this.lintNames["S02"],
            symbol: "none",
            color: "#70AD47",
          },
          {
            name:'S07',
            type: "line",
            data: this.lintNames["S02"],
            symbol: "none",
            color: "#264478",
          },
          {
            name:'S08',
            type: "line",
            data: this.lintNames["S02"],
            symbol: "none",
            color: "#9E480E",
          },
          {
            name:'S09',
            type: "line",
            data: this.lintNames["S09"],
            symbol: "none",
            color: "#636363",
          },
          {
            name:'S10',
            type: "line",
            data: this.lintNames["S10"],
            symbol: "none",
            color: "#006D0D",
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