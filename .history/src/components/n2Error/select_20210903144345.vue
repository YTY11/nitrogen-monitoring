<template>
  <div class="select">
    <div class="floor-select">
      <span>楼层:</span>
      <i @click="isShowFloorList"></i>
      <input
        type="text"
        class="select-input"
        ref="floor"
        readonly
        placeholder="请选择"
        @click="isShowFloorList"
      />
      <ul v-show="isFloorShow" class="floor-ul">
        <li
          v-for="(item, index) in floorlist"
          :key="index"
          @click="activeFloor(item)"
        >
          {{ item }}
        </li>
      </ul>
    </div>
    <div class="line-select div-margin">
      <span>线体:</span>
      <i @click="isShowLineList"></i>
      <input
        type="text"
        class="select-input"
        ref="line"
        readonly
        placeholder="请选择"
        @click="isShowLineList"
      />
      <ul v-show="isLineShow" class="floor-ul line-ul">
        <li v-for="(item,index) in lineList[floor]" :key="index" @click="activeLine(item)">{{item}}</li>
      </ul>
    </div>
    <button @click="seek">查询</button>
  </div>
</template>

<script>
export default {
  name: "Select",
  props: {
    floorlist: {
      type: Array,
      default() {
        return [];
      },
    },
    lineList: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      isFloorShow: false,
      isLineShow: false,
      floor:'',
      line:'',
    };
  },
  methods: {
    //显示楼层选项
    isShowFloorList() {
      this.isLineShow = false;
      this.isFloorShow = !this.isFloorShow;
    },
    isShowLineList() {
      this.isFloorShow = false;
      this.isLineShow = !this.isLineShow;
    },
    //选择数据
    activeFloor(data) {
      this.isFloorShow = false;
      this.$refs.floor.value = data;
      this.floor = data
    },
    activeLine(data) {
      this.isLineShow = false;
      this.$refs.line.value = data;
      this.line = data
    },
    //查询数据
    seek(){
      let floor = this.floor
      let line = this.line

      
    }
  },
};
</script>

<style lang="scss" scoped>
.select {
  width: 100%;
  height: 0.8rem;
  display: flex;
  // justify-content: space-between;
  box-sizing: border-box;
  align-items: center;
  box-shadow: 0 0.01rem 0.04rem 0 rgb(0 0 0 / 50%);
  font-size: 0.16rem;
  background: #fff;
  padding-left: 0.1rem;
  i {
    display: inline-block;
    width: 0.1rem;
    height: 0.1rem;
    border-top: 0.02rem solid #000000;
    border-left: 0.02rem solid #000000;
    opacity: 0.8;
    position: absolute;
    margin-top: 0.09rem;
    right: 0.195313rem;
    transform: rotate(-135deg);
  }
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
      outline: 0px;
    }
    &::-webkit-input-placeholder {
      color: #000;
    }
  }
  .div-margin {
    margin-left: 0.3rem;
  }
  .floor-select {
    position: relative;
    input {
      width: 1.38rem;
    }
  }
  .line-select {
    position: relative;
    input {
      width: 1.7rem;
    }
    .line-ul {
      width: 1.7rem;
    }
  }
  button {
    margin-left: 0.3rem;
    border: 0;
    width: 1.015625rem;
    height: 0.364583rem;
    background: #f7b500;
    box-shadow: 0.02rem 0.02rem 0.06rem 0 rgba(0, 0, 0, 0.5);
    border-radius: 0.08rem;
    color: white;
    &:active {
      background: #ff7a06 !important;
      color: white;
    }
  }
  ul {
    position: absolute;
    box-sizing: border-box;
    z-index: 10;
    list-style: none;
    width: 1.38rem;
    height: 1.5rem;
    max-height: 2rem;
    position: absolute;
    left: 0.59rem;
    top: 0.43rem;
    overflow: auto;
    letter-spacing: 0.02rem;
    padding: 0;
    margin: 0;
    li {
      width: 100%;
      height: 0.3rem;
      line-height: 0.3rem;
      box-sizing: border-box;
      padding-left: 0.1rem;
      border-top: 1px solid grey;
      border-left: 1px solid grey;
      border-right: 1px solid grey;
      color: #000;
      background: #fff;
    }
  }
}
</style>