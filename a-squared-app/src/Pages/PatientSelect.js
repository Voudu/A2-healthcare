import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../Components/Header";
import Patient from "../Components/Patient";
import "../CSS/PatientSelect.css";
import { db } from "../dbInstance";
import { getAllPatients } from "../dbFuncs";

function PatientSelect() {
  const location = useLocation();
  const [data, setData] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [Search, setSearch] = useState("");
  const [searchParam, setSearchParam] = useState(["firstName", "lastName"]);
  useEffect(() => {
    // for now we will use fake data
    let fakeData = [
      {
        id: 1,
        firstName: "Logan",
        lastName: "Stein",
        dateOfBirth: "1/1/2000",
        sex: "M",
      },
      {
        id: 2,
        firstName: "Alex",
        lastName: "Escatel",
        dateOfBirth: "1/1/2000",
        sex: "M",
      },
      {
        id: 3,
        firstName: "Burhan",
        lastName: "Cutlerywala",
        dateOfBirth: "1/1/2000",
        sex: "M",
      },
      {
        id: 4,
        firstName: "Mike",
        lastName: "Squires",
        dateOfBirth: "1/1/2000",
        sex: "M",
      },
    ];

    // fetch patients from db here
    (async () => {
      let pats = await getAllPatients(db);
      console.log(pats);
      pats.forEach((item) => {
        fakeData.push(item);
      });
      // supplementing data from database with fake data
      setData(fakeData);
      setLoaded(true);
    })();
  }, []);

  function search(items) {
    return items.filter((item) => {
      return searchParam.some((newItem) => {
        return (
          item[newItem].toString().toLowerCase().indexOf(Search.toLowerCase()) >
          -1
        );
      });
    });
  }

  return (
    <div>
      <Header username={location.state.username} />
      <h1 className="greeting">Welcome {location.state.username}</h1>
      <div className="search-container">
        <input
          className="search"
          name="Search"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          placeholder="Search"
        />
      </div>
      <div>
        <div>
          {loaded ? (
            search(data).map((item) => {
              return (
                <Patient
                  id={item.id}
                  patient={item}
                  username={location.state.username}
                />
              );
            })
          ) : (
            <center>
              <p>Loading...</p>
            </center>
          )}
        </div>
      </div>
    </div>
  );
}

export default PatientSelect;
