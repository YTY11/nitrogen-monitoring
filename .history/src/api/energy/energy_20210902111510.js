//引入axios通用请求
import {request} from "@/network/request"

//获取能耗楼层数据
export function getEnergyFloors(time){
  return request({
    url:'http://10.195.229.172:9900/Default.aspx?Action=GetN2ExceptionFloor',
    params:{
      Action:`GetN2FlowMonitorDetailMessage`,
      Url:`{"Time":"`+ time +`"}`
    }
  })
}