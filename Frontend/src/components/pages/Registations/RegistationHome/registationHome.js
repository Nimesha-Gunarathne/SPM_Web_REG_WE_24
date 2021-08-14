/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import "./registationHome.css";
import LogoImg from "./logo.png";
  
class RegistationHome extends Component {
  render() {
    return (
      <div className="RHbody">
        <div className="container">
          <div className="row">
            <div className="TopRow">
              <img src={LogoImg} className="Logoimg" />
            </div>
            <div className="TopRow">
              <a href="/login" className="btn-login mt-5 Loginbtn">
                Login
              </a>
            </div>
          </div>
        </div>
        <section>
          <div className="section-container">
            <div className="sec-card">
              <div className="card-box">
                <div className="card-content">
                  <h3>Student Sign Up</h3>
                  <p>
                    Student User Profile allows you to edit student profiles,
                    search for jobs, issue contracts, payout statuses, update
                    data, and provide customer support.
                  </p>
                  <a href="/studentRegister">Register as Student</a>
                </div>
              </div>
            </div>
            <div className="sec-card">
              <div className="card-box">
                <div className="card-content">
                  <h3>Employer Sign Up</h3>
                  <p>
                    The user profile of the employer enables the publication of
                    jobs, management of existing jobs, review of registered
                    candidates, review of student contracts and invoices.With
                    supporting text below as a natural lead-in to additional
                    content.
                  </p>
                  <a href="/employeRegister">Register as Employer</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default RegistationHome;
