import { lazy } from "react";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

const Products = lazy(() => import("./pages/Products"));
const Cart = lazy(() => import("./pages/Cart"));
const Checkout = lazy(() => import("./pages/Checkout"));
const Login = lazy(() => import("./pages/Login"));
const About = lazy(() => import("./pages/About"));
const Payment = lazy(() => import("./pages/Payment"));
const PaymentSuccess = lazy(() => import("./pages/PaymentSuccessfull"));

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
  {
    path: "/login",
    component: Login,
    requireAuth: false,
  },
  {
    path: "/about",
    component: About,
    requireAuth: false,
  },
  {
    path: "/payment",
    component: Payment,
    requireAuth: false,
  },
  {
    path: "/payment/success",
    component: PaymentSuccess,
    requireAuth: false,
  },
  {
    path: "*",
    component: NotFound,
    requireAuth: false,
  },
];
