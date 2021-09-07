<template>
  <div class="table-data">
    <table>
      <thead>
        <tr>
          <th colspan="index" rowspan="2">NO.</th>
          <th rowspan="2">楼层</th>
          <th rowspan="2">线体</th>
          <th rowspan="2">设备编号</th>
          <th colspan="2">流量Spec</th>
          <th rowspan="2">操作</th>
          <th rowspan="2">监控</th>
        </tr>
        <tr>
          <th>Low Limit</th>
          <th>High Linit</th>
        </tr>
      </thead>
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
    font-size: 0.14rem;
    color: rgba(0, 0, 0, 0.85);
    text-align: center;
    line-height: 0.21rem;
    font-weight: 500;
    thead {
      .index{
        max
      }
    }
    tbody {
    }
  }
}
</style>