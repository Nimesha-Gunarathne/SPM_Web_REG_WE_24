import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import { APIURL } from "../../API/environment";
import { toast } from "react-toastify";
import Navbar from '../Adminnavibar';
import Daybar from '../DayBar';



class adminViewApplicant extends Component {

  constructor(props) {
    super(props);
    this.onDelete = this.onDelete.bind(this);
    this.onInfo = this.onInfo.bind(this);

    this.state = {
      Jobs: [],
    }
  }

  onInfo(e, ApplicantID) {

    // toast.error(ApplicantID);
    localStorage.removeItem("GetAddedAllJobsADMIN");
    localStorage.setItem("GetAddedAllJobsADMIN", ApplicantID)

    window.location = "/AdminViewEmployerInfo"
    // axios
    //   .delete(`${APIURL}/applicantReg/DeleteAllApplicant/${ApplicantID}`)
    //   .then((res) => {
    //     console.log("res", res);
    //     if (res.data.code === 200) {
    //       console.log("res.data.code", res.data.code);

    //       toast.success("Applicant is Deleted!");


    //       window.setTimeout(function () {
    //         window.location.reload();
    //       }, 2500);
    //     } else {
    //       toast.error(res.data.message);

    //     }
    //   });
  }

  onDelete(e, EmpID) {
    axios
      .delete(`${APIURL}/Employer/deleteEmp/${EmpID}`)
      .then((res) => {
        console.log("res", res);
        if (res.data.code === 200) {
          console.log("res.data.code", res.data.code);

          toast.success("Employer is Deleted!");


          window.setTimeout(function () {
            window.location.reload();
          }, 2500);
        } else {
          toast.error(res.data.message);

        }
      });
  }



  componentDidMount() {

    axios.get(`${APIURL}/Employer/getAllEmp`)

      .then(response => {

        console.log(" All Employer ", response.data.data);
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
                        <h4 className="page-title">All Employer</h4>
                        <ol className="breadcrumb">
                          <li className="breadcrumb-item"><a href="javascript:void(0);">JobBank</a></li>
                          {/* <li class="breadcrumb-item"><a href="javascript:void(0);">pages</a></li> */}
                          <li className="breadcrumb-item active">Employer</li>
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
                              <th>Email</th>
                              <th>Mobile Number</th>
                              <th>Link</th>
                              <th>Account Status</th>
                              <th></th>
                            </tr>
                          </thead>
                          <tbody>






                            {this.state.Jobs.length > 0 && this.state.Jobs.map((item, index) => (



                              <tr>
                                <td>{item.employer_name}</td>
                                <td>{item.email}</td>
                                <td>{item.mobileNumber}</td>
                                <td>{item.weblink}</td>

                                {item.isActive == 1 && (
                                  <>

                                    <span className=" badge badge-soft-success" style={{marginTop:"20px",marginLeft:"40px"}}>Active</span>

                                  </>
                                )}

                                {item.isActive == 3 && (
                                  <>

                                    <span className=" badge badge-soft-warning" style={{marginTop:"20px",marginLeft:"35px"}}>Pending</span>

                                  </>
                                )}

                                <td>
                                  <button type="button" className="btn btn-primary waves-effect waves-light" style={{ marginLeft: "40px" }}
                                    onClick={e => this.onInfo(e, item._id)}>Info</button>
                                  <button type="button" className="btn btn-danger waves-effect waves-light" style={{ marginLeft: "10px" }}
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
export default adminViewApplicant;