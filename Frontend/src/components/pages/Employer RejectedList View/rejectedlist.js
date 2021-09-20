import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import { APIURL } from "../../API/environment";
import { toast } from "react-toastify";
import Navbar from '../Employernavibar';
import Daybar from '../DayBar';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const UserID = localStorage.getItem("LocalUserID");
// const UserID = "60f9393bf9010e001577b6ea";

class RejectedList extends Component {

  constructor(props) {
    super(props);
    this.navigateWithID = this.navigateWithID.bind(this);
    this.onShortList = this.onShortList.bind(this);


    this.state = {
      Jobs: [],

    }
  }



  onShortList(event, jobID) {
    event.preventDefault();

    let approve = {
        IsApprove: 0
    };

    console.log("reopen Details : ", approve);

    axios
        .put(`${APIURL}/Applicant/approveforjob/${jobID}`, approve)
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

  navigateWithID(e, jobsId) {
    window.localStorage.removeItem("JobID");
    localStorage.setItem("JobID", jobsId)

    window.location.href = "/EditAppliedVacancy";
  }



  componentDidMount() {

    axios.get(`${APIURL}/Applicant/rejectedApplication`)

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
                        <h4 className="page-title">Rejected List</h4>
                        <ol className="breadcrumb">
                          <li className="breadcrumb-item"><a href="javascript:void(0);">JobBank</a></li>
                          {/* <li class="breadcrumb-item"><a href="javascript:void(0);">pages</a></li> */}
                          <li className="breadcrumb-item active">Rejected Applications</li>
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
                <li className="list-inline-item">
                  <a href="/EmpRejectedListReport"><button type="button" className="btn btn-primary btn-sm" style={{ marginLeft: "1050px" }}
                  >Genarate Report</button></a>
                </li>
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




                        <div id="viewtable">
                          <h3 style={{ 'textAlign': 'center' }}>
                          Rejected Applications
                          </h3>
                          <table className="table  table-bordered" >
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

                
                                    

                                          <button type="button" className="btn btn-success waves-effect waves-light"
                                            onClick={e => this.onShortList(e, item._id)}>Select</button>
                            

                                   
                                  


                                    </div>
                                  </td>
                                </tr>

                              ))}








                            </tbody>
                          </table>
                        </div>
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
export default RejectedList;