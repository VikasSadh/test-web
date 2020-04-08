import React, { Component } from "react";
import { Link,Redirect } from 'react-router-dom';
import ReactDOM from "react-dom";
import ReactWizard from "react-bootstrap-wizard";
import { Form,Container, Row, Col,Card ,CardHeader,CardBody, FormGroup, Label,Input,Button,CardFooter} from "reactstrap";
import { AppSwitch } from '@coreui/react'
import Select from 'react-select';
import PlacesAutocomplete, { geocodeByAddress,getLatLng, } from 'react-places-autocomplete';
import {toastr} from 'react-redux-toastr';

import { basicinformation_form_vaild } from '../../actions/rentalproperty_basic_action';
import AddIndividualUserModal from "./RentalComponent/AddIndividualUserModal";
import EditIndividualUserModal from "./RentalComponent/EditIndividualUserModal";
import ViewIndividualUser from "./RentalComponent/ViewIndividualUser";

import axios from 'axios';
const API_URL = process.env.REACT_APP_API_URL;

const google = window.google;
const toastrSuccessOptions = { timeOut: 3000, icon: (<i className="far fa-smile"></i>), className: 'front-toastr front-toastr-success',  position: 'top-center',autoClose: false,transitionIn: 'bounceIn',transitionOut: 'bounceOut',showCloseButton: true, closeOnToastrClick: true }
class AddRentalPropertyNew extends Component {
  constructor(props) {
    super(props);

this.state = { user_area:'',fields: {}, errors: {},UserOption:[],BusinessOption:[],FaceSideoption:[],PropertytypeOption:[],AlloptionData:'',Sharetypeoption:[],PropertyAgeoption:[],AreaTypeoption:[],RestroomsTypeoption:[],Familyoption:[],Petoption:[],Foodoption:[],NoofBalconyoption:[],Parkingoption:[],NoofFlooroption:[],Availabilityoption:[],LocatedAtoption:[],isModalOpen: false,isEditModalOpen: false,isViewModalOpen:false,FurnisingTypeoption:[],FurnisingField:[],fields:{dynamic_quantity: {},dynamic_furnished:{},add_rooms:[],dynamic_attributes_property:{}}, AttributeData:[],redirect: false,

};
			this.handleChange = this.handleChange.bind(this);
			this.handleSubmit = this.handleSubmit.bind(this); 
			this.reloaddata = this.reloaddata.bind(this);
		// Add user Popup Model
		  this.toggle = this.toggle.bind(this);
		  this.toggleclose = this.toggleclose.bind(this);
		  this.togglesave = this.togglesave.bind(this);
		// Edit User Popup Model
				this.toggleedit = this.toggleedit.bind(this);
		// View User Popup Model
				this.toggleview = this.toggleview.bind(this);
		  
		  
  
  }
//Add User   
toggle() {
		this.setState({ isModalOpen: !this.state.isModalOpen, fade: !this.state.fade  });
	}
 toggleclose() {
		this.setState({  isModalOpen: !this.state.isModalOpen, fade: !this.state.fade });
	}
togglesave() {
		 this.reloaddata();
		this.setState({  isModalOpen: !this.state.isModalOpen, fade: !this.state.fade });
	}
// Edit User
toggleedit() {
		this.setState({ isEditModalOpen: !this.state.isEditModalOpen, fade: !this.state.fade  });
	}
//View User
toggleview() {
		this.setState({ isViewModalOpen: !this.state.isViewModalOpen, fade: !this.state.fade  });
	}



	
reloaddata() {
	let $this  = this;
	let uoption = [];
	let fields = this.state.fields;
	axios.get(API_URL+'/api/admin/get_user_listbyactive').then(function(response){
				 if(response.data.Statuscode==200) {
						let resData = response.data.Data;
						resData.map((item) => uoption.push({value: item.user_id , label: item.user_fullname+' ('+item.user_mobileno+')' }) )
						let uname = uoption.slice(-1);
						console.log(uname[0].value);
						// fields['user_name'] = uoption.slice(-1)
						fields['user_name'] = uname[0]
						$this.setState({ UserOption: uoption,fields });
						
			} 
	})
}	
	
componentWillMount() {
	let $this  = this;
	let fields = this.state.fields;
	let uoption = [],boption=[],foption=[],ftoption=[];
	// Get Attributes data
const PostData = { servicetype_id:'2',attribute_tab_by:'1' };
		axios.post(API_URL+'/api/admin/getattributesdata', PostData).then(function(response){
				 if(response.data.Statuscode==200) {
						let resData = response.data.Data;
						console.log(resData)
						$this.setState({ AttributeData: resData });
						
			} 
	})
// Get user Data	
	axios.get(API_URL+'/api/admin/get_user_listbyactive').then(function(response){
				 if(response.data.Statuscode==200) {
						let resData = response.data.Data;
						resData.map((item) => uoption.push({value: item.user_id , label: item.user_fullname+' ('+item.user_mobileno+')' }) )
						$this.setState({ UserOption: uoption });
			} 
	})
// Get all Setting Data select box option data
	axios.get(API_URL+'/api/admin/getallsettingdata').then(function(response){
			if(response.data.Statuscode==200) {
						let resData = response.data;
						resData.businesstypeData.map((item) => boption.push({value: item.business_type_id , label: item.business_name }) );
						resData.getfacingsideData.map((item) => foption.push({value: item.facing_id , label: item.facting_name }) );
						resData.furnisingtypeoptiondata.map((item) => ftoption.push({value: item.furnishing_type_id , label: item.furnishing_name }) );
						resData.propertyoptionData.map(function(item) {
								if(item.setting_option_name=='bhk_type') { $this.setState({ Sharetypeoption: JSON.parse(item.setting_option_value)}); 	}
								else if(item.setting_option_name=='property_age') { $this.setState({ PropertyAgeoption: JSON.parse(item.setting_option_value)});  }
								else if(item.setting_option_name=='area_type') { $this.setState({ AreaTypeoption: JSON.parse(item.setting_option_value)});  }
								else if(item.setting_option_name=='restrooms_type') { $this.setState({ RestroomsTypeoption: JSON.parse(item.setting_option_value)});  }
								else if(item.setting_option_name=='food') { $this.setState({ Foodoption: JSON.parse(item.setting_option_value)});  }
								else if(item.setting_option_name=='family') { $this.setState({ Familyoption: JSON.parse(item.setting_option_value)});  }
								else if(item.setting_option_name=='pet') { $this.setState({ Petoption: JSON.parse(item.setting_option_value)});  }
								else if(item.setting_option_name=='no_of_balcony') { $this.setState({ NoofBalconyoption: JSON.parse(item.setting_option_value)});  }
								else if(item.setting_option_name=='parking') { $this.setState({ Parkingoption: JSON.parse(item.setting_option_value)});  }
								else if(item.setting_option_name=='no_of_floors') { $this.setState({ NoofFlooroption: JSON.parse(item.setting_option_value)});  }
								else if(item.setting_option_name=='availability') { $this.setState({ Availabilityoption: JSON.parse(item.setting_option_value)});  }
						});
					$this.setState({ BusinessOption: boption,AlloptionData:resData,FaceSideoption:foption,FurnisingTypeoption:ftoption });
						
			} 
	})
	
}  
  
handleSubmit(e) {
	let $this = this;
      e.preventDefault();
      if (this.validateForm()) {
          console.log("test");
          console.log(this.state.fields.user_name);
         const PostData = {
			user_id : this.state.fields.user_name.value, 
			businesstype_name: this.state.fields.businesstype_name.value,
			propertytype_name: this.state.fields.propertytype_name.value,
			servicetype_name: '2',
			bhktype_name: this.state.fields.bhktype_name.value,
			user_area: this.state.user_area,
			property_price: this.state.fields.property_price,
		};
		let fields = this.state.fields;
		console.log("test");
		console.log(PostData);
		 axios.post(API_URL+'/api/admin/adminpostproperty', PostData).then(function(response){
				 if(response.data.Statuscode==200) {
								toastr.success('Post Property', response.data.Message, toastrSuccessOptions);
							 $this.setState({ redirect: true,fields });
					} else { toastr.error('Post Property', response.data.Message); }
				 // window.location.reload();
				
      }).catch(function(error){  console.log(error); });	
		
		
	 }
}
  
  
  handleChange(e,field_info,id,keyname) {
	
	  let poption=[],furnfielddata=[],locatedatdata=[{value: 'Ground Floor' , label: 'Ground Floor' }];
		let $this = this;
		let fields = this.state.fields;
		
		let all_option_data = this.state.AlloptionData;
		if(field_info==undefined) {
			
			 if(e.target.type=='checkbox') {
					
			 } else { fields[e.target.name] = e.target.value; }
			
		} else {
			
			// handelchange business type
			if(field_info['name']=='businesstype_name') {
				let business_type_value = e.value;
				all_option_data.propertytypeData.filter(item=>item.business_type_id==business_type_value).map((i) => poption.push({value: i.property_type_id , label: i.property_type_name }) )
				this.setState({ PropertytypeOption:poption });
			}
			
			fields[field_info.name] = e; 
				
		}
		 this.setState({ fields });
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
   /* geocodeByAddress(user_area)
      .then(results => getLatLng(results[0]))
      .then(latLng => console.log('Success', latLng))
      .catch(error => console.error('Error', error)); */
  };
 

validateForm() {
	let fields = this.state.fields;
	let formIsValid = true;
	let user_area = this.state.user_area;
	let errors = {};
	
	// user_area
		if(!fields["user_name"]) {
			formIsValid = false;
			errors["user_name"] = "This Field is required";
		}
	// user_area
	if (!user_area) {
        formIsValid = false;
        errors["user_area"] = "This Field is required";
      } 	
	  
	if (!fields["businesstype_name"]) {
	formIsValid = false;
	errors["businesstype_name"] = "This Field is required";
}
	if (!fields["propertytype_name"]) {
	formIsValid = false;
	errors["propertytype_name"] = "This Field is required";
}
	/* if (!fields["servicetype_name"]) {
	formIsValid = false;
	errors["servicetype_name"] = "This Field is required";
	} */
	
	if (!fields["bhktype_name"]) {
	formIsValid = false;
	errors["bhktype_name"] = "This Field is required";
}


if (!fields["property_price"]) {
        formIsValid = false;
        errors["property_price"] = "This Field is required";
      }  
   if (typeof fields["property_price"] !== "undefined") {
        if (!fields["property_price"].match(/^[0-9]{4,5}$/)) {
          formIsValid = false;
          errors["property_price"] = "Please enter valid no.";
        }
      }
	  console.log(errors)
	this.setState({ errors: errors });
	 return formIsValid;
    // return true;
	
  } 
  render() {
	let $this = this;
	const { redirect } = this.state;
	if (redirect) { return <Redirect to='/ez-admin/rent-property/unverified-list'/>; }
	 const searchOptions = { location: new google.maps.LatLng(13.067439, 80.237617), radius: 1000, componentRestrictions: { country: ['in'] }, types: ['geocode']}
    return ( 
			<div className="">
			 <AddIndividualUserModal isOpen={this.state.isModalOpen} toggle={this.state.isModalOpen} onclicktoggle={this.toggleclose} AddUserSaveToggle={this.togglesave} />
				  
		<EditIndividualUserModal isOpen={this.state.isEditModalOpen} toggle={this.state.isEditModalOpen} onclicktoggle={this.toggleedit} AddUserSaveToggle={this.toggleedit} UserId={ this.state.fields.user_name ? this.state.fields.user_name.value : null } /> 
		<ViewIndividualUser isOpen={this.state.isViewModalOpen} toggle={this.state.isViewModalOpen} onclicktoggle={this.toggleview} UserId={ this.state.fields.user_name ? this.state.fields.user_name.value : null } />
		
		<Row className="property-wizards">
			<Col xs="12" sm="12">
           <Card>
		   <Form method="post"  name="UserForm"  onSubmit={this.handleSubmit}>
		    <CardHeader>  <strong>Add Property</strong> </CardHeader>
			 <CardBody >		
                <Row>
				  <Col md="4">
					<FormGroup>

                      <Label >User Name <span>*</span></Label>
					  <Select options={this.state.UserOption} name="user_name" value={this.state.fields.user_name} onChange={this.handleChange} />
					  <a className="option-btns"  onClick={() => this.toggle()}><i className="fa fa-plus"></i></a>
						  { this.state.fields.user_name ?  
								<a className="option-btns"  onClick={() => this.toggleedit()}><i className="fa fa-edit"></i></a>		
					 	  : null }
						  { this.state.fields.user_name ?  
								<a className="option-btns"  onClick={() => this.toggleview()}><i className="fa fa-eye"></i></a>		
					 	  : null }
						  
					</FormGroup>
					<div className="errorMsg">{this.state.errors.user_name}</div>
                    
                  </Col>
				  <Col md="4">
						<FormGroup>
							<Label>Business Type <span>*</span></Label>
							 <Select options={this.state.BusinessOption}  name="businesstype_name" value={this.state.fields.businesstype_name} onChange={this.handleChange}/> 
						</FormGroup>
						<div className="errorMsg">{this.state.errors.businesstype_name}</div>
					</Col>
				<Col md="4">
					<FormGroup>
						<Label >Property Type <span>*</span> </Label>
							<Select options={this.state.PropertytypeOption} name="propertytype_name" value={this.state.fields.propertytype_name} onChange={this.handleChange} /> 
						</FormGroup>
						<div className="errorMsg">{this.state.errors.propertytype_name}</div>
					</Col>
				</Row>
               
			   <Row>
				<Col md="4">
					<FormGroup>
						<Label>BHK Type <span>*</span></Label>
							<Select options={this.state.Sharetypeoption} name="bhktype_name" value={this.state.fields.bhktype_name} onChange={this.handleChange} />  
                    </FormGroup>
					<div className="errorMsg">{this.state.errors.bhktype_name}</div>
				</Col>
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
												placeholder: 'Search Area ...',
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
                      <Label htmlFor="name">Rent Price <span>*</span></Label>
                      <Input type="text" id="name" placeholder="Enter Rent Price" maxlength={30} name="property_price" value={this.state.fields.property_price} onChange={this.handleChange}  />
                    </FormGroup>
					<div className="errorMsg">{this.state.errors.property_price}</div>
                  </Col>
				</Row>
              
			   
			
				 </CardBody>	
					<CardFooter>
						<Button outline type="submit" size="sm" color="success"><i className="fa fa-dot-circle-o"></i> Submit</Button>
						<Link to="/ez-admin/rent-property/unverified-list"><Button outline type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Back</Button></Link>
					</CardFooter>
			  </Form>				 
              </Card>
          </Col>
		</Row>
		
       
      </div>
	
	);
  }
}

export default AddRentalPropertyNew;