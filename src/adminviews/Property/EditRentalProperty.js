import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Link,Redirect } from 'react-router';
import ReactWizard from "react-bootstrap-wizard";
import { Container, Row, Col,Card ,CardHeader,CardBody} from "reactstrap";
import {toastr} from 'react-redux-toastr';
import PropTypes from "prop-types";
import classnames from "classnames";

// import { createBrowserHistory } from 'history';




import BasicinformationComponent from "./EditRentalComponent/BasicinformationComponent";
import PropertyLocationComponent from "./EditRentalComponent/PropertyLocationComponent";
import PropertyPriceComponent from "./EditRentalComponent/PropertyPriceComponent";
import PropertyAmenitiesComponent from "./EditRentalComponent/PropertyAmenitiesComponent";
import PropertyImageComponent from "./EditRentalComponent/PropertyImageComponent";
import PropertyPaymentComponent from "./EditRentalComponent/PropertyPaymentComponent";

import axios from 'axios';
const API_URL = process.env.REACT_APP_API_URL;


const image_path = API_URL+'/uploads/property/rental/thumb';
const video_path = API_URL+'/api/admin/createvideoplay?video_name';




class EditRentalProperty extends React.Component {
	 constructor(props) {
		super(props);
		this.state = {redirect: false,property_id:'',flag:'',PropertyData:{},steps:[],approved_status:'' }
		this.finishButtonClick = this.finishButtonClick.bind(this);
	 
	 }
	 componentWillMount() {
		 let $this  = this;
		 let property_id = this.props.match.params.property_id;
		 let flag = this.props.match.params.flag;
		 let approved_status;
		 if(flag=='inpectoredit') {  approved_status = 2; }else if(flag=='qualitycheckedit') { approved_status =2; }
		 this.setState({property_id:property_id,flag:flag,approved_status:approved_status });
		 let PostData = { property_id: property_id };
		 
	
	
		axios.post(API_URL+'/api/admin/getrentalpropertydetails',PostData).then(function(response){
				if(response.data.Statuscode==200) {
						let resData = response.data.Data;
						let basic_information = resData.basic_information[0] ? resData.basic_information[0] : [];
						let property_price = resData.property_price[0] ? resData.property_price[0] : [];
						let property_location = resData.property_location[0] ? resData.property_location[0] : [];
						let property_details = resData.property_details[0] ? resData.property_details[0] : [];
						let property_attr_detail = resData.property_attr_detail;
						let property_amenities = resData.property_attr_amenities;
						let property_furnshing = resData.property_furnshing;
						let property_images = resData.property_images;
						let Images = [];
						let video_url ='';
						property_images.map(item => {
								if(item.property_image_type==0) {
									let image_url = image_path+"/"+item.property_image_thumb;
										Images.push(image_url);
								}else{
									 video_url = video_path+"="+item.property_image_thumb;
								}
								
								
							});
							
						let propdata = { 
								basic_information: basic_information,
								property_price: property_price,
								property_location: property_location,
								property_details: property_details,
								property_attr_detail: property_attr_detail,
								property_amenities: property_amenities,
								property_furnshing: property_furnshing,
								property_images: property_images,
								property_images_path: Images,
								property_video_path: video_url,
						};
						
						
						$this.setState({ PropertyData: propdata });
							
				 }
		}).catch(function(error){  console.log(error); });
		
	 }  
  finishButtonClick(allStates) {
    // console.log(allStates);
	 let $this  = this;
	
	let property_locality_details =  allStates['LOCALITY DETAILS'].fields;
	let property_image_video =  allStates['IMAGE - VIDEO'].fields;
	 property_locality_details['property_area'] =  allStates['LOCALITY DETAILS'].property_area;
	// console.log(property_locality_details);
	let property_basic_info =  allStates['BASIC INFORMATION'].fields;
	 property_basic_info['approved_status'] = $this.state.approved_status;
		
	  const PostData = {
			property_id:this.state.property_id,
			property_basic_info: property_basic_info,
			property_locality_details: property_locality_details,
			property_price: allStates['PROPERTY PRICE'].fields,
			property_amenities: allStates['AMENITIES'].fields,
			property_image_video: allStates['IMAGE - VIDEO'].fields,
			property_payment: allStates['PAYMENT'].fields
	}; 
	console.log(PostData)
 // const history = this.props;
	 axios.post(API_URL+'/api/admin/updaterentalproperty', PostData).then(function(response){
				if(response.data.Statuscode==200) {
					console.log(response);
								 toastr.success('Edit Rental Property', response.data.Message);
								 $this.setState({ redirect: true });
						} else {
								toastr.error('Error', response.data.Message);
						}
					
				// console.log(response);
	}).catch(function(error){  console.log(error); });
	
	
 }
  
  render() {
	  let { redirect,PropertyData,approved_status } = this.state;
	  let steps = [
				{ stepName: "BASIC INFORMATION" , component: BasicinformationComponent, stepProps:{property_data: PropertyData}   },
				{ stepName: "LOCALITY DETAILS", component: PropertyLocationComponent, stepProps:{property_data: PropertyData} },
				{ stepName: "PROPERTY PRICE", component: PropertyPriceComponent, stepProps:{property_data: PropertyData} },
				{ stepName: "AMENITIES", component: PropertyAmenitiesComponent, stepProps:{property_data: PropertyData} },
				{ stepName: "IMAGE - VIDEO", component: PropertyImageComponent, stepProps:{property_data: PropertyData} },
				{ stepName: "PAYMENT", component: PropertyPaymentComponent, stepProps:{property_data: PropertyData} },
];
			let redirect_path;
			if(approved_status==2) { redirect_path = '/ez-admin/assign-inspector-rental-property-list'; }
			else if (approved_status==3) { redirect_path = '/ez-admin/quality-check-rental-property-list' }
			if(redirect) { return <Redirect to={redirect_path} />; }
		
    return (
      <div className="animated fadeIn">
       
		  <Card>
              <CardHeader><strong>Edit Rental Property</strong> </CardHeader>
			   <CardBody >
					<Row>
						 <Col xs={12} md={12} className="mr-auto ml-auto">
						<ReactWizard 
							{...this.props}
							
							steps={steps}
							// navSteps
							title=""
							description=""
							headerTextCenter
							validate
							color="primary"
							finishButtonClick={this.finishButtonClick}
						/>
          </Col>
        </Row>
		  </CardBody>	
		   </Card>
      </div>
    );
  }
}

ReactWizard.defaultProps = {
  validate: true,
  previousButtonText: "Previous",
  finishButtonText: "Finish",
  nextButtonText: "Next",
  color: "primary",
  progressbar: false
};

ReactWizard.propTypes = {
  color: PropTypes.oneOf(["primary", "green", "orange", "red", "blue"]),
  previousButtonClasses: PropTypes.string,
  finishButtonClasses: PropTypes.string,
  nextButtonClasses: PropTypes.string,
  headerTextCenter: PropTypes.bool,
  navSteps: PropTypes.bool,
  validate: PropTypes.bool,
  finishButtonClick: PropTypes.func,
  previousButtonText: PropTypes.node,
  finishButtonText: PropTypes.node,
  nextButtonText: PropTypes.node,
  title: PropTypes.node,
  description: PropTypes.node,
  progressbar: PropTypes.bool,
  steps: PropTypes.arrayOf(
  PropTypes.shape({
      stepName: PropTypes.string.isRequired,
      stepIcon: PropTypes.string,
      component: PropTypes.func.isRequired,
      stepProps: PropTypes.object
    })
  ).isRequired
};
export default EditRentalProperty;