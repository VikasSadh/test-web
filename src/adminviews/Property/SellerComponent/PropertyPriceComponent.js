import React, { Component } from "react";
import ReactDOM from "react-dom";
import ReactWizard from "react-bootstrap-wizard";
import { Container, Row, Col,Card ,CardHeader,CardBody, FormGroup, Label,Input,Button,CardFooter} from "reactstrap";
import { AppSwitch } from '@coreui/react'
// import PropTypes from "prop-types";
// import classnames from "classnames";

// import "bootstrap/dist/css/bootstrap.css";


class PropertyPriceComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstStep: "first step PropertyPriceComponent"
    };
  }
  render() {
    return ( 
			<div className="">
	  <Row>
          <Col xs="12" sm="12">
           <Row>
			   <Col md="12"> <p className="title-style">Property Price</p></Col>
			   </Row>
                <Row>
				  <Col md="4">
                    <FormGroup>
                      <Label htmlFor="name">Property Status </Label>
                      <Input type="select" name="ccmonth" id="ccmonth">
							<option value="">Select Property Status</option>
							<option value="Commercial">Under Construction</option>
							<option value="Residential">Ready to Move</option>
						</Input>
                    </FormGroup>
                  </Col>
				  <Col md="4">
                    <FormGroup>
                      <Label htmlFor="mail">Registration Fees (Rs.)</Label>
						<Input type="text" id="alternate-phone" placeholder="Enter Re.100" required />
                    </FormGroup>
                  </Col>
                </Row>
				<Row>
				  <Col md="4">
                    <FormGroup>
                      <Label htmlFor="name">Price Type </Label>
                      <Input type="select" name="ccmonth" id="ccmonth">
							<option value="">Select Property Status</option>
							<option value="op">Overall Price</option>
							<option value="bp">Breakup Price</option>
						</Input>
                    </FormGroup>
                  </Col>
				  <Col md="4">
                    <FormGroup>
                      <Label htmlFor="mail">Stamp Duty Carges Fees (Rs.)</Label>
						<Input type="text" id="alternate-phone" placeholder="Enter Re.100" required />
                    </FormGroup>
                  </Col>
                </Row>
				
                <Row>
				  <Col md="4">
                    <FormGroup>
                      <Label htmlFor="mail">Price (Rs.)</Label>
						<Input type="text" id="alternate-phone" placeholder="Enter Re.100" required />
                    </FormGroup>
                  </Col>
				  <Col md="4">
                    <FormGroup>
                      <Label xs="9" htmlFor="alternate-phone">Negotiable</Label>
                      <AppSwitch className={'mx-2'} size={'lg'} variant={'pill'} color={'success'} outline={'alt'} checked label dataOn={'Yes'} dataOff={'No'} />
                    </FormGroup>
                  </Col>
                </Row>
				<Row>
				  <Col md="4">
                    <FormGroup>
                      <Label htmlFor="mail">Advance (Rs.)</Label>
						<Input type="text" id="alternate-phone" placeholder="Enter Re.100" required />
                    </FormGroup>
                  </Col>
				  <Col md="4">
                    <FormGroup>
                      <Label xs="9" htmlFor="alternate-phone">Negotiable</Label>
                      <AppSwitch className={'mx-2'} size={'lg'} variant={'pill'} color={'success'} outline={'alt'} checked label dataOn={'Yes'} dataOff={'No'} />
                    </FormGroup>
                  </Col>
                </Row>
				
				
				<Row>
				  <Col md="4">
                    <FormGroup>
                      <Label htmlFor="mail">Sewage Connection Charges (Rs.)</Label>
						<Input type="text" id="alternate-phone" placeholder="Enter Rs.100" required />
                    </FormGroup>
                  </Col>
				  <Col md="4">
                    <FormGroup>
                      <Label xs="9" htmlFor="mail">Water Connection Charges (Rs.)</Label>
						<Input type="text" id="alternate-phone" placeholder="Enter Rs.100" required />
                    </FormGroup>
                  </Col>
                </Row>
				
				
				
				
				 
             
          </Col>
		</Row>
		
       
      </div>
	
	);
  }
}

export default PropertyPriceComponent;