import React, { lazy } from "react";
import Home from "./pages/Home";

const Products = lazy(() => import("./pages/Products"));
const Cart = lazy(() => import("./pages/Cart"));
const Checkout = lazy(() => import("./pages/Checkout"));

export const appRoute = [
  {
    path: "/",
    component: Home,
    requireAuth: false,
  },
  {
    path: "/products",
    component: Products,
    requireAuth: false,
  },
  {
    // URL Parameter is optional parameter
    path: "/products/:category?",
    component: Products,
    requireAuth: false,
  },
  {
    path: "/cart",
    component: Cart,
    requireAuth: false,
  },
  {
    path: "/checkout",
    component: Checkout,
    requireAuth: true,
  },
];
