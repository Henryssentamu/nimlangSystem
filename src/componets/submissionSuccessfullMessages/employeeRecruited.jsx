import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
export function EmployeeSuccessfullyRecruited() {
  return (
    <div className=" d-flex justify-content-center align-items-center min-vh-100 " style={{ border: "none" }}>
      <div className="card">
        <div className="card-header bg-success text-white shadow-lg">
          <div className="card-title">Employee Successfully REcruited</div>
        </div>
        <div className="card-body">
          <div>Return To Dashboard For Employee details</div>
          <div>
            <a href="/admin" className="link">
              Back
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
