//引入 axios
import axios from 'axiox'


//创建实例
const service = new axios.create({
  baseUrl: 'http://10.195.229.172:9900',//接口
  timeout: 5000,//超时时间
})

//request 拦截
service.interceptors.request.u

export default service