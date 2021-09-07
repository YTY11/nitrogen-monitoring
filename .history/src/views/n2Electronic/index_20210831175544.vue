<template>
  <el-container>
    <!-- 头部 -->
    <el-header class="n2-electronic-header">
      <N2Header>
        <Screen slot="left" :isClick="false" :lists="placeList" />
      </N2Header>
    </el-header>

主题

  </el-container>
</template>

<script>
//header 组件
import N2Header from "@/components/n2Header";
//screen
import Screen from "@/components/screen/screen";

export default {
  name: "N2Electronic",
  components: {
    N2Header,
    Screen,
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
.n2-electronic-header{
  height: .4rem !important;
  padding: 0;
}
</style>