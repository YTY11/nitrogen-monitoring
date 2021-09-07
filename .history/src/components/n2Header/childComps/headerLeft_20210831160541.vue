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
    reutrn{
      isActive: 0,
    }
  }
};
</script>

<style>
</style>