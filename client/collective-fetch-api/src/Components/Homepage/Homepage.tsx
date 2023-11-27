import React from "react";
import "./Homepage.css";
import { BrowserRouter, Link, Outlet } from "react-router-dom";

export const Homepage = () => {
  return (
    <>
      <div className="homepage-wrapper">
        <div className="home-sidenav">
          <div className="sidenav-logo">Collective Finance</div>
          <div className="sidenav-links">
            <div className="sidenav-link-wrapper">
              <Link to="/" className="sidenav-link">
                Overview
              </Link>
            </div>
            <div className="sidenav-link-wrapper">
              <Link to="/portfolio" className="sidenav-link">
                Portfolio
              </Link>
            </div>
            <div className="sidenav-link-wrapper">
              <Link to="/positions" className="sidenav-link">
                Positions
              </Link>
            </div>
            <div className="sidenav-link-wrapper">
              <Link to="/expenses" className="sidenav-link">
                Expenses
              </Link>
            </div>
            <div className="sidenav-link-wrapper">
              <Link to="/orders" className="sidenav-link">
                Orders
              </Link>
            </div>
          </div>
          <div className="sidenav-control">
            <button>Logout</button>
          </div>
        </div>
        <div className="homepage-content">
          <Outlet />
        </div>
      </div>
    </>
  );
};
