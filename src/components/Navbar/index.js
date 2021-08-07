import React from "react"
import { Link } from 'react-router-dom';
import Container from "../Container";

export default function Navbar() {
 return(
  <nav className="navbar" role="navigation" aria-label="main navigation">
    <Container>
      <div className="navbar-brand">
        <div className="navbar-item">
          <Link to="/">Flash Card</Link>
        </div>
      </div>

      <div className="navbar-menu">
      {/* hidden on mobile */}
        <div className="navbar-start">
          <Link className="navbar-item" to ="/">Home</Link>
        </div>
      </div>
    </Container>
  </nav>
 )
}