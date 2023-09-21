import request from './request'

// 查找所有图书
export function findAllBooks() {
    return request({
        url: '/findallbook',
        method: 'get',
    })
}

//添加书籍
export function addBook(payload) {
    return request({
        url: '/addbook',
        method: 'post',
        data: payload
    })
}

//删除书籍
export function deleteBook(payload) {
    return request({
        url: '/deletebook?bookname='+payload,
        method: 'delete',
    })
}

//编辑图书
export function updateBook(payload) {
    return request({
        url: '/updatabook',
        method: 'put',
        data: payload
    })
}

//根据书名模糊查找
export function findMoHuBooksm(payload) {
    return request({
        url: '/findmohubookname?bookname='+payload,
        method: 'get',
    })
}


//根据作者模糊查找
export function findMoHuBookzz(payload) {
    return request({
        url: '/findmohuwriter?writer='+payload,
        method: 'get',
    })
}