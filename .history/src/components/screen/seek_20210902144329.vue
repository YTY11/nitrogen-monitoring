<template>
  <div class="seek">

    <div class="seek-div" @click="showFloor">
      <input type="text" ref="floor" readonly="" placeholder="楼层"  />
      <ul v-show="isShowFloor">
        <li  v-for="(floor,id) in Floors" :key="id" @click="getFloor(floor)">{{floor}}</li>
      </ul>
    </div>
    <div class="seek-div" @click="showLine">
      <input type="text"  ref="line" readonly="" placeholder="线体"  />
      <ul v-show="isShowLint">
        <li  v-for="(line,id) in Lines[floor]" :key="id" @click="getLine(line)">{{line}}</li>
      </ul>
    </div>
    <img src="~@/assets/img/chaxun.png" @click="seekData">
  </div>
</template>

<script>
export default {
  name: "Seek",
  props:{
    Floors:{
      type:Array,
      default(){
        return[]
      }
    },
    Lines:{
      type:Object,
      default(){
        return{}
      }
    }
  },
  data() {
    return {
      floor:'',
      line:'',
      isShowFloor: false,
      isShowLine: false,
    };
  },
  methods: {
    //显示下拉框
    showFloor() {
      this.isShowFloor = !this.isShowFloor;
      this.isShowLine = false
    },
    showLine() {
      this.isShowLine = !this.isShowLine;
      this.isShowFloor = false
    },
    //选择楼层
    getFloor(floor){
      this.floor = floor
      this.$refs.floor.value = floor
    },
    //选择线体
    getLine(line){
      this.line = line
      this.$refs.line.value = line
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