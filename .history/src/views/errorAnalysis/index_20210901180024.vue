<template>

  <el-container>
    <!-- 头部 -->
    <el-header class="n2-electronic-header">
      <N2Header>
        <Screen slot="left" :isClick="false" :lists="placeList" />
        <Screen
          style="margin-left: 0.08rem"
          slot="center"
          :isClick="true"
          :lists="timeList"
        />
      </N2Header>
    </el-header>

    <!-- 主体内容 -->
    <el-main class="n2-electronic-main">
      <ErrorUnderly class="top-underly" underlyTitle="当月异常楼层排行">
        <MonochromeBar :xDatas="dataList.Floor" :yDatas="dataList.SumNow" slot="center" class="bar-size" />
        <ErrorFloorTable :lists="tableList1" class="table-size" slot="footer" />
      </ErrorUnderly>
      <ErrorUnderly class="bottom-underly" underlyTitle="当月异常原因排行">
        <MonochromeBar slot="center" class="bar-size" />
        <ErrorFloorTable class="bottom-table-size" slot="footer" />
      </ErrorUnderly>
    </el-main>
  </el-container>

</template>

<script>
//header 组件
import N2Header from "@/components/n2Header";
//screen
import Screen from "@/components/screen/screen";
import ErrorUnderly from "@/components/errorAnalysis/errorUnderly";
import ErrorFloorTable from "@/components/errorAnalysis/errorFloorTable";

//echarts 图
import MonochromeBar from "@/components/charts/monochromeBar";

//网络数据
import {getErrorAnalysis} from "@/api/errorAnalysis/errorAnalysis"
export default {
  name: "ErrorAnalysis",
  components: {
    N2Header,
    Screen,
    ErrorUnderly,
    MonochromeBar,
    ErrorFloorTable,
  },
  data() {
    return {
      placeList: ["郑州", "观澜", "太原"],
      timeList: ["日", "周", "月", "年"],
      dataList:{},
      tableList1:[],
      tableHeadList1:[],
      tableList2:[],
      tableHeadList2:[],
    };
  },
  created(){
    this.getErrorAnalysis("Day")
  },
  methods:{
    //获取数据
    getErrorAnalysis(time){
      getErrorAnalysis(time).then(res=>{
        //清空原数据
        this.dataList = {}
        this.tableList1 = []
        this.tableHeadList1 = []
        this.tableList2 = []
        this.tableHeadList2 = []
        if(res.Status == "0"){  
          this.dataList =  res.Data.N2FlowMessage
          console.log(this.dataList );
          let FloorList = this.dataList.Floor
          let SumNowList = this.dataList.SumNow
          let SumLastList = this.dataList.SumLast
          let tableList1 = []//第一个table数据
          FloorList.forEach(element => {
            tableList1.push({"Floor":element,"Now":0,"Last":0})
          });
          SumNowList.forEach((data,index)=>{
            tableList1[index].Now = data
          })
          SumLastList.forEach((data,index)=>{
            tableList1[index].Last = data
          })
          tableList1.sort((a,b)=>{
            return b.Now - a.Now
          })
          this.tableList1 = tableList1
        }
        else{
         this.$message.error("网络异常!请稍后");
        }
      }).catch(err=>{
        console.log(err);
      })
    }
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
  .top-underly {
    width: 7.32rem;
    height: 6.13rem;
  }
  .bar-size {
    width: 7.32rem;
    height: 2.32rem;
  }
  .table-size {
    height: 3.43rem;
  }
  .bottom-underly {
    margin-top: .08rem;
    width: 7.32rem;
    height: 3.73rem;
    .bottom-table-size{
      height: 1.03rem;
    }
  }
}
</style>