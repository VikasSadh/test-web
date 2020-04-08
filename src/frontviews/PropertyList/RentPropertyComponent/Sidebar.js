import React, { Component } from 'react';
import {useAccordionToggle ,Accordion, Card} from 'react-bootstrap';

class Sidebar extends Component {
 constructor(props) {
    super(props);	
	this.state = { fields:{pet_type:[],tenant_type:[],food_type:[],parking:[],property_availability:[],furnising_type:[]},bhktype:[] }
	this.handleChange = this.handleChange.bind(this);
 }
 componentWillMount() {
	 let fields = this.state.fields;
	if(this.props.Searchdataprops.bhktype !='' && this.props.Searchdataprops.bhktype!=undefined) {
				var bhktypeArr = this.props.Searchdataprops.bhktype.split(','); 
					fields['bhktype'] = bhktypeArr;
					fields['property_price_type'] ='Rent';
					this.setState({fields});
					
				}
 }
 componentDidUpdate(prevProps, prevState) {
	// Searchdataprops
	// console.log("sidebar"); console.log(prevProps); console.log(this.props.Searchdataprops);

 }
 
 
  handleChange(e,field_info,id,keyname) {
	  let $this = this;
		let fields = this.state.fields;
			//console.log(e.target);
	   if(field_info==undefined) {
		
						if(e.target.type=='checkbox') {
									if(keyname=='bhktype' || keyname=='furnising_type' || keyname=='property_availability' || keyname=='parking' || keyname=='food_type' || keyname=='tenant_type' || keyname=='pet_type')	{	
											e.target.checked ?  fields[keyname][id] =  e.target.value :  fields[keyname] = fields[keyname].filter(function(val) { return val!==e.target.value}) ; 
										}
						} else {
								
								fields[e.target.name] = e.target.value; 
						}
			
			}
			
		this.setState({ fields });	
		this.props.PropsFilterEvent(fields);	
  }
render() {
	return (
        <div className="listing-sidebar">
			<div id="accordion">
				<Accordion defaultActiveKey="0">
				  <Card className="card1">
					<Accordion.Toggle as={Card.Header} eventKey="0">
						Filter Search
					</Accordion.Toggle>
					<Accordion.Collapse eventKey="0">
						<Card.Body>							
						  <div className="sidebar-filters">
							<h4><a href="javascript:void(0);" className="btn">Go For</a></h4>
							<div className="listing-options">
							  <ul className="row list-unstyled">
								<li className="col-6 pr-0">
									<input type="radio" id="Rent" name="property_price_type"  checked={ this.state.fields.property_price_type==='Rent' ? true : false } value="Rent" onChange={this.handleChange} />
									<label for="Rent" >Rent</label>
								</li>
								<li className="col-6 pl-0">
									<input type="radio" id="Lease" name="property_price_type" checked={ this.state.fields.property_price_type==='Lease' ? true : false } value="Lease"  onChange={this.handleChange} />
									<label for="Lease" >Lease</label>
								</li>
							  </ul>
							</div>
						  </div>
						  <div className="sidebar-filters">
							<h4><a href="javascript:void(0);" className="btn">Property Type</a></h4>
							<div className="listing-options">
							 <ul className="row list-unstyled">									 
								<li className="col-4 pr-0">
									<input type="checkbox" id="1RK" name="bhktype"  checked={this.state.fields.bhktype.includes('1 RK')} value="1 RK"  onChange={(e) => this.handleChange(e,undefined,1,'bhktype')} />
									<label for="1RK" >1RK</label>
								</li>
								<li className="col-4 no-padding">
									<input type="checkbox" id="1BHK" name="bhktype" checked={this.state.fields.bhktype.includes('1 BHK')} value="1 BHK"  onChange={(e) => this.handleChange(e,undefined,2,'bhktype')} />
									<label for="1BHK" >1BHK</label>
								</li>
								<li className="col-4 pl-0">
									<input type="checkbox" id="2BHK" name="bhktype" checked={this.state.fields.bhktype.includes('2 BHK')}value="2 BHK" onChange={(e) => this.handleChange(e,undefined,3,'bhktype')} />
									<label for="2BHK" >2BHK</label>
								</li>
								<li className="col-4 pr-0">
									<input type="checkbox" id="3BHK" name="bhktype" checked={this.state.fields.bhktype.includes('3 BHK')} value="3 BHK" onChange={(e) => this.handleChange(e,undefined,4,'bhktype')} />
									<label for="3BHK" >3BHK</label>
								</li>
								<li className="col-4 no-padding">
									<input type="checkbox" id="4BHK" name="bhktype" checked={this.state.fields.bhktype.includes('4 BHK')} value="4 BHK" onChange={(e) => this.handleChange(e,undefined,5,'bhktype')} />
									<label for="4BHK" >4BHK</label>
								</li>
								<li className="col-4 pl-0">
									<input type="checkbox" id="4+BHK" name="bhktype" checked={this.state.fields.bhktype.includes('4+ BHK')} value="4+ BHK" onChange={(e) => this.handleChange(e,undefined,6,'bhktype')} />
									<label for="4+BHK" >4+BHK</label>
								</li>
							  </ul>
							</div>
						  </div>    
						  { /*<div className="sidebar-filters">
							<h4><a href="javascript:void(0);" className="btn">Pricing</a></h4>
							<div className="listing-options inc_dec">
							  <ul className="list-unstyled">
								<li>
								  <div className="input-group">
									<label>Min Price</label>
									<span className="input-group-btn">
									  <button type="button" className="minprice-left-minus btn"  data-type="minus" data-field="">
										<i className="fas fa-minus-circle"></i>
									  </button>
									</span>
									<input type="text" id="minprice" name="minprice" className="form-control input-number" value="6000" />
									<span className="input-group-btn inc-plus-btn">
									  <button type="button" className="minprice-right-plus btn" data-type="plus" data-field="">
										<i className="fas fa-plus-circle"></i>
									  </button>
									</span>
								  </div>
								</li>
								<li>                              
								  <div className="input-group">
									<label>Max Price</label>
									<span className="input-group-btn">
									  <button type="button" className="maxprice-left-minus btn"  data-type="minus" data-field="">
										<i className="fas fa-minus-circle"></i>
									  </button>
									</span>
									<input type="text" id="maxprice" name="maxprice" className="form-control input-number" value="25000" />
									<span className="input-group-btn inc-plus-btn">
									  <button type="button" className="maxprice-right-plus btn" data-type="plus" data-field="">
										<i className="fas fa-plus-circle"></i>
									  </button>
									</span>
								  </div>
								</li>
							  </ul>                          
							</div>
						  </div> */ }
						  <div className="sidebar-filters">
							<h4><a href="javascript:void(0);" className="btn">Furnishing</a></h4>
							<div className="listing-options">
							<ul className="row list-unstyled">									 
								<li className="col-12 pr-0">
									<input type="checkbox" id="1" name="furnising_type" checked={this.state.fields.furnising_type.includes('1')} value="1" onChange={(e) => this.handleChange(e,undefined,1,'furnising_type')} />
									<label for="1" >Fully Furnished</label>
								</li>
								<li className="col-12 pr-0">
									<input type="checkbox" id="2" name="furnising_type" checked={this.state.fields.furnising_type.includes('2')} value="2" onChange={(e) => this.handleChange(e,undefined,2,'furnising_type')} />
									<label for="2" >Semi Furnished</label>
								</li>
								<li className="col-12 pr-0">
									<input type="checkbox" id="3" name="furnising_type" checked={this.state.fields.furnising_type.includes('3')} value="3"  onChange={(e) => this.handleChange(e,undefined,3,'furnising_type')} />
									<label for="3" >Unfurnished</label>
								</li>
								
							  </ul>		
							  
							</div>
						  </div> 
						  <div className="sidebar-filters">
							<h4><a href="javascript:void(0);" className="btn">Availability</a></h4>
							<div className="listing-options">
							  <ul className="list-unstyled row">
								<li className="col-6 pr-0">
									<input type="checkbox" id="Ready to move" name="property_availability" checked={this.state.fields.property_availability.includes('Ready to move')} value="Ready to move" onChange={(e) => this.handleChange(e,undefined,1,'property_availability')} />
									<label for="Ready to move" >Immediate</label>
								</li>
								 <li className="col-6 pl-0">
									<input type="checkbox" id="within 15 Days" name="property_availability" checked={this.state.fields.property_availability.includes('within 15 Days')} value="within 15 Days" onChange={(e) => this.handleChange(e,undefined,2,'property_availability')} />
									<label for="within 15 Days" >Within 15 Days</label>
								</li> 
								<li className="col-6 pr-0">
									<input type="checkbox" id="within 30 days" name="property_availability" checked={this.state.fields.property_availability.includes('within 30 days')} value="within 30 days"  onChange={(e) => this.handleChange(e,undefined,3,'property_availability')} />
									<label for="within 30 days" >Within 30 Days</label>
								</li>
								<li className="col-6 pl-0">
									<input type="checkbox" id="After 30 days" name="property_availability" checked={this.state.fields.property_availability.includes('After 30 days')} value="After 30 days" onChange={(e) => this.handleChange(e,undefined,4,'property_availability')} />
									<label for="After 30 days" >After 30 Days</label>
								</li>
							  </ul>
							</div>
						  </div>  
						  <div className="sidebar-filters">
							<h4><a href="javascript:void(0);" className="btn">Parking</a></h4>
							<div className="listing-options">
							  <ul className="list-unstyled row">
								<li className="col-4 pr-0">
									<input type="checkbox" id="Bike" name="parking" checked={this.state.fields.parking.includes('Bike')} value="Bike" onChange={(e) => this.handleChange(e,undefined,1,'parking')} />
									<label for="Bike" >Bike</label>
								</li>
								<li className="col-4 no-padding">
									<input type="checkbox" id="Car" name="parking" checked={this.state.fields.parking.includes('Car')}  value="Car" onChange={(e) => this.handleChange(e,undefined,2,'parking')} />
									<label for="Car" >Car</label>
								</li>
								<li className="col-4 pl-0">
									<input type="checkbox" id="Car & Bike" name="parking" checked={this.state.fields.parking.includes('Car & Bike')}  value="Car & Bike" onChange={(e) => this.handleChange(e,undefined,3,'parking')} />
									<label for="Car & Bike" >Both</label>
								</li>
							  </ul>
							</div>
						  </div>						                        
						</Card.Body>
					</Accordion.Collapse>
					<div className="card-btn">
						<a href="javascript:void(0);" className="btn">Apply Now</a>
				  	</div>
				  </Card>
				  {/*<Card className="card2">
					<Accordion.Toggle as={Card.Header} eventKey="1">
						Advance Filter Search
					</Accordion.Toggle>
					<Accordion.Collapse eventKey="1">
						<Card.Body>							
						  <div className="sidebar-filters">
							<h4><a href="javascript:void(0);" className="btn">Food Prefernce</a></h4>
							<div className="listing-options">
							  <ul className="list-unstyled row">
								<li className="col-6 pr-0">
									<input type="checkbox" id="Veg" name="food_type" checked={this.state.fields.food_type.includes('Veg')}   value="Veg" onChange={(e) => this.handleChange(e,undefined,1,'food_type')} />
									<label for="Veg" >Veg Only</label>
								</li>
								<li className="col-6 pl-0">
									<input type="checkbox" id="Non Veg" name="food_type" checked={this.state.fields.food_type.includes('Non Veg')} value="Non Veg" onChange={(e) => this.handleChange(e,undefined,2,'food_type')} />
									<label for="Non Veg" >Non Veg</label>
								</li>
							  </ul>
							</div>
						  </div>    
						  <div className="sidebar-filters">
							<h4><a href="javascript:void(0);" className="btn">Preferred Tenants</a></h4>
							<div className="listing-options">
							  <ul className="list-unstyled row">
								<li className="col-6 pr-0">
									<input type="checkbox" id="Family" name="tenant_type" checked={this.state.fields.tenant_type.includes('Family')} value="Family" onChange={(e) => this.handleChange(e,undefined,1,'tenant_type')} />
									<label for="Family" >Family</label>
								</li>
								<li className="col-6 pl-0">
									<input type="checkbox" id="Bachelors" name="tenant_type" checked={this.state.fields.tenant_type.includes('Bachelors')} value="Bachelors" onChange={(e) => this.handleChange(e,undefined,2,'tenant_type')} />
									<label for="Bachelors" >Bachelors</label>
								</li>
							  </ul>
							</div>
						  </div> 
						  <div className="sidebar-filters">
							<h4><a href="javascript:void(0);" className="btn">Area Sq.ft</a></h4>
							<div className="listing-options inc_dec">
							  <ul className="list-unstyled">
								<li>                              
								  <div className="input-group">
									<label>Min area</label>
									<span className="input-group-btn">
									  <button type="button" className="minarea-left-minus btn"  data-type="minus" data-field="">
										<i className="fas fa-minus-circle"></i>
									  </button>
									</span>
									<input type="text" id="minarea" name="minarea" className="form-control input-number" value="500" />
									<span className="input-group-btn inc-plus-btn">
									  <button type="button" className="minarea-right-plus btn" data-type="plus" data-field="">
										<i className="fas fa-plus-circle"></i>
									  </button>
									</span>
								  </div>
								</li>
								<li>                              
								  <div className="input-group">
									<label>Max area</label>
									<span className="input-group-btn">
									  <button type="button" className="maxarea-left-minus btn"  data-type="minus" data-field="">
										<i className="fas fa-minus-circle"></i>
									  </button>
									</span>
									<input type="text" id="maxarea" name="maxarea" className="form-control input-number" value="1500" />
									<span className="input-group-btn inc-plus-btn">
									  <button type="button" className="maxarea-right-plus btn" data-type="plus" data-field="">
										<i className="fas fa-plus-circle"></i>
									  </button>
									</span>
								  </div>
								</li>
							  </ul>                          
							</div>
						  </div>
						  <div className="sidebar-filters">
							<h4><a href="javascript:void(0);" className="btn">Pet Preferences</a></h4>
							<div className="listing-options">
							  <ul className="list-unstyled row">
								<li className="col-6 pr-0">
									<input type="checkbox" id="Not Allowed" name="pet_type" checked={this.state.fields.pet_type.includes('Not Allowed')} value="Not Allowed" onChange={(e) => this.handleChange(e,undefined,1,'pet_type')} />
									<label for="Not Allowed" >Not Allowed</label>
								</li>
								<li className="col-6 pl-0">
									<input type="checkbox" id="Allowed" name="pet_type" checked={this.state.fields.pet_type.includes('Allowed')} value="Allowed" onChange={(e) => this.handleChange(e,undefined,2,'pet_type')} />
									<label for="Allowed" >Allowed</label>
								</li>
							  </ul>
							</div>
						  </div>  
						  <div className="sidebar-filters">
							<h4><a href="javascript:void(0);" className="btn">Floor Preference</a></h4>
							<div className="listing-options">
							  <ul className="list-unstyled row">
								<li className="col-6 pr-0">
									<input type="checkbox" id="Ground Floor" name="Floor Preference" value="Ground Floor"  />
									<label for="Ground Floor" >Ground Floor</label>
								</li>
								<li className="col-6 pl-0">
									<input type="checkbox" id="Any Floor" name="Floor Preference" value="Any Floor"  />
									<label for="Any Floor" >Any Floor</label>
								</li>
							  </ul>
							</div>
						  </div>  
						  <div className="sidebar-filters">
							<h4><a href="javascript:void(0);" className="btn">Property Age</a></h4>
							<div className="listing-options">
							  <ul className="list-unstyled row">
								<li className="col-6 pr-0">
									<input type="checkbox" id="Lessthan 1 year" name="Property Age" value="Lessthan 1 year"  />
									<label for="Lessthan 1 year" >&lt; 1 year</label>
								</li>
								<li className="col-6 pl-0">
								    <input type="checkbox" id="Lessthan 3 year" name="Property Age" value="Lessthan 3 year"  />
									<label for="Lessthan 3 year" >&lt; 3 year</label>
								</li>
								<li className="col-6 pr-0">
								    <input type="checkbox" id="Lessthan 5 year" name="Property Age" value="Lessthan 5 year"  />
									<label for="Lessthan 5 year" >&lt; 5 year</label>
								</li>
								<li className="col-6 pl-0">
								    <input type="checkbox" id="Lessthan 10 year" name="Property Age" value="Lessthan 10 year"  />
									<label for="Lessthan 10 year" >&lt; 10 year</label>
								</li>
							  </ul>
							</div>
						  </div>    
						  <div className="sidebar-filters">
							<h4><a href="javascript:void(0);" className="btn">Amenities</a></h4>
							<div className="listing-options">
							  <ul className="list-unstyled row">
								<li className="col-6 pr-0">
									<input type="checkbox" id="Gym" name="Amenities" value="Gym"  />
									<label for="Gym" >Gym</label>
								</li>
								<li className="col-6 pl-0">
									<input type="checkbox" id="Lift" name="Amenities" value="Lift"  />
									<label for="Lift" >Lift</label>
								</li>
								<li className="col-6 pr-0">
									<input type="checkbox" id="Club House" name="Amenities" value="Club House"  />
									<label for="Club House" >Club House</label>
								</li>
								<li className="col-6 pl-0">
									<input type="checkbox" id="CCTV" name="Amenities" value="CCTV"  />
									<label for="CCTV" >CCTV</label>
								</li>
								<li className="col-6 pr-0">
									<input type="checkbox" id="Fire Safety" name="Amenities" value="Fire Safety"  />
									<label for="Fire Safety" >Fire Safety</label>
								</li>
								<li className="col-6 pl-0">
									<input type="checkbox" id="Intercom" name="Amenities" value="Intercom"  />
									<label for="Intercom" >Intercom</label>
								</li>
								<li className="col-6 pr-0">
									<input type="checkbox" id="Laundry Service" name="Amenities" value="Laundry Service"  />
									<label for="Laundry Service" >Laundry Service</label>
								</li>
								<li className="col-6 pl-0">
									<input type="checkbox" id="Swimming Pool" name="Amenities" value="Swimming Pool"  />
									<label for="Swimming Pool" >Swimming Pool</label>
								</li>
								<li className="col-6 pr-0">
									<input type="checkbox" id="Rain Water Harvest" name="Amenities" value="Rain Water Harvest"  />
									<label for="Rain Water Harvest" >Rain Water Harvest</label>
								</li>
							  </ul>
							</div>
						  </div>                      
						</Card.Body>
					</Accordion.Collapse>
					<div className="card-btn">
						<a href="javascript:void(0);" className="btn">Apply Now</a>
					</div>
				  </Card> */ }
				</Accordion> 				
				{/* <div className="apply-btn">
				  	<a href="javascript:void(0);" className="btn">Apply Now <i className="far fa-arrow-alt-circle-right"></i></a>
				</div> */ }
			 </div>
		</div>    
	)
  }
}

export default Sidebar;
