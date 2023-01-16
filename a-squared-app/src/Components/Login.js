import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// import {auth} from "../firebase";

// components are individual sections of a page. Think tweets on twitter or Youtube videos (thumbnails and title on homepage)
//  They are most efficient when you repeat them multiple times on the same page

function Login() {
  const [username, setUsername] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();

  const signIn = (e) => {
    e.preventDefault();
    navigate("/PatientSelect", { state: { username: username } });
  };

  return (
    <div>
      <form>
        <input
          id="username"
          type="text"
          name="username"
          placeholder="Username"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <input
          id="password"
          type="password"
          placeholder="Password"
          onChange={(e) => {
            setpassword(e.target.value);
          }}
        />
        <button onClick={signIn}>Log in</button>
      </form>
    </div>
  );
}

export default Login;
