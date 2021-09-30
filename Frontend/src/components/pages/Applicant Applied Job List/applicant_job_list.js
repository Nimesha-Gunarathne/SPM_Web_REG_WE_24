import React, { Component } from "react";
import axios from "axios";
import { APIURL } from "../../API/environment";
import { toast } from "react-toastify";
import Navbar from '../Applicantnavibar';
import Daybar from '../DayBar';

const UserID = localStorage.getItem("LocalUserID");

class StudentJobList extends Component {

  constructor(props) {
    super(props);
    this.applyJob = this.applyJob.bind(this);
    this.navigateWithID = this.navigateWithID.bind(this);
    this.RollBack = this.RollBack.bind(this);

    this.state = {
      Jobs: [],

    }
  }

  RollBack(e, jobID) {
    console.log(jobID)

    axios.delete(`${APIURL}/Applicant/deleteappliedJob/${jobID}`)

      .then((res) => {
        console.log("res", res);
        if (res.data.code === 200) {
          console.log("res.data.code", res.data.code);

          toast.error("Applied Job is Deleted!");


          window.setTimeout(function () {
            window.location.reload();
          }, 1500);
        } else {
          toast.error(res.data.message);

        }
      });
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

          <div className="page-content">
            <div className="container-fluid">

              <div className="row" style={{ width: "1200px" }}>
                <div className="col-sm-12">
                  <div className="page-title-box">
                    <div className="row">
                      <div className="col">
                        <h4 className="page-title">Applied Job List</h4>
                        <ol className="breadcrumb">
                          <li className="breadcrumb-item"><a href="javascript:void(0);">JobBank</a></li>
                          <li className="breadcrumb-item active">Apply Jobs</li>
                        </ol>
                      </div>
                      <Daybar />
                    </div>
                  </div>
                </div>

              </div>
              <div className="row">
                <li className="list-inline-item">
                  <a href="/ApplicantReport"><button type="button" className="btn btn-success btn-sm" style={{ marginLeft: "1050px" }}
                  >Genarate Report</button></a>
                </li>
                <div className="col-12">
                  <div className="card">
                    <div className="card-header">
                    </div>
                    <div className="card-body">
                      <div className="table-responsive">
                        <div id="viewtable">
                          <h3 style={{ 'textAlign': 'center' }}>
                            Applied Job List
                          </h3>
                          <table className="table  table-bordered" >
                            <thead>
                              <tr>
                                <th>Job</th>
                                <th>Company</th>
                                <th>Description</th>
                                <th>Deadline</th>
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
                                          <button type="button" className="btn btn-warning waves-effect waves-light"
                                            onClick={e => this.navigateWithID(e, item._id)}>Edit</button>
                                          <button type="button" className="btn btn-danger waves-effect waves-light"
                                            onClick={e => this.RollBack(e, item._id)}>Roll Back</button>
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
                      </div>
                      <span className="float-right">

                      </span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <footer className="footer text-center text-sm-left">
            </footer>
          </div>
        </div>
      </div>
    );
  }
}
export default StudentJobList;