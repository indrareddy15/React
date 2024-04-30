import React, { lazy } from "react";
import Home from "./pages/Home";

const Products = lazy(() => import("./pages/Products"));

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
];
