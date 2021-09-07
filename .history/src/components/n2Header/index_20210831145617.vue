<template>
  <div class="n2-header">
    <div class="header-left">
        <slot name="header-left"></slot>
    </div>
    <div class="header-centre">
<slot name="header-left"></slot>
    </div>
    <div class="header-right">
<slot name="header-left"></slot>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.n2-header{
  margin-bottom: .05rem;
}
</style>