import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { NavBackToHospitalList } from "../headers/backToHospital";

export function HospitalForm() {
  const [newHospital, setNewHospital] = useState({ name: "", location: "", email: "", contact: "", focalPerson: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddHospital(newHospital);
    setNewHospital({ name: "", location: "", email: "", contact: "", focalPerson: "" });
  };

  return (
    <div>
      {/* navigation component */}
      <NavBackToHospitalList />
      {/* the body */}
      <form className="" onSubmit={handleSubmit} style={{ margin: "89px 20px" }}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Hospital Name"
            value={newHospital.name}
            onChange={(e) => setNewHospital({ ...newHospital, name: e.target.value })}
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Location"
            value={newHospital.location}
            onChange={(e) => setNewHospital({ ...newHospital, location: e.target.value })}
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            value={newHospital.email}
            onChange={(e) => setNewHospital({ ...newHospital, email: e.target.value })}
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Contact Number"
            value={newHospital.contact}
            onChange={(e) => setNewHospital({ ...newHospital, contact: e.target.value })}
            required
          />
        </div>
        <div className="mb-3">
          <select
            className="form-control"
            value={newHospital.focalPerson}
            onChange={(e) => setNewHospital({ ...newHospital, focalPerson: e.target.value })}
            required
          >
            <option value="">Select Focal Person</option>
            <option value="Dr. Smith">Dr. Smith</option>
            <option value="Dr. Johnson">Dr. Johnson</option>
            <option value="Dr. Williams">Dr. Williams</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Add Hospital
        </button>
      </form>
    </div>
  );
}
