import React from "react"
import { NavLink } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="row">
        <div className="col-md-4">
          <h4>The Unforgettables, LLC</h4>
          <li>
            <NavLink to="/about">About Us</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact Us</NavLink>
          </li>
        </div>
        <div className="col-md-4">
          <h4>Legal</h4>
          <li>
            <NavLink to="/privacy">Privacy</NavLink>
          </li>
          <li>
            <NavLink to="/terms">Terms of Use</NavLink>
          </li>
        </div>
        <div className="col-md-4">
          <h4>Connect With Us</h4>
          <NavLink to="https://www.facebook.com/">Facebook</NavLink>&emsp;
          <NavLink to="https://www.instagram.com/">Instagram</NavLink>
          <li>
            <NavLink to="https://twitter.com/?lang=en">Twitter</NavLink>
          </li>
        </div>
      </div>
    </footer>
  )
}

export default Footer
