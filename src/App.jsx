import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";

import "./styles/App.scss";

import path from "./helpers/routerPath.json";

import ModalsPage from "./pages/ModalsPage/ModalsPage";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import AdminPage from "./pages/AdminPage/AdminPage";
import HomePage from "./pages/HomePage/HomePage";
import SuperAdministratorPage from "./pages/SuperAdministratorPage/SuperAdministratorPage";
import CoursesPage from "./pages/CoursesPage/CoursesPage";
import GroupsPage from "./pages/GroupsPage/GroupsPage";
class App extends Component {
  render() {
    return (
      <>
        <Header />
  
        <Routes>
          <Route path={path.superAdmin} element={<SuperAdministratorPage />} />
          <Route path={path.home} element={<HomePage />} />
          <Route path={path.modals} element={<ModalsPage />} />
          <Route path={path.administrators} element={<AdminPage />} />
          <Route path={path.superAdminCourses} element={<CoursesPage />} />
          <Route path={path.superAdminGroups} element={<GroupsPage />} />
        </Routes>
        <Footer />
      </>
    );
  }
}

export default App;
