// ajax请求函数模块
// 返回值为promise对象
import axios from "axios"

// get比post复杂是因为URL需要拼接
export default function ajax(url,data={},type='GET'){
    return new Promise(function (resolve,reject){
        // 执行异步Ajax请求
        let promise
        if(type === 'GET'){
            // 准备URL query参数数据
            let dataStr = '' // 数据拼接字符串
            Object.keys(data).forEach(key => {
                dataStr += key + '=' + data[key] + '&'
            })
            if(dataStr !== ''){
                dataStr = dataStr.substring(0,dataStr.lastIndexOf('&'))
                // 地址+参数=完整地址
                url = url + '?' + dataStr
            }
            // 发送get请求
            promise = axios.get(url)
        }else{
            // 发送post请求
            promise = axios.post(url,data)
        }
        
        promise.then(function(response){
            // 成功了调用resolve()
            resolve(response.data)
        }).catch(function(error){
            // 失败reject()
            reject(error)
        })
    })
    
}