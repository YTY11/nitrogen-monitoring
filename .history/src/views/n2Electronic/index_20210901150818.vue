<template>
  <el-container>
    <!-- 头部 -->
    <el-header class="n2-electronic-header">
      <N2Header>
        <Screen slot="left" :isClick="false" :lists="placeList" />
      </N2Header>
    </el-header>

    <!-- 主体内容 -->
    <el-main class="n2-electronic-main">
      <MonitoringTotal :detailMessage="detailMessage" :detailMessageItemList="detailMessageItemList"/>
      <Underly title="异常楼层排行">
        <MonochromeBar class="err-floor" :xDatas="detailMessageByFloor.Floor" :yDatas="detailMessageByFloor.Abnormal"/>
        <UnderlyTable/>
      </Underly>
      <Underly title="多楼层实时监控">
        <ChartsMoreFloor class="more-floor-charts"/>
      </Underly>
    </el-main>
  </el-container>
</template>

<script>
//header 组件
import N2Header from "@/components/n2Header";
//screen
import Screen from "@/components/screen/screen";

//主体内容
import MonitoringTotal from "@/components/n2Electronic/monitoringTotal";
import Underly from "@/components/n2Electronic/underly";
import UnderlyTable from "@/components/n2Electronic/underlyTable"

//echarts 图
import MonochromeBar from "@/components/charts/monochromeBar";
import ChartsMoreFloor from "@/components/charts/chartsMoreFloor"


//网络数据
import {jianKongAllData} from "@/api/n2Electronic/n2Electronic"
export default {
  name: "N2Electronic",
  components: {
    N2Header,
    Screen,
    MonitoringTotal,
    Underly,
    MonochromeBar,
    UnderlyTable,
    ChartsMoreFloor
  },
  data() {
    return {
      detailMessage:{},
      detailMessageItemList:[],
      detailMessageByFloor:{},
      placeList: ["郑州", "观澜", "太原"],
    };
  },
  created(){
    this.jianKongAllData()
  },
  methods: {
    //选择地点
    clickPlace(index) {
      console.log(index);
    },

    //监控总数数据
    jianKongAllData(){
      jianKongAllData().then(resolve=>{
        if(resolve.Status == 0){
          this.detailMessage = resolve.Data.detailMessage//监控总数数据
          this.detailMessageItemList.push(this.detailMessage.AllNormal,this.detailMessage.AllAbnormal,this.detailMessage.AllOffline)

          this.detailMessageByFloor = resolve.Data.detailMessageByFloor //异常楼层排行数据
          console.log(this.detailMessageByFloor);

          //数据进行排序
          let errFloorList = []
          this.detailMessageByFloor.Floor.forEach(element => {
            errFloorList.push({"Floor":element,"Num":0})
          });
          this.detailMessageByFloor.Abnormal.forEach((element,index) => {
            errFloorList[index].Num = element
          });
errFloorList.push({"Floor":"F113F","Num":20})
          errFloorList.sort((a,b)=>{
            return b.Num - a.Num
          })
        }
      }).catch(err=>{
        console.log(err);
      })
    }
  },
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
  .err-floor {
    width: 3.64rem;
    height: 2.32rem;
  }
  .more-floor-charts{
    width:7.32rem;
    height: 2.32rem;
  }
}
</style>