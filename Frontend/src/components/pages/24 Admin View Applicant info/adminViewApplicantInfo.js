import React, { Component } from "react";
import axios from "axios";
import { APIURL } from "../../API/environment";
import Navbar from '../Adminnavibar';
import Daybar from '../DayBar';

const UserID = localStorage.getItem("GetAppliedJobsADMIN");

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

    localStorage.setItem("employerName", JobData.employerName)
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
        <Navbar />

        <div className="page-wrapper">
          {/* Page Content*/}
          <div className="page-content">
            <div className="container-fluid">
              {/* Page-Title */}
              <div className="row" style={{ width: "1200px" }}>
                <div className="col-sm-12">
                  <div className="page-title-box">
                    <div className="row">
                      <div className="col">
                        <h4 className="page-title">Apply Jobs</h4>
                        <ol className="breadcrumb">
                          <li className="breadcrumb-item"><a href="javascript:void(0);">JobBank</a></li>
                          <li className="breadcrumb-item active">Apply Jobs</li>
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
                <div className="col-12">
                  <div className="card">
                    <div className="card-header">
                    </div>
                    {/*end card-header*/}
                    <div className="card-body">
                      <div className="table-responsive">
                        <table className="table  table-bordered">
                          <thead>
                            <tr>
                              <th>Vacancy</th>
                              <th>Company</th>
                              <th>Description</th>
                              <th>Cloasing Date</th>
                              <th className="text-center">Status</th>
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
            </footer>
            {/*end footer*/}
          </div>
          {/* end page content */}
        </div>
      </div>
    );
  }
}
export default StudentJobList;