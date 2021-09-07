<template>
  <div class="underly-table">
    <div class="title">
      <li>排行</li>
      <li>异常楼层</li>
      <li>数量</li>
    </div>
    <div class="table-msg">
      <table>
        <tr>
          <td>1</td>
          <td>2</td>
          <td>3</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "UnderlyTable",
};
</script>

<style lang="scss" scoped>
.underly-table {
  width: 3.64rem;
  height: 2.32rem;
  border-radius: 0.2rem;
  background: #b6c3fb;
  .title {
    width: 100%;
    height: 0.35rem;
    font-size: 0.14rem;
    color: rgba(0, 0, 0, 0.85);
    text-align: center;
    font-weight: 500;
    display: flex;
    align-items: center;
    li {
      list-style: none;
      min-width: 1.21rem;
    }
  }
  .table-msg {
    height: 1.97rem;
    background: rgba(255, 255, 255, 0.75);
    border-radius: 0.2rem;
  }
}
</style>