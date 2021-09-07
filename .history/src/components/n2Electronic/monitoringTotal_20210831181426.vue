<template>
  <div class="monitoring-total">
    <div class="monitoring-total-title">
      <p></p> 监控总数：300台</div>
  </div>
</template>

<script>
export default {
  name: "MonitoringTotal",
};
</script>

<style lang="scss" scoped>
.monitoring-total {
  width: 7.32rem;
  height: 3.43rem;
  background: rgba(255, 255, 255, 0.4);
  border-radius: 0.2rem;
  text-align: center;
  .monitoring-total-title {
    font-size: .18rem;
    color: rgba(0, 0, 0, 0.85);
    letter-spacing: 0.64px;
    text-align: center;
    font-weight: 400;
  }
}
</style>