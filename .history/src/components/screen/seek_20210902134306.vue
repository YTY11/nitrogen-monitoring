<template>
  <div class="seek">
    <input type="text" readonly="" placeholder="楼层" @click="showUl" />
    <ul v-show="is">
      <li>ss</li>
      <li>ss</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Seek",
  data() {
    return {
      isShowUl: false,
    };
  },
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
    position: relative;
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
  ul {
    z-index: 1;
    position: absolute;
    top: .4rem;
    list-style: none;
    border-top: 1px solid #085acd;
    font-size: 0.14rem;
    color: #f0f0f0;
    padding: 0;
    width: 0.64rem;
    text-align: left;
    background: #6e9ef7;
    li {
      padding-left: .05rem;
      height: 0.25rem;
      line-height: 0.25rem;
      box-sizing: border-box;
      border-bottom: 1px solid #085acd;
      border-left: 1px solid #085acd;
      border-right: 1px solid #085acd;
    }
  }
}
</style>