<template>
  <el-container>
    <el-header class="n2-electronic-header">
      <N2Header>
        <Screen slot="left" :isClick="false" :lists="placeList" />
      </N2Header>
    </el-header>
     <!-- 主体内容 -->
    <el-main class="n2-electronic-main">

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
export default {
  name: "Energy",
  components: {
    N2Header,
    Screen,
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
</style>