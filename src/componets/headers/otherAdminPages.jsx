import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export function NavForOtherAdminPages() {
  const positioning = {
    position: "fixed",
    top: "0px",
    left: "0px",
    right: "0px",
    height: "70px",
    zIndex: "5",
  };
  return (
    <nav className="navbar navbar-expand-lg bg-success" style={positioning}>
      <div className="container-fluid">
        <div className="navbar-brand text-white">Nimlang</div>
        <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#back">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-collapse collapse" id="back">
          <ul className="navbar-nav ms-lg-auto">
            <li className="nav-item">
              <a href="/admin" className="nav-link text-white">
                Back
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
