/*
    dbIsntance.js

    a class which returns a reference to the firestore database. Contains all the necessary config data to access the db.
*/

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
/*
class dbInstance {
  constructor() {
    // Web app firebase config
    const firebaseConfig = {
      apiKey: "AIzaSyC_zTB_1k-50rFTDewkjXV5uphaGn8y5_M",
      authDomain: "a2-db-990d2.firebaseapp.com",
      projectId: "a2-db-990d2",
      storageBucket: "a2-db-990d2.appspot.com",
      messagingSenderId: "951205217420",
      appId: "1:951205217420:web:75bf5fef900980ece467a9",
    };

    // Initialize
    const app = initializeApp(firebaseConfig);

    // Initialize Realtime Database and get a reference to the service
    const db = getFirestore(app);
  }

  getDB() {
    return this.db;
  }
}
*/
const firebaseConfig = {
  apiKey: "AIzaSyC_zTB_1k-50rFTDewkjXV5uphaGn8y5_M",
  authDomain: "a2-db-990d2.firebaseapp.com",
  projectId: "a2-db-990d2",
  storageBucket: "a2-db-990d2.appspot.com",
  messagingSenderId: "951205217420",
  appId: "1:951205217420:web:75bf5fef900980ece467a9",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
