/**
 * @author YangLing
 * @date 2022/4/9 3:50 PM
 */

import router from "./router"
import store from "./store"

router.beforeEach((to,from,next)=>{
  const token = store.state.userInfo.token
  if(!token){
    if(to.path === "/login"){
      next()
    }else{
      next("/login")
    }
  }else{
    if(to.path === "/login"){
      next(from.path)
    }else{
      next()
    }
  }

  if(to.meta.title){
    document.title = to.meta.title
  }else{
    document.title = "火星后台管理系统"
  }
})
