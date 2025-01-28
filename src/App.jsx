import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Home} from "./componets/home";
import { AdminDashboard } from "./pages/admin";
import {EmployeeRecruitmentForm} from "./componets/forms/employee"


export default function App(){
	return(
		<div>
			<Router>
				<Routes>
					<Route  path="/" element={ < Home />}/>
					<Route path="/admin" element={< AdminDashboard />} />
					<Route path="/admin/employeeRecruitment" element={ < EmployeeRecruitmentForm />} />
				</Routes>
			</Router>
		</div>
	)
}
