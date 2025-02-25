import React, { useState } from "react";

export function NonAdminHeader() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [showSettingsModal, setShowSettingsModal] = useState(false);
  //   const [search, setSearch] = useState("");

  // Handle Logout
  const handleLogout = () => {
    // Add your logout logic here, such as clearing session storage, removing tokens, or redirecting
    console.log("Logged out");
    // Redirect to login page after logout
    window.location.href = "/"; // Adjust the URL to your login page
  };

  return (
    <header>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" onClick={() => setIsNavCollapsed(!isNavCollapsed)}>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${isNavCollapsed ? "" : "show"}`}>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <button className="nav-link text-white" onClick={() => setShowRegisterModal(true)}>
                  Register
                </button>
              </li>
              <li className="nav-item">
                <button className="nav-link text-white" onClick={() => setShowSettingsModal(true)}>
                  Settings
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Register Modal */}
      {showRegisterModal && (
        <div className="modal show d-block" tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Register</h5>
                <button className="btn-close" onClick={() => setShowRegisterModal(false)}></button>
              </div>
              <div className="modal-body text-center">
                <a href="admin/clientRegistering" className="btn btn-success">
                  Register Client
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Settings Modal with Logout */}
      {showSettingsModal && (
        <div className="modal show d-block" tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Settings</h5>
                <button className="btn-close" onClick={() => setShowSettingsModal(false)}></button>
              </div>
              <div className="modal-body">
                {/* Search Input (if needed in the future) */}
                {/* <input
                  type="text"
                  className="form-control mb-2"
                  placeholder="Search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                /> */}
                {/* Logout Button */}
                <button onClick={handleLogout} className="btn btn-danger w-100">
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
