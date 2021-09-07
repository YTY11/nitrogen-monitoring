<template>
  <div class="info">
    <div class="profix-container">异常报警信息</div>
    <div class="content-container">
      <table border="0" cellspacing="0">
        <thead>
          <tr>
            <td class="floor">楼层</td>
            <td class="line">线体</td>
            <td class="type">异常类型</td>
            <td class="advice">维修建议</td>
            <td class="priority">优先级</td>
            <td class="start">异常开始时间</td>
            <td class="end">异常结束时间</td>
            <td class="time-count">异常时常(Min)</td>
            <td class="unit">责任单位</td>
            <td class="service-content">维修内容</td>
            <td class="state">状态</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in exceptionList" :key="index">
            <td>{{ item.Floor }}</td>
            <td>{{ item.LineName }}</td>
            <td>{{ item.ExceptionType }}</td>
            <td>{{ item.RepairAdvice }}</td>
            <td :class="{ textOne: item.Priority == 'H' }">
              {{ item.Priority }}
            </td>
            <td>{{ item.InputTime }}</td>
            <td>{{ item.EndTime == null ? "" : item.EndTime }}</td>
            <td>{{ item.TimeCount }}</td>
            <td>{{ item.Department }}</td>
            <td>{{ item.RepairContent }}</td>
            <td>
              <button
                class="typebut"
                @click="typebut(item.Id)"
                v-if="item.State == 0"
              >
                <span class="textblink">待处理</span>
              </button>
              <button
                class="typebut2"
                @click="typebut2(item.Id)"
                v-if="item.State == 1"
              >
                处理中
              </button>
              <button class="typebut3" v-if="item.State == 2">已处理</button>
              <button class="typebut3" v-if="item.State == 3">忽略</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "Info",
  props: {
    exceptionList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    //处理提示框
    typebut(id) {
      this.$confirm("确认接受处理异常, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.$emit("chuLi", id);
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消",
          });
        });
    },
    //维修中
    typebut2(id) {
       const h = this.$createElement;
        this.$msgbox({
          title: '消息',
          message: h('div', {
                        attrs: {
                            class: 'el-textarea',
                        },
                    }, [
                        h('textarea', {
                            attrs: {
                                class: 'el-textarea__inner',
                                autocomplete: 'off',
                                rows: 4,
                                ref:'commentContent'
                            },
                            value: this.commentContent,
                        })
                    ]),
          showCancelButton: true,
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          beforeClose: (action, instance, done) => {
            if (action === 'confirm') {
          
              done();
            } else {
              done();
            }
          }
        }).then(action => {
          console.log(document.getElementById("commentContent").value);
          document.getElementById("commentContent").value
         
          this.$message({
            type: 'info',
            message: 'action: ' + action
          });
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.info {
  .profix-container {
    width: 7.12rem;
    height: 0.36rem;
    text-indent: 0.12rem;
    color: black;
    font-size: 0.18rem;
    line-height: 0.36rem;
    background: #e6e6e6;
    z-index: 99;
    overflow: hidden;
    box-sizing: border-box;
  }
  .content-container {
    height: 5.5rem;
    background: white;
    overflow: auto;
    margin-left: 0;
    position: relative;
    table {
      width: 100%;
      text-align: center;
    }
    thead td {
      background: #0091ff;
      color: #f0f0f0;
      height: 0.38rem !important;
      max-height: 0.38rem !important;
      font-size: 0.16rem;
      position: sticky;
      top: 0px;
    }
    tbody {
      background: #eaf0fd;
    }
    td {
      font-size: 0.15rem;
      height: 0.5rem;
      border-bottom: 1px solid white;
      border-left: 1px solid white;
      padding: 0.05rem 0.1rem;
      box-sizing: border-box;
    }
    .floor {
      min-width: 1rem !important;
    }
    .line {
      min-width: 1.3rem !important;
    }
    .type {
      min-width: 0.9rem !important;
    }
    .advice {
      min-width: 1.8rem !important;
    }
    .priority {
      min-width: 0.8rem !important;
    }
    .start {
      min-width: 1.8rem !important;
    }
    .end {
      min-width: 1.8rem !important;
    }
    .time-count {
      min-width: 1.5rem !important;
    }
    .unit {
      min-width: 1.11rem !important;
    }
    .service-content {
      min-width: 0.88rem !important;
    }
    .state {
      min-width: 1rem !important;
    }
    .typebut {
      background: #0091ff;
      border-radius: 0.05rem;
      text-align: center;
      border: 1px solid #0091ff;
      color: white;
    }
    .typebut2 {
      background: #feb716;
      border-radius: 0.05rem;
      text-align: center;
      border: 1px solid #f3aa04;
      color: black;
    }
    .typebut3 {
      background: #b1b1b1;
      border-radius: 0.05rem;
      text-align: center;
      border: 1px solid #8c8585;
      color: black;
    }
    .textOne {
      color: red;
    }
  }
}
</style>