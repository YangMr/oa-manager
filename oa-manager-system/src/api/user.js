/**
 * @author YangLing
 * @date 2022/4/9 11:42 AM
 */

import request from "../utils/request"

/**
 * 登录接口
 * @param data
 * @returns {AxiosPromise}
 */
const login = (data)=>{
  return request({url : "/users/login", method : "POST", data})
}

/**
 * 用户权限列表接口
 * @returns {AxiosPromise}
 */
const getPermissionList = ()=>{
  return request({url : "/users/getPermissionList",method : "GET",})
}

/**
 * 用户列表接口
 * @param data
 * @returns {AxiosPromise}
 */
const userList = (data)=>{
  return request({url : "/users/list", method : "GET",  data})
}

export default {
  login,
  getPermissionList,
  userList
}
