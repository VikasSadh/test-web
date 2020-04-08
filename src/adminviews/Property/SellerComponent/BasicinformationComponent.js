import React, { Component } from "react";
import ReactDOM from "react-dom";
import ReactWizard from "react-bootstrap-wizard";
import { Container, Row, Col,Card ,CardHeader,CardBody, FormGroup, Label,Input,Button,CardFooter} from "reactstrap";

// import PropTypes from "prop-types";
// import classnames from "classnames";

// import "bootstrap/dist/css/bootstrap.css";


class BasicinformationComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstStep: "first step BasicinformationComponent"
    };
  }
  render() {
    return ( 
			<div className="">
	  <Row>
          <Col xs="12" sm="12">
           
                <Row>
				  <Col md="4">
                    <FormGroup>
                      <Label htmlFor="name">Property Name</Label>
                      <Input type="text" id="name" placeholder="Enter Property name" required />
                    </FormGroup>
                  </Col>
				  <Col md="4">
                    <FormGroup>
                      <Label htmlFor="mail">User Name</Label>
                      <Input type="select" name="ccmonth" id="ccmonth">
							<option value="">Select User</option>
							<option value="Commercial">Commercial</option>
							<option value="Residential">Residential</option>
                      </Input>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
				  <Col md="4">
                    <FormGroup>
                      <Label htmlFor="phone">Business Type </Label>
						<Input type="select" name="ccmonth" id="ccmonth">
							<option value="Commercial">Commercial</option>
							<option value="Residential">Residential</option>
						</Input>
                    </FormGroup>
                  </Col>
				  <Col md="4">
                    <FormGroup>
                      <Label htmlFor="alternate-phone">Refrence Contact No.</Label>
                      <Input type="text" id="alternate-phone" placeholder="Enter Refrence Contact no" required />
                    </FormGroup>
                  </Col>
                </Row>
               
			   <Row>
			   <Col md="12"> <p className="title-style">Property Address</p></Col>
			   </Row>
				
				<Row>
				  <Col md="4">
                    <FormGroup>
                      <Label htmlFor="area">State</Label>
						<Input type="select" name="ccmonth" id="ccmonth">
							<option value="">Select State</option>
							<option value="Tamil Nadu">Tamil Nadu</option>
						</Input>
                    </FormGroup>
                  </Col>
				  <Col md="4">
                    <FormGroup>
                      <Label htmlFor="street">City</Label>
							<Input type="select" name="ccmonth" id="ccmonth">
								<option value="">Select State</option>
								<option value="Chennai">Chennai</option>
							</Input>
                    </FormGroup>
                  </Col>
                </Row>
				
                <Row>
				  <Col md="4">
                    <FormGroup>
                      <Label htmlFor="area">Area</Label>
                      <Input type="text" id="area" placeholder="Enter your area" required />
                    </FormGroup>
                  </Col>
				  <Col md="4">
                    <FormGroup>
                      <Label htmlFor="street">Street</Label>
                      <Input type="text" id="street" placeholder="Enter your street" required />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
					<Col md="4">
                    <FormGroup>
						<Label htmlFor="pincode">Pincode</Label>
						<Input type="text" id="mail" placeholder="Enter Pincode" required />
                    </FormGroup>
                  </Col>
				   <Col md="4">
                    <FormGroup>
                      <Label htmlFor="landmark">Landmark</Label>
                      <Input type="text" id="landmark" placeholder="Enter Landmark" required />
                    </FormGroup>
                  </Col>
                </Row>
				<Row>
					<Col md="4">
                    <FormGroup>
						<Label htmlFor="pincode">Latitude</Label>
						<Input type="text" id="mail" placeholder="Enter Latitude" required />
                    </FormGroup>
                  </Col>
				   <Col md="4">
                    <FormGroup>
                      <Label htmlFor="landmark">Longitude</Label>
                      <Input type="text" id="landmark" placeholder="Enter Longitude" required />
                    </FormGroup>
                  </Col>
				  <Col md="4">
						<a target="_blank" href="https://www.latlong.net/convert-address-to-lat-long.html" >Get lat & Long </a>
					</Col>
                </Row>
				 
             
          </Col>
		</Row>
		
       
      </div>
	
	);
  }
}

export default BasicinformationComponent;