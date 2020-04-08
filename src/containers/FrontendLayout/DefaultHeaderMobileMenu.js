import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import menulogo from '../../frontscss/img/others/menu-logo.png'
// import onClickOutside from 'react-onclickoutside'

class DefaultHeaderMobileMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {  toggled: false };
    this.toggleMenu = this.toggleMenu.bind(this);
  }
  state = {
    shown: false,
  };
  toggleMenu() {
    let isToggled = this.state.toggled;
    this.setState({ toggled: !isToggled});
  }
  render() {
    return (             
      <div className="sidebar-menus">
        {/*<a id="menu-toggle" className="btn" onClick={this.toggleMenu} ><i className="fas fa-bars"></i></a>*/}
        <a id="menu-toggle" className="btn" onClick={this.toggleMenu} ><img src={menulogo} alt="Menu_Icon" /></a>
       { this.state.toggled==true ?  
        <div id="sidebar-wrapper" className="">
          <a id="menu-close" onClick={this.toggleMenu} className="btn"><i className="fas fa-times"></i></a>
          <ul className="sidebar-nav">                
            <li className="sidebar-link">
              <Link className="" onClick={this.toggleMenu} to="/">Home</Link>
            </li>                
            { /*<li className="sidebar-link">
              <Link className="more-link" to="" onClick={() => this.setState({ shown: !this.state.shown })}>Buy</Link>
              {this.state.shown ? 
              <ul className="list-unstyled sidebar-submenu">
                <li><Link onClick={this.toggleMenu} to="/">Residential</Link></li>
                <li><Link onClick={this.toggleMenu} to="/">Commercial</Link></li>
              </ul> : null }
            </li>               
            <li className="sidebar-link">
              <Link className="more-link" to="" onClick={() => this.setState({ shown: !this.state.shown })}>Rent</Link>
              {this.state.shown ? 
              <ul className="list-unstyled sidebar-submenu">
                <li><Link onClick={this.toggleMenu} to="/">Residential</Link></li>
                <li><Link onClick={this.toggleMenu} to="/">Commercial</Link></li>
              </ul>: null }
            </li> */}             
            <li className="sidebar-link">
              <Link className="more-link" onClick={() => this.setState({ shown: !this.state.shown })}>Rental Pricing</Link>
              {this.state.shown ? 
              <ul className="list-unstyled sidebar-submenu">
                <li><Link to="">Residential</Link>
                  <ul className="list-unstyled sidebar-submenu">
                    <li><Link onClick={this.toggleMenu} to="/residential/landlord-pricing">I Am A Landlord </Link></li>
                    <li><Link onClick={this.toggleMenu} to="/residential/tenant-pricing">I Am A Tenant</Link></li>
                  </ul>
                </li>
                <li><Link to="">Commercial</Link>
                  <ul className="list-unstyled sidebar-submenu">
                    <li><Link onClick={this.toggleMenu} to="/commercial/landlord-pricing">I Am A Landlord </Link></li>
                    <li><Link onClick={this.toggleMenu} to="/commercial/tenant-pricing">I Am A Tenant</Link></li>
                  </ul>
                </li>
              </ul>: null }
            </li>
            <li className="sidebar-link">
              <Link className="" onClick={this.toggleMenu} to="/aboutus">About Us</Link>
            </li>
            <li className="sidebar-link">
              <Link className="" onClick={this.toggleMenu} to="/contactus">Contact Us</Link>
            </li>                   
          </ul>
        </div>
      : (null) }

      </div>                 
    );
  }
}

export default DefaultHeaderMobileMenu;
