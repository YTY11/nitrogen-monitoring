//引入axios通用请求
import {request} from "@/network/request"

//选择数据
export function getSelectData(){
  return request({
    url:'/Default.aspx?Action=GetN2ExceptionData&url={"Floor":\"' + floor + '\","LineName":\"' + line + '\"}'
  })
}

//报警进度分析数据
export function getAnalysisData(){
  return request({
    url:''
  })
}

//异常报警信息数据
export function getInfoData(){
  return request({
    url:''
  })
}