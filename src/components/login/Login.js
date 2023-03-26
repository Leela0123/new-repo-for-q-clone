import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
function Login() {
  const [email, setEmail] = React.useState("");
  const [pass, setPass] = React.useState("");

  function handleevent(e) {
    e.preventDefault();
  }
  return (
        <div id="container">
            <h1>Quora Login Page</h1>
        <form onSubmit={handleevent}>
          <label for="user"> Email </label>
          <br />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
          />

          <br />
          <br />
          <label for="pass"> Password</label>
          <br />

          <input
            type="password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            required
          />

          <br />
          <br />
          <Link to="/home"><button
            onClick={() => {
              if (email === "") {
                alert("Please Enter Correct Email");
              }
              if (pass === "") {
                alert("Please Enter Correct Password");
              } else {
                alert("Congratulation Login success !!!");
              }
            }}
          >
            Login
          </button></Link>
        </form>
      </div>
    
  );
}

export default Login;
