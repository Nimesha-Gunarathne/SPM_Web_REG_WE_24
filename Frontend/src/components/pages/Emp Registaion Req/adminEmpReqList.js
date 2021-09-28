import React, { Component } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { APIURL } from "../../API/environment";
import Navbar from '../Adminnavibar';
import Daybar from '../DayBar';

class Admin_Employer_Request_List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employer: [],
    };
  }
  async componentDidMount() {
    await axios.get(`${APIURL}/employer/get-all-employer`).then((response) => {
      this.setState({ employer: response.data.data });
      console.log("employer =>", this.state.employer);
    });
  }

  onChangeActiveStatus(e, id) {
    let updateDetailsStatus = {
      isActive: 1,
    };

    console.log(id);
    axios
      .put(`${APIURL}/employer/approve-employer/${id}`, updateDetailsStatus)
      .then((res) => {
        console.log(res.data);
        console.log(updateDetailsStatus);
        if (res.data.code === 200) {
          toast.success(res.data.message);
        } else {
          toast.error(res.data.message);
        }
        window.location.reload();
      });
  }

  render() {
    return (
      <div>
     <Navbar/>
        
        <div className="page-wrapper" style={{ width: "1200px" }}>
          {/* Top Bar Start */}

          {/* Top Bar End */}
          {/* Page Content*/}
          <div className="page-content">
            <div className="container-fluid">
              {/* Page-Title */}
              <div className="row">
                <div className="col-sm-12">
                  <div className="page-title-box">
                    <div className="row">
                      <div className="col">
                        <h4 className="page-title" />
                        <ol className="breadcrumb">
                          <li className="breadcrumb-item">
                            <a href="javascript:void(0);">Admin</a>
                          </li>
                          <li className="breadcrumb-item">
                            <a href="javascript:void(0);">Employer</a>
                          </li>
                          <li className="breadcrumb-item active">
                           New Employer Request
                          </li>
                        </ol>
                      </div>
                      {/*end col*/}
                      <Daybar/>
                      {/*end col*/}
                    </div>
                    {/*end row*/}
                  </div>
                  {/*end page-title-box*/}
                </div>
                {/*end col*/}
              </div>
              {/*end row*/}
              {/* end page title end breadcrumb */}
              <div className="row">
                <div className="col-lg-12 col-sm-12">
                  <div className="card">
                    <div className="card-header">
                    </div>
                    {/*end card-header*/}
                    <div className="card-body table-responsive">
                      <div className>
                        <table
                          id="datatable2"
                          className="table dt-responsive nowrap"
                          style={{
                            borderCollapse: "collapse",
                            borderSpacing: 0,
                            width: "100%",
                          }}
                        >
                          <thead>
                            <tr>
                              <th>Company Name</th>
                              <th>Company Description</th>
                              <th>Website</th>
                              <th>Location</th>
                              <th>status</th>
                            </tr>
                          </thead>
                          <tbody>
                            {this.state.employer.length > 0 &&
                              this.state.employer.map((item, index) => (
                                <tr key={index}>
                                  <td>{item.employer_name}</td>
                                  <td>{item.description}</td>
                                  <td>{item.weblink}</td>
                                  <td>{item.location}</td>
                                  <td>
                                    <button
                                      href="clerk-student-student-pofile.html"
                                      className="btn btn-success"
                                    >
                                      View
                                    </button>
                                  </td>
                                  <td>
                                    <button
                                    style={{marginLeft:"-40px"}}
                                      className="btn btn-primary"
                                      onClick={(e) =>
                                        this.onChangeActiveStatus(e, item._id)
                                      }
                                    >
                                      Approve
                                    </button>
                                  </td>
                                  <td>
                                    <button href className="btn btn-danger"
                                      style={{marginLeft:"-20px"}}
                                      >
                                      Reject
                                    </button>
                                  </td>
                                </tr>
                              ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* container */}
            <footer className="footer text-center text-sm-left">
            </footer>
            {/*end footer*/}
          </div>
          {/* end page content */}
        </div>
        {/* end page-wrapper */}
        {/* jQuery  */}
        {/* App js */}
        {/* App js */}
      </div>
    );
  }
}

export default Admin_Employer_Request_List;
