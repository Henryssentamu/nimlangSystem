import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { NonAdminHeader } from "./headers/nonAdminHeader";

// Sample data for clients who made daily healthy savings
const initialSavingsData = [
  { clientId: "NIM12345", name: "John Doe", location: "New York", amount: 50 },
  { clientId: "NIM67890", name: "Jane Smith", location: "Los Angeles", amount: 75 },
  { clientId: "NIM11223", name: "Bill Gates", location: "Seattle", amount: 100 },
  // Add more savings data as needed
];

export function FieldOfficerDashboard() {
  const [search, setSearch] = useState("");
  const [savingsSearch, setSavingsSearch] = useState("");
  const [clients] = useState([
    { name: "John Doe", accountNumber: "NIM12345", location: "New York", contact: "123-456-7890", status: "Active" },
    { name: "Jane Smith", accountNumber: "NIM67890", location: "Los Angeles", contact: "987-654-3210", status: "Inactive" },
    { name: "Bill Gates", accountNumber: "NIM11223", location: "Seattle", contact: "555-1234-5678", status: "Active" },
  ]);

  // Savings Data Filtering Logic
  const filteredSavingsData = initialSavingsData.filter(
    (client) =>
      client.clientId.toLowerCase().includes(savingsSearch.toLowerCase()) ||
      client.name.toLowerCase().includes(savingsSearch.toLowerCase()) ||
      client.amount.toString().includes(savingsSearch)
  );

  // Clients Data Filtering Logic
  const filteredClients = clients.filter(
    (client) =>
      client.accountNumber.toLowerCase().includes(search.toLowerCase()) || client.name.toLowerCase().includes(search.toLowerCase())
  );

  // Client Stats
  const totalClients = clients.length;
  const activeClients = clients.filter((client) => client.status === "Active").length;
  const inactiveClients = clients.filter((client) => client.status === "Inactive").length;

  return (
    <div>
      {/* nivagation */}
      <NonAdminHeader />
      <div className="container " style={{ marginTop: "89px" }}>
        <div className="row">
          {/* Stat Card Section */}
          <div className="col-md-4 mb-4">
            <div className="card shadow-lg">
              <div className="card-body">
                <h5 className="card-title">Client Statistics</h5>
                <p>Total Clients: {totalClients}</p>
                <p>Active Clients (Last 3 Months): {activeClients}</p>
                <p>Inactive Clients (Last 3 Months): {inactiveClients}</p>
              </div>
            </div>
          </div>
        </div>
        {/* Client Table Section */}
        <div className="col-md-8">
          <div className="card shadow-lg">
            <div className="card-body">
              <h5 className="card-title">Client Details</h5>

              {/* Search Filter for Clients Table */}
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Filter by Account Or Name"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />

              {/* Scrollable Client Table */}
              <div style={{ maxHeight: "400px", overflowY: "scroll" }}>
                <table className="table table-bordered table-striped">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Account Number</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredClients.map((client, index) => (
                      <tr key={index}>
                        <td>{client.name}</td>
                        <td>{client.accountNumber}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* Daily Healthy Savings Table Section */}
        <div className="row mt-4">
          <div className="col-md-12">
            <div className="card shadow-lg">
              <div className="card-body">
                <h5 className="card-title">Clients Daily Healthy Savings</h5>

                {/* Search Filter for Savings Table */}
                <input
                  type="text"
                  className="form-control mb-3"
                  placeholder="Filter by Client ID, Name, or Amount"
                  value={savingsSearch}
                  onChange={(e) => setSavingsSearch(e.target.value)}
                />

                {/* Scrollable Savings Table */}
                <div style={{ maxHeight: "400px", overflowY: "scroll" }}>
                  <table className="table table-bordered table-striped">
                    <thead>
                      <tr>
                        <th>Client ID</th>
                        <th>Name</th>
                        <th>Amount Saved</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredSavingsData.map((savings, index) => (
                        <tr key={index}>
                          <td>{savings.clientId}</td>
                          <td>{savings.name}</td>
                          <td>{savings.amount}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Register Client Link */}
        <div className="mt-4">
          <a href="/clientRegistered" className="btn btn-primary">
            Register New Client
          </a>
        </div>
      </div>
    </div>
  );
}

// import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min";

// // Sample data for clients
// const initialSavingsData = [
//   { clientId: "NIM12345", name: "John Doe", location: "New York", amount: 50 },
//   { clientId: "NIM67890", name: "Jane Smith", location: "Los Angeles", amount: 75 },
//   { clientId: "NIM11223", name: "Bill Gates", location: "Seattle", amount: 100 },
// ];

// export function FieldOfficerDashboard() {
//   const [search, setSearch] = useState("");
//   const [savingsSearch, setSavingsSearch] = useState("");
//   const [clients] = useState([
//     { name: "John Doe", accountNumber: "NIM12345", location: "New York", contact: "123-456-7890", status: "Active" },
//     { name: "Jane Smith", accountNumber: "NIM67890", location: "Los Angeles", contact: "987-654-3210", status: "Inactive" },
//     { name: "Bill Gates", accountNumber: "NIM11223", location: "Seattle", contact: "555-1234-5678", status: "Active" },
//   ]);

//   // Modal state
//   const [showRegisterModal, setShowRegisterModal] = useState(false);
//   const [showSettingsModal, setShowSettingsModal] = useState(false);

//   // Navbar toggler
//   const [isNavCollapsed, setIsNavCollapsed] = useState(true);

//   // Client Statistics
//   const totalClients = clients.length;
//   const activeClients = clients.filter((client) => client.status === "Active").length;
//   const inactiveClients = totalClients - activeClients;

//   return (
//     <div>
//       {/* Navbar */}
//       <nav className="navbar navbar-expand-lg bg-success fixed-top">
//         <div className="container-fluid">
//           <div className="navbar-brand text-white">Nimlang</div>

//           {/* Navbar Toggle */}
//           <button className="navbar-toggler" type="button" onClick={() => setIsNavCollapsed(!isNavCollapsed)}>
//             <span className="navbar-toggler-icon"></span>
//           </button>

//           {/* Navbar Collapse */}
//           <div className={`collapse navbar-collapse ${isNavCollapsed ? "" : "show"}`}>
//             <ul className="navbar-nav ms-auto">
//               <li className="nav-item">
//                 <button className="nav-link text-white" onClick={() => setShowRegisterModal(true)}>
//                   Register
//                 </button>
//               </li>
//               <li className="nav-item">
//                 <button className="nav-link text-white" onClick={() => setShowSettingsModal(true)}>
//                   Settings
//                 </button>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>

//       {/* Register Modal */}
//       {showRegisterModal && (
//         <div className="modal show d-block" tabIndex="-1">
//           <div className="modal-dialog">
//             <div className="modal-content">
//               <div className="modal-header">
//                 <h5 className="modal-title">Register</h5>
//                 <button className="btn-close" onClick={() => setShowRegisterModal(false)}></button>
//               </div>
//               <div className="modal-body text-center">
//                 <a href="admin/clientRegistering" className="btn btn-success">
//                   Register Client
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Settings Modal */}
//       {showSettingsModal && (
//         <div className="modal show d-block" tabIndex="-1">
//           <div className="modal-dialog">
//             <div className="modal-content">
//               <div className="modal-header">
//                 <h5 className="modal-title">Settings</h5>
//                 <button className="btn-close" onClick={() => setShowSettingsModal(false)}></button>
//               </div>
//               <div className="modal-body text-center">
//                 <a href="/" className="btn btn-danger w-100" onClick={() => setShowSettingsModal(false)}>
//                   Logout
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Main Content */}
//       <div className="container" style={{ marginTop: "90px" }}>
//         <div className="row">
//           {/* Client Statistics */}
//           <div className="col-md-4 mb-4">
//             <div className="card shadow-lg">
//               <div className="card-body">
//                 <h5 className="card-title">Client Statistics</h5>
//                 <p>Total Clients: {totalClients}</p>
//                 <p>Active Clients: {activeClients}</p>
//                 <p>Inactive Clients: {inactiveClients}</p>
//               </div>
//             </div>
//           </div>

//           {/* Client Details */}
//           <div className="col-md-8">
//             <div className="card shadow-lg">
//               <div className="card-body">
//                 <h5 className="card-title">Client Details</h5>
//                 <input
//                   type="text"
//                   className="form-control mb-3"
//                   placeholder="Filter by Account or Name"
//                   value={search}
//                   onChange={(e) => setSearch(e.target.value)}
//                 />
//                 <div style={{ maxHeight: "400px", overflowY: "scroll" }}>
//                   <table className="table table-bordered table-striped">
//                     <thead>
//                       <tr>
//                         <th>Name</th>
//                         <th>Account Number</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {clients
//                         .filter(
//                           (client) =>
//                             client.accountNumber.toLowerCase().includes(search.toLowerCase()) ||
//                             client.name.toLowerCase().includes(search.toLowerCase())
//                         )
//                         .map((client, index) => (
//                           <tr key={index}>
//                             <td>{client.name}</td>
//                             <td>{client.accountNumber}</td>
//                           </tr>
//                         ))}
//                     </tbody>
//                   </table>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Daily Healthy Savings */}
//         <div className="row mt-4">
//           <div className="col-md-12">
//             <div className="card shadow-lg">
//               <div className="card-body">
//                 <h5 className="card-title">Clients Daily Healthy Savings</h5>
//                 <input
//                   type="text"
//                   className="form-control mb-3"
//                   placeholder="Filter by Client ID, Name, or Amount"
//                   value={savingsSearch}
//                   onChange={(e) => setSavingsSearch(e.target.value)}
//                 />
//                 <div style={{ maxHeight: "400px", overflowY: "scroll" }}>
//                   <table className="table table-bordered table-striped">
//                     <thead>
//                       <tr>
//                         <th>Client ID</th>
//                         <th>Name</th>
//                         <th>Amount Saved</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {initialSavingsData
//                         .filter(
//                           (client) =>
//                             client.clientId.toLowerCase().includes(savingsSearch.toLowerCase()) ||
//                             client.name.toLowerCase().includes(savingsSearch.toLowerCase()) ||
//                             client.amount.toString().includes(savingsSearch)
//                         )
//                         .map((savings, index) => (
//                           <tr key={index}>
//                             <td>{savings.clientId}</td>
//                             <td>{savings.name}</td>
//                             <td>${savings.amount}</td>
//                           </tr>
//                         ))}
//                     </tbody>
//                   </table>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
