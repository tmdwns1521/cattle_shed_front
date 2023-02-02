import Vue from "vue";
import VueRouter from "vue-router";

// Layouts
import Default from "@/layouts/Default.vue";
import Manage from "@/layouts/Manage.vue";

// Views(Pages)
import Home from "@/views/Home.vue";
import Sales from "@/views/Sales.vue";
import Order from "@/views/Order.vue";
import Number from "@/views/Number.vue";
import Email from "@/views/Email.vue";
import Manus from "@/views/Manus.vue";
import Login from "@/views/Login.vue";
import QuestionData from "@/views/QuestionData.vue";
import UserDB from "@/views/UserDB.vue"
import Signup from "@/views/Signup.vue";
import store from "../store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Default,
    children: [
      {
        path: "/",
        name: "Home",
        component: Home,
      },
      {
        path: "/admin",
        name: "Login",
        component: Login,
        meta: { isLogin: true },
      },
      {
        path: "/signup",
        name: "Signup",
        component: Signup,
      },
    ],
  },
  {
    path: "/manage",
    component: Manage,
    redirect: "/manage/sales",
    children: [
      {
        path: "sales",
        name: "Sales",
        component: Sales,
        meta: { requiresAuth: true },
      },
      {
        path: "order",
        name: "Order",
        component: Order,
        meta: { requiresAuth: true, roleSuper: "A" },
      },
      {
        path: "number",
        name: "Number",
        component: Number,
        meta: { requiresAuth: true },
      },
      {
        path: "email",
        name: "Email",
        component: Email,
        meta: { requiresAuth: true },
      },
      {
        path: "manus",
        name: "Manus",
        component: Manus,
        meta: { requiresAuth: true },
      },
      {
        path: "questionData",
        name: "QuestionData",
        component: QuestionData,
        meta: { requiresAuth: true },
      },
      {
        path: "userDB",
        name: "UserDB",
        component: UserDB,
        meta: { requiresAuth: true },
      }
      
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const isUser = localStorage.getItem("token");
  const isSuper = store.state.role;
  const roleSuper = to.meta.roleSuper;

  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!isUser) {
      window.alert("관리자만 접근할수있습니다.");
      next("/");
      return;
    }
    next();
  }
  if (to.matched.some((record) => record.meta.isLogin)) {
    if (isUser) {
      // alert('로그인상태입니다');
      next("/manage");
      return;
    }
    next();
  }
  if (roleSuper) {
    if (!isSuper) {
      // console.log(roleSuper)
      // console.log(isSuper);
      alert("접근불가");
      next("/manage");
      return;
    }
    next();
  }
  next();
});

export default router;
