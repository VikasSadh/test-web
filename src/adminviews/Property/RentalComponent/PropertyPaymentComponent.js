import React, { Component } from "react";
import ReactDOM from "react-dom";
import ReactWizard from "react-bootstrap-wizard";
import { Container, Row, Col,Card ,CardHeader,CardBody, FormGroup, Label,Input,Button,CardFooter} from "reactstrap";
import { AppSwitch } from '@coreui/react'

import { propertypayment_form_vaild } from '../../../actions/rentalproperty_basic_action';


class PropertyPaymentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { fields: {}, errors: {}};
	this.handleChange = this.handleChange.bind(this);
  }
   handleChange(e,field_info,id,keyname) {
		 let $this = this;
		 let fields = this.state.fields;
		 fields[e.target.name] = e.target.value;
		 this.setState({ fields });
  }
  isValidated() {
	let fields = this.state.fields;
	let formvaildaction  = propertypayment_form_vaild(fields);
	this.setState({ errors: formvaildaction.errors });
	return formvaildaction.formIsValid;
    //  return true;
	
  }
  
  render() {
    return ( 
	<div>
	  <Row className="property-wizards">
          <Col xs="12" sm="12">
           <Row>
			   <Col md="12"> <p className="title-style">Property Payment</p></Col>
			   </Row>
                <Row>
				  <Col md="6" xl="4">
                    <FormGroup>
                      <Label>Package</Label>
                      <Input type="select" name="property_package" value={this.state.fields.property_package} onChange={this.handleChange}>
							<option value="">Select Package </option>
							<option value="1">Trial Package</option>
							<option value="2">Silver Package  </option>
							
                      </Input>
                    </FormGroup>
					<div className="errorMsg">{this.state.errors.property_package}</div>
                  </Col>
				  <Col md="6" xl="4">
					  <FormGroup>
						 <Label >Pay Amount</Label>
						  <Input type="text"  placeholder="Enter Rs.100" name="payment_amount"  value={this.state.fields.payment_amount} onChange={this.handleChange} />
                     </FormGroup>
					<div className="errorMsg">{this.state.errors.payment_amount}</div>
                  
				  </Col>
				  
                </Row>
				<Row>
				 <Col md="6" xl="4">
							<FormGroup>
							  <Label>Payment Status</Label>
								<Input type="select" name="property_paymentstatus" value={this.state.fields.property_paymentstatus} onChange={this.handleChange}>
										<option value="">Select Status</option>
										<option value="1">Success</option>
										<option value="2">Pending</option>
								</Input>
							</FormGroup>
						<div className="errorMsg">{this.state.errors.property_paymentstatus}</div>
                  </Col>
				  <Col md="6" xl="4">
							<FormGroup>
							  <Label htmlFor="mail">Payment Mode</Label>
								<Input type="select"  name="property_paymentmode" value={this.state.fields.property_paymentmode} onChange={this.handleChange}>
										<option value="">Select Mode</option>
										<option value="1">Cash</option>
										<option value="2">Check </option>
										<option value="3">Online</option>
								</Input>
							</FormGroup>
							<div className="errorMsg">{this.state.errors.property_paymentmode}</div>
                  </Col>
				 
				</Row>
               
				
				
				
			  
				
				
				 
             
          </Col>
		</Row>
		
       
      </div>
	
	);
  }
}

export default PropertyPaymentComponent;