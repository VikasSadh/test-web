import React, { Component } from 'react';
// import { render } from 'react-dom';
// import PropTypes from 'prop-types';

import logo from '../../frontscss/img/footer-logo.png';
import '../../frontscss/js/custom.js';
// import 'jquery';
// import '../../frontscss/js/jquery-3.4.1.min.js';
// import '../../frontscss/js/bootstrap.min.js';
// import '../../frontscss/js/owl.carousel.min.js';
// import 'bootstrap/dist/js/bootstrap.js';
// import '../../frontscss/js/custom.js';

const DefaultFooterTop = React.lazy(() => import('./DefaultFooterTop'));
const DefaultFooterMenus = React.lazy(() => import('./DefaultFooterMenus'));
const DefaultFooterBottom = React.lazy(() => import('./DefaultFooterBottom'));

class DefaultFooter extends Component {
  render() {
    return (
      <footer>
        <div className="container">
          <div className="footer-wrap">
            <DefaultFooterTop />
            <DefaultFooterMenus />
            <DefaultFooterBottom />
          </div>
        </div>        
      </footer>
    );
  }
}



export default DefaultFooter;
