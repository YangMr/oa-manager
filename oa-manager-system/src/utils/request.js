/**
 * @author YangLing
 * @date 2022/4/9 10:19 AM
 */

/**
 * 1. 引入axios
 * 2. 创建axios实例对象
 * 3. 创建请求拦截器以及响应拦截器
 * 4. loading全局加载
 * 5. 通过请求头发送token
 * 6. token的过期处理
 * 7. 全局响应提示
 * 8. 返回数据的层级优化
 * 9. 优化get请求params传参问题
 */

import axios from "axios"
import store from "../store"
import { ElLoading,ElMessage } from 'element-plus'

const TOKEN_INVALID = 'Token认证失败，请重新登录'
const NETWORK_ERROR = '网络请求异常，请稍后重试'

const loading = {
  loadingInstance : null,
  open(){
    if(this.loadingInstance == null){
      this.loadingInstance = ElLoading.service({
        target : "body",
        background : "rgba(0,0,0,0.4)",
        text : "加载中"
      })
    }
  },
  close(){
    if(this.loadingInstance != null){
      this.loadingInstance.close()
    }
    this.loadingInstance = null
  }
}

const service = axios.create({
  baseURL : process.env.VUE_APP_BASE_API,
  timeout : 5000
})

/**
 * title : 请求拦截器里面做的事情
 *  1. 开启loading加载
 *  2. 通过请求头将token发送给后台
 *
 *  扩展: （自己先下去想想）
 *      比如， 我们现在获取用户列表，目前问题是当我第一次将列表获取成功之后，
 *            当浏览器再次刷新，我们又会重新发送请求
 *
 *      需求：
 *            当用户对该接口已经请求成功了，就不在重复发送请求了
 */
service.interceptors.request.use(function (config) {
  loading.open()
  const token = store.state.userInfo.token || ""
  if(token){
    config.headers.Authorization = "Bearer " + token
  }

  return config;
}, function (error) {
  loading.close()
  return Promise.reject(error);
});

/**
 * title : 响应拦截器里面要做的事情
 *  1. loading加载的关闭
 *  2. 如果请求的状态码等于200, 就将请求的数据返回出去
 *  3. 如果请求的状态码等于50001 , 则表示token以及过期, 请求本地和vuex存储的token以及用户信息 2. 退出登录
 *  4. 如果请求的状态不是200， 也不是50001， 我们需要通过message组件进行失败信息提示
 */
service.interceptors.response.use(function (response) {
  loading.close()
  const {code, data , msg} = response.data
  if(code === 200){
    return data
  }else if(code === 500001){
    ElMessage.error(TOKEN_INVALID)
    store.dispatch("handleUserLogout")
    return Promise.reject(TOKEN_INVALID)
  }else{
    ElMessage.error(msg||NETWORK_ERROR)
    return Promise.reject(msg || NETWORK_ERROR)
  }
}, function (error) {
  loading.close()
  return Promise.reject(error);
});



function request(options){
  options.method = options.method || "GET"
  if(options.method.toLowerCase() == "get"){
    options.params = options.data
  }
  return service(options)
}

export default request
