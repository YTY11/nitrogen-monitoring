<template>
  <div class="item">
    <div class="item-title">{{title}}</div>
    <div class="item-data">
      <img src="~@/assets/img/monitoringTotal/green.png" alt="" />
      <span>{{total}}</span>
      <span>台</span>
    </div>
  </div>
</template>

<script>
import defaultImg from '@/assets/img/monitoringTotal/green.png'
export default {
  name: "MonitoringTotalItem",
  props: {
    title: {
      type: String,
      default: "正常",
    },
    imgPath: {
      type: String,
      default: "~@/assets/img/monitoringTotal/green.png",
    },
    total:{
      type:Number,
      default:128
    }
  },
};
</script>

<style lang="scss" scoped>
.item {
  width: 2.36rem;
  .item-title {
    height: 0.51rem;
    line-height: 0.51rem;
    font-size: 0.24rem;
    color: rgba(0, 0, 0, 0.85);
    letter-spacing: 0.86px;
    text-align: center;
    font-weight: 500;
  }
  .item-data {
    height: 1.73rem;
    background: rgba(216, 216, 216, 0.05);
    border: 1px solid rgba(29, 89, 211, 0.6);
    border-radius: 0.08rem;
    font-size: 12px;
    display: flex;
    flex-direction: column;
    img {
      width: 0.38rem;
      height: 0.38rem;
      margin: 0.1rem 0 0.14rem 0.1rem;
    }
    :nth-child(2) {
      height: 0.5rem;
      line-height: 0.5rem;
      font-size: 0.36rem;
      color: #5fb900;
      letter-spacing: 1.29px;
      text-align: center;
      font-weight: 500;
    }
    :nth-child(3) {
      font-size: 0.24rem;
      color: rgba(0, 0, 0, 0.85);
      letter-spacing: 0.86px;
      text-align: right;
      font-weight: 400;
      margin-top: 0.18rem;
      margin-right: 0.1rem;
    }
  }
}
</style>