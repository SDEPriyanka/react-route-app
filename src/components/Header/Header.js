import React from "react";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <div>
      <section className="header">
        <nav class="navbar navbar-expand-sm navbar-light bg-light">
          <div class="container">
            <div className="logo-img">
              <b>Policybazaar</b>
            </div>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse " id="navbarSupportedContent">
              <ul class="navbar-nav ms-auto">
                <li className="nav-item">
                  <NavLink to="/" className="nav-link">
                    Home
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink to="/about" className="nav-link">
                    About
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink to="/product" className="nav-link">
                    Product
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink to="/user" className="nav-link">
                    User
                  </NavLink>
                </li>

                <li className="nav-item">
                  <Link  to="/signin" className="nav-link">
                    <button className="">Sign In</button>
                  </Link>
                </li>

              </ul>
            </div>
          </div>
        </nav>
      </section>
    </div>
  );
}

export default Header;
