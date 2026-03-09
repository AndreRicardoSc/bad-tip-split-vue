import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: '/',
        name: 'home-view',
        component: () => import('../views/HomeView.vue'),
    },
    {
        path: '/despesas/:id',
        component: () => import('../views/DespesaDetailView.vue'),
    },
];

const router  = createRouter({
    routes,
    history: createWebHistory()
});

export default router;