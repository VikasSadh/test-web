import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class DefaultFooterMenus extends Component {
  render() {
    return (
      <div className="footer-menus">
        <ul className="list-unstyled d-inline-flex">
          { /* <li><Link to="/">Sitemap</Link></li>
          <li><Link to="/terms-and-conditions">Terms & Conditions</Link></li> */ }
          <li><Link to="/privacy-policy">Privacy Policy</Link></li>
          { /*<li><Link to="/">Blog</Link></li> */ }
          <li><Link to="/aboutus">About Us</Link></li>
          <li><Link to="/contactus">Contact Us</Link></li>
          <li><Link to="/">Careers</Link></li>
          <li><Link to="/">Testimonials</Link></li>
          <li><Link to="/">Feedback</Link></li>
          <li><Link to="/">FAQ</Link></li>
          { /*// <li><Link to="/">Help Center</Link></li>
          // <li><Link to="/">Sales Enquiry</Link></li> */ }
        </ul>   
      </div>
    );
  }
}

export default DefaultFooterMenus;
