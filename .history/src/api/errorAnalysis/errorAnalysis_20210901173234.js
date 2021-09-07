//引入axios通用请求
import {request} from "@/network/request"

//获取异常分析数据
export function getErrorAnalysis(time){
  console.log(time);
  return request({
    url:'/Default.aspx',
    params:{
      Action:`GetN2FlowMonitorDetailMessage`,
      Url:`{"Time":"`+ time +`"}`
    }
  })
}