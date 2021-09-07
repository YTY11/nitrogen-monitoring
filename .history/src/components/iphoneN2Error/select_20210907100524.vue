<template>
  <div class="select">
    <div class="floor-select">
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
          v-for="(item, index) in floorList"
          :key="index"
          @click="activeFloor(item)"
        >
          {{ item }}
        </li>
      </ul>
    </div>
    <div class="line-select div-margin">
      <input
        type="text"
        class="select-input"
        ref="line"
        readonly
        placeholder="请选择"
        @click="isShowLineList"
      />
      <ul v-show="isLineShow" class="floor-ul line-ul">
        <li
          v-for="(item, index) in lineDatas"
          :key="index"
          @click="activeLine(item)"
        >
          {{ item }}
        </li>
      </ul>
    </div>
    <!-- <button @click="seek">查询</button> -->
  </div>
</template>

<script>
export default {
  name: "Select",
  props: {
    floorList: {
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
      floor: "",
      line: "",
      lineDatas: [],
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
      this.$refs.line.value = "线体";
      this.isFloorShow = false;
      this.$refs.floor.value = data;
      this.floor = data;
      this.lineDatas = [];
      if (data != "") {
        this.lineDatas.push("ALL");
        if (this.lineList[data]) {
          this.lineDatas.push(...this.lineList[data]);
        }
      }
    },
    activeLine(data) {
      this.isLineShow = false;
      this.$refs.line.value = data;
      this.line = data;
    },
    //查询数据
    seek() {
     this.floor = this.$refs.floor.value
     this.line = this.$refs.line.value
      let floor = this.floor;
      let line = this.line;
      if (floor != "" && line != "" && line != "线体") {
        this.$emit("seek", floor, line);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.select {
  height: 0.28rem;
  display: flex;
  box-sizing: border-box;
  align-items: center;
  font-size: 0.1rem;
  background: rgba(216,216,216,0.20);
  border-radius: 0.08rem;
  margin-top: 0.04rem;
  margin-left: 0.04rem;
  input {
    width: .5rem;
    height: 0.2rem;
    line-height: 0.2rem;
    border-radius: 0.04rem;
    background: transparent;
    text-align: center;
    border: 1px solid #085ACD;
    color: #fff;
    &:focus {
      outline: 0px;
    }
    &::-webkit-input-placeholder {
      color: #fff;
    }
  }
  .div-margin {
    margin-left: 0.3rem;
  }
  .floor-select {
    position: relative;
    
  }
  .line-select {
    position: relative;
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