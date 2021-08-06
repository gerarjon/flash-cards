import React from "react"
import { Link } from 'react-router-dom';

export default function Navbar() {
 return(
  <nav className="navbar" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <div className="navbar-item">
        <Link to="/">Flash Card</Link>
      </div>
    </div>
  </nav>
 )
}