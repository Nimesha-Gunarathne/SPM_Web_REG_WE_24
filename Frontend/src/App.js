import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';

import homeRegistation from "./components/pages/Registations/RegistationHome/registationHome";
import studentRegister from "./components/pages/Registations/ApplicantRegistation/applicantRegistation"
import employeRegister from "./components/pages/Registations/EmployerRegistation/employeeRegistation"

import login from "./components/pages/Login/login"

import applicantHome from "./components/pages/Applicant Home/applicantHome"
import adminDashboard from "./components/pages/Admin Dashboard/adminDashboard"
import employerDashboard from "./components/pages/Employer Dashboard/employerDashboard"



function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={homeRegistation} />
          <Route path="/studentRegister" component={studentRegister} />
          <Route path="/employeRegister" component={employeRegister} />

          <Route path="/login" component={login} />

          <Route path="/applicantHome" component={applicantHome} />
          <Route path="/adminDashboard" component={adminDashboard} />
          <Route path="/employerDashboard" component={employerDashboard} />




        </Switch>
      </Router>
    </div>
  );
}

export default App;
