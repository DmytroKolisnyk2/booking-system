import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";

import "./styles/App.scss";

import path from "./helpers/routerPath.json";

import ModalsPage from "./pages/ModalsPage/ModalsPage";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

import HomePage from "./pages/HomePage/HomePage";
import SuperAdministratorPage from "./pages/SuperAdministratorPage/SuperAdministratorPage"
class App extends Component {
  render() {
    return (
      <>
        <Header />
        {/* <BgWrapper title="Manager">
        </BgWrapper> */}
        <Routes>
          <Route path={path.superAdmin} element={<SuperAdministratorPage />} />
          <Route path={path.home} element={<HomePage />} />
          <Route path={path.modals} element={<ModalsPage />} />
        </Routes>
        <Footer />
      </>
    );
  }
}

export default App;
