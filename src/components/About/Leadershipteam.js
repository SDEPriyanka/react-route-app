import React from "react";
import "./About.css";

function Leadershipteam({lidershipData , leadershipTeam}) {
  return (
    <div className="container leadershipteam">
      <div className="lidership-page mt-4 mb-3 pt-4 pb-5">
        <div className="lidership-page-heading mb-4 mb-4">
          <h1>{leadershipTeam}</h1>
        </div>
        <div className="row mx-2">
          {lidershipData?.map((res) => {
            return (
              <div className=" col-md-4 ">
                <div className="card p-2">
                <div className="lidership-image m-3">
                  <img src={res.imgurl} alt="leadershipteam" />
                </div>
                <h4> {res.name}</h4>
                <p>
                  <b>{res.desingnation}</b>
                </p>
                <p className="mb-4">{res.department}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Leadershipteam;
