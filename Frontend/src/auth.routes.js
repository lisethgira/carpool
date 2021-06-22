
import Register from "views/Register/Register.js";
import Login from "views/Login/Login.js";
import quienesSomos from "views/quienesSomos/quienesSomos.js"

var authRoutes = [
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
export default authRoutes;