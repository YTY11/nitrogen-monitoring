<template>
  <div class="n2-error">
    <Select :floorList="floorList" :lineList="lineList" @seek="seek" />
    <div class="content-middle">
      <Analysis :analysis="analysis" @clickShowData="clickShowData" :exceptionList="exceptionList"/>
    </div>
    <div class="content-bottom">
      <Info :exceptionList="exceptionList"/>
    </div>
  </div>
</template>

<script>
//选择组件
import Select from "@/components/n2Error/select";
// 报警进度分析
import Analysis from "@/components/n2Error/analysis";
import Info from "@/components/n2Error/info";

//网络请求数据
import { getEnergyFloors } from "@/api/energy/energy";
import { getErrorData } from "@/api/n2Error/n2Error";

export default {
  name: "N2Error",
  components: {
    Select,
    Analysis,
    Info,
  },
  data() {
    return {
      floorList: [],
      lineList: {},
      floor: "D061F",
      line: "ALL",
      analysis: [],
      exceptionList: [],
      exceptionList: [],
    };
  },
  created() {
    this.getEnergyFloors();
    this.getErrorData(this.floor, this.line);
  },
  methods: {
    //楼层数据
    getEnergyFloors() {
      getEnergyFloors()
        .then((res) => {
          if (res.Status == 0) {
            this.floorList = res.Data.Floor; //楼层数据
            this.floorList.unshift("ALL");
            this.lineList = res.Data.LineName; //线体数据
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },

    //报警进度分析数据,异常报警信息数据
    getErrorData(floor, line) {
      getErrorData(floor, line)
        .then((res) => {
          if (res.Status == 0) {
            this.analysis = res.Data.Analyze;
            this.exceptionList = res.Data.ExceptionList;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
//根据异常管理查询数据
    clickShowData(data){
      this.exceptionList = data
    },

    // 查询数据
    seek(floor, line) {
      console.log(floor, line);
    },
  },
};
</script>

<style lang="scss" scoped>
.n2-error {
  position: absolute;
  width: 7.2rem;
  height: 9rem;
  margin-left: 0.24rem;
  margin-top: 0.32rem;
  border-radius: 0.16rem;
  overflow: hidden;
  background: #e6e6e6;
  .content-middle {
    width: 7.12rem;
    height: 2.12rem;
    box-sizing: border-box;
    margin-left: 0.04rem;
    margin-top: 0.03rem;
    background: #ffffff;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.5);
    border-radius: 0 0 16px 16px;
    overflow: hidden;
  }
  .content-bottom {
    top: 3rem;
    left: 0.04rem;
    right: 0.04rem;
    bottom: 0.12rem;
    position: absolute;
    background: #ffffff;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.5);
    border-radius: 0 0 0.16rem 0.16rem;
    box-sizing: border-box;
    overflow: hidden;
  }
}
</style>