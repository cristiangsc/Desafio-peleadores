import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
    {
        path: "/search",
        name: "search",
        component: () =>
            import ( /* webpackChunkName: "search" */ "../views/SearchFighter.vue"),
    },
    {
        path: "/list",
        name: "list",
        component: () =>
            import ( /* webpackChunkName: "list" */ "../views/ListFighter.vue"),
    },
    {
        path: "/list/:id",
        name: "result",
        component: () =>
            import ( /* webpackChunkName: "result" */ "../views/FighterImage.vue"),
    },
    {
        path: "/:pathMatch(.*)*",
        component: () =>
            import ( /* webpackChunkName: "notFound" */ "../views/NotFound.vue"),
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router