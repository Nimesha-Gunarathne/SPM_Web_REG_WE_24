import React, { Component } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { APIURL } from "../../API/environment";
import Navbar from '../Applicantnavibar';

const _id = localStorage.getItem("ViewedJobID")
const closing_date = localStorage.getItem("ViewedJobclosing_date")
const createdAt = localStorage.getItem("ViewedJobcreatedAt")
const employerID = localStorage.getItem("ViewedJobemployerID")
const employerName = localStorage.getItem("ViewedJobemployerName")
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
                    <Navbar />
                    <div className="page-wrapper">
                        <div className="page-content">
                            <div className="container-fluid">
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
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row" style={{ width: "1200px" }}>

                                    <div className="col-lg-12">
                                        <div className="card" style={{ marginTop: "50px" }}>
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
                                                                <p className="card-text" style={{ marginTop: "-12px" }}>{job_title}</p>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <h6 className="card-subtitle mb-2 text-muted" style={{ marginTop: "12px" }}>Employer</h6>
                                                            </td>
                                                            <td>
                                                                <p className="card-text" style={{ marginTop: "5px" }}>{employerName}</p>
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
                                                                <h6 className="card-subtitle mb-2 text-muted" style={{ marginTop: "12px" }}>Job Category </h6>
                                                            </td>
                                                            <td>
                                                                <p className="card-text" style={{ marginTop: "5px" }}>{job_category}</p>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <h6 className="card-subtitle mb-2 text-muted" style={{ marginTop: "12px" }}>Job Type </h6>
                                                            </td>
                                                            <td>
                                                                <p className="card-text" style={{ marginTop: "5px" }}>{job_type}</p>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <h6 className="card-subtitle mb-2 text-muted" style={{ marginTop: "12px" }}>Closing Date </h6>
                                                            </td>
                                                            <td>
                                                                <p className="card-text" style={{ marginTop: "5px" }}>{closing_date}</p>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <h6 className="card-subtitle mb-2 text-muted" style={{ marginTop: "12px" }}>Job Published</h6>
                                                            </td>
                                                            <td>
                                                                <p className="card-text" style={{ marginTop: "5px" }}>{createdAt}</p>
                                                            </td>
                                                        </tr>

                                                    </tbody>
                                                </table>
                                                <a href="/ApplyForJobForm" className="btn btn-success btn-block">Apply</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <footer className="footer text-center text-sm-left">
                                © 2020 Job Bank
                            </footer>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default ViewVacancy;
