import axios from 'axios'
// async function request(requestConfig) {
//     return axios(requestConfig)
// }
console.log("这里是uilts:", localStorage.getItem('accessToken'))
const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API,
    timeout: 5000,
})

service.interceptors.request.use(
    config => {
        if (localStorage.getItem('accessToken')) {
          config.headers['Authorization'] = localStorage.getItem('accessToken')
        }
        return config
      },
      error => {
        // do something with request error
        console.log(error) // for debug
        return Promise.reject(error)
      }
)
    
export default service;
