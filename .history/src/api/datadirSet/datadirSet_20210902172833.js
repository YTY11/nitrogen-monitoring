//引入axios通用请求
import {request} from "@/network/request"

//氮气spec值
export function getN2SpecData(floor,line){
  console.log("");
  return request({
    url:'/Default.aspx',
    params:{
      "Action":"GetN2SpecData",
      "Url":`{"Floor":"${floor}","LineName":"${line}"}`
    }
  })
}