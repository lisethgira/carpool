import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import { createBrowserHistory } from 'history'
import { mainRouter } from "./routes";
import AdminLayout from "./layouts/Admin.js";
import AuthLayout from "./layouts/Auth.js";
import { SnackbarProvider } from 'notistack'


const history = createBrowserHistory();

function App() {
  return (
    <SnackbarProvider maxSnack={3} anchorOrigin={{ vertical: 'top', horizontal: 'center', }} >
      <Router history={history}>
        <Switch>
          <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
          <Route path="/auth" render={(props) => <AuthLayout {...props} />} />
          <Redirect form={'/'} to={"/auth/login"} />
        </Switch>
      </Router>
    </SnackbarProvider>
  );
}

export default App;
