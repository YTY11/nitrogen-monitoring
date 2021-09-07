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
          @isActive="isActive"
        />
      </N2Header>
    </el-header>

    <!-- 主体内容 -->
    <el-main class="n2-electronic-main">
      <ErrorUnderly class="top-underly" underlyTitle="当月异常楼层排行">
        <MonochromeBar :xDatas="dataList.Floor" :yDatas="dataList.SumNow" slot="center" class="bar-size" />
        <ErrorFloorTable :tableHead="tableHeadList1" :lists="tableList1" class="table-size" slot="footer" />
      </ErrorUnderly>
      <ErrorUnderly class="bottom-underly" underlyTitle="当月异常原因排行">
        <MonochromeBar slot="center" class="bar-size" />
        <ErrorFloorTable :tableHead="tableHeadList2" :lists="tableList2" class="bottom-table-size" slot="footer" />
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
          switch (time) {
            case "Day":
              this.tableHeadList1 = ["排行","楼层","当日异常次数","上日异常次数"]
              this.tableHeadList2 = ["排行","异常原因","当日异常次数","上日异常次数"]
              break;
            case "Week":
              this.tableHeadList1 = ["排行","楼层","当周异常次数","上周异常次数"]
              this.tableHeadList2 = ["排行","异常原因","当周异常次数","上周异常次数"]
              break;
            case "Month":
              this.tableHeadList1 = ["排行","楼层","当月异常次数","上月异常次数"]
              this.tableHeadList2 = ["排行","异常原因","当月异常次数","上月异常次数"]
              break;
            case "Year":
              this.tableHeadList1 = ["排行","楼层","当年异常次数","上年异常次数"]
              this.tableHeadList2 = ["排行","异常原因","当年异常次数","上年异常次数"]
              break;
            default:
              break;
          }

        if(res.Status == "0"){  
          this.dataList =  res.Data.N2FlowMessage
          console.log(this.dataList );
          let FloorList = this.dataList.Floor
          let SumNowList = this.dataList.SumNow
          let SumLastList = this.dataList.SumLast
          let tableList1 = []//第一个table数据
          FloorList.forEach(element => {
            tableList1.push([element])
          });
          SumNowList.forEach((data,index)=>{
            tableList1[index].push(data)
          })
          SumLastList.forEach((data,index)=>{
            tableList1[index].push(data)
          })
          tableList1.sort((a,b)=>{
            return b[1] - a[1]
          })
          this.tableList1 = tableList1
          this.tableList2 = tableList1

        }
        
      }).catch(err=>{
        console.log(err)
      })
    },

    //选择时间
    isActive(index){
      let time = ""
      switch (this.timeList[index]) {
        case "日":
          time = "Day"
          break;
        case "周":
          time = "Week"
          break;
        case "月":
          time = "Month"
          break;
        case "年":
          time = "Year"
          break;
        default:
          break;
      }
      
      this.getErrorAnalysis(time)
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