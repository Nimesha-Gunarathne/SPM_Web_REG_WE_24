import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import { APIURL } from "../../API/environment";
import { toast } from "react-toastify";
import Navbar from '../Employernavibar';

const EmployerID = localStorage.getItem("LocalEmployerID");
// const UserID = "60f9393bf9010e001577b6ea";

class EmployerCreatedJobList extends Component {

  constructor(props) {
    super(props);
    this.applyJob = this.applyJob.bind(this);
    this.navigateWithID = this.navigateWithID.bind(this);

    this.state = {
      Jobs: [],

    }
  }

  navigateWithID(e, jobsId) {
    window.localStorage.removeItem("employerEditJobID");
    localStorage.setItem("employerEditJobID", jobsId)

    window.location.href = "/employerEditJob";
  }

  applyJob(e, CID, CName, DDate, JTitle, JID, JDec, SDate) {

    e.preventDefault();


    let JobData = {

      UserID: localStorage.getItem("LocalUserID"),
      UserFirstName: localStorage.getItem("LocalUserFirstName"),
      UserLastName: localStorage.getItem("LocalUserLastName"),
      UserEmailtName: localStorage.getItem("LocalUserEmail"),
      employerID: CID,
      employerName: CName,
      Deadline_date: DDate,
      Start_date: SDate,
      JobTitle: JTitle,
      JobID: JID,
      jobDescription: JDec,
      isAprove: '2'
    }

    console.log("JobData ", JobData)
    window.location.href = "/Contract";

    // axios.post(`${APIURL}/student/JobApply`, JobData)
    //     .then(response => {

    //       toast.success("Your job applies!");
    localStorage.setItem("employerName", JobData.employerName)
    //     //   window.setTimeout(function() {
    //     //     window.location.href = "/Contract";
    //     // }, 1500);

    //       // alert('Your Job is Applied!');
    //       // this.setState({
    //       //     ButtonWord:"Applied"
    //       // })
    //     })
    //     .catch(error => {
    //       console.log(error.message)
    //       alert(error.message);
    //     })

  }

  componentDidMount() {

    axios.get(`${APIURL}/vacancy/get-jobs-by-employer-id/${EmployerID}`)

      .then(response => {

        console.log(" data getAppliedJob", response.data.data);
        this.setState({ Jobs: response.data.data });
      })
  }

  render() {
    return (
      <div>
        {/* Left Sidenav */}
        <Navbar/>
        <div className="page-wrapper">
          {/* Top Bar Start */}
          <div className="topbar">
            {/* Navbar */}
            <nav className="navbar-custom">
              <ul className="list-unstyled topbar-nav float-right mb-0">
                <li className="dropdown hide-phone">
                  <a className="nav-link dropdown-toggle arrow-none waves-light waves-effect" data-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                    <i data-feather="search" className="topbar-icon" />
                  </a>
                  <div className="dropdown-menu dropdown-menu-right dropdown-lg p-0">
                    {/* Top Search Bar */}
                    <div className="app-search-topbar">
                      <form action="#" method="get">
                        <input type="search" name="search" className="from-control top-search mb-0" placeholder="Type text..." />
                        <button type="submit"><i className="ti-search" /></button>
                      </form>
                    </div>
                  </div>
                </li>
                <li className="dropdown notification-list">
                  <a className="nav-link dropdown-toggle arrow-none waves-light waves-effect" data-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                    <i data-feather="bell" className="align-self-center topbar-icon" />
                    <span className="badge badge-danger badge-pill noti-icon-badge">2</span>
                  </a>
                  <div className="dropdown-menu dropdown-menu-right dropdown-lg pt-0">
                    <h6 className="dropdown-item-text font-15 m-0 py-3 border-bottom d-flex justify-content-between align-items-center">
                      Notifications <span className="badge badge-primary badge-pill">2</span>
                    </h6>
                    <div className="notification-menu" data-simplebar>
                      {/* item*/}
                      <a href="#" className="dropdown-item py-3">
                        <small className="float-right text-muted pl-2">2 min ago</small>
                        <div className="media">
                          <div className="avatar-md bg-soft-primary">
                            <i data-feather="shopping-cart" className="align-self-center icon-xs" />
                          </div>
                          <div className="media-body align-self-center ml-2 text-truncate">
                            <h6 className="my-0 font-weight-normal text-dark">Your order is placed</h6>
                            <small className="text-muted mb-0">Dummy text of the printing and
                              industry.</small>
                          </div>
                          {/*end media-body*/}
                        </div>
                        {/*end media*/}
                      </a>
                      {/*end-item*/}
                      {/* item*/}
                      <a href="#" className="dropdown-item py-3">
                        <small className="float-right text-muted pl-2">10 min ago</small>
                        <div className="media">
                          <div className="avatar-md bg-soft-primary">
                            <img src="assets/images/users/user-4.jpg" alt="" className="thumb-sm rounded-circle" />
                          </div>
                          <div className="media-body align-self-center ml-2 text-truncate">
                            <h6 className="my-0 font-weight-normal text-dark">Meeting with designers</h6>
                            <small className="text-muted mb-0">It is a long established fact that a
                              reader.</small>
                          </div>
                          {/*end media-body*/}
                        </div>
                        {/*end media*/}
                      </a>
                      {/*end-item*/}
                      {/* item*/}
                      <a href="#" className="dropdown-item py-3">
                        <small className="float-right text-muted pl-2">40 min ago</small>
                        <div className="media">
                          <div className="avatar-md bg-soft-primary">
                            <i data-feather="users" className="align-self-center icon-xs" />
                          </div>
                          <div className="media-body align-self-center ml-2 text-truncate">
                            <h6 className="my-0 font-weight-normal text-dark">UX 3 Task complete.</h6>
                            <small className="text-muted mb-0">Dummy text of the printing.</small>
                          </div>
                          {/*end media-body*/}
                        </div>
                        {/*end media*/}
                      </a>
                      {/*end-item*/}
                      {/* item*/}
                      <a href="#" className="dropdown-item py-3">
                        <small className="float-right text-muted pl-2">1 hr ago</small>
                        <div className="media">
                          <div className="avatar-md bg-soft-primary">
                            <img src="assets/images/users/user-5.jpg" alt="" className="thumb-sm rounded-circle" />
                          </div>
                          <div className="media-body align-self-center ml-2 text-truncate">
                            <h6 className="my-0 font-weight-normal text-dark">Your order is placed</h6>
                            <small className="text-muted mb-0">It is a long established fact that a
                              reader.</small>
                          </div>
                          {/*end media-body*/}
                        </div>
                        {/*end media*/}
                      </a>
                      {/*end-item*/}
                      {/* item*/}
                      <a href="#" className="dropdown-item py-3">
                        <small className="float-right text-muted pl-2">2 hrs ago</small>
                        <div className="media">
                          <div className="avatar-md bg-soft-primary">
                            <i data-feather="check-circle" className="align-self-center icon-xs" />
                          </div>
                          <div className="media-body align-self-center ml-2 text-truncate">
                            <h6 className="my-0 font-weight-normal text-dark">Payment Successfull</h6>
                            <small className="text-muted mb-0">Dummy text of the printing.</small>
                          </div>
                          {/*end media-body*/}
                        </div>
                        {/*end media*/}
                      </a>
                      {/*end-item*/}
                    </div>
                    {/* All*/}
                    <a href="javascript:void(0);" className="dropdown-item text-center text-primary">
                      View all <i className="fi-arrow-right" />
                    </a>
                  </div>
                </li>
                <li className="dropdown">
                  <a className="nav-link dropdown-toggle waves-effect waves-light nav-user" data-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                    <span className="ml-1 nav-user-name hidden-sm">Nick</span>
                    <img src="assets/images/users/user-5.jpg" alt="profile-user" className="rounded-circle" />
                  </a>
                  <div className="dropdown-menu dropdown-menu-right">
                    <a className="dropdown-item" href="#"><i data-feather="user" className="align-self-center icon-xs icon-dual mr-1" /> Profile</a>
                    <a className="dropdown-item" href="#"><i data-feather="settings" className="align-self-center icon-xs icon-dual mr-1" /> Settings</a>
                    <div className="dropdown-divider mb-0" />
                    <a className="dropdown-item" href="#"><i data-feather="power" className="align-self-center icon-xs icon-dual mr-1" /> Logout</a>
                  </div>
                </li>
              </ul>
              {/*end topbar-nav*/}
              <ul className="list-unstyled topbar-nav mb-0">
                <li>
                  <button className="nav-link button-menu-mobile">
                    <i data-feather="menu" className="align-self-center topbar-icon" />
                  </button>
                </li>
                <li className="creat-btn">
                  <div className="nav-link">
                    <a className=" btn btn-sm btn-soft-primary" href="#" role="button"><i className="fas fa-plus mr-2" />New Task</a>
                  </div>
                </li>
              </ul>
            </nav>
            {/* end navbar*/}
          </div>
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
                        <h4 className="page-title">Apply Jobs</h4>
                        <ol className="breadcrumb">
                          <li className="breadcrumb-item"><a href="javascript:void(0);">Stablo</a></li>
                          {/* <li class="breadcrumb-item"><a href="javascript:void(0);">pages</a></li> */}
                          <li className="breadcrumb-item active">Apply Jobs</li>
                        </ol>
                      </div>
                      {/*end col*/}
                      <div className="col-auto align-self-center">
                        <a href="#" className="btn btn-sm btn-outline-primary" id="Dash_Date">
                          <span className="day-name" id="Day_Name">Today:</span>&nbsp;
                          <span className id="Select_date">Jan 11</span>
                          <i data-feather="calendar" className="align-self-center icon-xs ml-1" />
                        </a>
                        <a href="#" className="btn btn-sm btn-outline-primary">
                          <i data-feather="download" className="align-self-center icon-xs" />
                        </a>
                      </div>
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
              <div className="row" style={{width:"1200px"}}>
                <div className="col-12">
                  <div className="card">
                    <div className="card-header">
                      {/* <h4 class="card-title">Job Requests</h4>
                                <p class="text-muted mb-0">Add toolbar column with edit and delete buttons.</p> */}
                    </div>
                    {/*end card-header*/}
                    <div className="card-body">
                      {/* <button class="btn  btn-primary mb-3" id="submit_data">Submit</button> */}
                      <div className="table-responsive">
                        <table className="table  table-bordered">
                          <thead>
                            <tr>
                              <th>Job</th>
                              <th>Description</th>
                              <th>Deadline</th>
                              <th className="text-center">Status</th>
                              {/* <th></th> */}
                            </tr>
                          </thead>
                          <tbody>






                            {this.state.Jobs.length > 0 && this.state.Jobs.map((item, index) => (



                              <tr>
                                <td>{item.job_title}</td>
                                <td>{item.job_description}</td>
                                <td>{item.closing_date}</td>
                                <td className="text-center">
                                  <div className="button-items">


                                        <button type="button" className="btn btn-warning waves-effect waves-light"
                                        onClick={e => this.navigateWithID(e, item._id)}>Edit</button>


                                    {item.IsApprove == 2 && (
                                      <>

                                        <span className=" badge badge-soft-danger">Reject</span>

                                      </>
                                    )}

                                    {item.IsApprove == 1 && (
                                      <>

                                        <span className=" badge badge-soft-success">Selected</span>

                                      </>
                                    )}
                                  </div>
                                </td>
                              </tr>

                            ))}








                          </tbody>
                        </table>
                      </div>
                      <span className="float-right">
                        {/* <button id="but_add" class="btn btn-danger">Add New Row</button> */}
                      </span>
                      {/*end table*/}
                    </div>
                    {/*end card-body*/}
                  </div>
                  {/*end card*/}
                </div> {/* end col */}
              </div>
              {/* end row */}
            </div>{/* container */}
            <footer className="footer text-center text-sm-left">
              {/* &copy; 2020 Dastyle <span class="d-none d-sm-inline-block float-right">Crafted with <i
                        class="mdi mdi-heart text-danger"></i> by Mannatthemes</span> */}
            </footer>
            {/*end footer*/}
          </div>
          {/* end page content */}
        </div>
        {/* end page-wrapper */}
        {/* jQuery  */}
        {/* App js */}


      </div>
    );
  }
}
export default EmployerCreatedJobList;