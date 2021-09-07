<template>
  <div id="app">
    <div class="nav">
      <el-container style="height: 100%">
        <router-view></router-view>
      </el-container>
    </div>
  </div>
</template>

<style lang="scss">
#app {
  width: 100vw;
  height: 9.54rem;
  background: url("~@/assets/img/background.png") no-repeat;
  background-size: cover;
  padding: 0.1rem 0.08rem 0.08rem;
  box-sizing: border-box;
  font-family: PingFangTC-Medium;
  .nav {
    width: 100%;
    height: 100%;
    background: url("~@/assets/img/backgroundMoHu.png") no-repeat;
    background-size: cover;
    padding: 0.05rem 0.1rem 0.03rem;
    box-sizing: border-box;
  }
  
}
.el-icon-error:before {
    font-size: 0.16rem;
    
  }
</style>
