import React, { Component } from "react";
import "./login.css";
import LogoImg from "../../Images/logo.png";
import axios from "axios";
import { toast } from "react-toastify";
// import { APIURL } from "../../../API/environment";

const initialState = {
  email: "",
  password: "",
};

class Login extends Component {
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
    localStorage.clear();
    event.preventDefault();
    let login = {
      email: this.state.email,
      password: this.state.password,
    };
    

    if(login.email == "applicant@gmail.com" && login.password=="1234"){

      this.props.history.push("/applicantHome");
            toast.success(
                "applicant@gmail.com is logged as Applicant" 
            );

    }
    
    if(login.email == "admin@gmail.com" && login.password=="1234"){

      this.props.history.push("/adminDashboard");
            toast.success(
                "admin@gmail.com is logged as Applicant" 
            );

    }
    
    if(login.email == "employer@gmail.com" && login.password=="1234"){

      this.props.history.push("/employerDashboard");
            toast.success(
                "employer@gmail.com is logged as Applicant" 
            );

    }

    
  }

  render() {
    return (
      <>
        <div className="logmain">
          {/* <section className="sec"> */}
          <div className="logForm">
            <form method="POST" onSubmit={this.onSubmit}>
              <div className="imglogForm">
                <img
                  src={LogoImg}
                  alt="Avatar"
                  className="avatar"
                  width={150}
                  height={70}
                />
              </div>
              <div className="con">
                <label className="lable-data" htmlFor="name">
                  User Name
                </label>
                <input
                  className="add-data"
                  type="text"
                  id="name"
                  name="email"
                  value={this.state.email}
                  onChange={this.onChange}
                />
              </div>
              <div className="con">
                <label className="lable-data" htmlFor="password">
                  Password
                </label>
                <input
                  className="add-data"
                  type="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.onChange}
                  id="password"
                />
              </div>
              <div>
                <div className="con-checkbox">
                  <input
                    type="checkbox"
                    style={{ marginTop: "7px", marginLeft: "-100px" }}
                  />
                  <span style={{ color: "black", marginLeft: "-100px" }}>
                    Remember
                  </span>
                  {/* <span className="lable-data">Remember</span> */}
                </div>
                <div className="con">
                  <input
                    className="add-data-submit"
                    type="submit"
                    defaultValue="Login"
                  />
                  <br />
                </div>
                <div className="linkp">
                  <a href="*">Forgot password</a>
                </div>
                <br />

                <div className="linkp">
                  <span style={{ color: "black" }}>
                    Do not have an account?
                  </span>
                  <a href="/"> Register Now </a>
                </div>
                {/* <div class="link">
                <label for="lable-data">Dont have an account?<a href="*">Register here.</a></label>
                
            </div> */}
              </div>
            </form>
          </div>
          {/* </section> */}
        </div>
      </>
    );
  }
}

export default Login;
