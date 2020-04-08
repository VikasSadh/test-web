import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Link,Redirect } from 'react-router';
import ReactWizard from "react-bootstrap-wizard";
import { Container, Row, Col,Card ,CardHeader,CardBody} from "reactstrap";
import {toastr} from 'react-redux-toastr';
import PropTypes from "prop-types";
import classnames from "classnames";

// import { createBrowserHistory } from 'history';




import BasicinformationComponent from "./RentalComponent/BasicinformationComponent";
import PropertyLocationComponent from "./RentalComponent/PropertyLocationComponent";
import PropertyPriceComponent from "./RentalComponent/PropertyPriceComponent";
import PropertyAmenitiesComponent from "./RentalComponent/PropertyAmenitiesComponent";
import PropertyImageComponent from "./RentalComponent/PropertyImageComponent";
import PropertyPaymentComponent from "./RentalComponent/PropertyPaymentComponent";

import axios from 'axios';
const API_URL = process.env.REACT_APP_API_URL;





var steps = [
	{ stepName: "BASIC INFORMATION" , component: BasicinformationComponent },
	{ stepName: "LOCALITY DETAILS", component: PropertyLocationComponent },
	{ stepName: "PROPERTY PRICE", component: PropertyPriceComponent },
	{ stepName: "AMENITIES", component: PropertyAmenitiesComponent },
	{ stepName: "IMAGE - VIDEO", component: PropertyImageComponent },
	{ stepName: "PAYMENT", component: PropertyPaymentComponent },
];

class AddRentalProperty extends React.Component {
	 constructor(props) {
		super(props);
		console.log(this.props);
		this.state = {redirect: false }
		this.finishButtonClick = this.finishButtonClick.bind(this);
	 }
	  
  finishButtonClick(allStates) {
     console.log(allStates);
	 let $this  = this;
	
	let property_locality_details =  allStates['LOCALITY DETAILS'].fields;
	let property_image_video =  allStates['IMAGE - VIDEO'].fields;
	 property_locality_details['property_area'] =  allStates['LOCALITY DETAILS'].property_area;
	// console.log(property_locality_details);
	  const PostData = {
		property_basic_info: allStates['BASIC INFORMATION'].fields,
		property_locality_details: property_locality_details,
		property_price: allStates['PROPERTY PRICE'].fields,
		property_amenities: allStates['AMENITIES'].fields,
		property_image_video: allStates['IMAGE - VIDEO'].fields,
		property_payment: allStates['PAYMENT'].fields
	}; 
 // const history = this.props;
	 axios.post(API_URL+'/api/admin/insertrentalproperty', PostData).then(function(response){
				if(response.data.Statuscode==200) {
								toastr.success('Add Rental Property', response.data.Message);
								// history.push('/ez-admin/rent-property/unverified-list');
								 $this.setState({ redirect: true });
						} else {
							toastr.error('Error', response.data.Message);
						}
					
				// console.log(response);
	}).catch(function(error){  console.log(error); });	
	
	
 }
  
  render() {
	const { redirect } = this.state;
		if (redirect) { return <Redirect to='/ez-admin/rent-property/unverified-list'/>; }
		
    return (
      <div className="animated fadeIn">
       
		  <Card>
              <CardHeader><strong>Add Rental Property</strong> </CardHeader>
			   <CardBody >
					<Row>
						 <Col xs={12} md={12} className="mr-auto ml-auto">
						<ReactWizard
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
export default AddRentalProperty;