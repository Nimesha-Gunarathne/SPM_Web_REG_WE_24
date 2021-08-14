import React, { Component } from "react";
import './EmpRegistation.css'
import axios from "axios";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
// import { APIURL } from "../../../../API/environment";

const initialState = {
  employer_name: "",
  OIB: "",
  number_of_subjects: "",
  reg_no_of_citizen_owners: "",
  headquarters_streat_no: "",
  postalCode_place: "",
  IBAN: "",
  email: "",
  mobile_number: "",
  contact_person: "",
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
      OIB: this.state.OIB,
      number_of_subjects: this.state.number_of_subjects,
      reg_no_of_citizen_owners: this.state.reg_no_of_citizen_owners,
      headquarters_streat_no: this.state.headquarters_streat_no,
      postalCode_place: this.state.postalCode_place,
      IBAN: this.state.IBAN,
      email: this.state.email,
      mobile_number: this.state.mobile_number,
      contact_person: this.state.contact_person,
    };

    console.log("Employer Details : ", EmployerDetails);

    axios
      // .post(`${APIURL}/employer/register-employer/`, EmployerDetails)
      .post(`/employer/register-employer/`, EmployerDetails)

      .then((res) => {
        console.log("res", res);
        if (res.data.code === 200) {
          toast.success(res.data.message);
          window.setTimeout(function () {
            window.location.href = "/login";
          }, 2000);
        } else {
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
                  {/* 2 column grid layout with text inputs for the first and last names */}
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
                      {/* <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          id="exampleInputPassword1"
                          placeholder="Identification number of the subject"
                          name="number_of_subjects"
                          value={this.state.number_of_subjects}
                          onChange={this.onChange}
                        />
                      </div> */}
                      {/* <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          id="exampleInputPassword1"
                          placeholder="Seat address (street and number)"
                          name="headquarters_streat_no"
                          value={this.state.headquarters_streat_no}
                          onChange={this.onChange}
                        />
                      </div> */}
                    </div>
                    <div className="col-lg-6">
                      {/* <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          id="exampleInputPassword1"
                          placeholder="VAT code"
                          name="OIB"
                          value={this.state.OIB}
                          onChange={this.onChange}
                        />
                      </div> */}
                      {/* <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          id="exampleInputPassword1"
                          placeholder="Registration number of the citizens who own the craft"
                          name="reg_no_of_citizen_owners"
                          value={this.state.reg_no_of_citizen_owners}
                          onChange={this.onChange}
                        />
                      </div> */}
                      {/* <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          id="exampleInputPassword1"
                          placeholder="Postal code and place"
                          name="postalCode_place"
                          value={this.state.postalCode_place}
                          onChange={this.onChange}
                        />
                      </div> */}
                    </div>
                  </div>
                  {/* <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="IBAN"
                      name="IBAN"
                      value={this.state.IBAN}
                      onChange={this.onChange}
                    />
                  </div> */}
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
                      name="email"
                      value={this.state.email}
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
                      name="email"
                      value={this.state.email}
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
                      name="email"
                      value={this.state.email}
                      onChange={this.onChange}
                    />

                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="Mobile number"
                      name="mobile_number"
                      value={this.state.mobile_number}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    {/* <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Contact person"
                      name="contact_person"
                      value={this.state.contact_person}
                      onChange={this.onChange}
                    /> */}

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
