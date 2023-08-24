import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import store from "./components/redux/store";
import { Provider } from "react-redux";
// import axios from "axios";

// const login = async () => {
//     try {

//         let response = await axios.get(`${process.env.REACT_APP_API_ENDPOINT}/google`);
//         if(response){
//             console.log(response);
//         }

//     }catch (e) {
//         console.log(e);
//     }
// }

// login();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter basename="/superadmin">
    <Provider store={store}>
      <Routes />
    </Provider>
  </BrowserRouter>
);
