<template>
  <div class="monochrome-bar"></div>
</template>

<script>
import * as echarts from "echarts";
export default {
  name: "MonochromeBar",
  data(){
    return{
      myChart:""
    }
  },
  methods:{
    //绘制图形
    setEcharts(dom){
      //初始化
     let myChart = echarts.init(dom)
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