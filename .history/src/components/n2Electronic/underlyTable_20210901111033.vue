<template>
  <div class="underly-table">
    <div class="title">
      <li></li>
      <span></span>
      <span></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "UnderlyTable",
};
</script>

<style lang="scss" scoped>
.underly-table {
  width: 3.64rem;
  height: 2.32rem;
  border-radius: 0.2rem;
  background: #b6c3fb;
  .title {
    width: 100%;
    height: 0.35rem;
    font-size: 0.14rem;
    color: rgba(0, 0, 0, 0.85);
    text-align: center;
    line-height: .21rem;
    font-weight: 500;
  }
}
</style>