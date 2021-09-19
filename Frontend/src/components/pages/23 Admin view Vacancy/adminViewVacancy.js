import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import { APIURL } from "../../API/environment";
import { toast } from "react-toastify";
import Navbar from '../Adminnavibar';
import Daybar from '../DayBar';

const UserID = localStorage.getItem("LocalUserID");
// const UserID = "60f9393bf9010e001577b6ea";

class AdminViewVacancy extends Component {

  constructor(props) {
    super(props);
    this.onDelete = this.onDelete.bind(this);
    this.state = {
      Jobs: [],

    }
  }

  onDelete(e,jobID) {
    axios
        .delete(`${APIURL}/vacancy/deletejob/${jobID}`)
        .then((res) => {
            console.log("res", res);
            if (res.data.code === 200) {
                console.log("res.data.code", res.data.code);

                toast.success("Vacancy is Deleted!");


                window.setTimeout(function () {
                    window.location.reload();
                }, 2500);
            } else {
                toast.error(res.data.message);

            }
        });
}



  componentDidMount() {

    axios.get(`${APIURL}/vacancy/getAllJobs/`)

      .then(response => {

        console.log(" All jobs ", response.data.data);
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
                          <li className="breadcrumb-item"><a href="javascript:void(0);">Stablo</a></li>
                          {/* <li class="breadcrumb-item"><a href="javascript:void(0);">pages</a></li> */}
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
                              <th>Employer Name</th>
                              <th>Vacancy Name</th>
                              <th>Vacancy Description</th>
                              <th>Closing Date</th>
                              <th>Vacancy Status</th>
                              <th></th>
                            </tr>
                          </thead>
                          <tbody>






                            {this.state.Jobs.length > 0 && this.state.Jobs.map((item, index) => (



                              <tr>
                                <td>{item.employerName}</td>
                                <td>{item.job_title}</td>
                                <td>{item.job_description}</td>
                                <td>{item.closing_date}</td>
                                <td className="text-center">
                                  <div className="button-items">

                                    {item.isOpen == 0 && (
                                      <>

                                        <span className=" badge badge-soft-primary">OPEN</span>

                                      </>
                                    )}

                                    {item.isOpen == 1 && (
                                      <>

                                        <span className=" badge badge-soft-danger">ClOSE</span>

                                      </>
                                    )}

                                  </div>
                                </td>
                                <td>
                                  <button type="button" className="btn btn-danger waves-effect waves-light" style={{marginLeft:"40px"}}
                                  onClick={e => this.onDelete(e, item._id)}>Remove</button>
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
export default AdminViewVacancy;