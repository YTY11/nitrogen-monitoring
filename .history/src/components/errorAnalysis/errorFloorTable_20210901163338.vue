<template>
  <div class="error-floor-table">
    <table>
      <thead></thead>
      <tbody></tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "ErrorFloorTable",
};
</script>

<style lang="scss" scoped>
.error-floor-table {
  margin-top: 0.08rem;
  background: #ecf0fd;
  border-radius: 0.2rem;
  overflow: auto;
  table {
    border-collapse: collapse;
    color: rgba(0, 0, 0, 0.85);
      text-align: center;
      line-height: 21px;
      font-weight: 400;
    thead {
      font-size: 0.14rem;
      
    }
    tbody {
      font-size: .12rem;
      
    }
  }
}
</style>