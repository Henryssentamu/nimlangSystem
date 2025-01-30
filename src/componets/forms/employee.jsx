import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { NavForOtherAdminPages } from "../headers/otherAdminPages";

export function EmployeeRecruitmentForm() {
  const [depts, setDepts] = React.useState([
    { deptId: "122", Deptname: "Medical" },
    { deptId: "123", Deptname: "Finance" },
    { deptId: "122", Deptname: "Sales" },
    { deptId: "124", Deptname: "R&D" },
  ]);
  const [branches, setbranches] = React.useState([
    { branchId: "112", branchname: "Main" },
    { branchId: "113", branchname: "Masaka-Impigi" },
  ]);
  const [positions, setpositions] = React.useState([
    { PositionId: "311", Positionname: "manager" },
    { PositionId: "312", Positionname: "Accountant" },
    { PositionId: "313", Positionname: "medical doctor" },
  ]);
  const [typeOfEmployment, settypeOfEmployment] = React.useState([
    { employmentId: "433", emplomentname: "Full Time" },
    { employmentId: "431", emplomentname: "Part Time" },
    { employmentId: "434", emplomentname: "Contract" },
  ]);

  function getinputDetails(event) {
    // this function get all input values and send
    // Return: array of  objects
    event.preventDefault();
    const formdata = new FormData(event.target);
    const data = Object.fromEntries(formdata);
    console.log(data);
    alert(data);

    window.location.reload();
  }
  function GenenrateDepts() {
    return depts.map((obj) => {
      return (
        <option data-dept-id={obj.deptId} value={obj.Deptname}>
          {obj.Deptname}
        </option>
      );
    });
  }

  function GenenrateBranches() {
    return branches.map((obj) => {
      return (
        <option data-branch-id={obj.branchId} value={obj.branchname}>
          {obj.branchname}
        </option>
      );
    });
  }

  function GenenratePositions() {
    return positions.map((obj) => {
      return (
        <option data-position-id={obj.PositionId} value={obj.Positionname}>
          {obj.Positionname}
        </option>
      );
    });
  }

  function GenenrateEmploymentType() {
    return typeOfEmployment.map((obj) => {
      return (
        <option data-typeofemployment-id={obj.employmentId} value={obj.emplomentname}>
          {obj.emplomentname}
        </option>
      );
    });
  }

  return (
    <div>
      {<NavForOtherAdminPages />}

      <div className="container mt-5">
        <h2 className="text-center mb-4">Employee Details Form</h2>
        <form onSubmit={getinputDetails}>
          {/* <!-- Personal Details Section --> */}
          <div className="card mb-4">
            <div className="card-header bg-success text-white">Personal Details</div>
            <div className="card-body">
              <div className="row mb-3">
                <div className="col-md-6">
                  <label className="form-label">
                    First Name
                    <input name="FirstName" type="text" className="form-control" placeholder="E.g IVAN" required />
                  </label>
                </div>
                <div className="col-md-6">
                  <label className="form-label">
                    Last Name
                    <input name="Lastname" type="text" className="form-control" placeholder="E.g Kasule" required />
                  </label>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col md-6">
                  <label className="form-label">
                    Religion
                    <input name="Religion" type="text" className="form-control" placeholder="E.g Musilm" required />
                  </label>
                </div>
                <div className="col md-6">
                  <label className="form-label">
                    Age
                    <input name="Age" type="number" className="form-control" placeholder="E.g 59" required />
                  </label>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-md-6">
                  <label className="form-label">
                    Residence
                    <input name="Residence" type="text" className="form-control" placeholder="E.g Kyebando" required />
                  </label>
                </div>
                <div className="col-md-6">
                  <label className="form-label">
                    Contact
                    <input name="Contact" type="text" className="form-control" id="contact" placeholder="E.g 0755126655" required />
                  </label>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-md-6">
                  <label className="form-label">
                    Nationality
                    <input name="Nationality" type="text" className="form-control" placeholder="E.g Ugandan" required />
                  </label>
                </div>

                <div className="col-md-6">
                  <label className="form-label">
                    Email
                    <input name="Email" type="email" className="form-control" placeholder="E.g kasuleivan@gmail.com" required />
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Next of Kin Section --> */}
          <div className="card mb-4">
            <div className="card-header bg-info text-white">Next of Kin</div>
            <div className="card-body">
              <div className="row mb-3">
                <div className="col-md-6">
                  <label className="form-label">
                    Full Name
                    <input type="text" className="form-control" name="kinName" placeholder="E.g kasule Ivan" required />
                  </label>
                </div>

                <div className="col-md-6">
                  <label className="form-label">
                    Contact
                    <input type="text" className="form-control" name="kinContact" placeholder="E.g 0755126655" required />
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Position and Department Section --> */}
          <div className="card mb-4">
            <div className="card-header bg-success text-white">Position & Department</div>
            <div className="card-body">
              <div className="row mb-3">
                <div className="col-md-3">
                  <label className="form-label">Position</label>
                  <select className="form-select" name="position" required>
                    <option value="" selected disabled>
                      Select position
                    </option>
                    <GenenratePositions />
                  </select>
                </div>
                <div className="col-md-3">
                  <label className="form-label">Department</label>
                  <select className="form-select" name="department" required>
                    <option value="" selected disabled>
                      Select position
                    </option>
                    <GenenrateDepts />
                  </select>
                </div>
                <div className="col-md-3">
                  <label className="form-label">Type of Employment</label>
                  <select className="form-select" name="employmentType" required>
                    <option value="" selected disabled>
                      Select employment type
                    </option>
                    <GenenrateEmploymentType />
                  </select>
                </div>
                <div className="col-md-3">
                  <label className="form-label">Branch</label>
                  <select name="branch" className="form-select">
                    <option value="" selected disabled>
                      select Branch
                    </option>
                    <GenenrateBranches />
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Bank Details Section --> */}
          <div className="card mb-4">
            <div className="card-header bg-info text-white">Bank Details</div>
            <div className="card-body">
              <div className="row mb-3">
                <div className="col-md-6">
                  <label className="form-label">
                    Bank Name
                    <input type="text" className="form-control" name="bankName" placeholder="E.g Equity " required />
                  </label>
                </div>

                <div className="col-md-6">
                  <label className="form-label">
                    Account Number
                    <input type="text" className="form-control" name="accountNumber" placeholder="1033103367353" required />
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Education Details Section --> */}
          <div className="card mb-4">
            <div className="card-header bg-success text-white">Education Details</div>
            <div className="card-body">
              <div className="mb-3">
                <label className="form-label">
                  Upload Accademic scanned documents(PDF)
                  <input type="file" className="form-control" name="accademic" accept=".pdf" />
                </label>
              </div>
            </div>
          </div>

          {/* <!-- Photo Upload Section --> */}
          <div className="card mb-4">
            <div className="card-header bg-info text-white">Employee profile Photo</div>
            <div className="card-body">
              <label className="form-label">
                Upload Photo
                <input type="file" className="form-control" name="photoUpload" accept="image/*"></input>
              </label>
            </div>
          </div>

          {/* <!-- Submit Button --> */}
          <div className="text-center">
            <button type="submit" p-5 className="btn btn-success">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
