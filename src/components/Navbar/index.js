import React from "react"
import { Link } from 'react-router-dom';
import Container from "../Container";
import FLASHCARDlogo from "../../FLASHCARDlogo.png"
import "./style.css"

export default function Navbar() {
 return(
  <nav className="navbar" role="navigation" aria-label="main navigation">
    <Container>
      <div className="navbar-brand">
        <div className="navbar-item">
          <Link to="/">
            <img src={FLASHCARDlogo} alt="logo" className="logo" />
          </Link>
        </div>
      </div>

      <div className="navbar-menu">
      {/* hidden on mobile */}
        <div className="navbar-start">
          <Link className="navbar-item" to ="/">Home</Link>
        </div>
        <div className="navbar-end">
          <a className="navbar-item" target="_blank" rel="noreferrer" href="https://github.com/gerarjon/flash-cards">Github</a>
        </div>
      </div>
    </Container>
  </nav>
 )
}