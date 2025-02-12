import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
export function ClientSuccessfullyRegistered() {
  return (
    <div className=" d-flex justify-content-center align-items-center min-vh-100 " style={{ border: "none" }}>
      <div className="card">
        <div className="card-header bg-success text-white shadow-lg">
          <div className="card-title">Client Successfully Registered</div>
        </div>
        <div className="card-body">
          <div>Return To Dashboard For Client details</div>
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
