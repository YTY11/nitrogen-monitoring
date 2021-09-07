<template>
  <el-container>
    <!-- 头部 -->
    <el-header class="n2-electronic-header">
      <N2Header>
        <Screen slot="left" :isClick="false" :lists="placeList" />
      </N2Header>
    </el-header>

    <!-- 主体内容 -->
    <el-main class="n2-electronic-main">
      <MonitoringTotal />
      <Underly title="异常楼层排行">
        <MonochromeBar class="err-floor" />
        <UnderlyTable/>
      </Underly>
      <Underly title="多楼层实时监控">
        <ChartsMoreFloor class="More"/>
      </Underly>
    </el-main>
  </el-container>
</template>

<script>
//header 组件
import N2Header from "@/components/n2Header";
//screen
import Screen from "@/components/screen/screen";

//主体内容
import MonitoringTotal from "@/components/n2Electronic/monitoringTotal";
import Underly from "@/components/n2Electronic/underly";
import UnderlyTable from "@/components/n2Electronic/underlyTable"

//echarts 图
import MonochromeBar from "@/components/charts/monochromeBar";
import ChartsMoreFloor from "@/components/charts/chartsMoreFloor"

export default {
  name: "N2Electronic",
  components: {
    N2Header,
    Screen,
    MonitoringTotal,
    Underly,
    MonochromeBar,
    UnderlyTable,
    ChartsMoreFloor
  },
  data() {
    return {
      placeList: ["郑州", "观澜", "太原"],
    };
  },
  methods: {
    //选择地点
    clickPlace(index) {
      console.log(index);
    },
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
  .err-floor {
    width: 3.64rem;
    height: 2.32rem;
  }
}
</style>