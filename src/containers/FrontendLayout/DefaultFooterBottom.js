import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import logo from '../../frontscss/img/footer-logo.png'

class DefaultFooterBottom extends Component {
  render() {
    return (
      <div className="footer-bottom">
        <div className="row">
          <div className="col-md-12 col-lg-4">
            <div className="footer-logo">
              <Link to="/"><img src={logo} className="img-fluid" alt="Logo" /></Link>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="footer-social">
              <ul className="list-unstyled d-inline-flex">
                <li><a href="https://www.facebook.com/ezeehousing" target="_blank"><i className="fab fa-facebook-f"></i></a></li>
                <li><a href="https://www.instagram.com/ezeehousing/" target="_blank"><i className="fab fa-instagram"></i></a></li>
                <li><a href="https://twitter.com/EzeeHousing2020" target="_blank"><i className="fab fa-twitter"></i></a></li>
                <li><a href="https://aboutme.google.com/u/0/?referer=gplus" target="_blank"><i className="fab fa-google-plus-g"></i></a></li>
                <li><a href="https://www.linkedin.com/company/ezee-housing" target="_blank"><i className="fab fa-linkedin-in"></i></a></li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 col-lg-5">
            <div className="footer-copyrights">
              <p>All Rights Reserved. &copy; Copyright 2020 Ezee Housing</p>
            </div>
          </div>
        </div>  
        <div className="footer-info">
          <p>Disclaimer: Ezee Housing bridges the gap between Landlords and Tenants without any middleman service and is not and cannot be a party to or privy to or control in any manner any transactions between Landlords and Tenants /Buyer/User. Cloud8 solutions India private limited shall neither be responsible nor liable to mediate or resolve any disputes or disagreements between the Customer/Buyer/User and the Seller and both Landlords and Tenants /Buyer/User shall settle all such disputes without involving Cloud8 solutions India private limited in any manner. This Portal may use "cookies". A cookie is a small data file that certain websites write to your hard drive when you visit them. A cookie file can contain information such as a user ID that the site uses to track the pages you have visited. The only personal information a cookie can contain is the information you supply. A cookie is only a text file and cannot read data off your hard disk or read cookie files created by other sites. Cookies can track user traffic patterns, recognize your computer's browser when you return and could provide personalized content without requiring sign in. You can refuse cookies by turning them off on your browser.</p>
        </div>
      </div>
    );
  }
}



export default DefaultFooterBottom;
