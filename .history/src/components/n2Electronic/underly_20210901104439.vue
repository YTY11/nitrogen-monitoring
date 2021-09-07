<template>
  <div class="underly">
    <div class="title"></div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Underly",
};
</script>

<style lang="scss" scoped>
.underly {
  width: 7.32rem;
  height: 2.62rem;
  background: rgba(255, 255, 255, 0.4);
  border-radius: 0.2rem;
  margin-top: 0.08rem;
  display: flex;
  justify-content: space-between;
  .title {
    font-size: 18px;
    height: .3;
    color: rgba(0, 0, 0, 0.85);
    letter-spacing: 0.64px;
    text-align: center;
    font-weight: 400;
  }
}
</style>