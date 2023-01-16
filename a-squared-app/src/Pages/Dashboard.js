import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../Components/Header.js";
import PatientInfo from "../Components/PatientInfo.js";
import Vitals from "../Components/Vitals.js";

function Dashboard() {
  const location = useLocation();
  const patient = location.state.patient;
  console.log(location.state);
  return (
    <div>
      <Header username={location.state.username} />
      <PatientInfo patient={location.state.patient} />
      <Vitals />
    </div>
  );
}

export default Dashboard;
