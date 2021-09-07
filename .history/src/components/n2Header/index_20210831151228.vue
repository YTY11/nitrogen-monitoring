<template>
  <div class="n2-header">
    <div class="header-left">
      <slot name="header-left"></slot>
    </div>
    <slot name="header-centre"></slot>
    <div class="header-right">
      <slot name="header-right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name:'N2Header'
};
</script>

<style lang="scss" scoped>
.n2-header {
  margin-bottom: 0.05rem;
  display: flex;
  .header-left{
    width: 1.98rem;
    height: .4rem;
    background: url('~@/assets/');
  }
  .header-right{
    margin-left: auto;
  }
}
</style>