<template>
  <div class="n2-electronic">
    <N2Header @isActive="isActive">
    
    </N2Header>
  </div>
</template>

<script>
//header 组件
import N2Header from "@/components/n2Header";

export default {
  name: "N2Electronic",
  components: {
    N2Header,
  },
  data() {
    return {
      // headerLeftList: ["郑州", "观澜", "太原"],
      // headerLeftCentre: ["日", "周", "月", "年"],
      // isActive: 0,
      // isCentreActive: 2,
    };
  },
  methods: {
    //判断点击内容
    // clickActive(index) {
    //   index = 0; //默认选择第一个不可点击,注释此代码可以点击
    //   this.isActive = index;
    // },
    // clickCentreActive(index) {
    //   index = 0; //默认选择第一个不可点击,注释此代码可以点击
    //   this.isCentreActive = index;
    // },
  },
};
</script>

<style lang="scss" scoped>
.button-active {
  background: #1d59d3 !important;
  box-shadow: 0 0.02rem 0.04rem 0 rgba(0, 0, 0, 0.5);
}
</style>