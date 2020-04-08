import React, { Component } from "react";
import ReactDOM from "react-dom";
import ReactWizard from "react-bootstrap-wizard";
import { Container, Row, Col,Card ,CardHeader,CardBody, FormGroup, Label,Input,Button,CardFooter} from "reactstrap";
import { AppSwitch } from '@coreui/react'

import { propertyprice_form_vaild } from '../../../actions/rentalproperty_basic_action';

import axios from 'axios';
const API_URL = process.env.REACT_APP_API_URL;

class PropertyPriceComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { fields: {property_building:'Rent',ebtype:'Yes',maintenancetype:'1'}, errors: {}, PriceLabel: "Rent (Rs.)",maintenance:'',EB:'',showinput:true,Mshowinput:false,EBshowinput:true
    
	};
		this.handleChange = this.handleChange.bind(this);
		// this.handleChangeM = this.handleChangeM.bind(this);
		// this.handleChangeEB = this.handleChangeEB.bind(this);
		// this.handleSubmit = this.handleSubmit.bind(this); 
  }
  
   handleChange(e) {
	 
	 console.log(e.target.value)
		let fields = this.state.fields;
		if(e.target.type=='checkbox') {
			console.log(e.target.checked)
				let target_value = e.target.checked ? 'Yes' : 'No'; 
				console.log(target_value)
				console.log(e.target.name)
				fields[e.target.name] = target_value;
				
		} else {
				fields[e.target.name] = e.target.value;
				//this.setState({ fields });
		}
		this.setState({ fields });
		console.log(this.state.fields)
  }
  
  /* handleChangeM(event) {
	   console.log(event.target.value)
	   if(event.target.value=="Extra") {
		   
		   var Mshowinput=true;
	   } else {
		   var Mshowinput=false;
	   }
    this.setState({maintenance: event.target.value,Mshowinput:Mshowinput});
  }
   handleChangeEB(event) {
	   console.log(event.target.checked)
	   if(event.target.checked==true) {
		   
		   var EBshowinput=false;
	   } else {
		   var EBshowinput=true;
	   }
    this.setState({EB: event.target.value,EBshowinput:EBshowinput});
  } 
  */


isValidated() {
	let fields = this.state.fields;
	let formvaildaction  = propertyprice_form_vaild(fields);
	console.log(formvaildaction.errors);
	this.setState({ errors: formvaildaction.errors });
	 return formvaildaction.formIsValid;
    //  return true;
	
  }
  /* handleSubmit(event) {
    alert('Your favorite flavor is: ' + this.state.building);
    event.preventDefault();
  } */
	
  render() {
	  let $this = this;
    return ( 
			<div className="">
	  <Row className="property-wizards">
          <Col xs="12" sm="12">
           <Row>
			   <Col md="12"> <p className="title-style">Property Price</p></Col>
			   </Row>
                <Row>
				  <Col md="6" xl="4">
                    <FormGroup>
                      <Label htmlFor="name">Building For </Label>
                      <Input  type="select" name="property_building"  value={this.state.fields.property_building} onChange={this.handleChange} >
							<option selected value="Rent">Rent</option>
							<option value="Lease">Lease</option>
						</Input>
                    </FormGroup>
                  </Col>
				  <Col md="6" xl="4">
			{ this.state.fields.property_building!='Rent' ?                   
				    <FormGroup>
                      <Label htmlFor="mail">Lease Duration</Label>
						<Input type="select" name="ccmonth" id="ccmonth" name="property_leaseduration"  value={this.state.fields.property_leaseduration} onChange={this.handleChange}>
								<option value="">Select Lease Duration</option>
								<option value="1">1 year</option>
								<option value="2">2 year</option>
								<option value="3">3 year</option>
								<option value="4">4 year</option>
								<option value="5">5 year</option>
							</Input>
							<div className="errorMsg">{this.state.errors.property_leaseduration }</div> 
                    </FormGroup>
			: null
			
			}	
			</Col>
                </Row>
                <Row>
				  <Col md="6" xl="4">
                    <FormGroup>
                      <Label htmlFor="mail">{ this.state.fields.property_building!='Rent' ? "Lease (Rs.)" : "Rent (Rs.)" }</Label>
						<Input type="text"  placeholder="Enter Rs.100" name="property_price"  value={this.state.fields.property_price} onChange={this.handleChange} />
                    </FormGroup>
					<div className="errorMsg">{this.state.errors.property_price}</div>
                  </Col>
				  <Col md="6" xl="4">
                    <FormGroup className="switchOptions">
                      <Label xs="9" className="nl-padding">Negotiable</Label>
                      <AppSwitch className={'col-3 nr-padding'} size={'lg'} variant={'pill'} color={'success'} outline={'alt'}  label dataOn={'Yes'} dataOff={'No'} checked={ $this.state.fields.property_price_neg==='Yes' ? true : false } name="property_price_neg"  value={this.state.fields.property_price_neg} onChange={this.handleChange} />
                    </FormGroup>
                  </Col>
                </Row>
				
				  
				 { this.state.fields.property_building=='Rent' ? 
				<Row>
				  <Col md="6" xl="4">
                    <FormGroup>
                      <Label htmlFor="mail">Advance (Rs.)</Label>
						<Input type="text"  placeholder="Enter Rs.10 " name="property_advanceprice"  value={this.state.fields.property_advanceprice} onChange={this.handleChange}  />
                    </FormGroup>
					<div className="errorMsg">{this.state.errors.property_advanceprice}</div>
                  </Col>
				  <Col md="6" xl="4">
                    <FormGroup className="switchOptions">
                      <Label xs="9" className="nl-padding">Negotiable</Label>
                      <AppSwitch className={'col-3 nr-padding'} size={'lg'} variant={'pill'} color={'success'} outline={'alt'}  label dataOn={'Yes'} dataOff={'No'} checked={ $this.state.fields.property_advanceprice_neg==='Yes' ? true : false } name="property_advanceprice_neg"  value={this.state.fields.property_advanceprice_neg} onChange={this.handleChange} />
                    </FormGroup>
                  </Col>
                </Row>
				 : null }
				 
				 <Row>
				  <Col md="6" xl="4">
                    <FormGroup>
                      <Label htmlFor="mail">Maintenance</Label>
						<Input type="select" name="maintenancetype"  value={this.state.fields.maintenancetype} onChange={this.handleChange}   >
								<option selected value="1">Maintenance Include</option>
								<option value="2">Maintenance Extra</option>
							</Input>
                    </FormGroup>
                  </Col>
				  <Col md="6" xl="4">
				  { this.state.fields.maintenancetype==2 ? 
						<FormGroup>
						<Label xs="9" className="nl-padding" htmlFor="mail">Maintenance Charges (Rs.)</Label>
							<Input type="text" id="alternate-phone" placeholder="Enter Rs.100" name="maintenance_charge"  value={this.state.fields.maintenance_charge} onChange={this.handleChange} />
							
							<div className="errorMsg">{this.state.errors.maintenance_charge}</div>
						</FormGroup>
						
					: null }
                  </Col>
                </Row>
				 
				  
				<Row>
				 <Col md="6" xl="4">
                   <FormGroup check className="checkbox">
					<Input className="form-check-input" type="checkbox" checked={this.state.fields.ebtype=='Yes' ? true : false } name="ebtype" value={this.state.fields.ebtype} onChange={this.handleChange}  />	
					<Label check className="form-check-label" >As Per Unit TNEB</Label>
                    </FormGroup>
                  </Col>
				  <Col md="6" xl="4">
				  { this.state.fields.ebtype=='No' ?
				   <FormGroup>
                      <Label xs="9" className="nl-padding" htmlFor="mail">EB Charges Per Unit (Rs.)</Label>
						<Input type="text" placeholder="Enter Rs.100" name="eb_charge"  value={this.state.fields.eb_charge} onChange={this.handleChange} />
						<div className="errorMsg">{this.state.errors.eb_charge}</div>
                    </FormGroup>
				  : null }
                  </Col>
				 
                </Row>
				
				<Row>
				  <Col md="6" xl="4">
                    <FormGroup>
                      <Label xs="9" className="nl-padding" htmlFor="mail">Water Charges (Rs.)</Label>
						<Input type="text" placeholder="Enter Rs.100" name="water_charge"  value={this.state.fields.water_charge} onChange={this.handleChange} />
                    </FormGroup>
					<div className="errorMsg">{this.state.errors.water_charge}</div>
                  </Col>
				  <Col md="6" xl="4">
                   
                  </Col>
                </Row>
				
				
				
				
				
				
				 
             
          </Col>
		</Row>
		
       
      </div>
	
	);
  }
}

export default PropertyPriceComponent;