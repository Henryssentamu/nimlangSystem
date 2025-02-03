import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { NavBackToClientProfile } from "../componets/headers/backToClientprofile";
// import { NavForOtherAdminPages } from "../componets/headers/otherAdminPages";

export function PaymentDetails() {
  return (
    <div>
      <NavBackToClientProfile />
      <div className="container mt-4">
        <h3 className="mb-3">Payment Details</h3>

        {/* Payment Summary Cards */}
        <div className="row">
          <div className="col-md-6">
            <div className="card text-center shadow-sm">
              <div className="card-header bg-success text-white">Total Amount Paid</div>
              <div className="card-body">
                <h3 className="card-title">$3,500</h3>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card text-center shadow-sm">
              <div className="card-header bg-danger text-white">Outstanding Balance</div>
              <div className="card-body">
                <h3 className="card-title">$450</h3>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Transactions Table */}
        <div className="row mt-4">
          <div className="col-12">
            <div className="card shadow-sm">
              <div className="card-header bg-secondary text-white">Payment Transactions</div>
              <div className="card-body">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Date</th>
                      <th>Amount Paid</th>
                      <th>Payment Method</th>
                      <th>Receipt</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>2024-01-10</td>
                      <td>$1,000</td>
                      <td>Credit Card</td>
                      <td>
                        <a href="/admin/receipt" className="btn btn-primary btn-sm">
                          View Receipt
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>2024-02-15</td>
                      <td>$1,500</td>
                      <td>Bank Transfer</td>
                      <td>
                        <a href="/admin/receipt" className="btn btn-primary btn-sm">
                          View Receipt
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>2024-03-05</td>
                      <td>$1,000</td>
                      <td>Cash</td>
                      <td>
                        <a href="/admin/receipt" className="btn btn-primary btn-sm">
                          View Receipt
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>2024-04-02</td>
                      <td>$450</td>
                      <td>Mobile Money</td>
                      <td>
                        <a href="/admin/receipt" className="btn btn-primary btn-sm">
                          View Receipt
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
