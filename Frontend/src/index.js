import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { Provider } from 'react-redux'
import store from './redux'
import App from './app'


import "assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/scss/argon-dashboard-react.scss";

import AdminLayout from "layouts/Admin.js";
import AuthLayout from "layouts/Auth.js";

ReactDOM.render(
  // <BrowserRouter>
  //   <Switch>
  //     <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
  //     <Route path="/auth" render={(props) => <AuthLayout {...props} />} />
  //     <Redirect from="/" to="/auth/login" />
  //   </Switch>
  // </BrowserRouter>,
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
