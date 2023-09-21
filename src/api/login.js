import request from './request'

// 登录
export function login(payload) {
    return request({
        url: '/login',
        method: 'post',
        data: payload
    })
}

//注册
export function zhuce(payload) {
    return request({
        url: '/adduser',
        method: 'post',
        data: payload
    })
}
