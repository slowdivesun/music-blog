import { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Login from "./components/auth/Login";
import Navbar from "./components/layout/Navbar";
import Reviews from "./components/layout/Reviews";

const App = () => {
  return (
    <div className='App bg-gray-300 h-screen flex flex-col items-stretch'>
      <Router>
        <Fragment>
          <Navbar />
          <Route exact path='/' component={Reviews} />
          <section className='App bg-gray-300 h-screen flex flex-col items-center'>
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
