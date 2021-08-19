import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import { toast } from "react-toastify";
import { APIURL } from "../../../components/API/environment";

const UserID = localStorage.getItem("LocalUserID");



class StudentJobList extends Component {

    constructor(props) {
        super(props);
        this.applyJob = this.applyJob.bind(this);


        this.state = {
            Jobs: [],
            AppliedJobs: [],
            ApproveStatus: "Approved",
            SProfile_status: "Student"

        }
    }

    applyJob(e,
        _id,
        closing_date,
        createdAt,
        employerID,
        employerName,
        job_category,
        job_description,
        job_title,
        job_type
    ) {

        e.preventDefault();

        window.localStorage.removeItem("ViewedJobID");
        window.localStorage.removeItem("ViewedJobclosing_date");
        window.localStorage.removeItem("ViewedJobcreatedAt");
        window.localStorage.removeItem("ViewedJobemployerID");
        window.localStorage.removeItem("ViewedJobemployerName");
        window.localStorage.removeItem("ViewedJobjob_category");
        window.localStorage.removeItem("ViewedJobjob_description");
        window.localStorage.removeItem("ViewedJobjob_title");
        window.localStorage.removeItem("ViewedJobjob_type");

        localStorage.setItem("ViewedJobID", _id)
        localStorage.setItem("ViewedJobclosing_date", closing_date)
        localStorage.setItem("ViewedJobcreatedAt", createdAt)
        localStorage.setItem("ViewedJobemployerID", employerID)
        localStorage.setItem("ViewedJobemployerName", employerName)
        localStorage.setItem("ViewedJobjob_category", job_category)
        localStorage.setItem("ViewedJobjob_description", job_description)
        localStorage.setItem("ViewedJobjob_title",job_title)
        localStorage.setItem("ViewedJobjob_type", job_type)


        window.location = "/ApplicantViewVacancy"

        // let JobData = {



        // }

        // console.log("JobData ", JobData)

        // axios.post(`${APIURL}/student/JobApply`, JobData)
        //     .then(response => {

        //         toast.success("Your job applies!");
        //         localStorage.setItem("employerName", JobData.employerName)
        //         //   window.setTimeout(function() {
        //         //     window.location.href = "/Contract";
        //         // }, 1500);

        //         // alert('Your Job is Applied!');
        //         // this.setState({
        //         //     ButtonWord:"Applied"
        //         // })
        //     })
        //     .catch(error => {
        //         console.log(error.message)
        //         alert(error.message);
        //     })

    }


    componentDidMount() {


        axios.get(`${APIURL}/vacancy/getAllJobs`)

            .then(response => {
                // console.log("Data are ", response.data.data[0].employerID);
                // console.log("Data length ", response.data.data.length);
                //   console.log("1 data ",response.data.data[0]._id);
                this.setState({ Jobs: response.data.data });
                //   console.log("Jobs ",this.state.Jobs[0]._id);
                console.log("response ", response.data.data);


            })

        ///////////////////////////////

        // axios.get(`${APIURL}/student/getAppliedJob/${UserID}`)

        // .then(responsee=> {

        //   console.log("2 data response", responsee.data.data[0].JobID);
        //   // this.setState({ AppliedJobs: responsee.data.data });
        // })

        // console.log("Jobs 5",this.state.Jobs);
        // if(this.state.Jobs == this.state.AppliedJobs){
        //   console.log("Mached")
        // }

    }

    render() {
        return (
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
                                <a href="/StudentDashboard"><i data-feather="layers" className="align-self-center menu-icon" /><span>Dashboard</span></a>
                            </li>
                            <li>
                                <a href="#"><i data-feather="layers" className="align-self-center menu-icon" /><span>Job Market</span></a>
                            </li>
                            <li>
                                <a href="/ApplicantAppliedJobList"><i data-feather="layers" className="align-self-center menu-icon" /><span>Apply Job</span></a>
                            </li>

                            <li>

                            </li>
                            <li>
                                <a href="javascript: void(0);"><i data-feather="grid" className="align-self-center menu-icon" /><span>Contract</span><span className="menu-arrow"><i className="mdi mdi-chevron-right" /></span></a>
                                <ul className="nav-second-level" aria-expanded="false">
                                    <li className="nav-item"><a className="nav-link" href="/Contract"><i className="ti-control-record" />My Contract</a></li>
                                    <li className="nav-item"><a className="nav-link" href="/student_contract_list"><i className="ti-control-record" />Contract List</a></li>
                                    {/* <li class="nav-item"><a class="nav-link" href="employee-list.html"><i
                                        class="ti-control-record"></i>Employee
                                    List</a></li> */}
                                </ul>
                            </li>
                            <li>
                                <a href="Student-create-project.html"><i data-feather="layers" className="align-self-center menu-icon" /><span>Create projects</span></a>
                            </li>
                            <li>
                                <a href="Student-scholarships.html"><i data-feather="layers" className="align-self-center menu-icon" /><span>Scholarships</span></a>
                            </li>
                            <li>
                                <a href="#"><i data-feather="layers" className="align-self-center menu-icon" /><span>Job History</span></a>
                            </li>
                            <li>
                                <a href="Student-profile.html"><i data-feather="layers" className="align-self-center menu-icon" /><span>My profile</span></a>
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
                                                <h4 className="page-title">Job Market</h4>
                                                <ol className="breadcrumb">
                                                    <li className="breadcrumb-item"><a href="javascript:void(0);">Job Bank</a></li>
                                                    {/* <li class="breadcrumb-item"><a href="javascript:void(0);">Projects</a></li> */}
                                                    <li className="breadcrumb-item active">Job Market</li>
                                                </ol>
                                            </div>
                                            {/*end col*/}
                                            <div className="col-auto align-self-center">
                                                <a href="#" className="btn btn-sm btn-outline-primary" id="Dash_Date">
                                                    <span className="day-name" id="Day_Name">Today:</span>&nbsp;
                                                    <span className id="Select_date">Jan 11</span>
                                                    <i data-feather="calendar" className="align-self-center icon-xs ml-1" />
                                                </a>
                                                <a href="#" className="btn btn-sm btn-outline-primary">
                                                    <i data-feather="download" className="align-self-center icon-xs" />
                                                </a>
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
                            <div className="row">
                                <div className="col-lg-6">
                                    <ul className="list-inline">
                                        <li className="list-inline-item">
                                            <h5 className="mt-0">Here the list of all Avalable Jobs for you. <span className="badge badge-pink"></span></h5>
                                        </li>
                                    </ul>
                                </div>
                                {/*end col*/}
                                <div className="col-lg-6 text-right">
                                    <div className="text-right">
                                        <ul className="list-inline">
                                            <li className="list-inline-item">
                                                <div className="input-group">
                                                    <input type="text" id="example-input1-group2" name="example-input1-group2" className="form-control form-control-sm" placeholder="Search" />
                                                    <span className="input-group-append">
                                                        <button type="button" className="btn btn-primary btn-sm"><i className="fas fa-search" /></button>
                                                    </span>
                                                </div>
                                            </li>
                                            <li className="list-inline-item">
                                                <button type="button" className="btn btn-primary btn-sm"><i className="fas fa-filter" /></button>
                                            </li>
                                            <li className="list-inline-item">
                                                <button type="button" className="btn btn-primary btn-sm">Add New Project</button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                {/*end col*/}
                            </div>
                            {/*end row*/}







                            <div className="row">

                                {this.state.Jobs.length > 0 && this.state.Jobs.map((item, index) => (

                                    <div className="col-lg-4" key={index} >
                                        <div className="card" style={{ height: "400px" }}>
                                            <div className="card-body">
                                                <div className="media mb-3">
                                                    <img src="assets/images/widgets/project2.jpg" alt="" className="thumb-md rounded-circle" />
                                                    <div className="media-body align-self-center text-truncate ml-3">
                                                        <h4 className="m-0 font-weight-semibold text-dark font-16">{item.job_title}</h4>
                                                        <p className="text-muted  mb-0 font-13"><span className="text-dark">Employer:
                                                        </span>{item.employerName}</p>
                                                    </div>
                                                    {/*end media-body*/}
                                                </div>
                                                <hr className="hr-dashed" />

                                                <div className="row">
                                                    <div className="col">
                                                        <div className="mt-3">

                                                            <p className="mb-0 font-weight-semibold">Job Description</p>
                                                        </div>
                                                    </div>
                                                    {/*end col*/}

                                                    {/*end col*/}
                                                </div>
                                                {/*end row*/}
                                                <div style={{ marginTop: "-10px", height: "90px" }}>
                                                    <p className="text-muted mt-4 mb-1">
                                                        {item.job_description}
                                                    </p>

                                                </div>
                                                <div className="d-flex justify-content-between" style={{ marginTop: "60px" }}>
                                                    <h6 className="font-weight-semibold">Closing Date : <span className="text-muted font-weight-normal"> {item.closing_date}</span></h6>
                                                    {/* <h6 className="font-weight-semibold">Deadline : <span className="text-muted font-weight-normal"> {item.closing_date}</span></h6> */}
                                                </div>
                                                {/*end task-box*/}
                                                <br />
                                                <div className="button-items">
                                                    <button type="button" className="btn btn-primary waves-effect waves-light btn-block"
                                                        onClick={e => this.applyJob
                                                            (
                                                                e,
                                                                item._id,
                                                                item.closing_date,
                                                                item.createdAt,
                                                                item.employerID,
                                                                item.employerName,
                                                                item.job_category,
                                                                item.job_description,
                                                                item.job_title,
                                                                item.job_type
                                                            )}><i className="mdi mdi-check-all mr-2" />View</button>

                                                </div>
                                            </div>
                                            {/*end card-body*/}
                                        </div>
                                        {/*end card*/}
                                    </div>

                                ))}

                            </div>











                            <div className="row">

                                {/*end col*/}

                                {/*end col*/}

                                {/*end col*/}
                            </div>
                            {/*end row*/}
                        </div>{/* container */}
                        <footer className="footer text-center text-sm-left">
                            © 2021
                        </footer>
                        {/*end footer*/}
                    </div>
                    {/* end page content */}
                </div>
                {/* end page-wrapper */}
            </div>
        );
    }
}
export default StudentJobList;