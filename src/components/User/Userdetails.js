import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./User.css";


function Userdetails() {
  const { id } = useParams();
  const apiEndpoint = " https://jsonplaceholder.typicode.com/posts/";
  const [item, setItem] = useState({});

  useEffect(() => {
    axios
      .get(apiEndpoint.concat(id))
      .then((response) => {
        setItem(response.data);
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="container">
      <h3>UserDetails {id}</h3>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>UserId</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td> {item.id}</td>
            <td>{item.userId}</td>
            <td>{item.title}</td>
            <td>
              <button className="btn btn-primary">Edit</button>
            </td>
            <td>
              <button className="btn btn-danger">Delete</button>
            </td>
            <td>
              <button className="btn btn-success">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Userdetails;
