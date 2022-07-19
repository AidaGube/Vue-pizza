import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import Cart from "../views/Cart.vue";
import Admin from "../views/Admin/Admin.vue";
import AdminAddProduct from "../views/Admin/AdminAddProduct";
import AdminProductPreview from "../views/Admin/AdminProductPreview";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart,
  },
  {
    path: "/admin",
    name: "Admin",
    component: Admin,
  },
  {
    path: "/admin/add-product",
    name: "AdminAddProduct",
    component: AdminAddProduct,
  },
  {
    path: "/admin/product-preview",
    name: "AdminProductPreview",
    component: AdminProductPreview,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
