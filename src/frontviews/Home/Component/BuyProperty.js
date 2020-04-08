import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import buypropertyimg from '../../../frontscss/img/others/c-img2.jpg'
class BuyProperty extends Component {
 constructor(props) {
    super(props);
	
 }

render() {
	return (
		<div className="info-section buy-section">
			<div className="container">
				<div className="row">
					<div className="col-md-6 d-block d-sm-block d-md-none">
						<div className="info-img">
							<img src={buypropertyimg} className="img-fluid" alt="Image" />
						</div>
					</div>
					<div className="col-md-6">
						<div className="info-contents section-heading">
							<h3>Looking to Buy Property</h3>
							<p>Puzzled to buy a property? Make yourself at home!</p>
							<ul className="">
								<li>Log on to Ezeehousing.com and follow simple steps to experience the ease of choosing your dream home.</li>
								<li>From the day of registration, we promise a due time of 2 - 7 days to the property as per your desire.</li>
								<li>We provide agreement service for both parties to snap out any offense in the future.</li>
							</ul>
							<h6>"There is nothing like staying at home for real comfort" <span>-Jane Austen</span></h6>
							<a href="/" className="btn cmn-btn"><i className="fas fa-search"></i> Search Your Property</a>
						</div>
					</div>
					<div className="col-md-6 d-none d-sm-none d-md-block">
						<div className="info-img">
							<img src={buypropertyimg} className="img-fluid" alt="Image" />
						</div>
					</div>
				</div>      
			</div>
		</div>
	)
  }
}

export default BuyProperty;
