import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import NavBar from './NavBar';

function Header() {
  return (
    <div>
    <Link to="/">Logo</Link>
    <NavBar />
  </div>
  )
}

export default Header