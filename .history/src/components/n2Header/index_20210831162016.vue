<template>
  <div class="n2-header">
    <HeaderLeft :placeList="placeList"></HeaderLeft>
    <HeaderLeft :timeList="['郑州', '观澜', '太原']"></HeaderLeft>
  </div>
</template>

<script>
import HeaderLeft from './childComps/headerLeft.vue'
export default {
  name: "N2Header",
  props:{
    placeList:{
      type:Array,
      default(){
        return['郑州', '观澜', '太原']
      }
    }
  },
  components:{
    HeaderLeft
  }
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