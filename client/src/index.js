import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

//redux imports---
import store from "./app/store";

import App from "./App";

import AutoLogin from "./components/utils/AutoLogin";

// const dispatch = useDispatch();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>

      <AutoLogin/>
        <App />
      <AutoLogin/>
      
      </BrowserRouter>{" "}
    </Provider>
  </React.StrictMode>
);


