import Vue from "vue";
import Router from "vue-router";
import ModalView from "./views/ModalView";
import SliderView from "./views/SliderView";
import ShopView from "./views/ShopView";
import Animations from "./views/Animations";
import Table from "./views/Table";

Vue.use(Router);

export default new Router({
  routes: [
    { path: "/", name: "modal", component: ModalView },
    { path: "/slider", name: "slider", component: SliderView },
    { path: "/shop", name: "shop", component: ShopView },
    { path: "/animations", name: "animations", component: Animations },
    { path: "/table", name: "table", component: Table }
  ]
});
