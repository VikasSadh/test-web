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
  componentDidUpdate(prevProps, prevState) {
	  let $this  = this;
	  let fields = this.state.fields;
		if(prevProps.property_data!==this.props.property_data) {
			var  property_price = this.props.property_data.property_price;
			fields['property_building'] = property_price.property_price_type;
			fields['property_leaseduration'] = property_price.property_leaseduration;
			fields['property_price'] = property_price.property_price ? property_price.property_price.toString() : '' ;
			fields['property_advanceprice'] = property_price.property_advance_price ? property_price.property_advance_price.toString() : '' ;
			fields['property_advanceprice_neg'] = property_price.property_advance_price_negotiable;
			fields['property_price_neg'] = property_price.property_price_negotiable;
			fields['maintenancetype'] = property_price.maintenance_type;
			fields['maintenance_charge'] = property_price.property_maintenance_charge ? property_price.property_maintenance_charge.toString() : '' ;
			fields['ebtype'] = property_price.property_eb_type ? property_price.property_eb_type : 'No' ;
			fields['eb_charge'] = property_price.property_eb_charge ? property_price.property_eb_charge.toString() : '' ;
			fields['water_charge'] = property_price.property_water_charge ? property_price.property_water_charge.toString() : '' ;
			$this.setState({ fields });
		}
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
							<option selected={this.state.fields.property_building ==='Rent' ? true :false } value="Rent">Rent</option>
							<option selected={this.state.fields.property_building ==='Lease' ? true :false } value="Lease">Lease</option>
						</Input>
                    </FormGroup>
                  </Col>
				  <Col md="6" xl="4">
			{ this.state.fields.property_building!='Rent' ?                   
				    <FormGroup>
                      <Label htmlFor="mail">Lease Duration</Label>
						<Input type="select" name="ccmonth" id="ccmonth" name="property_leaseduration"  value={this.state.fields.property_leaseduration} onChange={this.handleChange}>
								<option value="">Select Lease Duration</option>
								<option selected={this.state.fields.property_building =='1' ? true :false } value="1">1 year</option>
								<option selected={this.state.fields.property_building =='2' ? true :false } value="2">2 year</option>
								<option selected={this.state.fields.property_building =='3' ? true :false } value="3">3 year</option>
								<option selected={this.state.fields.property_building =='4' ? true :false } value="4">4 year</option>
								<option selected={this.state.fields.property_building =='5' ? true :false } value="5">5 year</option>
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
				  <Col md="4">
                    <FormGroup>
                      <Label xs="9" className="nl-padding" htmlFor="mail">Water Charges (Rs.)</Label>
						<Input type="text" placeholder="Enter Rs.100" name="water_charge"  value={this.state.fields.water_charge} onChange={this.handleChange} />
                    </FormGroup>
					<div className="errorMsg">{this.state.errors.water_charge}</div>
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

export default PropertyPriceComponent;