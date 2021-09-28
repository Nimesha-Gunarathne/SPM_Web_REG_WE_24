import React, { Component } from "react";
import Navbar from '../Adminnavibar';

class AdminDashboard extends Component {

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
                            <li className="breadcrumb-item active">Admin</li>
                          </ol>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row gutters-sm mt-3">
                  <div className="col-md-4 mb-3">
                    <div className="card" style={{ width: "450px", marginTop: "100px" }}>
                      <div className="card-body">
                        <div className="d-flex flex-column align-items-center text-center">
                          <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" className="rounded-circle" width={150} />
                          <div className="mt-3">
                            <h4>Nimesha Gunarathne</h4>
                            <p className="text-secondary mb-1">JobBank Web Admin</p>
                            <p className="text-muted font-size-sm">Full Stack Developer</p>
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
                            Nimesha Gunarathne
                          </div>
                        </div>
                        <hr />
                        <div className="row">
                          <div className="col-sm-3">
                            <h6 className="mb-0">Email</h6>
                          </div>
                          <div className="col-sm-9 text-secondary">
                            jobbank.admin.nimesha@gmail.com
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
                            <h6 className="mb-0">Discription</h6>
                          </div>
                          <div className="col-sm-9 text-secondary">
                            We are looking for a responsible Administrator to organize our company’s day-to-day operations. Your job will be to provide clerical support to our managers and employees and coordinate all daily administrative activities.
                          </div>
                        </div>
                        <hr />
                        <div className="row">
                          <div className="col-sm-3">
                            <h6 className="mb-0">Project List</h6>
                          </div>
                          <div className="col-sm-9 text-secondary">
                            Software Development
                          </div>
                        </div>
                        <hr />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <footer className="footer text-center text-sm-left">
                © 2021 JobBank
              </footer>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default AdminDashboard;