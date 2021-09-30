import React, { Component } from "react";

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
                            </span>
                        </a>
                    </div>
                    {/*end logo*/}
                    </div>
                   
                    <div className="menu-content h-100" data-simplebar style={{ marginTop: "50px" }}>
                        <ul className="metismenu left-sidenav-menu">
                            <li>
                                <a href="/applicantHome" ><i class="fas fa-home" style={{ color: "white" }}></i><span>Home</span></a>
                            </li>
                            <li>
                                <a href="/ApplicantAppliedJobList" style={{ marginTop: "10px" }}><i data-feather="layers" className="align-self-center fas fa-history" style={{ color: "white" }} /><span>Applied Jobs</span></a>
                            </li>

                            <li>
                                <a href="/ApplicanEventView" style={{ marginTop: "10px" }}><i data-feather="layers" className="align-self-center fas fa-calendar-week" style={{ color: "white" }} /><span>Events</span></a>
                            </li>

                            <li>
                                <a href="/TopCompantApplicant" style={{ marginTop: "10px" }}><i data-feather="layers" className="align-self-center fas fa-history" style={{ color: "white" }} /><span>Top Companies</span></a>
                            </li>

                            <li>
                                <a href="/ApplicanProfile" style={{ marginTop: "10px" }}><i data-feather="layers" className="align-self-center fas fa-user-alt" style={{ color: "white" }} /><span>My profile</span></a>
                            </li>
                            <li>
                            </li>
                            <li>
                                <a href="/login" style={{ marginTop: "250px" }}><i data-feather="layers" class="align-self-center fas fa-sign-out-alt" style={{ color: "white" }}></i><span>Log out</span></a>
                            </li>
                        </ul>
                    </div>
                </div>                
            </div>
        );
    }
}
export default NavBar;