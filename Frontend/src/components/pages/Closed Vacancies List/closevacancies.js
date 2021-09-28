import React, { Component } from "react";
import axios from "axios";
import { APIURL } from "../../API/environment";
import Navbar from '../Employernavibar';
import Daybar from '../DayBar';


const EmployerID = localStorage.getItem("LocalEmployerID");

class CloseVacancies extends Component {

  constructor(props) {
    super(props);

    this.navigateWithID = this.navigateWithID.bind(this);
    this.onApplicant = this.onApplicant.bind(this);

    this.state = {
      Jobs: [],

    }
  }

  onApplicant(e, jobsId) {
    window.localStorage.removeItem("employerApplicationJobID");
    localStorage.setItem("employerApplicationJobID", jobsId)

    window.location.href = "/EmployerJobApplications";
  }

  navigateWithID(e, jobsId) {
    window.localStorage.removeItem("employerEditJobID");
    localStorage.setItem("employerEditJobID", jobsId)

    window.location.href = "/employerEditJob";
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
        <Navbar />
        <div className="page-wrapper">
          {/* Top Bar Start */}
          <div className="topbar">
            {/* Navbar */}

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
                        <h4 className="page-title">Closed Vacancies</h4>
                        <ol className="breadcrumb">
                          <li className="breadcrumb-item"><a href="javascript:void(0);">JobBank</a></li>
                          {/* <li class="breadcrumb-item"><a href="javascript:void(0);">pages</a></li> */}
                          <li className="breadcrumb-item active">Closed Vacancy List</li>
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
              <div className="row" style={{ width: "1200px" }}>
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
                              <th>Description</th>
                              <th>Deadline</th>
                              <th className="text-center">Controllers</th>
                            </tr>
                          </thead>
                          <tbody>
                            {this.state.Jobs.length > 0 && this.state.Jobs.map((item, index) => (
                              <>
                                {item.isOpen == 1 && (
                                  <tr>
                                    <td>{item.job_title}</td>
                                    <td>{item.job_description}</td>
                                    <td>{item.closing_date}</td>
                                    <td className="text-center">
                                      <div className="button-items">
                                        <a href="/EmployerCreatedJobList"><button type="button" className="btn btn-primary waves-effect waves-light"
                                          onClick={e => this.onApplicant(e, item._id)}>View Vacancy</button></a>
                                      </div>
                                    </td>
                                  </tr>
                                )}
                              </>
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
        {/* end page-wrapper */}
        {/* jQuery  */}
        {/* App js */}

      </div>
    );
  }
}
export default CloseVacancies;