import axios from 'axios'

let service = axios.create({
  // baseURL: 'http://8.130.77.88:7001/'
  baseURL: 'http://127.0.0.1:7001/'
})

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    // 设置token，Content-Type
    const token = localStorage.getItem('login-token') || ''
    config.headers['token'] = token
    config.headers['Content-Type'] = 'application/json;charset=UTF-8'
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)
// 响应拦截器
service.interceptors.response.use(
  (res) => {
    if (res.data.code === 401) {
      //  重新登录
      localStorage.clear();
      location.href = '#/beautiful'
    }
    return res
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default service
