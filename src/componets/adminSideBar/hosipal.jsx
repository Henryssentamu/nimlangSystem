import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { HospitalForm } from "../forms/hispital";
import { NavForOtherAdminPages } from "../headers/otherAdminPages";

export function HospitalDashboard() {
  const [search, setSearch] = useState("");
  const [hospitals, setHospitals] = useState([
    { name: "City Hospital", location: "New York", email: "cityhospital@gmail.com", contact: "123-456-7890", focalPerson: "Dr. Smith" },
    {
      name: "Green Valley Medical",
      location: "Los Angeles",
      email: "gvmedical@gmail.com",
      contact: "987-654-3210",
      focalPerson: "Dr. Johnson",
    },
    { name: "Sunrise Clinic", location: "Chicago", email: "sunriseclinic@gmail.com", contact: "555-666-7777", focalPerson: "Dr. Williams" },
  ]);

  const filteredHospitals = hospitals.filter((hospital) => hospital.name.toLowerCase().includes(search.toLowerCase()));

  const handleAddHospital = (newHospital) => {
    setHospitals([...hospitals, newHospital]);
  };

  return (
    <div>
      {/* navigation  */}
      <NavForOtherAdminPages />
      <div className="container " style={{ marginTop: "89px" }}>
        <div className="row d-flex justify-content-between align-items-center mb-4">
          <div className="col-md-6">
            <div className="card shadow p-3 bg-white rounded text-center " style={{ border: "none" }}>
              <h5 className="card-title">Total Hospitals</h5>
              <h2 className="text-primary">{hospitals.length}</h2>
            </div>
          </div>
          <div className="col-md-6 text-end">
            <a href="/admin/addHospital" className="btn btn-info">
              Add Hospital
            </a>
          </div>
        </div>
        {/* Search Filter */}
        <input
          type="text"
          className="form-control mb-3"
          placeholder="Search hospital by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* /* Hospital Table with Scrollable Feature */}
        <div className="table-responsive" style={{ maxHeight: "400px", overflowY: "auto" }}>
          <table className="table table-bordered table-hover">
            <thead className="table-primary">
              <tr>
                <th>Name</th>
                <th>Location</th>
                <th>Email</th>
                <th>Contact</th>
                <th>Focal Person</th>
              </tr>
            </thead>
            <tbody>
              {filteredHospitals.slice(0, 10).map((hospital, index) => (
                <tr key={index}>
                  <td>{hospital.name}</td>
                  <td>{hospital.location}</td>
                  <td>{hospital.email}</td>
                  <td>{hospital.contact}</td>
                  <td>{hospital.focalPerson}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
