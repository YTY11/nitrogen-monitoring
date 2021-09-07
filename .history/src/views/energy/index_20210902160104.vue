<template>
  <el-container>
    <el-header class="n2-electronic-header">
      <N2Header>
        <Screen slot="left" :isClick="false" :lists="placeList" />
        <Seek slot="center" :Floors="Floors" :Lines="LineNames" @seek="seek" />
      </N2Header>
    </el-header>
    <!-- 主体内容 -->
    <el-main class="n2-electronic-main">
      <Underly style="margin-top: 0" title="当月异常楼层排行">
        <MonochromeBar
          :top="'30%'"
          :title="{ show: true, size: '12', text: 'By天线体单Pcs能耗TOP5' }"
          :yName="{ name: '单位：RMB', size: '10' }"
          :xDatas="dayFloors"
          :yDatas="dayConsume"
          :barWidth="'20'"
          :xSize="10"
          class="bar-size"
        />
        <MonochromeBar
          :top="'30%'"
          :title="{ show: true, size: '12', text: 'By周线体单Pcs能耗TOP5' }"
          :yName="{ name: '单位：RMB', size: '10' }"
          :xDatas="weekFloors"
          :yDatas="weekConsume"
          :barWidth="'20'"
          :xSize="10"
          class="bar-size"
        />
        <MonochromeBar
          :top="'30%'"
          :title="{ show: true, size: '12', text: 'By月线体单Pcs能耗TOP5' }"
          :yName="{ name: '单位：RMB', size: '10' }"
          :xDatas="monthFloors"
          :yDatas="monthConsume"
          :barWidth="'20'"
          :xSize="10"
          class="bar-size"
        />
      </Underly>
      <Underly class="underly-center" title="楼层氮气消耗排名">
        <MonochromeBar
          :title="{ show: true, size: '14', text: '楼层氮气消耗' }"
          :yName="{ name: '单位：m³', size: '12' }"
          class="bar-size2"
        />
        <MonochromeBarColors style="margin-top: 0.08rem" class="bar-size2" />
      </Underly>
      <Underly class="underly-footer" title="线体单Psc能耗">
        <MonochromeLine class="line-size" />
      </Underly>
    </el-main>
  </el-container>
</template>

<script>
//header 组件
import N2Header from "@/components/n2Header";
//screen
import Screen from "@/components/screen/screen";
import Seek from "@/components/screen/seek";

//主体内容
import Underly from "@/components/n2Electronic/underly";

//echarts 图
import MonochromeBar from "@/components/charts/monochromeBar";
import MonochromeBarColors from "@/components/charts/monochromeBarColors";
import MonochromeLine from "@/components/charts/monochromeLine";

//网络请求数据
import {
  getEnergyFloors,
  getByDayPcsData,
  getByWeekPcsData,
  getByMonthPcsData,
  getFloorN2EnergyData
} from "@/api/energy/energy";
export default {
  name: "Energy",
  components: {
    N2Header,
    Screen,
    Seek,
    Underly,
    MonochromeBar,
    MonochromeBarColors,
    MonochromeLine,
  },
  data() {
    return {
      placeList: ["郑州", "观澜", "太原"],
      Floors: [],
      LineNames: {},
      dayFloors: [],
      dayConsume: [],
      weekFloors: [],
      weekConsume: [],
      monthFloors: [],
      monthConsume: [],
    };
  },
  created() {
    this.getEnergyFloors();
    this.getByDayPcsData("ALL", "ALL");
    this.getByWeekPcsData("ALL", "ALL");
    this.getByMonthPcsData("ALL", "ALL");
    this.getFloorN2EnergyData()
  },
  methods: {
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
    //By天线体单Pcs能耗TOP5数据
    getByDayPcsData(floor, line) {
      getByDayPcsData(floor, line)
        .then((res) => {
          if (res.Status == 0) {
            this.dayFloors = res.Data.Floor; //x轴数据
            this.dayConsume = res.Data.Consume; //y轴数据
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    //By周线体单Pcs能耗TOP5
    getByWeekPcsData(floor, line) {
      getByWeekPcsData(floor, line)
        .then((res) => {
          if (res.Status == 0) {
            this.weekFloors = res.Data.Floor; //x轴数据
            this.weekConsume = res.Data.Consume; //y轴数据
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    //By月线体单Pcs能耗TOP5
    getByMonthPcsData(floor, line) {
      getByMonthPcsData(floor, line)
        .then((res) => {
          if (res.Status == 0) {
            this.monthFloors = res.Data.Floor; //x轴数据
            this.monthConsume = res.Data.Consume; //y轴数据
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    //楼层氮气消耗数据
    getFloorN2EnergyData(){
      getFloorN2EnergyData().then(res=>{
         if (res.Status == 0) {
            this.floorsN2Energy = res.Data.Floor
          }
      }).catch(err=>{
        console.log(err);
      })
    },

    //查询数据
    seek(floor, line) {
      console.log(floor, line);
      this.getByDayPcsData(floor, line);
      this.getByWeekPcsData(floor, line);
      this.getByMonthPcsData(floor, line);
    },
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
}
.bar-size {
  width: 2.42rem;
  height: 2.32rem;
}
.underly-center {
  height: 5.02rem;
  .bar-size2 {
    height: 2.32rem;
  }
}
.underly-footer {
  height: 2.62rem;
  .line-size {
    height: 2.32rem;
  }
}
</style>