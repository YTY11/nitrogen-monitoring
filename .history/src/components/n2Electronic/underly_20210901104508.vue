<template>
  <div class="underly">
    <div class="title">{{title}}</div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Underly",
  paops
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
    font-size: .18rem;
    height: .3rem;
    line-height: .3rem;
    color: rgba(0, 0, 0, 0.85);
    letter-spacing: 0.64px;
    text-align: center;
    font-weight: 400;
  }
}
</style>