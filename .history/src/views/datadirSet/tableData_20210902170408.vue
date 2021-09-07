<template>
  <div class="table-data">
    <table>
      <thead></thead>
      <tbody></tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "TableData",
};
</script>

<style lang="scss" scoped>
.table-data {
  width: 7.32rem;
  background: rgba(255, 255, 255, 0.4);
  border-radius: 0.2rem;
  table {
    border-collapse: collapse;
    thead {
      font-size: 0.14rem;
      color: rgba(0, 0, 0, 0.85);
      text-align: center;
      line-height: 0.21rem;
      font-weight: 500;
    }
    tbody {
      font-size: 0.14rem;
      color: rgba(0, 0, 0, 0.85);
      text-align: center;
      line-height: 0.21rem;
      font-weight: 500;
    }
  }
}
</style>