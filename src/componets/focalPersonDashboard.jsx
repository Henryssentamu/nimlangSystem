import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { NonAdminHeader } from "./headers/nonAdminHeader";

export function FocalPersonDashboard() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [clients, setClients] = useState([
    { name: "John Doe", accountNumber: "NIM12345", location: "New York", contact: "123-456-7890", status: "Received Medical Service" },
    {
      name: "Jane Smith",
      accountNumber: "NIM67890",
      location: "Los Angeles",
      contact: "987-654-3210",
      status: "Didn’t Receive Medical Service",
    },
  ]);

  const filteredClients = clients.filter((client) => client.accountNumber.toLowerCase().includes(search.toLowerCase()));

  const filteredVisitClients = clients.filter((client) => (statusFilter ? client.status === statusFilter : true));

  // naviation header

  // Modal state
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [showSettingsModal, setShowSettingsModal] = useState(false);

  // Navbar toggler
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  return (
    <div>
      <NonAdminHeader />
      <div className="container mt-4">
        {/* Statistics Section */}
        <div className="row d-flex justify-content-between align-items-center mb-4">
          <div className="col-md-6">
            <div className="card shadow p-3 bg-white rounded text-center">
              <h5 className="card-title">Total Clients Worked On</h5>
              <h2 className="text-primary">{clients.length}</h2>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card shadow p-3 bg-white rounded text-center">
              <h5 className="card-title">Clients Without Medical Service</h5>
              <h2 className="text-danger">{clients.filter((client) => client.status === "Didn’t Receive Medical Service").length}</h2>
            </div>
          </div>
        </div>

        {/* Search Filter */}
        <input
          type="text"
          className="form-control mb-3"
          placeholder="Search client by account number..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Client Table */}
        <div className="table-responsive" style={{ maxHeight: "400px", overflowY: "auto" }}>
          <table className="table table-bordered table-hover">
            <thead className="table-primary">
              <tr>
                <th>Name</th>
                <th>Account Number</th>
                <th>Location</th>
              </tr>
            </thead>
            <tbody>
              {filteredClients.map((client, index) => (
                <tr key={index}>
                  <td>{client.name}</td>
                  <td>{client.accountNumber}</td>
                  <td>{client.location}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Status Filter */}
        <select className="form-control mb-3" value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
          <option value="">Filter by Status</option>
          <option value="Received Medical Service">Received Medical Service</option>
          <option value="Didn’t Receive Medical Service">Didn’t Receive Medical Service</option>
        </select>

        {/* Hospital Visit Table */}
        <div className="table-responsive" style={{ maxHeight: "400px", overflowY: "auto" }}>
          <table className="table table-bordered table-hover">
            <thead className="table-primary">
              <tr>
                <th>Name</th>
                <th>Contact</th>
                <th>Location</th>
                <th>Account Number</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredVisitClients.map((client, index) => (
                <tr key={index}>
                  <td>{client.name}</td>
                  <td>{client.contact}</td>
                  <td>{client.location}</td>
                  <td>{client.accountNumber}</td>
                  <td>{client.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
