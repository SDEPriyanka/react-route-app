import React, { useState } from "react";
import { Link } from "react-router-dom";

function Signin() {
  const [email, setEmail] = useState("");
  const [pswd, setPswd] = useState();

  const handelEmail = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };
  const handelPswd = (e) => {
    e.preventDefault();
    console.log(e)
    setPswd(e.target.value);
  };
  const handelSubmit = (e) => {
    e.preventDefault();
     
  };

  return (
    <div>
      <div className="form">
        <div className="cntainer">
          <form className="login">
            <h4>Login</h4>
            <div className="mb-3 mt-1">
              <label className="form-label">Email:</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter Email"
                name="email"
                value={email}
                onChange={handelEmail}
              />
            </div>
            <div className="mb-3 m">
              <label className="form-label">Password:</label>
              <input
                type="Password"
                className="form-control"
                id="pswd"
                placeholder="Enter Password"
                name="pswd"
                value={pswd}
                onChange={handelPswd}
              />
            </div>
            <button
              type="submit"
              onClick={handelSubmit}
              className="btn btn-primary"
            >
              submit
            </button>

            <div>
              <Link to="signup" className="signup">
                SignUp
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signin;
