<template>
  <div class="header-left">
      <button></button>
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