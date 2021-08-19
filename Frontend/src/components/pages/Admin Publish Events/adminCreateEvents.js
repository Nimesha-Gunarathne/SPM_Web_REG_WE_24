import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import { toast } from "react-toastify";
import { APIURL } from "../../../components/API/environment";
import Select from "react-select";

const initialState = {
    eventTitle: "",
    companyName: "",
    shortDescription: "",
    location: "",
    closingDate: "",
    eventType: "",
    startingDate: "",
    CreatedBy:"ADMIN"
};

const EventTypes = [
    { value: "Workshops", label: "Workshops" },
    { value: "Conferences", label: "Conferences" },
    { value: "A seminar ", label: "A seminar " },
    { value: "Networking sessions", label: "Networking sessions" },

];




class AdminCreateEvent extends Component {

    constructor(props) {
        super(props);
        this.state = initialState;
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onEventTypesOptionSelected = this.onEventTypesOptionSelected.bind(this);

    }


    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onEventTypesOptionSelected(e) {
        this.state.eventType = e.label;
      }

    onSubmit(event) {
        event.preventDefault();

        let EventDetails = {
            eventTitle:this.state.eventTitle,
            companyName:this.state.companyName,
            shortDescription:this.state.shortDescription,
            location: this.state.location,
            closingDate: this.state.closingDate,
            eventType: this.state.eventType,
            startingDate:this.state.startingDate,
            CreatedBy:this.state.CreatedBy,
        };

        console.log("Event Details : ", EventDetails);

        axios
            .post(`${APIURL}/Events/create-event`, EventDetails)
            .then((res) => {
                console.log("res", res);
                if (res.data.code === 200) {
                    console.log("res.data.code", res.data.code);
                    alert(res.data.message);

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
                                                    <h4 className="page-title">Create Event</h4>
                                                    <ol className="breadcrumb">
                                                        <li className="breadcrumb-item"><a href="javascript:void(0);">Job Bank</a></li>
                                                        <li className="breadcrumb-item"><a href="javascript:void(0);">Admin</a></li>
                                                        <li className="breadcrumb-item active">New Event</li>
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
                                                <h4 className="card-title">New Event</h4>
                                                {/* <p class="text-muted mb-0">Here are examples of <code class="highlighter-rouge">.form-control</code> applied to each
                                        textual HTML5 <code class="highlighter-rouge">&lt;input&gt;</code> <code class="highlighter-rouge">type</code>.
                                    </p> */}
                                            </div>
                                            {/*end card-header*/}
                                            <div className="card-body">
                                                <div className="row">
                                                    <div className="col-lg-12">
                                                        <div className="form-group row">
                                                            <label htmlFor="example-text-input" className="col-sm-2 col-form-label text-right">Event Title</label>
                                                            <div className="col-sm-10">
                                                                <input className="form-control" type="text" placeholder="Event Title is..." id="example-text-input"
                                                                    name="eventTitle"
                                                                    value={this.state.eventTitle}
                                                                    onChange={this.onChange}
                                                                    required />
                                                            </div>
                                                        </div>

                                                        <div className="form-group row">
                                                            <label htmlFor="example-text-input" className="col-sm-2 col-form-label text-right">Company Name</label>
                                                            <div className="col-sm-10">
                                                                <input className="form-control" type="text" placeholder="Company Name is..." id="example-text-input"
                                                                    name="companyName"
                                                                    value={this.state.companyName}
                                                                    onChange={this.onChange}
                                                                    required />
                                                            </div>
                                                        </div>

                                                        <div className="form-group row" style={{ marginTop: "40px" }}>
                                                            <label htmlFor="example-email-input" className="col-sm-2 col-form-label text-right">Short Description</label>
                                                            <div className="col-sm-10">
                                                                <textarea id="textarea" className="form-control" maxLength={225} rows={3} placeholder="This textarea has a limit of 225 chars."
                                                                    name="shortDescription"
                                                                    value={this.state.shortDescription}
                                                                    onChange={this.onChange} />

                                                            </div>
                                                        </div>


                                                        <div className="form-group row">
                                                            <label htmlFor="example-text-input" className="col-sm-2 col-form-label text-right">Company Location</label>
                                                            <div className="col-sm-10">
                                                                <input className="form-control" type="text" placeholder="Company Location is..." id="example-text-input"
                                                                    name="location"
                                                                    value={this.state.location}
                                                                    onChange={this.onChange}
                                                                    required />
                                                            </div>
                                                        </div>

                                                        <div className="form-group row" style={{ marginTop: "40px" }}>
                                                            <label htmlFor="example-tel-input" className="col-sm-2 col-form-label text-right">Event Type</label>
                                                            <div className="col-sm-4">
                                                               

                                                                <Select
                                                                    placeholder="Select Job Category"
                                                                    options={EventTypes}
                                                                    onChange={this.onEventTypesOptionSelected}
                                                                />
                                                            </div>
                                                            
                                                        </div>

                                                        <div className="form-group row" style={{ marginTop: "40px" }}>
                                                            <label htmlFor="example-number-input" className="col-sm-2 col-form-label text-right">Starting date</label>
                                                            <div className="col-sm-4">
                                                                <input className="form-control" type="datetime-local" defaultValue="2011-08-19T13:45:00" id="example-datetime-local-input"
                                                                    name="startingDate"
                                                                    value={this.state.startingDate}
                                                                    onChange={this.onChange}
                                                                    required />
                                                            </div>

                                                        </div>
                                                        <div className="form-group row" style={{ marginTop: "40px" }}>
                                                            <label htmlFor="example-number-input" className="col-sm-2 col-form-label text-right">Ending date</label>
                                                            <div className="col-sm-4">
                                                                <input className="form-control" type="datetime-local" defaultValue="2011-08-19T13:45:00" id="example-datetime-local-input"
                                                                    name="closingDate"
                                                                    value={this.state.closingDate}
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
export default AdminCreateEvent;