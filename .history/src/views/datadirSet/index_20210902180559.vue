<template>
  <el-container>
    <!-- 头部 -->
    <el-header class="n2-electronic-header">
      <N2Header>
        <Seek
          slot="center"
          :Floors="Floors"
          :Lines="LineNameObj"
          @seek="seek"
        />
      </N2Header>
    </el-header>
    <!-- 主体内容 -->
    <el-main class="n2-electronic-main">
      <TableData
        :specMessage="specMessage"
        @setData="setData"
        @changeChecked="changeChecked"
      />
    </el-main>
  </el-container>
</template>

<script>
//header 组件
import N2Header from "@/components/n2Header";
//查询
import Seek from "@/components/screen/seek";
//table
import TableData from "./tableData.vue";

//网络请求数据
import { getEnergyFloors } from "@/api/energy/energy";
import {
  getN2SpecData,
  updataN2MonitorState,
  updataN2SpecValue,
} from "@/api/datadirSet/datadirSet";
export default {
  name: "DatadirSet",
  components: {
    N2Header,
    Seek,
    TableData,
  },
  data() {
    return {
      Floors: [],
      LineNameObj: {},
      floor: "ALL",
      line: "ALL",
      checked: true,
      specMessage: [],
      floorList: [],
      lineNameList: [],
      lineNames: [],
    };
  },
  created() {
    this.getEnergyFloors();
    this.getN2SpecData(this.floor, this.line);
  },
  methods: {
    //楼层数据
    getEnergyFloors() {
      getEnergyFloors()
        .then((res) => {
          if (res.Status == 0) {
            this.Floors = res.Data.Floor; //楼层数据
            this.Floors.unshift("ALL");
            this.LineNameObj = res.Data.LineName; //线体数据
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    //氮气spec值
    getN2SpecData(floor, line) {
      getN2SpecData(floor, line)
        .then((res) => {
          if (res.Status == 0) {
            let c = res.Data.SpecMessage;
            c.sort(function (a, b) {
              return a.LineName > b.LineName ? 1 : -1;
            });

            this.specMessage = c;

            this.specMessage.forEach((item) => {
              item.msg = "修改";
              item.newLowLimit = item.LowLimit;
              item.newHighLimit = item.HighLimit;
            });
            console.log(this.specMessage);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    //修改氮气数值
    setData(index, floor, line, machineId, msg) {
      console.log(index, floor, line, machineId, msg)
      this.$$nextTick(()=>{
        
      })
    
    },
    //判断是否监控
    changeChecked(floor, line, machineId, flag) {
      //改不监控
      if (flag == 0) {
        this.updataN2MonitorState(floor, line, machineId, 1);
      } else {
        //改监控
        this.updataN2MonitorState(floor, line, machineId, 0);
      }
    },
    //氮气修改监控状态
    updataN2MonitorState(floor, line, machineId, flag) {
      updataN2MonitorState(floor, line, machineId, flag)
        .then((res) => {
          if (res.Status == 0) {
            console.log("修改成功");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    //氮气修改Spec值
    updataN2SpecValue(floor, line, machineId, lowLimit, highLimit) {
      updataN2SpecValue(floor, line, machineId, lowLimit, highLimit)
        .then((res) => {
          if (res.Status == 0) {
            console.log("修改成功");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    //查询数据
    seek(floor, line) {
      this.floor = floor;
      this.line = line;
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
</style>