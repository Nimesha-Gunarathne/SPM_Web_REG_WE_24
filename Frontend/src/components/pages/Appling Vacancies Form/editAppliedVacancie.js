import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import { toast } from "react-toastify";
import { APIURL } from "../../API/environment";
import Select from "react-select";
import Navbar from '../Applicantnavibar';


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
        this.state = {
            initialState,
            jobs: []
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onJobCategoryiesOptionSelected = this.onJobCategoryiesOptionSelected.bind(this);
        this.onJobTypeOptionSelected = this.onJobTypeOptionSelected.bind(this);

    }


    componentDidMount() {

        console.log("JobID", JOBId)
        axios.get(`${APIURL}/Applicant/getAppliedJobByJobID/${JOBId}`)

            .then(response => {

                this.setState({ jobs: response.data.data });
                console.log("response ", response.data.data);

                this.setState({ Applicant_Name: this.state.jobs.Applicant_Name });
                this.setState({ Email: this.state.jobs.Email });
                this.setState({ Contact_Number: this.state.jobs.Contact_Number });

                this.setState({ Description: this.state.jobs.Description });
                this.setState({ CV_Link: this.state.jobs.CV_Link });

                this.setState({ jobID: this.state.jobs._id });
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
                    <Navbar />
                    <div className="page-wrapper">
                        <div className="topbar">
                        </div>
                        <div className="page-content" style={{ width: "1250px" }}>

                            <div className="container-fluid">
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
                                        </div>
                                    </div>
                                </div>
                                <div className="row" style={{ marginTop: "60px" }}>
                                    <div className="col-lg-12">
                                        <div className="card">
                                            <div className="card-header">
                                                <h4 className="card-title">{localStorage.getItem("ViewedJobjob_title")}</h4>
                                            </div>
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
                                        </div>
                                    </div>
                                </div>
                                <footer className="footer text-center text-sm-left">
                                    ?? 2021 JobBank
                                </footer>
                            </div>
                        </div>
                    </div></div>
            </>
        );
    }
}
export default editApplyedVacancie;