import React, { Component } from "react";
import ReactDOM from "react-dom";
import ReactWizard from "react-bootstrap-wizard";
import { Container, Row, Col,Card ,CardHeader,CardBody, FormGroup, Label,Input,Button,CardFooter} from "reactstrap";
import { AppSwitch } from '@coreui/react'
// import PropTypes from "prop-types";
// import classnames from "classnames";

// import "bootstrap/dist/css/bootstrap.css";


class PropertyAmenitiesComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstStep: "first step PropertyAmenitiesComponent"
    };
  }
  render() {
    return ( 
			<div>
	  <Row>
          <Col xs="12" sm="12">
           <Row>
			   <Col md="12"> <p className="title-style">Property Amenities</p></Col>
			   </Row>
                <Row>
				  <Col md="3">
                    <FormGroup>
                      <Label htmlFor="name">Pet</Label>
                      <Input type="select" name="ccmonth" id="ccmonth">
							
							<option value="Commercial">Allowed</option>
							<option value="Residential">Not Allowed  </option>
							<option value="Residential">No Restriction</option>
                      </Input>
                    </FormGroup>
                  </Col>
				  <Col md="3">
                    <FormGroup>
                      <Label htmlFor="mail">Family</Label>
						<Input type="select" name="ccmonth" id="ccmonth">
								<option value="">Family</option>
								<option value="Commercial">Bachelors</option>
								<option value="Residential">No Restriction</option>
						</Input>
                    </FormGroup>
                  </Col>
				  <Col md="3">
                    <FormGroup>
                      <Label htmlFor="mail">Furnished</Label>
						<Input type="select" name="ccmonth" id="ccmonth">
								<option value="">Furnished</option>
								<option value="Commercial">Semi Furnished</option>
								<option value="Residential"> No Furnished</option>
						</Input>
                    </FormGroup>
                  </Col>
				  <Col md="3">
                    <FormGroup>
                      <Label htmlFor="mail">Food</Label>
						<Input type="select" name="ccmonth" id="ccmonth">
									<option value="">Veg</option>
									<option value="Residential"> Non Veg</option>
									<option value="Commercial">No Restriction</option>
						</Input>
                    </FormGroup>
                  </Col>
				  
                </Row>
				
               
				<Row className="property-fields">
				  <Col md="3">
						<FormGroup>
						<Label xs="9" htmlFor="alternate-phone">3 Phase Power</Label>
                      <AppSwitch xs="3" className={'mx-2'} size={'lg'} variant={'pill'} color={'success'} outline={'alt'} checked label dataOn={'Yes'} dataOff={'No'} />
                    </FormGroup>
                  </Col>
				  
				  <Col md="3">
                    <FormGroup>
                      <Label xs="9" htmlFor="phone">AC</Label>
							<AppSwitch className={'mx-2'} size={'lg'} variant={'pill'} color={'success'} outline={'alt'} checked label dataOn={'Yes'} dataOff={'No'} />
                    </FormGroup>
                  </Col>
				  
				  <Col md="3">
						<FormGroup>
                      <Label xs="9" htmlFor="alternate-phone">Ampitheatre</Label>
                      <AppSwitch className={'mx-2'} size={'lg'} variant={'pill'} color={'success'} outline={'alt'} checked label dataOn={'Yes'} dataOff={'No'} />
                    </FormGroup>
                  </Col>
				  
				  <Col md="3">
                    <FormGroup>
                      <Label xs="9" htmlFor="phone">Balacony</Label>
							<AppSwitch className={'mx-2'} size={'lg'} variant={'pill'} color={'success'} outline={'alt'} checked label dataOn={'Yes'} dataOff={'No'} />
                    </FormGroup>
                  </Col>
				  
				</Row>
				
				<Row className="property-fields">
				  <Col md="3">
						<FormGroup>
                      <Label xs="9" htmlFor="alternate-phone">Borewell</Label>
                      <AppSwitch className={'mx-2'} size={'lg'} variant={'pill'} color={'success'} outline={'alt'} checked label dataOn={'Yes'} dataOff={'No'} />
                    </FormGroup>
                  </Col>
				  
				  <Col md="3">
                    <FormGroup>
                      <Label xs="9" htmlFor="phone">CCTV</Label>
							<AppSwitch className={'mx-2'} size={'lg'} variant={'pill'} color={'success'} outline={'alt'} checked label dataOn={'Yes'} dataOff={'No'} />
                    </FormGroup>
                  </Col>
				  
				  <Col md="3">
						<FormGroup>
                      <Label xs="9" htmlFor="alternate-phone">Club House</Label>
                      <AppSwitch className={'mx-2'} size={'lg'} variant={'pill'} color={'success'} outline={'alt'} checked label dataOn={'Yes'} dataOff={'No'} />
                    </FormGroup>
                  </Col>
				  
				  <Col md="3">
                    <FormGroup>
                      <Label xs="9" htmlFor="phone">Common Rest Room</Label>
							<AppSwitch className={'mx-2'} size={'lg'} variant={'pill'} color={'success'} outline={'alt'} checked label dataOn={'Yes'} dataOff={'No'} />
                    </FormGroup>
                  </Col>
				  
				</Row>
				
				<Row className="property-fields">
				  <Col md="3">
						<FormGroup>
                      <Label xs="9" htmlFor="alternate-phone">Dining Hall</Label>
                      <AppSwitch className={'mx-2'} size={'lg'} variant={'pill'} color={'success'} outline={'alt'} checked label dataOn={'Yes'} dataOff={'No'} />
                    </FormGroup>
                  </Col>
				  
				  <Col md="3">
                    <FormGroup>
                      <Label xs="9" htmlFor="phone">Drinking Water</Label>
							<AppSwitch className={'mx-2'} size={'lg'} variant={'pill'} color={'success'} outline={'alt'} checked label dataOn={'Yes'} dataOff={'No'} />
                    </FormGroup>
                  </Col>
				  
				  <Col md="3">
						<FormGroup>
                      <Label xs="9" htmlFor="alternate-phone">Fans</Label>
                      <AppSwitch className={'mx-2'} size={'lg'} variant={'pill'} color={'success'} outline={'alt'} checked label dataOn={'Yes'} dataOff={'No'} />
                    </FormGroup>
                  </Col>
				  
				  <Col md="3">
                    <FormGroup>
                      <Label xs="9" htmlFor="phone">Fire Safety Measures</Label>
							<AppSwitch className={'mx-2'} size={'lg'} variant={'pill'} color={'success'} outline={'alt'} checked label dataOn={'Yes'} dataOff={'No'} />
                    </FormGroup>
                  </Col>
				  
				</Row>
				
				<Row className="property-fields">
				  <Col md="3">
						<FormGroup>
                      <Label xs="9" htmlFor="alternate-phone">Garden Area</Label>
                      <AppSwitch className={'mx-2'} size={'lg'} variant={'pill'} color={'success'} outline={'alt'} checked label dataOn={'Yes'} dataOff={'No'} />
                    </FormGroup>
                  </Col>
				  
				  <Col md="3">
                    <FormGroup>
                      <Label xs="9" htmlFor="phone">Gated Community</Label>
							<AppSwitch className={'mx-2'} size={'lg'} variant={'pill'} color={'success'} outline={'alt'} checked label dataOn={'Yes'} dataOff={'No'} />
                    </FormGroup>
                  </Col>
				  
				  <Col md="3">
						<FormGroup>
                      <Label xs="9" htmlFor="alternate-phone">GYM</Label>
                      <AppSwitch className={'mx-2'} size={'lg'} variant={'pill'} color={'success'} outline={'alt'} checked label dataOn={'Yes'} dataOff={'No'} />
                    </FormGroup>
                  </Col>
				  
				  <Col md="3">
                    <FormGroup>
                      <Label xs="9" htmlFor="phone">Swimming Pool</Label>
							<AppSwitch className={'mx-2'} size={'lg'} variant={'pill'} color={'success'} outline={'alt'} checked label dataOn={'Yes'} dataOff={'No'} />
                    </FormGroup>
                  </Col>
				  
				</Row>
				
				<Row className="property-fields">
				  <Col md="3">
						<FormGroup>
                      <Label xs="9" htmlFor="alternate-phone">Wifi/Internet</Label>
                      <AppSwitch className={'mx-2'} size={'lg'} variant={'pill'} color={'success'} outline={'alt'} checked label dataOn={'Yes'} dataOff={'No'} />
                    </FormGroup>
                  </Col>
				  
				  <Col md="3">
                    <FormGroup>
                      <Label xs="9" htmlFor="phone">Party Hall</Label>
							<AppSwitch className={'mx-2'} size={'lg'} variant={'pill'} color={'success'} outline={'alt'} checked label dataOn={'Yes'} dataOff={'No'} />
                    </FormGroup>
                  </Col>
				  
				  <Col md="3">
						<FormGroup>
                      <Label xs="9" htmlFor="alternate-phone">Play Area</Label>
                      <AppSwitch className={'mx-2'} size={'lg'} variant={'pill'} color={'success'} outline={'alt'} checked label dataOn={'Yes'} dataOff={'No'} />
                    </FormGroup>
                  </Col>
				  
				  <Col md="3">
                    <FormGroup>
                      <Label xs="9" htmlFor="phone">Study Room</Label>
							<AppSwitch className={'mx-2'} size={'lg'} variant={'pill'} color={'success'} outline={'alt'} checked label dataOn={'Yes'} dataOff={'No'} />
                    </FormGroup>
                  </Col>
				  
				</Row>
				
				<Row className="property-fields">
				  <Col md="3">
						<FormGroup>
                      <Label xs="9" htmlFor="alternate-phone">Terrace Access</Label>
                      <AppSwitch className={'mx-2'} size={'lg'} variant={'pill'} color={'success'} outline={'alt'} checked label dataOn={'Yes'} dataOff={'No'} />
                    </FormGroup>
                  </Col>
				  
				  <Col md="3">
                    <FormGroup>
                      <Label xs="9" htmlFor="phone">Private Terrace</Label>
							<AppSwitch className={'mx-2'} size={'lg'} variant={'pill'} color={'success'} outline={'alt'} checked label dataOn={'Yes'} dataOff={'No'} />
                    </FormGroup>
                  </Col>
				  
				  <Col md="3">
						<FormGroup>
                      <Label xs="9" htmlFor="alternate-phone">Lift</Label>
                      <AppSwitch className={'mx-2'} size={'lg'} variant={'pill'} color={'success'} outline={'alt'} checked label dataOn={'Yes'} dataOff={'No'} />
                    </FormGroup>
                  </Col>
				  
				  <Col md="3">
                    <FormGroup>
                      <Label xs="9" htmlFor="phone">Security Guard</Label>
							<AppSwitch className={'mx-2'} size={'lg'} variant={'pill'} color={'success'} outline={'alt'} checked label dataOn={'Yes'} dataOff={'No'} />
                    </FormGroup>
                  </Col>
				  
				</Row>
				
				<Row className="property-fields">
				  <Col md="3">
						<FormGroup>
                      <Label xs="9" htmlFor="alternate-phone">Visitors Allowed</Label>
                      <AppSwitch className={'mx-2'} size={'lg'} variant={'pill'} color={'success'} outline={'alt'} checked label dataOn={'Yes'} dataOff={'No'} />
                    </FormGroup>
                  </Col>
				  
				  <Col md="3">
                    <FormGroup>
                      <Label xs="9" htmlFor="phone">Visitors Accommodation Available</Label>
							<AppSwitch className={'mx-2'} size={'lg'} variant={'pill'} color={'success'} outline={'alt'} checked label dataOn={'Yes'} dataOff={'No'} />
                    </FormGroup>
                  </Col>
				  
				  <Col md="3">
						<FormGroup>
                      <Label xs="9" htmlFor="alternate-phone">Servant Accommodation</Label>
                      <AppSwitch className={'mx-2'} size={'lg'} variant={'pill'} color={'success'} outline={'alt'} checked label dataOn={'Yes'} dataOff={'No'} />
                    </FormGroup>
                  </Col>
				  
				  <Col md="3">
                    <FormGroup>
                      <Label xs="9" htmlFor="phone">Visitors Parking</Label>
							<AppSwitch className={'mx-2'} size={'lg'} variant={'pill'} color={'success'} outline={'alt'} checked label dataOn={'Yes'} dataOff={'No'} />
                    </FormGroup>
                  </Col>
				  
				</Row>
				
				<Row className="property-fields">
				  <Col md="3">
						<FormGroup>
                      <Label xs="9" htmlFor="alternate-phone">Laundry Services</Label>
                      <AppSwitch className={'mx-2'} size={'lg'} variant={'pill'} color={'success'} outline={'alt'} checked label dataOn={'Yes'} dataOff={'No'} />
                    </FormGroup>
                  </Col>
				  
				  <Col md="3">
                    <FormGroup>
                      <Label xs="9" htmlFor="phone">Heater</Label>
							<AppSwitch className={'mx-2'} size={'lg'} variant={'pill'} color={'success'} outline={'alt'} checked label dataOn={'Yes'} dataOff={'No'} />
                    </FormGroup>
                  </Col>
				  
				  <Col md="3">
						<FormGroup>
                      <Label xs="9" htmlFor="alternate-phone">House Keeping</Label>
                      <AppSwitch className={'mx-2'} size={'lg'} variant={'pill'} color={'success'} outline={'alt'} checked label dataOn={'Yes'} dataOff={'No'} />
                    </FormGroup>
                  </Col>
				  
				  <Col md="3">
                    <FormGroup>
                      <Label xs="9" htmlFor="phone">Intercom</Label>
							<AppSwitch className={'mx-2'} size={'lg'} variant={'pill'} color={'success'} outline={'alt'} checked label dataOn={'Yes'} dataOff={'No'} />
                    </FormGroup>
                  </Col>
				  
				</Row>
				
				<Row className="property-fields">
				  <Col md="3">
						<FormGroup>
                      <Label xs="9" htmlFor="alternate-phone">Chimney</Label>
                      <AppSwitch className={'mx-2'} size={'lg'} variant={'pill'} color={'success'} outline={'alt'} checked label dataOn={'Yes'} dataOff={'No'} />
                    </FormGroup>
                  </Col>
				  
				  <Col md="3">
                    <FormGroup>
                      <Label xs="9" htmlFor="phone">Vastu Compliant</Label>
							<AppSwitch className={'mx-2'} size={'lg'} variant={'pill'} color={'success'} outline={'alt'} checked label dataOn={'Yes'} dataOff={'No'} />
                    </FormGroup>
                  </Col>
				  
				  <Col md="3">
						<FormGroup>
                      <Label xs="9" htmlFor="alternate-phone">Plug Points in all rooms</Label>
                      <AppSwitch className={'mx-2'} size={'lg'} variant={'pill'} color={'success'} outline={'alt'} checked label dataOn={'Yes'} dataOff={'No'} />
                    </FormGroup>
                  </Col>
				  
				  <Col md="3">
                    <FormGroup>
                      <Label xs="9" htmlFor="phone">Rain Water Harvesting</Label>
							<AppSwitch className={'mx-2'} size={'lg'} variant={'pill'} color={'success'} outline={'alt'} checked label dataOn={'Yes'} dataOff={'No'} />
                    </FormGroup>
                  </Col>
				  
				</Row>
				
				<Row className="property-fields">
				  <Col md="3">
						<FormGroup>
                      <Label xs="9" htmlFor="alternate-phone">Wardrobes</Label>
                      <AppSwitch className={'mx-2'} size={'lg'} variant={'pill'} color={'success'} outline={'alt'} checked label dataOn={'Yes'} dataOff={'No'} />
                    </FormGroup>
                  </Col>
				  
				  <Col md="3">
                    <FormGroup>
                      <Label xs="9" htmlFor="phone">Modular Kitchen</Label>
							<AppSwitch className={'mx-2'} size={'lg'} variant={'pill'} color={'success'} outline={'alt'} checked label dataOn={'Yes'} dataOff={'No'} />
                    </FormGroup>
                  </Col>
				  
				  <Col md="3">
						<FormGroup>
                      <Label xs="9" htmlFor="alternate-phone">Well</Label>
                      <AppSwitch className={'mx-2'} size={'lg'} variant={'pill'} color={'success'} outline={'alt'} checked label dataOn={'Yes'} dataOff={'No'} />
                    </FormGroup>
                  </Col>
				  
				  <Col md="3">
                    <FormGroup>
                      <Label xs="9" htmlFor="phone">Solar Devices</Label>
							<AppSwitch className={'mx-2'} size={'lg'} variant={'pill'} color={'success'} outline={'alt'} checked label dataOn={'Yes'} dataOff={'No'} />
                    </FormGroup>
                  </Col>
				  
				</Row>
				
				<Row className="property-fields">
				  <Col md="3">
						<FormGroup>
                      <Label xs="9" htmlFor="alternate-phone">Pooja Room</Label>
                      <AppSwitch className={'mx-2'} size={'lg'} variant={'pill'} color={'success'} outline={'alt'} checked label dataOn={'Yes'} dataOff={'No'} />
                    </FormGroup>
                  </Col>
				  
				  <Col md="3">
                    <FormGroup>
                      <Label xs="9" htmlFor="phone">Modular Kitchen</Label>
							<AppSwitch className={'mx-2'} size={'lg'} variant={'pill'} color={'success'} outline={'alt'} checked label dataOn={'Yes'} dataOff={'No'} />
                    </FormGroup>
                  </Col>
				  
				  <Col md="3">
						<FormGroup>
                      <Label xs="9" htmlFor="alternate-phone">Tube Lights</Label>
                      <AppSwitch className={'mx-2'} size={'lg'} variant={'pill'} color={'success'} outline={'alt'} checked label dataOn={'Yes'} dataOff={'No'} />
                    </FormGroup>
                  </Col>
				  
				  <Col md="3">
                    <FormGroup>
                      <Label xs="9" htmlFor="phone">Power Backup</Label>
							<AppSwitch className={'mx-2'} size={'lg'} variant={'pill'} color={'success'} outline={'alt'} checked label dataOn={'Yes'} dataOff={'No'} />
                    </FormGroup>
                  </Col>
				  
				</Row>
				
				<Row className="property-fields">
				  <Col md="3">
						<FormGroup>
                      <Label xs="9" htmlFor="alternate-phone">Park</Label>
                      <AppSwitch className={'mx-2'} size={'lg'} variant={'pill'} color={'success'} outline={'alt'} checked label dataOn={'Yes'} dataOff={'No'} />
                    </FormGroup>
                  </Col>
				  
				  <Col md="3">
                    <FormGroup>
                      <Label xs="9" htmlFor="phone">Water softening plant</Label>
							<AppSwitch className={'mx-2'} size={'lg'} variant={'pill'} color={'success'} outline={'alt'} checked label dataOn={'Yes'} dataOff={'No'} />
                    </FormGroup>
                  </Col>
				  
				  <Col md="3"> </Col>
				  
				  <Col md="3"> </Col>
				  
				</Row>
				
				
			  
				
				
				 
             
          </Col>
		</Row>
		
       
      </div>
	
	);
  }
}

export default PropertyAmenitiesComponent;