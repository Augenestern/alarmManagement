import request from './request'

// 查找所有用户
export function findAllUsers() {
    return request({
        url: '/userlist',
        method: 'get',
    })
}

// 删除用户
export function deleteUser(payload) {
    return request({
        url: '/userdelete?username='+payload,
        method: 'delete',
    })
}

//修改用户
export function updateUser(payload) {
    return request({
        url: '/updateuser',
        method: 'put',
        data:payload
    })
}