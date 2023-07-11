import Vue from "vue";
import VueRouter from "vue-router";

// Layouts
import Manage from "@/layouts/Manage.vue";

// Views(Pages)
import Sales from "@/views/Sales.vue";

Vue.use(VueRouter);

const routes = [
  // {
  //   path: "/",
  //   component: Default,
  //   children: [
  //     {
  //       path: "/admin",
  //       name: "Login",
  //       component: Login,
  //       meta: { isLogin: true },
  //     },
  //     {
  //       path: "/signup",
  //       name: "Signup",
  //       component: Signup,
  //     },
  //   ],
  // },
  {
    path: "/",
    component: Manage,
    redirect: "/sales",
    children: [
      {
        path: "sales",
        name: "Sales",
        component: Sales,
        meta: { requiresAuth: true },
      },
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  // if (to.matched.some((record) => record.meta.requiresAuth)) {
  //   if (!isUser) {
  //     window.alert("관리자만 접근할수있습니다.");
  //     next("/");
  //     return;
  //   }
  //   next();
  // }
  // if (to.matched.some((record) => record.meta.isLogin)) {
  //   if (isUser) {
  //     // alert('로그인상태입니다');
  //     next("/manage");
  //     return;
  //   }
  //   next();
  // }
  // if (roleSuper) {
  //   if (!isSuper) {
  //     // console.log(roleSuper)
  //     // console.log(isSuper);
  //     alert("접근불가");
  //     next("/manage");
  //     return;
  //   }
  //   next();
  // }
  next();
});

export default router;
