//引入axios通用请求
import {request} from "@/network/request"

//氮气spec值
export function getN2SpecData(floor,line){
  return request({
    url:'/Default.aspx',
    params:{
      "Action":"GetN2SpecData",
      "Url":`{"Floor":"${floor}","LineName":"${line}"}`
    }
  })
}

//氮气修改监控状态
export function updataN2MonitorState(floor,line,machineId,flag){
  return request({
    url:'/Default.aspx',
    params:{
      "Action":"UpdateN2MonitorState",
      "Url":`{"Floor":"${floor}","LineName":"${line}","MachineId":"${machineId}","Flag":"${flag}"}`
    }
  })
}

 //氮气修改Spec值
 export function updataN2SpecValue(floor,line,machineId,lowLimit,highLimit){
   return request({
     url:'/Default.aspx',
     params:{
      "Action":"UpdateN2SpecValue",
      "Url":`{"Floor":"${floor}","LineName":"${line}","MachineId":"${machineId}","LowLimit":"${lowLimit}",HighLimit:"`+ highLimit +`"}"}`
     }
   })
 }
