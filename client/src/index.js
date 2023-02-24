import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import CssBaseline from "@mui/material/CssBaseline";
import {BrowserRouter} from 'react-router-dom';
import "./index.css";
//import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
//import { ThemeProvider } from "@mui/material";
//import { theme } from "./theme";
import store from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  
     
<BrowserRouter>
<Provider store={store}>
<App />
</Provider>
</BrowserRouter>
  
);
