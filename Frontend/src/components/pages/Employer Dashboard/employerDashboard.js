import React, { Component } from "react";
import Navbar from '../Employernavibar';
import axios from "axios";
import { APIURL } from "../../API/environment";
import { toast } from "react-toastify";
import Daybar from '../DayBar';

const initialState = {
  ID: "",
  EmpName: "",
  des: "",
  email: "",
  mobile: "",
  weblink: ""
};

const EmployerID = localStorage.getItem("LocalEmployerID")
class EmployerDashboard extends Component {


  constructor(props) {
    super(props);
    this.onRequestTopList = this.onRequestTopList.bind(this);
    this.state = {
      initialState,
      employer: []
    };
  }

  onRequestTopList(event) {
    event.preventDefault();

    let ToplistDetails = {
      employerID: this.state.ID,
      EmpName: this.state.EmpName,
      description: this.state.des,
      email: this.state.email,
      mobile: this.state.mobile,
      weblink: this.state.weblink,
      IsApprove: 0

    };

    console.log("TopList Details : ", ToplistDetails);

    axios
      .post(`${APIURL}/EMPTopList/create-TopList/`, ToplistDetails)
      .then((res) => {
        console.log("res", res);
        if (res.data.code === 200) {
          console.log("res.data.code", res.data.code);
          toast.success("Your TopList Request Added!");
        } else {
          toast.error(res.data.message);

          window.setTimeout(function () {
            window.location.reload();
          }, 1000);

        }
      });
  }

  componentDidMount() {

    console.log(EmployerID)

    axios.get(`${APIURL}/Employer/getemployerByID/${EmployerID}`)

      .then(response => {

        this.setState({ employer: response.data.data });
        console.log(" data employer", this.state.employer);

        this.setState({ EmpName: this.state.employer.employer_name });
        this.setState({ des: this.state.employer.description });
        this.setState({ email: this.state.employer.email });
        this.setState({ mobile: this.state.employer.mobileNumber });
        this.setState({ weblink: this.state.employer.weblink });
        this.setState({ ID: this.state.employer._id });
      })
  }


  render() {
    return (
      <>
        <div>
          <Navbar />
          <div className="page-wrapper">
            <div className="page-content">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-sm-12">
                    <div className="page-title-box">
                      <div className="row">
                        <div className="col">
                          <h4 className="page-title">Profile</h4>
                          <ol className="breadcrumb">
                            <li className="breadcrumb-item active">Employer</li>
                          </ol>
                        </div>
                      </div>
                      <div style={{ marginLeft: "1130px" }}>
                        <Daybar />
                      </div>
                      {/*end row*/}
                    </div>
                    {/*end page-title-box*/}
                  </div>
                  {/*end col*/}
                </div>
                <div className="row gutters-sm mt-3">
                  <div className="col-md-4 mb-3">
                    <div className="card" style={{ width: "450px", marginTop: "100px" }}>
                      <div className="card-body">
                        <div className="d-flex flex-column align-items-center text-center">
                          <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" className="rounded-circle" width={150} />
                          <div className="mt-3">
                            <h4>{this.state.EmpName}</h4>
                            <p className="text-secondary mb-1"> {this.state.weblink}</p>
                            <p className="text-muted font-size-sm">{this.state.des}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card mt-3">

                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="card mb-3" style={{ marginLeft: "100px", width: "700px", marginTop: "60px" }}>
                      <div className="card-body" >
                        <div className="row">
                          <div className="col-sm-3">
                            <h6 className="mb-0">Full Name</h6>
                          </div>
                          <div className="col-sm-9 text-secondary">
                            {this.state.EmpName}
                          </div>
                        </div>
                        <hr />
                        <div className="row">
                          <div className="col-sm-3">
                            <h6 className="mb-0">Email</h6>
                          </div>
                          <div className="col-sm-9 text-secondary">
                            {this.state.email}
                          </div>
                        </div>
                        <hr />
                        <div className="row">
                          <div className="col-sm-3">
                            <h6 className="mb-0">Trust</h6>
                          </div>
                          <div className="col-sm-9 text-secondary">
                            <div className="star-ratings">
                              <div className="fill-ratings" style={{ width: '75%' }}>
                                <span>🟊🟊🟊🟊🟊</span>
                              </div>
                              <div className="empty-ratings">
                                <span>🟊🟊🟊🟊🟊</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <hr />
                        <div className="row">
                          <div className="col-sm-3">
                            <h6 className="mb-0">Description</h6>
                          </div>
                          <div className="col-sm-9 text-secondary">
                            {this.state.des}
                          </div>
                        </div>
                        <hr />
                        <div className="row">
                          <div className="col-sm-3">
                            <h6 className="mb-0">Web Link</h6>
                          </div>
                          <div className="col-sm-9 text-secondary">
                            {this.state.weblink}
                          </div>
                        </div>
                        <hr />
                        <div className="row">
                          <div className="col-sm-3">
                            <h6 className="mb-0">Mobile Number</h6>
                          </div>
                          <div className="col-sm-9 text-secondary">
                            {this.state.mobile}
                          </div>
                        </div>
                        <hr />
                        <a href="emp-job-list.html" type="button" className="btn btn-outline-success waves-effect float-left" style={{ marginLeft: "280px" }}
                          onClick={this.onRequestTopList}>Request Top List</a>
                      </div>
                    </div>
                    <br></br>
                    <br></br>
                  </div>
                  <a href="/OpenVacanciesList" type="button" className="btn btn-outline-primary waves-effect float-left" style={{ marginLeft: "280px" }}
                  >Open Vacancies</a>
                  <a href="/CloseVacanciesList" type="button" className="btn btn-outline-danger waves-effect float-left" style={{ marginLeft: "280px" }}
                  >Closed Vacancies</a>
                </div>
              </div>{/* container */}
              <footer className="footer text-center text-sm-left">
                © 2021 JobBank
              </footer>
              {/*end footer*/}
            </div>
            {/* end page content */}
          </div>
          {/* end page-wrapper */}
        </div>
      </>
    );

  }
}


export default EmployerDashboard;