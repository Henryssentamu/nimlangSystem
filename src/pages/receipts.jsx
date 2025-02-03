import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { NavBackToClientProfile } from "../componets/headers/backToClientprofile";

export function PaymentReceipt() {
  // Sample receipt data
  const receiptData = {
    receiptNo: "NL-20240101-1234",
    date: "2024-02-03",
    clientName: "John Doe",
    clientID: "NL-1001",
    program: "Nimlang Ltd Community-Based Health Program",
    amountPaid: "$150",
    paymentMethod: "Mobile Money",
    transactionID: "TXN-987654321",
    officer: "Sarah Kimani",
  };

  return (
    <div>
      <NavBackToClientProfile />
      <div className="container mt-4">
        <h3 className="mb-3 text-center">Payment Receipt</h3>

        {/* Receipt Card */}
        <div className="card shadow-lg">
          <div className="card-header bg-primary text-white text-center">Nimlang Ltd Community-Based Health Program</div>
          <div className="card-body">
            <div className="row">
              {/* Receipt Number and Date */}
              <div className="col-md-6">
                <p>
                  <strong>Receipt No:</strong> {receiptData.receiptNo}
                </p>
              </div>
              <div className="col-md-6 text-md-end">
                <p>
                  <strong>Date:</strong> {receiptData.date}
                </p>
              </div>
            </div>

            {/* Client Information */}
            <div className="row">
              <div className="col-md-6">
                <p>
                  <strong>Client Name:</strong> {receiptData.clientName}
                </p>
              </div>
              <div className="col-md-6 text-md-end">
                <p>
                  <strong>Client ID:</strong> {receiptData.clientID}
                </p>
              </div>
            </div>

            {/* Program Information */}
            <div className="row">
              <div className="col-12">
                <p>
                  <strong>Program:</strong> {receiptData.program}
                </p>
              </div>
            </div>

            {/* Payment Details */}
            <div className="table-responsive">
              <table className="table table-bordered">
                <thead className="table-secondary">
                  <tr>
                    <th>Amount Paid</th>
                    <th>Payment Method</th>
                    <th>Transaction ID</th>
                    <th>Received By</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{receiptData.amountPaid}</td>
                    <td>{receiptData.paymentMethod}</td>
                    <td>{receiptData.transactionID}</td>
                    <td>{receiptData.officer}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Print/Download Button */}
            <div className="text-center mt-4">
              <button className="btn btn-success" onClick={() => window.print()}>
                Print / Download Receipt <i className="bi bi-printer"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
