import React from "react";
import { Routes as Router, Route } from "react-router-dom";
import SuperAdmin from "./components/SuperAdmin";
import Dashboard from "./components/SuperAdmin/Dashboard";
import HRManagement from "./components/SuperAdmin/HRManagement";
import InterviewerManagement from "./components/SuperAdmin/InterviewerManagement";
import TechnologyManagement from "./components/SuperAdmin/TechnologyManagement";
import JudgementFormManagement from "./components/SuperAdmin/JudgementFormManagement";
import Scheduled from "./components/SuperAdmin/Dashboard/Scheduled";
import Shortlisted from "./components/SuperAdmin/Dashboard/Shortlisted";
import OnHold from "./components/SuperAdmin/Dashboard/OnHold";
import Rejected from "./components/SuperAdmin/Dashboard/Rejected";

const Routes = () => {
  return (
    <Router>
      <Route path="/" element={<SuperAdmin />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/scheduled" element={<Scheduled />} />
        <Route path="/shortlisted" element={<Shortlisted />} />
        <Route path="/onHold" element={<OnHold />} />
        <Route path="/rejected" element={<Rejected />} />
        <Route path="/manage-hr" element={<HRManagement />} />
        <Route path="/manage-interviewer" element={<InterviewerManagement />} />
        <Route path="/manage-technology" element={<TechnologyManagement />} />
        <Route path="/manage-form" element={<JudgementFormManagement />} />
      </Route>
    </Router>
  );
};

export default Routes;
