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
      <ErrorFloor>
        <MonochromeBar slot="center" class="bar-size"/>
        <ErrorFloorTable class="table-size" slot="footer"/>
      </ErrorFloor>
    </el-main>
  </el-container>
</template>

<script>
//header 组件
import N2Header from "@/components/n2Header";
//screen
import Screen from "@/components/screen/screen";
import errorUnderly from "@/components/errorAnalysis/errorFloor";
import ErrorFloorTable from "@/components/errorAnalysis/errorFloorTable"

//echarts 图
import MonochromeBar from "@/components/charts/monochromeBar";
export default {
  name: "ErrorAnalysis",
  components: {
    N2Header,
    Screen,
    ErrorFloor,
    MonochromeBar,
    ErrorFloorTable
  },
  data() {
    return {
      placeList: ["郑州", "观澜", "太原"],
      timeList: ["日", "周", "月", "年"],
    };
  },
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
  .bar-size {
    width: 7.32rem;
    height: 2.32rem;
  }
  .table-size{
    height: 3.43rem;
  }
}
</style>