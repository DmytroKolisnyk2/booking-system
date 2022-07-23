import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import path from "./helpers/routerPath.json";

import HomePage from "./pages/HomePage/HomePage";
import ModalsPage from "./pages/ModalsPage/ModalsPage";

class App extends Component {
  render() {
    return (
      <>
        <Routes>
          <Route path={path.test} element={<HomePage />} />
        </Routes>
        <Routes>
          <Route path={path.modals} element={<ModalsPage />} />
        </Routes>
      </>
    );
  }
}

export default App;
