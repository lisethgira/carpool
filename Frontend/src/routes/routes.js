
import Carpool from "views/Index.js";
import Profile from "views/examples/Profile.js";
import Maps from "views/Map/Map.js";
import Reservas from "views/reservas/reservas.js";


var routes = [
  {
    path: "/index",
    name: "Carpool",
    icon: "ni ni-tv-2 text-primary",
    component: Carpool,
    layout: "/admin",
  },

  {
    path: "/usuario",
    name: "Perfil Usuario",
    icon: "ni ni-single-02 text-yellow",
    component: Profile,
    layout: "/admin",
  },
  {
    path: "/reservas",
    name: "Reservas",
    icon: "ni ni-bullet-list-67 text-red",
    component: Reservas,
    layout: "/admin",
  },
  {
    path: "/map",
    name: "Map",
    icon: "ni ni-pin-3 text-orange",
    component: Maps,
    layout: "/admin",
  },
];
export default routes;