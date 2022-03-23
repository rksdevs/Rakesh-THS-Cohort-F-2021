import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {/* {user ? <Home /> : <Register />} */}
          <Home />
        </Route>
        <Route path="/register">
          {/* {user ? <Home /> : <Register />} */}
          <Register />
        </Route>
        <Route path="/login">
          {/* {user ? <Home /> : <Register />} */}
          <Login />
        </Route>
        {/* <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route> */}
        {/* <Route path="/register">
          {user ? <Redirect to="/" /> : <Register />}
        </Route> */}
        <Route path="/profile/:username">
          <Profile />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
