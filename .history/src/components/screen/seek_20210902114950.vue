<template>
  <div class="seek">
    <input type="text" readonly="" placeholder="区域">
    <!-- <input type="text">
    <input type="text"> -->
  </div>
</template>

<script>
export default {
  name: "Seek",
};
</script>

<style lang="scss" scoped>
.seek {
  height: 0.4rem;
  background: #5692f7;
  border-radius: 0.08rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 0 0.04rem;
  input{
    width: .64rem;
    height: .24rem;
    border-radius: .04rem;
    border: 1px solid #085acd;
    ba
    // &::-webkit-input-placeholder {
    //     border: 1px solid #085acd;
    // }
    &:focus{
      outline: 0px solid #085acd;
    }
  }
}
</style>