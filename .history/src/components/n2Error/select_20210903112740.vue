<template>
  <div class="select">
    <div class="floor-select">
      <span>楼层:</span>
      <input type="text" class="select-input" readonly placeholder="请选择" />
    </div>
    <div class="floor-select">
      <span>楼层:</span>
      <input type="text" class="select-input" readonly placeholder="请选择" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Select",
  props: {},
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.select {
  width: 100%;
  height: 0.8rem;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  align-items: center;
  box-shadow: 0 0.01rem 0.04rem 0 rgb(0 0 0 / 50%);
  font-size: 0.16rem;
  background: #fff;
  padding-left: 0.1rem;
  span {
    margin-right: 0.208333rem;
  }
  input {
    width: 1.38rem;
    height: 0.34rem;
    line-height: 0.364583rem;
    text-indent: 0.104167rem;
    border-radius: 0.052083rem;
    border: 1px solid grey;
    &:focus {
      outline: 0px
    }
    &::-webkit-input-placeholder {
      color: #000;
    }
  }
}
</style>