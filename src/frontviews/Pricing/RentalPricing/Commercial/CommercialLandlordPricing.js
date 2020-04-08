import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// const Breadcrumb = React.lazy(() => import('../../../Home/Component/Breadcrumb'));
const PageBottomImage = React.lazy(() => import('../../../Home/Component/PageBottomImage'));

class LandlordCommercialPricing extends Component {
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
							<li className="breadcrumb-item">Landlord Pricing</li>
						</ul>
					</nav> 
				</div>
				<div className="pricing-contents">
				  <div className="pricing-title text-center">
					<h3>Commercial Package Details for Landlord</h3>
					<p>Choose the packages for your need.</p>
				  </div>
				  <div className="pricing-types">
					<div className="row">
					  <div className="col-md-4 p-0">
						<div className="pricing-details text-center">
						  <h4>Silver</h4>
						  <div className="pricing-bg">
							<div className="pricing-amt">
							  <h5><sup>₹</sup>1999</h5>
							  <p>(Exl. of GST 18%)</p>
							</div>
						  </div>
						  <ul className="list-unstyled">
							<li>Property Photo and video shoot</li>
							<li>5 Matching leads</li>
							<li>Medium Viewership</li>
							<li>Gerneral marketing campaigns</li>
							<li>5 Verified leads Shared Within a time span of 15 days</li>
							<li>Customized service / Dashboard</li>
							<li>-</li>
							<li>-</li>
						  </ul>
						  <div className="pricing-btn text-center">
							<a href="#" className="btn cmn-btn"><i className="far fa-paper-plane"></i> Buy Now</a>
						  </div>
						</div>
					  </div>
					  <div className="col-md-4 p-0">
						<div className="pricing-details active text-center">
						  <h4>Gold</h4>
						  <div className="pricing-bg">
							<div className="pricing-amt">
							  <h5><sup>₹</sup>4999</h5>
							  <p>(Exl. of GST 18%)</p>
							</div>
						  </div>
						  <ul className="list-unstyled">
							<li>Property Photo and video shoot</li>
							<li>10 Matching leads</li>
							<li>High Viewership</li>
							<li>Collective marketing campaigns</li>
							<li>Assured 3 site visits with personal Assistant for a time span of 30 days</li>
							<li>Customized service / Dashboard</li>
							<li>Free Rental Agreement</li>
							<li>Upon closure of the deal 50% of monthly rental payable (Initial registration amount will be deducted from that closure amount)</li>
						  </ul>
						  <div className="pricing-btn text-center">
							<a href="#" className="btn cmn-btn"><i className="far fa-paper-plane"></i> Buy Now</a>
						  </div>
						</div>
					  </div>
					  <div className="col-md-4 p-0">
						<div className="pricing-details text-center">
						  <h4>Platinum</h4>
						  <div className="pricing-bg">
							<div className="pricing-amt">
							  <h5><sup>₹</sup>6999</h5>
							  <p>(Exl. of GST 18%)</p>
							</div>
						  </div>
						  <ul className="list-unstyled">
							<li>Property Photo and video shoot</li>
							<li>Unlimited Matching leads</li>
							<li>High Viewership</li>
							<li>Exclusive marketing campaigns</li>
							<li>Assured 5 site visits with personal Assistantfor a time span of 20 days</li>
							<li>Customized service / Dashboard</li>
							<li>Free Rental Agreement</li>
							<li>Upon closure of the deal 50% of monthly rental payable (Initial registration amount will be deducted from that closure amount)</li>
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

export default LandlordCommercialPricing;
