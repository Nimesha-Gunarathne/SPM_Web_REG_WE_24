import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import { toast } from "react-toastify";
import { APIURL } from "../../../components/API/environment";
import Navbar from '../Employernavibar';
import Daybar from '../DayBar';

const JobID = localStorage.getItem("employerApplicationJobID");

class EmjobApplications extends Component {

    constructor(props) {
        super(props);

        this.navigateWithID = this.navigateWithID.bind(this);
        this.onShortList = this.onShortList.bind(this);
        this.onReject = this.onReject.bind(this);
        this.viewFile = this.viewFile.bind(this);
        this.onSearch = this.onSearch.bind(this);
        this.onChange = this.onChange.bind(this);
        this.state = {
            Jobs: [],
            AppliedJobs: [],
            ApproveStatus: "Approved",
            SProfile_status: "Student",
            searchname:""
        }
    }

    viewFile(fileId) {
        try {
            console.log(fileId)
            axios.get(`${APIURL}/Applicant/viewPDF/${fileId}`, {
                responseType: 'arraybuffer'
            })
                .then(response => {
                    console.log(response)
                    var file = new Blob([response.data], { type: 'application/pdf' });
                    var fileURL = URL.createObjectURL(file);
                    window.open(fileURL);
                })
                .catch(error => {
                    console.log(error.message);
                    alert(error.message)
                })

        } catch (error) {
            if (error.response && error.response.status === 400) {
                toast.error(error.data.message);
            }
        }
    }

    onShortList(event, ID) {

        event.preventDefault();

        let approve = {
            IsApprove: 1
        };

        console.log("reopen Details : ", approve);

        axios
            .put(`${APIURL}/Applicant/approveforjob/${ID}`, approve)
            .then((res) => {
                console.log("res", res);
                if (res.data.code === 200) {
                    console.log("res.data.code", res.data.code);

                    toast.success("Approved the application");


                    window.setTimeout(function () {
                        window.location.reload();
                    }, 1500);
                } else {
                    toast.error(res.data.message);
                }
            });
    }

    onReject(event, ID) {
        event.preventDefault();
        let approve = {
            IsApprove: 2
        };

        console.log("reopen Details : ", approve);
        axios
            .put(`${APIURL}/Applicant/approveforjob/${ID}`, approve)
            .then((res) => {
                console.log("res", res);
                if (res.data.code === 200) {
                    console.log("res.data.code", res.data.code);
                    toast.error("Rejected the application");
                    window.setTimeout(function () {
                        window.location.reload();
                    }, 1500);
                } else {
                    toast.error(res.data.message);
                }
            });

    }

    navigateWithID(e, eventId) {
        window.localStorage.removeItem("EventID");
        localStorage.setItem("EventID", eventId)
        window.location.href = "/AdminEditEvent";
    }

    componentDidMount() {
        axios.get(`${APIURL}/Applicant/getJobAppliedDetailsBYJOBID/${JobID}`)
            .then(response => {

                this.setState({ Jobs: response.data.data });
                console.log("response ", response.data.data);
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
    
        axios.get(`${APIURL}/Applicant/searchJob/${name}`)
    
        .then(response => {

            this.setState({ Jobs: response.data.data });
            console.log("response ", response.data.data);
        })
    
      }
    render() {
        return (
            <div>
                <Navbar />


                <div className="page-wrapper">
                    {/* Page Content*/}
                    <div className="page-content">
                        <div className="container-fluid">
                            {/* Page-Title */}
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="page-title-box">
                                        <div className="row">
                                            <div className="col">
                                                <h4 className="page-title">Appications</h4>
                                                <ol className="breadcrumb">
                                                    <li className="breadcrumb-item"><a href="javascript:void(0);">Job Bank</a></li>
                                                    <li className="breadcrumb-item active">All Applications</li>
                                                </ol>
                                            </div>
                                            {/*end col*/}
                                            <Daybar />
                                            {/*end col*/}
                                        </div>
                                        {/*end row*/}
                                        <div className="col-lg-6 text-right" style={{marginLeft:"600px"}}>
                                            <div className="text-right">
                                                <ul className="list-inline">
                                                    <li className="list-inline-item">
                                                        <div className="input-group">
                                                            <input
                                                                name="searchname"
                                                                value={this.state.searchname}
                                                                onChange={this.onChange}
                                                                type="text" id="example-input1-group2" className="form-control form-control-sm" placeholder="Search Applicant Name" />

                                                            <span className="input-group-append">
                                                                <button type="button" className="btn btn-primary btn-sm" onClick={this.onSearch} ><i className="fas fa-search" /></button>
                                                            </span>
                                                        </div>
                                                    </li>


                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    {/*end page-title-box*/}
                                </div>
                                {/*end col*/}
                            </div>
                            {/*end row*/}
                            {/* end page title end breadcrumb */}

                            <a href="/ShortListView">  <button type="button" className="btn btn-success"
                                style={{ marginLeft: "300px" }}
                            >Selected List</button>
                            </a>

                            <a href="/RejectedListView"> <button type="button" className="btn btn-danger"
                                style={{ marginLeft: "300px" }}
                            >Rejected List</button>   </a>

                            {this.state.Jobs.length > 0 && this.state.Jobs.map((item, index) => (
                                <div className="row" style={{ marginTop: "10px" }}>
                                    <div className="col-lg-4" key={index} >
                                        <div className="card" style={{ height: "250px", width: "1200px" }}>
                                            <div className="card-body">
                                                <div className="media mb-3">
                                                    <div className="media-body align-self-center text-truncate ml-3">
                                                        <h4 className="m-0 font-weight-semibold text-dark font-16">{item.Applicant_Name}</h4>

                                                    </div>
                                                    {/*end media-body*/}
                                                </div>
                                                <div className="row" >
                                                    <div className="col">
                                                        <div className="mt-3">

                                                            <p className="mb-0 font-weight-semibold">Email</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/*end row*/}
                                                <div style={{ marginTop: "-15px" }}>
                                                    <p className="text-muted mt-4 mb-1">
                                                        {item.Email}
                                                    </p>

                                                </div>

                                                <div className="row" >
                                                    <div className="col">
                                                        <div className="mt-3">

                                                            <p className="mb-0 font-weight-semibold">Contact Number</p>
                                                        </div>
                                                    </div>

                                                </div>
                                                {/*end row*/}
                                                <div style={{ marginTop: "-15px" }}>
                                                    <p className="text-muted mt-4 mb-1">
                                                        {item.Contact_Number}
                                                    </p>

                                                </div>
                                                <div className="row" style={{ marginLeft: "600px", marginTop: "-150px" }}>
                                                    <div className="col">
                                                        <div className="mt-3">

                                                            <p className="mb-0 font-weight-semibold">Short Description</p>
                                                        </div>
                                                    </div>

                                                </div>
                                                {/*end row*/}
                                                <div style={{ marginLeft: "500px", marginTop: "-10px", height: "90px", width: "590px" }}>
                                                    <p className="text-muted mt-4 mb-1">
                                                        {item.Description}
                                                    </p>

                                                </div>

                                                {/*end task-box*/}
                                                <br />

                                                {item.IsApprove == 0 && (
                                                    <>

                                                        <button type="button" className="btn btn-primary"
                                                            style={{ marginLeft: "500px", marginTop: "px" }}
                                                            onClick={e => this.viewFile(item._id)}>CV View</button>
                                                        <button type="button" className="btn btn-success"
                                                            style={{ marginLeft: "600px", marginTop: "-60px" }}
                                                            onClick={e => this.onShortList(e, item._id)}>ShortList</button>
                                                        <button type="button" className="btn btn-danger"
                                                            style={{ marginLeft: "700px", marginTop: "-100px" }}
                                                            onClick={e => this.onReject(e, item._id)}>Reject</button>

                                                    </>
                                                )}

                                                {item.IsApprove == 1 && (
                                                    <>

                                                        <button type="button" className="btn btn-primary"
                                                            style={{ marginLeft: "500px", marginTop: "px" }}
                                                            onClick={e => this.viewFile(item._id)}>CV View</button>

                                                        <button type="button" className="btn btn-danger"
                                                            style={{ marginLeft: "600px", marginTop: "-60px" }}
                                                            onClick={e => this.onReject(e, item._id)}>Reject</button>
                                                    </>
                                                )}

                                                {item.IsApprove == 2 && (
                                                    <>
                                                        <span className=" badge badge-soft-danger"
                                                            style={{ marginLeft: "600px" }}>Rejected</span>
                                                    </>
                                                )}
                                            </div>
                                            {/*end card-body*/}
                                        </div>
                                        {/*end card*/}
                                    </div>
                                </div>
                            ))}

                            <div className="row">


                            </div>
                            {/*end row*/}
                        </div>{/* container */}
                        <footer className="footer text-center text-sm-left">
                            © 2021 JobBank
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
export default EmjobApplications;