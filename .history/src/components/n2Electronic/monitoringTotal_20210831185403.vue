<template>
  <div class="monitoring-total">
    <div class="monitoring-total-title">监控总数：300台</div>
    <div class="monitoring">
      <MonitoringTotalItem v-for="(item,index) in totalList" :key="index"/>
    </div>
  </div>
</template>

<script>

//引入子组件
import MonitoringTotalItem from './monitoringTotalItem.vue'
import green from '@/assets/img/monitoringTotal/green.png'
import grey from '@/assets/img/monitoringTotal/grey.png'
import red from '@/assets/img/monitoringTotal/red.png'
export default {
  name: "MonitoringTotal",
  data(){
    return{
      totalList:[
        {"img":green,"total":128},
        {"img":red,"total":128},
        {"img":grey,"total":128}
      ]
    }
  },
  components:{
    MonitoringTotalItem
  }
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
    border-radius: .2rem;

    display: flex;
    justify-content: space-around;
  }
}
</style>