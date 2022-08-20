import React from 'react'
import { Routes, Route, Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/login">Login</Link>
    </li>
    <li>
      <Link to="/register">Registartion</Link>
    </li>
    <li>
      <Link to="/upload">Upload File</Link>
    </li>
    
  </div>
  )
}

export default NavBar