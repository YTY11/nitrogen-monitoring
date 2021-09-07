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

// http://10.195.229.172:9900/Default.aspx?Action=UpdateN2ExceptionData&url={"Id":"`+ id +`","EndTime":"`+ EndTime +`","RepairContent":"`+ RepairContent +`","State":"`+ State +`"}
//更新数据
export function upData(id,EndTime = "",RepairContent = "",State){
  return request({
    url:'/Default.aspx',
    params:{ 
      "Action":"UpdateN2ExceptionData",
      "url":`{"Id":"${id}","EndTime":"${EndTime}","RepairContent":"${RepairContent}","State":"${State}"}`
    }
  })
}