import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {  Button,Badge, Card, CardBody, CardHeader, CardFooter, Col,Collapse, DropdownItem,DropdownMenu,DropdownToggle,Fade,Form,FormGroup,FormText,FormFeedback,Input,InputGroup,
  InputGroupAddon,InputGroupButtonDropdown,InputGroupText,Label,Row, } from 'reactstrap';


import PlacesAutocomplete, { geocodeByAddress,getLatLng, } from 'react-places-autocomplete';

import axios from 'axios';
const API_URL = process.env.REACT_APP_API_URL;

class AddIndividualUser extends Component {
 constructor(props) {
    super(props);
		this.state = { fields: {}, errors: {}, stateoption:[], cityoption:[],stateandcityoption:[],user_area:'',loadingp: false, suggestions: [] }
 
		 this.handleChange = this.handleChange.bind(this);
		 this.handleSubmit = this.handleSubmit.bind(this);
		 this.handleSelect = this.handleSelect.bind(this);
  }


componentDidMount() {
		 let $this  = this;
		axios.get(API_URL+'/api/admin/getstate_and_city').then(function(response){
				 if(response.data.Statuscode==200) {
						let resData = response.data.Data;
						// console.log(resData)
						 $this.setState({ stateandcityoption: resData });
						 // console.log(this.state.stateoption);
				} else {
						
				}
				 
				
      })
     .catch(function(error){  console.log(error); });   
	}
	
	
 handleChange(e) {
	 
       let fields = this.state.fields;
		fields[e.target.name] = e.target.value;
       this.setState({ fields });
	
}
 handleSubmit(e) {
      e.preventDefault();
      if (this.validateForm()) {
          let fields = {};
         // fields["user_name"] = "";
        // fields["user_password"] = "";
        //  this.setState({fields:fields});
         alert("Form submitted");
		 /*   const user = {
			user_name: this.state.fields.user_name,
			password: this.state.fields.user_password
		};
			const { history } = this.props;
		axios.post(API_URL+'/api/admin/adminlogin', user).then(function(response){
				 if(response.data.Statuscode==200) {
						  window.sessionStorage.setItem("admin_session", JSON.stringify(response.data.Data[0]));
					      toastr.success('Login', response.data.Message);
							history.push('/ez-admin/dashboard');
					} else {
						toastr.error('Login', response.data.Message);
				    }
				 
				// console.log(response);
      })
     .catch(function(error){  console.log(error); });	
      
	*/
	  
	  
	  }

    }


validateForm() {

      let fields = this.state.fields;
      let errors = {};
      let formIsValid = true;
// user_name
	if (!fields["user_name"]) {
        formIsValid = false;
        errors["user_name"] = "Please enter your user name.";
      }
// user_emailid	  
 if (!fields["user_emailid"]) {
        formIsValid = false;
        errors["user_emailid"] = "*Please enter your email-ID.";
      }

      if (typeof fields["user_emailid"] !== "undefined") {
        // regular expression for email validation
     var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(fields["user_emailid"])) {
          formIsValid = false;
          errors["user_emailid"] = "*Please enter valid email-ID.";
        }
      }
// user_mobileno	  
	if (!fields["user_mobileno"]) {
        formIsValid = false;
        errors["user_mobileno"] = "*Please enter your mobile no.";
      }

      if (typeof fields["user_mobileno"] !== "undefined") {
        if (!fields["user_mobileno"].match(/^[0-9]{10}$/)) {
          formIsValid = false;
          errors["user_mobileno"] = "*Please enter valid mobile no.";
        }
      }
 // user_alt_mobileno
 if (!fields["user_alt_mobileno"]) {
        formIsValid = false;
        errors["user_alt_mobileno"] = "*Please enter your alt mobile no.";
      }

      if (typeof fields["user_alt_mobileno"] !== "undefined") {
        if (!fields["user_alt_mobileno"].match(/^[0-9]{10}$/)) {
          formIsValid = false;
          errors["user_alt_mobileno"] = "*Please enter valid alt mobile no.";
        }
      }
	// user_area
	if (!fields["user_area"]) {
        formIsValid = false;
        errors["user_area"] = "Please enter your user name.";
      }  
	// user_address
	  if (!fields["user_address"]) {
        formIsValid = false;
        errors["user_address"] = "Please enter your user name.";
      }  
  // user_city
   if (!fields["user_city"]) {
        formIsValid = false;
        errors["user_city"] = "Please select city.";
      } 
	  // user_state
   if (!fields["user_state"]) {
        formIsValid = false;
        errors["user_state"] = "Please select state.";
      }  
	  // user_landmark
   if (!fields["user_landmark"]) {
        formIsValid = false;
        errors["user_landmark"] = "Please enter your lanmark.";
      }   
	  // user_pincode
   if (!fields["user_pincode"]) {
        formIsValid = false;
        errors["user_pincode"] = "Please enter your pincode.";
      }  
   if (typeof fields["user_pincode"] !== "undefined") {
        if (!fields["user_pincode"].match(/^[0-9]{6}$/)) {
          formIsValid = false;
          errors["user_pincode"] = "*Please enter valid alt pincode ";
        }
      }

    this.setState({ errors: errors });
    return formIsValid;


    }

 handleChangeArrea = user_area => {
	 console.log(user_area);
    this.setState({ user_area });
  };
 handleSelect = user_area => {
    geocodeByAddress(user_area)
      .then(results => getLatLng(results[0]))
      .then(latLng => console.log('Success', latLng))
      .catch(error => console.error('Error', error));
  };
  
  render() {


    return (
	
      <div className="animated fadeIn form-pgs">
	  <Row>
          <Col xs="12" sm="12">
            <Card>
			<Form method="post"  name="UserForm"  onSubmit={this.handleSubmit}>
              <CardHeader>
                <strong>Add Individual User</strong>
                { /*<small> Form</small> */}
              </CardHeader>
              <CardBody >
			  
                <Row>
					<Col md="4">
					{ /* <Input type="text" id="area" placeholder="Enter your area" maxlength="30" name="user_area" value={this.state.fields.user_area} onChange={this.handleChange}  />
                    */ }
					
						<PlacesAutocomplete
							value={this.state.user_area}
							onChange={this.handleChangeArrea}
							onSelect={this.handleSelect} 
							
							>
							{({ getInputProps, suggestions, getSuggestionItemProps, loadingp }) => (
										  <div>
											<input
											  {...getInputProps({
												placeholder: 'Search Places ...',
												className: 'location-search-input',
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
							
					</Col>
				  
				  <Col md="4">
				  
					
                    <FormGroup>
                      <Label htmlFor="name">User Name <span>*</span></Label>
                      <Input type="text" id="name" placeholder="Enter your name" maxlength="30" name="user_name" value={this.state.fields.user_name} onChange={this.handleChange}  />
                    </FormGroup>
					<div className="errorMsg">{this.state.errors.user_name}</div>
                  </Col>
				  <Col md="4">
                    <FormGroup>
                      <Label htmlFor="mail">User Email <span>*</span></Label>
                      <Input type="text" id="mail" placeholder="Enter your mail id" maxlength="30" name="user_emailid" value={this.state.fields.user_emailid} onChange={this.handleChange}  />
                    </FormGroup>
						<div className="errorMsg">{this.state.errors.user_emailid}</div>	
                  </Col>
                </Row>
                <Row>
				  <Col md="4">
                    <FormGroup>
                      <Label htmlFor="mobile">Mobile No. <span>*</span></Label>
                      <Input type="text" id="mobile" placeholder="Enter mobile no" maxlength="10" name="user_mobileno" value={this.state.fields.user_mobileno} onChange={this.handleChange}  />
                    </FormGroup>
						<div className="errorMsg">{this.state.errors.user_mobileno}</div>	
                  </Col>
				  <Col md="4">
                    <FormGroup>
                      <Label htmlFor="alternate-mobile">Alternate Mobile No. <span>*</span></Label>
                      <Input type="text" id="alternate-mobile" placeholder="Enter alternate mobile no" maxlength="10" name="user_alt_mobileno" value={this.state.fields.user_alt_mobileno} onChange={this.handleChange}  />
                    </FormGroup>
						<div className="errorMsg">{this.state.errors.user_alt_mobileno}</div>
						
                  </Col>
                </Row>
				 <Row>
				  <Col md="4">
						<FormGroup>
                      <Label htmlFor="state">State <span>*</span></Label>
                      <Input type="select"  id="state" name="user_state"value={this.state.fields.user_state} onChange={this.handleChange}>
                         { this.state.stateandcityoption.map((i) => <option key={i.state_id} value={i.state_id}>{i.state_name}</option>) }
                      </Input>
                    </FormGroup>
						<div className="errorMsg">{this.state.errors.user_state}</div>
                  </Col>
				  <Col md="4">
				   <FormGroup>
                      <Label htmlFor="city">City <span>*</span></Label>
                      <Input type="select" id="city"  name="user_city" value={this.state.fields.user_city} onChange={this.handleChange}>
                         { this.state.stateandcityoption.map((i) => <option key={i.city_id} value={i.city_id}>{i.city_name}</option>) }
                      </Input>
                    </FormGroup>
						<div className="errorMsg">{this.state.errors.user_city}</div>
                    
                  </Col>
                </Row>
                <Row>
					<Col md="4">
                    {/*<FormGroup>
                      <Label htmlFor="area">Area <span>*</span></Label>
                      <Input type="text" id="area" placeholder="Enter your area" maxlength="30" name="user_area" value={this.state.fields.user_area} onChange={this.handleChange}  />
                    </FormGroup>
					<div className="errorMsg">{this.state.errors.user_area}</div>
					*/}
                  </Col>
				<Col md="4">
                    <FormGroup>
                      <Label htmlFor="street">Address <span>*</span></Label>
                      <Input type="text" id="street" placeholder="Enter your address" maxlength="50" name="user_address" value={this.state.fields.user_address} onChange={this.handleChange}  />
                    </FormGroup>
						<div className="errorMsg">{this.state.errors.user_address}</div>
                  </Col>
                </Row>
               
                <Row>
				  <Col md="4">
                    <FormGroup>
                      <Label htmlFor="landmark">Landmark <span>*</span></Label>
                      <Input type="text" id="landmark" placeholder="Enter Landmark" maxlength="30" name="user_landmark" value={this.state.fields.user_landmark} onChange={this.handleChange}  />
                    </FormGroup>
						<div className="errorMsg">{this.state.errors.user_landmark}</div>
                  </Col>
				  <Col md="4">
                    <FormGroup>
                      <Label htmlFor="pincode">Pincode <span>*</span></Label>
                      <Input type="text" id="pincode" placeholder="Enter Pincode" maxlength="8" name="user_pincode" value={this.state.fields.user_pincode} onChange={this.handleChange}  />
                    </FormGroup>
						<div className="errorMsg">{this.state.errors.user_pincode}</div>
                  </Col>
                </Row>
                <Row>
          <Col md="4">
                    <FormGroup>
                      <Label htmlFor="latitude">Latitude </Label>
                      <Input type="text" id="latitude" placeholder="Enter latitude" maxlength="30" name="user_latitude" value={this.state.fields.user_latitude} onChange={this.handleChange}  />
                    </FormGroup>
							<div className="errorMsg">{this.state.errors.user_latitude}</div>
                  </Col>
				<Col md="4">
                    <FormGroup>
                      <Label htmlFor="longitude">Longitude </Label>
                      <Input type="text" id="longitude" placeholder="Enter longitude" maxlength="30" name="user_longitude" value={this.state.fields.user_latitude} onChange={this.handleChange}   />
					</FormGroup>
						<div className="errorMsg">{this.state.errors.user_latitude}</div>
                  </Col>
					<Col md="4">
						<a target="_blank" href="https://www.latlong.net/convert-address-to-lat-long.html" >Get lat & Long </a>
					</Col>
				
				</Row>
				{ /* <Row>
				  <Col md="8">
                    <FormGroup>
                      <Label htmlFor="voice">Voice of Landlord <span>*</span></Label>
                      <Input type="textarea" name="textarea-voice" id="voice" rows="2"  placeholder="Enter Content" />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
				  <Col md="8">
                    <FormGroup>
                      <Label htmlFor="about">About Property <span>*</span></Label>
                      <Input type="textarea" name="textarea-about" id="about" rows="2"  placeholder="Enter Content" />
                    </FormGroup>
                  </Col>
                </Row> */ }
              </CardBody>			  
              <CardFooter>
                <Button outline type="submit" size="sm" color="success"><i className="fa fa-dot-circle-o"></i> Submit</Button>
                <Link to="/ez-admin/individual-users"><Button outline type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Back</Button></Link>
              </CardFooter>
			  </Form>
            </Card>
          </Col>
		</Row>
		
       
      </div>
    )
  }
}

export default AddIndividualUser;
