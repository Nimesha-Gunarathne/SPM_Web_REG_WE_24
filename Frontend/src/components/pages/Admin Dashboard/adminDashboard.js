import React, { Component } from "react";
import Navbar from '../Adminnavibar';

class AdminDashboard extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="RHbody">

          <section>
            <div className="section-container" style={{ width: "1000px", marginLeft: "200px" }}>
              <div className="sec-card" style={{ width: "300px", height: "300px", marginLeft: "-100px" }}>
                <div className="card-box">
                  <div className="card-content">
                    <h3>Vacancies</h3>
                    <a href="/AdminViewVacancy">View All Vacancies</a>
                  </div>
                </div>
              </div>
              <div className="sec-card" style={{ width: "300px", height: "300px" }}>
                <div className="card-box">
                  <div className="card-content">
                    <h3>Applicants</h3>

                    <a href="/AdminViewApplicant">View All Applicants</a>
                  </div>
                </div>
              </div>
              <div className="sec-card" style={{ width: "300px", height: "300px" }}>
                <div className="card-box">
                  <div className="card-content">
                    <h3>Employers</h3>

                    <a href="/AdminViewEmployer">View All Employers</a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default AdminDashboard;
