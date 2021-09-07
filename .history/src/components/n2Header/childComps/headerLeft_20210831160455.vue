<template>
  <div class="header-left">
      <button v-for="(item,index) in lists" :key="index"></button>
  </div>
</template>

<script>
export default {
  name:'HeadLeft',
  props:{
    lists:{
      type:Array,
      default(){
        return[]
      }
    }
  }
}
</script>

<style>

</style>