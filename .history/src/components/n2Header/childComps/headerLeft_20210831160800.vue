<template>
  <div class="header-left">
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
  name: "HeadLeft",
  props: {
    lists: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data(){
    return{
      isActive: 0,
    }
  },
  methods:{
     //判断点击内容
    clickActive(index) {
      // index = 0; //默认选择第一个不可点击,注释此代码可以点击
      this.isActive = index;
      this.$emit('isActive',index)
    },
  }
};
</script>

<style>
</style>