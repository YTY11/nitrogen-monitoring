<template>
  <div class="multi-background">
    <div class="main">
    </div>
  </div>
</template>

<script>
export default {
  name:'MultiBackground'
}
</script>

<style lang="scss">
.multi-background{
   width: 100vw;
  height: 954px;
  background: url('~@/assets/img/background.png') no-repeat;
  background-size: cover;
  padding: .1rem .08rem;
  box-sizing: border-box;
  font-family: PingFangTC-Medium;
  .main{
    width: 100%;
    height: 100%;
    background: url('~@/assets/img/backgroundMoHu.png') no-repeat ;
    background-size: cover;
    padding: .05rem .1rem .03rem;
    box-sizing: border-box;
  }
}
</style>