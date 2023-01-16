import React from "react";
import { useNavigate } from "react-router-dom";
import "../CSS/Header.css";

function Header(props) {
  const navigate = useNavigate();
  return (
    <div>
      <div className="header-container">
        <span id="records">Patient Records</span>
        <span
          id="patients"
          onClick={() => {
            navigate("/PatientSelect", { state: { username: props.username } });
          }}
        >
          All Patients
        </span>
        <span
          id="exit"
          onClick={() => {
            navigate("/");
          }}
        >
          Exit
        </span>
      </div>
    </div>
  );
}

export default Header;
