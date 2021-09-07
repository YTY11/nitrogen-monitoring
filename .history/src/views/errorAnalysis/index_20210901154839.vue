<template>
<el-container>
   <!-- 头部 -->
    <el-header class="n2-electronic-header">
    </el-header>

    <!-- 主体内容 -->
    <el-main class="n2-electronic-main">
    </el-main>

</el-container>
  <div class="error-analysis">

  </div>
</template>

<script>
//header 组件
import N2Header from "@/components/n2Header";
//screen
import Screen from "@/components/screen/screen";
export default {
  name:'ErrorAnalysis'
}
</script>

<style lang="scss" scoped>
.n2-electronic-header {
  height: 0.4rem !important;
  margin-bottom: 0.05rem;
  padding: 0;
}
.n2-electronic-main {
  padding: 0;
  .err-floor {
    width: 3.64rem;
    height: 2.32rem;
  }
  .more-floor-charts{
    width:7.32rem;
    height: 2.32rem;
  }
}
</style>