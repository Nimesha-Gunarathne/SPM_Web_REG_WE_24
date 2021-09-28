import React, { Component } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { APIURL } from "../../../components/API/environment";
import Select from "react-select";
import Navbar from '../Adminnavibar';

const initialState = {
    eventTitle: "",
    companyName: "",
    shortDescription: "",
    location: "",
    closingDate: "",
    eventType: "",
    startingDate: "",
    CreatedBy: "ADMIN",
    jobID: ""
};

const EventTypes = [
    { value: "Workshops", label: "Workshops" },
    { value: "Conferences", label: "Conferences" },
    { value: "A seminar ", label: "A seminar " },
    { value: "Networking sessions", label: "Networking sessions" },
];


const EventId = localStorage.getItem("EventID");

class AdminCreateEvent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            initialState,
            events: []
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onEventTypesOptionSelected = this.onEventTypesOptionSelected.bind(this);
        this.onDelete = this.onDelete.bind(this);
    }

    onDelete() {

        const EventID = this.state.jobID
        axios.delete(`${APIURL}/Events/delete-event/${EventID}`)
            .then((res) => {
                console.log("res", res);
                if (res.data.code === 200) {
                    console.log("res.data.code", res.data.code);
                    alert(res.data.message);
                    window.location = ("/AdminEventView")
                } else {
                    toast.error(res.data.message);
                    alert(res.data.message);
                }
            });

    }

    componentDidMount() {

        axios.get(`${APIURL}/Events/getEventByid/${EventId}`)
            .then(response => {
                this.setState({ events: response.data.data });
                console.log("response ", response.data.data);

                this.setState({ eventTitle: this.state.events.eventTitle });
                this.setState({ companyName: this.state.events.companyName });
                this.setState({ shortDescription: this.state.events.shortDescription });

                this.setState({ location: this.state.events.location });
                this.setState({ eventType: this.state.events.eventType });
                this.setState({ startingDate: this.state.events.startingDate });
                this.setState({ closingDate: this.state.events.closingDate });

                this.setState({ jobID: this.state.events._id });

            })

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
            eventTitle: this.state.eventTitle,
            companyName: this.state.companyName,
            shortDescription: this.state.shortDescription,
            location: this.state.location,
            closingDate: this.state.closingDate,
            eventType: this.state.eventType,
            startingDate: this.state.startingDate,
            CreatedBy: this.state.CreatedBy,
        };

        console.log("Event Details : ", EventDetails);
        const EventID = this.state.jobID
        axios.put(`${APIURL}/Events/update-event/${EventID}`, EventDetails)
            .then((res) => {
                console.log("res", res);
                if (res.data.code === 200) {
                    console.log("res.data.code", res.data.code);
                    alert(res.data.message);

                    window.location.reload();

                } else {
                    toast.error(res.data.message);
                    alert(res.data.message);

                }
            });
        console.log("OUT");
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
                                                    <h4 className="page-title">Create Event</h4>
                                                    <ol className="breadcrumb">
                                                        <li className="breadcrumb-item"><a href="javascript:void(0);">Job Bank</a></li>
                                                        <li className="breadcrumb-item"><a href="javascript:void(0);">Admin</a></li>
                                                        <li className="breadcrumb-item active">Edit Event</li>
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
                                                <h4 className="card-title">Edit Event</h4>

                                            </div>
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
                                                                    placeholder="Select Event Type"
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
                                                                <label htmlFor="example-number-input" className="col-sm-12 col-form-label text-right">{this.state.startingDate}</label>
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
                                                                <label htmlFor="example-number-input" className="col-sm-12 col-form-label text-right">{this.state.closingDate}</label>
                                                            </div>

                                                        </div>
                                                        <div className="form-group row">
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="button-items">
                                                    <button className="btn btn-outline-success waves-effect waves-light float-right" onClick={this.onSubmit}>Update</button>
                                                    <button className="btn btn-outline-danger waves-effect waves-light float-left" onClick={this.onDelete}>Delete</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <footer className="footer text-center text-sm-left">
                                    © 2021 JobBank
                                </footer>
                            </div>
                        </div>
                    </div></div>
            </>
        );
    }
}
export default AdminCreateEvent;