//引入 axios
import axios from 'axiox'


//创建实例
const service = new axios.create({
  baseUrl: '',//接口
  timeout: 5000,//超时时间
})