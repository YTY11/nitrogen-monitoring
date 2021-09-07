<template>
  <div class="error-underly">
    <div class="title">当月异常楼层排行</div>
    <slot name="center"></slot>
    <slot name="footer"></slot>
  </div>
</template>

<script>
export default {
  name: "ErrorUnderly",
};
</script>
<style lang="scss" scoped>
.error-underly {
  background: rgba(255, 255, 255, 0.4);
  border-radius: 0.2rem;
  .title {
    height: 0.3rem;
    line-height: 0.3rem;
    font-size: .18rem;
    color: rgba(0, 0, 0, 0.85);
    letter-spacing: 0.64px;
    text-align: center;
    font-weight: 400;
  }
}
</style>