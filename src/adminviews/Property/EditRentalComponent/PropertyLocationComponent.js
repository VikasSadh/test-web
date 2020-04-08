import React, { Component } from "react";
import ReactDOM from "react-dom";
import ReactWizard from "react-bootstrap-wizard";
import { Container, Row, Col,Card ,CardHeader,CardBody, FormGroup, Label,Input,Button,CardFooter} from "reactstrap";
import { AppSwitch } from '@coreui/react'

import PlacesAutocomplete, { geocodeByAddress,getLatLng, } from 'react-places-autocomplete';
import { propertylocation_form_vaild } from '../../../actions/rentalproperty_basic_action';

import axios from 'axios';
const API_URL = process.env.REACT_APP_API_URL;

const google = window.google;

class PropertyLocationComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { fields: {}, errors: {}, stateandcityoption:[],property_area:'',suggestions: []};
		this.handleChange = this.handleChange.bind(this);
		// this.handleSubmit = this.handleSubmit.bind(this); 
  }
 componentWillMount() {
		 let $this  = this;
		 let fields = this.state.fields;
		axios.get(API_URL+'/api/admin/getstate_and_city').then(function(response){
				 if(response.data.Statuscode==200) {
						let resData = response.data.Data;
						// console.log(resData)
							fields['property_city'] = 1;
							fields['property_state'] = 1;
						 $this.setState({ stateandcityoption: resData });
						 $this.setState({ fields });
						
				} else {
						
				}
				 
				
      }).catch(function(error){  console.log(error); }); 
	  
  }
  componentDidUpdate(prevProps, prevState) {
		let $this  = this;
		let fields = this.state.fields;
		if(prevProps.property_data!==this.props.property_data) {
			var  property_location = this.props.property_data.property_location;
			fields['property_city'] = 1;
			fields['property_state'] = 1;
			fields['property_address'] = property_location.address;
			fields['property_pincode'] = property_location.pincode ? property_location.pincode.toString()  : '' ;
			fields['property_landmark'] = property_location.land_mark;
			fields['property_latitude'] = property_location.latitude;
			fields['property_longitude'] = property_location.longitude;
			$this.setState({ fields,property_area:property_location.localities });
		}
  }
  
  handleChange(e) {
		let $this = this;
		let fields = this.state.fields;
		fields[e.target.name] = e.target.value;
		this.setState({ fields });
	   
	
}
	
	 handleChangeArrea = property_area => {
	 console.log(property_area);
    this.setState({ property_area });
  };
 handleSelect = property_area => {
	  let $this = this;
	  geocodeByAddress(property_area).then(function(results){
			results[0].address_components.map(function(e) { 
					var type = e.types;
					if(type.indexOf('sublocality_level_1') !== -1){
						 console.log(e);
						 $this.setState({  property_area: e.short_name });
					} 
			})
		}
	  ).catch(error => console.error('Error', error));
   
  };
  

isValidated() {
	let fields = this.state.fields;
	let property_area = this.state.property_area;
	let formvaildaction  = propertylocation_form_vaild(fields,property_area);
	console.log(formvaildaction);
	this.setState({ errors: formvaildaction.errors });
	 return formvaildaction.formIsValid;
    // return true;
	
  }

render() {

const searchOptions = { location: new google.maps.LatLng(13.067439, 80.237617), radius: 1000, componentRestrictions: { country: ['in'] }, types: ['geocode']}

    return ( 
			<div className="">
	  <Row className="property-wizards">
          <Col xs="12" sm="12">
				<Row>
					<Col md="12"> <p className="title-style">LOCALITY  Details</p></Col>
			   </Row>
               	<Row>
				  <Col md="6" xl="4">
                    <FormGroup>
                      <Label htmlFor="state">State <span>*</span></Label>
                      <Input type="select"  id="state" name="property_state"value={this.state.fields.property_state} onChange={this.handleChange}>
                         { this.state.stateandcityoption.map((i) => <option selected key={i.state_id} value={i.state_id}>{i.state_name}</option>) }
                      </Input>
                    </FormGroup>
						<div className="errorMsg">{this.state.errors.property_state}</div>
                  </Col>
				  <Col md="6" xl="4">
                   <FormGroup>
                      <Label htmlFor="city">City <span>*</span></Label>
                      <Input type="select" id="city"  name="property_city" value={this.state.fields.property_city} onChange={this.handleChange}>
							
                         { this.state.stateandcityoption.map((i) => <option defaultValue={{ label:i.city_name , value: 1 }} key={i.city_id} value={i.city_id}>{i.city_name}</option>) }
                      </Input>
                    </FormGroup>
						<div className="errorMsg">{this.state.errors.property_city}</div>
                  </Col>
                </Row>
				
                <Row>
				  <Col md="6" xl="4">
                    <FormGroup>
						<Label htmlFor="area">Area <span>*</span></Label>
						<PlacesAutocomplete className="form-control"
							value={this.state.property_area}
							onChange={this.handleChangeArrea}
							onSelect={this.handleSelect} 
							searchOptions={searchOptions}
							shouldFetchSuggestions={this.state.property_area.length > 1}
							 
							>
							{({ getInputProps, suggestions, getSuggestionItemProps, loadingp }) => (
								
										  <div>
											<Input 
											  {...getInputProps({
												placeholder: 'Search Area ...',
												className: 'location-search-input',
												name : 'property_area', 
												
											  })}
											/>
											<div className="autocomplete-dropdown-container">
											  {loadingp && <div>Loading...</div>}
											  {suggestions.map(suggestion => {
												const className = suggestion.active
												  ? 'suggestion-item--active'
												  : 'suggestion-item';
												// inline style for demonstration purpose
												const style = suggestion.active
												  ? { backgroundColor: '#fafafa', cursor: 'pointer' }
												  : { backgroundColor: '#ffffff', cursor: 'pointer' };
												return (
												  <div
													{...getSuggestionItemProps(suggestion, {
													  className,
													  style,
													})}
												  >
													<span>{suggestion.description}</span>
												  </div>
												);
											  })}
											</div>
										  </div>
								)}
								</PlacesAutocomplete>
								<div className="errorMsg">{this.state.errors.property_area}</div>
							</FormGroup>
                  </Col>
				  <Col md="6" xl="4">
                    <FormGroup>
                      <Label htmlFor="street">Street</Label>
                      <Input type="text" id="street" placeholder="Enter your street" maxlength={50} name="property_address" value={this.state.fields.property_address} onChange={this.handleChange} />
                    </FormGroup>
					<div className="errorMsg">{this.state.errors.property_address}</div>
                  </Col>
                </Row>
                <Row>
					<Col md="6" xl="4">
                    <FormGroup>
						<Label htmlFor="pincode">Pincode</Label>
						<Input type="text" id="mail" placeholder="Enter Pincode" maxlength={8} name="property_pincode" value={this.state.fields.property_pincode} onChange={this.handleChange} />
                    </FormGroup>
					<div className="errorMsg">{this.state.errors.property_pincode}</div>
                  </Col>
				   <Col md="6" xl="4">
                    <FormGroup>
                      <Label htmlFor="landmark">Landmark</Label>
                      <Input type="text" id="landmark" placeholder="Enter Landmark" maxlength={30} name="property_landmark" value={this.state.fields.property_landmark} onChange={this.handleChange} />
                    </FormGroup>
					<div className="errorMsg">{this.state.errors.property_landmark}</div>
                  </Col>
                </Row>
				<Row>
					<Col md="4">
                    <FormGroup>
						<Label htmlFor="pincode">Latitude</Label>
						<Input type="text" id="mail" placeholder="Enter Latitude" maxlength={30} name="property_latitude" value={this.state.fields.property_latitude} onChange={this.handleChange} />
                    </FormGroup>
						<div className="errorMsg">{this.state.errors.property_latitude}</div>
                  </Col>
				   <Col md="4">
                    <FormGroup>
                      <Label htmlFor="landmark">Longitude</Label>
                      <Input type="text" id="landmark" placeholder="Enter Longitude" maxlength={30} name="property_longitude" value={this.state.fields.property_longitude} onChange={this.handleChange}   />
                    </FormGroup>
						<div className="errorMsg">{this.state.errors.property_longitude}</div>
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

export default PropertyLocationComponent;