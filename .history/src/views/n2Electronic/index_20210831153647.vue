<template>
  <div class="n2-electronic">
    <N2Header>
      <button
        slot="header-left"
        v-for="(item, index) in headerLeftList"
        :key="index"
        :class="{'button-active':index==isActive}"
        @click="clickActive(index)"
      >
        {{ item }}
      </button>
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
      headerLeftList: ["郑州", "观澜", "太原"],
      isActive:0
    };
  },
  methods:{
    //判断点击内容
    clickActive(index){
      index = 0
      this.isActive = 0
    }
  }
};
</script>

<style lang="scss" scoped>
.button-active {
      background: #1d59d3 !important;
      box-shadow: 0 .02rem .04rem 0 rgba(0, 0, 0, 0.5);
    }
</style>