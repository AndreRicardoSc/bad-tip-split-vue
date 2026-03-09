import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: '/',
        component: () => import('../views/HomeView.vue')
    },
    // {
    //     path: 'despesas/:id/edit',
    // },
    {
        path: '/despesas/:id',
        component: () => import('../views/DespesaDetailView.vue'),
    }
];

const router  = createRouter({
    routes,
    history: createWebHistory()
});

export default router;