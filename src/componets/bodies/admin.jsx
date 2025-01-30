import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function Sidebar() {
  const links = {
    textDecoration: "none",
    color: "white",
    padding: "10px 0",
    display: "block",
    textAlign: "center",
    width: "100%",
    transition: "0.3s",
  };
  const sidebarGeneralCss = {
    width: "200px",
    position: "fixed",
    left: "0px",
    top: "70px",
    bottom: "0px",
    margin: "0px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "20px",
    gap: "10px",
  };
  return (
    <div className="container bg-success roboto-bold" style={sidebarGeneralCss}>
      <a href="/admin/deptments" className="link" style={links}>
        Deptments
      </a>
      <a href="/admin/branches" className="link" style={links}>
        Branches
      </a>
      <a href="/admin/positions" className="link" style={links}>
        Positions
      </a>
    </div>
  );
}

export function Body() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-1">
          {/* side bar */}
          <Sidebar />
        </div>
        <div className="col">{/* other part of the body */}</div>
      </div>
    </div>
  );
}
