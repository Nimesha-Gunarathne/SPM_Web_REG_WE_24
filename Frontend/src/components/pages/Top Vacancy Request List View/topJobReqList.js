import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { APIURL } from "../../API/environment";
import Navbar from '../Adminnavibar';


class Admin_Employer_Request_List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      TopList: [],
    };
  }
  async componentDidMount() {
    await axios.get(`${APIURL}/TopList/getAllTopList`).then((response) => {
      this.setState({ TopList: response.data.data });
      console.log("TopList =>", this.state.TopList);
    });
  }

  onChangeActiveStatus(e, id) {
    let updateDetailsStatus = {
      IsApprove: 1,
    };

    console.log(id);
    console.log(updateDetailsStatus);

    axios
      .put(`${APIURL}/TopList/approveTopListReq/${id}`, updateDetailsStatus)
      .then((res) => {
        console.log(res.data);
        console.log(updateDetailsStatus);
        if (res.data.code === 200) {
          toast.success(res.data.message);
          alert(res.data.message)
        } else {
          toast.error(res.data.message);
          alert(res.data.message)

        }
        window.location.reload();
      });
  }

  render() {
    return (
      <div>
        <h1></h1>
        {/* Left Sidenav */}
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
                     
                          <li className="breadcrumb-item active">
                          Top Vacancy Request List
                          </li>
                        </ol>
                      </div>
                      {/*end col*/}
                      
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
                  <div className="card" style={{marginTop:"40px"}}>
                    <div className="card-header">
                      {/* <h4 class="card-title">Row Border Bottom Example</h4> */}
                      {/* <p class="text-muted mb-0">DataTables has most features enabled by default, 
                                            so all you need to do to use it with your own ables is to call the
                                             construction function: <code>$().DataTable();</code> and border bottom.
                                        </p> */}
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
                              <th>Vacancy Name</th>
                              <th>Vacancy Details</th>
                              <th>Company Name</th>
                              <th>Closing Date</th>
                          
                            </tr>
                          </thead>
                          <tbody>
                            {this.state.TopList.length > 0 &&
                              this.state.TopList.map((item, index) => (
                                <tr key={index}>
                                  <td>{item.job_title}</td>
                                  <td style={{}}>{item.job_description}</td>
                                  <td>{item.employerName}</td>
                                  <td>{item.closing_date}</td>
                                  <td>
                                    {/* <button
                                      href="clerk-student-student-pofile.html"
                                      className="btn btn-success"
                                    >
                                      View
                                    </button> */}
                                  </td>
                                  <td>
                                    <button
                                      className="btn btn-primary"
                                      onClick={(e) =>
                                        this.onChangeActiveStatus(e, item._id)
                                      }
                                    >
                                      Approve
                                    </button>
                                  </td>
                                  <td>
                                    <button href className="btn btn-danger">
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
              {/* &copy; 2020 Dastyle <span class="d-none d-sm-inline-block float-right">Crafted with <i class="mdi mdi-heart text-danger"></i> by Mannatthemes</span> */}
            </footer>
            {/*end footer*/}
          </div>
          {/* end page content */}
        </div>
        {/* end page-wrapper */}
        {/* jQuery  */}
        {/* App js */}
        {/* jQuery  */}
        {/* Required datatable js */}
        {/* Buttons examples */}
        {/* Responsive examples */}
        {/* App js */}
      </div>
    );
  }
}

export default Admin_Employer_Request_List;
