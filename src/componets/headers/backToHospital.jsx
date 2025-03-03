import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export function NavBackToHospitalList() {
  const positioning = {
    position: "fixed",
    top: "0px",
    left: "0px",
    right: "0px",
    height: "70px",
    zIndex: 5, // Corrected from "5px" to a number
  };

  return (
    <nav className="navbar navbar-expand-lg bg-success" style={positioning}>
      <div className="container-fluid">
        {/* Navbar Brand */}
        <span className="navbar-brand text-white fw-bold">Nimlang</span>

        {/* Navbar Toggler */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#back">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible Links */}
        <div className="collapse navbar-collapse" id="back">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a href="/admin/hospital" className="nav-link text-white fw-semibold">
                Back
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
