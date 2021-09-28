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
        this.onSearch = this.onSearch.bind(this);
        this.onChange = this.onChange.bind(this);

        var today = new Date(),
            date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();


        this.state = {
            Jobs: [],
            ApprovedTopList: [],
            AppliedJobs: [],
            ApproveStatus: "Approved",
            SProfile_status: "Student",
            searchVal: "",
            currentDate: date,
            searchname: ""

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

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
        console.log("jobs", this.state.searchname)
    }

    onSearch(event) {
        event.preventDefault();
        const name = this.state.searchname;
        console.log("name", name)

        axios.get(`${APIURL}/vacancy/Searchjob/${name}`)

            .then(response => {
                this.setState({ Jobs: response.data.data });
                console.log("All jobs response ", response.data.data);
            })

    }

    render() {
        return (
            <div>
                <Navbar />

                <div className="page-wrapper">

                    <div className="page-content">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="page-title-box">
                                        <div className="row">
                                            <div className="col">
                                                <h4 className="page-title">Home</h4>
                                                <ol className="breadcrumb">
                                                    <li className="breadcrumb-item"><a href="javascript:void(0);">Job Bank</a></li>
                                                    <li className="breadcrumb-item active">Applicant Home</li>
                                                </ol>
                                            </div>
                                            <Daybar />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-6">
                                    <ul className="list-inline">
                                        <li className="list-inline-item">
                                            <h5 className="mt-0">Here the list of all Avalable Jobs for you. <span className="badge badge-pink"></span></h5>
                                        </li>
                                    </ul>
                                </div>

                                <div className="col-lg-6 text-right">
                                    <div className="text-right">
                                        <ul className="list-inline">
                                            <li className="list-inline-item">
                                                <div className="input-group">
                                                    <input
                                                        name="searchname"
                                                        value={this.state.searchname}
                                                        onChange={this.onChange}
                                                        type="text" id="example-input1-group2" className="form-control form-control-sm" placeholder="Search Job Name" />

                                                    <span className="input-group-append">
                                                        <button type="button" className="btn btn-primary btn-sm" onClick={this.onSearch} ><i className="fas fa-search" /></button>
                                                    </span>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                            </div>

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
                                            {/* <button type="button" className="btn btn-primary waves-effect waves-light btn-block"><i className="mdi mdi-check-all mr-2" />View</button> */}
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
                                ))}
                            </div>

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

                                                </div>
                                                <hr className="hr-dashed" />

                                                <div className="row">
                                                    <div className="col">
                                                        <div className="mt-3">

                                                            <p className="mb-0 font-weight-semibold">Job Description</p>
                                                        </div>
                                                    </div>



                                                </div>

                                                <div style={{ marginTop: "-10px", height: "90px" }}>
                                                    <p className="text-muted mt-4 mb-1">
                                                        {item.job_description}
                                                    </p>

                                                </div>
                                                <div className="d-flex justify-content-between" style={{ marginTop: "60px" }}>
                                                    <h6 className="font-weight-semibold">Closing Date : <span className="text-muted font-weight-normal"> {item.closing_date}</span></h6>

                                                </div>

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

                                        </div>

                                    </div>

                                ))}

                            </div>
                            <div className="row">
                            </div>
                        </div>
                        <footer className="footer text-center text-sm-left">
                            © 2021
                        </footer>
                    </div>
                </div>
            </div>
        );
    }
}
export default StudentJobList;