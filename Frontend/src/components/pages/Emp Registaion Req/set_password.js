import React, { Component } from "react";
import "../Registations/EmployerRegistation/EmpRegistation.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { APIURL } from "../../API/environment";

const initialState = {
  email: "",
  password: "",
  confirm_password: "",
};

class SetPassword extends Component {
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

    let SetPassword = {
      email: this.state.email,
      password: this.state.password,
      confirm_password: this.state.confirm_password,
    };

    console.log("Passwords Details : ", SetPassword);

    axios
      .put(`${APIURL}/employer/set-employer-password`, SetPassword)
      .then((res) => {
        console.log("res", res);
        if (res.data.code === 200) {
          alert(res.data.message)

          toast.success(res.data.message);
          window.setTimeout(function () {
            window.location.href = "/login";
          }, 200);
          //this.props.history.push("/login");
        } else {
          toast.error(res.data.message);
          alert(res.data.message)
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
                <h1>Set Password</h1>
                <form method="POST" onSubmit={this.onSubmit}>
                  {/* 2 column grid layout with text inputs for the first and last names */}
                  <div className="row"></div>
                  <div className="form-group">
                    <label
                      htmlFor="example-text-input"
                      className="col-form-label text-right"
                    >
                      Username
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="example-email-input"
                      placeholder="Email"
                      name="email"
                      value={this.state.email}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <label
                      htmlFor="example-email-input"
                      className="col-form-label text-right"
                    >
                      Password
                    </label>
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
                    <label
                      htmlFor="example-email-input"
                      className="col-form-label text-right"
                    >
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="Confirm Password"
                      name="confirm_password"
                      value={this.state.confirm_password}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <div className="col-md-6 btnSubmit">
                      <button
                        type="submit"
                        className=" button1 btn btn-block mb-4"
                      >
                        Set Password
                      </button>
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

export default SetPassword;
