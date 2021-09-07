<template>
  <div class="n2-electronic">
    <N2Header>
      <button slot="header-left" v-for="(item,index) in ['郑州','观澜','太原']" :key="index">
item
      </button>
    </N2Header>
  </div>
</template>

<script>
//header 组件
import N2Header from '@/components/n2Header'

export default {
  name:'N2Electronic',
  components:{
    N2Header
  }
}
</script>

<style>

</style>