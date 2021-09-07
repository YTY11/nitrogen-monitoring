<template>
  <div class="n2-error">
    <Select />
    <div class="content-middle">
      <Analysis />
    </div>
 <div class="content-bottom">
  <Info/>
 </div>
  
  </div>
</template>

<script>
//选择组件
import Select from "@/components/n2Error/select";
// 报警进度分析
import Analysis from "@/components/n2Error/analysis";
import Info from "@/components/n2Error/info";
export default {
  name: "N2Error",
  components: {
    Select,
    Analysis,
    Info
  },
};
</script>

<style lang="scss" scoped>
.n2-error {
  position: absolute;
  width: 7.2rem;
  height: 9rem;
  margin-left: 0.24rem;
  margin-top: 0.32rem;
  border-radius: 0.16rem;
  overflow: hidden;
  background: #e6e6e6;
  .content-middle {
    width: 7.12rem;
    height: 2.06rem;
    box-sizing: border-box;
    margin-left: 0.04rem;
    margin-top: 0.03rem;
    background: #ffffff;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.5);
    border-radius: 0 0 16px 16px;
    overflow: hidden;
  }
}
</style>