import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MainPage } from "./pages/index.ts";
import { Provider } from "react-redux";
import store from "./store.ts";
import "./styles/index.css";

function App() {
  return (
    <React.Fragment>
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/" element={<MainPage />} />
          </Routes>
        </Router>
      </Provider>
    </React.Fragment>
  );
}

export default App;
