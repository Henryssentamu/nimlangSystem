import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"

export function EmployeeRecruitmentForm(){
    return(
        <body>
        <div className="container mt-5">
            <h2 className="text-center mb-4">Employee Details Form</h2>
            <form>
            {/* <!-- Personal Details Section --> */}
            <div class="card mb-4">
                <div className="card-header bg-primary text-white">Personal Details</div>
                <div className="card-body">
                <div className="row mb-3">
                    <div className="col-md-6">
                    <label for="firstName" className="form-label">First Name</label>
                    <input type="text" className="form-control" id="firstName" placeholder="E.g IVAN" required />
                    </div>
                    <div class="col-md-6">
                    <label for="lastName" className="form-label">Last Name</label>
                    <input type="text" className="form-control" id="lastName" placeholder="E.g Kasule" required />
                    </div>
                </div>
                <div class="row mb-3">
                    <div className="col-md-6">
                    <label for="residence" className="form-label">Residence</label>
                    <input type="text" className="form-control" id="residence" placeholder="E.g Kyebando" required />
                    </div>
                    <div className="col-md-6">
                    <label for="contact" className="form-label">Contact</label>
                    <input type="text" className="form-control" id="contact" placeholder="E.g 0755126655" required />
                    </div>
                    
                </div>
                <div class="row mb-3">
                    <div className="col-md-6">
                    <label for="nationality" class="form-label">Nationality</label>
                    <input type="text" className="form-control" id="nationality" placeholder="E.g Ugandan" required />
                    </div>
                    <div className="col-md-6">
                    <label for="contact" className="form-label">Email</label>
                    <input type="email" className="form-control" placeholder="E.g kasuleivan@gmail.com"  required />
                    </div>
                </div>
                </div>
            </div>

            {/* <!-- Next of Kin Section --> */}
            <div class="card mb-4">
                <div className="card-header bg-secondary text-white">Next of Kin</div>
                <div className="card-body">
                <div className="row mb-3">
                    <div class="col-md-6">
                    <label for="kinName" className="form-label">Full Name</label>
                    <input type="text" className="form-control" id="kinName" placeholder="E.g kasule Ivan" required />
                    </div>
                    <div class="col-md-6">
                    <label for="kinContact" className="form-label">Contact</label>
                    <input type="text" className="form-control" id="kinContact" placeholder="E.g 0755126655" required />
                    </div>
                </div>
                </div>
            </div>

            {/* <!-- Position and Department Section --> */}
            <div className="card mb-4">
                <div className="card-header bg-info text-white">Position & Department</div>
                <div className="card-body">
                <div className="row mb-3">
                    <div className="col-md-4">
                        <label for="position" className="form-label">Position</label>
                    <select className="form-select" id="position" required>
                        <option value="" selected disabled>Select position</option>
                        <option value="Manager">Manager</option>
                        <option value="Engineer">Engineer</option>
                        <option value="Technician">Technician</option>
                    </select>
                    </div>
                    <div className="col-md-4">
                        <label for="department" class="form-label">Department</label>
                        <select className="form-select" id="department" required>
                            <option value="" selected disabled>Select position</option>
                            <option value="Finance">Finance</option>
                            <option value="Medical">Medical</option>
                            <option value="Sales">Technician</option>
                        </select>
                    </div>
                    <div className="col-md-4">
                        <label for="employmentType" class="form-label">Type of Employment</label>
                        <select className="form-select" id="employmentType" required>
                            <option value="" selected disabled>Select employment type</option>
                            <option value="Full-time">Full-time</option>
                            <option value="Part-time">Part-time</option>
                            <option value="Contract">Contract</option>
                        </select>   
                    </div>
                </div>
                </div>
            </div>

            {/* <!-- Health Details Section --> */}
            {/* <div className="card mb-4">
                <div className="card-header bg-success text-white">Health Details</div>
                <div className="card-body">
                <div className="mb-3">
                    <label for="healthDetails" class="form-label">Health Details</label>
                    <textarea className="form-control" id="healthDetails" rows="3" placeholder="Enter health details"></textarea>
                </div>
                </div>
            </div> */}

            {/* <!-- Bank Details Section --> */}
            <div className="card mb-4">
                <div className="card-header bg-warning text-white">Bank Details</div>
                <div className="card-body">
                <div className="row mb-3">

                    <div className="col-md-6">
                        <label for="bankName" class="form-label">Bank Name</label>
                        <input type="text" class="form-control" id="bankName" placeholder="E.g Equity " required />
                    </div>
                    
                    <div className="col-md-6">
                        <label for="accountNumber" class="form-label">Account Number</label>
                        <input type="text" class="form-control" id="accountNumber" placeholder="1033103367353" required />
                    </div> 
                </div>
                </div>
            </div>

            {/* <!-- Education Details Section --> */}
            <div className="card mb-4">
                <div className="card-header bg-dark text-white">Education Details</div>
                <div className="card-body">
                <div className="mb-3">
                    <label for="educationDetails" class="form-label">Education Details</label>
                    <textarea class="form-control" id="educationDetails" rows="3" placeholder="Enter education details"></textarea>
                </div>
                </div>
            </div>

            {/* <!-- Type of Employment Section --> */}
            {/* <div className="card mb-4">
                <div className="card-header bg-danger text-white">Type of Employment</div>
                <div className="card-body">
                <label for="employmentType" class="form-label">Type of Employment</label>
                <select className="form-select" id="employmentType" required>
                    <option value="" selected disabled>Select employment type</option>
                    <option value="Full-time">Full-time</option>
                    <option value="Part-time">Part-time</option>
                    <option value="Contract">Contract</option>
                </select>
                </div>
            </div> */}

            {/* <!-- Photo Upload Section --> */}
            <div className="card mb-4">
                <div className="card-header bg-primary text-white">Photo Upload</div>
                <div className="card-body">
                <label for="photoUpload" className="form-label">Upload Photo</label>
                <input type="file" class="form-control" id="photoUpload" accept="image/*"></input>
                
                </div>
            </div>

            {/* <!-- PDF Upload Section --> */}
            <div className="card mb-4">
                <div className="card-header bg-secondary text-white">PDF Upload</div>
                <div className="card-body">
                <label for="pdfUpload" className="form-label">Upload PDF</label>
                <input ttype="file" className="form-control" id="pdfUpload" accept=".pdf" />
                </div>
            </div>

            {/* <!-- Submit Button --> */}
            <div className="text-center">
                <button type="submit" className="btn btn-success">Submit</button>
            </div>
            </form>
        </div>
        </body>
    )
}