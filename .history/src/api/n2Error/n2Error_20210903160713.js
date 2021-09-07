//引入axios通用请求
import {request} from "@/network/request"

//报警进度分析数据,异常报警信息数据
export function getErrorData(floor,line){
  return request({
    url:'/Default.aspx',
    params:{ 
      "Action":"GetN2ExceptionData",
      "url":`{"Floor":"${floor}","LineName":"${line}"}`
    }
  })
}

