import React from "react";
import "./About.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Leadershipteam from "./Leadershipteam";
import Advisoryboard from "./Advisoryboard";

function About() {
  const apiLeadershipEndpint = "http://localhost:3000/LeadershipTeam";
  const apiAdvisoryboardEndpoint = "http://localhost:3000/AdvisoryBoard";
  const leadershipTeam ="Leadership Team"
  const advisoryboard = "Advisory Team"
  const [lidership, setLidership] = useState([]);
  const [advisory, setAdvisory] = useState([]);

  useEffect(() => {
    axios
      .get(apiLeadershipEndpint)
      .then((res) => {
        setLidership(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get(apiAdvisoryboardEndpoint)
      .then((res) => {
        setAdvisory(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <section className="wrapper">
        <div className="container mt-5 mb-5">
          <div className="row">
            <div className="col-md-6">
              <div className="about-img">
                <img
                  src="https://gokhana.com/wp-content/uploads/2022/03/gokhana-image-6.png"
                  alt="about width"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="about-desc my-1">
                <div className="heading mb-3">
                  <h1>
                    <b>Who We Are</b>
                  </h1>
                </div>
                <div className="para-1 mb-2">
                  <p>
                    GoKhana is a full-stack B2B technology company that manages
                    end-to-end food programs for corporates and enables the
                    Next-Gen Digitized Cafeteria
                  </p>
                </div>
                <div className="para-1 mb-2">
                  <p>
                    GoKhana is a full-stack B2B technology company that manages
                    end-to-end food programs for corporates and enables the
                    Next-Gen Digitized Cafeteria
                  </p>
                </div>

                
                <div className="para-2 mb-2">
                  <p>
                    Our continuous focus on innovation and usability has also
                    earned us the Best Cafeteria Technology Company 2021 Award
                    from iNFHRA. Catering to a signed user base of over 1
                    million and processing over 1 Lakh+ orders a day, 
                    strong team of over 350 employees and services 200+
                    cafeterias which includes those of 10+ Fortune-500 companies
                    operating in India
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Leadershipteam lidershipData={lidership} leadershipTeam = {leadershipTeam}  />
      <Advisoryboard advisoryData={advisory} advisoryboard={advisoryboard} />
    </div>
  );
}

export default About;
