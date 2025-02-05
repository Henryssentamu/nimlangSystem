import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { NavForOtherAdminPages } from "../componets/headers/otherAdminPages";

export function ClientProfilOnAdmin() {
  const styling = {
    marginTop: "70px",
  };
  const sidebar = {
    position: "fixed",
    left: "0px",
    top: "70px",
  };

  const ClientImage = {
    width: "30",
    borderRadius: "15px",
    border: "solid 2px green",
  };
  const cardStyles = {
    border: "none",
    // width: "50px",
    padding: "30px",
  };
  return (
    <div>
      <NavForOtherAdminPages />
      <div className="container-fluid " style={styling}>
        <div className="row">
          {/* Sidebar */}
          <nav className="col-md-3 col-lg-2 d-md-block bg-dark text-white sidebar vh-100 p-3" style={sidebar}>
            {/* <h4 className="text-center">Dashboard</h4> */}
            <ul className="nav flex-column">
              <li className="nav-item">
                <a href="/admin/clientpaymentdetails" className=" text-white btn btn-outline-success mb-3">
                  Payment Details
                </a>
              </li>
              <li className="nav-item">
                <a href="/admin/clientMedicalBills" className=" text-white btn btn-outline-success">
                  Medical Bills
                </a>
              </li>
            </ul>
          </nav>

          {/* Main Content */}
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div className="row mt-4 mb-4">
              <div className="col">
                <div className="card shadow-sm" style={cardStyles}>
                  Notification
                </div>
              </div>
              <div className="col">
                <div className="card shadow-sm" style={cardStyles}>
                  <div className="row">
                    <div className="col">Muwonge Peter</div>
                    <div className="col">
                      <img src="/vite.svg" alt="client image" style={ClientImage} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-4">
              {/* Cards */}
              <div className="col-md-4">
                <div className="card text-center shadow-sm">
                  <div className="card-header bg-primary text-white">Amount on Client Health Account</div>
                  <div className="card-body">
                    <h3 className="card-title">$1,200</h3>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card text-center shadow-sm">
                  <div className="card-header bg-danger text-white">Amount Due on Client Health Card</div>
                  <div className="card-body">
                    <h3 className="card-title">$350</h3>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card text-center shadow-sm">
                  <div className="card-header bg-success text-white">Number of Times Received Health Services</div>
                  <div className="card-body">
                    <h3 className="card-title">8</h3>
                  </div>
                </div>
              </div>
            </div>

            {/* Table */}
            <div className="row mt-4">
              <div className="col-12">
                <div className="card shadow-sm">
                  <div className="card-header bg-secondary text-white">Medical Reports</div>
                  <div className="card-body">
                    <table className="table table-striped">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Report Name</th>
                          <th>Date</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>Blood Test Report</td>
                          <td>2024-01-15</td>
                          <td>
                            <a href="/admin/clientMedicalReport" className="btn btn-primary btn-sm">
                              View Report
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>X-Ray Report</td>
                          <td>2024-02-01</td>
                          <td>
                            <a href="/admin/clientMedicalReport" className="btn btn-primary btn-sm">
                              View Report
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>General Checkup</td>
                          <td>2024-03-10</td>
                          <td>
                            <a href="/admin/clientMedicalReport" className="btn btn-primary btn-sm">
                              View Report
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
