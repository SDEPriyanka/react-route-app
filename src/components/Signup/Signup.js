import React, { useState } from "react";
import "./Signup.css";

function Signup() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [pswd, setPswd] = useState();
  


    const handelName = (e) => {
        e.preventDefault();
        setName(e.target.value);
      };
    const handelEmail = (e) => {
      e.preventDefault();
      setEmail(e.target.value);
    };
    const handelPhone = (e) => {
        e.preventDefault();
        setPhone(e.target.value);
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
        <div className="form ">
        <div className="cntainer">
          <form className="signup card p-4 m-5">
            <h4 className="text-center">SignUp</h4>
            <div className="mb-3 mt-1 ">
              <label className="form-label">User Name:</label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter Name"
                name="name"
                value={name}
                onChange={handelName}
              />
            </div>
            <div className="mb-3 mt-1 ">
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
            <div className="mb-3 mt-1 ">
              <label className="form-label">Phone:</label>
              <input
                type="number"
                className="form-control"
                id="phone"
                placeholder="Enter Phone Number"
                name="phone"
                value={phone}
                onChange={handelPhone}
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

          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup