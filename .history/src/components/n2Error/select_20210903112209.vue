<template>
  <div class="select">
    <span v-if="!clientWidth">楼层:</span>
        <input type="text" class="select-input" v-model="floor" @click="isShowFloorList" readonly placeholder="请选择" />
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
  padding-left: .1rem;
}
</style>