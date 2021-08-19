import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import { toast } from "react-toastify";
import { APIURL } from "../../../components/API/environment";

const UserID = localStorage.getItem("LocalUserID");



class AdminEventView extends Component {

    constructor(props) {
        super(props);
        this.applyJob = this.applyJob.bind(this); 
        this.navigateWithID = this.navigateWithID.bind(this); 


        this.state = {
            Jobs: [],
            AppliedJobs: [],
            ApproveStatus: "Approved",
            SProfile_status: "Student"

        }
    }

    navigateWithID(e, eventId) {
        window.localStorage.removeItem("EventID");
        localStorage.setItem("EventID", eventId)

        window.location.href = "/AdminEditEvent";
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

        


        // window.location = "/ApplicantViewVacancy"

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


        axios.get(`${APIURL}/Events/getAllEvents`)

            .then(response => {
   
                this.setState({ Jobs: response.data.data });
              
                console.log("response ", response.data.data);


            })


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
                                <a href="/StudentJobMarket"><i data-feather="layers" className="align-self-center menu-icon" /><span>Job Market</span></a>
                            </li>
                            <li>
                                <a href="/StudentJobList"><i data-feather="layers" className="align-self-center menu-icon" /><span>Apply Job</span></a>
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
                                
                                {/*end col*/}
                                <div className="col-lg-6 text-right">
                                    <div className="text-right">
                                        <ul className="list-inline">
                                          
                                            
                                            <li className="list-inline-item">
                                                <button type="button" className="btn btn-success btn-sm" style={{marginLeft:"1050px"}}>Genarate Report</button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                {/*end col*/}
                            </div>
                            {/*end row*/}







                            {/* <div className="row"> */}

                            {this.state.Jobs.length > 0 && this.state.Jobs.map((item, index) => (
                                <div className="row">
                                    <div className="col-lg-4" key={index} >
                                        <div className="card" style={{ height: "250px", width: "1200px"}}>
                                            <div className="card-body">
                                                <div className="media mb-3">
                                                    <img src="assets/images/widgets/project2.jpg" alt="" className="thumb-md rounded-circle" />
                                                    <div className="media-body align-self-center text-truncate ml-3">
                                                        <h4 className="m-0 font-weight-semibold text-dark font-16">{item.eventTitle}</h4>
                                                       
                                                        <button type="button" className="btn btn-warning" 
                                                        style={{marginLeft:"1000px",marginTop:"-30px"}}
                                                        onClick={e => this.navigateWithID(e, item._id)}>Edit</button>
                                                    </div>
                                                    {/*end media-body*/}
                                                </div>
                                                <hr className="hr-dashed" style={{marginTop:"-5px"}}/>

                                                <div className="row" >
                                                    <div className="col">
                                                        <div className="mt-3">

                                                            <p className="mb-0 font-weight-semibold">Job Description</p>
                                                        </div>
                                                    </div>
                                                    {/*end col*/}

                                                    {/*end col*/}
                                                </div>
                                                {/*end row*/}
                                                <div style={{ marginTop: "-15px", height: "90px" }}>
                                                    <p className="text-muted mt-4 mb-1">
                                                        {item.shortDescription}
                                                    </p>

                                                </div>
                                                
                                                {/*end task-box*/}
                                                <br />
                                                <div className="button-items" style={{width:"500px",marginLeft:"280px" ,marginTop:"-50px"}}>
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
                                </div>
                            ))}













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
export default AdminEventView;