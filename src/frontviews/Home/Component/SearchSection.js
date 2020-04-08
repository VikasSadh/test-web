import React, { Component } from 'react';
import { Link,Redirect } from 'react-router-dom';
import {toastr} from 'react-redux-toastr';
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import classNames from 'classnames';

import { Base64 } from 'js-base64';

import PlacesAutocomplete, { geocodeByAddress,getLatLng, } from 'react-places-autocomplete';

import axios from 'axios';
const API_URL = process.env.REACT_APP_API_URL;
const google = window.google;

const toastrErrorOptions = {
  timeOut: 3000, // by setting to 0 it will prevent the auto close
  icon: (<i className="far fa-frown"></i>),
  className: 'front-toastr front-toastr-error',
  position: 'top-center',
  autoClose: false,
  transitionIn: 'bounceIn',
  transitionOut: 'bounceOut',
  showCloseButton: true,
  closeOnToastrClick: true
}

class SearchSection extends Component {
 constructor(props) {
    super(props); 
	this.state = { fields: {}, errors: {}, redirect:false, business_type_id:'',service_type:'',BusinessTypeData:[],sliderindex:1,servicetypeshowhide:false,propertyshowhide:false,property_type_id:'',bhktype:'',user_area:'',MultipleArea:[],moveright:false,moveleft:false }
	
	this.selectbussinesstype = this.selectbussinesstype.bind(this);
	this.selectpropertytype = this.selectpropertytype.bind(this);
	
	this.handleChangeService = this.handleChangeService.bind(this);
	this.handleChangebhktype = this.handleChangebhktype.bind(this);
	
	this.PrevButtonEvent = this.PrevButtonEvent.bind(this);
	this.NextButtonEvent = this.NextButtonEvent.bind(this);
	
	this.handleSelect = this.handleSelect.bind(this);
	
	this.HomeSearchEvent = this.HomeSearchEvent.bind(this);
	
 
 }
 HomeSearchEvent() {
	 // console.log(this.state)
	 if(this.state.sliderindex==3 && this.validateFormStepthree()!=true) { 
		 toastr.light('Error', 'Please Select Location', toastrErrorOptions);
	 } else { this.setState({ redirect:true })	}
	 
	
}
 PrevButtonEvent() {
	
	 if(this.state.sliderindex!=1) {
		this.setState({sliderindex:this.state.sliderindex-1,moveright:true,moveleft:false}) 
		
	 }
 }
 NextButtonEvent() {
	  let formIsValid = true;
	
	if(this.state.sliderindex==1 && this.validateFormStepone()!=true) {
		 toastr.light('Error', 'Please Select Property Type', toastrErrorOptions);
		 formIsValid = false;
	} else if(this.state.sliderindex==2 && this.validateFormSteptwo()!=true) {
		  toastr.light('Error', 'Please Select Property Type', toastrErrorOptions);
		  formIsValid = false;
		 
	} else if(this.state.sliderindex==3 && this.validateFormStepthree()!=true) {
		 toastr.light('Error', 'Please Select Location', toastrErrorOptions);
		  formIsValid = false;	
	} 
	
	  if(this.state.sliderindex!=3 && formIsValid==true) {
			this.setState({sliderindex:this.state.sliderindex+1,moveright:false,moveleft:true}); 
	  }
 }
 
 validateFormStepone() {
			let fields = this.state;
			let formIsValid = true;
			
			if(!fields["business_type_id"]) { formIsValid = false; }
			if(!fields["service_type"]) { formIsValid = false; }
			return formIsValid;
 }
 validateFormSteptwo() {
		let fields = this.state;
		let formIsValid = true;
		
		if(!fields["property_type_id"]) { formIsValid = false; }
		if(!fields["bhktype"]) { formIsValid = false; }
		return formIsValid;
	 
 }
 validateFormStepthree() {
		let fields = this.state;
		let formIsValid = true;
		
		// if(!fields["user_area"]) { formIsValid = false; }
		if(fields.MultipleArea.length <= 0) { formIsValid = false; }
		
		return formIsValid;
	 
 }
 
 handleChangeService(e) {
	 console.log(e.target.value);
	this.setState({service_type:e.target.value});
	this.setState({sliderindex:this.state.sliderindex+1,moveright:false,moveleft:true}); 
	
}
handleChangebhktype(e) {
	console.log(e.target.value)
	this.setState({bhktype:e.target.value})
	this.setState({sliderindex:this.state.sliderindex+1,moveright:false,moveleft:true}); 
}
selectbussinesstype(type) {
		if(type=='residential') {
				let busniess_val = 2;
				this.setState({business_type_id:busniess_val,servicetypeshowhide:true})
		} else if(type=='commercial') {
				let busniess_val = 1;
				this.setState({business_type_id:busniess_val,servicetypeshowhide:true})
		}
		
}
selectpropertytype(type) {
		 this.setState({property_type_id:type,propertyshowhide:true})
	}
 

componentWillMount() {
	let $this = this;
	axios.get(API_URL+'/api/admin/getallsettingdata').then(function(response){
			if(response.data.Statuscode==200) {
					let resData = response.data;
					console.log(resData.businesstypeData);
					$this.setState({ BusinessTypeData: resData.businesstypeData });
						
			} 
	})
	
}	 
 handleChangeArrea = user_area => {
	 console.log(user_area);
    this.setState({ user_area });
  };
handleSelect = user_area => {
	  let $this = this;
	 let MultipleArea = $this.state.MultipleArea;
	 console.log(MultipleArea.length);
	 if(MultipleArea.length <= 0) {
			  geocodeByAddress(user_area).then(function(results) {
					results[0].address_components.map(function(e) { 
							var type = e.types;
							if(type.indexOf('sublocality_level_1') !== -1){
									// console.log(e);
								 MultipleArea.push(e.short_name);
								 $this.setState({  user_area: '',MultipleArea:MultipleArea });
							} 
					})
				}).catch(error => console.error('Error', error));
	 }	
	 // console.log($this.state.MultipleArea);
   /* geocodeByAddress(user_area)
      .then(results => getLatLng(results[0]))
      .then(latLng => console.log('Success', latLng))
      .catch(error => console.error('Error', error)); */
  };

render() {
		const { redirect,user_area,business_type_id,property_type_id,bhktype,MultipleArea } = this.state;
		let searcharr = 'business_type_id='+business_type_id+'&property_type_id='+property_type_id+'&bhktype='+bhktype;		
		var query = Base64.encode(searcharr);
		let redirectpath = '/property/rent/'+MultipleArea[0]+'/'+query;
		if (redirect) { return <Redirect to={redirectpath}/>; }
		let $this = this;
		const searchOptions = { location: new google.maps.LatLng(13.067439, 80.237617), radius: 1000, componentRestrictions: { country: ['in'] }, types: ['geocode']}
	// var itemClasses = classNames({ 'item': true, 'displayhide': true, 'displayshowactive': $this.state.sliderindex === 1 });
	return (
    <div className="banner-search">    
      <div className="container">
          <div className="banner-heading text-center">
		  
			  {/*<img src="img/others/hm-logo.png" className="img-fluid d-block d-sm-block d-md-none" alt="Logo">*/}
              <h1>Rental Properties In Chennai</h1>                    
          </div>
		  {/* <OwlCarousel className="owl-theme" items={1} loop={false} margin={0} nav={true} dots={false} mouseDrag={false} touchDrag={false}> */}
            <div key={1} className={classNames({ 'prevslideeffect':$this.state.moveright==true && $this.state.sliderindex === 1 , 'item': true, 'displayhide': true, 'displayshowactive': $this.state.sliderindex === 1,"nextslideeffect": $this.state.moveleft==true && $this.state.sliderindex === 1})}>
              <div className="banner-group">
                <h4>My choice of property type is</h4>
                <ul className="list-unstyled d-inline-flex">
				
				  <li  onClick={() => $this.selectbussinesstype('residential')} className="list-types">
                    <a>
                      <div  className={`lists-icons ${this.state.business_type_id==2 ? 'active' : '' }`}>
                        <svg version="1.1" id="Bs_Ic1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" enableBackground="0 0 512 512">
                          <g fill="#FFFFFF">
                          <path d="M230.4,82.7c2.3,0,4.5-0.8,6.4-2.3l0,0c4.2-3.5,4.8-9.8,1.3-14.1c-3.5-4.2-9.8-4.8-14.1-1.3c-4.2,3.5-4.8,9.8-1.3,14.1C224.7,81.4,227.6,82.7,230.4,82.7z"/>
                          <path d="M199.9,432L199.9,432c-5.5,0-10,4.5-10,10c0,5.5,4.5,10,10,10s10-4.5,10-10C209.9,436.4,205.4,432,199.9,432z" />
                          <path d="M189.9,293.7c-16.5,0-30,13.5-30,30s13.5,30,30,30s30-13.5,30-30S206.4,293.7,189.9,293.7zM189.9,333.7c-5.5,0-10-4.5-10-10c0-5.5,4.5-10,10-10c5.5,0,10,4.5,10,10C199.9,329.2,195.4,333.7,189.9,333.7z"/>
                          <path d="M322.2,161.7c16.5,0,30-13.5,30-30c0-16.5-13.5-30-30-30s-30,13.5-30,30C292.2,148.3,305.6,161.7,322.2,161.7zM322.2,121.7c5.5,0,10,4.5,10,10c0,5.5-4.5,10-10,10c-5.5,0-10-4.5-10-10C312.2,126.2,316.6,121.7,322.2,121.7z"/>
                          <path d="M499.8,123.4L340.3,6.1c-10.5-8-25.2-8.1-35.9-0.3l-47.7,35.1c-4.4,3.3-5.4,9.5-2.1,14s9.5,5.4,14,2.1l47.7-35.1c3.5-2.6,8.5-2.6,11.9,0.1c0.1,0,0.1,0.1,0.2,0.1l159.6,117.4c4.4,3.2,5.4,9.5,2.1,13.9c-1.6,2.1-3.9,3.5-6.5,4c-2.6,0.4-5.3-0.2-7.4-1.8l-148.1-109c-3.5-2.6-8.3-2.6-11.9,0l-148.1,109c-2.1,1.6-4.8,2.2-7.4,1.8s-4.9-1.8-6.5-4c-3.2-4.4-2.3-10.7,2.2-13.9l47.7-35.1c4.4-3.3,5.4-9.5,2.1-14s-9.5-5.4-14-2.1l-47.7,35.1c-6.5,4.7-10.7,11.7-11.9,19.6c-1.2,7.9,0.7,15.8,5.4,22.3c4.7,6.5,11.7,10.7,19.6,11.9c5.7,0.9,11.4,0.1,16.6-2.2v21.3c-0.7,0.4-1.5,0.9-2.2,1.5l-47.7,35.1c-4.4,3.3-5.4,9.5-2.1,14s9.5,5.4,14,2.1l47.7-35.1c3.5-2.6,8.5-2.6,11.9,0.1c0.1,0,0.1,0.1,0.2,0.1l159.6,117.4c4.4,3.2,5.4,9.5,2.1,13.9c-1.6,2.1-3.9,3.5-6.5,4c-2.6,0.4-5.3-0.2-7.4-1.8l-148.1-109c-3.5-2.6-8.3-2.6-11.9,0l-148.1,109c-2.1,1.6-4.8,2.2-7.4,1.8s-4.9-1.8-6.5-4s-2.2-4.8-1.8-7.4c0.4-2.6,1.8-4.9,4-6.5l47.7-35.1c4.4-3.3,5.4-9.5,2.1-14c-3.3-4.5-9.5-5.4-14-2.1l-47.7,35.1C5.8,320.1,1.6,327.1,0.4,335c-1.2,7.9,0.7,15.8,5.4,22.3c4.7,6.5,11.7,10.7,19.6,11.9c5.7,0.9,11.4,0.1,16.6-2.2v135c0,5.5,4.5,10,10,10h408c5.5,0,10-4.5,10-10V367.8c11.6-4.1,20-15.2,20-28.3c0-13-8.4-24.2-20-28.3V175c3.8,1.7,7.8,2.6,12,2.6c1.5,0,3.1-0.1,4.6-0.4c7.9-1.2,14.9-5.4,19.6-11.9C516,152,513.1,133.2,499.8,123.4zM194.3,192.4v-31.2l127.8-94.1L450,161.2v148.4h-90.5L292.1,260H420c5.5,0,10-4.5,10-10v-60c0-5.5-4.5-10-10-10H224.3c-5.5,0-10,4.5-10,10v12.8l-6.3-4.7C203.9,195,199.2,193.1,194.3,192.4z M410,200v40h-77.8v-40H410z M312.2,240h-47.2l-30.6-22.5V200h77.8V240z M139.9,452H102v-40h37.8V452z M159.9,392h60v100h-60V392z M239.9,412h37.8v40h-37.8V412z M317.7,492h-77.8v-20h47.8c5.5,0,10-4.5,10-10v-60c0-5.5-4.5-10-10-10h-47.8v0c0-11-9-20-20-20h-60c-11,0-20,9-20,20v0H92c-5.5,0-10,4.5-10,10v60c0,5.5,4.5,10,10,10h47.8v20H62V353.2l127.8-94.1l127.8,94.1V492z M337.7,492V369.5h11.9c0,0,0.1,0,0.1,0s0.1,0,0.1,0H450V492H337.7z M460,349.5h-82c2.3-6.5,2.2-13.6,0-20h82c5.5,0,10,4.5,10,10S465.5,349.5,460,349.5z"/>
                          <path d="M98.1,274.7c2.3,0,4.5-0.8,6.4-2.3l0,0c4.2-3.5,4.8-9.8,1.3-14.1s-9.8-4.8-14.1-1.3c-4.2,3.5-4.8,9.8-1.3,14.1C92.4,273.4,95.2,274.7,98.1,274.7z"/>
                          </g>
                        </svg>
                        <p className="d-block d-sm-block d-md-none">Residential</p>
                      </div>
                      <p className="d-none d-sm-none d-md-block">Residential</p>
                    </a>
					
                  </li>
                  <li key={1} onClick={() => $this.selectbussinesstype('commercial')} className="list-types">
                    <a >
                      <div  className={`lists-icons ${this.state.business_type_id==1 ? 'active' : '' }`}>
						<svg version="1.1" id="Bs_Ic2" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 496 496" enableBackground="0 0 496 496">
							<g fill="#FFFFFF">
								<path d="M248,112c-4.4,0-8-3.6-8-8h-16c0,10.4,6.7,19.2,16,22.5V144h16v-17.5c9.3-3.3,16-12.1,16-22.5
									c0-13.2-10.8-24-24-24c-4.4,0-8-3.6-8-8s3.6-8,8-8s8,3.6,8,8h16c0-10.4-6.7-19.2-16-22.5V32h-16v17.5c-9.3,3.3-16,12.1-16,22.5
									c0,13.2,10.8,24,24,24c4.4,0,8,3.6,8,8S252.4,112,248,112z"/>
								<path d="M478.9,433.1c5.6-6.9,9.1-15.6,9.1-25.1c0-16.3-9.9-30.3-24-36.5V254.9c18.3-4.1,32-20.4,32-39.9
									c0-5.8-1.2-11.4-3.5-16.6l-28.5-64V120c0-13.2-10.8-24-24-24H335.6c0.2-2.6,0.4-5.3,0.4-8c0-48.5-39.5-88-88-88s-88,39.5-88,88
									c0,2.7,0.2,5.4,0.4,8H56c-13.2,0-24,10.8-24,24v14.3l-28.5,64C1.2,203.6,0,209.2,0,215c0,19.5,13.7,35.8,32,39.9v116.6
									C17.9,377.7,8,391.7,8,408c0,9.6,3.5,18.2,9.1,25.1C7.3,436.1,0,445.2,0,456v40h224v-32h48v32h224v-40
									C496,445.2,488.7,436.1,478.9,433.1z M472,408c0,13.2-10.8,24-24,24H320c-13.2,0-24-10.8-24-24c0-16,15.6-28.7,32.4-22.4l6.8,2.6
									l3.2-6.6c5.6-11.6,19.5-17.2,31.9-11.1l6.6,3.2l3.8-6.2c5.9-9.7,16.1-15.5,27.2-15.5c15.2,0,28.4,10.8,31.4,25.7l1.3,6.6l6.7-0.2
									c0.4,0,0.8-0.1,0.6-0.1C461.2,384,472,394.8,472,408z M273.5,448h-51c-2.6-7.1-8.4-12.7-15.7-14.9c5.6-6.9,9.1-15.6,9.1-25.1
									c0-13-6.3-24.5-16-31.8V288h96v88.2c-9.7,7.3-16,18.8-16,31.8c0,9.6,3.5,18.2,9.1,25.1C281.8,435.3,276,440.9,273.5,448z M48,255.8
									c12.8-0.6,24.2-6.9,31.4-16.9c7.3,10.3,19.1,17,32.6,17h4.2c13.9,0,26.5-7.1,33.8-18.7c7,11.2,19.3,18.7,33.4,18.7
									c13.1,0,24.9-6.5,32.2-16.7c7.3,10.1,19,16.7,32.4,16.7s25.1-6.6,32.4-16.7c7.2,10.2,19,16.7,32.2,16.7c14.1,0,26.5-7.5,33.4-18.7
									c7.3,11.6,19.9,18.7,33.8,18.7h4.2c13.5,0,25.4-6.8,32.6-17c7.2,9.9,18.6,16.3,31.4,16.9v101.9c-8.7-13.2-23.5-21.7-40-21.7
									c-14.5,0-27.9,6.5-37,17.6c-16.3-4.8-33.9,1.7-43.4,15.2c-2.5-0.5-5-0.8-7.6-0.8c-2.7,0-5.4,0.3-8,0.8V272H184v96.8
									c-2.6-0.5-5.3-0.8-8-0.8c-2.5,0-5,0.3-7.6,0.8c-9.5-13.4-27.1-20-43.4-15.2c-9.1-11.1-22.5-17.6-37-17.6c-16.5,0-31.3,8.6-40,21.7
									V255.8z M151.2,144l-7,69.7l-6.5,13c-4.1,8.2-12.3,13.3-21.5,13.3H112c-13.2,0-24-10.8-24-24h-0.2l14.7-72H151.2z M208,166.3V215
									l-1.8,7.2c-2.6,10.5-12,17.8-22.7,17.8c-12.9,0-23.4-10.5-23.5-23.2l7.3-72.8h12.9C187.8,153.2,197.3,160.8,208,166.3z M315.8,144
									h12.9l7.2,72.6c0,12.9-10.5,23.4-23.4,23.4c-10.8,0-20.1-7.3-22.7-17.8L288,215v-48.7C298.7,160.8,308.2,153.2,315.8,144z
									 M393.4,144l14.5,72.7c-0.4,12.9-11,23.3-24,23.3h-4.2c-9.2,0-17.4-5.1-21.5-13.3l-6.6-13.2l-6.9-69.5H393.4z M224,172.6
									c7.6,2.2,15.7,3.4,24,3.4s16.4-1.2,24-3.4V216c0,13.2-10.8,24-24,24s-24-10.8-24-24V172.6z M480,215c0,13.8-11.2,25-25,25h-5.2
									c-11.5,0-21.5-7.8-24.3-18.9L409.8,144h41l27,60.8C479.3,208.1,480,211.5,480,215z M440,112c4.4,0,8,3.6,8,8v8H326.3
									c2.6-5.1,4.7-10.4,6.3-16H440z M248,16c39.7,0,72,32.3,72,72s-32.3,72-72,72s-72-32.3-72-72S208.3,16,248,16z M48,120
									c0-4.4,3.6-8,8-8h107.4c1.6,5.6,3.7,10.9,6.3,16H48V120z M16,215c0-3.5,0.7-6.9,2.2-10.2l27-60.8h41l-14,70.1l-1.8,7
									C67.7,232.2,57.7,240,46.2,240H41C27.2,240,16,228.8,16,215z M47.3,384l8,0.3l1.3-6.6c3-14.9,16.2-25.7,31.4-25.7
									c11.2,0,21.3,5.8,27.2,15.5l3.8,6.2l6.5-3.2c12.4-6.1,26.3-0.5,31.9,11.1l3.2,6.6l6.8-2.6c16.8-6.4,32.5,6.4,32.5,22.4
									c0,13.2-10.8,24-24,24H48c-13.2,0-24-10.8-24-24S34.8,384,47.3,384z M208,480H16v-24c0-4.4,3.6-8,8-8h176c4.4,0,8,3.6,8,8V480z
									 M480,480H288v-24c0-4.4,3.6-8,8-8h176c4.4,0,8,3.6,8,8V480z"/>
								 </g>
							</svg>
                        <p className="d-block d-sm-block d-md-none">Commercial</p>
                      </div>
                      <p className="d-none d-sm-none d-md-block">Commercial</p>
                    </a>
					
                  </li>
                </ul>
				{ /* <div className="errorHomeMsg">{this.state.errors.business_type_id}</div> */}
				{ this.state.servicetypeshowhide==true ? 
					<div className="listed-contents firstoption">	
						<ul className="list-unstyled d-inline-flex">
							<li>
								<input type="radio" id="Rent" name="service_type"  value="Rent" onChange={ (e) => this.handleChangeService(e)} />
								<label for="Rent">Rent</label>	
							</li>
							<li>
								<input type="radio" id="Buy" name="service_type" value="Buy"   onChange={(e) => this.handleChangeService(e)}/>
								<label for="Buy" >Buy</label>
							</li>
						</ul>
						{/* <div className="errorHomeMsg">{this.state.errors.service_type}</div> */ }
					</div>	
							
				:null}
              </div>
            </div>
           
            <div className={classNames({ 'prevslideeffect':$this.state.moveright==true && $this.state.sliderindex === 2 , 'item': true, 'displayhide': true, 'displayshowactive': $this.state.sliderindex === 2,"nextslideeffect": $this.state.moveleft==true && $this.state.sliderindex === 2 })}>
              <div className="banner-group">
                <h4>I am looking for</h4>
                <ul className="list-unstyled d-inline-flex">
				<li onClick={() => $this.selectpropertytype('1')} className="list-types">
                    <a href="javascript:void(0);">
                      <div className={`lists-icons ${this.state.property_type_id==1 ? 'active' : '' }`}>
						<svg version="1.1" id="Bs_Ic4" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" enableBackground="0 0 512 512">
							<g fill="#FFFFFF">
								<rect x="392.3" y="192.4" width="16" height="15"/>
								<rect x="424.3" y="192.4" width="16" height="15"/>
								<path d="M488,192.4v-32.1h-80.2V79.7h-15v80.7h-64.1v32.1h-25V63.6h-15V497h-81.2v-64.1H96.2V497H15V15h273.5v24.5
									h15V0H0v512h376.2v-15h-72.6V207.4h72.6v-15h-32.6v-17h129.2v32.1h24V497h-96.7v15H512V192.4H488z M192.4,497h-81.2v-49.1h33.1
									v32.6h15v-32.6h33.1L192.4,497L192.4,497z"/>
								<path d="M95.2,32.1H32.1v63.1h63.1L95.2,32.1L95.2,32.1z M80.2,80.2H47.1V47.1h33.1L80.2,80.2L80.2,80.2z"/>
								<path d="M271.5,32.1h-63.1v63.1h63.1V32.1z M256.5,80.2h-33.1V47.1h33.1V80.2z"/>
								<path d="M183.4,32.1h-63.1v63.1h63.1V32.1z M168.3,80.2h-33.1V47.1h33.1V80.2z"/>
								<path d="M95.2,112.2H32.1v63.1h63.1L95.2,112.2L95.2,112.2z M80.2,160.3H47.1v-33.1h33.1L80.2,160.3L80.2,160.3z"/>
								<path d="M208.4,175.3h63.1v-63.1h-63.1V175.3z M223.4,127.3h33.1v33.1h-33.1V127.3z"/>
								<path d="M183.4,112.2h-63.1v63.1h63.1V112.2z M168.3,160.3h-33.1v-33.1h33.1V160.3z"/>
								<path d="M95.2,192.4H32.1v63.1h63.1L95.2,192.4L95.2,192.4z M80.2,240.5H47.1v-33.1h33.1L80.2,240.5L80.2,240.5z"/>
								<path d="M208.4,255.5h63.1v-63.1h-63.1V255.5z M223.4,207.4h33.1v33.1h-33.1V207.4z"/>
								<path d="M183.4,192.4h-63.1v63.1h63.1V192.4z M168.3,240.5h-33.1v-33.1h33.1V240.5z"/>
								<path d="M95.2,272.5H32.1v63.1h63.1L95.2,272.5L95.2,272.5z M80.2,320.6H47.1v-33.1h33.1L80.2,320.6L80.2,320.6z"/>
								<path d="M208.4,335.7h63.1v-63.1h-63.1V335.7z M223.4,287.6h33.1v33.1h-33.1V287.6z"/>
								<path d="M183.4,272.5h-63.1v63.1h63.1V272.5z M168.3,320.6h-33.1v-33.1h33.1V320.6z"/>
								<path d="M328.6,295.6h63.1v-63.1h-63.1V295.6z M343.7,247.5h33.1v33.1h-33.1V247.5z"/>
								<path d="M408.8,295.6h63.1v-63.1h-63.1V295.6z M423.8,247.5h33.1v33.1h-33.1V247.5z"/>
								<path d="M328.6,383.8h63.1v-63.1h-63.1V383.8z M343.7,335.7h33.1v33.1h-33.1V335.7z"/>
								<path d="M408.8,383.8h63.1v-63.1h-63.1V383.8z M423.8,335.7h33.1v33.1h-33.1V335.7z"/>
								<path d="M328.6,471.9h63.1v-63.1h-63.1V471.9z M343.7,423.8h33.1v33.1h-33.1V423.8z"/>
								<path d="M408.8,471.9h63.1v-63.1h-63.1V471.9z M423.8,423.8h33.1v33.1h-33.1V423.8z"/>
								<path d="M32.1,415.8h63.1v-63.1H32.1V415.8z M47.1,367.7h33.1v33.1H47.1V367.7z"/>
								<path d="M208.4,415.8h63.1v-63.1h-63.1V415.8z M223.4,367.7h33.1v33.1h-33.1V367.7z"/>
								<path d="M120.2,415.8h63.1v-63.1h-63.1C120.2,352.7,120.2,415.8,120.2,415.8z M135.3,367.7h33.1v33.1h-33.1V367.7z"/>
								<polygon points="280.1,432.8 272,432.8 232,432.8 223.9,432.8 223.9,447.9 232,447.9 272,447.9 280.1,447.9"/>
								<polygon points="272,479.9 280.1,479.9 280.1,464.9 272,464.9 232,464.9 223.9,464.9 223.9,479.9 232,479.9 			"/>
							</g>
						</svg>
                        <p className="d-block d-sm-block d-md-none">Apartments / Flats</p>
                      </div>
                      <p className="d-none d-sm-none d-md-block">Apartments / Flats</p>
                    </a>
                  </li>
                  <li onClick={() => $this.selectpropertytype('2')} className="list-types">
                    <a href="javascript:void(0);">
                      <div className={`lists-icons ${this.state.property_type_id==2 ? 'active' : '' }`}>                        
						<svg version="1.1" id="Bs_Ic3" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" enableBackground="0 0 512 512">
						<g fill="#FFFFFF">
						<path d="M64,232h64c4.4,0,8-3.6,8-8v-48c0-4.4-3.6-8-8-8H64c-4.4,0-8,3.6-8,8v48C56,228.4,59.6,232,64,232z M120,216
							h-16v-32h16V216z M72,184h16v32H72V184z"/>
						<path d="M160,232h64c4.4,0,8-3.6,8-8v-48c0-4.4-3.6-8-8-8h-64c-4.4,0-8,3.6-8,8v48C152,228.4,155.6,232,160,232z
							 M216,216h-16v-32h16V216z M168,184h16v32h-16V184z"/>
						<path d="M498.3,256.3L264,186v-10h56c17.6,0,32-14.4,32-32c0-14.9-10.2-27.4-24-31c0-0.3,0-0.7,0-1
							c0-22.1-17.9-40-40-40c-16.2,0-30.5,9.7-36.7,24.3c-4.3,0.5-8.3,1.7-12.2,3.5l-89.5-89.5c-3.1-3.1-8.2-3.1-11.3,0l-112,112
							c-1.5,1.5-2.3,3.5-2.3,5.7v328h-8c-4.4,0-8,3.6-8,8v32c0,4.4,3.6,8,8,8h480c4.4,0,8-3.6,8-8v-32c0-4.4-3.6-8-8-8h-8V310l5.7,1.7
							c0.8,0.2,1.5,0.3,2.3,0.3c1.7,0,3.4-0.5,4.8-1.6c2-1.5,3.2-3.9,3.2-6.4v-40C504,260.5,501.7,257.4,498.3,256.3z M248,136v112H40V136
							H248z M248,296h-16v-32h16V296z M88,264v32H72v-32H88z M104,264h16v32h-16V264z M136,264h16v32h-16V264z M168,264h16v32h-16V264z
							 M200,264h16v32h-16V264z M56,264v32H40v-32H56z M248,312v16H40v-16H248z M255.5,112c0.3,0,1,0.1,1.3,0.1c3.9,0.4,7.2-2.4,8.1-6
							C267.6,95.4,277.1,88,288,88c13.2,0,24,10.8,24,24c0,1.8-0.3,3.7-0.9,6.1c-0.6,2.5-0.1,5.1,1.5,7c1.6,2,4.1,3.2,6.6,3
							c0.5,0,0.9-0.1,0.9-0.1c8.8,0,16,7.2,16,16s-7.2,16-16,16h-56v-32c0-2.1-0.8-4.2-2.3-5.7l-10-10C253,112.1,254.2,112,255.5,112
							L255.5,112z M144,27.3l92.7,92.7H51.3L144,27.3z M40,344h208v112h-48v-72c0-4.4-3.6-8-8-8H96c-4.4,0-8,3.6-8,8v72H40V344z M104,456
							v-64h32v64H104z M152,392h32v64h-32V392z M488,488H24v-16h464V488z M440,360H296v-16h144V360z M296,376h144v16H296V376z M296,408
							h144v48H296V408z M472,456h-16V336c0-4.4-3.6-8-8-8H288c-4.4,0-8,3.6-8,8v120h-16V242.8l208,62.4V456z M488,293.2L264,226v-23.3
							L488,270V293.2z"/>
							<path d="M400,112h64c22.1,0,40-17.9,40-40c0-20.5-15.5-37.4-35.3-39.7C462.5,17.7,448.2,8,432,8c-22.1,0-40,17.9-40,40
							c0,0.3,0,0.7,0,1c-13.8,3.6-24,16.1-24,31C368,97.6,382.4,112,400,112z M399.5,64c0.3,0,1.1,0.1,1.3,0.1c2.5,0.2,5-1,6.6-3
							c1.6-2,2.1-4.6,1.5-7c-0.6-2.3-0.9-4.3-0.9-6.1c0-13.2,10.8-24,24-24c10.9,0,20.4,7.4,23.2,18.1c0.9,3.7,4.3,6.2,8.1,6
							c0.4,0,0.9-0.1,0.8-0.1c13.2,0,24,10.8,24,24s-10.8,24-24,24h-64c-8.8,0-16-7.2-16-16S391.2,64,399.5,64L399.5,64z"/>
							</g>
						</svg>
                        <p className="d-block d-sm-block d-md-none">Individual / Villa</p>
                      </div>
                      <p className="d-none d-sm-none d-md-block">Individual / Villa</p>
                    </a>
                  </li>
                </ul>
				{ this.state.propertyshowhide==true ? 
					<div className="listed-contents">	
						<ul className="list-unstyled d-inline-flex">
							<li>
								<input type="radio" id="1 RK" name="bhktype"  value="1 RK" onChange={ (e) => this.handleChangebhktype(e)} />
								<label for="1 RK">1 RK</label>	
							</li>
							<li>
								<input type="radio" id="1 BHK" name="bhktype" value="1 BHK"   onChange={(e) => this.handleChangebhktype(e)}/>
								<label for="1 BHK" >1 BHK</label>
							</li>
							<li>
								<input type="radio" id="2 BHK" name="bhktype" value="2 BHK"   onChange={(e) => this.handleChangebhktype(e)}/>
								<label for="2 BHK" >2 BHK</label>
							</li>
							<li>
								<input type="radio" id="3 BHK" name="bhktype" value="3 BHK"   onChange={(e) => this.handleChangebhktype(e)}/>
								<label for="3 BHK" >3 BHK</label>
							</li>
							<li>
								<input type="radio" id="4 BHK" name="bhktype" value="4 BHK"   onChange={(e) => this.handleChangebhktype(e)}/>
								<label for="4 BHK" >4 BHK</label>
							</li>
							<li>
								<input type="radio" id="4+ BHK" name="bhktype" value="4+ BHK"   onChange={(e) => this.handleChangebhktype(e)}/>
								<label for="4+ BHK" >4+ BHK</label>
							</li>
						</ul>
					</div>						  
				:null}
              </div>
            </div>
           
            <div className={classNames({ 'prevslideeffect':$this.state.moveright==true && $this.state.sliderindex === 3 , 'item': true, 'displayhide': true, 'displayshowactive': $this.state.sliderindex === 3,"nextslideeffect": $this.state.moveleft==true && $this.state.sliderindex === 3 })}>
              <div className="banner-group">
                <h4>My preferred location is</h4>
                <div className="listed-contents">
                  <div className="input-group">
				  {/* <input type="text" className="form-control" placeholder="Enter Your Localities" /> */}
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
												placeholder: 'Search upto only one localities ...',
												className: 'location-search-input',
												name : 'user_area', 
												disabled:($this.state.MultipleArea.length > 0) ? "disabled" : "",
												
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
                    <div className="input-group-append">
                      <button className="btn" onClick={this.HomeSearchEvent} type="button"><i className="fas fa-home"></i> <span>Show My House</span></button>
                    </div>
                  </div>
                </div>		
				{ this.state.MultipleArea.length > 0 ?
					<div className="selectedLocation">
						<ul className="list-unstyled d-inline-flex">
						{ this.state.MultipleArea.map(function(item) {
							return(<li>{item}<i onClick={() => $this.setState({MultipleArea: [] }) } className="fas fa-times"></i></li>);
							})
						}
						</ul>
					</div>
				: null }
              </div>
            </div>
			<div className="banner-btns">
				<button className={classNames({ 'banner-btn1':true,'opacityadd': $this.state.sliderindex === 1 })}  onClick={this.PrevButtonEvent} ><i class="fas fa-chevron-left"></i></button>
				<button   className={classNames({ 'banner-btn2':true, 'opacityadd':$this.state.sliderindex===3 })}  onClick={this.NextButtonEvent } ><i class="fas fa-chevron-right"></i></button>
			</div>
			{/* </OwlCarousel> */ }
      </div>
    </div>    
	)
  }
}

export default SearchSection;
