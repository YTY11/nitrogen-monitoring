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
          <tr v-for="(item, index) of info" :key="index">
           
            <td>{{ item.Floor }}</td>
            <td>
              {{
                
              }}
            </td>
            <td>{{ item.DeviceNumber || item.DeviceNum }}</td>
            <td>{{ exceptionType(item.ExceptionType) }}</td>
            <td class="detail">
              {{
                item.ExceptionDetail.length > 24
                  ? item.ExceptionDetail.substring(0, 24) + "..."
                  : item.ExceptionDetail
              }}
            </td>
            <td>
              {{
                item.ServiceAdvice.length > 24
                  ? item.ServiceAdvice.substring(0, 24) + "..."
                  : item.ServiceAdvice
              }}
            </td>
            <td :style="{ color: item.Priority === 'H' ? 'red' : '' }">
              {{ item.Priority }}
            </td>
            <td>
              {{
                item.StartTime.length > 11
                  ? item.StartTime.substring(11)
                  : item.StartTime
              }}
            </td>
            <td>
              {{
                item.EndTime.length > 11
                  ? item.EndTime.substring(11)
                  : item.EndTime
              }}
            </td>
            <td>{{ item.TimeCount }} Min</td>
            <td>{{ item.Unit }}</td>
            <td>{{ item.ServiceContent }}</td>
            <td v-if="isShowServicePerson">{{ item.Name }}</td>
            <td class="state">{{ computeState(item.State) }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "Info",
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
    height: 5.6rem;
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
      min-width: 0.6rem !important;
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
      min-width: 0.9rem !important;
    }
    .end {
      min-width: 0.9rem !important;
    }
    .time-count {
      min-width: 1rem !important;
    }
    .unit {
      min-width: 1.11rem !important;
    }
    .service-content {
      min-width: 0.88rem !important;
    }
    .state {
      min-width: 0.7rem !important;
    }
  }
}
</style>