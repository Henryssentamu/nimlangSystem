import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { NavBackToClientProfile } from "../componets/headers/backToClientprofile";

export function TreatmentBill() {
  const [billData, setbillData] = React.useState([
    {
      billNo: "NL-20240203-5678",
      date: "2024-12-23",
      clientName: "John Doe",
      clientID: "NL-1001",
      program: "Nimlang Ltd Community-Based Health Program",
      items: [
        { description: "Consultation Fee", cost: "Ugx 30000" },
        { description: "Lab Tests (Blood & Urine)", cost: "Ugx 10000" },
        { description: "Medication (Antibiotics & Painkillers)", cost: "ugx 40000" },
        { description: "X-Ray", cost: "Ugx 70000" },
      ],
      totalAmount: "Ugx 150000",
      officer: "Dr. Emily Carter",
    },
    {
      billNo: "NL-603454666-5678",
      date: "2024-02-03",
      clientName: "John Doe",
      clientID: "NL-1001",
      program: "Nimlang Ltd Community-Based Health Program",
      items: [
        { description: "Consultation Fee", cost: "Ugx 20000" },
        { description: "Lab Tests (Blood & Urine)", cost: "Ugx 5000" },
        { description: "Medication (Antibiotics & Painkillers)", cost: "Ugx 20000" },
        { description: "X-Ray", cost: "Ugx 50000" },
      ],
      totalAmount: "ugx  95000",
      officer: "Dr. Ivan Kasule",
    },
  ]);

  function GenerateBills() {
    return billData.map((billObj, index) => {
      return (
        <div key={index} className="card shadow-lg mb-5">
          <div className="card-header bg-danger text-white text-center">Nimlang Ltd Community-Based Health Program</div>
          <div className="card-body">
            <div className="row">
              {/* Bill Number and Date */}
              <div className="col-md-6">
                <p>
                  <strong>Bill No:</strong> {billObj.billNo}
                </p>
              </div>
              <div className="col-md-6 text-md-end">
                <p>
                  <strong>Date:</strong> {billObj.date}
                </p>
              </div>
            </div>

            {/* Client Information */}
            <div className="row">
              <div className="col-md-6">
                <p>
                  <strong>Client Name:</strong> {billObj.clientName}
                </p>
              </div>
              <div className="col-md-6 text-md-end">
                <p>
                  <strong>Client ID:</strong> {billObj.clientID}
                </p>
              </div>
            </div>

            {/* Program Information */}
            <div className="row">
              <div className="col-12">
                <p>
                  <strong>Program:</strong> {billObj.program}
                </p>
              </div>
            </div>

            {/* Bill Details Table */}
            <div className="table-responsive">
              <table className="table table-bordered">
                <thead className="table-secondary">
                  <tr>
                    <th>Description</th>
                    <th>Cost</th>
                  </tr>
                </thead>
                <tbody>
                  {billObj.items.map((item, index) => (
                    <tr key={index}>
                      <td>{item.description}</td>
                      <td>{item.cost}</td>
                    </tr>
                  ))}
                  <tr className="table-warning">
                    <td>
                      <strong>Total Amount</strong>
                    </td>
                    <td>
                      <strong>{billObj.totalAmount}</strong>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Officer in Charge */}
            <p>
              <strong>Attended By:</strong> {billObj.officer}
            </p>

            {/* Print Button */}
            <div className="text-center mt-4">
              <button className="btn btn-success" onClick={() => window.print()}>
                Print Bill <i className="bi bi-printer"></i>
              </button>
            </div>
          </div>
        </div>
      );
    });
  }

  return (
    <div>
      <NavBackToClientProfile />
      <div className="container mt-4">
        <h3 className="mb-3 text-center">Treatment Bill Details</h3>

        {/* Bill Card */}
        <GenerateBills />
      </div>
    </div>
  );
}
