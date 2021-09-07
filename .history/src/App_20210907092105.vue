<template>
  <div id="app" ref='app'>
    <router-view></router-view>
  </div>
</template>

<script>
export default{
  mounted(){
    console.dir(this.$refs.app.style.height = '9rem');
  }
}
  
</script>
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
.el-icon-error:before ,.el-icon-info:before,.el-icon-success:before{
    font-size: 0.4rem;
    vertical-align: text-top;
    
  }
  [class*=" el-icon-"]{
    height: .4rem;
  }
</style>
