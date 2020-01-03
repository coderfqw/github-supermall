import axios from 'axios'

export function request(config) {
  // 1.创建 axios 的实例
  const instance = axios.create({
    baseURL: 'http://106.54.54.237:8000/api/v1/',
    // baseURL: 'http://123.207.32.32:/api/vip',
    timeout: 3000,
  });

  // 2.axios 的拦截器

  // 实例拦截
  //   实例拦截-请求拦截
  instance.interceptors.request.use(config => {
    return config
  }, err => {
    // console.log(err);
  })

  //   实例拦截-响应拦截
  instance.interceptors.response.use(res => {
    return res.data
  },err => {
    console.log(err);
  })

  return instance(config)
}
