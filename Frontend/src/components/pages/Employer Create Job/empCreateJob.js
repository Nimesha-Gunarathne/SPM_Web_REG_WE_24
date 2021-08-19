import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import { toast } from "react-toastify";
import { APIURL } from "../../../components/API/environment";
import Select from "react-select";

const EID =localStorage.getItem("LocalEmployerID")
const EName =localStorage.getItem("LocalEmployerName")


const initialState = {
    job_title: "",
    job_description: "",
    job_category: "",
    job_type: "",
    closing_date: "",
    employerID: EID,
    employerName: EName
};

const JobCategoryies = [
    { value: "Full Time", label: "Full Time" },
    { value: "Part Time", label: "Part Time" },
];

const JobType= [
    { value: "Architecture and Engineering Occupations", label: "Architecture and Engineering Occupations" },
    { value: "Arts, Design, Entertainment, Sports, and Media Occupations", label: "Arts, Design, Entertainment, Sports, and Media Occupations" },
    { value: "Building and Grounds Cleaning and Maintenance Occupations", label: "Building and Grounds Cleaning and Maintenance Occupations" },
];




class EmployerCreateJob extends Component {

    constructor(props) {
        super(props);
        this.state = initialState;
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onJobCategoryiesOptionSelected = this.onJobCategoryiesOptionSelected.bind(this);
        this.onJobTypeOptionSelected = this.onJobTypeOptionSelected.bind(this);

    }


    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onJobCategoryiesOptionSelected(e) {
        this.state.job_category = e.label;
      }
      onJobTypeOptionSelected(e) {
        this.state.job_type = e.label;
      }

    onSubmit(event) {
        event.preventDefault();

        let JobDetails = {
            job_title: this.state.job_title,
            job_description: this.state.job_description,
            job_category: this.state.job_category,
            job_type: this.state.job_type,
            closing_date: this.state.closing_date,
            employerID: this.state.employerID,
            employerName: this.state.employerName
        };

        console.log("Job Details : ", JobDetails);

        axios
            .post(`${APIURL}/vacancy/create-jobs`, JobDetails)
            .then((res) => {
                console.log("res", res);
                if (res.data.code === 200) {
                    console.log("res.data.code", res.data.code);
                    alert("Job is added");

                    window.location.reload();

                    // toast.success(res.data.message);
                    // window.setTimeout(function () {
                    //     window.location.href = "/login";
                    // }, 5000);
                    //   window.location.href = "/login";
                } else {
                    toast.error(res.data.message);
                    alert(res.data.message);

                }
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
                                    {/* <img src="assets/images/logo.png" alt="logo-large" class="logo-lg logo-light">
                    <img src="assets/images/logo-dark.png" alt="logo-large" class="logo-lg logo-dark"> */}
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
                                        {/* <li class="nav-item"><a class="nav-link" href="employee-list.html"><i
                                    class="ti-control-record"></i>Employee
                                List</a></li> */}
                                    </ul>
                                </li>
                                <li>
                                    <a href="emp-job-request.html"><i data-feather="layers" className="align-self-center menu-icon" /><span>Job requests</span></a>
                                </li>
                                <li>
                                    <a href="emp-apprvedJobs-part-2.html"><i data-feather="layers" className="align-self-center menu-icon" /><span>Approved job</span></a>
                                </li>
                                <li>
                                    <a href="emp-Contract.html"><i data-feather="edit" className="align-self-center menu-icon" /><span>Contract</span></a>
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
                        <div className="topbar">

                        </div>
                        {/* Top Bar End */}
                        {/* Page Content*/}
                        <div className="page-content" style={{ width: "1250px" }}>

                            <div className="container-fluid">
                                {/* Page-Title */}
                                <div className="row">
                                    <div className="col-sm-17">
                                        <div className="page-title-box">
                                            <div className="row">
                                                <div className="col">
                                                    <h4 className="page-title">Add New Vacancy</h4>
                                                    <ol className="breadcrumb">
                                                        <li className="breadcrumb-item"><a href="javascript:void(0);">Job Bank</a></li>
                                                        <li className="breadcrumb-item"><a href="javascript:void(0);">Jobs</a></li>
                                                        <li className="breadcrumb-item active">New Jobs</li>
                                                    </ol>
                                                </div>

                                            </div>
                                            {/*end row*/}
                                        </div>
                                        {/*end page-title-box*/}
                                    </div>
                                    {/*end col*/}
                                </div>
                                {/*end row*/}
                                {/* end page title end breadcrumb */}
                                <div className="row" style={{ marginTop: "60px" }}>
                                    <div className="col-lg-12">
                                        <div className="card">
                                            <div className="card-header">
                                                <h4 className="card-title">New Job</h4>
                                                {/* <p class="text-muted mb-0">Here are examples of <code class="highlighter-rouge">.form-control</code> applied to each
                                        textual HTML5 <code class="highlighter-rouge">&lt;input&gt;</code> <code class="highlighter-rouge">type</code>.
                                    </p> */}
                                            </div>
                                            {/*end card-header*/}
                                            <div className="card-body">
                                                <div className="row">
                                                    <div className="col-lg-12">
                                                        <div className="form-group row">
                                                            <label htmlFor="example-text-input" className="col-sm-2 col-form-label text-right">Job Title</label>
                                                            <div className="col-sm-10">
                                                                <input className="form-control" type="text" placeholder="Job Title is..." id="example-text-input"
                                                                    name="job_title"
                                                                    value={this.state.job_title}
                                                                    onChange={this.onChange}
                                                                    required />
                                                            </div>
                                                        </div>
                                                        <div className="form-group row" style={{ marginTop: "40px" }}>
                                                            <label htmlFor="example-email-input" className="col-sm-2 col-form-label text-right">Job Description</label>
                                                            <div className="col-sm-10">
                                                                <textarea id="textarea" className="form-control" maxLength={225} rows={3} placeholder="This textarea has a limit of 225 chars."
                                                                    name="job_description"
                                                                    value={this.state.job_description}
                                                                    onChange={this.onChange} />

                                                            </div>
                                                        </div>
                                                        <div className="form-group row" style={{ marginTop: "40px" }}>
                                                            <label htmlFor="example-tel-input" className="col-sm-2 col-form-label text-right">Job Category</label>
                                                            <div className="col-sm-4">
                                                                {/* <input className="form-control" type="text" placeholder="Job Category is..." id="example-tel-input"
                                                                    name="job_category"
                                                                    value={this.state.job_category}
                                                                    onChange={this.onChange}
                                                                    required /> */}

                                                                <Select
                                                                    placeholder="Select Job Category"
                                                                    options={JobCategoryies}
                                                                    onChange={this.onJobCategoryiesOptionSelected}
                                                                />
                                                            </div>
                                                            <label htmlFor="example-tel-input" className="col-sm-2 col-form-label text-right">Job Type</label>
                                                            <div className="col-sm-4">
                                                                {/* <input className="form-control" type="text" placeholder="Job Type is..."
                                                                    name="job_type"
                                                                    value={this.state.job_type}
                                                                    onChange={this.onChange}
                                                                    required /> */}

                                                                <Select
                                                                    placeholder="Select Job Type"
                                                                    options={JobType}
                                                                    onChange={this.onJobTypeOptionSelected}
                                                                />

                                                            </div>
                                                        </div>

                                                        <div className="form-group row" style={{ marginTop: "40px" }}>
                                                            <label htmlFor="example-number-input" className="col-sm-2 col-form-label text-right">Closing Date</label>
                                                            <div className="col-sm-4">
                                                                <input className="form-control" type="datetime-local" defaultValue="2011-08-19T13:45:00" id="example-datetime-local-input"
                                                                    name="closing_date"
                                                                    value={this.state.closing_date}
                                                                    onChange={this.onChange}
                                                                    required />
                                                            </div>

                                                        </div>
                                                        <div className="form-group row">
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="button-items">
                                                    <button className="btn btn-outline-success waves-effect waves-light float-right" onClick={this.onSubmit}>Create</button>
                                                    <a href="emp-job-list.html" type="button" className="btn btn-outline-warning waves-effect float-left">Cancel</a>
                                                </div>
                                            </div>
                                            {/*end card-body*/}
                                        </div>
                                        {/*end card*/}
                                    </div>
                                    {/*end col*/}
                                </div>
                                {/*end row*/}
                                <footer className="footer text-center text-sm-left">
                                    © 2021 JobBank
                                </footer>
                                {/*end footer*/}
                            </div>
                            {/* end page content */}
                        </div>
                    </div></div>
            </>
        );
    }
}
export default EmployerCreateJob;