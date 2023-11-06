import React from 'react'
import { Navigate } from 'react-router-dom';
function Privateroute( {Component} ) {

 const isAuth = false;
 
  return  isAuth ? <Component /> : <Navigate to="/signin" />
}

export default Privateroute