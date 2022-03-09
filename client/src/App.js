import { Fragment } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";

const App = () => {
  return (
    <div className='App'>
      <Fragment>
        <Navbar />
        <h1 className='text-3xl font-bold underline'>App</h1>
      </Fragment>
    </div>
  );
};

export default App;
