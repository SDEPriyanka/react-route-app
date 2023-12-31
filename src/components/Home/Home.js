import React from 'react'
import "./Home.css";
function Home() {
  return (
    <div>
         <section className="insuranceplan">
        <div className="container insuranceplan">
         
            <div className=" insuranceplan-left">
              <div className="insuranceplan-heading">
                <h4>Health Insurance Plans for Family</h4>
                <p className="insurance-desc">
                  The financial security of your family is essential to Family health insurance provides coverage
                  to your entire family against medical expenses incurred during Family health insurance provides coverage
                  to your entire family against medical expenses incurred during afford
                  medical care today. 
                  
                </p>
              </div>
              <div className="row">
                <div className="col-md-6 M-5">
                  <div className="left-insuranceplan-body-desc">
                    <div className="point">
                      <div className="left">
                        <i className="fa-regular fa-face-smile"></i>
                      </div>
                      <div className="right">
                        <p className="primary"> 30 minutes claim support##</p>
                        <p className="secondary">(In 120+ cities)</p>
                      </div>
                    </div>
                    <div className="point">
                      <div className="left">
                        <i className="fa-solid fa-location-pin"></i>
                      </div>
                      <div className="right">
                        <p className="primary">Relationship manager</p>
                        <p className="secondary">For every customer</p>
                      </div>
                    </div>
                    <div className="point">
                      <div className="left">
                        <i className="fa-solid fa-user"></i>
                      </div>
                      <div className="right">
                        <p className="primary"> 24*7 claims assistance</p>
                        <p className="secondary">In 30 mins. guaranteed*</p>
                      </div>
                    </div>
                    <div className="point">
                      <div className="left">
                        <i className="fa-solid fa-bell-slash"></i>
                      </div>
                      <div className="right">
                        <p className="primary">Instant policy issuance</p>
                        <p className="secondary">No medical tests~</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="right-family-img">
                    <img src="https://uploads-ssl.webflow.com/618a45bf80c9417c925f24e1/63b817154f0d3a11f2040903_hero-img.png" alt="img" />
                  </div>
                </div>
                
              </div>
            </div>
          
        </div>
      </section>
    </div>  
  )
}

export default Home