import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { Link,Redirect } from 'react-router';
import {toastr} from 'react-redux-toastr';
import Select from 'react-select';
import axios from 'axios';

import PlacesAutocomplete, { geocodeByAddress,getLatLng, } from 'react-places-autocomplete';

const API_URL = process.env.REACT_APP_API_URL;
const google = window.google;
const toastrSuccessOptions = {
	  timeOut: 3000,
	  icon: (<i className="far fa-smile"></i>),
	  className: 'front-toastr front-toastr-success',
	  position: 'top-center',
	  autoClose: false,
	  transitionIn: 'bounceIn',
  	  transitionOut: 'bounceOut',
	  showCloseButton: true,
	  closeOnToastrClick: true
	}
	
class PostByOwner extends Component {
 constructor(props) {
    super(props);
	this.toggleContent = this.toggleContent.bind(this)
    this.state = { showContent: false,fields: {}, errors: {},UserOption:[],BusinessOption:[],ServiceOption:[],FaceSideoption:[],PropertytypeOption:[],AlloptionData:'',Sharetypeoption:[],PropertyAgeoption:[],AreaTypeoption:[],RestroomsTypeoption:[],Familyoption:[],Petoption:[],Foodoption:[],NoofBalconyoption:[],Parkingoption:[],NoofFlooroption:[],Availabilityoption:[],LocatedAtoption:[],isModalOpen: false,isEditModalOpen: false,isViewModalOpen:false,FurnisingTypeoption:[],FurnisingField:[],fields:{dynamic_quantity: {},dynamic_furnished:{},add_rooms:[],dynamic_attributes_property:{}}, AttributeData:[],redirect: false,user_area:'' }	
	
	this.handleChange = this.handleChange.bind(this);
	this.handleSubmit = this.handleSubmit.bind(this);
 
 }
 componentWillMount() {
	let $this  = this;
	let fields = this.state.fields;
	let uoption = [],boption=[],foption=[],ftoption=[],soption=[];
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
						resData.map((item) => uoption.push({value: item.user_id , label: item.user_fullname }) )
						$this.setState({ UserOption: uoption });
			} 
	})
// Get all Setting Data select box option data
	axios.get(API_URL+'/api/admin/getallsettingdata').then(function(response){
			if(response.data.Statuscode==200) {
						let resData = response.data;
						resData.businesstypeData.map((item) => boption.push({value: item.business_type_id , label: item.business_name }) );
						resData.servicetypeData.map((item) => soption.push({value: item.servicetype_id , label: item.service_name }) );
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
					$this.setState({ BusinessOption: boption,ServiceOption:soption,AlloptionData:resData,FaceSideoption:foption,FurnisingTypeoption:ftoption });
						
			} 
	})
	
}  

 handleChange(e,field_info,id,keyname) {
	
	  let poption=[],furnfielddata=[],locatedatdata=[{value: 'Ground Floor' , label: 'Ground Floor' }];
		let $this = this;
		let fields = this.state.fields;
		
		let all_option_data = this.state.AlloptionData;
		if(field_info==undefined) {
			
			 if(e.target.type=='checkbox') {
					if(keyname!='add_rooms')	{	
						let target_value = e.target.checked ? 'Yes' :'No'; 
						// fields[keyname][id] =  target_value;
						let key = 'key_'+id;
						fields[keyname][key] =  target_value;
					} else { 
					
						e.target.checked ?  fields[keyname][id] =  e.target.value :  fields[keyname] = fields[keyname].filter(function(val) { return val!==e.target.value}) ; 
					}
			 } else { fields[e.target.name] = e.target.value; }
			
		} else {
			
			// handelchange business type
			if(field_info['name']=='businesstype_name') {
				let business_type_value = e.value;
				all_option_data.propertytypeData.filter(item=>item.business_type_id==business_type_value).map((i) => poption.push({value: i.property_type_id , label: i.property_type_name }) )
				this.setState({ PropertytypeOption:poption });
			}
			// handelchange furnising type		
			else if(field_info['name']=='furnisingtype_name') {
					let furnisingtype_value = e.value;
					if(furnisingtype_value==3) {
						all_option_data.furnisingoptiondata.filter(item=>item.furnishing_type_id==furnisingtype_value).map((i) => furnfielddata.push({value: i.furnishing_id , label: i.furnishing_name,type:i.type }) )
					} else if(furnisingtype_value==2) {
						all_option_data.furnisingoptiondata.filter(item=>item.furnishing_type_id>=furnisingtype_value).map((i) => furnfielddata.push({value: i.furnishing_id , label: i.furnishing_name,type:i.type }) )
					} else if(furnisingtype_value==1) {
						all_option_data.furnisingoptiondata.map((i) => furnfielddata.push({value: i.furnishing_id , label: i.furnishing_name,type:i.type }) )
					}
					
				this.setState({ FurnisingField:furnfielddata });
			}else if(field_info['name']=='no_of_floors') {
				let no_of_floors_value = e.value;
				for (let i=0; i <= parseInt(no_of_floors_value); i++) {
						let val = i+1;
						locatedatdata.push({value: val , label: val+' Floor' });
				}
					this.setState({ LocatedAtoption:locatedatdata });
			}
		
			fields[field_info.name] = e; 
				
		}
		 this.setState({ fields });
}


handleSubmit(e) {
	let $this = this;
      e.preventDefault();
      if (this.validateForm()) {
          
         const PostData = {
			owner_name : this.state.fields.owner_name,
			owner_mobileno : this.state.fields.owner_mobileno,
			businesstype_name: this.state.fields.businesstype_name.value,
			propertytype_name: this.state.fields.propertytype_name.value,
			servicetype_name: this.state.fields.servicetype_name.value,
			bhktype_name: this.state.fields.bhktype_name.value,
			user_area: this.state.user_area,
			property_price: this.state.fields.property_price,
		};
		let fields = this.state.fields;
		fields["owner_name"] ='';
		fields["owner_mobileno"] ='';
		fields["businesstype_name"] ='';
		fields["propertytype_name"] ='';
		fields["servicetype_name"] ='';
		fields["bhktype_name"] ='';
		fields["user_area"] ='';
		fields["property_price"] ='';
		console.log(PostData);
          // this.setState({fields:fields});
        //  alert("Form submitted");
		// const { history } = this.props;
		axios.post(API_URL+'/api/admin/postproperty', PostData).then(function(response){
				 if(response.data.Statuscode==200) {
								toastr.success('Post Property', response.data.Message, toastrSuccessOptions);
							 $this.setState({ redirect: true,fields });
					} else { toastr.error('Post Property', response.data.Message); }
				 // window.location.reload();
				
      }).catch(function(error){  console.log(error); });	
	 
		
	 }
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
		}).catch(error => console.error('Error', error));

 };
  
 validateForm() {
	let fields = this.state.fields;
	let formIsValid = true;
	let user_area = this.state.user_area;
	let errors = {};
	// user_area
	if (!user_area) {
        formIsValid = false;
        errors["user_area"] = "This Field is required";
      } 
	// owner_name
	if (!fields["owner_name"]) {
			formIsValid = false;
			errors["owner_name"] = "This Field is required";
    }
	 // user_mobileno	  
	if (!fields["owner_mobileno"]) {
        formIsValid = false;
        errors["owner_mobileno"] = "This Field is required";
      }

      if (typeof fields["owner_mobileno"] !== "undefined") {
        if (!fields["owner_mobileno"].match(/^[0-9]{10}$/)) {
          formIsValid = false;
          errors["owner_mobileno"] = "Please enter valid mobile no.";
        }
      }
	  
	if (!fields["businesstype_name"]) {
		formIsValid = false;
		errors["businesstype_name"] = "This Field is required";
	}
	if (!fields["propertytype_name"]) {
		formIsValid = false;
		errors["propertytype_name"] = "This Field is required";
}
	if (!fields["servicetype_name"]) {
		formIsValid = false;
		errors["servicetype_name"] = "This Field is required";
} 
	if (!fields["bhktype_name"]) {
		formIsValid = false;
		errors["bhktype_name"] = "This Field is required";
}

/* if (!fields["user_area"]) {
	formIsValid = false;
	errors["user_area"] = "This Field is required";
} */

if (!fields["property_price"]) {
        formIsValid = false;
        errors["property_price"] = "This Field is required";
      }  
   if (typeof fields["property_price"] !== "undefined") {
        if (!fields["property_price"].match(/^[0-9]{4,7}$/)) {
          formIsValid = false;
          errors["property_price"] = "Please enter valid no.";
        }
      }
	this.setState({ errors: errors });
	 return formIsValid;
    // return true;
	
  }
  
 toggleContent(event) {
  // event.preventDefault()
  const {showContent} = this.state
		this.setState({ showContent: !this.state.showContent })
 }
 
render() {
	 const searchOptions = { location: new google.maps.LatLng(13.067439, 80.237617), radius: 1000, componentRestrictions: { country: ['in'] }, types: ['geocode']}

	let $this = this;
	const { redirect } = this.state;
	if (redirect) { return <Redirect to='/'/>; }
	const {showContent} = this.state
	return (
		<div className="owner postproperty-name">
            <form onSubmit={this.handleSubmit}>
                <div className="postproperty-row">   
             
				<div className="form-group">
            <div className="row">
              <div className="col-md-6 nr-padding">
                <div className="form-fields">
                  <input type="text" placeholder="Owner Name" name="owner_name" value={this.state.fields.owner_name} onChange={this.handleChange} className="form-control" onFocus={(e) => e.target.placeholder = ""} onBlur={(e) => e.target.placeholder = "Owner Name"} />
                </div>
				<div className="errorMsg">{this.state.errors.owner_name}</div>
              </div>
              <div className="col-md-6 nl-padding">
                <div className="form-fields">
                  <input type="text" placeholder="Mobile No." name="owner_mobileno" value={this.state.fields.owner_mobileno} onChange={this.handleChange} className="form-control" onFocus={(e) => e.target.placeholder = ""} onBlur={(e) => e.target.placeholder = "Mobile No."} />
                </div>
				<div className="errorMsg">{this.state.errors.owner_mobileno}</div>
              </div>
            </div>
          </div>   
			 
                  <div className="form-group">
                    <div className="row">
                      <div className="col-md-6 nr-padding">
                        <div className="form-fields">
                          <Select options={this.state.BusinessOption}  name="businesstype_name" value={this.state.fields.businesstype_name} onChange={this.handleChange}/> 
                        </div>
						<div className="errorMsg">{this.state.errors.businesstype_name}</div>
                      </div>
                      <div className="col-md-6 nl-padding">
                        <div className="form-fields">
                           <Select options={this.state.ServiceOption}  name="servicetype_name" value={this.state.fields.servicetype_name} onChange={this.handleChange}/> 
                        </div>
							<div className="errorMsg">{this.state.errors.servicetype_name}</div>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="row">
                      <div className="col-md-6 nr-padding">
                        <div className="form-fields">
                           <Select options={this.state.PropertytypeOption} name="propertytype_name" value={this.state.fields.propertytype_name} onChange={this.handleChange} /> 
                        </div>
							<div className="errorMsg">{this.state.errors.propertytype_name}</div>
                      </div>
                      <div className="col-md-6 nl-padding">
                        <div className="form-fields">
                          <Select options={this.state.Sharetypeoption} name="bhktype_name" value={this.state.fields.bhktype_name} onChange={this.handleChange} /> 
                        </div>
						<div className="errorMsg">{this.state.errors.bhktype_name}</div>
                      </div>
                    </div>
                  </div>
                            
                </div>
               
                <div className="postproperty-row second-row">                
                  <div className="form-group">
                    <div className="row">
                      <div className="col-md-6 nr-padding">
                        <div className="form-fields">
						{ /* <input type="text" placeholder="Area" className="form-control in1" name="user_area" value={this.state.fields.user_area} onChange={this.handleChange} /> */ }
						<PlacesAutocomplete className="form-control"
							value={this.state.user_area}
							onChange={this.handleChangeArrea}
							onSelect={this.handleSelect} 
							 searchOptions={searchOptions}
							shouldFetchSuggestions={this.state.user_area.length > 1}
							 
							>
							{({ getInputProps, suggestions, getSuggestionItemProps, loadingp }) => (
								
										  <div>
											<input 
											  {...getInputProps({
												placeholder: 'Search Area ...',
												className: 'form-control in1',
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
                        </div>
						<div className="errorMsg">{this.state.errors.user_area}</div>
                      </div>
                      <div className="col-md-6 nl-padding">
                        <div className="form-fields">
                          <input type="text" placeholder="₹ Expected Rent"  className="form-control" name="property_price" value={this.state.fields.property_price} onChange={this.handleChange} onFocus={(e) => e.target.placeholder = ""} onBlur={(e) => e.target.placeholder = "₹ Expected Rent"} />
                        </div>
						<div className="errorMsg">{this.state.errors.property_price}</div>
                      </div>
                    </div>
                  </div>             
                  
                  
                  <div className="form-btn text-center">
                    <button className="btn cmn-btn btn2" type="submit">Submit <i className="far fa-arrow-alt-circle-right"></i></button>
                  </div>                
                </div> 
            </form>
		</div>	
	)
  }
}

export default PostByOwner;
