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
import Select from "@/components/n2Error/select";
// 报警进度分析
import Analysis from "@/components/n2Error/analysis";
import Info from "@/components/n2Error/info";

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
      type: null
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
            this.showExceptionList = this.exceptionList;
            //H級優先展示
            let hList = this.showExceptionList.filter(
              (item) => item.Priority == "H"
            );
            let mList = this.showExceptionList.filter(
              (item) => item.Priority == "M"
            );
            this.showExceptionList = [];
            this.showExceptionList = [...hList, ...mList];
            // this.showExceptionList = this.ExceptionList
            // if (this.value !== null && this.type) {
            //   this.clickShowData(this.value, this.type)
            // }
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    //根据异常管理查询数据
    clickShowData(value, type) {
      this.value = value
      this.type = type
      if (typeof value == "number") {
        this.showExceptionList = this.exceptionList.filter(item => item.State == value && item.ExceptionType == type)
      }
       else if (typeof value == "string") {
        if (value == "ALL") {

          this.showExceptionList = this.exceptionList.filter(item => item.ExceptionType == type)
        } else {
          this.showExceptionList = this.exceptionList.filter(item => item.Priority == value && item.ExceptionType == type)
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
      let newDate = this.dateFormat("YYYY/mm/dd HH:MM:SS", new Date());
      this.upData(id, newDate, text, 2);
    },

    // 查询数据
    seek(floor, line) {
      this.floor = floor;
      this.line = line;
      this.getErrorData(this.floor, this.line);
    },

    //日期格式化
    dateFormat(fmt, date) {
      let ret;
      const opt = {
        "Y+": date.getFullYear().toString(), // 年
        "m+": (date.getMonth() + 1).toString(), // 月
        "d+": date.getDate().toString(), // 日
        "H+": date.getHours().toString(), // 时
        "M+": date.getMinutes().toString(), // 分
        "S+": date.getSeconds().toString(), // 秒
        // 有其他格式化字符需求可以继续添加，必须转化成字符串
      };
      for (let k in opt) {
        ret = new RegExp("(" + k + ")").exec(fmt);
        if (ret) {
          fmt = fmt.replace(
            ret[1],
            ret[1].length == 1 ? opt[k] : opt[k].padStart(ret[1].length, "0")
          );
        }
      }

      return fmt;
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