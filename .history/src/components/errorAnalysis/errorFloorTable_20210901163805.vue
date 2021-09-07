<template>
  <div class="error-floor-table">
    <table>
      <thead>
        <tr v-for="(item,index) in lists" :key="index">
          <td class="th-width">{{item}}</td>
        </tr>
      </thead>
      <tbody>
          <tr>
          
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "ErrorFloorTable",
  props:{
    lists:{
      type:Array,
      default(){
        return[["排行","楼层","当月异常次数","上个月异常次数"],[1,2,1,1]]
      }
    }
  }
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
    thead {
      font-size: 0.14rem;
      background: #B6C6FB;
      .th-width{
        min-width: none;
      }
    }
    tbody {
      font-size: 0.12rem;
    }
  }
}
</style>