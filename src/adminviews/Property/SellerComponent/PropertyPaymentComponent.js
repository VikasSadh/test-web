import React, { Component } from "react";
import ReactDOM from "react-dom";
import ReactWizard from "react-bootstrap-wizard";
import { Container, Row, Col,Card ,CardHeader,CardBody, FormGroup, Label,Input,Button,CardFooter} from "reactstrap";
import { AppSwitch } from '@coreui/react'
// import PropTypes from "prop-types";
// import classnames from "classnames";

// import "bootstrap/dist/css/bootstrap.css";


class PropertyPaymentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstStep: "first step PropertyPaymentComponent"
    };
  }
  render() {
    return ( 
			<div>
	  <Row>
          <Col xs="12" sm="12">
           <Row>
			   <Col md="12"> <p className="title-style">Property Payment</p></Col>
			   </Row>
                <Row>
				  <Col md="4">
                    <FormGroup>
                      <Label htmlFor="name">Package</Label>
                      <Input type="select" name="ccmonth" id="ccmonth">
							
							<option value="Commercial">Trial Package</option>
							<option value="Residential">Silver Package  </option>
							
                      </Input>
                    </FormGroup>
                  </Col>
				  <Col md="4">
                    <FormGroup>
                      <Label htmlFor="mail">Payment Status</Label>
						<Input type="select" name="ccmonth" id="ccmonth">
								<option value="">Pending</option>
								<option value="Commercial">Success</option>
								
						</Input>
                    </FormGroup>
                  </Col>
				  
                </Row>
				<Row>
				 <Col md="4">
                    <FormGroup>
                      <Label htmlFor="mail">Payment Mode</Label>
						<Input type="select" name="ccmonth" id="ccmonth">
								<option value="">Cash</option>
								<option value="Commercial">Check </option>
								<option value="Residential">Online</option>
						</Input>
                    </FormGroup>
                  </Col>
				  <Col md="4">
                    
                  </Col>
				 
				</Row>
               
				
				
				
			  
				
				
				 
             
          </Col>
		</Row>
		
       
      </div>
	
	);
  }
}

export default PropertyPaymentComponent;