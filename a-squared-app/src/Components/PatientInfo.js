import React, { useState } from "react";
import "../CSS/Dashboard.css";
function PatientInfo(props) {
  const patient = props.patient;

  function getAge(dob) {
    let dobParts = dob.split("/");
    let today = new Date();
    let dobDate = new Date(dobParts[2], dobParts[0] - 1, dobParts[1]);
    let diff = today - dobDate;
    let age = Math.floor(diff / 31557600000);
    return age;
  }
  // This has the actual tags for the patient info
  return (
    <div>
      <h2 className="titleDash">
        Patient Dashboard
      </h2>
      <div>
        <h3 className="patientNameDash">
          {patient.lastName}, {patient.firstName}
        </h3>
        <p className="bdayDash">DOB: {patient.dateOfBirth}</p>
        <p>Age: {getAge(patient.dateOfBirth)}</p>
        <p>Height: {patient.height} cm</p>
        <p>Weight: {patient.weight} kg</p>
        <p>Sex: {patient.sex}</p>
      </div>
    </div>
  );
}

export default PatientInfo;
