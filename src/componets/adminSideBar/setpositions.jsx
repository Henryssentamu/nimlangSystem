import React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavForOtherAdminPages } from "../headers/otherAdminPages";

export function CreatePositions() {
  const [Employees, setEmployees] = useState([
    { id: 1, name: "Peter james" },
    { id: 2, name: "Henry james" },
  ]);

  function GenerateEmployees() {
    return Employees.map((obj) => {
      return <option value={obj.id}>{obj.name}</option>;
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const formdata = new FormData(e.target);
    const data = Object.fromEntries(formdata);
    console.log(data);
    alert(data);
    window.location.reload();
  };

  return (
    <div>
      <NavForOtherAdminPages />
      <div className="container mt-4">
        {/* Header Section */}

        <div className="card p-4 mb-4">
          <h3>Create Positions</h3>
          <form onSubmit={handleSubmit} className="row g-3">
            <div className="col-md-4">
              <input type="text" className="form-control" placeholder="Position" name="position" required />
            </div>
            {/* <div className="col-md-4">
              <select name="Employee" className="form-select">
                <option value="" selected disabled>
                  Select Employee
                </option>
                {<GenerateEmployees />}
              </select>
              {/* <input type="text" className="form-control" placeholder="Branch Office Loaction" name="Location" /> *
            </div> */}
            <div className="col-4">
              <button type="submit" className="btn btn-primary">
                Add position
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
