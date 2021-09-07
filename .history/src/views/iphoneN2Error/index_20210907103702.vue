<template>
  <div class="n2-error">
    <Select :floorList="floorList" :lineList="lineList" @seek="seek" />
    <div class="content-middle">
      <Analysis
        :analysis="analysis"
        @clickShowData="clickShowData"
        :exceptionList="exceptionList"
      />
    </div>
    <div class="content-bottom">
      <Info
        :exceptionList="showExceptionList"
        @chuLi="chuLi"
        @weiXiu="weiXiu"
      />
    </div>
  </div>
</template>

<script>
//选择组件
import Select from "@/components/iphoneN2Error/select";
// 报警进度分析
import Analysis from "@/components/iphoneN2Error/analysis";
import Info from "@/components/iphoneN2Error/info";

//网络请求数据
import { getEnergyFloors } from "@/api/energy/energy";
import { getErrorData, upData } from "@/api/n2Error/n2Error";

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
      showExceptionList: [],
      intervalValue: "",
      value: null,
      type: null,
    };
  },
  created() {
    this.getEnergyFloors();
    this.getErrorData(this.floor, this.line);
    this.intervalValue = setInterval(() => {
      this.getErrorData(this.floor, this.line);
    }, 15 * 1000);
  },
  beforeDestroy() {
    if (this.intervalValue != "") clearInterval(this.intervalValue);
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

            //H級優先展示
            let hList = this.exceptionList.filter(
              (item) => item.Priority == "H"
            );
            let mList = this.exceptionList.filter(
              (item) => item.Priority == "M"
            );
            this.exceptionList = [];
            this.exceptionList = [...hList, ...mList];

            this.showExceptionList = this.exceptionList;
            let oldData = this.analysis;
            const list3 = {
              Type: "ALL",
              ALL: oldData[0]["ALL"] + oldData[1]["ALL"],
              Doing: oldData[0]["Doing"] + oldData[1]["Doing"],
              Done: oldData[0]["Done"] + oldData[1]["Done"],
              H: oldData[0]["H"] + oldData[1]["H"],
              Ignore: oldData[0]["Ignore"] + oldData[1]["Ignore"],
              M: oldData[0]["M"] + oldData[1]["M"],
              Todo: oldData[0]["Todo"] + oldData[1]["Todo"],
            };
            this.analysis.push(list3);
            
            this.clickShowData(this.value, this.type);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    //根据异常管理查询数据
    clickShowData(value, type) {
      this.value = value;
      this.type = type;
      if (typeof value == "number") {
        if (type == "ALL") {
          this.showExceptionList = this.exceptionList.filter(
            (item) => item.State == value
          );
        } else {
          this.showExceptionList = this.exceptionList.filter(
            (item) => item.State == value && item.ExceptionType == type
          );
        }
      } else if (typeof value == "string") {
        if (value == "ALL") {
          if (type == "ALL") {
            this.showExceptionList = this.exceptionList;
          } else {
            this.showExceptionList = this.exceptionList.filter(
              (item) => item.ExceptionType == type
            );
          }
        } else {
          if (type == "ALL") {
            this.showExceptionList = this.exceptionList.filter(
              (item) => item.Priority == value
            );
          } else {
            this.showExceptionList = this.exceptionList.filter(
              (item) => item.Priority == value && item.ExceptionType == type
            );
          }
        }
      }
    },

    //更新数据
    upData(id, EndTime = "", RepairContent = "", State) {
      upData(id, EndTime, RepairContent, State)
        .then((res) => {
          if (res.Status == 0) {
            this.$message({
              type: "success",
              message: "已确定!",
            });
            //数据更新
            this.getErrorData(this.floor, this.line);
            console.log("已确定");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    //确认处理异常
    chuLi(id) {
      this.upData(id, "", "", 1);
    },

    //维修
    weiXiu(id, text) {
      let newDate = this.$utilsFun.dateFormat(
        "YYYY/mm/dd HH:MM:SS",
        new Date()
      );
      this.upData(id, newDate, text, 2);
    },

    // 查询数据
    seek(floor, line) {
      this.value = null;
      this.type = null;
      this.floor = floor;
      this.line = line;
      this.getErrorData(this.floor, this.line);
    },
  },
};
</script>

<style lang="scss" scoped>
.n2-error {
  position: absolute;
  width: 3.67rem;
  height: 7.08rem;
  margin-left: 0.04rem;
  margin-top: 0.04rem;
  border-radius: 0.1rem;
  background: url("~@/assets/img/backgroundMoHu.png") no-repeat;
  background-size: cover;
  overflow: hidden;
  .content-middle {
    width: 3.64rem;
    box-sizing: border-box;
    margin-left: 0.02rem;
    margin-top: 0.1rem;
    background: #538EF4;
    border-radius: .1rem;
    overflow: hidden;
  }
  .content-bottom {
    margin-top: ;
    background: #5375EF;
    border-radius: .1rem;
    box-sizing: border-box;
    overflow: hidden;
  }
}
</style>