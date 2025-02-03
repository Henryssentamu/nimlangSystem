import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { NavBackToClientProfile } from "../componets/headers/backToClientprofile";
// import { NavForOtherAdminPages } from "../componets/headers/otherAdminPages";

export function DetailedReport() {
  // Sample report data
  const reportData = {
    id: 1,
    patientName: "John Doe",
    age: 35,
    reportType: "Blood Test",
    testDate: "2024-01-15",
    doctor: "Dr. Emily Carter",
    hospital: "City Health Clinic",
    findings: [
      { test: "Hemoglobin", result: "14.5 g/dL", normalRange: "13.5 - 17.5 g/dL" },
      { test: "White Blood Cells", result: "6,800 cells/uL", normalRange: "4,000 - 11,000 cells/uL" },
      { test: "Platelets", result: "220,000 cells/uL", normalRange: "150,000 - 450,000 cells/uL" },
      { test: "Blood Sugar", result: "90 mg/dL", normalRange: "70 - 100 mg/dL" },
    ],
    doctorComments:
      "The patient's blood test results are within normal ranges. No signs of infection or abnormalities detected. Maintain a balanced diet and regular checkups.",
  };

  return (
    <div>
      <NavBackToClientProfile />
      <div className="container mt-4">
        <h3 className="mb-3">Detailed Medical Report</h3>

        {/* Patient & Report Information */}
        <div className="row">
          <div className="col-md-6">
            <div className="card shadow-sm">
              <div className="card-header bg-primary text-white">Patient Details</div>
              <div className="card-body">
                <p>
                  <strong>Name:</strong> {reportData.patientName}
                </p>
                <p>
                  <strong>Age:</strong> {reportData.age}
                </p>
                <p>
                  <strong>Hospital:</strong> {reportData.hospital}
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card shadow-sm">
              <div className="card-header bg-info text-white">Report Information</div>
              <div className="card-body">
                <p>
                  <strong>Report Type:</strong> {reportData.reportType}
                </p>
                <p>
                  <strong>Test Date:</strong> {reportData.testDate}
                </p>
                <p>
                  <strong>Doctor:</strong> {reportData.doctor}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Test Results Table */}
        <div className="row mt-4">
          <div className="col-12">
            <div className="card shadow-sm">
              <div className="card-header bg-secondary text-white">Test Results</div>
              <div className="card-body">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>Test</th>
                      <th>Result</th>
                      <th>Normal Range</th>
                    </tr>
                  </thead>
                  <tbody>
                    {reportData.findings.map((test, index) => (
                      <tr key={index}>
                        <td>{test.test}</td>
                        <td>{test.result}</td>
                        <td>{test.normalRange}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* Doctor's Comments */}
        <div className="row mt-4">
          <div className="col-12">
            <div className="card shadow-sm">
              <div className="card-header bg-warning text-dark">Doctor's Comments</div>
              <div className="card-body">
                <p>{reportData.doctorComments}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Download Report Button */}
        <div className="text-center mt-4">
          <button className="btn btn-success">
            Download Report <i className="bi bi-file-earmark-arrow-down"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
