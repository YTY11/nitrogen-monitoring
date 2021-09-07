//引入 axios
import axios from 'axios'
import router from "@/router";
import { Message } from 'element-ui';
export function request(config) {
  //创建实例
  const instance = new axios.create({
    baseURL: 'http://10.195.229.172:9900',//接口
    timeout: 5000,//超时时间
  })

  //request 请求拦截
  instance.interceptors.request.use(config => {
    return config
  }, err => {
    console.log(err);
    Promise.reject(err)
  })

  //response 响应拦截
  instance.interceptors.response.use(response => {
    return response.data
  }, err => {
    Message({
      type:"error",
      duration:0,
      showClose:true,
      message: '网络异常! 请尝试刷新......'
    });
    console.log(err);
    Promise.reject(err)
  })
  return instance(config)
}


 