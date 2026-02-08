import React from "react";
import { MainPage } from "./pages/index.ts";
import { Provider } from "react-redux";
import store from "./store.ts";
import "./styles/index.css";

function App() {
  return (
    <React.Fragment>
      <Provider store={store}>
        <MainPage />
      </Provider>
    </React.Fragment>
  );
}

export default App;
