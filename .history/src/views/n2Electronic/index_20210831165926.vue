<template>
  <div class="n2-electronic">
    <N2Header>
      <div name></div>
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
      placeList: ["郑州", "观澜", "太原"],
      isActive: 0,
      isCentreActive: 2,
    };
  },
  methods: {
    //选择地点
    clickPlace(index){
      console.log(index);
    }
  },
};
</script>

<style lang="scss" scoped>
.button-active {
  background: #1d59d3 !important;
  box-shadow: 0 0.02rem 0.04rem 0 rgba(0, 0, 0, 0.5);
}
</style>