/*
    dbFuncs.js

    Functions used to interact with the database. Used to update, get, and set data in the firebase firestore database.
    Makes a connection to the database using and instance of the dbInstance class passed to each function.

    references:
        https://firebase.google.com/docs/firestore/manage-data/add-data
        https://firebase.google.com/docs/firestore/query-data/get-data
        https://firebase.google.com/docs/firestore/query-data/queries
*/
import {
  collection,
  query,
  doc,
  setDoc,
  getDoc,
  getDocFromCache,
  getDocs,
  addDoc,
} from "firebase/firestore";

/*
addPatient

adds a patient to the database given a db referenced and initial vars
*/

async function addPatient(db, fname, lname, dob, gender, hgt, wgt) {
  // TODO: add regex checking for dateOfBirth
  // TODO: add type checking for height & weight

  const patientRef = await addDoc(collection(db, "patients"), {
    firstName: fname,
    lastName: lname,
    gender: gender,
    dateOfBirth: dob,
    height: hgt,
    weight: wgt,
  });
}

// get all patients in the database for patient selection
async function getAllPatients(db) {
  //   const patientsRef = db.collection("patients");
  const q = query(collection(db, "patients"));

  const snapshot = await getDocs(q);
  let pats = [];
  snapshot.forEach((doc) => {
    // console.log(doc.id, "=>", doc.data());
    pats.push(doc.data());
  });
  return pats;
}

export { getAllPatients, addPatient };
