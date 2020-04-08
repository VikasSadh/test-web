import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// const Breadcrumb = React.lazy(() => import('../Home/Component/Breadcrumb'));
const PageBottomImage = React.lazy(() => import('../Home/Component/PageBottomImage'));

class PrivacyPolicy extends Component {
 constructor(props) {
    super(props);
	
 }
 
render() {
	return (
		<div className="contents in-contents">   
			<div className="policy-section">				
				<div className="container">
					<div className="breadcrumb-section">
							<nav aria-label="breadcrumb">
									<ul className="breadcrumb">
										<li className="breadcrumb-item"><Link to="/">Home</Link></li>
										<li className="breadcrumb-item">Privacy Policy</li>
								    </ul>
							</nav> 
					</div>						
					<div className="policy-contents">
					  <div className="policy-title inner-heading">
						<h4>Privacy Policy</h4>
						<p>Ezee Housing bridges the gap between Landlords and Tenants without any middleman service. We understand the requirements on both sides and help the Landlords and tenants to communicate in a very less time and very less cost. We aim to resist the stereotypes and examine situations by visiting the environment and publishing it in ezeehousing.com for public view and also for minimal charge from the clients. EzeeHousing.com  is operated by Cloud8 Solutions India  Pvt Ltd.,</p>
					  </div>
					  <div className="policy-details">
						<h5>Creation of Account</h5>
						<p><strong>New User Account Information Supplied By Users Registration data collected and stored by Company</strong></p>
						<p>To access and use some section on EzeeHousing.com that are restricted only to registered users, you need to create an account on EzeeHousing.com</p>
						<p>To create an account we need your verified email address or Mobile number, which could then be used to login to EzeeHousing.com</p>
						<p>You have to accept the terms of service before creating an account on EzeeHousing.com</p>
						<p>EzeeHousing.com reserves the rights to the creation of the account on its website and can reject the creation based on content, information, broker listing or any other reason it may find appropriate without stating and is not liable to give a clarification or reason for rejecting the account creation</p>
						<p>EzeeHousing.com reserves the rights to charge or change the charges for creation of the account or for allowing access to contact details of landlord /tenant anytime that it deems necessary</p>
						<h5>Subscription or e-Invites </h5>
						<p>Email addresses to which invitation(s) are sent, are stored in the system for logging purposes.</p>
						<p>We may use these email addresses to send periodic notifications about the service. Receivers can opt out and will never be sent any email from EzeeHousing.com</p>
						<h5>Personal Information</h5>
						<p>We ask for some personal information when you create a EzeeHousing.com account, including your email address and a password, which is used to protect your account from unauthorized access.</p>
						<p>To provide you with access to the appropriate Network, we will require you to provide the name and contact information described above, and may also request that you update or verify this information from time to time. By using the Site, you agree to provide accurate information, and to cooperate with any EzeeHousing.com personnel to ensure accuracy.</p>
						<p>As a EzeeHousing.com user, you can create a profile that includes personal information regarding your property or requirement plus other content, such as photos. This information may be accessed and viewed by other users of EzeeHousing.com</p>
						<p>When you send messages through EzeeHousing.com, we collect and maintain information associated with those messages, including email addresses and content. When you send and receive  messages to or from the EzeeHousing.com website, we collect and maintain information associated with those messages, such as the phone number, the wireless carrier associated with the phone number, the content of the message, and the date and time of the transaction, for logging purposes.</p>
						<p>We take the privacy of our users very seriously.</p>
						<p>EzeeHousing.com will have a right to use the information to provide personalized advertisements and offers, or to include that information in compilations developed by EzeeHousing.com</p>
						<h5>General Provisions</h5>
						<p>By agreeing to post a property listing or requirement at EzeeHousing.com or responding to and advertising on EzeeHousing.com or by using the services of EzeeHousing.com, the user hereby acknowledges and allows EzeeHousing.com, its partners and other users of the site to get in touch with him/her from time to time for intimating the users on events, potential buyers, tenants or properties they might be interested in. This could include offers to upgrade to premium services, information, as well as promotions.EzeeHousing.com can use the user's email address and/or contact numbers for this purpose irrespective of the user's registration with the "National Do Not Call Registry" and will override any such registrations.</p>
						<h5>E-mails and Opt-out</h5>
						<p>You may opt-out of receiving notifications from us by sending us an email at <a href="mailto:info@ezeehousing.com">info@ezeehousing.com</a>. Unregistered users who receive e-mails from us may also opt-out of receiving further e-mails by following the instructions contained in our e-mails. Despite your indicated e-mail preferences, we may send you notice of any updates to our Terms of Use or Privacy Policy.</p>
						<h5>Security</h5>
						<p>Your account is password protected. We use industry standard measures to protect the personal information that is stored in our database. We limit the access to your personal information to those employees and contractors who need access to perform their job function, such as our customer service personnel. If you have any questions about the security on EzeeHousing.com, please contact us. Although we take appropriate measures to safeguard against unauthorized disclosures of information, we cannot assure you that your personal information will never be disclosed in a manner that is inconsistent with this Privacy Policy.</p>
						<p>You hereby acknowledge that EzeeHousing.com is not responsible for any intercepted information sent via the internet, and you hereby release us from any and all claims arising out of or related to the use of intercepted information in any unauthorized manner.</p>
						<h5>Contacting us</h5>
						<p>You can email us on <a href="mailto:info@ezeehousing.com">info@ezeehousing.com</a></p>
					  </div>
					</div>
				</div>
			</div>
			<PageBottomImage />
		</div>
		
	)
  }
}

export default PrivacyPolicy;
