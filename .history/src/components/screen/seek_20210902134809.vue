<template>
  <div class="seek">
    <div>
      <input type="text" readonly="" placeholder="楼层" @click="showUl" />
      <ul v-show="isShowUl">
        <li>ss</li>
        <li>ss</li>
      </ul>
    </div>
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
  methods: {
    //显示下拉框
    showUl() {
      this.isShowUl = !this.isShowUl;
    },
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
  div{

  }
  
}
</style>