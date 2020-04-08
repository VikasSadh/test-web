import React, { Component } from 'react';
import { Link } from 'react-router-dom';
const Breadcrumb = React.lazy(() => import('../Home/Component/Breadcrumb'));
const PageBottomImage = React.lazy(() => import('../Home/Component/PageBottomImage'));

class AboutUs extends Component {
 constructor(props) {
    super(props);
	
 }
 
render() {
	return (
		<div className="contents in-contents">   
			<div className="about-section">				
				<div className="container">
					<div className="breadcrumb-section">
							<nav aria-label="breadcrumb">
									<ul className="breadcrumb">
										<li className="breadcrumb-item"><Link to="/">Home</Link></li>
										<li className="breadcrumb-item">About Us</li>
								    </ul>
							</nav> 
					</div>				
					<div className="about-contents">
					  <div className="about-details inner-heading">
						<h4>About Ezee Housing</h4>
						<p>Ezee Housing is an efficient, ease-to- access platform dedicated towards for all the rental needs. It’s a one stop solution dedicate towards connecting the tenants and landlords. We are here to address the growing needs in the rental industry for tenants as well as landlords and give solutions in an very ease technology way. Ezee Housing providing in-depth and complete crucial information required by the tenant to acquire for rent or lease in a cost effective manner. We are starting our operations in Chennai - an Economic metro city, later we will spread to 28 cities across pan India.</p>
						<p>By doing this we are creating a broker free rental market across cities by giving satisfied and transparent service to both tenants and landlords. We are here in the industry to change the difficulty of relocation and make the process simple to the consumers by providing interactive services and fast decision making methods.</p>
						<p>Our Ultimate motto is to have a hassle free and transparent rental solution to both landlords & tenants and to make them convenient by saving their Time, Money & Energy.</p>
					  </div>
					  <div className="about-details inner-heading">
						<h4>Why Choose Us</h4>
						<p>We are passionate about creating an incredible client experience and determined to get you the very best results!</p>
						<p>We are very particular about the photography about of your home and your property and Stunning professional photography.</p>
						<div className="row">
						  <div className="col-md-6">
							<div className="about-lists">
							  <ul className="list-unstyled">
								<li>Broker Free Platform</li>
								<li>Hassle free service for both landlord & tenant</li>
								<li>360 Degree video Format</li>
								<li>On time delivery</li>
							  </ul>
							</div>
						  </div>
						  <div className="col-md-6">
							<div className="about-lists">
							  <ul className="list-unstyled">
								<li>In depth information</li>
								<li>Saving time, money & energy</li>
								<li>User-friendly</li>
							  </ul>
							</div>
						  </div>
						</div>
					  </div>
					  <div className="about-details inner-heading">
						<h4>Our Mission</h4>
						<p>The mission of  Ezee Hosuing  is to provide an outstanding level of service and expertise in the real estate market that is innovative and ambitious. The Ezee Hosuing  is dedicated to the highest standards, systems and performance necessary to fulfill all of your real estate dreams.</p>
					  </div>
					  <div className="about-details inner-heading">
						<h4>Our Vision</h4>
						<p>To become the leading real estate company in India providing world class real estate services that meet our clients needs at all time.</p>
					  </div>
					</div>
				</div>
			</div>
			<PageBottomImage />
		</div>
		
	)
  }
}

export default AboutUs;
