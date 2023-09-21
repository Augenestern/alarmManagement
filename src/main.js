import Vue from 'vue'
import App from './App.vue'
import '@/assets/global.css'
//引入ui组件库
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//引入路由，npm install vue-router （安装路由）
//引入VueRouter
import VueRouter from 'vue-router'
//引入路由器
import router from './router';
import $ from 'jquery';
Vue.prototype.$ = $
Vue.config.productionTip = false//关闭生产提示
Vue.use(ElementUI);
//安装vuex并引入，npm install vuex（安装vuex），具体引入以及应用在store中
// import store from './store/index'
//安装axios依赖
import axios from 'axios'
//使用axios
// import VueCookies from 'vue-cookies';
// Vue.use(VueCookies)
Vue.prototype.$axios = axios
//应用路由插件
Vue.use(VueRouter)

import * as echarts from 'echarts';
Vue.prototype.$echarts = echarts;

//页面跳转前
// router.beforeEach(async(to, from, next) => { 
//     const logintoken = localStorage.getItem('login-token')
//     if (logintoken) {
//         if (to.path === "/beautiful") {
//             next({ path: "/list" })
//         }else if(to.path==="/"){
//             next({ path: "/list" })
//         } else {
//             next()
//         }
//     } else {
//         if (to.path !== "/beautiful") {
//             next({ path: "/beautiful" })
//         } else {
//             next()
//         }
//     }
// })
// 页面跳转前
// router.beforeEach((to, from, next) => {
//   if(to.path =='/'){
//     next({
//       path: '/beautiful'
//     });
//   }
//   console.log('路由拦截')
//   //判断要去的路由有没有requiresAuth
//   if (to.meta.requiresAuth) {
//     let token = localStorage.getItem('login-token')
//     if (token) {
//       if(to.path=='/beautiful'){
//         next('/list');
//       }
//       else{
//         next();
//       }
//     } else {
//       next({
//         path: '/beautiful'
//       });
//     }
//   }
//   else{
//     next();
//   }
// })


const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location, onResolve, onReject) {
    if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
    return originalPush.call(this, location).catch(err => err)
}

new Vue({
    render: h => h(App),
    axios,
    router: router,
    beforeCreate() {
        Vue.prototype.$bus = this //安装全局事件总线
    },
}).$mount('#app')

