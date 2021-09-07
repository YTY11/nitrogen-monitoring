<template>
  <div class="error-floor-table">
    <table>
      <thead>
        <tr>
          <td v-for="(item, index) in tableHead" :key="index" class="th-width">
            {{ item }}
          </td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in lists" :key="index">
          <td class="tb-width">{{ index + 1 }}</td>
          <td class="tb-width">{{ item[0] }}</td>
          <td class="tb-width" :class="item[1] > item[2] ? 's' : 's'">
            {{ item[1] }}
          </td>
          <td class="tb-width">{{ item[2] }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "ErrorFloorTable",
  props: {
    lists: {
      type: Array,
      default() {
        return [];
      },
    },
    tableHead: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  computed: {
    //判断字体颜色及图标样式
    isColor(now, last) {
      return now > last ? "s" : "s";
    },
  },
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
    line-height: 0.21rem;
    font-weight: 400;
    td {
      padding: 0;
    }
    thead {
      font-size: 0.14rem;
      background: #b6c6fb;
      .th-width {
        min-width: 1.83rem;
        height: 0.35rem;
      }
    }
    tbody {
      font-size: 0.12rem;
      .tb-width {
        min-width: 1.83rem;
        height: 0.3rem;
      }
      .red{
        color: #E02020;
        &::after{
          content:' ';
          display: block;
          width: .12rem;
          height: .18rem;
          ba
        }
      }
      .green{
        color: #6DD400;
      }
    }
  }
}
</style>