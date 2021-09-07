//引入axios通用请求
import {request} from "@/network/request"

//获取能耗楼层数据
export function getEnergyFloors(){
  return request({
    url:'/Default.aspx?Action=GetN2ExceptionFloor',
  })
}

//By天线体单Pcs能耗TOP5数据
export function getByDayPcsData(floor,line){
  return request({
    url:'',
    pamars:{
      
    }
  })
}