<template>
  <div class="analysis">
    <div class="profix-container">异常管理</div>
    <div class="content-container">
      <table border="0" cellspacing="0">
        <thead>
          <tr>
            <td class="type" rowspan="2">机故类型</td>
            <td colspan="4">维修进度</td>
            <td colspan="2">优先级</td>
            <td rowspan="2">ALL</td>
          </tr>
          <tr>
            <td>待处理</td>
            <td>处理中</td>
            <td>已处理</td>
            <td>忽略</td>
            <td>H</td>
            <td>M</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in analysis" :key="index">
            <td>{{ item.Type }}</td>
            <td class="text red" @click="clickShowData(0, item.Type)">
              <span class="textOne">{{ item.Todo }}</span>
            </td>
            <td class="text" @click="clickShowData(1, item.Type)">
              {{ item.Doing }}
            </td>
            <td class="text" @click="clickShowData(2, item.Type)">
              {{ item.Done }}
            </td>
            <td class="text" @click="clickShowData(3, item.Type)">
              {{ item.Ignore }}
            </td>
            <td class="text" @click="clickShowData('H', item.Type)">
              {{ item.H }}
            </td>
            <td class="text" @click="clickShowData('M', item.Type)">
              {{ item.M }}
            </td>
            <td class="text" @click="clickShowData('ALL', item.Type)">
              {{ item.ALL }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "Analysis",
  props: {
    analysis: {
      type: Array,
      default() {
        return [];
      },
    },
    exceptionList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      showExceptionList: [],
    };
  },
  methods: {
    //根据异常管理查询数据
    clickShowData(value, type) {
      this.$emit("clickShowData", value, type);
    },
  },
};
</script>

<style lang="scss" scoped>
.analysis {
  .profix-container {
    width: 100%;
    height: 0.3rem;
    line-height: 0.3rem;
    text-align: center;
    font-size: 0.16rem;
    color: rgba(0, 0, 0, 0.85);
    letter-spacing: 0.57px;
    font-weight: 400;
  }
  .content-container {
    background: #95b3f5;
    box-sizing: border-box;

    table {
      width: 100%;
      text-align: center;
      font-size: .1rem;
      color: rgba(0, 0, 0, 0.85);
      text-align: center;
      line-height: .21rem;
      font-weight: 500;
      thead {
        background: #95B1F5;
       
      }
      tbody {
        background: #E1E6F9;
      }
      td {
        width: 1.145833rem;
        height: 0.28rem !important;
        font-size: 0.1rem;
      }
      .red {
        color: red;
      }
      .type {
        min-width: 1rem;
      }
      .text {
        text-decoration-line: underline;
      }
    }
  }
}
</style>