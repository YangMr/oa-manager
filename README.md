# oa-manager
OA后台管理系统


命名空间： 
    git clone -b dev 远程仓库地址

    namespace : "oa"    
    data : {userinfo : {name:jack,age : 100}}
    name : "jack"

    userinfo : "{name:jack, role : 0}"


    oa : {userinfo : {name : "jack", role : 0}}
    
    localstorage.setItem(namespace,JSON.stringify(data))

    data[userinfo].role = 1

    const data = localstorage.getItem(namespace)
    

    admin : {userinfo : {name : "jack", role : 0}}

    h5 : {userinfo : {name : "jack", role : 0}}

    pc : {userinfo : {name : "jack", role : 0}}

    admin
        userinfo
    h5
        userinfo
    pc
        userinfo
问题： 

import request from "request"
function http(options){
    if(options.method.toLowerCase() == "get"){
        options.params = options.data
    }    

    request({
        url : "",
        method : "GET",
        params : {
            name : "jack"
        }
    })
    
}

http({
    url : "",
    method : "GET",
    data : {
        name : "jack"
    }

})

http({
    url : "",
    method : "POST",
    data : {
        name : "jack"
    }
})





axios({
    method : "GET/POST",
    data : {}
})

get             params : {}

post            data : {}

reset ful 

get post put delete ....
