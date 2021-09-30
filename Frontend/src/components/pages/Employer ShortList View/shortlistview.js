import React, { Component } from "react";
import axios from "axios";
import { APIURL } from "../../API/environment";
import { toast } from "react-toastify";
import Navbar from '../Employernavibar';
import Daybar from '../DayBar';

const JobID = localStorage.getItem("employerApplicationJobID");

class ShortListView extends Component {

  constructor(props) {
    super(props);
    this.onReject = this.onReject.bind(this);
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

  onReject(event, jobsId) {
    event.preventDefault();

    let approve = {
      IsApprove: 2
    };

    console.log("reopen Details : ", approve);

    axios
      .put(`${APIURL}/Applicant/approveforjob/${jobsId}`, approve)
      .then((res) => {
        console.log("res", res);
        if (res.data.code === 200) {
          console.log("res.data.code", res.data.code);
          toast.error("Reject the application");
          window.setTimeout(function () {
            window.location.reload();
          }, 1500);
        } else {
          toast.error(res.data.message);

        }
      });
  }

  componentDidMount() {

    axios.get(`${APIURL}/Applicant/getJobAppliedDetailsBYJOBID/${JobID}`)

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
                        <h4 className="page-title">ShortList</h4>
                        <ol className="breadcrumb">
                          <li className="breadcrumb-item"><a href="javascript:void(0);">JobBank</a></li>
                          <li className="breadcrumb-item active">Approved Applications</li>
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
                  <a href="/EmpShortListReport"><button type="button" className="btn btn-primary btn-sm" style={{ marginLeft: "1050px" }}
                  >Genarate Report</button></a>
                </li>
                <div className="col-12" style={{ marginTop: "10px" }}>
                  <div className="card">
                    <div className="card-header">
                    </div>
                    {/*end card-header*/}
                    <div className="card-body">
                      <div className="table-responsive">

                        <div id="viewtable">
                          <h3 style={{ 'textAlign': 'center' }}>
                            Approved Applications
                          </h3>
                          <table className="table  table-bordered" >
                            <thead>
                              <tr>
                                <th>Vacancy</th>
                                <th>Applicant Name</th>
                                <th>Description</th>
                                <th>Email</th>
                                <th className="text-center">Status</th>
                              </tr>
                            </thead>
                            <tbody>

                              {this.state.Jobs.length > 0 && this.state.Jobs.map((item, index) => (

                                <>
                                  {item.IsApprove == 1 && (
                                    <tr>
                                      <td>{item.job_title}</td>
                                      <td>{item.Applicant_Name}</td>
                                      <td>{item.Description}</td>
                                      <td>{item.Email}</td>
                                      <td className="text-center">
                                        <div className="button-items">

                                          <button type="button" className="btn btn-danger waves-effect waves-light"
                                            onClick={e => this.onReject(e, item._id)}>Reject</button>

                                        </div>
                                      </td>
                                    </tr>
                                  )}
                                </>
                              ))}
                            </tbody>
                          </table>
                        </div>
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
export default ShortListView;