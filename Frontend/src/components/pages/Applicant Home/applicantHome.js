import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import { toast } from "react-toastify";
import { APIURL } from "../../../components/API/environment";
import Navbar from '../Applicantnavibar';
import Daybar from '../DayBar';


const UserID = localStorage.getItem("LocalUserID");



class StudentJobList extends Component {

    constructor(props) {
        super(props);
        this.applyJob = this.applyJob.bind(this);
        this.search = this.search.bind(this);

        var today = new Date(),
            date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();


        this.state = {
            Jobs: [],
            ApprovedTopList: [],
            AppliedJobs: [],
            ApproveStatus: "Approved",
            SProfile_status: "Student",
            searchVal: "",
            currentDate: date

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
        localStorage.setItem("ViewedJobjob_title", job_title)
        localStorage.setItem("ViewedJobjob_type", job_type)


        window.location = "/ApplicantViewVacancy"


    }


    componentDidMount() {


        axios.get(`${APIURL}/vacancy/getAllJobs`)

            .then(response => {
                this.setState({ Jobs: response.data.data });
                console.log("All jobs response ", response.data.data);
            })


        axios.get(`${APIURL}/TopList/getApproedAllTopList`)

            .then(Approveresponse => {
                this.setState({ ApprovedTopList: Approveresponse.data.data });
                console.log("ApprovedTopList ", Approveresponse.data.data);
            })
    }

    search(e, key) {

        this.setState({ [e.target.name]: e.target.value });
        console.log("this.state.searchVal is ", this.state.searchVal);

    }

    render() {
        return (
            <div>
                <Navbar />

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
                                                <h4 className="page-title">Home</h4>
                                                <ol className="breadcrumb">
                                                    <li className="breadcrumb-item"><a href="javascript:void(0);">Job Bank</a></li>
                                                    {/* <li class="breadcrumb-item"><a href="javascript:void(0);">Projects</a></li> */}
                                                    <li className="breadcrumb-item active">Applicant Home</li>
                                                </ol>
                                            </div>
                                            {/*end col*/}
                                            <Daybar />
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


                                                    <input
                                                        name="searchVal"
                                                        value={this.state.searchVal}
                                                        onChange={this.search}
                                                        type="text" id="example-input1-group2" className="form-control form-control-sm" placeholder="Search" />



                                                    <span className="input-group-append">
                                                        <button type="button" className="btn btn-primary btn-sm"><i className="fas fa-search" /></button>
                                                    </span>
                                                </div>
                                            </li>
                                         
                                            
                                        </ul>
                                    </div>
                                </div>
                                {/*end col*/}
                            </div>
                            {/*end row*/}







                            <h1 className="page-title">Top Vacancies</h1>

                            <div className="row justify-content-center" style={{ marginTop: "40px" }}>
                                {this.state.ApprovedTopList.length > 0 && this.state.ApprovedTopList.map((item, index) => (
                                    <div className="col-md-6 col-lg-3">
                                        <div className="card report-card">
                                            <div className="card-body">
                                                <div className="row d-flex justify-content-center">
                                                    <div className="col">
                                                        <p className="text-dark mb-1 font-weight-semibold" style={{ fontSize: "20px", marginTop: "-20px" }}>
                                                            {item.job_title}
                                                        </p>
                                                        <h3 className="my-2"></h3>
                                                        <p className="mb-0 text-truncate text-muted">
                                                            <span className="text-success">

                                                                Closing Date
                                                            </span>

                                                        </p>
                                                        {item.closing_date}
                                                    </div>
                                                    <div className="col-auto align-self-center">
                                                    </div>

                                                </div>

                                            </div>
                                            {/*end card-body*/}
                                            <button type="button" className="btn btn-primary waves-effect waves-light btn-block"><i className="mdi mdi-check-all mr-2" />View</button>

                                        </div>
                                        {/*end card*/}
                                    </div>

                                ))}
                            </div>
                            {/* <hr className="hr-dashed" style={{height:"20px"}}/> */}




















                            <div className="row" style={{ marginTop: "40px" }}>

                                {this.state.Jobs.length > 0 && this.state.Jobs.map((item, index) => (

                                    <div className="col-lg-4" key={index} >
                                        <div className="card" style={{ height: "400px", width: "350px" }}>
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
                                                    {item.isOpen == 1 && (
                                                        <>

                                                            <button className="btn btn-danger waves-effect waves-light btn-block" disabled
                                                            >Closed</button>

                                                        </>
                                                    )}

                                                    {item.isOpen == 0 && (
                                                        <>

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

                                                        </>
                                                    )}


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