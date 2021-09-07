<template>
  <el-container>
    <!-- 头部 -->
    <el-header class="n2-electronic-header">
      <N2Header>
         <Seek slot="center" :Floors="Floors" :Lines="LineNames" @seek="seek" />
      </N2Header>
    </el-header>
    <!-- 主体内容 -->
    <el-main class="n2-electronic-main">
      <TableData/>
    </el-main>
  </el-container>
</template>

<script>
//header 组件
import N2Header from "@/components/n2Header";
//查询
import Seek from "@/components/screen/seek";
//table
import TableData from "./tableData.vue"


//网络请求数据
import {
  getEnergyFloors
} from "@/api/energy/energy";
export default {
  name: "DatadirSet",
  components:{
    N2Header,
    Seek,
    TableData
  },
  data(){
    return{
      Floors:[],
      LineNames:[]
    }
  },
  methods:{
    //楼层数据
    getEnergyFloors() {
      getEnergyFloors()
        .then((res) => {
          if (res.Status == 0) {
            this.Floors = res.Data.Floor; //楼层数据
            this.Floors.unshift("ALL");
            this.LineNames = res.Data.LineName; //线体数据
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  }
};
</script>
<style lang="scss" scoped>
.n2-electronic-header {
  height: 0.4rem !important;
  margin-bottom: 0.05rem;
  padding: 0;
}
.n2-electronic-main {
  padding: 0;
}
</style>