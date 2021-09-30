import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import homeRegistation from "./components/pages/Registations/RegistationHome/registationHome";
import studentRegister from "./components/pages/Registations/ApplicantRegistation/applicantRegistation";
import employeRegister from "./components/pages/Registations/EmployerRegistation/employeeRegistation";
import login from "./components/pages/Login/login";
import applicantHome from "./components/pages/Applicant Home/applicantHome";
import adminProfile from "./components/pages/Admin Profile/adminProfile";
import employerDashboard from "./components/pages/Employer Dashboard/employerDashboard";
import employerCreateJob from "./components/pages/Employer Create Job/empCreateJob";
import employerEditJob from "./components/pages/Employer Create Job/empEditJob";
import employerTopVacancyReqList from "./components/pages/Top Vacancy Request List View/topJobReqList";
import employerTopCompanyReqList from "./components/pages/Top Company Request List View/topJobReqList";
import TopCompantEmp from "./components/pages/Top Companies Employer/applicantHome";
import TopCompantAdmin from "./components/pages/Top Companies Admin/applicantHome";
import TopCompantApplicant from "./components/pages/Top Companies Applicant/applicantHome";
import AdminViewVacancy from "./components/pages/23 Admin view Vacancy/adminViewVacancy";
import AdminDashboard from "./components/pages/Admin Dashboard/adminDashboard";
import AdminViewApplicant from "./components/pages/24 Admin View Applicant/adminViewApplicant";
import AdminViewApplicantInfo from "./components/pages/24 Admin View Applicant info/adminViewApplicantInfo";
import AdminViewEmployer from "./components/pages/25 Admin View Employer/adminViewEmployer";
import AdminViewEmployerInfo from "./components/pages/25 Admin View Employer info/adminViewEmployerInfo";
import ApplicantReport from "./components/pages/Applicant Report/AllItems";
import EmployerJobApplications from "./components/pages/Employer Job Applications/emjobApplications";
import EmployerHome from "./components/pages/Employer Home/empHome";
import EmployerEventView from "./components/pages/Employer Event View/applicantEventView";
import OpenVacanciesList from "./components/pages/Open Vacancies List/openvacancies";
import CloseVacanciesList from "./components/pages/Closed Vacancies List/closevacancies";
import EmpShortListReport from "./components/pages/Employer ShortList Report/AllItems";
import EmpRejectedListReport from "./components/pages/Employer Rejected Report/AllItems";
import AdminEventReportView from "./components/pages/Admin Event Report View/adminReportView";
import ApplicantViewVacancy from "./components/pages/View Job Vacancy Details/viewVacancy";
import ApplyForJobForm from "./components/pages/Appling Vacancies Form/applyForVacancie";
import EmployerRegistationRequestList from "./components/pages/Emp Registaion Req/adminEmpReqList";
import AdminPublishEvent from "./components/pages/Admin Publish Events/adminCreateEvents";
import AdminEventView from "./components/pages/Admin Events View/adminEventView";
import AdminEditEvent from "./components/pages/Admin Publish Events/adminEditEvents.";
import ApplicantAppliedJobList from "./components/pages/Applicant Applied Job List/applicant_job_list";
import ActivationEmailApplicant from "./components/pages/Registations/ApplicantRegistation/ActivationEmail";
import EmployerSetPassword from "./components/pages/Emp Registaion Req/set_password";
import EmpActiveEmail from "./components/pages/Registations/EmployerRegistation/ActivationEmail";
import EditAppliedVacancy from "./components/pages/Appling Vacancies Form/editAppliedVacancie";
import EmployerCreatedJobList from "./components/pages/Employer Create Job/emp_created_job_list";
import ApplicanEventView from "./components/pages/Applicant Event View/applicantEventView";
import ApplicanProfile from "./components/pages/Applicant Profile/applicantProfile";
import ShortListView from "./components/pages/Employer ShortList View/shortlistview";
import RejectedListView from "./components/pages/Employer RejectedList View/rejectedlist";
import AdminHome from "./components/pages/Admin Home/empHome";





function App() {
  return (
    <div>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Router>
        <Switch>
          <Route path="/" exact component={homeRegistation} />
          <Route path="/studentRegister" component={studentRegister} />
          <Route path="/employeRegister" component={employeRegister} />
          <Route path="/login" component={login} />
          
          
          {/* ADMIN */}
          <Route path="/AdminPublishEvent" component={AdminPublishEvent} />
          <Route path="/AdminEventView" component={AdminEventView} />
          <Route path="/AdminEditEvent" component={AdminEditEvent} />
          <Route path="/adminProfile" component={adminProfile} />
          <Route path="/EmployerRegistationRequestList" component={EmployerRegistationRequestList} />
          <Route path="/employerTopVacancyReqList" component={employerTopVacancyReqList} />
          <Route path="/AdminViewVacancy" component={AdminViewVacancy} />
          <Route path="/AdminDashboard" component={AdminDashboard} />
          <Route path="/AdminViewApplicant" component={AdminViewApplicant} />
          <Route path="/AdminViewApplicantInfo" component={AdminViewApplicantInfo} />
          <Route path="/AdminViewEmployer" component={AdminViewEmployer} />
          <Route path="/AdminViewEmployerInfo" component={AdminViewEmployerInfo} />
          <Route path="/employerTopCompanyReqList" component={employerTopCompanyReqList} />
          <Route path="/TopCompantAdmin" component={TopCompantAdmin} />
          <Route path="/AdminEventReportView" component={AdminEventReportView} />
          <Route path="/AdminHome" component={AdminHome} />


          {/* APPLICANT */}
          <Route path="/applicantHome" component={applicantHome} />
          <Route path="/ApplicantViewVacancy" component={ApplicantViewVacancy} />
          <Route path="/ApplyForJobForm" component={ApplyForJobForm} />
          <Route path="/ApplicantAppliedJobList" component={ApplicantAppliedJobList} />
          <Route path="/applicant/activate/:activation_token" component={ActivationEmailApplicant} exact />
          <Route path="/EditAppliedVacancy" component={EditAppliedVacancy} />
          <Route path="/ApplicanEventView" component={ApplicanEventView} />
          <Route path="/TopCompantApplicant" component={TopCompantApplicant} />
          <Route path="/ApplicanProfile" component={ApplicanProfile} />
          <Route path="/ApplicantReport" component={ApplicantReport} />



          {/* EMPLOYER */}
          <Route path="/employerDashboard" component={employerDashboard} />
          <Route path="/employerCreateJob" component={employerCreateJob} />
          <Route path="/EmployerCreatedJobList" component={EmployerCreatedJobList} />
          <Route path="/employerEditJob" component={employerEditJob} />
          <Route path="/SetPassword" component={EmployerSetPassword} />
          <Route path="/employer/activate/:activation_token" component={EmpActiveEmail} exact />
          <Route path="/TopCompantEmp" component={TopCompantEmp} />
          <Route path="/EmployerJobApplications" component={EmployerJobApplications} />
          <Route path="/ShortListView" component={ShortListView} />
          <Route path="/RejectedListView" component={RejectedListView} />
          <Route path="/EmployerHome" component={EmployerHome} />
          <Route path="/EmployerEventView" component={EmployerEventView} />
          <Route path="/OpenVacanciesList" component={OpenVacanciesList} />
          <Route path="/CloseVacanciesList" component={CloseVacanciesList} />
          <Route path="/EmpShortListReport" component={EmpShortListReport} />
          <Route path="/EmpRejectedListReport" component={EmpRejectedListReport} />




        </Switch>
      </Router>
    </div>
  );
}

export default App;
