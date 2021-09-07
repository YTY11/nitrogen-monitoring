<template>
  <div class="header-left">
    <button
      v-for="(item, index) in l"
      :key="index"
      :class="{ 'button-active': index == isActive }"
      @click="clickActive(index)"
    >
      {{ item }}
    </button>
  </div>
</template>

<script>
export default {
  name: "HeadLeft",
  props: {
    placeList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      isActive: 0,
    };
  },
  methods: {
    //判断点击内容
    clickActive(index) {
      // index = 0; //默认选择第一个不可点击,注释此代码可以点击
      this.isActive = index;
      this.$emit("isActive", index);
    },
  },
};
</script>

<style lang="scss" scoped>
.header-left {
  height: 0.4rem;
  background: #5692f7;
  border-radius: 0.08rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 0 0.04rem;
  button {
    margin: 0 0.04rem;
    width: 0.58rem;
    height: 0.24rem;
    font-size: 0.14rem;
    color: #f0f0f0;
    background: transparent;
    letter-spacing: 0.5px;
    text-align: center;
    font-weight: 400;
    border: 1px solid #085acd;
    border-radius: 0.04rem;
  }
  .button-active {
    background: #1d59d3 !important;
    box-shadow: 0 0.02rem 0.04rem 0 rgba(0, 0, 0, 0.5);
  }
}
</style>