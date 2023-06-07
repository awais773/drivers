import Vue from "vue";

import Router from "vue-router";
import store from "./vuex";
import AdminLayout from "./views/admin/layout/index";
import AdminLayouts from "./views/admin/layout/indexkitchen";

Vue.use(Router);

let router = new Router({
    mode: "history",
    routes: [
        {
            path: "/",
            name: "home",
            component: () => import("./views/login/index.vue")
        },
        {
            path: "/login/:user_id?",
            name: "login",
            component: () => import("./views/login/index.vue")
        },

            {
                path: "/kitchenLogin",
                name: "kitchenLogin",
                component: () => import("./views/login/kitchenLogin.vue")
            },
        {
            path: "/register",
            name: "register",
            component: () => import("./views/register/index.vue")
        },
        {
            path: "/verify/user/:id",
            name: "verify",
            props: true,
            component: () => import("./views/verify/index.vue")
        },
        {
            path: "/forgot-password",
            name: "forgot",
            component: () => import("./views/forgot/index.vue")
        },
        {
            path: "/reset/:token",
            name: "reset",
            component: () => import("./views/reset/index.vue")
        },
        /**
         * Admin routes
         */
        {
            path: "/admin",
            name: "admin",
            component: () => import("./views/admin/dashboard.vue"),
            meta: {
                requiresAuth: true,
                layout: AdminLayout
            }
        },

        {
            path: "/kitchenadmin",
            name: "kitchenadmin",
            component: () => import("./views/admin/dashboards.vue"),
            meta: {
                requiresAuth: true,
                layout: AdminLayouts
            }
        },

        {
            path: "/admin/components/AddUser",
            name: "AddUser",
            component: () => import("./views/admin/addUser.vue"),
            meta: {
                requiresAuth: true,
                layout: AdminLayout
            }
        },


        {
            path: "/admin/components/users/:id/edit'",
            name: "EditUser",
            component: () => import("./views/admin/editUser.vue"),
            meta: {
                requiresAuth: true,
                layout: AdminLayout
            }
        },

        {
            path: "/admin/user",
            name: "user",
            component: () => import("./views/admin/user.vue"),
            meta: {
                requiresAuth: true,
                layout: AdminLayout
            }
        },


        {
            path: "/admin/adminAddRider",
            name: "adminAddRider",
            component: () => import("./views/admin/adminAddRider.vue"),
            meta: {
                requiresAuth: true,
                layout: AdminLayout
            }
        },

        {
            path: "/admin/adminRider",
            name: "adminRider",
            component: () => import("./views/admin/adminRider.vue"),
            meta: {
                requiresAuth: true,
                layout: AdminLayout
            }
        },

        {
            path: "/admin/assign",
            name: "assign",
            component: () => import("./views/admin/assign.vue"),
            meta: {
                requiresAuth: true,
                layout: AdminLayout
            }
        },

        {
            path: "/admin/assignShow",
            name: "assignShow",
            component: () => import("./views/admin/assignShow.vue"),
            meta: {
                requiresAuth: true,
                layout: AdminLayout
            }
        },
   
   

           /////////kitchen

        {
            path: "/admin/kitchen",
            name: "kitchen",
            component: () => import("./views/admin/kitchen.vue"),
            meta: {
                requiresAuth: true,
                layout: AdminLayouts
            }
        },

        {
            path: "/admin/components/addBooking",
            name: "addBooking",
            component: () => import("./views/admin/kitchenAdd.vue"),
            meta: {
                requiresAuth: true,
                layout: AdminLayouts
            }
        },


        {
            path: "/admin/components/users/:id/edit'",
            name: "EditRider",
            component: () => import("./views/admin/editUser.vue"),
            meta: {
                requiresAuth: true,
                layout: AdminLayouts
            }
        },

    ]
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (store.getters.user) {
            next();
            return;
        }
        next("/login");
    } else {
        next();
    }
});

export default router;
