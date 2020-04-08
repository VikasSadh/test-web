import React, { Component } from "react";
import ReactDOM from "react-dom";
import ReactWizard from "react-bootstrap-wizard";
import { Container, Row, Col,Card ,CardHeader,CardBody, FormGroup, Label,Input,Button,CardFooter} from "reactstrap";
import { AppSwitch } from '@coreui/react'
import Select from 'react-select';



import { basicinformation_form_vaild } from '../../../actions/rentalproperty_basic_action';

import AddIndividualUserModal from "./AddIndividualUserModal";
import EditIndividualUserModal from "./EditIndividualUserModal";
import ViewIndividualUser from "./ViewIndividualUser";

import axios from 'axios';
const API_URL = process.env.REACT_APP_API_URL;



class BasicinformationComponent extends Component {
  constructor(props) {
    super(props);

this.state = { fields: {}, errors: {},UserOption:[],BusinessOption:[],FaceSideoption:[],PropertytypeOption:[],AlloptionData:'',Sharetypeoption:[],PropertyAgeoption:[],AreaTypeoption:[],RestroomsTypeoption:[],Familyoption:[],Petoption:[],Foodoption:[],NoofBalconyoption:[],Parkingoption:[],NoofFlooroption:[],Availabilityoption:[],LocatedAtoption:[],isModalOpen: false,isEditModalOpen: false,isViewModalOpen:false,FurnisingTypeoption:[],FurnisingField:[],fields:{dynamic_quantity: {},dynamic_furnished:{},add_rooms:[],dynamic_attributes_property:{}}, AttributeData:[]

};
				this.handleChange = this.handleChange.bind(this);
	// this.handleSubmit = this.handleSubmit.bind(this); 
				this.reloaddata = this.reloaddata.bind(this);
		// Add user Popup Model
				this.toggle = this.toggle.bind(this);
				this.toggleclose = this.toggleclose.bind(this);
				this.togglesave = this.togglesave.bind(this);
		// Edit User Popup Model
				this.toggleedit = this.toggleedit.bind(this);
		// View User Popup Model
				this.toggleview = this.toggleview.bind(this);
		// this.toggleeditclose = this.toggleclose.bind(this);
		// this.toggleeditsave = this.togglesave.bind(this);
		  
				this.sub = this.sub.bind(this);
				this.add = this.add.bind(this);
		 
		  
		 
		  
		  
  
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


add(index)  {
	let fields = this.state.fields;
	console.log('test');
	console.log(index);
	this.setState(prevState => {
		  console.log(prevState)
		  console.log(index)
		  let key = "key_"+index;
				if(prevState.fields.dynamic_quantity[key] < 9) {
					
						fields['dynamic_quantity'][key]= prevState.fields.dynamic_quantity[key] + 1
					return { fields }
				} else { 
					fields['dynamic_quantity'][key]=  1 ;
					return {fields};

				}
      });
      console.log('add')
  }
  sub(index)  {
	  let fields = this.state.fields;
	  let key = "key_"+index;
		this.setState(prevState => {
      if(prevState.fields.dynamic_quantity[key] > 0) {
			 fields['dynamic_quantity'][key]= prevState.fields.dynamic_quantity[key] - 1
		  	 return { fields }
      } else { fields['dynamic_quantity'][key]=  0 ;
					return {fields}; }
    });
		console.log('sub')
	}
	
reloaddata() {
	let $this  = this;
	let uoption = [];
	let fields = this.state.fields;
	axios.get(API_URL+'/api/admin/get_user_listbyactive').then(function(response){
				 if(response.data.Statuscode==200) {
						let resData = response.data.Data;
						resData.map((item) => uoption.push({value: item.user_id , label: item.user_fullname+' ('+item.user_mobileno+')' }) )
						fields['user_name'] = uoption.slice(-1)
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
	axios.get(API_URL+'/api/admin/getallsettingdata').then(function(response) {
			if(response.data.Statuscode==200) {
						let resData = response.data;
						// console.log(resData);
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
componentDidUpdate(prevProps, prevState) {
	let $this  = this;
	let poption=[],furnfielddata=[],locatedatdata=[{value: 'Ground Floor' , label: 'Ground Floor' }];
	
		if(prevProps.property_data!==this.props.property_data) {
				
				let fields = this.state.fields;
			var  basic_information = this.props.property_data.basic_information;
			var  property_details = this.props.property_data.property_details;
			var  property_attr_detail = this.props.property_data.property_attr_detail;
			var  property_furnshing = this.props.property_data.property_furnshing;
				
				
				fields['user_name'] = basic_information.user_id;
				fields['businesstype_name'] = basic_information.business_type_id;
				fields['propertytype_name'] = basic_information.property_type_id;
				fields['bhktype_name'] = basic_information.bhk_type;
				fields['about_property'] = basic_information.about_property;
				
				fields['property_age'] = property_details.property_age;
				fields['areatype_name'] = property_details.area_type;
				fields['area_total'] = property_details.total_area;
				fields['face_direction'] = property_details.face_direction;
				fields['face_direction'] = property_details.face_direction;
				fields['family'] = property_details.tenant_type;
				fields['no_of_floors'] = property_details.no_of_floors;
				fields['located_at'] = property_details.located_at;
				fields['no_of_restrooms'] = property_details.no_of_restrooms ? property_details.no_of_restrooms.toString()  : '' ;
				fields['restrooms_type'] = property_details.restrooms_type;
				fields['pet'] = property_details.pet_type;
				fields['food'] = property_details.food_type;
				fields['no_of_balcony'] = property_details.no_of_balcony;
				fields['availability'] = property_details.property_availability;
				fields['parking'] = property_details.parking;
				fields['no_of_parking'] = property_details.no_of_parking ? property_details.no_of_parking.toString() : '';
				fields['parking_type'] = property_details.parking_type;
				fields['furnisingtype_name'] = property_details.furnising_type;
				
				if(property_attr_detail.length > 0) {
					property_attr_detail.map(item => { 
						let key = "key_"+item.attribute_id;
						fields['dynamic_attributes_property'][key] = item.attributes_values
					});
				}
				if(property_furnshing.length > 0) {
					property_furnshing.map(item => { 
						
						let furnishing_value='';
						let key = "key_"+item.furnishing_id;
						if(item.type==1) {  fields['dynamic_quantity'][key] = parseInt(item.furnishing_qty); } else {   fields['dynamic_furnished'][key] = item.furnishing_value; }
						
						
					});
				}
				
				if(property_details.property_rooms !='' && property_details.property_rooms!=undefined) {
				var add_roomsArr = property_details.property_rooms.split(','); 
					fields['add_rooms'] = add_roomsArr;
				}
				
			
			// handelchange business type
			
				$this.setState({ fields });
				
				// if(prevState.AlloptionData!=this.state.AlloptionData) {
							if(this.state.fields.businesstype_name) {
								let business_type_value = this.state.fields.businesstype_name;
								
								 this.state.AlloptionData.propertytypeData.filter(item=>item.business_type_id==business_type_value).map((i) => poption.push({value: i.property_type_id , label: i.property_type_name }) )
								$this.setState({ PropertytypeOption:poption }); 
							}
							 if(this.state.fields.furnisingtype_name) {
									let furnisingtype_value = this.state.fields.furnisingtype_name; 
									if(furnisingtype_value==3) {
										this.state.AlloptionData.furnisingoptiondata.filter(item=>item.furnishing_type_id==furnisingtype_value).map((i) => furnfielddata.push({value: i.furnishing_id , label: i.furnishing_name,type:i.type }) )
									} else if(furnisingtype_value==2) {
										this.state.AlloptionData.furnisingoptiondata.filter(item=>item.furnishing_type_id>=furnisingtype_value).map((i) => furnfielddata.push({value: i.furnishing_id , label: i.furnishing_name,type:i.type }) )
									} else if(furnisingtype_value==1) {
										this.state.AlloptionData.furnisingoptiondata.map((i) => furnfielddata.push({value: i.furnishing_id , label: i.furnishing_name,type:i.type }) )
									}
									
								$this.setState({ FurnisingField:furnfielddata });
							}
							console.log("test1")
								console.log(this.state.fields.no_of_floors);
								if(this.state.fields.no_of_floors) {
									console.log("test12")
									for (let i=1; i <= parseInt(this.state.fields.no_of_floors); i++) {
											let val = i;
											locatedatdata.push({value: val , label: val+' Floor' });
									}
										$this.setState({ LocatedAtoption:locatedatdata });
								} 
			// }
  
		
		}
	
	
	
}
/* componentWillReceiveProps(newProps) {
	// console.log(nextProps); 
	let $this  = this;
	let fields = this.state.fields;
	
	if(newProps.property_data.basic_information!==undefined) {
	var  basic_information = newProps.property_data.basic_information;
			// console.log(basic_information.user_id);
			fields['user_name'] = basic_information.user_id;
			fields['businesstype_name'] = basic_information.business_type_id;
			fields['propertytype_name'] = basic_information.property_type_id;
			fields['bhktype_name'] = basic_information.bhk_type;
			// handelchange business type
			
		 $this.setState({ fields });
	} 
 }*/
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
			
		}else if(field_info.action=='select-option') {
			
			fields[field_info.name] = e.value;
		    this.setState({ fields });
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
				} else if(field_info['name']=='no_of_floors') {
					let no_of_floors_value = e.value;
					for (let i=1; i <= parseInt(no_of_floors_value); i++) {
						let val = i;
						locatedatdata.push({value: val , label: val+' Floor' });
				}
					this.setState({ LocatedAtoption:locatedatdata });
			} 
			
		} else {	fields[field_info.name] = e;  }
		 this.setState({ fields });
}


 
  isValidated() {
	let fields = this.state.fields;
	let formvaildaction  = basicinformation_form_vaild(fields);
	//console.log(formvaildaction);
	this.setState({ errors: formvaildaction.errors });
	 return formvaildaction.formIsValid;
    // return true;
	
	
  }
  
  render() {
	let $this = this;
	
    return ( 
			<div className="">
			 <AddIndividualUserModal isOpen={this.state.isModalOpen} toggle={this.state.isModalOpen} onclicktoggle={this.toggleclose} AddUserSaveToggle={this.togglesave} />
				  
		<EditIndividualUserModal isOpen={this.state.isEditModalOpen} toggle={this.state.isEditModalOpen} onclicktoggle={this.toggleedit} AddUserSaveToggle={this.toggleedit} UserId={ this.state.fields.user_name ? this.state.fields.user_name : null } /> 
		<ViewIndividualUser isOpen={this.state.isViewModalOpen} toggle={this.state.isViewModalOpen} onclicktoggle={this.toggleview} UserId={ this.state.fields.user_name ? this.state.fields.user_name : null } />
	  <Row className="property-wizards">
			<Col xs="12" sm="12">
           
                <Row>
				  <Col md="4">
					<FormGroup>

                      <Label >User Name</Label>
					  <Select options={this.state.UserOption} name="user_name" value={this.state.UserOption.filter(({value}) => value == this.state.fields.user_name)}   onChange={this.handleChange} />
						  { /* <a className="option-btns"  onClick={() => this.toggle()}><i className="fa fa-plus"></i></a> */}
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
							<Label>Business Type </Label>
							 <Select options={this.state.BusinessOption}  name="businesstype_name" value={this.state.BusinessOption.filter(({value}) => value == this.state.fields.businesstype_name)}   onChange={this.handleChange}/> 
						</FormGroup>
						<div className="errorMsg">{this.state.errors.businesstype_name}</div>
					</Col>
				<Col md="4">
					<FormGroup>
						<Label >Property Type </Label>
							<Select options={this.state.PropertytypeOption} name="propertytype_name" value={this.state.PropertytypeOption.filter(({value}) => value == this.state.fields.propertytype_name)}   onChange={this.handleChange} /> 
						</FormGroup>
						<div className="errorMsg">{this.state.errors.propertytype_name}</div>
				</Col>
			</Row>
                <Row>
				<Col md="4">
					<FormGroup>
						<Label>BHK Type</Label>
							<Select options={this.state.Sharetypeoption} name="bhktype_name" value={this.state.Sharetypeoption.filter(({value}) => value == this.state.fields.bhktype_name)}  onChange={this.handleChange} />  
                    </FormGroup>
					<div className="errorMsg">{this.state.errors.bhktype_name}</div>
				</Col>
				<Col md="4">
					 <FormGroup>
						<Label >Property Age</Label>
						<Select options={this.state.PropertyAgeoption} name="property_age" value={this.state.PropertyAgeoption.filter(({value}) => value == this.state.fields.property_age)}  onChange={this.handleChange} />    
					</FormGroup>
					<div className="errorMsg">{this.state.errors.property_age}</div>
				</Col>
				
				<Col md="4">
				{ /* <FormGroup>
						<Label>Property Name/ PG hotel.</Label>
						<Input type="text" id="alternate-phone" placeholder="Enter Property Name" name="property_name" value={this.state.fields.property_name} onChange={this.handleChange}  />
                    </FormGroup>
					<div className="errorMsg">{this.state.errors.property_name}</div>
				*/}
				  </Col>
                
				</Row>
               
			   <Row>
			   <Col md="12"> <p className="title-style">Property Details</p></Col>
			   </Row>
				
			  <Row>
				  <Col md="3">
                    <FormGroup>
                      <Label >Area Type</Label>
						<Select options={this.state.AreaTypeoption} name="areatype_name" value={this.state.AreaTypeoption.filter(({value}) => value == this.state.fields.areatype_name)}  onChange={this.handleChange} />  
                    </FormGroup>
					<div className="errorMsg">{this.state.errors.areatype_name}</div>
                  </Col>
				  <Col md="3">
                    <FormGroup>
                      <Label >Total Area</Label>
					  					
											 <Input type="text" id="alternate-phone" placeholder="Enter Total Area" name="area_total" value={this.state.fields.area_total} onChange={this.handleChange} /> 
                    </FormGroup>
					<div className="errorMsg">{this.state.errors.area_total}</div>
                  </Col>
				  
				  <Col md="3">
						 <FormGroup>
                      <Label>Facing Direction </Label>
							<Select options={this.state.FaceSideoption} name="face_direction" value={this.state.FaceSideoption.filter(({value}) => value == this.state.fields.face_direction)}  onChange={this.handleChange} />
                    </FormGroup>
					<div className="errorMsg">{this.state.errors.face_direction}</div>
                  </Col>
				  <Col md="3">
                    <FormGroup>
                      <Label>Tenant Type</Label>
						<Select options={this.state.Familyoption} name="family" value={this.state.Familyoption.filter(({value}) => value == this.state.fields.family)} onChange={this.handleChange} />  
                    </FormGroup>
					<div className="errorMsg">{this.state.errors.family}</div>
                  </Col>
				  
                </Row>
				
				
				
				<Row>
				  <Col md="3">
						<FormGroup>
							<Label >No.of floors</Label>
							<Select options={this.state.NoofFlooroption} name="no_of_floors" value={this.state.NoofFlooroption.filter(({value}) => value == this.state.fields.no_of_floors)}  onChange={this.handleChange} />    
						</FormGroup>
						<div className="errorMsg">{this.state.errors.no_of_floors}</div>
                  </Col>
				  <Col md="3">
                    
					 <FormGroup>
						<Label >Located At</Label>
							<Select options={this.state.LocatedAtoption} name="located_at" value={this.state.LocatedAtoption.filter(({value}) => value == this.state.fields.located_at)}  onChange={this.handleChange} />     
						</FormGroup>
						<div className="errorMsg">{this.state.errors.located_at}</div>
                  </Col>
				  
				    <Col md="3">
						<FormGroup>
                      <Label >No Of Restrooms</Label>
                      <Input type="text"  placeholder="Enter No Of Restrooms" name="no_of_restrooms" value={this.state.fields.no_of_restrooms} onChange={this.handleChange} />
                    </FormGroup>
					<div className="errorMsg">{this.state.errors.no_of_restrooms}</div>
                  </Col>
				  <Col md="3">
                    <FormGroup>
                      <Label >Restrooms Type</Label>
							<Select options={this.state.RestroomsTypeoption} name="restrooms_type" value={this.state.RestroomsTypeoption.filter(({value}) => value == this.state.fields.restrooms_type)}  onChange={this.handleChange} /> 
                    </FormGroup>
					<div className="errorMsg">{this.state.errors.restrooms_type}</div>
                  </Col>
				  
                </Row>
				
				<Row>
				  <Col md="3">
                    <FormGroup>
                      <Label htmlFor="name">Pet</Label>
						<Select options={this.state.Petoption} name="pet" value={this.state.Petoption.filter(({value}) => value == this.state.fields.pet)}  onChange={this.handleChange} /> 
                    </FormGroup>
					<div className="errorMsg">{this.state.errors.pet}</div>
                  </Col>
				  
				  <Col md="3">
                    <FormGroup>
                      <Label htmlFor="mail">Food</Label>
						<Select options={this.state.Foodoption} name="food" value={this.state.Foodoption.filter(({value}) => value == this.state.fields.food)}  onChange={this.handleChange}  /> 
                    </FormGroup>
					<div className="errorMsg">{this.state.errors.food}</div>
                  </Col>
				  <Col md="3">
						 <FormGroup>
							<Label htmlFor="phone">No. of Balcony  </Label>
							<Select options={this.state.NoofBalconyoption} name="no_of_balcony" value={this.state.NoofBalconyoption.filter(({value}) => value == this.state.fields.no_of_balcony)}  onChange={this.handleChange} /> 
                    </FormGroup>
					<div className="errorMsg">{this.state.errors.no_of_balcony}</div>

                  </Col>
					 
					<Col md="3">
					<FormGroup>
						<Label >Availability</Label>
						<Select options={this.state.Availabilityoption} name="availability" value={this.state.Availabilityoption.filter(({value}) => value == this.state.fields.availability)}  onChange={this.handleChange} /> 
                    </FormGroup>
					<div className="errorMsg">{this.state.errors.availability}</div>
					
				 </Col> 
                </Row>
				
				<Row>
				  <Col md="3">
				   <FormGroup>
                      <Label htmlFor="phone">Parking </Label>
							<Select options={this.state.Parkingoption} name="parking" value={this.state.Parkingoption.filter(({value}) => value == this.state.fields.parking)}  onChange={this.handleChange} /> 
                    </FormGroup>
						<div className="errorMsg">{this.state.errors.parking}</div>
                  </Col>
				   <Col md="3">
                     <FormGroup>
                      <Label htmlFor="alternate-phone">No Of Parking</Label>
                      <Input type="text" id="alternate-phone" placeholder="Enter No Of parking" name="no_of_parking" value={this.state.fields.no_of_parking} onChange={this.handleChange} />
                    </FormGroup>
					<div className="errorMsg">{this.state.errors.no_of_parking}</div>
                  </Col>
				  
				  <Col md="3">
				  <Label xs="12" className="nl-padding" htmlFor="phone">Parking Type</Label>
                     	<FormGroup check inline>
                        <Input className="form-check-input" type="radio" id="parking_type" checked={ this.state.fields.parking_type==='Open' ? true : false } name="parking_type" value="Open" onChange={this.handleChange} />
                        <Label className="form-check-label" check >Open</Label> 
                      </FormGroup>
                      <FormGroup check inline>
                        <Input className="form-check-input" type="radio" id="parking_type" checked={ this.state.fields.parking_type==='Closed' ? true : false } name="parking_type" value="Closed" onChange={this.handleChange} />
                        <Label className="form-check-label" check >Closed</Label>
                      </FormGroup>
							<div className="errorMsg">{this.state.errors.parking_type}</div>
				  </Col>
				  <Col md="3">
					 <Label xs="12" className="nl-padding" >Add Rooms </Label>
								
						 <FormGroup check inline>
                        <Input className="form-check-input" type="checkbox" id="inline-checkbox1" name="add_rooms" 
						
						checked={this.state.fields.add_rooms.includes('Pooja')}  value="Pooja" onChange={(e) => this.handleChange(e,undefined,1,'add_rooms')} />
                        <Label className="form-check-label" check>Pooja</Label>
                      </FormGroup>
                      <FormGroup check inline>
                        <Input className="form-check-input" type="checkbox" id="inline-checkbox2" name="add_rooms" checked={this.state.fields.add_rooms.includes('Study')} value="Study" onChange={(e) => this.handleChange(e,undefined,2,'add_rooms')} />
                        <Label className="form-check-label" check>Study</Label>
                      </FormGroup>
                      <FormGroup check inline>
                        <Input className="form-check-input" type="checkbox" id="inline-checkbox3" name="add_rooms"  checked={this.state.fields.add_rooms.includes('Servant')} value="Servant" onChange={(e) => this.handleChange(e,undefined,3,'add_rooms')} />
                        <Label className="form-check-label" check>Servant</Label>
                      </FormGroup>
					<FormGroup check inline>
                        <Input className="form-check-input" type="checkbox" id="inline-checkbox3" name="add_rooms"  checked={this.state.fields.add_rooms.includes('Dinner Hall')} value="Dinner Hall" onChange={(e) => this.handleChange(e,undefined,4,'add_rooms')} />
                        <Label className="form-check-label" check>Dinner Hall</Label>
                      </FormGroup>	
					  <FormGroup check inline>
                        <Input className="form-check-input" type="checkbox" id="inline-checkbox3" name="add_rooms" checked={this.state.fields.add_rooms.includes('Other')} value="Other" onChange={(e) => this.handleChange(e,undefined,5,'add_rooms')} />
                        <Label className="form-check-label" check>Other</Label>
                      </FormGroup>
					  <div className="errorMsg">{this.state.errors.add_rooms}</div>
					
					
						{ /* <FormGroup>
							<Label xs="9" htmlFor="alternate-phone">Lift</Label>
							<AppSwitch className={'mx-2'} size={'lg'} variant={'pill'} color={'success'} outline={'alt'}  label dataOn={'Yes'} dataOff={'No'} />
							</FormGroup>	*/ }
				</Col>
				
                </Row>
				
				<Row>
				{ this.state.AttributeData!='' ?
				this.state.AttributeData.map(function(item,index) {
					let key = 'key_'+item.attribute_id;
						 if(item.attribute_field=='0') { 
							return ( <Col md="6" lg="6" xl="3">
								<FormGroup className="switchOptions">
								<Label xs="9" className="nl-padding">{item.attribute_name}</Label>
								<AppSwitch className={'col-3 nr-padding'} size={'lg'} variant={'pill'} color={'success'} outline={'alt'}  label dataOn={'Yes'} dataOff={'No'} checked={ $this.state.fields.dynamic_attributes_property[key]==='Yes' ? true : false } name={`dynamic_attributes_property[${key}]`}  value={$this.state.fields.dynamic_attributes_property[key]} onChange={(e) => $this.handleChange(e,undefined,item.attribute_id,'dynamic_attributes_property')} />
						</FormGroup>
					</Col>)
						 
						 }
				
				})
				
				:(null)	
					
				}
				</Row>
				
				<Row>
				
					<Col md="8">
						<FormGroup>
                      <Label htmlFor="mail">Furnished</Label>
						<Select options={this.state.FurnisingTypeoption} name="furnisingtype_name" value={this.state.FurnisingTypeoption.filter(({value}) => value == this.state.fields.furnisingtype_name)}  onChange={this.handleChange}/> 
                    </FormGroup>
					<div className="errorMsg">{this.state.errors.furnisingtype_name}</div>
                  </Col>
				</Row> 
				<Row>
				{ 
				this.state.FurnisingField!='' ? 
					this.state.FurnisingField.map(function(item,index) {
						 let key = 'key_'+item.value;
						 if(item.type=='1') { 
						
					return ( <Col md="6" lg="6" xl="3">
						<FormGroup className="switchOptions">
							<Label xs="8" className="nl-padding">{item.label}</Label>
							<FormGroup className="incdec-func col-4 nl-padding">
									<Button   outline color="primary" onClick={() => $this.sub(item.value)}>-</Button>
									<Input  readOnly className="form-input" type="text" name={`dynamic_quantity[${key}]`} value={$this.state.fields.dynamic_quantity[key] ? $this.state.fields.dynamic_quantity[key] : 0} onChange={(e) => $this.handleChangeFurnished(e)} />
									<Button   outline color="primary" onClick={() => $this.add(item.value)}>+</Button>
						
						</FormGroup>
						</FormGroup>
					</Col>)
						 } else { return (<Col md="6" lg="6" xl="3">
						<FormGroup className="switchOptions">
								<Label xs="9" className="nl-padding">{item.label}</Label>
								<AppSwitch aria-itemref={'dynamic_furnished'}  className={'col-3 nr-padding'} size={'lg'} variant={'pill'} color={'success'} outline={'alt'}  checked={ $this.state.fields.dynamic_furnished[key]==='Yes' ? true : false } label dataOn={'Yes'} dataOff={'No'} name={`dynamic_furnished[${key}]`}  value={$this.state.fields.dynamic_furnished[key]} onChange={(e) => $this.handleChange(e,undefined,item.value,'dynamic_furnished')} />
						</FormGroup>
					</Col>) 
						 }
					})
				
				:(null)
				
				}
				</Row>
				
				<FormGroup row>
                    
                    <Col xs="12" md="9">
					 <Label htmlFor="textarea-input">About Property</Label>
                      <Input type="textarea" name="textarea-input" id="textarea-input" rows="5" placeholder="About Property..." name="about_property" value={this.state.fields.about_property} onChange={this.handleChange} />
                    </Col>
					
					<Col md="3"> </Col>
					
                  </FormGroup>
				<div className="errorMsg">{this.state.errors.about_property}</div>
				
			   
			
				 
             
          </Col>
		</Row>
		
       
      </div>
	
	);
  }
}

export default BasicinformationComponent;