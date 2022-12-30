import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import AdminDashboard from "../pages/AdminDashboard";
import AssociateMinting from "../pages/AssociateMinting";
import ChairmanMinting from "../pages/ChairmanMinting";
import CorporateMinting from "../pages/CorporateMinting";
import Disclaimer from "../pages/Disclaimer";
import ExecutiveMinting from "../pages/ExecutiveMinting";

import Home from "../pages/home";
import InternMinting from "../pages/InternMinting";
import Memberdashboard from "../pages/MemberDashboard";
import PresidentMinting from "../pages/PresidentMinting";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import Terms from "../pages/Terms";

const Routerapp = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="admindashboard" element={<AdminDashboard />} />
          <Route path="Memberdashboard" element={<Memberdashboard />} />
          <Route path="internminting" element={<InternMinting />} />
          <Route path="associateminting" element={<AssociateMinting />} />
          <Route path="chairmanminting" element={<ChairmanMinting />} />
          <Route path="executiveminting" element={<ExecutiveMinting />} />
          <Route path="corporateminting" element={<CorporateMinting />} />
          <Route path="presidentminting" element={<PresidentMinting />} />
          <Route path="disclaimer" element={<Disclaimer />} />
          <Route path="privacypolicy" element={<PrivacyPolicy />} />
          <Route path="terms" element={<Terms />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Routerapp;
