<template>
  <div class="error">
      <p>网络异常! 请尝试刷新......</p>
      <el-button type="primary" class="backg" @click="" plain>刷新</el-button>
  </div>
</template>

<script>
export default {
  name:'Error'
}
</script>

<style lang="scss" scoped>
  .error{
    position: absolute;
    height: 40vw;
    width: 70vw;
    background: rgba($color: #000000, $alpha: .5);
    border-radius: .2rem;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    text-align: center;
    p{
      font-size: .3rem;
      text-align: center;
      color: #fff;
    }
    .backg{
      background: coral;
    }
  }
</style>