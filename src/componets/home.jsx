import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export function Home() {
  function Homemenu() {
    return (
      <nav className="navbar navbar-expand-lg bg-success">
        <div className="container-fluid">
          <div className="navbar-brand">Nimlang</div>
          <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#barmenu">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="barmenu">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <button className="btn btn-outline-info" data-bs-toggle="modal" data-bs-target="#loginOption">
                  Login
                </button>
                <div className="modal fade" id="loginOption">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <div className="modal-title">choose Your Propriate Login Category</div>
                        <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                      </div>
                      <div className="modal-body d-flex flex-row align-item-center justify-content-center">
                        <a href="/admin/login" className="btn btn-secondary m-1">
                          Admin
                        </a>
                        <a href="/admin/loginOfficer" className="btn btn-secondary m-1">
                          Officer
                        </a>
                        <a href="/admin/focalPerson" className="btn btn-secondary m-1">
                          focalPerson
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
  return (
    <div>
      <Homemenu />
      <div className="container">
        <h1>Home Page</h1>
        <p>Welcome to Nimlang Ltd!</p>
      </div>
    </div>
  );
}
