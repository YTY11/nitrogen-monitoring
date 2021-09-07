<template>
  <div class="seek">
    <input type="text" readonly="" placeholder="楼层" @click="showUl"/>
    <ul></ul>
  </div>
</template>

<script>
export default {
  name: "Seek",
  data(){
    return{
      isShowUl:false
    }
  }
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
  input {
    width: 0.64rem;
    height: 0.24rem;
    border-radius: 0.04rem;
    border: 1px solid #085acd;
    background: transparent;
    font-size: 0.14rem;
    color: #f0f0f0;
    letter-spacing: 0.5px;
    text-align: center;
    font-weight: 400;
    &:focus {
      outline: 0px solid #085acd;
    }
    &::-webkit-input-placeholder {
      color: #f0f0f0;
    }
  }
}
</style>