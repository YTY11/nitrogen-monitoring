//引入axios通用请求
import {request} from "@/network/request"

//报警进度分析数据
export function getAnalysisData(){
  return request({
    url:'/Default.aspx?Action=GetN2ExceptionData&url={"Floor":\"' + floor + '\","LineName":\"' + line + '\"}',
    par
  })
}

//异常报警信息数据
export function getInfoData(){
  return request({
    url:''
  })
}