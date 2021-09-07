<template>
  <el-container>
    <el-header class="n2-electronic-header">
      <!-- 头部 -->
      <N2Header>
        <Screen slot="left" :isClick="false" :lists="placeList" />
      </N2Header>
    </el-header>
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
  height: ;
}
</style>