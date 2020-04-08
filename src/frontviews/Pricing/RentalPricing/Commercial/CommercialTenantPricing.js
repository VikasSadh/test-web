import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// const Breadcrumb = React.lazy(() => import('../../../Home/Component/Breadcrumb'));
const PageBottomImage = React.lazy(() => import('../../../Home/Component/PageBottomImage'));

class TenantPricing extends Component {
 constructor(props) {
    super(props);
	
 }
 
render() {
	return (
		<div className="contents in-contents">   
			<div className="pricing-section">
			  <div className="container">        
				<div className="breadcrumb-section">
					 <nav aria-label="breadcrumb">
						<ul className="breadcrumb">
							<li className="breadcrumb-item"><Link to="/">Home</Link></li>
							<li className="breadcrumb-item">Commercial</li>
							<li className="breadcrumb-item">Tenant Pricing</li>
						</ul>
					</nav> 
				</div>	
				<div className="pricing-contents">
				  <div className="pricing-title text-center">
					<h3>Commercial Package Details for Tenant</h3>
					<p>Choose the packages for your need.</p>
				  </div>
				  <div className="pricing-types">
					<div className="row">
					  {/*<div className="col-md-6 col-lg-3 p-0">
						<div className="pricing-details tenant-pricing text-center">
						  <h6>Residential</h6>
						  <h4>Basic plan</h4>
						  <div className="pricing-bg">
							<div className="pricing-amt">
							  <h5><sup>₹</sup>499</h5>
							  <p>(Exl. of GST 18%)</p>
							</div>
						  </div>
						  <ul className="list-unstyled">
							<li>Time Taken 2-5 Working days</li>
							<li>5 Verified Lead will be shared</li>
							<li>Rental Manager available in premium plan</li>
							<li>No other Charges after closure</li>
							<li>-</li>
							<li>-</li>
						  </ul>
						  <div className="pricing-btn text-center">
							<a href="#" className="btn cmn-btn"><i className="far fa-paper-plane"></i> Buy Now</a>
						  </div>
						</div>
					  </div>
					  <div className="col-md-6 col-lg-3 p-0">
						<div className="pricing-details tenant-pricing active text-center">
						  <h6>Residential</h6>
						  <h4>Upgrade to Premium</h4>
						  <div className="pricing-bg">
							<div className="pricing-amt">
							  <h5><sup>₹</sup>1499</h5>
							  <p>(Exl. of GST 18%)</p>
							</div>
						  </div>
						  <ul className="list-unstyled">
							<li>Time Taken 2-7 Working days</li>
							<li>5 property site shown by our rental manager</li>
							<li>Rental Manager Assistance till deal closure</li>
							<li>Upon closure of the deal 50% of monthly rental payable(Initial registration amount will be deducted from that closure amout)</li>
							<li>Free Rental Agreement Assistance</li>
							<li>Police Verification facility is effective</li>
						  </ul>
						  <div className="pricing-btn text-center">
							<a href="#" className="btn cmn-btn"><i className="far fa-paper-plane"></i> Buy Now</a>
						  </div>
						</div>
					  </div> */}
					  <div className="col-md-6 offset-lg-1 col-lg-5">
						<div className="pricing-details tenant-pricing text-center">
						  <h6>Commercial</h6>
						  <h4>Basic plan</h4>
						  <div className="pricing-bg">
							<div className="pricing-amt">
							  <h5><sup>₹</sup>1999</h5>
							  <p>(Exl. of GST 18%)</p>
							</div>
						  </div>
						  <ul className="list-unstyled">
							<li>Time Taken 2-5 Working days</li>
							<li>5 Verified Lead will be shared</li>
							<li>Rental Manager available in premium plan</li>
							<li>No other Charges after closure</li>
							<li>-</li>
							<li>-</li>
						  </ul>
						  <div className="pricing-btn text-center">
							<a href="#" className="btn cmn-btn"><i className="far fa-paper-plane"></i> Buy Now</a>
						  </div>
						</div>
					  </div>
					  <div className="col-md-6 col-lg-5">
						<div className="pricing-details tenant-pricing text-center">
						  <h6>Commercial</h6>
						  <h4>Upgrade to Premium</h4>
						  <div className="pricing-bg">
							<div className="pricing-amt">
							  <h5><sup>₹</sup>2999</h5>
							  <p>(Exl. of GST 18%)</p>
							</div>
						  </div>
						  <ul className="list-unstyled">
							<li>Time Taken 2-10 Working days</li>
							<li>5 property site shown by our rental manager</li>
							<li>Rental Manager Assistance till deal closure</li>
							<li>Upon closure of the deal 50% of monthly rental payable(Initial registration amount will be deducted from that closure amout)</li>
							<li>Free Rental Agreement Assistance</li>
							<li>Police Verification facility is effective</li>
						  </ul>
						  <div className="pricing-btn text-center">
							<a href="#" className="btn cmn-btn"><i className="far fa-paper-plane"></i> Buy Now</a>
						  </div>
						</div>
					  </div>
					</div>
				  </div>
				</div>
			  </div>  
			</div>
			<PageBottomImage />
		</div>
		
	)
  }
}

export default TenantPricing;
