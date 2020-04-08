import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {toastr} from 'react-redux-toastr';


//const Breadcrumb = React.lazy(() => import('../Home/Component/Breadcrumb'));
const PageBottomImage = React.lazy(() => import('../Home/Component/PageBottomImage'));
const toastrSuccessOptions = {
	  timeOut: 3000,
	  icon: (<i className="far fa-smile"></i>),
	  className: 'front-toastr front-toastr-success',
	  position: 'top-center',
	  autoClose: false,
	  transitionIn: 'bounceIn',
  	  transitionOut: 'bounceOut',
	  showCloseButton: true,
	  closeOnToastrClick: true
	}

class ContactUs extends Component {
 constructor(props) {
    super(props);
	this.state = { fields: {}, errors: {} }
		this.handleChange = this.handleChange.bind(this);
		 this.handleSubmit = this.handleSubmit.bind(this);
 }
 handleChange(e) {
		let $this = this;
		let fields = this.state.fields;
		
		fields[e.target.name] = e.target.value;
	  this.setState({ fields });
	   
	
}
 handleSubmit(e) {
      e.preventDefault();
      if (this.validateForm()) {
          let fields = {};
         fields["user_name"] = "";
         fields["user_emailid"] = "";
         fields["user_mobileno"] = "";
         fields["comment"] = "";
         fields["user_city"] = "";
          this.setState({fields:fields});
        //  alert("Form submitted");
		 toastr.success('Message ', 'Sent Successfully', toastrSuccessOptions);
	 }
}
	
validateForm() {

      let fields = this.state.fields;
      let user_area = this.state.user_area;
      let errors = {};
      let formIsValid = true;
// user_name
	if (!fields["user_name"]) {
        formIsValid = false;
        errors["user_name"] = "Please enter your User Name.";
      }
// user_emailid	  
 if (!fields["user_emailid"]) {
        formIsValid = false;
        errors["user_emailid"] = "Please enter your Email-ID.";
      }

      if (typeof fields["user_emailid"] !== "undefined") {
        // regular expression for email validation
     var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(fields["user_emailid"])) {
          formIsValid = false;
          errors["user_emailid"] = "Please enter valid Email-ID.";
        }
      }
// user_mobileno	  
	if (!fields["user_mobileno"]) {
        formIsValid = false;
        errors["user_mobileno"] = "Please enter your Mobile No.";
      }

   if(typeof fields["user_mobileno"] !== "undefined") {
      if(!fields["user_mobileno"].match(/^[0-9]{10}$/)) {
			formIsValid = false;
			errors["user_mobileno"] = "Please enter valid Mobile No.";
        }
    }


// user_city
 
   if(!fields["user_city"]) {
        formIsValid = false;
        errors["user_city"] = "Please select city.";
    } 


    this.setState({ errors: errors });
    return formIsValid;


    }	
	
	
render() {	
	return (
		<div className="contents in-contents">   
			<div className="contact-section">				
				<div className="container">
					<div className="breadcrumb-section">
						 <nav aria-label="breadcrumb">
								<ul className="breadcrumb">
									<li className="breadcrumb-item"><Link to="/">Home</Link></li>
									<li className="breadcrumb-item">Contact Us</li>
								</ul>
						</nav> 
					</div>			
					<div className="contact-contents">
					  <div className="contact-title inner-heading text-center">
						<h4>Contact Us</h4>
						{/* <p>Fill out the information below to be contact.</p> */}
					  </div>
					  <div className="contact-info">
						<div className="row">
						  <div className="col-md-4 col-lg-3">
							<div className="contact-details text-center">
							  <div className="contact-icons">
								<svg version="1.1" id="Contact-Ic1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" enableBackground="0 0 512 512">
								  <g fill="#fff">
									<path d="M367.7,316.4c-5.4-5.4-12.5-8.3-20-8.3c-7.6,0-14.7,2.9-20,8.3l-42.3,42.3c0,0,0,0,0,0l-17.5,17.5c-7.9,7.9-21,7.9-28.8,0L129.6,266.8c-7.9-7.9-7.9-20.9,0-28.8l17.5-17.5c0,0,0,0,0,0l42.3-42.3c11.1-11.1,11.1-29,0-40.1l-88-88c-10.9-10.9-29.2-10.9-40.1,0L19,92.3c-3.9,3.9-3.9,10.2,0,14.1l5.5,5.5c-5.9,7.9-14.5,21.7-19.8,41.1c-14,51.2,5.5,101.1,24.3,133.9c4.2,7.3,9.4,14.1,15.6,20.3l91.4,91.4c3.9,3.9,10.2,3.9,14.1,0c3.9-3.9,3.9-10.2,0-14.1l-91.4-91.4c-4.9-4.9-9.1-10.4-12.4-16.1c-24.4-42.5-32-82.1-22.7-117.6c4-15.1,10.4-26.3,15.1-33.1l40.8,40.8l46.3,46.3l-10.5,10.5c-7.6,7.6-11.8,17.8-11.8,28.6c0,10.8,4.2,20.9,11.8,28.6l109.4,109.4c11.9,11.9,30.4,15.2,45.6,8.1c4.3-2,8.2-4.7,11.5-8.1l10.5-10.5l88.6,88.6c-7,4.6-18.4,10.6-33.7,14.3c-36.2,8.8-76.2,0.9-118.7-23.6c-5.7-3.3-11.2-7.5-16.1-12.4l-0.4-0.4c-3.9-3.9-10.2-3.9-14.1,0c-3.9,3.9-3.9,10.2,0,14.1l0.4,0.4c6.2,6.2,13,11.4,20.3,15.6c25.3,14.5,61,29.6,99.9,29.6c11.4,0,23.1-1.3,34.8-4.3c19.8-5,34-13.3,42.1-19.1c1.6,1.6,3.1,3.4,4.9,4.8c3.9,3,9.6,2.6,13.1-0.9l42.3-42.3c11.1-11.1,11.1-29,0-40.1L367.7,316.4zM75.4,64.2c3.2-3.2,8.6-3.2,11.8,0l88,88c3.3,3.3,3.3,8.6,0,11.8l-35.2,35.2l-94.9-94.9l-4.9-4.9L75.4,64.2zM441.6,430.4l-35.2,35.2l-99.8-99.8l35.2-35.2c3.2-3.2,8.6-3.2,11.8,0l88,88C444.9,421.8,444.9,427.1,441.6,430.4L441.6,430.4z"/>
									<path d="M252.1,179.2c47.7,0,86.5,38.8,86.5,86.5c0,5.5,4.5,10,10,10h50.5c5.5,0,10-4.5,10-10c0-86.6-70.5-157.1-157.1-157.1c-5.5,0-10,4.5-10,10v50.5C242.1,174.7,246.6,179.2,252.1,179.2zM262.1,129c67.6,4.9,121.8,59.1,126.7,126.7h-30.6c-4.7-50.8-45.3-91.3-96.1-96.1V129z"/>
									<path d="M464.4,116c-30.4-43-72.5-75.5-121.6-93.8c-5.2-1.9-10.9,0.7-12.9,5.9s0.7,10.9,5.9,12.9c45.4,16.9,84.2,46.9,112.3,86.6c26.8,37.9,41.8,82,43.7,128.2h-27C459.7,146.3,371.6,58.1,262.1,53V15.8c0-5.5-4.5-10-10-10c-5.5,0-10,4.5-10,10v47c0,5.5,4.5,10,10,10c106.4,0,192.9,86.6,192.9,192.9c0,5.5,4.5,10,10,10h47c5.5,0,10-4.5,10-10C512,211.8,495.5,160,464.4,116L464.4,116z"/>
									<path d="M183.6,419c-3.4-8.2-15.5-7.9-18.6,0.3c-3.1,8.2,5.8,16.3,13.7,12.5C183.4,429.5,185.6,423.9,183.6,419L183.6,419z"/>
									<path d="M289.9,28.1c7.7,5.2,18-2.6,15-11.5c-2.8-8.6-15.3-9.1-18.7-0.7C284.4,20.4,286,25.5,289.9,28.1z"/>
								  </g>
								</svg>
							  </div>
							  <p><span>Phone: </span><a href="tel:975 116 8000">975 116 8000</a><br /><a href="tel:996 226 8000">996 226 8000</a></p>
							</div>
						  </div>
						  <div className="col-md-4 col-lg-6">
							<div className="contact-details text-center">
							  <div className="contact-icons">
								<svg version="1.1" id="Contact-Ic3" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" enableBackground="new 0 0 512 512">
								  <g fill="#fff">
									<path d="M255.7,0C152.2,0,68,84.2,68,187.7c0,138.5,174.3,314.3,181.7,321.8c1.6,1.6,3.8,2.5,6,2.5c2.3,0,4.4-0.9,6-2.5c7.4-7.4,181.7-183.3,181.7-321.8C443.5,84.2,359.3,0,255.7,0z M255.7,491.2c-31-32.6-170.7-186-170.7-303.5c0-94.1,76.6-170.7,170.7-170.7c94.1,0,170.7,76.6,170.7,170.7C426.4,305.1,286.7,458.6,255.7,491.2z"/>
									<path d="M409.3,187.7c0-84.7-68.9-153.6-153.6-153.6S102.1,103,102.1,187.7S171,341.3,255.7,341.3S409.3,272.4,409.3,187.7zM255.7,324.3c-75.3,0-136.5-61.3-136.5-136.5c0-75.3,61.3-136.5,136.5-136.5c75.3,0,136.5,61.3,136.5,136.5C392.3,263,331,324.3,255.7,324.3z"/>
									<path d="M358.1,136.5h-42.7v-25.6c0-4.7-3.8-8.5-8.5-8.5H204.5c-4.7,0-8.5,3.8-8.5,8.5v68.3h-42.7c-4.7,0-8.5,3.8-8.5,8.5v59.7c0,4.7,3.8,8.5,8.5,8.5h204.8c4.7,0,8.5-3.8,8.5-8.5V145.1C366.7,140.4,362.9,136.5,358.1,136.5z M196,238.9h-34.1v-42.7H196V238.9zM298.4,145.1v93.9h-85.3V119.5h85.3V145.1z M349.6,238.9h-34.1v-85.3h34.1V238.9z"/>
									<path d="M230.1,136.5h17.1v17.1h-17.1V136.5z"/>
									<path d="M264.3,136.5h17.1v17.1h-17.1V136.5z"/>
									<path d="M230.1,170.7h17.1v17.1h-17.1V170.7z"/>
									<path d="M264.3,170.7h17.1v17.1h-17.1V170.7z"/>
									<path d="M230.1,204.8h17.1v17.1h-17.1V204.8z"/>
									<path d="M264.3,204.8h17.1v17.1h-17.1V204.8z"/>
									<path d="M170.4,204.8h17.1v17.1h-17.1V204.8z"/>
									<path d="M324,204.8h17.1v17.1H324V204.8z"/>
									<path d="M324,170.7h17.1v17.1H324V170.7z"/>
									<path d="M255.7,76.8V59.7c-26.3,0-51.6,7.9-73.2,22.9l9.8,14C211,83.7,232.9,76.8,255.7,76.8z"/>
									<path d="M178.1,108.5l-12-12.2c-8.3,8.1-15.5,17.4-21.3,27.4l14.8,8.6C164.7,123.6,170.9,115.6,178.1,108.5z"/>
									<path d="M318,369.4l12.1,12.1c17.5-17.5,34.5-42.9,35.2-44l-14.2-9.5C350.9,328.3,334.3,353.1,318,369.4z"/>
									<path d="M292.4,403.6l17.1-17.1l12.1,12.1l-17.1,17.1L292.4,403.6z"/>
								  </g>
								</svg>
							  </div>
							  <p><span>Location: </span>12, 3rd Cross Street, Seethammal Colony <br />Extension, Alwarpet, Chennai  - 600018</p>
							</div>
						  </div>
						  <div className="col-md-4 col-lg-3">
							<div className="contact-details text-center">
							  <div className="contact-icons">
								<svg version="1.1" id="Contact-Ic3" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" enableBackground="0 0 512 512">
								  <g fill="#fff">
									<path d="M512,143.9c0-15.2-6.3-28.9-16.4-38.7c-0.1-0.1-0.3-0.3-0.4-0.4C485.1,95.3,472,90,458.1,90H53.9c-13.9,0-27,5.3-37.1,14.8c-0.1,0.1-0.3,0.3-0.4,0.4C6.3,115,0,128.7,0,143.9v224.5C0,382,5.1,394.5,13.5,404c0.1,0.2,0.3,0.4,0.5,0.6c3.9,4.3,8.5,7.9,13.5,10.8c6.6,3.7,14,6.1,21.9,6.8h0c0.1,0,0.1,0,0.2,0c1.4,0.1,2.9,0.2,4.4,0.2h404.2c1.5,0,2.9-0.1,4.4-0.2c0.1,0,0.1,0,0.2,0h0c7.9-0.7,15.3-3.1,21.9-6.8c5-2.8,9.6-6.4,13.5-10.8c0.2-0.2,0.3-0.4,0.5-0.6c8.4-9.5,13.5-22,13.5-35.6V143.9zM475,397.8c0,0-0.1,0-0.1,0.1c0,0-0.1,0.1-0.1,0.1c-3.9,2.2-8.1,3.6-12.6,4.1c0,0,0,0,0,0c-0.1,0-0.2,0-0.3,0c-1.3,0.1-2.5,0.2-3.8,0.2H53.9c-1.3,0-2.6-0.1-3.8-0.2c-0.1,0-0.2,0-0.3,0c-4.4-0.5-8.7-2-12.6-4.2l0,0c-0.1,0-0.1-0.1-0.2-0.1c-0.6-0.4-1.3-0.8-1.9-1.2L79.5,340c3.4-4.3,2.7-10.6-1.7-14c-4.3-3.4-10.6-2.7-14,1.7l-41.6,52.9c-1.5-3.8-2.3-7.9-2.3-12.2V143.9c0-6.4,1.8-12.4,4.9-17.5l116.6,102.8l-27.9,35.5c-3.4,4.3-2.7,10.6,1.7,14c1.8,1.4,4,2.1,6.2,2.1c3,0,5.9-1.3,7.9-3.8l27.3-34.6l60.9,53.7c11,9.7,24.8,14.6,38.7,14.6s27.6-4.9,38.7-14.6l60.9-53.7l121.4,154.1C476.3,397,475.6,397.4,475,397.8zM53.9,110h404.2c5,0,9.7,1.1,14,3L350.3,220.4c-0.1,0.1-0.2,0.2-0.3,0.3l-68.6,60.5c-14.5,12.8-36.4,12.8-50.9,0L162,220.6c-0.1-0.1-0.2-0.2-0.3-0.3L39.9,113C44.2,111.1,48.9,110,53.9,110zM370.5,229.2l116.6-102.8c3.1,5.1,4.9,11.1,4.9,17.5v224.5c0,4.3-0.8,8.4-2.3,12.2L370.5,229.2z"/>
									<path d="M107.1,296.9c-0.3-0.6-0.5-1.2-0.9-1.7c-0.4-0.6-0.8-1.1-1.3-1.5c-0.5-0.5-1-0.9-1.5-1.3c-0.5-0.4-1.1-0.7-1.7-0.9c-0.6-0.3-1.2-0.4-1.9-0.6c-1.3-0.3-2.6-0.3-3.9,0c-0.6,0.1-1.3,0.3-1.9,0.6c-0.6,0.3-1.2,0.6-1.7,0.9c-0.6,0.4-1.1,0.8-1.5,1.3c-0.5,0.5-0.9,1-1.2,1.5c-0.4,0.5-0.7,1.1-0.9,1.7c-0.3,0.6-0.4,1.2-0.6,1.9c-0.1,0.6-0.2,1.3-0.2,2c0,0.7,0.1,1.3,0.2,2c0.1,0.6,0.3,1.3,0.6,1.9c0.3,0.6,0.6,1.2,0.9,1.7c0.4,0.6,0.8,1.1,1.2,1.5c0.5,0.5,1,0.9,1.5,1.2c0.5,0.4,1.1,0.7,1.7,0.9c0.6,0.3,1.2,0.4,1.9,0.6c0.6,0.1,1.3,0.2,2,0.2c0.6,0,1.3-0.1,1.9-0.2s1.3-0.3,1.9-0.6c0.6-0.3,1.2-0.6,1.7-0.9c0.6-0.4,1.1-0.8,1.5-1.2c0.5-0.5,0.9-1,1.3-1.5c0.4-0.5,0.7-1.1,0.9-1.7c0.3-0.6,0.5-1.2,0.6-1.9c0.1-0.6,0.2-1.3,0.2-2c0-0.6-0.1-1.3-0.2-2C107.5,298.2,107.3,297.5,107.1,296.9z"/>
								  </g>
								</svg>
							  </div>
							  <p><span>Email: </span><a href="mailto:info@ezeehousing.com">info@ezeehousing.com</a><br /><a href="mailto:sales@ezeehousing.com">sales@ezeehousing.com</a></p>
							</div>
						  </div>
						</div>
					  </div>
					  <div className="contact-form">
						<form onSubmit={this.handleSubmit}>
						  <div className="row">
							<div className="col-md-6 nr-padding">
							  <div className="form-group">
								<div className="form-fields">
								  <input type="text" name="user_name" placeholder="Full Name" className="form-control in1"  value={this.state.fields.user_name} onChange={this.handleChange} onFocus={(e) => e.target.placeholder = ""} onBlur={(e) => e.target.placeholder = "Full Name"}  />
								</div>
								<div className="errorMsg">{this.state.errors.user_name}</div>
								<div className="form-fields">
								  <input type="text" name="user_city" placeholder="City" className="form-control in2" value={this.state.fields.user_city} onChange={this.handleChange} onFocus={(e) => e.target.placeholder = ""} onBlur={(e) => e.target.placeholder = "City"}  />
								</div>
								<div className="errorMsg">{this.state.errors.user_city}</div>
								<div className="form-fields">
								  <input type="email" name="user_emailid" placeholder="Email Address" className="form-control in3" value={this.state.fields.user_emailid} onChange={this.handleChange} onFocus={(e) => e.target.placeholder = ""} onBlur={(e) => e.target.placeholder = "Email Address"}/>
								</div>
								<div className="errorMsg">{this.state.errors.user_emailid}</div>
								<div className="form-fields">
								  <input type="text" name="user_mobileno" placeholder="Phone Number" className="form-control in4" value={this.state.fields.user_mobileno} onChange={this.handleChange} onFocus={(e) => e.target.placeholder = ""} onBlur={(e) => e.target.placeholder = "Phone Number"} />
								</div>
								<div className="errorMsg">{this.state.errors.user_mobileno}</div>
							  </div>
							</div>
							<div className="col-md-6 nl-padding">
							  <div className="form-group">
								<textarea rows="5" name="comment" className="form-control in5" placeholder="Queries" onChange={this.handleChange} onFocus={(e) => e.target.placeholder = ""} onBlur={(e) => e.target.placeholder = "Queries"}></textarea>
							  </div>
							  <div className="errorMsg">{this.state.errors.comment}</div>
							</div>
						  </div>
						  <div className="form-btn text-center">
							<button className="btn" type="submit"><i className="far fa-paper-plane"></i> Submit</button>
						  </div>
						  
						</form>
					  </div>
					</div>
					<div className="contact-map">
					  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d971.7545064771892!2d80.24730832923218!3d13.034523999425927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267b343dacfc7%3A0xe46f48037d4a225f!2s12%2C%203rd%20Cross%20St%20Ext%2C%20Seethammal%20Colony%2C%20Extension%2C%20Alwarpet%2C%20Chennai%2C%20Tamil%20Nadu%20600018!5e0!3m2!1sen!2sin!4v1581939266731!5m2!1sen!2sin" width="100%" height="400" frameBorder="0" border="0" allowFullScreen=""></iframe>
					</div>
				</div>
			</div>
			<PageBottomImage />
		</div>
		
	)
  }
}

export default ContactUs;
