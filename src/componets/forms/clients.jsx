import { useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { NavForOtherAdminPages } from "../headers/otherAdminPages";

export function PersonalMedicalForm() {
  const photoRef = useRef();

  function handleSubmit(event) {
    event.preventDefault();
    const photo = photoRef.current.files[0];
    const formdata = new FormData(event.target);
    if (photo) formdata.append("photo", photo);

    fetch("http://127.0.0.1:5000/registeringClients", {
      method: "POST",
      body: formdata,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("server error while sending client registration details");
        }
        return response.json();
      })
      .then((data) => {
        if (data.status === "ok") {
          alert("client details submited");
          window.location.reload();
        } else {
          alert("check the error ");
        }
      })
      .catch((error) => {
        alert(error);
      });
  }

  return (
    <div>
      <NavForOtherAdminPages />
      <div className="container mt-5">
        <div className="card shadow-sm p-4 border-light rounded-4">
          <h3 className="text-center text-primary fw-bold mb-4">Personal & Medical Information</h3>
          <form onSubmit={handleSubmit} className="row g-3">
            {/* Personal Details */}
            <div className="border-bottom pb-2 mb-3">
              <h5 className="fw-semibold">Personal Details</h5>
            </div>
            <div className="row gx-3 gy-3">
              <div className="col-md-6">
                <input type="text" className="form-control" placeholder="Full Name" name="name" required />
              </div>
              <div className="col-md-3">
                <select className="form-select" name="gender" required>
                  <option value="" disabled selected>
                    Select Gender
                  </option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
              <div className="col-md-3">
                <input type="date" className="form-control" name="DateOfBirth" required placeholder="Date of birth" />
              </div>
              <div className="col-md-4">
                <input type="text" className="form-control" placeholder="Occupation" name="occupation" required />
              </div>
              <div className="col-md-4">
                <input type="text" className="form-control" placeholder="Location" name="location" required />
              </div>
              <div className="col-md-4">
                <input type="text" className="form-control" placeholder="Religion" name="religion" required />
              </div>
            </div>

            {/* Location Details */}
            <div className="border-bottom pb-2 mt-4 mb-3">
              <h5 className="fw-semibold">Current Location Details</h5>
            </div>
            <div className="row gx-3 gy-3">
              <div className="col-md-4 ">
                <input type="text" name="country" className="form-control" placeholder="Country (e.g. Uganda)" required />
              </div>
              <div className="col-md-4 ">
                <input type="text" name="region" className="form-control" placeholder="Region (e.g. Central)" required />
              </div>
              <div className="col-md-4">
                <input type="text" name="district" className="form-control" placeholder="District (e.g. Kampala)" required />
              </div>
              <div className="col-md-4">
                <input type="text" name="county" className="form-control" placeholder="County/Division (e.g. Kawempe)" required />
              </div>
              <div className="col-md-4">
                <input type="text" name="subcounty" className="form-control" placeholder="Sub County (e.g. Wandegeya)" required />
              </div>
              <div className="col-md-4">
                <input type="text" name="parish" className="form-control" placeholder="Parish (e.g. Masanyalaze)" required />
              </div>
              <div className="col-md-4">
                <input type="text" name="village" className="form-control" placeholder="Village (e.g. Katanga)" required />
              </div>
            </div>

            {/* Next of Kin */}
            <div className="border-bottom pb-2 mt-4 mb-3">
              <h5 className="fw-semibold">Next of Kin</h5>
            </div>
            <div className="row gx-3">
              <div className="col-md-4">
                <input type="text" className="form-control" placeholder="Full Name" name="kin_name" required />
              </div>
              <div className="col-md-4">
                <input type="text" className="form-control" placeholder="Location" name="kin_location" required />
              </div>
              <div className="col-md-4">
                <input type="text" className="form-control" placeholder="Contacts" name="kin_contacts" required />
              </div>
            </div>
            <div className="border-bottom pb-2 mt-4 mb-3">
              <h5 className="fw-semibold">Profile Picture</h5>
            </div>
            <div className="row">
              <label className="form-label">
                <input type="file" ref={photoRef} accept="image/*" className="form-control" />
              </label>
            </div>

            {/* Submit Button */}
            <div className="col-12 text-center mt-4">
              <button type="submit" className="btn btn-primary btn-lg rounded-pill w-50 fs-5">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
