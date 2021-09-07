<template>
  <div class="screen">
    <button
      v-for="(item, index) in lists"
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
  name: "Screen",
  props: {
    //数据
    lists: {
      type: Array,
      default() {
        return [];
      },
    },
    //是否可以选择
    isClick: {
      type: Boolean,
      default: true,
    },
    defaultActive: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      isActive: 0,
    };
  },
  mounted() {
    //默认选中的选项
    this.isActive = this.defaultActive;
  },
  methods: {
    //判断点击内容
    clickActive(index) {
      if (this.isClick) {
        this.isActive = index;
        this.$emit("isActive", index);
      }
    },
  },
};
</script>

<style>
</style>