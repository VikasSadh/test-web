import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Badge, UncontrolledDropdown, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem } from 'reactstrap';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import $ from 'jquery';
// import   '../../frontscss/css/bootstrap.css';
import   'bootstrap/dist/css/bootstrap.css';
// import   'owl.carousel/dist/assets/owl.carousel.min.css';
// import   'owl.carousel/dist/assets/owl.theme.default.min.css';
// import  '../../frontscss/css/owl.carousel.min.css';
// import  '../../frontscss/css/owl.theme.default.min.css';
import  '../../frontscss/css/fonts.css';
import  '../../frontscss/css/fontawesome.css';
import  '../../frontscss/frontstyle.css';

const DefaultHeaderMenu = React.lazy(() => import('./DefaultHeaderMenu'));
const DefaultHeaderMobileMenu = React.lazy(() => import('./DefaultHeaderMobileMenu'));
const DefaultHeaderBtns = React.lazy(() => import('./DefaultHeaderBtns'));

class DefaultHeader extends Component {
	 constructor(props) {
		super(props);
		this.state = { urlpath:'' }
		
		
};


componentDidMount() {
		//console.log(window.location.href);
		// console.log(window.location.pathname);
		// let urlpath = window.location.pathname;
		// this.setState({urlpath:urlpath});
    $(window).scroll(function(){
      if ($(window).scrollTop() >= 250) {
        $('.header-top').addClass('fixed-header');
       }
       else {
        $('.header-top').removeClass('fixed-header');
       }
    });
}
  render() {
	  let $this = this;
    return (
      <header>
	  { /* "header-top" 
        // <div className={classNames({ 'header-top': true, 'in-header-top': $this.state.urlpath != '/' })} >*/}
        <div className="header-top">
          <div className="container">
            <div className="row">
              <div className="col-2 d-block d-sm-block d-md-none d-lg-none pr-0">
                <DefaultHeaderMobileMenu openModalPopup={this.props.openModalPopup} />
              </div>
              <div className="col-md-9 d-none d-sm-none d-md-block">
                <DefaultHeaderMenu  openModalPopup={this.props.openModalPopup} />
              </div>
              <div className="col-10 col-md-3 pl-0">
                <DefaultHeaderBtns  openModalPopup={this.props.openModalPopup} />
              </div>
            </div>
          </div>
        </div>    
      </header>    
    );
  }
}



export default DefaultHeader;
