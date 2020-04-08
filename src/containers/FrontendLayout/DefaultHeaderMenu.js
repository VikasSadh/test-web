import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../frontscss/img/header-logo.png'

class DefaultHeaderMenu extends Component {
  render() {
    return (             
      <div className="header-menus">
        <nav className="navbar navbar-expand-md">
          <Link className="navbar-brand" to="/"><img src={logo} className="img-fluid" alt="logo" /></Link>
          <button className="navbar-toggler navbar-dark" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              {/*<li className="nav-item">
                <a className="nav-link more-link" href="/home">Buy</a>
                <ul className="sub-menu">
                  <li><a href="/">Residential</a></li>
                  <li><a href="/">Commercial</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link more-link" href="/home">Rent</a>
                <ul className="sub-menu">
                  <li><a href="/">Residential</a></li>
                  <li><a href="/">Commercial</a></li>
                </ul>
              </li>*/}
              <li className="nav-item">
                <a className="nav-link more-link" >Rental Pricing</a>
                <ul className="sub-menu">
                  <li><Link to="">Residential</Link>
                    <ul className="in-sub-menu">
                      <li><Link to="/residential/landlord-pricing">I Am A Landlord </Link></li>
                      <li><Link to="/residential/tenant-pricing">I Am A Tenant</Link></li>
                    </ul>
                  </li>
                  <li><Link to="">Commercial</Link>
                    <ul className="in-sub-menu">
                      <li><Link to="/commercial/landlord-pricing">I Am A Landlord </Link></li>
                      <li><Link to="/commercial/tenant-pricing">I Am A Tenant</Link></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link to="/aboutus" className="nav-link">About Us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contactus">Contact Us</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>                 
    );
  }
}



export default DefaultHeaderMenu;
