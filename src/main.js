import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import GamePlay from "./components/GamePlay.vue";
import GameMenu from "./components/GameMenu.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: GameMenu },
  { path: "/gameplay", component: GamePlay }
];

const router = new VueRouter({
  routes
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
