<template>
  <div class="n2-header">
    <div class="header-left">
      <button>郑州</button>
      <button>郑州</button>
      <button>郑州</button>
    </div>
    <slot name="header-centre"></slot>
    <div class="header-right">
      <slot name="header-right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "N2Header",
};
</script>

<style lang="scss" scoped>
.n2-header {
  margin-bottom: 0.05rem;
  display: flex;
  .header-left {
    width: 1.98rem;
    height: 0.4rem;
    background: url("~@/assets/img/screen.png") no-repeat;
    background-size: cover;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    button {
      width: 0.58rem;
      height: 0.24rem;
      font-size: .14rem;
      color: #f0f0f0;
      letter-spacing: 0.5px;
      text-align: center;
      font-weight: 400;
      border
    }
  }
  .header-right {
    margin-left: auto;
  }
}
</style>