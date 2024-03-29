import {baseUrl} from './env'
import {getCookie} from "../api/cookie";
import Vue from 'vue';
import {Message} from 'element-ui';

Vue.prototype.$message = Message;
import router from '../router'
export default async (url = '', data = {}, type = 'GET', method = 'fetch') => {
    type = type.toUpperCase();
    url = baseUrl + url;
    
    if (type == 'GET' || type == 'DELETE') {
        let dataStr = ''; //数据拼接字符串
        Object.keys(data).forEach(key => {
            dataStr += key + '=' + data[key] + '&';
        })
        
        if (dataStr !== '') {
            dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'));
            url = url + '?' + dataStr;
        }
    }
    
    if (window.fetch && method == 'fetch') {
        let requestConfig = {
            credentials: 'include',
            method: type,
             headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                "X-Auth-Token": getCookie('token'),
            },
            mode: "cors",
        }
        
        if (type == 'POST' || type == 'PUT') {
            Object.defineProperty(requestConfig, 'body', {
                value: JSON.stringify(data)
            })
        }
        // if( type == "DELETE") {
        //     Object.defineProperty(requestConfig, 'body', {
        //         value: JSON.stringify(data)
        //     })
        // }
        try {
            const response = await fetch(url, requestConfig);
            const responseJson = await response.json()
            if (responseJson.errorCode == 1006 || responseJson.errorCode == 401) {
                Vue.prototype.$message.error(responseJson.message)
                // router.push('/empty')
                
            }
            if(responseJson.errorCode){
                Vue.prototype.$message.error(responseJson.message)
            }
            return responseJson
        } catch (error) {
            throw new Error(error)
        }
    } else {
        return new Promise((resolve, reject) => {
            let requestObj;
            if (window.XMLHttpRequest) {
                requestObj = new XMLHttpRequest();
            } else {
                requestObj = new ActiveXObject;
            }
            
            let sendData = '';
            if (type == 'POST') {
                sendData = JSON.stringify(data);
            }
            
            requestObj.open(type, url, true);
            requestObj.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            requestObj.send(sendData);
            requestObj.withCredentials = true;
            requestObj.onreadystatechange = () => {
                if (requestObj.readyState == 4) {
                    if (requestObj.status == 200) {
                        let obj = requestObj.response
                        if (typeof obj !== 'object') {
                            obj = JSON.parse(obj);
                        }
                        resolve(obj)
                        
                    } else {
                        reject(requestObj)
                    }
                }
            }
        })
    }
}
