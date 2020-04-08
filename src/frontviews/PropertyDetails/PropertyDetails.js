import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {toastr} from 'react-redux-toastr';

import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;
const image_path = 'http://localhost:6001/uploads/property/rental/thumb';
const video_path = 'http://localhost:6001/api/admin/createvideoplay?video_name';

//const Breadcrumb = React.lazy(() => import('../Home/Component/Breadcrumb'));
const PageBottomImage = React.lazy(() => import('../Home/Component/PageBottomImage'));
const PropertyInformation = React.lazy(() => import('./PropertyDetailsComponent/PropertyInformation'));
const PropertyGallery = React.lazy(() => import('./PropertyDetailsComponent/PropertyGallery'));
const PropertySidebar = React.lazy(() => import('./PropertyDetailsComponent/PropertySidebar'));
const PropertyDetailsList = React.lazy(() => import('./PropertyDetailsComponent/PropertyDetailsList'));


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

class PropertyDetails extends Component {
 constructor(props) {
    super(props);
	this.state = {PropertyData:'',basic_information:'',property_price:'',property_location:'',property_attr_detail:'',property_amenities:'',property_furnshing:'',property_images:'',property_details:'',PropertyImages:'',PropertyVideos:'',property_id:''}
 }
componentDidMount() {
	let $this  = this;
	console.log(this.props.match.params.property_id);
	let property_id = this.props.match.params.property_id;  
	this.setState({property_id:property_id})
		let PostData = { property_id: property_id };
		axios.post(API_URL+'/api/admin/getrentalpropertydetails',PostData).then(function(response){
				 if(response.data.Statuscode==200) {
						let resData = response.data.Data;
						let basic_information = resData.basic_information[0];
						let property_price = resData.property_price[0];
						let property_location = resData.property_location[0];
						let property_details = resData.property_details[0];
						let property_attr_detail = resData.property_attr_detail;
						let property_amenities = resData.property_attr_amenities;
						let property_furnshing = resData.property_furnshing;
						let property_images = resData.property_images;
						let Images = [];
						let video_url ='';
						// console.log(response.data.Data);
						// console.log(response.data.Data.basic_information);
						property_images.map(item => {
								
								if(item.property_image_type==0) {
									let image_url = image_path+"/"+item.property_image_thumb;
										Images.push(image_url);
								}else{
									 video_url = video_path+"="+item.property_image_thumb;
								
								}
								
								
							});
							// console.log(Images);
						
						$this.setState({  PropertyData: resData,basic_information:basic_information,property_price:property_price,property_location:property_location,property_attr_detail:property_attr_detail,property_amenities:property_amenities,property_furnshing:property_furnshing,property_images:property_images,property_details:property_details,PropertyImages:Images,PropertyVideos:video_url});
								
				 }
		}).catch(function(error){  console.log(error); });
} 
 
render() {
	return (
		<div className="contents in-contents">   
			<div className="details-section">				
				<div className="container">
					
					<PropertyInformation property_id={this.state.property_id} />
					<PropertyGallery property_id={this.state.property_id} />
					<div className="single-property-details">
						<div className="row">
							<div className="col-md-4 nrp-padding">
								<PropertySidebar property_id={this.state.property_id} />
							</div>
							<div className="col-md-8 nlp-padding">
								<PropertyDetailsList property_id={this.state.property_id} />
							</div>
						</div>
					</div>
				</div>
				
				<div className="sticky-btn">
			        <a onClick={() => toastr.success('Message', 'Sent Successfully!', toastrSuccessOptions)} className="btn reach-btn"><i className="fas fa-phone-alt"></i> <span>Contact Now</span></a>
			     </div>
			</div>
			<PageBottomImage />
		</div>
		
	)
  }
}

export default PropertyDetails;
