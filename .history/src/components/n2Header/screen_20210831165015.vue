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

}
</script>

<style>

</style>