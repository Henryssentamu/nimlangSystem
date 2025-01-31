import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./componets/home";
import { AdminDashboard } from "./pages/admin";
import { EmployeeRecruitmentForm } from "./componets/forms/employee";
import { Department } from "./componets/adminSideBar/deptments";
import { Branches } from "./componets/adminSideBar/branches";
import { CreatePositions } from "./componets/adminSideBar/setpositions";
import { PersonalMedicalForm } from "./componets/forms/clients";
import { ClientRegistrationDashboard } from "./componets/adminSideBar/clientCenter";

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/employeeRecruitment" element={<EmployeeRecruitmentForm />} />
          <Route path="/admin/deptments" element={<Department />} />
          <Route path="/admin/branches" element={<Branches />} />
          <Route path="/admin/positions" element={<CreatePositions />} />
          <Route path="/admin/clientRegistering" element={<PersonalMedicalForm />} />
          <Route path="/admin/clientCenter" element={<ClientRegistrationDashboard />} />
        </Routes>
      </Router>
    </div>
  );
}
