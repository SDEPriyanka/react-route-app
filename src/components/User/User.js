import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import "./User.css";




function User({userheading}) {
    const apiEndpint = "https://jsonplaceholder.typicode.com/posts"

    const[account, setAccount] = useState([]);

    useEffect(() => {
        axios.get(apiEndpint)
        .then((res) => {
            setAccount(res.data)
        })
        .catch(err => console.log(err));
    },[]);
   
  return (
    <div className='container'>
        <h1 className='text-center m-2'>{userheading}</h1>
        {account.length > 0 ?
         (<table className="table  table-bordered m-4">
            <thead>
            <tr>
                <td>ID</td>
                <td>UserId</td>
                <td>Title</td>
                <td>Body</td>
                
            </tr>
            </thead>
 
            {account.map ((account,index) => {
        return (
            <tbody>
                <tr> 
                    <td> <Link  className='user-id' to={`${account.id}`} > {account.id} </Link></td>
                    <td>{account.userId}</td>
                    <td>{account.title}</td>
                    <td>{account.body}</td> 
                </tr>
            </tbody>
           
        )
    })}

        </table>) : (
            <h1 className='error-msg text-center'>No Data Found</h1>
        )

        }








        
    </div>
  )
}

export default User