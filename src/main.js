import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import "./plugins/bootstrap-vue";
import App from "./App.vue";
import router from "./router";
import VueAnime from "vue-animejs";
import "vue-awesome/icons";
import Icon from "vue-awesome/components/Icon";
import scrollAnimation from "./directives/scroll-animation";
Vue.component("v-icon", Icon);
Vue.config.productionTip = false;
Vue.use(VueAnime);
Vue.directive("scrollAnimation", scrollAnimation);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
