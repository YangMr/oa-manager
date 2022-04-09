# oa-manager
OA后台管理系统


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
