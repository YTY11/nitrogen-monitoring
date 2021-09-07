<template>
  <div class="error-floor-table">
    <table>
      <thead>
        <tr>

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
        return[]
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
    }
    tbody {
      font-size: 0.12rem;
    }
  }
}
</style>