<template>
  <div class="item">
    <div class="item-title">正常</div>
    <div class="item-data">
      <img src="~@/assets/img/monitoringTotal/green.png" alt="">
      <span>280</span>
      <span></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "MonitoringTotalItem",
};
</script>

<style lang="scss" scoped>
.item {
  width: 2.36rem;
  .item-title {
    height: 0.51rem;
    line-height: 0.51rem;
    font-size: 0.24rem;
    color: rgba(0, 0, 0, 0.85);
    letter-spacing: 0.86px;
    text-align: center;
    font-weight: 500;
  }
  .item-data {
    height: 1.53rem;
    background: rgba(216, 216, 216, 0.05);
    border: 1px solid rgba(29, 89, 211, 0.6);
    border-radius: .08rem;
  }
}
</style>