import React from "react";
import { Routes as Router, Route } from "react-router-dom";
import SuperAdmin from "./components/SuperAdmin";
import Dashboard from "./components/SuperAdmin/Dashboard";
import HRManagement from "./components/SuperAdmin/HRManagement";
import InterviewerManagement from "./components/SuperAdmin/InterviewerManagement";
import TechnologyManagement from "./components/SuperAdmin/TechnologyManagement";
import JudgementFormManagement from "./components/SuperAdmin/JudgementFormManagement";
import ActionCard from "./components/SuperAdmin/Dashboard/ActionCard";
import ViewJudgement from "./components/SuperAdmin/ViewJudgement";

const Routes = () => {
  return (
    <Router>
      <Route path="/" element={<SuperAdmin />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/scheduled" element={<ActionCard />} />
        <Route path="/shortlisted" element={<ActionCard />} />
        <Route path="/onHold" element={<ActionCard />} />
        <Route path="/rejected" element={<ActionCard />} />
        <Route path="/manage-hr" element={<HRManagement />} />
        <Route path="/manage-interviewer" element={<InterviewerManagement />} />
        <Route path="/manage-technology" element={<TechnologyManagement />} />
        <Route path="/manage-form" element={<JudgementFormManagement />} />
      </Route>
      <Route path="/judgementForm/:id" element={<ViewJudgement />} />
    </Router>
  );
};

export default Routes;
