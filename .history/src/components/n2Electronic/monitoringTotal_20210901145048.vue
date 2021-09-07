<template>
  <div class="monitoring-total">
    <div class="monitoring-total-title">监控总数: {{detailMessage.AllMachine}}台</div>
    <div class="monitoring">
      <MonitoringTotalItem
        v-for="(item, index) in totalList"
        :key="index"
        :title="item.title"
        :imgPath="item.img"
        :total="item.total"
      />
    </div>
    <div class="monitoring-table">
      <table border="0">
        <thead>
          <tr>
            <td class="td-width">异常原因</td>
            <td class="td-width">流量超标</td>
            <td class="td-width">低于设置下线</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>数量</td>
            <td>{{detailMessage.allAbnormalUp}}</td>
            <td>{{detailMessage.allAbnormalDown}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
//引入子组件
import MonitoringTotalItem from "./monitoringTotalItem.vue";
//引入本地图片
import green from "@/assets/img/monitoringTotal/green.png";
import grey from "@/assets/img/monitoringTotal/grey.png";
import red from "@/assets/img/monitoringTotal/red.png";

export default {
  name: "MonitoringTotal",
  props:{
    detailMessage:{
      type:Object,
      default(){
        return{}
      }
    },
    detailMessageItemList:{
      type:
    }
  },
  created(){
    this.totalList = [
        { img: green, total: this.detailMessage.AllNormal, title: "正常" },
        { img: red, total: this.detailMessage.AllAbnormal, title: "异常" },
        { img: grey, total: this.detailMessage.AllOffline, title: "关机" },
      ]
  },
  data() {
    return {
      totalList: [
        { img: green, total: 128, title: "正常" },
        { img: red, total: 128, title: "异常" },
        { img: grey, total: 128, title: "关机" },
      ],
    };
  },
  components: {
    MonitoringTotalItem,
  },
};
</script>

<style lang="scss" scoped>
.monitoring-total {
  width: 7.32rem;
  height: 3.43rem;
  background: rgba(255, 255, 255, 0.4);
  border-radius: 0.2rem;
  text-align: center;
  .monitoring-total-title {
    height: 0.3rem;
    line-height: 0.3rem;
    font-size: 0.18rem;
    color: rgba(0, 0, 0, 0.85);
    letter-spacing: 0.64px;
    text-align: center;
    font-weight: 400;
  }
  .monitoring {
    width: 7.32rem;
    height: 2.32rem;
    background: rgba(255, 255, 255, 0.75);
    border-radius: 0.2rem;

    display: flex;
    justify-content: space-around;
    padding: 0 0.05rem;
    box-sizing: border-box;
  }
  .monitoring-table {
    height: 0.73rem;
    margin-top: 0.08rem;
    color: rgba(0, 0, 0, 0.85);
    text-align: center;
    line-height: 21px;
    font-weight: 400;
    border-radius: .2rem;
    overflow: hidden;
    border: 0;
    background: #ECF1FD;
    table {
      border-collapse:collapse;
      width: 100%;
      border: 0 !important;
      thead {
        font-size: 0.14rem;
        height: .35rem;
        background: #AEBBF0;
      }
      tbody {
        height: .3rem;
        font-size: 0.12rem;
        
      }
      .td-width{
        min-width: 2.44rem;
      }
    }
  }
}
</style>