import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"

export function Adminheader(){

    
    const accountCreationStyling = {
        marginRight:"10px"
    }

    const headerH = {
        height :"70px",
        position:"fixt",
        top:"0px",
        left:"0px",
        right:"0px"
    }

   
    return(
        <nav className="navbar navbar-expand-lg bg-success " style={headerH}>
            <div className="container-fluid">
                <div className="navbar-brand text-white">Nimlang</div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#adminNavbar" aria-controls="adminNavbar" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="adminNavbar">
                    <ul className="navbar-nav ms-lg-auto">
                        <li className="nav-item">
                            <button type="button" data-bs-toggle="modal" data-bs-target="#createAccount" className="nav-link activate text-white" aria-current="page">Create Account</button>
                            <div className="modal fade" id="createAccount">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <div className="modal-tittle">close</div>
                                            <button className="btn-close" type="button" data-bs-dismiss="modal"></button>
                                        </div>
                                        <div className="modal-body d-flex flex-raw justify-content-center align-item-center" >
                                            <div className="employee " style={accountCreationStyling}>
                                                <a href="/admin/employeeRecruitment" className="btn btn-primary">Recruite Employee</a>
                                            </div>
                                            <div className="client">
                                                <a href="#" className="btn btn-success">Client Account</a>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="nav-item">
                            <button  className="nav-link activate text-white" aria-current="page" data-bs-toggle="modal" type="button" data-bs-target="#settingmodal">Settings</button>
                            <div className="modal fade" id="settingmodal">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <div className="modal-title">close</div>
                                            <button className="btn-close" type="button" data-bs-dismiss="modal"></button>
                                        </div>
                                        <div className="modal-body">
                                            <a href="#" className="btn btn-danger link ">logout</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}