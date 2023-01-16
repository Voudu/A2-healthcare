import React, { useEffect, useState } from "react";
import { HeartRate, BloodPressure } from "../Functions/FakePatient.js";
import LineChart from "./LineChartClass.js";
// File for displaying vitals for patient dashboard
// thinking of having the charts showing up next to each other
function Vitals() {
  const [hr, setHR] = useState(0);
  const [bp, setBP] = useState(0);
  const [respiration, setRespiration] = useState(0);
  const [Display, setDisplay] = useState(false);

  useEffect(() => {
    if (Display) {
      setInterval(() => {
        setHR(HeartRate());
        setBP(BloodPressure());
      }, 1000); // poll heartrate and blood pressure every second
    }
  }, [Display]);

  if (Display) {
    return (
      <div>
        <h2>Vitals</h2>
        <div className="numbers">
          <p>Heart Rate: {hr}</p>
          <p>Blood Pressure: {bp}</p>
        </div>
        <div className="charts">
          <LineChart title="heart rate" data={hr} />
        </div>
        <div>
          <button
            onClick={() => {
              setDisplay(false);
            }}
          >
            Disconnect Patient
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <h2>Vitals</h2>
        <p>No Data Available</p>
        <button
          onClick={() => {
            setDisplay(true);
          }}
        >
          Connect Patient
        </button>
      </div>
    );
  }
}

export default Vitals;
