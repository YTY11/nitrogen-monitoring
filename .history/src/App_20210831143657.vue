<template>
  <div id="app">
    <MultiBackground>
    <router-view></router-view>
    </MultiBackground>
      
    
  </div>
</template>
<script>
//引入背景组件
import MultiBackground from '@/components/background/MultiBackground.vue'

export default {
  name:'app',
  components:{
    MultiBackground
  }

}
</script>
<style lang="scss">


</style>
