import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import { APIURL } from "../../API/environment";
import { toast } from "react-toastify";
import Navbar from '../Adminnavibar';
import Daybar from '../DayBar';

const UserID = localStorage.getItem("GetAppliedJobsADMIN");
// const UserID = "60f9393bf9010e001577b6ea";

class StudentJobList extends Component {

  constructor(props) {
    super(props);
    this.applyJob = this.applyJob.bind(this);
    this.navigateWithID = this.navigateWithID.bind(this);

    this.state = {
      Jobs: [],

    }
  }

  navigateWithID(e, jobsId) {
    window.localStorage.removeItem("JobID");
    localStorage.setItem("JobID", jobsId)

    window.location.href = "/EditAppliedVacancy";
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

    axios.get(`${APIURL}/Applicant/getAppliedJob/${UserID}`)

      .then(response => {

        console.log(" data getAppliedJob", response.data.data);
        this.setState({ Jobs: response.data.data });
      })
  }

  render() {
    return (
      <div>
       <Navbar/>
        
        <div className="page-wrapper">
          {/* Page Content*/}
          <div className="page-content">
            <div className="container-fluid">
              {/* Page-Title */}
              <div className="row" style={{width:"1200px"}}>
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
                     <Daybar/>
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
                              <th>Company</th>
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
                                <td>{item.JobemployerName}</td>
                                <td>{item.job_description}</td>
                                <td>{item.Jobclosing_date}</td>
                                <td className="text-center">
                                  <div className="button-items">


                                    {/* {item.IsApprove == 1 && (

                                      <a href="/Contract">
                                        <button type="button"
                                          className="btn btn-success waves-effect waves-light"
                                          onClick={e => this.applyJob(e, item.employerID, item.employerName, item.Deadline_date, item.JobTitle, item._id, item.jobDescription,item.Start_date)}
                                        >
                                          Create Contract
                                        </button>
                                      </a>
                                    )}

                                      {item.IsApprove == 2 && (
                                        <button type="button" className="btn btn-danger waves-effect waves-light">Delete</button>
                                    )} */}

                                    {item.IsApprove == 0 && (
                                      <>

                                        <span className=" badge badge-soft-warning">Pending</span>

                                      </>
                                    )}

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
export default StudentJobList;