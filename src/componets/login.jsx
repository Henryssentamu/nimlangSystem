import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export function Login() {
  const [error, setError] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const formdata = new FormData(e.target);
    const logindetails = Object.fromEntries(formdata);
    if (!logindetails.EmployeeId || !logindetails.Password) {
      alert("please provide your Login credentials");
    } else {
      fetch("http://127.0.0.1:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ type: "admin", data: logindetails }),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("login error ");
          }
          return response.json();
        })
        .then((data) => {
          if (data.loginStatus === "ok") {
            window.location.href = "/admin";
          }
        })
        .catch((error) => {
          setError(error.message);
        });
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-success">
      <div className="card p-4 shadow-lg border-success" style={{ width: "400px", border: "none" }}>
        <h2 className="text-center mb-4">Welcome to NimLangLtd</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              EmployeeId
            </label>
            <input type="text" className="form-control" id="username" name="EmployeeId" placeholder="Enter your EmployeeId" />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input type="password" className="form-control" id="password" name="Password" placeholder="Enter your password" />
          </div>

          {error && <div className="alert alert-danger">{error}</div>}

          <button type="submit" className="btn btn-success w-100">
            Login
          </button>
        </form>

        <div className="mt-3 text-center">
          <p className="text-muted">
            Forgot your password? <a href="#">Reset it</a>
          </p>
        </div>
      </div>
    </div>
  );
}
