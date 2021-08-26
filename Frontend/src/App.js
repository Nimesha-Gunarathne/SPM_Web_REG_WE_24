import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';

import homeRegistation from "./components/pages/Registations/RegistationHome/registationHome";
import studentRegister from "./components/pages/Registations/ApplicantRegistation/applicantRegistation"
import employeRegister from "./components/pages/Registations/EmployerRegistation/employeeRegistation"

import login from "./components/pages/Login/login"

import applicantHome from "./components/pages/Applicant Home/applicantHome"
import adminDashboard from "./components/pages/Admin Dashboard/adminDashboard"
import employerDashboard from "./components/pages/Employer Dashboard/employerDashboard"
import employerCreateJob from "./components/pages/Employer Create Job/empCreateJob"
import employerEditJob from "./components/pages/Employer Create Job/empEditJob"
import employerTopVacancyReqList from "./components/pages/Top Vacancy Request List View/topJobReqList"


import ApplicantViewVacancy from "./components/pages/View Job Vacancy Details/viewVacancy"
import ApplyForJobForm from "./components/pages/Appling Vacancies Form/applyForVacancie"
import EmployerRegistationRequestList from "./components/pages/Emp Registaion Req/adminEmpReqList"
import AdminPublishEvent from "./components/pages/Admin Publish Events/adminCreateEvents"
import AdminEventView from "./components/pages/Admin Events View/adminEventView"
import AdminEditEvent from "./components/pages/Admin Publish Events/adminEditEvents."
import ApplicantAppliedJobList from "./components/pages/Applicant Applied Job List/applicant_job_list"
import ActivationEmailApplicant from "./components/pages/Registations/ApplicantRegistation/ActivationEmail"
import EmployerSetPassword from "./components/pages/Emp Registaion Req/set_password"
import EmpActiveEmail from "./components/pages/Registations/EmployerRegistation/ActivationEmail"
import EditAppliedVacancy from "./components/pages/Appling Vacancies Form/editAppliedVacancie"
import EmployerCreatedJobList from "./components/pages/Employer Create Job/emp_created_job_list"
import ApplicanEventView from "./components/pages/Applicant Event View/applicantEventView"


















function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={homeRegistation} />
          <Route path="/studentRegister" component={studentRegister} />
          <Route path="/employeRegister" component={employeRegister} />
          

          <Route path="/login" component={login} />

          <Route path="/AdminPublishEvent" component={AdminPublishEvent} />
          <Route path="/AdminEventView" component={AdminEventView} />
          <Route path="/AdminEditEvent" component={AdminEditEvent} />
          <Route path="/adminDashboard" component={adminDashboard} />
          <Route path="/EmployerRegistationRequestList" component={EmployerRegistationRequestList} />
          <Route path="/employerTopVacancyReqList" component={employerTopVacancyReqList} />



  


          <Route path="/applicantHome" component={applicantHome} />
          <Route path="/ApplicantViewVacancy" component={ApplicantViewVacancy} />
          <Route path="/ApplyForJobForm" component={ApplyForJobForm} />
          <Route path="/ApplicantAppliedJobList" component={ApplicantAppliedJobList} />
          <Route path="/applicant/activate/:activation_token" component={ActivationEmailApplicant} exact/>
          <Route path="/EditAppliedVacancy" component={EditAppliedVacancy} />
          <Route path="/ApplicanEventView" component={ApplicanEventView} />



        
        

          <Route path="/employerDashboard" component={employerDashboard} />
          <Route path="/employerCreateJob" component={employerCreateJob} />
          <Route path="/EmployerCreatedJobList" component={EmployerCreatedJobList} />
          <Route path="/employerEditJob" component={employerEditJob} />
          <Route path="/SetPassword" component={EmployerSetPassword} />
          <Route path="/employer/activate/:activation_token" component={EmpActiveEmail} exact/>



        











        </Switch>
      </Router>
    </div>
  );
}

export default App;
