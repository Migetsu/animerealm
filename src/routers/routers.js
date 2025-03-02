import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '@/pages/Home.vue'

export const routers = createRouter({
    history: createWebHashHistory(),
    routes: [
        {path: '/', name: 'home', component: Home},
        {path: '/catalog', name: 'catalog', component: Home},
        {path: '/new', name: 'new', component: Home},
        {path: '/popular', name: 'popular', component: Home},
    ]
})