<template>
  <div class="table-data">
    <table>
      <thead>
        <tr>
          <th class="index" rowspan="2">NO.</th>
          <th class="floor" rowspan="2">楼层</th>
          <th class="line" rowspan="2">线体</th>
          <th class="num" rowspan="2">设备编号</th>
          <th class="spec" colspan="2">流量Spec</th>
          <th class="set" rowspan="2">操作</th>
          <th class="jianKong" rowspan="2">监控</th>
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
        max-width: .67rem;
        max-height: .68rem;
      }
      .floor,.line,.num{
        max-width: .95rem;
        max-height: .68rem;
      }
      .spce{
        
      }
    }
    tbody {
    }
  }
}
</style>