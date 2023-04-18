//import logo from "./logo.svg";

import "./css/normalize.css";
import "./icomoon/icomoon.css";
import "./css/vendor.css";
import "./style.css";


import Header from "./components/layouts/Header";
// import Landing from "./components/layouts/Landing";
import React, {useState} from "react";
import Footer from "./components/layouts/Footer";
import { Routers } from "./components/routers/Routers";
import { useNavigate } from "react-router-dom";
import api from "./utils/api";

// redux import statements
import { Provider } from "react-redux";
import store from "./redux/store";
import { useEffect } from "react";
import setAuthToken from "./utils/setAuthToken";
import { loadUser } from "./redux/actions/authAction";

function App() {
  const navigate = useNavigate();
  


  useEffect(() => {
    console.log(localStorage.token);
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    } else {
      navigate("/");
      // send the user to landing page.
    }
    store.dispatch(loadUser());
  }, []); // we are not accessing any props.
  const appName = "BookShelf Pro";
  return (
    <>
      <Provider store={store}>
        <Header appName={appName} ></Header>
        <div className="main">
          <Routers></Routers>
        </div>

        <Footer appName={appName}></Footer>
      </Provider>
    </>
  );
}

export default App;
