//引入axios通用请求
import {request} from "@/network/request"

//获取能hao
export function getErrorAnalysis(time){
  return request({
    url:'/Default.aspx',
    params:{
      Action:`GetN2FlowMonitorDetailMessage`,
      Url:`{"Time":"`+ time +`"}`
    }
  })
}