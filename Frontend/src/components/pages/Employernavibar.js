import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import { toast } from "react-toastify";


class NavBar extends Component {

  

    render() {
        return (
            <div>
                
                <div className="left-sidenav">
                    <div style={{width:"250px",height:"130px"}}>
                         {/* LOGO */}
                    <div className="brand">
                        <a href="crm-index.html" className="logo">
                            <span>

                                <img src="assets/images/logo2.png" alt="logo-large" className="logo-sm"
                                    style={{ width: "140px", height: "140px", marginTop: "20px" }} />
                            </span>
                            <span>
                                {/* <img src="assets/images/logo.png" alt="logo-large" class="logo-lg logo-light">
                        <img src="assets/images/logo-dark.png" alt="logo-large" class="logo-lg logo-dark"> */}
                            </span>
                        </a>
                    </div>
                    {/*end logo*/}
                    </div>
                   
                    <div className="menu-content h-100" data-simplebar style={{ marginTop: "70px" }}>
                        <ul className="metismenu left-sidenav-menu">
                            <li>
                                <a href="/EmployerHome" ><i class="fas fa-home" style={{ color: "white" }}></i><span>Home</span></a>
                            </li>
                            {/* <li>
                                <a href="#"><i data-feather="layers" className="align-self-center menu-icon" /><span>Job Market</span></a>
                            </li> */}
                            {/* <li>
                                <a href="/ApplicantAppliedJobList" style={{ marginTop: "10px" }}><i data-feather="layers" className="align-self-center fas fa-history" style={{ color: "white" }} /><span>Applied Jobs</span></a>
                            </li> */}

                            <li>
                                <a href="/EmployerEventView" style={{ marginTop: "10px" }}><i data-feather="layers" className="align-self-center fas fa-calendar-week" style={{ color: "white" }} /><span>Events</span></a>
                            </li>

                           
                            <li>
                                <a href="/TopCompantEmp" style={{ marginTop: "10px" }}><i data-feather="layers" className="align-self-center fas fa-history" style={{ color: "white" }} /><span>Top Companies</span></a>
                            </li>
                           

                            <li>

                            </li>
                            <li>
                                <a href="#"><i data-feather="grid" className="align-self-center menu-icon" /><span>Jobs</span><span className="menu-arrow"><i className="mdi mdi-chevron-right" /></span></a>
                                <ul className="nav-second-level" aria-expanded="false">
                                <li className="nav-item"><a className="nav-link" href="/employerCreateJob"><i className="align-self-center fas fa-plus" style={{ color: "white" }} />Create Jobs</a></li>
                                <li className="nav-item"><a className="nav-link" href="/EmployerCreatedJobList"><i className="align-self-center   fas fa-th-list" style={{ color: "white" }} />Created Jobs List</a></li>

                                 
                                </ul>
                            </li>
                            <li>
                                <a href="/employerDashboard" style={{ marginTop: "10px" }}><i data-feather="layers" className="align-self-center fas fa-user-alt" style={{ color: "white" }} /><span>My profile</span></a>
                            </li>
                            {/* <li>
                                <a href="Student-create-project.html"><i data-feather="layers" className="align-self-center menu-icon" /><span>Create projects</span></a>
                            </li>
                            <li>
                                <a href="Student-scholarships.html"><i data-feather="layers" className="align-self-center menu-icon" /><span>Scholarships</span></a>
                            </li>
                            <li>
                                <a href="#"><i data-feather="layers" className="align-self-center menu-icon" /><span>Job History</span></a>
                            </li> */}
                            <li>
                                <a href="/login" style={{ marginTop: "200px" }}><i data-feather="layers" class="align-self-center fas fa-sign-out-alt" style={{ color: "white" }}></i><span>Log out</span></a>
                            </li>
                        </ul>
                    </div>
                </div>                
            </div>
        );
    }
}
export default NavBar;