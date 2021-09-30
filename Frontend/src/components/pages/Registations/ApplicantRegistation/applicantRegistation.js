import React, { Component } from "react";
import './applicantRegistation.css'
import axios from "axios";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import Select from "react-select";
import { APIURL } from "../../../API/environment";


const initialState = {
  firstName: "",
  lastName: "",
  Field: "",
  address: "",
  postalCode: "",
  email: "",
  password: "",
  mobileNumber: "",
};

const InterestedFieldsoptions = [
  { value: "IT", label: "IT" },
  { value: "SE", label: "SE" },
  { value: "HR", label: "HR" },
];

class RegistationStudent extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onGenderOptionSelected = this.onGenderOptionSelected.bind(this);
  }

  onGenderOptionSelected(e) {
    this.state.Field = e.label;
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(event) {
    event.preventDefault();

    let ApplicantDetails = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      Field: this.state.Field,
      address:this.state.address,
      postalCode:this.state.postalCode,
      email: this.state.email,
      password: this.state.password,
      mobileNumber: this.state.mobileNumber,
      userRoleStatus:"Applicant",
      accountStatus:"approved"
    };

    console.log("Applicant Details : ", ApplicantDetails);

    axios
      .post(`${APIURL}/applicantReg/newApplicant`, ApplicantDetails)
      .then((res) => {
        console.log("res", res);
        if (res.data.code === 200) {
          console.log("res.data.code", res.data.code);
          alert("Please Verify Your Email !")
          toast.success(res.data.message);
          window.setTimeout(function () {
            window.location.href = "/login";
          }, 100);
        } else {
          toast.error(res.data.message);
          alert(res.data.message)

        }
      });
  }

  render() {
    return (
      <div className="SRbody">
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
                <h1>Applicant Registation</h1>
                <form method="POST" onSubmit={this.onSubmit}>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          id="exampleInputPassword1"
                          placeholder="First Name"
                          name="firstName"
                          value={this.state.firstName}
                          onChange={this.onChange}
                        />
                      </div>
                   
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          id="exampleInputPassword1"
                          placeholder="Address"
                          name="address"
                          value={this.state.address}
                          onChange={this.onChange}
                        />
                      </div>
                      <div className="form-group">
                        <Select
                        placeholder="Select your interested Field"
                          options={InterestedFieldsoptions}
                          onChange={this.onGenderOptionSelected}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          id="exampleInputPassword1"
                          placeholder="Last Name"
                          name="lastName"
                          value={this.state.lastName}
                          onChange={this.onChange}
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          id="exampleInputPassword1"
                          placeholder="Postal code"
                          name="postalCode"
                          value={this.state.postalCode}
                          onChange={this.onChange}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="form-group">
                    <input
                      type="email"
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
                    <input
                      type="tel"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="Mobile number"
                      name="mobileNumber"
                      value={this.state.mobileNumber}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Password"
                      name="password"
                      value={this.state.password}
                      onChange={this.onChange}
                    />
                    
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control"
                      id="otherInfo"
                      placeholder="Confirm Password"
                      defaultValue={""}
                      name="additionaInfromation"
                    />
                  </div>
                  {/* Submit button */}
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
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RegistationStudent;
