<template>
  <el-container>
    <el-header class="n2-electronic-header">
      <N2Header>
        <Screen slot="left" :isClick="false" :lists="placeList" />
      </N2Header>
    </el-header>
     <!-- 主体内容 -->
    <el-main class="n2-electronic-main">
      <Underly style="margin-top:0" title="当月异常楼层排行">
        <MonochromeBar :top="'30%'" :title="{'show':true,'size':'12','text':'By天线体单Pcs能耗TOP5'}" :yName="{'name':'单位：RMB','size':'10'}" class="bar-size"/>
        <MonochromeBar :top="'30%'" :title="{'show':true,'size':'12','text':'By周线体单Pcs能耗TOP5'}" :yName="{'name':'单位：RMB','size':'10'}"  class="bar-size"/>
        <MonochromeBar :top="'30%'" :title="{'show':true,'size':'12','text':'By月线体单Pcs能耗TOP5'}" :yName="{'name':'单位：RMB','size':'10'}"  class="bar-size"/>
      </Underly>
      <Underly class="underly-center" title="楼层氮气消耗排名">
        <MonochromeBar  :title="{'show':true,'size':'14','text':'楼层氮气消耗'}" :yName="{'name':'单位：m³','size':'12'}" class="bar-size2"/>
         <MonochromeBarColors style="margin-top:.08rem"   class="bar-size2"/>
       
      </Underly>
      <Underly class="underly-footer" title="线体单Psc能耗">
       
       <MonochromeLine class=""/>
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
import Underly from "@/components/n2Electronic/underly";

//echarts 图
import MonochromeBar from "@/components/charts/monochromeBar";
import MonochromeBarColors from "@/components/charts/monochromeBarColors";
import MonochromeLine from "@/components/charts/monochromeLine";
export default {
  name: "Energy",
  components: {
    N2Header,
    Screen,
    Underly,
    MonochromeBar,
    MonochromeBarColors,
    MonochromeLine
  },
  data(){
    return{
      placeList: ["郑州", "观澜", "太原"],
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
}
.bar-size{
  width: 2.42rem;
  height: 2.32rem;
}
.underly-center{
  height: 5.02rem;
  .bar-size2{
    height: 2.32rem;
  }
}
.underly-footer{
  height: 2.62rem;
}

</style>