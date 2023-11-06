import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Product.css";



function Product({productheading}) {
  const apiEndpint = "https://jsonplaceholder.typicode.com/users";

  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(apiEndpint)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

 

  return (
    <div className="container">
      <h1 className="text-center m-2">{productheading}</h1>
      {data.length > 0 ? (
        <table className="table  table-bordered">
          <thead>
            <tr>
              <td>ID</td>
              <td>Name</td>
              <td>Username</td>
              <td>Email</td>
              <td>Phone</td>
              <td>Website</td>
            </tr>
          </thead>
          {data.map((data, index) => {
            return (
              <tbody>
                <tr >
                  <td>
                    {" "}
                    <Link className="product-id" to={`${data.id}`}> {data.id} </Link>
                  </td>
                  <td>{data.name}</td>
                  <td>{data.username}</td>
                  <td>{data.email}</td>
                  <td>{data.phone}</td>
                  <td>{data.website}</td>
                </tr>
              </tbody>
            );
          })}
        </table>
      ) : (
        <h1 className="error-msg text-center">No Data Found</h1>
      )}
    </div>
  );
}

export default Product;
