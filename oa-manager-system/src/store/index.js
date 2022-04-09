import { createStore } from 'vuex'
import storage from "../utils/storage"
import UserModel from "../api/user"
import router from "../store"
export default createStore({
  state: {
    userInfo : storage.getItem("userinfo") || ""
  },
  mutations: {
    setInfo(state,info){
      state.userInfo = info
      storage.setItem("userinfo",info)
      console.log("userInFo=>",state.userInfo)
    }
  },
  actions: {
    async handleUserLogin({commit},loginForm){
      try{
        const response = await UserModel.login(loginForm)
        commit("setInfo",response)
      }catch (err){
        console.log(err)
      }
    },
    handleUserLogout({commit}){
      commit("setInfo","")
      router.push("/login")
    }
  },
  modules: {
  },
});
