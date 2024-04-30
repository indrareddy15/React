import { lazy } from "react";
import Home from "./Components/home";

const Users = lazy(() => import("./Components/users"));
const UserProfile = lazy(() => import("./Components/userProfile"));
const SearchUser = lazy(() => import("./Components/searchUser"));
const Login = lazy(() => import("./Components/login"));
const AuthProfile = lazy(() => import("./Components/authProfile"));
const RepoDetail = lazy(() => import("./Components/repoDetail"));
const AboutUs = lazy(() => import("./Components/about"));
const NotFound = lazy(() => import("./Components/notfound"));

export const appRoutes = [
  {
    path: "/",
    component: Home,
    requireAuth: false,
  },
  {
    path: "/login",
    component: Login,
    requireAuth: false,
  },
  {
    path: "/users",
    component: Users,
    requireAuth: false,
  },
  {
    path: "/authProfile",
    component: AuthProfile,
    requireAuth: true,
  },
  {
    path: "/search",
    component: SearchUser,
    requireAuth: false,
  },
  {
    path: "/users/user/:username",
    component: UserProfile,
    requireAuth: false,
  },
  {
    path: "/about",
    component: AboutUs,
    requireAuth: false,
  },
  {
    path: "/repoDetails/:name/:username",
    component: RepoDetail,
    requireAuth: false,
  },
  {
    path: "*",
    component: NotFound,
    requireAuth: false,
  },
];
