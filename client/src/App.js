import { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { render } from "react-dom";
import "./App.css";
import Login from "./components/auth/Login";
import Navbar from "./components/layout/Navbar";
import Reviews from "./components/layout/Reviews";
import Alert from "./components/layout/Alert";
import setAuthToken from "./utils/setAuthToken";
import { loadUser } from "./actions/auth";

// Redux
import { Provider } from "react-redux";
import store from "./store";
import { useEffect } from "react";
import Dashboard from "./components/dashboard/Dashboard";
import PrivateRoute from "./components/routing/PrivateRoute";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Provider store={store}>
      <Router>
        <div className='App bg-gray-300 h-screen flex flex-col items-stretch'>
          <Fragment>
            <Navbar />
            <Route exact path='/' component={Reviews}></Route>
            <section className='App bg-gray-300 h-screen flex flex-col items-center'>
              <Alert />
              <Switch>
                <Route path='/login' component={Login} />
                <PrivateRoute path='/dashboard' component={Dashboard} />
              </Switch>
            </section>
          </Fragment>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
