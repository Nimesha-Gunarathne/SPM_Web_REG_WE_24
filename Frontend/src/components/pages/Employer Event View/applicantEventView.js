import React, { Component } from "react";
import axios from "axios";
import { APIURL } from "../../../components/API/environment";
import Navbar from '../Employernavibar';
import Daybar from '../DayBar';

const UserID = localStorage.getItem("LocalUserID");

class ApplicantEventView extends Component {

    constructor(props) {
        super(props);

        this.state = {
            Jobs: [],
            AppliedJobs: [],
            ApproveStatus: "Approved",
            SProfile_status: "Student"
        }
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
                                                <h4 className="page-title">Events</h4>
                                                <ol className="breadcrumb">
                                                    <li className="breadcrumb-item"><a href="javascript:void(0);">Job Bank</a></li>
                                                    <li className="breadcrumb-item active">Events List</li>
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

                                {/*end col*/}
                                <div className="col-lg-6 text-right">
                                    <div className="text-right">
                                        <ul className="list-inline">

                                        </ul>
                                    </div>
                                </div>
                                {/*end col*/}
                            </div>
                            {/*end row*/}
                            {this.state.Jobs.length > 0 && this.state.Jobs.map((item, index) => (
                                <div className="row">
                                    <div className="col-lg-4" key={index} >
                                        <div className="card" style={{ height: "250px", width: "1200px" }}>
                                            <div className="card-body">
                                                <div className="media mb-3">
                                                    <img src="assets/images/widgets/project2.jpg" alt="" className="thumb-md rounded-circle" />
                                                    <div className="media-body align-self-center text-truncate ml-3">
                                                        <h4 className="m-0 font-weight-semibold text-dark font-16">{item.eventTitle}</h4>
                                                    </div>
                                                    {/*end media-body*/}
                                                </div>
                                                <hr className="hr-dashed" style={{ marginTop: "-5px" }} />

                                                <div className="row" >
                                                    <div className="col">
                                                        <div className="mt-3">

                                                            <p className="mb-0 font-weight-semibold">Event Description</p>
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
export default ApplicantEventView;