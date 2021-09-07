//引入 axios
import axios from 'axios'
import { Message } from 'element-ui';
export function request(config) {
  //创建实例
  const instance = new axios.create({
    baseURL: 'http://10.195.229.172:9900',//接口
    timeout: 1,//超时时间
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
      message: '网络异常! 请尝试刷新......',
      duration:0
    });
    console.log(err);
    Promise.reject(err)
  })
  return instance(config)
}


 