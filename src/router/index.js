import { createRouter, createWebHistory } from 'vue-router'
const routes = [
    {
        path : '/',
        name : 'produk.IndexApi',
        component: ()=> import(/*webpackChunkName: "produk.indexApi" */ '@/views/produk/IndexApi.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes 
})

export default router