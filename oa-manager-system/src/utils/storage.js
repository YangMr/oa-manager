/**
 * @author YangLing
 * @date 2022/4/9 11:19 AM
 */

import config from "../config/config"

export default {
  getStorage(){
    return JSON.parse(window.localStorage.getItem(config.NAME_SPACE) || "{}");
  },
  setItem(key,val){
    const storage = this.getStorage()
    storage[key] = val
    window.localStorage.setItem(config.NAME_SPACE,JSON.stringify(storage))
  },
  getItem(key){
    return this.getStorage()[key]
  },
  clearItem(key){
    const storage = this.getStorage()
    delete storage[key]
    window.localStorage.setItem(config.NAME_SPACE, JSON.stringify(storage))
  },
  clearAll(){
    window.localStorage.clear()
  }
}

