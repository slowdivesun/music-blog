import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { render } from "react-dom";
import { useEffect } from "react";
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

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Provider store={store}>
      <div className='App bg-gray-300 h-screen flex flex-col items-stretch'>
        <Fragment>
          <Navbar />
          <Routes>
            <Route path='/' element={<Reviews />} />
          </Routes>
          <section className='App bg-gray-300 h-screen flex flex-col items-center'>
            <Alert />
            <Routes>
              <Route path='login' element={<Login />} />
            </Routes>
          </section>
        </Fragment>
      </div>
    </Provider>
  );
};

export default App;
