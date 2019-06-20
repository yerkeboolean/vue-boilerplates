import Vue from "vue";
import Router from "vue-router";
import ModalView from "./views/ModalView";
import SliderView from "./views/SliderView";

Vue.use(Router);

export default new Router({
  routes: [
    { path: "/", name: "modal", component: ModalView },
    { path: "/slider", name: "slider", component: SliderView }
  ]
});
