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
  .nva{
    width: 100%;
    height: 100%;
    padding: .1rem .08rem;
    box
    background: url('~@/assets/img/backgroundMoHu.png') no-repeat cover;
    // background-size: cover;
  }
}

</style>
