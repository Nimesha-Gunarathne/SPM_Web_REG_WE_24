import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import { toast } from "react-toastify";
import { APIURL } from "../../API/environment";
import Select from "react-select";

const initialState = {
    Applicant_Name: "",
    Email: "",
    Contact_Number: "",
    Description: "",
    CV_Link: "",

};

const JOBId = localStorage.getItem("JobID");


class editApplyedVacancie extends Component {

    constructor(props) {
        super(props);
        this.state =  {
            initialState,
            jobs:[]
          };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onJobCategoryiesOptionSelected = this.onJobCategoryiesOptionSelected.bind(this);
        this.onJobTypeOptionSelected = this.onJobTypeOptionSelected.bind(this);

    }

    
    componentDidMount() {

        console.log("JobID",JOBId)
        axios.get(`${APIURL}/Applicant/getAppliedJobByJobID/${JOBId}`)

            .then(response => {
   
                this.setState({ jobs: response.data.data }); 
                console.log("response ", response.data.data);

                this.setState({ Applicant_Name: this.state.jobs.Applicant_Name });
                this.setState({ Email: this.state.jobs.Email});
                this.setState({ Contact_Number: this.state.jobs.Contact_Number });

                this.setState({ Description: this.state.jobs.job_description});
                this.setState({ CV_Link: this.state.jobs.CV_Link });

                this.setState({ jobID: this.state.jobs._id});

                

            })


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

            Applicant_Name: this.state.Applicant_Name,
            Email: this.state.Email,
            Contact_Number: this.state.Contact_Number,
            Description: this.state.Description,
            CV_Link: this.state.CV_Link,

            // JobId: localStorage.getItem("ViewedJobID"),
            // Jobclosing_date:localStorage.getItem("ViewedJobclosing_date"),
            // JobcreatedAt:localStorage.getItem("ViewedJobcreatedAt"),
            // JobemployerID:localStorage.getItem("ViewedJobemployerID"),
            // JobemployerName:localStorage.getItem("ViewedJobemployerName"),
            // job_category:localStorage.getItem("ViewedJobjob_category"),
            // job_description:localStorage.getItem("ViewedJobjob_description"),
            // job_title:localStorage.getItem("ViewedJobjob_title"),
            // job_type:localStorage.getItem("ViewedJobjob_type"),

            // UserID:localStorage.getItem("LocalUserID"),
            // IsApprove:0
        };

        console.log("Job Details : ", JobDetails);
        console.log("JOBId : ", JOBId);


        axios
            .put(`${APIURL}/Applicant/update-appliedJob/${JOBId}`, JobDetails)
            .then((res) => {
                console.log("res", res);
                if (res.status === 200) {
                    console.log("res.data.code", res.data.code);
                    alert("Details are Updated!");
                    window.location.reload();
                    // toast.success(res.data.message);
                    // window.setTimeout(function () {
                    //     window.location.href = "/applicantHome";
                    // }, 400);
                    //   window.location.href = "/login";
                } else {
                    toast.error(res.data.message);
                    alert(res.data.message);

                }
                console.log("OUT");

            });

            console.log("OUT2");


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
                                                    <h4 className="page-title"> Apply for vacancies</h4>
                                                    <ol className="breadcrumb">
                                                        <li className="breadcrumb-item"><a href="javascript:void(0);">Job Bank</a></li>
                                                        <li className="breadcrumb-item"><a href="javascript:void(0);">Jobs</a></li>
                                                        <li className="breadcrumb-item active">Apply</li>
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
                                                <h4 className="card-title">{localStorage.getItem("ViewedJobjob_title")}</h4>

                                                {/* <p class="text-muted mb-0">Here are examples of <code class="highlighter-rouge">.form-control</code> applied to each
                                        textual HTML5 <code class="highlighter-rouge">&lt;input&gt;</code> <code class="highlighter-rouge">type</code>.
                                    </p> */}
                                            </div>
                                            {/*end card-header*/}
                                            <div className="card-body">
                                                <div className="row">
                                                    <div className="col-lg-12">
                                                        <div className="form-group row">
                                                            <label htmlFor="example-text-input" className="col-sm-2 col-form-label text-right">Applicant Name</label>
                                                            <div className="col-sm-10">
                                                                <input className="form-control" type="text" placeholder="Your Name is..." id="example-text-input"
                                                                    name="Applicant_Name"
                                                                    value={this.state.Applicant_Name}
                                                                    onChange={this.onChange}
                                                                    required />
                                                            </div>
                                                        </div>
                                                        <div className="form-group row">
                                                            <label htmlFor="example-text-input" className="col-sm-2 col-form-label text-right">Email</label>
                                                            <div className="col-sm-10">
                                                                <input className="form-control" type="email" placeholder="example@gmail.com" id="example-text-input"
                                                                    name="Email"
                                                                    value={this.state.Email}
                                                                    onChange={this.onChange}
                                                                    required />
                                                            </div>
                                                        </div>

                                                        <div className="form-group row">
                                                            <label htmlFor="example-text-input" className="col-sm-2 col-form-label text-right">Contact Number</label>
                                                            <div className="col-sm-10">
                                                                <input className="form-control" type="text" placeholder="07x xxxx xxx" id="example-text-input"
                                                                    name="Contact_Number"
                                                                    value={this.state.Contact_Number}
                                                                    onChange={this.onChange}
                                                                    required />
                                                            </div>
                                                        </div>

                                                        <div className="form-group row" style={{ marginTop: "40px" }}>
                                                            <label htmlFor="example-email-input" className="col-sm-2 col-form-label text-right">Short Description</label>
                                                            <div className="col-sm-10">
                                                                <textarea id="textarea" className="form-control" maxLength={225} rows={3} placeholder=""
                                                                    name="Description"
                                                                    value={this.state.Description}
                                                                    onChange={this.onChange} />

                                                            </div>
                                                        </div>
                                                        <div className="form-group row" style={{ marginTop: "40px" }}>
                                                            <label htmlFor="example-tel-input" className="col-sm-2 col-form-label text-right">Upload CV</label>
                                                            <div className="col-sm-4">
                                                                <input className="form-control" type="text" placeholder="Select Your CV" id="example-tel-input"
                                                                    name="CV_Link"
                                                                    value={this.state.CV_Link}
                                                                    onChange={this.onChange}

                                                                />
                                                            </div>

                                                            <div className="col-sm-4">
                                                                <button className="btn btn-outline-success waves-effect waves-light float-right"
                                                                >Upload</button>


                                                            </div>
                                                        </div>


                                                        <div className="form-group row">
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="button-items">
                                                    <button className="btn btn-outline-success waves-effect waves-light float-right" onClick={this.onSubmit}>Update Application</button>
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
export default editApplyedVacancie;