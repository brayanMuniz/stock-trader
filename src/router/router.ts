import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

// View
import Home from "@/views/Home.vue";
import SignUp from "@/views/signUp.vue";
import signIn from "@/views/SignIn.vue";
import market from "@/views/Market.vue";

Vue.use(VueRouter);

// Todo: Add safe routing
const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  { path: "/signUp", name: "Sign Up", component: SignUp },
  { path: "/signIn", name: "Sign In", component: signIn },
  { path: "/market", name: "Market", component: market },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
