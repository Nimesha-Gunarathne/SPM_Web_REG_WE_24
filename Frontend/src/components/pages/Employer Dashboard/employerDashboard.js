import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Navbar from '../Employernavibar';
import Daybar from '../DayBar';

class EmployerDashboard extends Component {

    render() {
        return (
          <>
          <div>
      <Navbar/>
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
                  {/*end row*/}
                </div>
                {/*end page-title-box*/}
              </div>
              {/*end col*/}
            </div>
            <div className="row gutters-sm mt-3">
              <div className="col-md-4 mb-3">
                <div className="card" style={{width:"450px",marginTop:"100px"}}>
                  <div className="card-body">
                    <div className="d-flex flex-column align-items-center text-center">
                      <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" className="rounded-circle" width={150} />
                      <div className="mt-3">
                        <h4>Nimesha Gunarathne</h4>
                        <p className="text-secondary mb-1">JobBank Web Admin</p>
                        <p className="text-muted font-size-sm">Full Stack Developer</p>
                        {/* <button class="btn btn-primary">Follow</button>
                            <button class="btn btn-outline-primary">Message</button> */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card mt-3">
                  
                </div>
              </div>
              <div className="col-md-8">
                <div className="card mb-3"style={{marginLeft:"100px",width:"700px",marginTop:"60px"}}>
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
                      JobBank.Admin.Nimesha@gmail.com
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Trust</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        <div className="star-ratings">
                          <div className="fill-ratings" style={{width: '75%'}}>
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
                    {/* <div class="row">
                          <div class="col-sm-12">
                            <a class="btn btn-info " target="__blank" href="https://www.bootdey.com/snippets/view/profile-edit-data-and-skills">Edit</a>
                          </div>
                        </div> */}
                  </div>
                </div>
                {/* <div className="col-sm-12 mb-3">
                  
                </div> */}
              </div>
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