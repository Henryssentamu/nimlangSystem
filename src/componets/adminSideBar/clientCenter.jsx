import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "chart.js/auto";
import { Line, Pie, Bar } from "react-chartjs-2";
import { NavForOtherAdminPages } from "../headers/otherAdminPages";

export function ClientRegistrationDashboard() {
  const headerStyling = {
    fontWeight: "bold",
    fontSize: "26",
    marginTop: "10px",
    fontFamily: "poppins",
  };

  const [branch, setBranch] = useState("");
  const [date, setDate] = useState("");
  const [officer, setOfficer] = useState("");
  const clients = [
    { name: "John Doe", location: "Kampala", contact: "123456789", branch: "A", gender: "Male", date: "2024-01-30", officer: "Officer A" },
    { name: "Joan", location: "Kampala", contact: "123456789", branch: "A", gender: "Female", date: "2024-01-30", officer: "Officer A" },
    {
      name: "Jane Smith",
      location: "Entebbe",
      contact: "987654321",
      branch: "B",
      gender: "Female",
      date: "2024-01-31",
      officer: "Officer B",
    },
  ];

  const filteredClients = clients.filter(
    (client) => (!branch || client.branch === branch) && (!date || client.date === date) && (!officer || client.officer === officer)
  );

  const genderData = {
    labels: ["Male", "Female"],
    datasets: [
      {
        data: [filteredClients.filter((c) => c.gender === "Male").length, filteredClients.filter((c) => c.gender === "Female").length],
        backgroundColor: ["#36A2EB", "#FF6384"],
      },
    ],
  };

  return (
    <div>
      {/* <NavForOtherAdminPages /> */}
      {/* filtering section */}
      <div className="row d-flex flex-column justify-content-center align-items-center text-center">
        <div style={headerStyling}>Filter Clients</div>
        <div className="row mb-4">
          <div className="col-md-4">
            <select name="branch" className="form-select" value={branch} onChange={(e) => setBranch(e.target.value)}>
              <option value="" disabled>
                Filter by Branch
              </option>
              <option value="A">A</option>
              <option value="B">B</option>
            </select>
          </div>
          <div className="col-md-4">
            <input
              type="date"
              className="form-control"
              value={date}
              onChange={(e) => {
                return setDate(e.target.value);
              }}
            />
          </div>
          <div className="col-md-4">
            <select name="officer" className="form-select" value={officer} onChange={(e) => setOfficer(e.target.value)}>
              <option value="" disabled>
                Filter By Officer
              </option>
              <option value="Officer A">Officer A</option>
              <option value="Officer B">Officer B</option>
            </select>
          </div>
        </div>
      </div>

      <div className="row m-5  p-2">
        <table className="table table-striped table-responsive">
          <thead>
            <tr>
              <th>Name</th>
              <th>Location</th>
              <th>Contact</th>
            </tr>
          </thead>
          <tbody>
            {filteredClients.map((client, index) => (
              <tr key={index}>
                <td>
                  <a href="/admin/clientprofile" className="table-link">
                    {client.name}
                  </a>
                </td>
                <td>{client.location}</td>
                <td>{client.contact}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="container mt-4">
        <h4>Statistics</h4>
        <div className="row">
          <div className="col-md-6">
            <h5>Gender Distribution</h5>
            <Pie data={genderData} />
          </div>
          <div className="col-md-6">
            <h5>Clients Registered per Branch</h5>
            <Bar
              data={{
                labels: ["A", "B"],
                datasets: [
                  {
                    label: "Clients per Branch",
                    data: [filteredClients.filter((c) => c.branch === "A").length, filteredClients.filter((c) => c.branch === "B").length],
                    backgroundColor: "#42A5F5",
                  },
                ],
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
