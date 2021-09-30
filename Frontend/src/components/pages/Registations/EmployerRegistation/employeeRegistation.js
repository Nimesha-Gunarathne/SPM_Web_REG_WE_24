import React, { Component } from "react";
import './EmpRegistation.css'
import axios from "axios";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { APIURL } from "../../../API/environment";

const initialState = {
  employer_name: "",
  email: "",
  description: "",
  weblink: "",
  location: "",
  mobileNumber: "",
  userRoleStatus: "Employer",
  accountStatus: "Not Approved"
};

class RegistationEmployer extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(event) {
    event.preventDefault();

    let EmployerDetails = {
      employer_name: this.state.employer_name,
      email:  this.state.email,
      description : this.state.description ,
      weblink : this.state.weblink ,
      location : this.state.location ,
      mobileNumber : this.state.mobileNumber ,
      userRoleStatus : this.state.userRoleStatus ,
      accountStatus : this.state.accountStatus 
    };

    console.log("Employer Details : ", EmployerDetails);

    axios
      .post(`${APIURL}/Employer/register-employer/`, EmployerDetails)

      .then((res) => {
        console.log("res", res);
        if (res.data.code === 200) {
          alert(res.data.message)
          toast.success(res.data.message);
          window.setTimeout(function () {
            window.location.href = "/login";
          }, 200);
        } else {
          alert(res.data.message)
          toast.error(res.data.message);
        }
      });
  }
  render() {
    return (
      <div className="erBody">
        <div className="container">
          <div className="row ">
            <div className="lottiefiles col-sm-12 col-md-4">
              <lottie-player
                src="https://assets3.lottiefiles.com/packages/lf20_q5pk6p1k.json"
                background="transparent"
                speed={1}
                loop
                autoPlay
              />
            </div>
            <div className="col-sm-12 col-md-8">
              <div className="container1">
                <h1>Employer Registation</h1>
                <form method="POST" onSubmit={this.onSubmit}>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          id="exampleInputPassword1"
                          placeholder="Company name"
                          name="employer_name"
                          value={this.state.employer_name}
                          onChange={this.onChange}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                    </div>
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="E-mail address"
                      name="email"
                      value={this.state.email}
                      onChange={this.onChange}
                    />

                  </div>
                  <div className="form-group">
                    <textarea
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Description"
                      name="description"
                      value={this.state.description}
                      onChange={this.onChange}
                    />

                  </div>

                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Web site"
                      name="weblink"
                      value={this.state.weblink}
                      onChange={this.onChange}
                    />

                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Location"
                      name="location"
                      value={this.state.location}
                      onChange={this.onChange}
                    />

                  </div>
                  <div className="form-group">
                    <input
                      type="Number"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="Mobile number"
                      name="mobileNumber"
                      value={this.state.mobileNumber}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">

                    <div className="col-md-6 btnSubmit">
                      <button
                        type="submit"
                        className=" button1 btn btn-block mb-4"
                      >
                        SIGN UP
                      </button>
                    </div>
                    <div className="aha">
                      Already have an account <Link to="/login"> Login</Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RegistationEmployer;
