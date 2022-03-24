import { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { render } from "react-dom";
import "./App.css";
import Login from "./components/auth/Login";
import Navbar from "./components/layout/Navbar";
import Alert from "./components/layout/Alert";
import setAuthToken from "./utils/setAuthToken";
import { loadUser } from "./actions/auth";
import Dashboard from "./components/dashboard/Dashboard";
import PrivateRoute from "./components/routing/PrivateRoute";
import CreateProfile from "./components/profile-form/CreateProfile";
import EditProfile from "./components/profile-form/EditProfile";
import Profiles from "./components/profiles/Profiles";
import Profile from "./components/profile/Profile";
import Reviews from "./components/reviews/Reviews";

// Redux
import { Provider } from "react-redux";
import store from "./store";
import { useEffect } from "react";
import ReviewForm from "./components/reviews/ReviewForm";
import Review from "./components/review/Review";
import Genre from "./components/genre/Genre";
import List from "./components/list/List";
import ListForm from "./components/list/ListForm";
import Lists from "./components/lists/Lists";

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
        <div className='App bg-slate-300 flex flex-col items-stretch'>
          <Fragment>
            <Navbar />
            <Route exact path='/' component={Reviews}></Route>
            <section className='App bg-gray-300 flex flex-col items-center'>
              <Alert />
              <Switch>
                <Route path='/login' component={Login} />
                <Route path='/writers' component={Profiles} />
                <Route exact path='/list' component={Lists} />
                <Route path='/profile/:id' component={Profile} />
                <Route path='/review/:id' component={Review} />
                <Route path='/genre/:id' component={Genre} />
                <Route exact path='/list/:id' component={List} />

                <PrivateRoute path='/dashboard' component={Dashboard} />
                <PrivateRoute path='/add-review' component={ReviewForm} />
                <PrivateRoute path='/add-list' component={ListForm} />
                <PrivateRoute path='/add-bio' component={CreateProfile} />
                <PrivateRoute path='/edit-profile' component={EditProfile} />
              </Switch>
            </section>
          </Fragment>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
