<template>
   <div class="nav">
      <el-container style="height: 100%">
        <router-view></router-view>
      </el-container>
    </div>
</template>

<script>
export default {
  name:"Layout"
}
</script>

<style lang="scss" scoped>
.nav {
  poa
    width: 100%;
    height: 100%;
    background: url("~@/assets/img/backgroundMoHu.png") no-repeat;
    background-size: cover;
    padding: 0.05rem 0.1rem 0.03rem;
   
    box-sizing: border-box;
  }
</style>