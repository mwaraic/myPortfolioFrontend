import { Switch, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";
import Dashboard from "./components/Dashboard";
import Open from "./components/Open";
import PrivateRoute from "./components/PrivateRoute";

const App = () => {
 
  return (
    <>
        <Switch>
          <PrivateRoute exact path="/" component={Login} />
          <PrivateRoute exact path="/login" component={Login} />
          <PrivateRoute exact path="/register" component={Register} />
          <PrivateRoute exact path="/profile" component={Profile} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <Route path="/:name" component={Open}/>
        </Switch>
    </>
  );
};

export default App;
