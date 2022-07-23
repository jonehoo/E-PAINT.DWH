import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/layout'

Vue.use(Router)



export const constantRoutes = [{
        path: '/',
        show: false,
        component: () =>
            import ('@/views/Login/Login.vue'),
    },

    {
        path: '/404',
        show: false,
        component: () =>
            import ('@/views/AboutView.vue'),
    },
    {
        path: '/DWH',
        show: false,
        component: () =>
            import ('@/views/DWH'),
    },

    {
        path: '/home',
        show: true,
        name: "数据看板",
        icon: 'el-icon-s-home',
        component: Layout,
        children: [{
            path: '/home',
            icon: 'el-icon-s-home',
            component: () =>
                import ('@/views/HomeView.vue'),
        }, ]
    },
    {
        path: '/data',
        show: true,
        name: "数据分析",
        icon: 'el-icon-s-data',
        component: Layout,
        children: [{
            path: '/data',
            icon: 'el-icon-s-home',
            component: () =>
                import ('@/views/AboutView.vue'),
        }, ]
    },
    {
        path: '/user',
        show: true,
        name: "人员管理",
        icon: 'el-icon-s-marketing',
        component: Layout,
        children: [{
                name: "角色管理",
                path: '/key',
                icon: 'el-icon-s-home',
                component: () =>
                    import ('@/views/HomeView.vue'),
            },
            {
                name: "权限管理",
                path: '/rule',
                icon: 'el-icon-s-home',
                component: () =>
                    import ('@/views/AboutView.vue'),
            },
        ]
    },
    {
        path: '/role',
        show: true,
        name: "权限管理",
        icon: 'el-icon-s-marketing',
        component: Layout,
        children: [{
                name: "角色管理",
                path: '/key',
                icon: 'el-icon-s-home',
                component: () =>
                    import ('@/views/HomeView.vue'),
            },
            {
                name: "权限管理",
                path: '/rule',
                icon: 'el-icon-s-home',
                component: () =>
                    import ('@/views/AboutView.vue'),
            },
        ]
    }
]

const createRouter = () => new Router({
    mode: 'history', // require service support
    routes: constantRoutes
})

const router = createRouter()

export function resetRouter() {
    const newRouter = createRouter()
    router.matcher = newRouter.matcher // reset router
}

export default router