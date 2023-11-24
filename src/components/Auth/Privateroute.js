import React from 'react'
import { Navigate } from 'react-router-dom';
function Privateroute( {Component} ) {

 const isAuth = true;
 
  return  isAuth ? <Component /> : <Navigate to="/signin" />
}

export default Privateroute