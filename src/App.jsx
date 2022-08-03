import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";

import "./styles/App.scss";

import path from "./helpers/routerPath";

import ModalsPage from "./pages/ModalsPage/ModalsPage";
import Footer from "./components/Footer/Footer";
import AdminPage from "./pages/Admin/AdminPage";

import SuperAdministratorPage from "./pages/SuperAdmin/SuperadminPage";
import ConfirmatorPage from "./pages/Confirmator/ConfirmatorPage";

import AdminUsersPage from "./pages/Admin/UsersPage";
import AdminGroupsPage from "./pages/Admin/GroupsPage";
import AdminCoursesPage from "./pages/Admin/CoursesPage";
import AdminActionsPage from "./pages/Admin/ActionsPage";

import UsersPage from "./pages/SuperAdmin/UsersPage";
import GroupsPage from "./pages/SuperAdmin/GroupsPage";
import CoursesPage from "./pages/SuperAdmin/CoursesPage";
import ActionsPage from "./pages/SuperAdmin/ActionsPage";
import ManagerPage from "./pages/Manager/ManagerPage";
import ConsultationsPage from "./pages/Manager/ConsultationsPage";
import PlanningPage from "./pages/Manager/PlanningPage";
import HomePage from "./pages/HomePage/HomePage";
import CallerPage from "./pages/Caller/CallerPage";

class App extends Component {
  render() {
    return (
      <>
        <Routes>
          <Route path={path.modals} element={<ModalsPage />} />

          <Route path={path.admin} element={<AdminPage />}>
            <Route path={path.users} element={<AdminUsersPage />} />
            <Route path={path.groups} element={<AdminGroupsPage />} />
            <Route path={path.courses} element={<AdminCoursesPage />} />
            <Route path={path.actions} element={<AdminActionsPage />} />
          </Route>

          <Route path={path.superAdmin} element={<SuperAdministratorPage />}>
            <Route path={path.users} element={<UsersPage />} />
            <Route path={path.groups} element={<GroupsPage />} />
            <Route path={path.courses} element={<CoursesPage />} />
            <Route path={path.actions} element={<ActionsPage />} />
          </Route>

          <Route path={path.manager} element={<ManagerPage />}>
            <Route path={path.consultations} element={<ConsultationsPage />} />
            <Route path={path.planning} element={<PlanningPage />} />
          </Route>

          <Route path={path.confirmator} element={<ConfirmatorPage />} />
          <Route path={path.caller} element={<CallerPage />} />
          
          <Route path={path.all} element={<HomePage />} />
        </Routes>
        <Footer />
      </>
    );
  }
}

export default App;
