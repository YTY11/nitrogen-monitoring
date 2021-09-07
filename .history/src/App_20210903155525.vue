<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
#app {
  position: relative;
  width: 100vw;
  height: 9.54rem;
  background: url("~@/assets/img/background.png") no-repeat;
  background-size: cover;
  box-sizing: border-box;
  font-family: PingFangTC-Medium;
  font-size: .16rem;
}
.el-icon-error:before {
    
    
  }
  [class*=" el-icon-"]{
    height: .4rem;
    font-size: 0.4rem;
    vertical-align: text-top;
  }
</style>
