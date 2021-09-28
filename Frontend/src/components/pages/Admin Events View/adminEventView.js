import React, { Component } from "react";
import axios from "axios";
import { APIURL } from "../../../components/API/environment";
import Navbar from '../Adminnavibar';
import Daybar from '../DayBar';

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
        _id
    ) {
        e.preventDefault();
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
                <Navbar />
                <div className="page-wrapper">

                    <div className="page-content">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="page-title-box">
                                        <div className="row">
                                            <div className="col">
                                                <h4 className="page-title">Events</h4>
                                                <ol className="breadcrumb">
                                                    <li className="breadcrumb-item"><a href="javascript:void(0);">Job Bank</a></li>
                                                    <li className="breadcrumb-item active">events</li>
                                                </ol>
                                            </div>
                                            <Daybar />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">

                                <div className="col-lg-6 text-right">
                                    <div className="text-right">
                                        <ul className="list-inline">
                                            <li className="list-inline-item">
                                                <a href="/AdminEventReportView"> <button type="button" className="btn btn-success btn-sm" style={{ marginLeft: "1050px" }}>Genarate Report</button>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {this.state.Jobs.length > 0 && this.state.Jobs.map((item, index) => (
                                <div className="row">
                                    <div className="col-lg-4" key={index} >
                                        <div className="card" style={{ height: "250px", width: "1200px" }}>
                                            <div className="card-body">
                                                <div className="media mb-3">
                                                    <img src="assets/images/widgets/project2.jpg" alt="" className="thumb-md rounded-circle" />
                                                    <div className="media-body align-self-center text-truncate ml-3">
                                                        <h4 className="m-0 font-weight-semibold text-dark font-16">{item.eventTitle}</h4>

                                                        <button type="button" className="btn btn-warning"
                                                            style={{ marginLeft: "1000px", marginTop: "-30px" }}
                                                            onClick={e => this.navigateWithID(e, item._id)}>Edit</button>
                                                    </div>
                                                </div>
                                                <hr className="hr-dashed" style={{ marginTop: "-5px" }} />

                                                <div className="row" >
                                                    <div className="col">
                                                        <div className="mt-3">

                                                            <p className="mb-0 font-weight-semibold">Event Description</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div style={{ marginTop: "-15px", height: "90px" }}>
                                                    <p className="text-muted mt-4 mb-1">
                                                        {item.shortDescription}
                                                    </p>
                                                </div>
                                                <br />
                                                <div className="button-items" style={{ width: "500px", marginLeft: "280px", marginTop: "-50px" }}>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            <div className="row">
                            </div>
                        </div>
                        <footer className="footer text-center text-sm-left">
                            © 2021 JobBank
                        </footer>
                    </div>
                </div>
            </div>
        );
    }
}
export default AdminEventView;