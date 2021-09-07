//引入axios通用请求
import {request} from "@/network/request"

//报警进度分析数据
export function getAnalysisData(floor,line){
  return request({
    url:'/Default.aspx',
    params:{  
      "Action":"GetN2ExceptionData",
      "url":`{"Floor":"${floor}","LineName":"${line}"}`
    }
  })
}
// http://10.195.229.172:9900/Default.aspx?Action=GetN2ExceptionData&url={%22Floor%22:%22D061F%22,%22LineName%22:%22ALL%22}
//异常报警信息数据
export function getInfoData(floor,line){
  return request({
    url:'/Default.aspx',
    params:{
      "Action":"GetN2ExceptionData",
      "url":`{"Floor":"${floor}","LineName":"${line}"}`
    }
  })
}