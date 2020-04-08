import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {  Button,Badge, Card, CardBody, CardHeader, CardFooter, Col,Collapse, DropdownItem,DropdownMenu,DropdownToggle,Fade,Form,FormGroup,FormText,FormFeedback,Input,InputGroup,
  InputGroupAddon,InputGroupButtonDropdown,InputGroupText,Label,Row, } from 'reactstrap';
import {toastr} from 'react-redux-toastr';

import PlacesAutocomplete, { geocodeByAddress,getLatLng, } from 'react-places-autocomplete';

import axios from 'axios';
const API_URL = process.env.REACT_APP_API_URL;
const google = window.google;
class EditIndividualUser extends Component {
 constructor(props) {
    super(props);
		this.state = { fields: {}, errors: {}, stateoption:[], cityoption:[],stateandcityoption:[],user_area:'',loadingp: false, suggestions: [],vaild_mobileno:'',vaild_emailid:'',user_id:'',userdetail_id:'' }
			this.mobileerror = React.createRef();
			this.handleChange = this.handleChange.bind(this);
			this.handleSubmit = this.handleSubmit.bind(this);
			this.handleSelect = this.handleSelect.bind(this);
  }


componentDidMount() {
	let user_id = this.props.match.params.user_id;	
		 let $this  = this;
		 let fields = this.state.fields;
// get city and state	
	axios.get(API_URL+'/api/admin/getstate_and_city').then(function(response){
				 if(response.data.Statuscode==200) {
						let resData = response.data.Data;
						// console.log(resData)
						 fields['user_city'] = 1;
						 fields['user_state'] = 1;
						 $this.setState({ stateandcityoption: resData });
						 $this.setState({ fields });
				}
		}).catch(function(error){  console.log(error); });   
	
	
		 let PostData = { user_id: user_id };
		axios.post(API_URL+'/api/admin/get_userdetailbyid',PostData).then(function(response){
				 if(response.data.Statuscode==200) {
						let resData = response.data.Data[0];
						fields["user_name"] = resData.user_fullname;
						fields["user_emailid"] = resData.user_emailid;
						fields["user_mobileno"] = resData.user_mobileno;
						fields["user_alt_mobileno"] = resData.user_alternumber;
						// fields["user_area"] = resData.localities;
						fields["user_address"] = resData.address;
						fields["user_landmark"] = resData.land_mark;
						fields["user_pincode"] = resData.pincode;
						fields["user_latitude"] = resData.latitude;
						fields["user_longitude"] = resData.longitude;
						$this.setState({  user_area: resData.localities,user_id:resData.user_id,userdetail_id:resData.userdetail_id });
						$this.setState({ fields });		
				 }
		}).catch(function(error){  console.log(error); });  
	
	
	}
	
	
 handleChange(e) {
		let $this = this;
		let fields = this.state.fields;
		let user_id = this.props.match.params.user_id;	
		fields[e.target.name] = e.target.value;
		
		if(fields["user_mobileno"]) {
			const postdata = { user_mobileno: e.target.value,user_id:user_id };
				axios.post(API_URL+'/api/admin/editcheck_mobileno', postdata).then(function(response){
					if(response.data.Statuscode==102) {  $this.setState({ vaild_mobileno:1 }); }else { $this.setState({ vaild_mobileno:'' }); }
				}).catch(function(error){  console.log(error); });		
		}
		
		
		if(fields["user_emailid"]) {
			const postdata = { user_emailid: e.target.value,user_id:user_id };
				axios.post(API_URL+'/api/admin/editcheck_emailid', postdata).then(function(response){
					if(response.data.Statuscode==102) {  $this.setState({ vaild_emailid:1 }); }else { $this.setState({ vaild_emailid:'' }); }
				}).catch(function(error){  console.log(error); });		
		}
		
		
		
       this.setState({ fields });
	   
	
}
 handleSubmit(e) {
      e.preventDefault();
      if (this.validateForm()) {
          let fields = {};
         // fields["user_name"] = "";
        // fields["user_password"] = "";
        //  this.setState({fields:fields});
        // alert("Form submitted");
		    const PostData = {
			user_name: this.state.fields.user_name,
			user_emailid: this.state.fields.user_emailid,
			user_mobileno: this.state.fields.user_mobileno,
			user_alt_mobileno: this.state.fields.user_alt_mobileno,
			user_area: this.state.user_area,
			user_address: this.state.fields.user_address,
			user_city: this.state.fields.user_city,
			user_state: this.state.fields.user_state,
			user_landmark: this.state.fields.user_landmark,
			user_pincode: this.state.fields.user_pincode,
			user_longitude: this.state.fields.user_longitude,
			user_latitude: this.state.fields.user_latitude,
			user_id: this.state.user_id,
			userdetail_id: this.state.userdetail_id,
		};
			const { history } = this.props;
		 axios.post(API_URL+'/api/admin/updateuser', PostData).then(function(response){
				 if(response.data.Statuscode==200) {
						    toastr.success('User', response.data.Message);
							history.push('/ez-admin/individual-users');
					} else {
						toastr.error('Login', response.data.Message);
				    }
				 
				// console.log(response);
      })
     .catch(function(error){  console.log(error); });	 
      

	  
	  
	  }

    }


validateForm() {

      let fields = this.state.fields;
      let user_area = this.state.user_area;
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
          errors["user_emailid"] = "Please enter valid email-ID.";
        }
      }
// user_mobileno	  
	if (!fields["user_mobileno"]) {
        formIsValid = false;
        errors["user_mobileno"] = "Please enter your mobile no.";
      }

      if (typeof fields["user_mobileno"] !== "undefined") {
        if (!fields["user_mobileno"].match(/^[0-9]{10}$/)) {
          formIsValid = false;
          errors["user_mobileno"] = "Please enter valid mobile no.";
        }
      }
	  if(this.state.vaild_mobileno==1) {
		  formIsValid = false;
          errors["user_mobileno"] = "This mobile no. already exists."; 
		  
	  }
	  if(this.state.vaild_emailid==1) {
		  formIsValid = false;
          errors["user_emailid"] = "This EmailId. already exists."; 
		  
	  }
 // user_alt_mobileno
 if (!fields["user_alt_mobileno"]) {
        formIsValid = false;
        errors["user_alt_mobileno"] = "Please enter your alt mobile no.";
      }

      if (typeof fields["user_alt_mobileno"] !== "undefined") {
        if (!fields["user_alt_mobileno"].match(/^[0-9]{10}$/)) {
          formIsValid = false;
          errors["user_alt_mobileno"] = "Please enter valid alt mobile no.";
        }
      }
	// user_area
	if (!user_area) {
        formIsValid = false;
        errors["user_area"] = "Please enter your area.";
      }  
	// user_address
	  if (!fields["user_address"]) {
        formIsValid = false;
        errors["user_address"] = "Please enter your adrress.";
      }  
  // user_city
  console.log(fields["user_city"]);
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
          errors["user_pincode"] = "Please enter valid alt pincode ";
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
	  let $this = this;
	  geocodeByAddress(user_area).then(function(results){
			results[0].address_components.map(function(e) { 
					var type = e.types;
					if(type.indexOf('sublocality_level_1') !== -1){
						 console.log(e);
						 
						 $this.setState({  user_area: e.short_name });
					} 
			})
		}
	  ).catch(error => console.error('Error', error));
   
  };
  
  render() {

 const searchOptions = { location: new google.maps.LatLng(13.067439, 80.237617), radius: 1000, componentRestrictions: { country: ['in'] }, types: ['geocode']}

    return (
	
      <div className="animated fadeIn form-pgs">
	  <Row>
          <Col xs="12" sm="12">
            <Card>
			<Form method="post"  name="UserForm"  onSubmit={this.handleSubmit}>
              <CardHeader>
                <strong>Add Individual User</strong>
               
              </CardHeader>
              <CardBody >
			  
                <Row>
					
				  
				  <Col md="6" xl="4">
				  
					
                    <FormGroup>
                      <Label htmlFor="name">User Name <span>*</span></Label>
                      <Input type="text" id="name" placeholder="Enter your name" maxlength={30} name="user_name" value={this.state.fields.user_name} onChange={this.handleChange}  />
                    </FormGroup>
					<div className="errorMsg">{this.state.errors.user_name}</div>
                  </Col>
				  <Col md="6" xl="4">
                    <FormGroup>
                      <Label htmlFor="mail">User Email <span>*</span></Label>
                      <Input type="text" id="mail" placeholder="Enter your mail id" maxlength={30} name="user_emailid" value={this.state.fields.user_emailid} onChange={this.handleChange}  />
					  <Input type="hidden"  id="vaild_emailid" placeholder="Enter mobile no" maxlength={10} name="vaild_emailid" value={this.state.vaild_emailid}  />
                    </FormGroup>
						<div className="errorMsg">{this.state.errors.user_emailid}</div>	
                  </Col>
                </Row>
                <Row>
				  <Col md="6" xl="4">
                    <FormGroup>
                      <Label htmlFor="mobile">Mobile No. <span>*</span></Label>
                      <Input type="text"  id="mobile" placeholder="Enter mobile no" maxlength={10} name="user_mobileno" value={this.state.fields.user_mobileno} onChange={this.handleChange}  />
					  <Input type="hidden"  id="vaild_mobileno" placeholder="Enter mobile no" maxlength={10} name="vaild_mobileno" value={this.state.vaild_mobileno}  />
                    </FormGroup>
						<div  className="errorMsg">{this.state.errors.user_mobileno}</div>	
                  </Col>
				  <Col md="6" xl="4">
                    <FormGroup>
                      <Label htmlFor="alternate-mobile">Alternate Mobile No. <span>*</span></Label>
                      <Input type="text" id="alternate-mobile" placeholder="Enter alternate mobile no" maxlength={10} name="user_alt_mobileno" value={this.state.fields.user_alt_mobileno} onChange={this.handleChange}  />
					   
                    </FormGroup>
						<div className="errorMsg">{this.state.errors.user_alt_mobileno}</div>
						
                  </Col>
                </Row>
				 <Row>
				  <Col md="6" xl="4">
						<FormGroup>
                      <Label htmlFor="state">State <span>*</span></Label>
                      <Input type="select"  id="state" name="user_state"value={this.state.fields.user_state} onChange={this.handleChange}>
                         { this.state.stateandcityoption.map((i) => <option selected key={i.state_id} value={i.state_id}>{i.state_name}</option>) }
                      </Input>
                    </FormGroup>
						<div className="errorMsg">{this.state.errors.user_state}</div>
                  </Col>
				  <Col md="6" xl="4">
				   <FormGroup>
                      <Label htmlFor="city">City <span>*</span></Label>
                      <Input type="select" id="city"  name="user_city" value={this.state.fields.user_city} onChange={this.handleChange}>
							
                         { this.state.stateandcityoption.map((i) => <option defaultValue={{ label:i.city_name , value: 1 }} key={i.city_id} value={i.city_id}>{i.city_name}</option>) }
                      </Input>
                    </FormGroup>
						<div className="errorMsg">{this.state.errors.user_city}</div>
                    
                  </Col>
                </Row>
                <Row>
					<Col md="6" xl="4">
					<FormGroup>
						<Label htmlFor="area">Area <span>*</span></Label>
						<PlacesAutocomplete className="form-control"
							value={this.state.user_area}
							onChange={this.handleChangeArrea}
							onSelect={this.handleSelect} 
							 searchOptions={searchOptions}
							shouldFetchSuggestions={this.state.user_area.length > 1}
							 
							>
							{({ getInputProps, suggestions, getSuggestionItemProps, loadingp }) => (
								
										  <div>
											<Input 
											  {...getInputProps({
												placeholder: 'Search Places ...',
												className: 'location-search-input',
												name : 'user_area', 
												
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
								<div className="errorMsg">{this.state.errors.user_area}</div>
							</FormGroup>
                   
                  </Col>
				<Col md="6" xl="4">
                    <FormGroup>
                      <Label htmlFor="street">Address <span>*</span></Label>
                      <Input type="text" id="street" placeholder="Enter your address" maxlength={50} name="user_address" value={this.state.fields.user_address} onChange={this.handleChange}  />
                    </FormGroup>
						<div className="errorMsg">{this.state.errors.user_address}</div>
                  </Col>
                </Row>
               
                <Row>
				  <Col md="6" xl="4">
                    <FormGroup>
                      <Label htmlFor="landmark">Landmark <span>*</span></Label>
                      <Input type="text" id="landmark" placeholder="Enter Landmark" maxlength={30} name="user_landmark" value={this.state.fields.user_landmark} onChange={this.handleChange}  />
                    </FormGroup>
						<div className="errorMsg">{this.state.errors.user_landmark}</div>
                  </Col>
				  <Col md="6" xl="4">
                    <FormGroup>
                      <Label htmlFor="pincode">Pincode <span>*</span></Label>
                      <Input type="text" id="pincode" placeholder="Enter Pincode" maxlength={8} name="user_pincode" value={this.state.fields.user_pincode} onChange={this.handleChange}  />
                    </FormGroup>
						<div className="errorMsg">{this.state.errors.user_pincode}</div>
                  </Col>
                </Row>
                <Row>
          <Col md="4">
                    <FormGroup>
                      <Label htmlFor="latitude">Latitude </Label>
                      <Input type="text" id="latitude" placeholder="Enter latitude" maxlength={30} name="user_latitude" value={this.state.fields.user_latitude} onChange={this.handleChange}  />
                    </FormGroup>
							<div className="errorMsg">{this.state.errors.user_latitude}</div>
                  </Col>
				<Col md="4">
                    <FormGroup>
                      <Label htmlFor="longitude">Longitude </Label>
                      <Input type="text" id="longitude" placeholder="Enter longitude" maxlength={30} name="user_longitude" value={this.state.fields.user_longitude} onChange={this.handleChange}   />
					</FormGroup>
						<div className="errorMsg">{this.state.errors.user_latitude}</div>
                  </Col>
					<Col md="4">
						<a target="_blank" href="https://www.latlong.net/convert-address-to-lat-long.html" >Get lat & Long </a>
					</Col>
				
				</Row>
				
              </CardBody>			  
              <CardFooter>
                <Button outline type="submit" size="sm" color="success">Update</Button>
                <Link to="/ez-admin/individual-users"><Button outline type="reset" size="sm" color="danger">Back</Button></Link>
              </CardFooter>
			  </Form>
            </Card>
          </Col>
		</Row>
		
       
      </div>
    )
  }
}

export default EditIndividualUser;
