<template>
  <el-container>
    <!-- 头部 -->
    <el-header class="n2-electronic-header">
      <N2Header>
    </el-header>
    <!-- 主体内容 -->
    <el-main class="n2-electronic-main"></el-main>
  </el-container>
</template>

<script>
//header 组件
import N2Header from "@/components/n2Header";
export default {
  name: "DatadirSet",
};
</script>
<style lang="scss" scoped>
.n2-electronic-header {
  height: 0.4rem !important;
  margin-bottom: 0.05rem;
  padding: 0;
}
.n2-electronic-main {
  padding: 0;
}
</style>