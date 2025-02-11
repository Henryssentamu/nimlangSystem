import React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { NavForOtherAdminPages } from "../headers/otherAdminPages";

export function Branches() {
  const [branches, setbranches] = useState([
    { id: 1, name: "Finance", employees: 25, budget: 50000 },
    { id: 2, name: "HR", employees: 15, budget: 30000 },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const branchName = document.getElementById("branchName").value;
    const location = document.getElementById("location").value;
    const data = { branchName: branchName, location: location };

    fetch("http://127.0.0.1:5000/admin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ type: "branch", data: data }),
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
        } else {
          alert(data);
        }
      })
      .catch((error) => {
        alert(error);
      });
    window.location.reload();
  };
  const styling = {
    marginTop: "80px",
  };

  return (
    <div>
      <NavForOtherAdminPages />
      <div className="container" style={styling}>
        {/* Header Section */}

        <div className="card p-4 mb-4">
          <h3>Create Branch</h3>
          <form onSubmit={handleSubmit} className="row g-3">
            <div className="col-md-4">
              <input type="text" id="branchName" className="form-control" placeholder="Branch Name" name="BranchName" required />
            </div>
            <div className="col-md-4">
              <input type="text" id="location" className="form-control" placeholder="Branch Office Loaction" name="Location" />
            </div>
            <div className="col-4">
              <button type="submit" className="btn btn-primary">
                Add Branch
              </button>
            </div>
          </form>
        </div>

        {/* Body Section - Department Details */}
        {/* <div className="card p-4">
          <h3>Branch Details</h3>
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
              {branches.map((dept, index) => (
                <tr key={dept.id}>
                  <td>{index + 1}</td>
                  <td>{dept.name}</td>
                  <td>{dept.employees}</td>
                  <td>{dept.budget.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div> */}
      </div>
    </div>
  );
}
