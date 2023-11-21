import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";

import App from "./App.jsx";
import "./assets/css/index.less";
import './assets/css/common.less'
import "normalize.css";
import store from "./store/index.js";
import theme from "./assets/theme/index.js";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
      <Suspense fallback={<div>loading</div>}>
        <ThemeProvider theme={theme}>
          <HashRouter>      
            <App/>
          </HashRouter>
        </ThemeProvider>
      </Suspense>
    </Provider>
  
);
