<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
#app {
  width: 100vw;
  height: 9.54rem;
  background: url("~@/assets/img/background.png") no-repeat;
  background-size: cover;
  box-sizing: border-box;
  font-family: PingFangTC-Medium;
   padding: 0.1rem 0.08rem 0.08rem;
}
.el-icon-error:before {
    font-size: 0.4rem;
    vertical-align: text-top;
    
  }
  [class*=" el-icon-"]{
    height: .4rem;
  }
</style>
