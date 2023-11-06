import React from "react";
import "./About.css";

function Advisoryboard({ advisoryData , advisoryboard}) {
  return (
    <div className="container advisoryboard">
      <div className="advisory-page mt-4 mb-3 pt-2 pb-4">
        <div className="advisory-page-heading mt-4 mb-4">
          <h1>{advisoryboard}</h1>
        </div>
        <div className="row mx-2">
          {advisoryData?.map((res) => {
            return (
              <div className="col-md-4">
                <div className="card p-2">
                  <div className="advisory-image m-3">
                    <img src={res.imgurl} alt="advisory" />
                  </div>
                  <h4> {res.name}</h4>
                  <p className="mb-5">{res.description.substring(0,160)}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Advisoryboard;
