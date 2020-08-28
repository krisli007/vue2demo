export default [
    {
        path: '/',
        redirect: '/home',
        component: () => import('../components/index/index.vue')
    },
    {
        path: '/home',
        component: () => import('../components/index/index.vue')
    },
    {
        path: '/about',
        component: () => import('../components/about/index.vue')
    }
]
