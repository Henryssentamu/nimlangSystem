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
import { ClientProfilOnAdmin } from "./pages/clientprofile";
import { PaymentDetails } from "./pages/clientpaymentdetails";
import { DetailedReport } from "./pages/medicalReports";
import { PaymentReceipt } from "./pages/receipts";
import { TreatmentBill } from "./pages/clientsmedicalBills";
import { Login, LoginOfficer, LoginFocalPerson } from "./componets/login";
import { BranchSuccessfullyCreated } from "./componets/submissionSuccessfullMessages/creatingBranch";
import { DeptmentSuccessfullyCreated } from "./componets/submissionSuccessfullMessages/createDeptment";
import { PositionSuccessfullyCreated } from "./componets/submissionSuccessfullMessages/createPosition";
import { EmployeeSuccessfullyRecruited } from "./componets/submissionSuccessfullMessages/employeeRecruited";
import { ClientSuccessfullyRegistered } from "./componets/submissionSuccessfullMessages/client";
import { HospitalDashboard } from "./componets/adminSideBar/hosipal";
import { HospitalForm } from "./componets/forms/hispital";
import { FocalPersonDashboard } from "./componets/focalPersonDashboard";
import { FieldOfficerDashboard } from "./componets/officerDashboard";

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
          <Route path="/admin/clientCenter" element={<ClientRegistrationDashboard />} />
          <Route path="/admin/clientprofile" element={<ClientProfilOnAdmin />} />
          <Route path="/admin/clientpaymentdetails" element={<PaymentDetails />} />
          <Route path="/admin/clientMedicalReport" element={<DetailedReport />} />
          <Route path="/admin/receipt" element={<PaymentReceipt />} />
          <Route path="/admin/clientMedicalBills" element={<TreatmentBill />} />
          <Route path="/admin/login" element={<Login />} />
          <Route path="/admin/loginOfficer" element={<LoginOfficer />} />
          <Route path="/admin/focalPerson" element={<LoginFocalPerson />} />
          <Route path="/branchcreated" element={<BranchSuccessfullyCreated />} />
          <Route path="/deptcreated" element={<DeptmentSuccessfullyCreated />} />
          <Route path="/positioncreated" element={<PositionSuccessfullyCreated />} />
          <Route path="/employeeRecruited" element={<EmployeeSuccessfullyRecruited />} />
          <Route path="/clientRegistered" element={<ClientSuccessfullyRegistered />} />
          <Route path="/admin/hospital" element={<HospitalDashboard />} />
          <Route path="/admin/addHospital" element={<HospitalForm />} />
          <Route path="/focalpersonDashboard" element={<FocalPersonDashboard />} />
          <Route path="/feildOfficer" element={<FieldOfficerDashboard />} />
          <Route path="/focalperson" element={<FieldOfficerDashboard />} />
        </Routes>
      </Router>
    </div>
  );
}
