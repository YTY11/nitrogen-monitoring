<template>
  <div class="n2-header">
    <HeaderLeft
      @isActive="clickPlace"
      :isClick="false"
      :lists="placeList"
    ></HeaderLeft>
    <HeaderLeft
      @isActive="clickTime"
      :defaultActive="1"
      :lists="timeList"
    ></HeaderLeft>
  </div>
</template>

<script>
import HeaderLeft from "./childComps/headerLeft.vue";
export default {
  name: "N2Header",
  props: {
    placeList: {
      type: Array,
      default() {
        return ["郑州", "观澜", "太原"];
      },
    },
    timeList: {
      type: Array,
      default() {
        return ["日", "周", "月", "年"];
      },
    },
  },
  components: {
    HeaderLeft,
  },
  methods: {
    //点击
    clickPlace(index) {
      this.$emit("clickPlace", index);
    },
    clickTime(index) {
      this.$emit("clickTime", index);
    },
  },
};
</script>

<style lang="scss" scoped>
.n2-header {
  margin-bottom: 0.05rem;
  display: flex;
  .header-right {
    margin-left: auto;
  }
}
</style>