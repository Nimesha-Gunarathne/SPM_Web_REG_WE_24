import React, { Component } from "react";
import "./login.css";
import LogoImg from "../../Images/logo.png";
import axios from "axios";
import { toast } from "react-toastify";
import { APIURL } from "../../API/environment";

const initialState = {
  email: "",
  password: "",
  stu:1,
  emp:1,
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

    if (login.email == "admin@gmail.com" && login.password == "1234") {
      this.props.history.push("/adminProfile");
      toast.success("admin@gmail.com is logged as Admin");
  
    }

    if (login.email == "admin@gmail.com" && login.password != "1234") {
      toast.error("Admin, Please check your PASSCODE!");
    }

    axios.post(`${APIURL}/employer/login-employer`, login).then((res) => {
      console.log("res", res);
      if (res.data.code === 200) {
      
        console.log("data are ", res.data.data);
        const { userRoleStatus } = res.data.data;

        if (userRoleStatus === "Employer") {
          let i = JSON.stringify(res.data.token);
          let result = i.slice(1, -1);

          let User = JSON.stringify(res.data.data._id);
          let EId = User.slice(1, -1);

          localStorage.setItem("LocalEmployerID", EId);

          let UserName = JSON.stringify(res.data.data.employer_name);
          let EName = UserName.slice(1, -1);

          localStorage.setItem("LocalEmployerName", EName);

          localStorage.setItem("employer", JSON.stringify(res.data.data));
          localStorage.setItem("token", result);
          console.log("tok", result);
          this.props.history.push("/employerDashboard");
          toast.success(
            this.state.email +
              " is logged as an Employer"
          );
        }
      } else if(res.data.message == "This email doest not exist. Please create a your account first.")  {
        this.state.emp=2;
      }
      else{
             toast.error(res.data.message);
      }
    });
    console.log("email", login);
    axios.post(`${APIURL}/applicantReg/applicant-login`, login).then((res) => {
      console.log("res", res);
      if (res.data.code === 200) {
        this.state.stu=2;
        console.log("data are ", res.data.data);
        const { userRoleStatus } = res.data.data;

        if (userRoleStatus == "Applicant") {
          let i = JSON.stringify(res.data.token);
          let result = i.slice(1, -1);

          let User = JSON.stringify(res.data.data._id);
          let UId = User.slice(1, -1);

          localStorage.setItem("User", JSON.stringify(res.data.data));
          localStorage.setItem("token", result);

          localStorage.setItem("LocalUserID", UId);
          console.log("tok", result);
          this.props.history.push("/applicantHome");

          toast.success(
            res.data.data.firstName +
              " is logged as an APPLICANT"
          );
        }
      } else if(this.state.emp == 2) {
        toast.error(res.data.message);
      }
    });
  }

  render() {
    return (
      <>
        <div className="logmain">
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
                <div className="con-checkbox" style={{ marginTop: "20px"}}>
                  <input
                    type="checkbox"
                    style={{  marginLeft: "-100px" }}
                  />
                  <span style={{marginTop: "0px", color: "black", marginLeft: "-100px" }}>
                    Remember
                  </span>
                </div>
                <div className="con" style={{marginTop:"20px"}}>
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
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default Login;
