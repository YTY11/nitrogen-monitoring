<template>
  <div class="analysis">
    <div class="profix-container">报警进度分析</div>
    <div class="content-container">
      <table border="0" cellspacing="0">
        <thead>
          <tr>
            <td rowspan="2">机故类型</td>
            <td colspan="3">维修进度</td>
            <td colspan="3">优先级</td>
            <td rowspan="2">ALL</td>
          </tr>
          <tr>
            <td>已派工</td>
            <td>维修中</td>
            <td>已维修</td>
            <td>H</td>
            <td>M</td>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(item, index) of analysis"
            :key="index"
            @click="clickItem(item, $event)"
            :type="item.Type"
          >
            <td>{{ exceptionType(item.Type) }}</td>
            <td type="todo" class="red underline">{{ item.Todo }}</td>
            <td class="underline" type="doing">{{ item.Doing }}</td>
            <td class="underline" type="done">{{ item.Done }}</td>
            <td class="underline" type="h">{{ item.H }}</td>
            <td class="underline" type="m">{{ item.M }}</td>
            <td class="underline" type="all">{{ item.All }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "Analysis",
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
  .content-container{
    padding 0.08rem
    background white
    box-sizing border-box
    > table{
      
    }
      width 100%
      text-align center
      > thead
        background #0091FF
        color #F0F0F0
        font-size .208333rem
      > tbody
        background #eaf0fd
      td
        width 1.145833rem
        height .372rem
        border-bottom 1px solid white
        border-left 1px solid white
        font-size 0.16rem
  }
  
    
}
</style>