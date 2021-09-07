<template>
  <div class="seek">
    <div class="seek-div" v-for="()">
      <input type="text" readonly="" placeholder="楼层" @click="showFloor" />
      <ul v-show="isShowFloor">
        <li>ss</li>
        <li>ss</li>
      </ul>
    </div>
    <img src="~@/assets/img/chaxun.png" @click="seekData">
  </div>
</template>

<script>
export default {
  name: "Seek",
  data() {
    return {
      isShowFloor: false,
      isShowXian: false,
    };
  },
  methods: {
    //显示下拉框
    showFloor() {
      this.isShowFloor = !this.isShowFloor;
    },
    showXian() {
      this.isShowXian = !this.isShowXian;
    },

    //查询数据
    seekData(){

    }
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
  img{
    margin-left: .2rem;
    margin-right: .05rem;
    width: .2rem;
    height: .2rem;
  }
  .seek-div {
    position: relative;
    display: flex;
    width: 0.58rem;
    height: 0.24rem;
    margin: 0 0.05rem;
    input {
      box-sizing: border-box;
      width: 0.58rem;
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
      box-sizing: border-box;
      z-index: 1;
      position: absolute;
      top: 0.2rem;
      list-style: none;
      border-top: 1px solid #085acd;
      font-size: 0.14rem;
      color: #f0f0f0;
      padding: 0;
      width: 0.58rem;
      text-align: left;
      background: #6e9ef7;
      li {
        padding-left: 0.05rem;
        height: 0.25rem;
        line-height: 0.25rem;
        box-sizing: border-box;
        border-bottom: 1px solid #085acd;
        border-left: 1px solid #085acd;
        border-right: 1px solid #085acd;
      }
    }
  }
}
</style>