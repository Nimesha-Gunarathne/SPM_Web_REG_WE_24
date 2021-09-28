import React, { Component } from "react";
import axios from "axios";
import { APIURL } from "../../API/environment";
import Navbar from '../Adminnavibar';
import Daybar from '../DayBar';

const EmployerID = localStorage.getItem("GetAddedAllJobsADMIN");

class EmployerCreatedJobList extends Component {
  constructor(props) {
    super(props);
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
                        <h4 className="page-title">Vacancies</h4>
                        <ol className="breadcrumb">
                          <li className="breadcrumb-item"><a href="javascript:void(0);">JobBank</a></li>
                          <li className="breadcrumb-item active">Vacancies</li>
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
                              <th>Vacancy Title</th>
                              <th>Description</th>
                              <th>Cloasing Date</th>
                              <th className="text-center">Vacancy status</th>
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


                                    {item.isOpen == 2 && (
                                      <>
                                        <span className=" badge badge-soft-danger">Delete</span>
                                      </>
                                    )}

                                    {item.isOpen == 0 && (
                                      <>
                                        <span className=" badge badge-soft-success">Open</span>
                                      </>
                                    )}


                                    {item.isOpen == 1 && (
                                      <>
                                        <span className=" badge badge-soft-warning">close</span>
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
        {/* end page-wrapper */}
      </div>
    );
  }
}
export default EmployerCreatedJobList;