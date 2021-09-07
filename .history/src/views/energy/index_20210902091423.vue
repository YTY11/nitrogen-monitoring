<template>
<el-container>
  <el-header class="n2-electronic-header">
<N2Header>
        <Screen slot="left" :isClick="false" :lists="placeList" />
      </N2Header>
  </el-header>
</el-container>
  
</template>

<script>
//header 组件
import N2Header from "@/components/n2Header";
//screen
import Screen from "@/components/screen/screen";
export default {
  name:'Energy',
  components:{
    N2Header,
    Screen
  }
  
}
</script>

<style lang="scss" scoped>

</style>