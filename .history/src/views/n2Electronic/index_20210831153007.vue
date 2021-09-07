<template>
  <div class="n2-electronic">
    <N2Header>
      <button
        slot="header-left"
        v-for="(item, index) in headerLeftList"
        :key="index"
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
    };
  },
};
</script>

<style lang="scss" scoped>
.button-active {
      background: #1d59d3;
      box-shadow: 0 .02rem .04rem 0 rgba(0, 0, 0, 0.5);
    }
</style>