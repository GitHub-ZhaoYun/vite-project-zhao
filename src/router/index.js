import {createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
    history: createWebHistory(), // hash模式 createWebHashHistory() history模式 createWebHistory()
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('../views/HelloWorld.vue')
        }
    ]
})

export default router
