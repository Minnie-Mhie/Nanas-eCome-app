import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import "./App.css"
import appSlice from "./redux/appSlice.js"
import axios from "axios";

// axios.get("http://localhost:5000/api/v1/products").catch(() => {})

  axios.get("/api/hello").catch(() => {})

const store = configureStore({
  reducer: appSlice,
})

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </StrictMode>
);