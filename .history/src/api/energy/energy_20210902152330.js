//引入axios通用请求
import {request} from "@/network/request"
import { log10 } from "core-js/core/number"

//获取能耗楼层数据
export function getEnergyFloors(){
  return request({
    url:'/Default.aspx?Action=GetN2ExceptionFloor',
  })
}

//By天线体单Pcs能耗TOP5数据
export function getByDayPcsData(floor,line){
  return request({
    url:'/Default.aspx',
    params:{
      "Action":"GetN2FlowPcsConsumeByFloor",
      "Url":`{"Floor":"${floor}","LineName":"${line}","Time":"Day"}`
    }
  })
}

//By周线体单Pcs能耗TOP5
export function getByWeekPcsData(floor,line){
  return request({
    url:'/Default.aspx',
    pamars:{
      "Action":"GetN2FlowPcsConsumeByFloor",
      "Url":`{"Floor":"${floor}","LineName":"${line}","Time":"Week"}`
    }
  })
}


//By月线体单Pcs能耗TOP5
export function getByMonthPcsData(floor,line){
  return request({
    url:'/Default.aspx',
    pamars:{
      "Action":"GetN2FlowPcsConsumeByFloor",
      "Url":`{"Floor":"${floor}","LineName":"${line}","Time":"Month"}`
    }
  })
}