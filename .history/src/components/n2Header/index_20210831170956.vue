<template>
  <div class="n2-header">
    <slot name="left"></slot>
    <slot name="centr"></slot>
    <div class="right">
      <slot name="right">
        <a to="/"></a>
        <a href=""></a>
        <a href=""></a>
        <a href=""></a>
      </slot>
    </div>
  </div>
</template>

<script>
import HeaderLeft from "./headerLeft.vue";
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
    isClick: {
      type: Boolean,
      default: true,
    },
    defaultActive: {
      type: Number,
      default: 0,
    },
  },
  components: {
    HeaderLeft,
  },
  methods: {
    //选择地点
    clickPlace(index) {
      this.$emit("clickPlace", index);
    },
    //选择时间
    clickTime(index) {
      this.$emit("clickTime", index);
    },
  },
};
</script>

<style lang="scss" scoped>
.n2-header {
  margin-bottom: 0.05rem;
  height: 40px;
  display: flex;
  .header-right {
    margin-left: auto;
  }
  .right{
    margin-left: auto;
  }
}
</style>