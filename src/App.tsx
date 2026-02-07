import React from "react";
import { Provider } from "react-redux";
import store from "./store.ts";
import "./styles/index.css";

function App() {
  return (
    <React.Fragment>
      <Provider store={store}>
        <div>This is a new react app.</div>
      </Provider>
    </React.Fragment>
  );
}

export default App;
