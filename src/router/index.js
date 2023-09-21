import VueRouter from 'vue-router'
import main from '../components/home/main.vue'
import not from '../components/notfound.vue'
export default new VueRouter({
    mode: "hash",
    routes: [
        {
            path: '/login',
            component: () => import('../components/qqq/login.vue'),
        },
        {
            path: '/zhuce', 
            component: () => import('../components/qqq/zhuce.vue'),
        },
        {
            path: '/main',
            component: main,
            redirect: '/zhuye',
            meta: { requireAuth: true },
            children: [
                {
                    path: '/yggl',
                    component: () => import('../components/yggl.vue'),
                },
                {
                    path: '/grzx',
                    component: () => import('../components/grzx.vue'),
                },
                {
                    path: '/ribaobiao',
                    component: () => import('../components/qqq/ribaobiao.vue'),
                },
                {
                    path: '/yuebaobiao',
                    component: () => import('../components/qqq/yuebaobiao.vue'),
                },
                {
                    path: '/gjlb',
                    component: () => import('../components/qqq/gjlb.vue'),
                },
                {
                    path: '/gjcl',
                    component: () => import('../components/qqq/gjcl.vue'),
                },
                {
                    path: '/zhuye',
                    component: () => import('../components/qqq/zhuye.vue'),
                },
            ]
        },
        {
            path: '*',
            component: not,
        },
    ]
})