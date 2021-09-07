<template>
  <div class="n2-error">
    <Select/>
  </div>
</template>

<script>
//选择组件
import Select from "@/components/n2Error/select"
//
export default {
  name: "N2Error",
  components:{
    Select
  }
};
</script>

<style lang="scss" scoped>
.n2-error {
  position: absolute;
  width: 7.2rem;
  height: 9rem;
  margin-left: 0.24rem;
  margin-top: 0.32rem;
  border-radius: 0.16rem;
  overflow: hidden;
  background: #e6e6e6;
}
</style>