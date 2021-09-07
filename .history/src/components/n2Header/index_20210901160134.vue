<template>
  <div class="n2-header">
    <slot name="left"></slot>
    <slot name="center"></slot>
    <div class="right">
      <span
        v-for="(item, index) in pathList"
        :key="index"
        :path="item.path"
        @click="clickPath(index,item.path)"
        :class="{ 'click-path': index == isPathActive }"
        >{{ item.name }}</span
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "N2Header",
  props: {
    placeList: {
      type: Array,
      default() {
        return ["郑州", "观澜", "太原"];
      },
    },
    timeList: {
      type: Array,
      default() {
        return ["日", "周", "月", "年"];
      },
    },
    isClick: {
      type: Boolean,
      default: true,
    },
    defaultActive: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      pathList: [
        {
          path: "/n2Electronic",
          name: "电子看板",
        },
        {
          path: "/errorAnalysis",
          name: "异常分析",
        },
        {
          path: "/text2",
          name: "能耗排名",
        },
        {
          path: "/text3",
          name: "资料设置",
        },
      ],
      isPathActive: 0,
    };
  },
  components: {},
  mounted
  computed:{
    nowPath(){
      return this.$router
    }
  },
  methods: {
    //切换页面
    clickPath(index,path) {
      this.isPathActive = index;
      this.$router.push(path)
      console.log(path);
    },
  },
};
</script>

<style lang="scss" scoped>
.n2-header {
  height: 40px;
  display: flex;
  .header-right {
    margin-left: auto;
  }
  .right {
    margin-left: auto;
    display: flex;
    align-items: center;
    span {
      font-size: 0.12rem;
      color: rgba(50, 197, 255, 0.5);
      letter-spacing: 0.75px;
      text-align: center;
      font-weight: 600;
      margin: 0 0.05rem;
      padding-bottom: .02rem;
    }
    .click-path {
      color: #44d7b6;
      border-bottom: 1px solid #44d7b6;
    }
  }
}
</style>