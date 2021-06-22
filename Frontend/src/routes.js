
import Index from "views/Index.js";
import Profile from "views/examples/Profile.js";
import Maps from "views/Map/Map.js";
import Register from "views/Register/Register.js";
import Login from "views/Login/Login.js";
import Tables from "views/examples/Tables.js";
import quienesSomos from "views/quienesSomos/quienesSomos.js"

var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin",
  },
  {
    path: "/map",
    name: "Map",
    icon: "ni ni-pin-3 text-orange",
    component: Maps,
    layout: "/admin",
  },
  {
    path: "/user-profile",
    name: "User Profile",
    icon: "ni ni-single-02 text-yellow",
    component: Profile,
    layout: "/admin",
  },
  {
    path: "/tables",
    name: "Tables",
    icon: "ni ni-bullet-list-67 text-red",
    component: Tables,
    layout: "/admin",
  },
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth",
  },
  {
    path: "/register",
    name: "Register",
    icon: "ni ni-circle-08 text-pink",
    component: Register,
    layout: "/auth",
  },
  {
    path: "/quienesSomos",
    name: "Quienes Somos",
    icon: "ni ni-tv-2 text-primary",
    component: quienesSomos,
    layout: "/auth",
  },
];
export default routes;
