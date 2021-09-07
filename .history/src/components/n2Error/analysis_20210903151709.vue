<template>
  <div class="analysis">
    <div class="profix-container">报警进度分析</div>
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
            <td class="text" @click="clickShowData(0, item.Type)">
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
  },
};
</script>

<style lang="scss" scoped>
.analysis {
  .profix-container {
    width: 100%;
    height: 0.36rem;
    text-indent: 0.12rem;
    color: black;
    font-size: 0.18rem;
    line-height: 0.36rem;
    background: #e6e6e6;
  }
  .content-container {
    padding: 0.08rem;
    background: white;
    box-sizing: border-box;
    
    table {
      width: 100%;
      text-align: center;
      .type{
        min
      }
      thead {
        background: #0091ff;
        color: #f0f0f0;
        font-size: 0.208333rem;
      }
      tbody {
        background: #eaf0fd;
      }
      td {
        width: 1.145833rem;
        height: 0.372rem !important;
        border-bottom: 1px solid white;
        border-left: 1px solid white;
        font-size: 0.16rem;
      }
      .red {
        color: red;
      }
    }
  }
}
</style>