<template>

  <el-container>
    <!-- 头部 -->
    <el-header class="n2-electronic-header">
      <N2Header>
        <Screen slot="left" :isClick="false" :lists="placeList" />
        <Screen
          style="margin-left: 0.08rem"
          slot="center"
          :isClick="true"
          :lists="timeList"
        />
      </N2Header>
    </el-header>

    <!-- 主体内容 -->
    <el-main class="n2-electronic-main">
      <ErrorUnderly class="top-underly" underlyTitle="当月异常楼层排行">
        <MonochromeBar slot="center" class="bar-size" />
        <ErrorFloorTable class="table-size" slot="footer" />
      </ErrorUnderly>
      <ErrorUnderly class="bottom-underly" underlyTitle="当月异常原因排行">
        <MonochromeBar slot="center" class="bar-size" />
        <ErrorFloorTable class="bottom-table-size" slot="footer" />
      </ErrorUnderly>
    </el-main>
  </el-container>

</template>

<script>
//header 组件
import N2Header from "@/components/n2Header";
//screen
import Screen from "@/components/screen/screen";
import ErrorUnderly from "@/components/errorAnalysis/errorUnderly";
import ErrorFloorTable from "@/components/errorAnalysis/errorFloorTable";

//echarts 图
import MonochromeBar from "@/components/charts/monochromeBar";

//网络数据
import {getErrorAnalysis} from "@/api/errorAnalysis/errorAnalysis"
export default {
  name: "ErrorAnalysis",
  components: {
    N2Header,
    Screen,
    ErrorUnderly,
    MonochromeBar,
    ErrorFloorTable,
  },
  data() {
    return {
      placeList: ["郑州", "观澜", "太原"],
      timeList: ["日", "周", "月", "年"],
    };
  },
  created(){
    this.getErrorAnalysis("Day")
  },
  methods:{
    //获取数据
    getErrorAnalysis(time){
      getErrorAnalysis(time).then(res=>{
        console.log(res);
      }).catch(err=>{
        console.log(err);
      })
    }
  }

};
</script>

<style lang="scss" scoped>
.n2-electronic-header {
  height: 0.4rem !important;
  margin-bottom: 0.05rem;
  padding: 0;
}
.n2-electronic-main {
  padding: 0;
  .top-underly {
    width: 7.32rem;
    height: 6.13rem;
  }
  .bar-size {
    width: 7.32rem;
    height: 2.32rem;
  }
  .table-size {
    height: 3.43rem;
  }
  .bottom-underly {
    margin-top: .08rem;
    width: 7.32rem;
    height: 3.73rem;
    .bottom-table-size{
      height: 1.03rem;
    }
  }
}
</style>