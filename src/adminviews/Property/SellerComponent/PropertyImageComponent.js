import React, { Component } from "react";
import ReactDOM from "react-dom";
import ReactWizard from "react-bootstrap-wizard";
import { Container, Row, Col,Card ,CardHeader,CardBody, FormGroup, Label,Input,Button,CardFooter} from "reactstrap";
import { AppSwitch } from '@coreui/react'
// import PropTypes from "prop-types";
// import classnames from "classnames";

// import "bootstrap/dist/css/bootstrap.css";


class PropertyImageComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstStep: "first step PropertyImageComponent"
    };
  }
  render() {
    return ( 
			<div>
	  <Row>
          <Col xs="12" sm="12">
           <Row>
			   <Col md="12"> <p className="title-style">Property Images</p></Col>
			   </Row>
                <Row>
				<Col md="6">
				<FormGroup row>
                    <Col md="4">
                      <Label htmlFor="file-multiple-input">Image Upload</Label>
                    </Col>
                    <Col xs="12" md="6">
                      <Input type="file" id="file-multiple-input" name="file-multiple-input" multiple />
                    </Col>
                  </FormGroup>
				  </Col>
				  <Col md="6">
				  <FormGroup row>
                    <Col md="4">
                      <Label htmlFor="file-multiple-input">Video Upload</Label>
                    </Col>
                    <Col xs="12" md="6">
                      <Input type="file" id="file-multiple-input" name="file-multiple-input"  />
                    </Col>
                  </FormGroup>
				  </Col>
                </Row>
				
               
				
				
				
			  
				
				
				 
             
          </Col>
		</Row>
		
       
      </div>
	
	);
  }
}

export default PropertyImageComponent;