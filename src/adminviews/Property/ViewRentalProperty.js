import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Badge, Pagination,  Card, CardBody, CardHeader, Col, Row,FormGroup, Label,Input } from 'reactstrap';
import NumberFormat from 'react-number-format';

import ReactPlayer from 'react-player'
import Lightbox from 'react-image-lightbox';
import "react-image-lightbox/style.css";

import axios from 'axios';
const API_URL = process.env.REACT_APP_API_URL;
// const image_path = 'http://localhost:6001/uploads/property/rental/thumb';
// const video_path = 'http://localhost:6001/api/admin/createvideoplay?video_name';
const image_path = API_URL+'/uploads/property/rental/thumb';
const video_path = API_URL+'/api/admin/createvideoplay?video_name';

class ViewRentalProperty extends Component {
 constructor(props) {
		super(props);
		this.state = {   photoIndex: 0,isOpen: false, PropertyData:'',basic_information:'',property_price:'',property_location:'',property_attr_detail:'',property_amenities:'',property_furnshing:'',property_images:'',property_details:'',PropertyImages:'',PropertyVideos:'' }
	}
  componentDidMount() {
	 // console.log('test');
	let $this  = this;
	console.log(this.props.match.params.property_id);
	let property_id = this.props.match.params.property_id;  
		let PostData = { property_id: property_id };
		axios.post(API_URL+'/api/admin/getrentalpropertydetails',PostData).then(function(response){
				 if(response.data.Statuscode==200) {
						let resData = response.data.Data;
						let basic_information = resData.basic_information[0];
						let property_price = resData.property_price[0];
						let property_location = resData.property_location[0];
						let property_details = resData.property_details[0];
						let property_attr_detail = resData.property_attr_detail;
						let property_amenities = resData.property_attr_amenities;
						let property_furnshing = resData.property_furnshing;
						let property_images = resData.property_images;
						let Images = [];
						let video_url ='';
						// console.log(response.data.Data);
						// console.log(response.data.Data.basic_information);
						property_images.map(item => {
								
								if(item.property_image_type==0) {
									let image_url = image_path+"/"+item.property_image_thumb;
										Images.push(image_url);
								}else{
									 video_url = video_path+"="+item.property_video;
								
								}
								
								
							});
							console.log(Images);
						
						$this.setState({  PropertyData: resData,basic_information:basic_information,property_price:property_price,property_location:property_location,property_attr_detail:property_attr_detail,property_amenities:property_amenities,property_furnshing:property_furnshing,property_images:property_images,property_details:property_details,PropertyImages:Images,PropertyVideos:video_url});
								
				 }
		}).catch(function(error){  console.log(error); });
		
  }
  
  render() {
		const { photoIndex, isOpen } = this.state;
		const paymentmodeObject = { "1": "Cash", "2": "Check",  "3": "Online", }
		const paymentstatusObject = { "1": "Success", "2": "Pending" }
		const packageObject = { "1": "Trial", "2": "Silver"  }

    return (
		<div className="animated fadeIn">
			<Row>
				<Col lg={12}>
					<Card>
						<CardHeader>			  
							<strong><i className="icon-list pr-1"></i>View Property</strong>
						</CardHeader>
						<CardBody>
							<Row>					
								<Col md="12">
									<Card className="view-prop-pg">
										<CardHeader>Basic Information</CardHeader>
										<CardBody>		
											<Row>
												<Col md="4">
													<ul className="list-unstyled d-inline-flex">
														<li>PropertyId:</li>
														<li>{this.state.basic_information.property_regno}</li>
													</ul>
												</Col>
												<Col md="4">
													<ul className="list-unstyled d-inline-flex">
														<li>Business Type:</li>
														<li>{this.state.basic_information.business_name}</li>
													</ul>
												</Col>
												<Col md="4">
													<ul className="list-unstyled d-inline-flex">
														<li>Property Type: </li>
														<li>{this.state.basic_information.property_type_name}</li>
													</ul>
												</Col>
											</Row>
											<Row>
												<Col md="4">
													<ul className="list-unstyled d-inline-flex">
														<li>BHK Type:</li>
														<li>{this.state.basic_information.bhk_type}</li>
													</ul>
												</Col>
												<Col md="4">
													<ul className="list-unstyled d-inline-flex">
														<li>Property Age:</li>
														<li>{this.state.property_details.property_age}</li>
													</ul>
												</Col>
												<Col md="4">
													<ul className="list-unstyled d-inline-flex">
														<li>Property Name:</li>
														<li>{this.state.basic_information.property_name}</li>
													</ul>
												</Col>
											</Row>
											<h5>Propert Details:</h5>
											<Row>
												<Col md="4">
													<ul className="list-unstyled d-inline-flex">
														<li>Area Type:</li>
														<li>{this.state.property_details.area_type}</li>
													</ul>
												</Col>
												<Col md="4">
													<ul className="list-unstyled d-inline-flex">
														<li>Total Area:</li>
														<li>{this.state.property_details.total_area}</li>
													</ul>
												</Col>
												<Col md="4">
													<ul className="list-unstyled d-inline-flex">
														<li>Facing Direction:</li>
														<li>{this.state.property_details.facting_name}</li>
													</ul>
												</Col>
											</Row>
											<Row>
												<Col md="4">
													<ul className="list-unstyled d-inline-flex">
														<li>Tenant Type:</li>
														<li>{this.state.property_details.tenant_type ? this.state.property_details.tenant_type : '-'  } </li>
													</ul>
												</Col>
												<Col md="4">
													<ul className="list-unstyled d-inline-flex">
														<li>No.of Floors:</li>
														<li>{this.state.property_details.no_of_floors}</li>
													</ul>
												</Col>
												<Col md="4">
													<ul className="list-unstyled d-inline-flex">
														<li>Located At:</li>
														<li>{this.state.property_details.located_at}</li>
													</ul>
												</Col>
											</Row>
											<Row>
												<Col md="4">
													<ul className="list-unstyled d-inline-flex">
														<li>No.of Restrooms:</li>
														<li>{this.state.property_details.no_of_restrooms}</li>
													</ul>
												</Col>
												<Col md="4">
													<ul className="list-unstyled d-inline-flex">
														<li>Restrooms Type:</li>
														<li>{this.state.property_details.restrooms_type}</li>
													</ul>
												</Col>
												<Col md="4">
													<ul className="list-unstyled d-inline-flex">
														<li>Pet:</li>
														<li>{this.state.property_details.pet_type}</li>
													</ul>
												</Col>
											</Row>
											<Row>
												<Col md="4">
													<ul className="list-unstyled d-inline-flex">
														<li>Food:</li>
														<li>{this.state.property_details.food_type}</li>
													</ul>
												</Col>
												<Col md="4">
													<ul className="list-unstyled d-inline-flex">
														<li>No.of Balcony:</li>
														<li>{this.state.property_details.no_of_balcony }</li>
													</ul>
												</Col>
												<Col md="4">
													<ul className="list-unstyled d-inline-flex">
														<li>Add Rooms:</li>
														<li> {this.state.property_details.property_rooms }	 </li>
													</ul>
												</Col>
											</Row>
											<Row>
												<Col md="4">
													<ul className="list-unstyled d-inline-flex">
														<li>Parking:</li>
														<li>{this.state.property_details.parking}</li>
													</ul>
												</Col>
												<Col md="4">
													<ul className="list-unstyled d-inline-flex">
														<li>No.of Parking:</li>
														<li>{this.state.property_details.no_of_parking}</li>
													</ul>
												</Col>
												<Col md="4">
													<ul className="list-unstyled d-inline-flex">
														<li>Parking Type:</li>
														<li>{this.state.property_details.parking_type}</li>
													</ul>
												</Col>
											</Row>
											<Row>
												{ this.state.property_attr_detail.length > 0 ?
														this.state.property_attr_detail.map(item => {
																return (<Col md="4">
																<ul className="list-unstyled d-inline-flex">
																	<li>{item.attribute_name}:</li>
																	<li><i className="fa fa-check"></i></li>
																</ul>
																</Col>);
													})
											: '' }
											
											</Row>
											<Row>
												<Col md="4">
													<ul className="list-unstyled d-inline-flex">
														<li>Furnished: </li>
														<li>{this.state.property_details.furnishing_name} </li>
													</ul>
												</Col>
													{ this.state.property_furnshing.length > 0 ?
														this.state.property_furnshing.map(item => {
																return (<Col md="4">
																<ul className="list-unstyled d-inline-flex">
																	<li>{item.furnishing_name}:</li>
																		{item.type==1 ?  item.furnishing_qty : <li><i className="fa fa-check"></i></li> }
																	
																</ul>
																</Col>);
													})
											: '' }
											</Row>
											<Row>
													<Col md="12">
													<ul className="list-unstyled d-inline-flex">
														<li>About Property: </li>
														<li>{this.state.basic_information.about_property} </li>
													</ul>
													
													</Col>
											</Row>
											
										</CardBody>
									</Card>
								</Col>				
								<Col md="12">
									<Card className="view-prop-pg">
										<CardHeader>Owner Details</CardHeader>
										<CardBody>		
											<Row>
												<Col md="4">
													<ul className="list-unstyled d-inline-flex">
														<li>Owner name  </li>
														<li>{this.state.basic_information.user_fullname}</li>
													</ul>
												</Col>
												<Col md="4">
													<ul className="list-unstyled d-inline-flex">
														<li>Phone No.</li>
														<li>{this.state.basic_information.user_mobileno}</li>
													</ul>
												</Col>
												<Col md="4">
													<ul className="list-unstyled d-inline-flex">
														<li>Area: </li>
														<li>{this.state.basic_information.user_emailid}</li>
													</ul>
												</Col>
											</Row>
											<Row>
												<Col md="4">
													<ul className="list-unstyled d-inline-flex">
														<li>Street:</li>
														<li>{this.state.basic_information.address}</li>
													</ul>
												</Col>
												<Col md="4">
													<ul className="list-unstyled d-inline-flex">
														<li>Pincode: </li>
														<li>{this.state.basic_information.pincode}</li>
													</ul>
												</Col>
												<Col md="4">
													<ul className="list-unstyled d-inline-flex">
														<li>Area: </li>
														<li>{this.state.basic_information.localities}</li>
													</ul>
												</Col>
											</Row>
											<Row>
												<Col md="4">
													<ul className="list-unstyled d-inline-flex">
														<li>City: </li>
														<li>{this.state.basic_information.city_name}</li>
													</ul>
												</Col>
												<Col md="4">
													<ul className="list-unstyled d-inline-flex">
														<li>State: </li>
														<li>{this.state.basic_information.state_name}</li>
													</ul>
												</Col>
											</Row>
										</CardBody>
									</Card>
									<Card className="view-prop-pg">
										<CardHeader>Locality Details</CardHeader>
										<CardBody>		
											<Row>
												<Col md="4">
													<ul className="list-unstyled d-inline-flex">
														<li>State:</li>
														<li>{this.state.property_location.state_name}</li>
													</ul>
												</Col>
												<Col md="4">
													<ul className="list-unstyled d-inline-flex">
														<li>City:</li>
														<li>{this.state.property_location.city_name}</li>
													</ul>
												</Col>
												<Col md="4">
													<ul className="list-unstyled d-inline-flex">
														<li>Area: </li>
														<li>{this.state.property_location.localities}</li>
													</ul>
												</Col>
											</Row>
											<Row>
												<Col md="4">
													<ul className="list-unstyled d-inline-flex">
														<li>Street:</li>
														<li>{this.state.property_location.address}</li>
													</ul>
												</Col>
												<Col md="4">
													<ul className="list-unstyled d-inline-flex">
														<li>Pincode: </li>
														<li>{this.state.property_location.pincode}</li>
													</ul>
												</Col>
												<Col md="4">
													<ul className="list-unstyled d-inline-flex">
														<li>Landmark: </li>
														<li>{this.state.property_location.land_mark}</li>
													</ul>
												</Col>
											</Row>
											<Row>
												<Col md="4">
													<ul className="list-unstyled d-inline-flex">
														<li>Latitude: </li>
														<li>{this.state.property_location.latitude}</li>
													</ul>
												</Col>
												<Col md="4">
													<ul className="list-unstyled d-inline-flex">
														<li>Longitude: </li>
														<li>{this.state.property_location.longitude}</li>
													</ul>
												</Col>
											</Row>
										</CardBody>
									</Card>
									<Card className="view-prop-pg">
										<CardHeader>Property Price</CardHeader>
										<CardBody>		
											<Row>
												<Col md="4">
													<ul className="list-unstyled d-inline-flex">
														<li>Building For: </li>
														<li>{this.state.property_price.property_price_type} </li>
													</ul>
												</Col>
												<Col md="4">
													<ul className="list-unstyled d-inline-flex">
														<li>Rent (Rs.): </li>
														<li><NumberFormat value={this.state.property_price.property_price} displayType={'text'} thousandSeparator={true} thousandsGroupStyle="lakh" /></li>
													</ul>
												</Col>
												<Col md="4">
													<ul className="list-unstyled d-inline-flex">
														<li>Negotiable: </li>
														{this.state.property_price.property_price_negotiable == 'Yes' ?
														<li><i class="fa fa-check"></i></li>
														: <li><i class="fa fa-close"></i></li> }
													</ul>
												</Col>
											</Row>
											<Row>
												<Col md="4">
													<ul className="list-unstyled d-inline-flex">
														<li>Advance (Rs.): </li>
														<li><NumberFormat value={this.state.property_price.property_advance_price} displayType={'text'} thousandSeparator={true} thousandsGroupStyle="lakh" /></li>
													</ul>
												</Col>
												<Col md="4">
													<ul className="list-unstyled d-inline-flex">
														<li>Negotiable: </li>
														
														{ this.state.property_price.property_advance_price_negotiable=='Yes' ?
															<li><i class="fa fa-check"></i></li>
														: <li><i class="fa fa-close"></i></li> }
														
													</ul>
												</Col>
												<Col md="4">
													<ul className="list-unstyled d-inline-flex">
														<li>Water Charges (Rs.): </li>
														<li><NumberFormat value={this.state.property_price.property_water_charge} displayType={'text'} thousandSeparator={true} thousandsGroupStyle="lakh" /> </li>
													</ul>
												</Col>
											</Row>
											<Row>
												<Col md="4">
													<ul className="list-unstyled d-inline-flex">
														<li>EB Charges Per Unit (Rs.): </li>
														{ this.state.property_price.property_eb_type=="Yes" ?
																<li>As per Units</li>
														:
														<li><NumberFormat value={this.state.property_price.property_eb_charge} displayType={'text'} thousandSeparator={true} thousandsGroupStyle="lakh" />  </li>
														} 
													</ul>
												</Col>
												<Col md="4">
													<ul className="list-unstyled d-inline-flex">
														<li>Maintenance: </li>
														<li>{ this.state.property_price.maintenance_type=="1" ?  'Include' : 'Extra' } </li>
													</ul>
												</Col>
												{ this.state.property_price.maintenance_type=="2" ? 
												<Col md="4">
													<ul className="list-unstyled d-inline-flex">
														<li>Maintenancse Charge  </li>
														<li><NumberFormat value={this.state.property_price.property_maintenance_charge} displayType={'text'} thousandSeparator={true} thousandsGroupStyle="lakh" />  </li>
													</ul>
												</Col>
												:null
												}
											</Row>
										</CardBody>
									</Card>
									<Card className="view-prop-pg">
										<CardHeader>Payment</CardHeader>
										<CardBody>		
											<Row>
												<Col md="4">
													<ul className="list-unstyled d-inline-flex">
														<li>Package:  </li>
														<li>{ packageObject[this.state.basic_information.package_id] }</li>
													</ul>
												</Col>
												<Col md="4">
													<ul className="list-unstyled d-inline-flex">
														<li>Payment Status: </li>
														<li>{ paymentstatusObject[this.state.basic_information.payment_status] }</li>
													</ul>
												</Col>
												<Col md="4">
													<ul className="list-unstyled d-inline-flex">
														<li>Payment Mode: </li>
														<li>{ packageObject[this.state.basic_information.payment_mode] }</li>
													</ul>
												</Col>
											</Row>
										</CardBody>
									</Card>
								</Col>
							</Row>
							<Row>					
								<Col md="12">
									<Card className="view-prop-pg">
										<CardHeader>Amenities</CardHeader>
										<CardBody>		
										<Row>
											{ this.state.property_amenities.length > 0 ?
													this.state.property_amenities.map(item => {
																return (<Col md="4">
																<ul className="list-unstyled d-inline-flex">
																	<li>{item.attribute_name}:</li>
																	<li><i className="fa fa-check"></i></li>
																</ul>
																</Col>);
													})
											: '' }
										
										</Row>		
											
										</CardBody>
									</Card>
								</Col>				
								<Col md="12">
									<Card className="view-prop-pg">
										<CardHeader>Image - Video</CardHeader>
										<CardBody>		
											<Row>
												<Col md="6">
													<ul className="list-unstyled">
														<li>Property Image:</li>
														<li></li>
													</ul>
													{ this.state.PropertyImages.length >0 ?
														<button type="button" onClick={() => this.setState({ isOpen: true })}> Property Image View</button>
														: 'No images'
													}			
														{ isOpen && (
															  <Lightbox
																mainSrc={this.state.PropertyImages[photoIndex]}
																nextSrc={this.state.PropertyImages[(photoIndex + 1) % this.state.PropertyImages.length]}
																prevSrc={this.state.PropertyImages[(photoIndex + this.state.PropertyImages.length - 1) % this.state.PropertyImages.length]}
																onCloseRequest={() => this.setState({ isOpen: false })}
																onMovePrevRequest={() =>
																  this.setState({
																	photoIndex: (photoIndex + this.state.PropertyImages.length - 1) % this.state.PropertyImages.length
																  })
																}
																onMoveNextRequest={() =>
																  this.setState({
																	photoIndex: (photoIndex + 1) % this.state.PropertyImages.length
																  })
																}
															  />
															)}

		
												
												</Col>
												<Col md="6">
													<ul className="list-unstyled">
														<li>Property Video:</li>
														<li></li>
													</ul>
													{ this.state.PropertyVideos!='' ? 
															<ReactPlayer  width='150px' height='150px' url={[
															{src: this.state.PropertyVideos }]}  controls   />
													  :
														'No videos'
													}
												</Col>
											</Row>
										</CardBody>
									</Card>
								</Col>
							</Row>  
						</CardBody>
					</Card>
				</Col>
			</Row>
		</div>
    )
  }
}

export default ViewRentalProperty;
