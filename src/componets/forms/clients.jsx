import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export function PersonalMedicalForm() {
  function handleSubmit(event) {
    event.preventDefault();
    const formdata = new FormData(event.target);
    const data = Object.fromEntries(formdata);
    console.log(data);
  }
  return (
    <div className="container mt-4">
      <div className="card p-4">
        <h3>Personal & Medical Information Form</h3>
        <form onSubmit={handleSubmit} className="row g-3">
          {/* Personal Details */}
          <h5>Personal Details</h5>
          <div className="col-md-6">
            <input type="text" className="form-control" placeholder="Full Name" name="name" required />
          </div>
          <div className="col-md-3">
            <select className="form-control" name="gender" required>
              <option value="" selected disabled>
                Select Gender
              </option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <div className="col-md-3">
            <input type="date" className="form-control" name="dob" required />
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
          <div className="col-md-6">
            <input type="text" className="form-control" placeholder="Tribe" name="tribe" required />
          </div>
          <div className="col-md-6">
            <input type="text" className="form-control" placeholder="Contacts" name="contacts" required />
          </div>

          {/* Medical Details */}
          <h5>Medical Details</h5>
          <div className="col-md-3">
            <input type="number" className="form-control" placeholder="Weight (kg)" name="weight" required />
          </div>
          <div className="col-md-3">
            <input type="number" className="form-control" placeholder="Height (cm)" name="height" required />
          </div>
          <div className="col-md-3">
            <input type="text" className="form-control" placeholder="Impairment (if any)" name="impairment" />
          </div>
          <div className="row mb-3 mt-3">
            <div className="col-6">
              <label className="form-label">Mental Health Signs</label>
              <select className="form-select">
                <option value="" selected disabled>
                  Select
                </option>
                <option value="no">Not Any</option>
                <option value="anxiety">Anxiety</option>
                <option value="depression">Depression</option>
                <option value="stress">Stress Levels</option>
                <option value="mood_changes">Mood Changes</option>
              </select>
            </div>

            {/* <!-- Cough & Phlegm --> */}
            <div className="col-6">
              <label className="form-label">Cough & Phlegm</label>
              <select className="form-select">
                <option value="" selected disabled>
                  Select
                </option>
                <option value="no">Not Any</option>
                <option value="dry">Dry Cough</option>
                <option value="wet">Wet Cough</option>
                <option value="chronic">Chronic Cough</option>
              </select>
            </div>
          </div>

          {/* <!-- Allergies --> */}
          <div className="row mb-3">
            <label className="form-label">Do you have any allergies?</label>
            <div className=" col-6">
              <div className="row">
                <label className=" col form-label">
                  yes
                  <input type="radio" name="allergies" value="yes" className="col-6" />
                </label>
                <label className="col form-label">
                  no
                  <input type="radio" name="allergies" value="no" className="col-6" />
                </label>
              </div>
            </div>
            <div className="col-6 mt-2">
              <label className="form-label">
                <input type="text" className="form-control" placeholder=" IF YES, Specify allergies (food, drugs, etc.)" />
              </label>
            </div>
          </div>

          {/* <!-- Medications --> */}
          <div className="mb-3">
            <label className="form-label">Current Medications</label>
            <input type="text" className="form-control" placeholder="List medications or supplements" />
          </div>

          {/* <!-- Lifestyle Information --> */}
          <div className="row mt-4 mb-4">
            <div className=" col">
              <label className="form-label">Do you smoke?</label>
              <div className="row">
                <label className="form-label col">
                  Yes
                  <input type="radio" name="smoke" value="yes" />
                </label>
                <label className="form-label col">
                  No
                  <input type="radio" name="smoke" value="no" />
                </label>
              </div>
            </div>

            <div className="col">
              <label className="form-label">Do you consume alcohol?</label>
              <div className="row">
                <label className="form-label col">
                  Yes
                  <input type="radio" name="alcohol" value="yes" />
                </label>
                <label className="form-label col">
                  No
                  <input type="radio" name="alcohol" value="no" />
                </label>
              </div>
            </div>

            <div className="col">
              <label className="form-label">Do you follow a specific diet?</label>
              <div className="row">
                <label className="form-label col">
                  Yes
                  <input type="radio" name="diet" value="yes" />
                </label>
                <label className="form-label col">
                  No
                  <input type="radio" name="diet" value="no" />
                </label>
              </div>
            </div>

            <div className="col">
              <label className="form-label">Do you exercise regularly?</label>
              <div className="row">
                <label className="form-label col">
                  Yes
                  <input type="radio" name="exercise" value="yes" />
                </label>
                <label className="form-label col">
                  No
                  <input type="radio" name="exercise" value="no" />
                </label>
              </div>
            </div>
          </div>

          {/* <!-- Vital Signs --> */}
          <div className="mb-3">
            <label className="form-label">Body Temperature (°C)</label>
            <input type="number" className="form-control" step="0.1" placeholder="e.g., 36.5" />
          </div>

          <div className="mb-3">
            <label className="form-label">Blood Pressure (mmHg)</label>
            <input type="text" className="form-control" placeholder="e.g., 120/80" />
          </div>

          <div className="mb-3">
            <label className="form-label">Heart Rate (bpm)</label>
            <input type="number" className="form-control" placeholder="e.g., 72" />
          </div>

          <div className="mb-3">
            <label className="form-label">Respiratory Rate (breaths per minute)</label>
            <input type="number" className="form-control" placeholder="e.g., 16" />
          </div>

          <div className="mb-3">
            <label className="form-label">Oxygen Saturation (SpO₂ %)</label>
            <input type="number" className="form-control" step="0.1" placeholder="e.g., 98" />
          </div>

          {/* Next of Kin */}
          <h5>Next of Kin</h5>
          <div className="col-md-4">
            <input type="text" className="form-control" placeholder="Full Name" name="name" required />
          </div>
          <div className="col-md-4">
            <input type="text" className="form-control" placeholder="Location" name="location" required />
          </div>
          <div className="col-md-4">
            <input type="text" className="form-control" placeholder="Contacts" name="contacts" required />
          </div>

          <div className="col-12">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
