import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./Product.css";

function Productdetails() {
  const { id } = useParams();
  const apiEndpoint = " https://jsonplaceholder.typicode.com/users/";
  const [item, setItem] = useState({});

  useEffect(() => {
    axios
      .get(apiEndpoint.concat(id))
      .then((response) => {
        setItem(response.data);
        console.log(response.data.address.street
            );
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="container">
     
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.phone}</td>
            <td>
                <address>
                {item.address?.street}<br />
                {item.address?.suite}
                </address>
              
                
            </td>
          
        
             
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Productdetails;
