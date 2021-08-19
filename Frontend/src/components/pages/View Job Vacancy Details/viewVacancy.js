import React, { Component } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { APIURL } from "../../API/environment";

const _id = localStorage.getItem("ViewedJobID")
const closing_date =localStorage.getItem("ViewedJobclosing_date")
const createdAt = localStorage.getItem("ViewedJobcreatedAt")
const employerID = localStorage.getItem("ViewedJobemployerID")
const employerName =localStorage.getItem("ViewedJobemployerName" )
const job_category = localStorage.getItem("ViewedJobjob_category")
const job_description = localStorage.getItem("ViewedJobjob_description")
const job_title = localStorage.getItem("ViewedJobjob_title")
const job_type = localStorage.getItem("ViewedJobjob_type")

class ViewVacancy extends Component {
    constructor(props) {
        super(props);
        this.state = {
            viewedJobDetails: "",

        }
    }





    componentDidMount() {

        const ID = localStorage.getItem("ViewedJobID");
        console.log("ID is ", ID);
        axios
            .get(`${APIURL}/vacancy/get-jobs-by-id/${ID}`)
            .then((response) => {
                console.log("count ", response.data.data);
                this.setState({ viewedJobDetails: response.data.data });
                console.log("viewedJobDetails ", this.state.viewedJobDetails);



            });
    }

    render() {
        return (
            <>

                <div>
                    <div className="left-sidenav">
                        {/* LOGO */}
                        <div className="brand">
                            <a href="crm-index.html" className="logo">
                                <span>
                                    <img src="assets/images/logo1.png" alt="logo-large" className="logo-sm" />
                                </span>
                                <span>

                                </span>
                            </a>
                        </div>
                        {/*end logo*/}
                        <div className="menu-content h-100" data-simplebar>
                            <ul className="metismenu left-sidenav-menu">
                                <li>
                                    <a href="employer.html"><i data-feather="layers" className="align-self-center menu-icon" /><span>Home</span></a>
                                </li>
                                <li>
                                    <a href="emp-applicant_profile.html"><i data-feather="layers" className="align-self-center menu-icon" /><span>Profile</span></a>
                                </li>
                                <li>
                                    <a href="javascript: void(0);"><i data-feather="grid" className="align-self-center menu-icon" /><span>Jobs</span><span className="menu-arrow"><i className="mdi mdi-chevron-right" /></span></a>
                                    <ul className="nav-second-level" aria-expanded="false">
                                        <li className="nav-item"><a className="nav-link" href="emp-create-job.html"><i className="ti-control-record" />Create a Job</a></li>
                                        <li className="nav-item"><a className="nav-link" href="emp-job-list.html"><i className="ti-control-record" />List jobs</a></li>

                                    </ul>
                                </li>
                                <li>
                                    <a href="emp-job-request.html"><i data-feather="layers" className="align-self-center menu-icon" /><span>Job requests</span></a>
                                </li>
                                <li>
                                    <a href="emp-apprvedJobs-part-2.html"><i data-feather="layers" className="align-self-center menu-icon" /><span>Approved job</span></a>
                                </li>
                                <li>
                                    <a href="emp-create-job.html"><i data-feather="edit" className="align-self-center menu-icon" /><span>Contract</span></a>
                                </li>
                                <li>
                                    <a href="emp-invoice.html"><i data-feather="layers" className="align-self-center menu-icon" /><span>Invoice</span></a>
                                </li>
                                <li>
                                    <a href="emp-history.html"><i data-feather="layers" className="align-self-center menu-icon" /><span>Employee History</span></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* end left-sidenav*/}
                    <div className="page-wrapper">
                        {/* Top Bar Start */}

                        {/* Top Bar End */}
                        {/* Page Content*/}
                        <div className="page-content">
                            <div className="container-fluid">
                                {/* Page-Title */}
                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="page-title-box">
                                            <div className="row">
                                                <div className="col">
                                                    <h4 className="page-title">Job</h4>
                                                    <ol className="breadcrumb">
                                                        <li className="breadcrumb-item"><a href="javascript:void(0);">Dashboard</a></li>
                                                        <li className="breadcrumb-item"><a href="javascript:void(0);">Jobs</a></li>
                                                        <li className="breadcrumb-item"><a href="javascript:void(0);">Job List</a></li>
                                                        <li className="breadcrumb-item active">Job</li>
                                                    </ol>
                                                </div>

                                                {/*end col*/}
                                            </div>
                                            {/*end row*/}
                                        </div>
                                        {/*end page-title-box*/}
                                    </div>
                                    {/*end col*/}
                                </div>
                                {/*end row*/}
                                {/* end page title end breadcrumb */}
                                <div className="row" style={{width:"1200px"}}>

                                    <div className="col-lg-12">
                                        <div className="card" style={{marginTop:"50px"}}>
                                            <div className="card-header">
                                                <h4 className="card-title">Job Bank</h4>
                                            </div>
                                            <div className="card-body">
                                                <table className="table table-borderless dt-responsive">
                                                    <thead>
                                                        <tr>
                                                            <th style={{ width: '8rem' }} />
                                                            <th />
                                                        </tr>
                                                    </thead>

                                                    <tbody >


                                                        <tr>
                                                            <td>
                                                                <h6 className="card-subtitle mb-2 text-muted" >Job Title</h6>
                                                            </td>
                                                            <td>
                                                                <p className="card-text" style={{marginTop:"-12px"}}>{job_title}</p>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <h6 className="card-subtitle mb-2 text-muted" style={{marginTop:"12px"}}>Employer</h6>
                                                            </td>
                                                            <td>
                                                                <p className="card-text" style={{marginTop:"5px"}}>{employerName}</p>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <h6 className="card-subtitle mb-2 text-muted" >Job Description</h6>
                                                            </td>
                                                            <td>
                                                                <p className="card-text" >{job_description}</p>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <h6 className="card-subtitle mb-2 text-muted" style={{marginTop:"12px"}}>Job Category </h6>
                                                            </td>
                                                            <td>
                                                                <p className="card-text" style={{marginTop:"5px"}}>{job_category}</p>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <h6 className="card-subtitle mb-2 text-muted" style={{marginTop:"12px"}}>Job Type </h6>
                                                            </td>
                                                            <td>
                                                                <p className="card-text" style={{marginTop:"5px"}}>{job_type }</p>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <h6 className="card-subtitle mb-2 text-muted" style={{marginTop:"12px"}}>Closing Date </h6>
                                                            </td>
                                                            <td>
                                                                <p className="card-text" style={{marginTop:"5px"}}>{closing_date}</p>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <h6 className="card-subtitle mb-2 text-muted" style={{marginTop:"12px"}}>Job Published</h6>
                                                            </td>
                                                            <td>
                                                                <p className="card-text" style={{marginTop:"5px"}}>{createdAt}</p>
                                                            </td>
                                                        </tr>
                                            
                                                    </tbody>




                                                </table>
                                                <a href="/ApplyForJobForm" className="btn btn-success btn-block">Apply</a>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>{/* container */}
                            <footer className="footer text-center text-sm-left">
                                © 2020 Job Bank
                            </footer>
                            {/*end footer*/}
                        </div>
                        {/* end page content */}
                    </div>
                </div>

            </>
        );
    }
}

export default ViewVacancy;
