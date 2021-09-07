//引入axios通用请求
import {request} from "@/network/request"

//监控总数数据
export function jianKongAllData(){
  return request({
    url:'/Default.aspx?Action=GetOverAllN2FlowMessage'
  })
}