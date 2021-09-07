<template>
  <div class="more-floor">

  </div>
</template>

<script>
export default {
  name:'ChartsMoreFloor',
  data() {
    return {
      myChart: "",
    };
  },
  //挂载开始之前被调用
  beforeMount() {
    //监听窗口变化
    window.addEventListener("resize", this.chartResize);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.chartResize);
  },
}
</script>
<style lang="scss" scoped>
.more-floor{
  width: 100%;
  height: 100%;
}
</style>

