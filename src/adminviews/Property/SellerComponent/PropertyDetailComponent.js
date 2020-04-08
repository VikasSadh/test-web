import React, { Component } from "react";
import ReactDOM from "react-dom";
import ReactWizard from "react-bootstrap-wizard";
import { Container, Row, Col,Card ,CardHeader,CardBody, FormGroup, Label,Input,Button,CardFooter} from "reactstrap";
import { AppSwitch } from '@coreui/react'
// import PropTypes from "prop-types";
// import classnames from "classnames";

// import "bootstrap/dist/css/bootstrap.css";


class PropertyDetailComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstStep: "first step PropertyDetailComponent"
    };
  }
  render() {
    return ( 
			<div className="">
	  <Row>
          <Col xs="12" sm="12">
           <Row>
			   <Col md="12"> <p className="title-style">Property Address</p></Col>
			   </Row>
                <Row>
				  <Col md="4">
                    <FormGroup>
                      <Label htmlFor="name">Property Type</Label>
                      <Input type="select" name="ccmonth" id="ccmonth">
							<option value="">Select Property Type</option>
							<option value="Commercial">Flats/Apartments</option>
							<option value="Residential">Villa/Independent House</option>
							<option value="Residential">Serviced Apartment</option>
                      </Input>
                    </FormGroup>
                  </Col>
				  <Col md="4">
                    <FormGroup>
                      <Label htmlFor="mail">Sub Property Type</Label>
						<Input type="select" name="ccmonth" id="ccmonth">
								<option value="">Select Sub Property Type</option>
								<option value="Commercial">3BHK</option>
								<option value="Residential">4BHK</option>
								<option value="Residential">5BHK </option>
								<option value="Residential">1RK </option>
						</Input>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
				  <Col md="4">
                    <FormGroup>
                      <Label htmlFor="phone">Area Type</Label>
						<Input type="select" name="ccmonth" id="ccmonth">
								<option value="">Select Area Type</option>
								<option value="sq.ft ">sq.ft </option>
								<option value="Residential">Square Yard </option>
								<option value="Residential">Acre  </option>
								<option value="Residential">Hectare  </option>
								<option value="Km">Km   </option>
						</Input>
                    </FormGroup>
                  </Col>
				  <Col md="4">
                    <FormGroup>
                      <Label htmlFor="alternate-phone">Total Area</Label>
                      <Input type="text" id="alternate-phone" placeholder="Enter Total Area" required />
                    </FormGroup>
                  </Col>
                </Row>
				<Row>
				  <Col md="4">
						<FormGroup>
                      <Label htmlFor="alternate-phone">No.of floors</Label>
                      <Input type="text" id="alternate-phone" placeholder="Enter No.of floors" required />
                    </FormGroup>
                  </Col>
				  <Col md="4">
                    
					 <FormGroup>
                      <Label htmlFor="phone">Located At</Label>
							<Input type="select" name="ccmonth" id="ccmonth">
									<option value="">Select Located At </option>
									<option value="sq.ft ">1 Floor </option>
									<option value="Residential">2 Floor </option>
									<option value="Residential">3 Floor  </option>
									<option value="Residential">Ground Floor  </option>
							</Input>
                    </FormGroup>
                  </Col>
                </Row>
				
               <Row>
				  <Col md="4">
						<FormGroup>
                      <Label htmlFor="alternate-phone">No Of Restrooms</Label>
                      <Input type="text" id="alternate-phone" placeholder="Enter No Of Restrooms" required />
                    </FormGroup>
                  </Col>
				  <Col md="4">
                    
					 <FormGroup>
                      <Label htmlFor="phone">Restrooms Type</Label>
							<Input type="select" name="ccmonth" id="ccmonth">
									<option value="">Select Located At </option>
									<option value="sq.ft ">Western Type</option>
									<option value="Residential">Indian Type</option>
									<option value="Residential">Both</option>
									
							</Input>
                    </FormGroup>
                  </Col>
                </Row>
				
				<Row>
				  <Col md="4">
						<FormGroup>
                      <Label htmlFor="alternate-phone">No Of Parkings Bike</Label>
                      <Input type="text" id="alternate-phone" placeholder="Enter No Of Restrooms" required />
                    </FormGroup>
                  </Col>
				  <Col md="4">
                    
					 <FormGroup>
                      <Label xs="9" htmlFor="phone">Bike Parking Type</Label>
							<AppSwitch className={'mx-2'} size={'lg'} variant={'pill'} color={'success'} outline={'alt'} checked label dataOn={'Open'} dataOff={'Closed'} />
                    </FormGroup>
                  </Col>
                </Row>
				<Row>
				  <Col md="4">
						<FormGroup>
                      <Label htmlFor="alternate-phone">No Of Parkings Car</Label>
                      <Input type="text" id="alternate-phone" placeholder="Enter No Of Restrooms" required />
                    </FormGroup>
                  </Col>
				  <Col md="4">
                    
					 <FormGroup>
                      <Label xs="9" htmlFor="phone">Car Parking Type</Label>
							<AppSwitch className={'mx-2'} size={'lg'} variant={'pill'} color={'success'} outline={'alt'} checked label dataOn={'Open'} dataOff={'Closed'} />
                    </FormGroup>
                  </Col>
                </Row>
				
			   <Row>
			   <Col md="4">
                    
					 <FormGroup>
                      <Label htmlFor="phone">Facing Direction </Label>
							<Input type="select" name="ccmonth" id="ccmonth">
									<option value="">Select Facing Direction </option>
									<option value="sq.ft ">North </option>
									<option value="Residential">South</option>
									<option value="Residential">North East</option>
									
							</Input>
                    </FormGroup>
                  </Col>
				  <Col md="4">
						<FormGroup>
							<Label xs="9" htmlFor="phone">Private Terrace</Label>
								<AppSwitch className={'mx-2'} size={'lg'} variant={'pill'} color={'success'} outline={'alt'} checked label dataOn={'Yes'} dataOff={'No'} />
						</FormGroup>
                  </Col>
				  
                </Row>
				
				<Row>
				  <Col md="4">
						<FormGroup>
                      <Label htmlFor="alternate-phone">Possession Year</Label>
                      <Input type="text" id="alternate-phone" placeholder="Enter No Of Year" required />
                    </FormGroup>
                  </Col>
				  <Col md="4">
                    
					 <FormGroup>
                      <Label xs="9" htmlFor="phone">Possession Month</Label>
							<Input type="text" id="alternate-phone" placeholder="Enter No Of Month" required />
                    </FormGroup>
                  </Col>
                </Row>
				 
             
          </Col>
		</Row>
		
       
      </div>
	
	);
  }
}

export default PropertyDetailComponent;