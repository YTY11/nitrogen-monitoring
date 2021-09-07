<template>
  <div class="table-data">
    <table>
      <thead>
        <tr>
          <th class="index" rowspan="2">NO.</th>
          <th class="floor" rowspan="2">楼层</th>
          <th class="line" rowspan="2">线体</th>
          <th class="num" rowspan="2">设备编号</th>
          <th class="spec" colspan="2">流量Spec</th>
          <th class="set" rowspan="2">操作</th>
          <th class="jianKong" rowspan="2">监控</th>
        </tr>
        <tr>
          <th>Low Limit</th>
          <th>High Linit</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item,index) in specMessage" :key="index">
        <td>{{index + 1}}</td>
        <td>{{item.Floor}}</td>
        <td>{{item.LineName}}</td>
        <td>{{item.MachineId}}</td>
        <td class="edit" v-if="item.msg=='修改'">{{item.LowLimit}}</td>
        <td class="edit" v-else>
          <input type='number' name='editname' class='eidt-input' v-model="item.newLowLimit" :value="item.LowLimit">
        </td>
        <td class="edit" v-if="item.msg=='修改'">{{item.HighLimit}}</td>
        <td class="edit" v-else>
          <input type='number' name='editname' class='eidt-input' v-model="item.newHighLimit"  :value="item.HighLimit">
        </td>
        <td>
          <button  type="button" class="layui-btn layui-btn-sm layui-btn-normal" @click="change(index,item.Floor,item.LineName,item.MachineId,item.msg)" style="width: 60px;">{{item.msg}}</button>
        </td>

        <td>
          <input @change="changeChecked(item.Floor,item.LineName,item.MachineId,item.Flag)" type="checkbox" :checked="item.Flag==0"  >
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "TableData",
  props:{
    specMessage:{
      type:Array,
      default(){
        return[]
      }
    }
  },
  data(){
    return{
      checked:true,
    }
  },
  methods:{
    //修改氮气数值
    change(index,floor,line,machineId,msg) {
      @change
      console.log(msg)
      if(msg == "修改"){
        //Vue直接修改数组不是响应式的，使用$forceUpdate实现响应式
        this.specMessage[index].msg='保存'
        this.$forceUpdate()
      }
      else if(msg == "保存"){
        //Vue直接修改数组不是响应式的，使用$forceUpdate实现响应式
        this.specMessage[index].msg='修改'
        this.specMessage[index].LowLimit=this.specMessage[index].newLowLimit
        this.specMessage[index].HighLimit=this.specMessage[index].newHighLimit
        this.$forceUpdate()
        this.updataN2SpecValue(floor,line,machineId,this.specMessage[index].newLowLimit,this.specMessage[index].newHighLimit)
      }

    },

    //判断是否监控
    changeChecked(floor,line,machineId,flag){
      //改不监控
      if(flag == 0){
        this.updataN2MonitorState(floor,line,machineId,1)
      }
      else{
        //改监控
        this.updataN2MonitorState(floor,line,machineId,0)
      }

    },
  }
};
</script>

<style lang="scss" scoped>
.table-data {
  width: 7.32rem;
  background: rgba(255, 255, 255, 0.4);
  border-radius: 0.2rem;
  overflow: hidden;
  table {
    border-collapse: collapse;
    font-size: 0.14rem;
    color: rgba(0, 0, 0, 0.85);
    text-align: center;
    line-height: 0.21rem;
    font-weight: 500;
    th,td{
      padding: 0;
    }
    thead {
      .index{
        min-width: .67rem;
        height: .68rem;
      }
      .floor,.line,.num,.set,.jianKong{
        min-width: .95rem;
        min-height: .68rem;
      }
      .spec{
        min-width: 1.9rem;
        min-height: .34rem;
      }
    }
    tbody {
      background: #E0E9FD;
      border-radius: 0 0 .2rem .2rem;
     td{
        height: .34rem;
      }
    }
  }
}
</style>