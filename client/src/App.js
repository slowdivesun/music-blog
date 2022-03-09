import { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Login from "./components/auth/Login";
import Navbar from "./components/layout/Navbar";
import Reviews from "./components/layout/Reviews";

const App = () => {
  return (
    <div className='App bg-gray-300 h-screen'>
      <Router>
        <Fragment>
          <Navbar />
          <Route exact path='/' component={Reviews} />
          <section className='container'>
            <Switch>
              <Route exact path='/login' component={Login} />
            </Switch>
          </section>
        </Fragment>
      </Router>
    </div>
  );
};

export default App;
