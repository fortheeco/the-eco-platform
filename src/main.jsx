import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import App from "./App";
import { AuthContextProvider } from "./context/AuthContext";
import configureStore from "./appRedux/store";
import { Provider } from "react-redux";
import "./index.css";

export const store = configureStore();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <AuthContextProvider>
          <App />
        </AuthContextProvider>
      </Provider>
      <ToastContainer />
    </BrowserRouter>
  </React.StrictMode>
);
