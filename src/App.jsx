import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";

import "./styles/App.scss";

import path from "./helpers/routerPath.json";

import ModalsPage from "./pages/ModalsPage/ModalsPage";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import AdminPage from "./pages/AdminPage/AdminPage";
import HomePage from "./pages/HomePage/HomePage";
import SuperAdministratorPage from "./pages/SuperAdministratorPage/SuperAdministratorPage"
import ConfirmatorPage from "./pages/ConfirmatorPage/ConfirmatorPage"

class App extends Component {
  render() {
    return (
      <>
        <Header
          endpoints={[
            { text: "Home", path: "/" },
            { text: "Modals", path: "/modals" },
            { text: "Call center", path: "/call-center" },
            { text: "Administrators", path: "/administrators" },
          ]}
          user={{ name: "Марія", role: "Manager" }}
        />
        <Routes>
          <Route path={path.superAdmin} element={<SuperAdministratorPage />} />
          <Route path={path.home} element={<HomePage />} />
          <Route path={path.modals} element={<ModalsPage />} />
          <Route path={path.confirmator} element={<ConfirmatorPage />} />
          <Route path={path.administrators} element={<AdminPage />} />
        </Routes>
        <Footer />
      </>
    );
  }
}

export default App;
