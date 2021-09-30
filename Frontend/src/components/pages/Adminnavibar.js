import React, { Component } from "react";

class NavBar extends Component {

    render() {
        return (
            <div>
                <div className="left-sidenav">
                    <div style={{ width: "250px", height: "130px" }}>
                        {/* LOGO */}
                        <div className="brand">
                            <a href="crm-index.html" className="logo">
                                <span>
                                    <img src="assets/images/logo2.png" alt="logo-large" className="logo-sm"
                                        style={{ width: "140px", height: "140px", marginTop: "20px" }} />
                                </span>
                                <span>
                                </span>
                            </a>
                        </div>
                        {/*end logo*/}
                    </div>

                    <div className="menu-content h-100" data-simplebar style={{ marginTop: "50px" }}>
                        <ul className="metismenu left-sidenav-menu">
                            <li>
                                <a href="/AdminHome" ><i class="fas fa-home" style={{ color: "white" }}></i><span>Home</span></a>
                            </li>
                            <li>
                                <a href="/adminProfile" style={{ marginTop: "10px" }}><i data-feather="layers" className="align-self-center fas fa-user-alt" style={{ color: "white" }} /><span>Profile</span></a>
                            </li>

                            <li>
                                <a href="/AdminDashboard" style={{ marginTop: "10px" }}><i data-feather="layers" className="align-self-center fas fa-equals" style={{ color: "white" }} /><span>Dashboard</span></a>
                            </li>

                            <li>
                                <a href="/TopCompantAdmin" style={{ marginTop: "10px" }}><i data-feather="layers" className="align-self-center fas fa-history" style={{ color: "white" }} /><span>Top Companies</span></a>
                            </li>
                            <li>
                                <a href="/EmployerRegistationRequestList" style={{ marginTop: "10px" }}><i data-feather="layers" className="align-self-center fas fa-calendar-week" style={{ color: "white" }} /><span>Companies Register Request</span></a>
                            </li>
                            <li>
                                <a href="/AdminEventView"><i data-feather="grid" className="align-self-center fas fa-calendar-week " style={{ color: "white" }} /><span>Events</span><span className="menu-arrow"></span></a>
                                <ul className="nav-second-level" aria-expanded="false">
                                    <li className="nav-item"><a className="nav-link" href="/AdminPublishEvent"><i className="align-self-center fas fa-plus" style={{ color: "white" }} />Add Event</a></li>

                                </ul>
                            </li>
                            <li>
                                <a href="javascript: void(0);"><i data-feather="grid" className="align-self-center fas fa-arrow-up " style={{ color: "white" }} /><span>Top List Request</span><span className="menu-arrow"></span></a>
                                <ul className="nav-second-level" aria-expanded="false">
                                    <li className="nav-item"><a className="nav-link" href="/employerTopCompanyReqList"><i className="align-self-center far fa-building" style={{ color: "white" }} />Company Request</a></li>
                                    <li className="nav-item"><a className="nav-link" href="/employerTopVacancyReqList"><i className="align-self-center fas fa-user-md" style={{ color: "white" }} />Vacancy Request</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="/login" style={{ marginTop: "100px" }}><i data-feather="layers" class="align-self-center fas fa-sign-out-alt" style={{ color: "white" }}></i><span>Log out</span></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}
export default NavBar;