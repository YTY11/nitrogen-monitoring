<template>
  <div id="app">
    <div class="nva">
      <router-view></router-view>
    </div>
  </div>
</template>

<style lang="scss">
#app{
  width: 100vw;
  height: 954px;
  background: url('~@/assets/img/background.png') no-repeat;
  background-size: cover;
  padding: .1rem .08rem;
  box-sizing: border-box;
  .nva{
    width: 100%;
    height: 100%;
    background: url('~@/assets/img/backgroundMoHu.png') no-repeat ;
    background-size: cover;
    padding: .05rem .1rem .03rem;
  }
}

</style>
