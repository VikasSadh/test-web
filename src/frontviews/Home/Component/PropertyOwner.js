import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import propertyimg from '../../../frontscss/img/others/c-img1.jpg'
class PropertyOwner extends Component {
 constructor(props) {
    super(props);
	
 }

render() {
	return (
		<div className="info-section post-section">
			<div className="container">
				<div className="row">
					<div className="col-md-6">
						<div className="info-img">
							<img src={propertyimg} className="img-fluid" alt="Image" />
						</div>
					</div>
					<div className="col-md-6">
						<div className="info-contents section-heading">
							<h3>Are You a Property Owner?</h3>
							<p>Are you finding yourself at the crossroads of renting or selling your property? Reach us get a customised solutions as per your requirements.</p>
							<p>We are proud to say that we have the expertise to serve you end to end. </p>
							<ul className="">
								<li>Register yourself with us and enter your peoperty details.</li>
								<li>We help you find the right tenant for your property. </li>
								<li>We offer the rental agreement service with police verification in order to smoothen the transaction in a hassle free manner.</li>
								<li>You pay no brokerage to us, but only a standard service fee.</li>
								<li>That's it! Transparency is the best policy & we make our grade on it.</li>
							</ul>
							<a href="/post-a-property" className="btn cmn-btn"><i className="fas fa-building"></i> Post Your Property</a>
						</div>
					</div>
				</div>      
			</div>
		</div>
	)
  }
}

export default PropertyOwner;
