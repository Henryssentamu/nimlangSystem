import React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavForOtherAdminPages } from "../headers/otherAdminPages";

export function Department() {
  const [departments, setDepartments] = useState([
    { id: 1, name: "Finance", employees: 25, budget: 50000 },
    { id: 2, name: "HR", employees: 15, budget: 30000 },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const DeptDiscription = document.getElementById("DeptDiscription").value;
    const Deptname = document.getElementById("Deptname").value;
    const data = { Deptname: Deptname, DeptDiscription: DeptDiscription };

    console.log(data);
    alert(data);
    fetch("http://127.0.0.1:5000/admin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type: "dept", data: data }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("server error while sending create position data");
        }
        return response.json();
      })
      .then((data) => {
        if (data) {
          window.location.reload();
        }
      })
      .catch((error) => {
        alert(error);
      });
  };

  const styling = {
    marginTop: "85px",
  };

  return (
    <div>
      <NavForOtherAdminPages />
      <div className="container" style={styling}>
        {/* Header Section */}

        <div className="card p-4 mb-4">
          <h3>Create Department</h3>
          <form onSubmit={handleSubmit} className="row g-3">
            <div className="col-md-4">
              <input type="text" id="Deptname" className="form-control" placeholder="Department Name" name="DeptName" required />
            </div>
            <div className="col-md-4">
              <input type="text" id="DeptDiscription" className="form-control" placeholder="Dept Responsbilites" name="DeptDiscription" />
            </div>
            <div className="col-4">
              <button type="submit" className="btn btn-primary">
                Add Department
              </button>
            </div>
          </form>
        </div>

        {/* Body Section - Department Details */}
        <div className="card p-4">
          <h3>Department Details</h3>
          <table className="table table-bordered table-striped mt-3">
            <thead className="table-dark">
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>No. of Employees</th>
                <th>Budget ($)</th>
              </tr>
            </thead>
            <tbody>
              {departments.map((dept, index) => (
                <tr key={dept.id}>
                  <td>{index + 1}</td>
                  <td>{dept.name}</td>
                  <td>{dept.employees}</td>
                  <td>{dept.budget.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
