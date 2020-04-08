import React, { Component } from 'react';

import propertyimg1 from '../../../frontscss/img/others/p-img1.jpg';
import propertyimg2 from '../../../frontscss/img/others/p-img2.jpg';
import propertyimg3 from '../../../frontscss/img/others/p-img3.jpg';
import propertyimg4 from '../../../frontscss/img/others/p-img4.jpg';
import propertyimg5 from '../../../frontscss/img/others/p-img5.jpg';

import NumberFormat from 'react-number-format';
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;
const image_path = 'http://localhost:6001/uploads/property/rental/thumb';
const video_path = 'http://localhost:6001/api/admin/createvideoplay?video_name';

class PropertySidebar extends Component {
 constructor(props) {
    super(props);
	this.state = { PropertyData:'',basic_information:'',property_price:'',property_location:'',property_attr_detail:'',property_amenities:'',property_furnshing:'',property_images:'',property_details:'',PropertyImages:'',PropertyVideos:'', }
  
  }
componentWillReceiveProps(nextProps) {
	let $this  = this;
	if(this.props !== nextProps) {
	let property_id = this.props.property_id;
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
						console.log(property_attr_detail);
						
						property_images.map(item => {
								
								if(item.property_image_type==0) {
									let image_url = image_path+"/"+item.property_image_thumb;
										Images.push(image_url);
								}else{
									 video_url = video_path+"="+item.property_image_thumb;
								
								}
								
								
							});
							console.log(Images);
						
						$this.setState({  PropertyData: resData,basic_information:basic_information,property_price:property_price,property_location:property_location,property_attr_detail:property_attr_detail,property_amenities:property_amenities,property_furnshing:property_furnshing,property_images:property_images,property_details:property_details,PropertyImages:Images,PropertyVideos:video_url});
								
				 }
		}).catch(function(error){  console.log(error); });
	}
}
render() {
	return (
        <div className="single-prop-sidebar">
			    <div className="details-card main-details active">
                <h4>Property Details</h4>
                <div className="details-card-info">
                  <div className="row">
                    <ul className="list-unstyled col-6 col-md-12">
                      <li className="list-icon">
                        <svg version="1.1" id="list_ic1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" enableBackground="0 0 512 512">
                          <defs>
                            <linearGradient id="Icons_Color1" gradientTransform="rotate(0)">
                              <stop offset="0"  stopColor="#235d6f" />
                              <stop offset="1" stopColor="#44a57c" />
                            </linearGradient>
                          </defs>
                          <g>
                            <path fill="url('#Icons_Color1')" d="M256,51.2c-75.4,0-136.5,61.1-136.5,136.5S180.6,324.3,256,324.3s136.5-61.1,136.5-136.5C392.4,112.4,331.4,51.3,256,51.2zM256,307.2c-66,0-119.5-53.5-119.5-119.5S190,68.3,256,68.3s119.5,53.5,119.5,119.5C375.4,253.7,321.9,307.1,256,307.2z"/>
                            <path fill="url('#Icons_Color1')" d="M346.3,155.2L267,97.9c-6.3-5.3-15.4-5.4-21.8-0.2l-79.1,48.7c-2.6,1.6-4.1,4.5-4.1,7.5s1.8,5.8,4.5,7.3s5.9,1.4,8.5-0.2l12.6-7.8v94.4c0,9.4,7.6,17.1,17.1,17.1h25.6c9.4,0,17.1-7.6,17.1-17.1v-34.1c0-2.5,1.1-4.9,3.1-6.5s4.5-2.3,7-1.9c4.3,1.1,7.2,5,7,9.4v33.1c0,9.4,7.6,17.1,17.1,17.1h25.6c9.4,0,17.1-7.6,17.1-17.1v-87.1l12.1,8.7c2.5,1.8,5.7,2.1,8.5,0.9c2.8-1.2,4.7-3.9,5-6.9S348.8,157,346.3,155.2zM307.2,247.5h-25.6v-33.1c0.2-12.7-8.8-23.8-21.3-26.3c-7.4-1.3-15.1,0.8-20.8,5.7s-9.1,12-9.1,19.6v34.1h-25.6V145.1c0-0.7-0.2-1.5-0.4-2.2l50.4-31c0.4-0.3,0.9-0.6,1.3-0.9c0.2,0.2,0.5,0.4,0.7,0.6l50.5,36.5L307.2,247.5L307.2,247.5z"/>
                            <path fill="url('#Icons_Color1')" d="M256,0C142,0,68.3,74.6,68.3,190c0,98.9,113.5,243.3,161.9,304.9l5.7,7.2c4.8,6.2,12.3,9.8,20.2,9.8c7.9,0,15.3-3.6,20.2-9.8l5.6-7.2c48.5-61.7,161.9-206.1,161.9-305C443.7,74.6,370,0,256,0zM268.4,484.5l-5.6,7.2c-1.7,2-4.1,3.1-6.7,3.1s-5.1-1.1-6.7-3.1h0l-5.7-7.2C200.3,429.3,85.3,283,85.3,190C85.3,62.5,173.5,17.1,256,17.1S426.7,62.5,426.7,190C426.7,283,311.7,429.4,268.4,484.5z"/>
                          </g>
                        </svg>
                      </li>
                      <li><span>Located at: </span>{this.state.property_details.located_at}/{this.state.property_details.no_of_floors} with Lift</li>
                    </ul>
                    <ul className="list-unstyled col-6 col-md-12">
                      <li className="list-icon">
                        <svg version="1.1" id="list_ic2" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" enableBackground="0 0 512 512">
                          <defs>
                            <linearGradient id="Icons_Color2" gradientTransform="rotate(0)">
                              <stop offset="0"  stopColor="#235d6f" />
                              <stop offset="1" stopColor="#44a57c" />
                            </linearGradient>
                          </defs>
                          <g fill="url('#Icons_Color2')">
                            <path d="M452.8,425.1h-54.5V79.9c0-3.6-2.7-6.6-6.2-7l-184-20.8c-3.8-0.4-7.3,2.3-7.7,6.2c0,0.3,0,0.5,0,0.8v13.8h-79.7c-3.9,0-7,3.1-7,7v345.1H59.2c-3.9,0-7,3.1-7,7s3.1,7,7,7l0,0h141.2v13.8c0,3.9,3.1,7,7,7c0.3,0,0.5,0,0.8,0l183.6-20.7h61.1c3.9,0,7-3.1,7-7S456.7,425.1,452.8,425.1L452.8,425.1zM127.7,86.9h72.7v18h-47.7c-3.9,0-7,3.1-7,7v313.1h-18L127.7,86.9zM159.7,425.1V118.9h40.7v306.1H159.7z M214.3,67l170,19.2v339.6l-170,19.2V67z"/>
                            <path d="M244.5,235.2c-11.5,0-20.8,9.3-20.8,20.8c0,11.5,9.3,20.8,20.8,20.8c11.5,0,20.8-9.3,20.8-20.8l0,0C265.3,244.5,256,235.2,244.5,235.2z M244.5,262.8c-3.8,0-6.8-3.1-6.8-6.8c0-3.8,3.1-6.8,6.8-6.8s6.8,3.1,6.8,6.8C251.3,259.8,248.3,262.8,244.5,262.8z"/>
                          </g>
                        </svg>
                      </li>
                      <li><span>Facing Direction: </span>{this.state.property_details.facting_name}</li>
                    </ul>
                    <ul className="list-unstyled col-6 col-md-12">
                      <li className="list-icon">
                        <svg version="1.1" id="list_ic3" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" enableBackground="0 0 512 512">
                          <defs>
                            <linearGradient id="Icons_Color3" gradientTransform="rotate(0)">
                              <stop offset="0"  stopColor="#235d6f" />
                              <stop offset="1" stopColor="#44a57c" />
                            </linearGradient>
                          </defs>
                          <g fill="url('#Icons_Color3')">
                            <path d="M112,401.4c-8-8-18.6-12.4-30-12.4c-6.7,0-13.1,1.5-18.9,4.5C6,312.6,5.8,201.7,63.6,120.7c3.2-4.5,2.2-10.7-2.3-13.9s-10.7-2.2-13.9,2.3C15.4,153.8-0.9,206.6,0,261.8c0.9,52.5,17.4,102.3,47.8,144.6c-12.1,16.6-10.6,40,4.3,54.9c8.3,8.3,19.1,12.4,30,12.4s21.7-4.1,30-12.4C128.5,444.8,128.5,417.9,112,401.4zM97.9,447.2c-8.7,8.7-22.9,8.7-31.6,0c-8.7-8.7-8.7-22.9,0-31.6c4.2-4.2,9.8-6.6,15.8-6.6s11.6,2.3,15.8,6.6C106.6,424.3,106.6,438.4,97.9,447.2z"/>
                            <path d="M408,451.1c-3.2-4.5-9.5-5.5-14-2.2c-28.6,20.7-60.7,34.3-95.5,40.7c-8.1,1.5-16.3-0.7-22.6-5.9c-6.2-5.2-9.8-12.8-9.8-20.9v-73.3h0.9c11.6,0,21-9.4,21-21v-16.9c33.9-12.9,58-45.8,58-84.1v-47.3c16.1-4.4,28-19.2,28-36.7c0-19.3-14.4-35.2-33-37.7V83.4c0-16.5-13.5-30-30-30s-30,13.5-30,30v62h-50v-62c0-16.5-13.5-30-30-30s-30,13.5-30,30v62.3c-18.6,2.5-33,18.4-33,37.7c0,17.5,11.9,32.3,28,36.7v47.3c0,38.4,24.1,71.2,58,84.1v16.9c0,11.6,9.4,21,21,21h1.1v73.3c0,14.1,6.2,27.3,17,36.3c8.6,7.2,19.4,11,30.4,11c2.8,0,5.7-0.3,8.6-0.8c37.8-6.9,72.6-21.7,103.6-44.1C410.2,461.9,411.2,455.6,408,451.1z M301,83.4c0-5.5,4.5-10,10-10s10,4.5,10,10v62h-20V83.4zM191,83.4c0-5.5,4.5-10,10-10s10,4.5,10,10v62h-20V83.4zM158,183.4c0-9.9,8.1-18,18-18h160c9.9,0,18,8.1,18,18s-8.1,18-18,18H176C166.1,201.4,158,193.3,158,183.4z M186,267.4v-46h140v46c0,38.6-31.4,70-70,70S186,306,186,267.4zM256.4,369.4c-0.1,0-0.2,0-0.3,0s-0.2,0-0.3,0H245c-0.6,0-1-0.4-1-1v-11.8c3.9,0.5,7.9,0.8,12,0.8c4.1,0,8.1-0.3,12-0.8v11.8c0,0.6-0.4,1-1,1H256.4z"/>
                            <path d="M436.8,424c-4-3.7-10.1-3.6-13.9,0.3c-0.1,0.1-0.2,0.2-0.2,0.2c-3.8,4-3.5,10.4,0.5,14.1c1.9,1.8,4.4,2.7,6.8,2.7c2.6,0,5.2-1,7.1-3c0.1-0.1,0.2-0.2,0.2-0.2C441,434.1,440.8,427.8,436.8,424z"/>
                            <path d="M511.3,238.7c-4.5-61.2-30.8-118.9-74.3-162.3C394.3,33.7,337.3,7.5,276.4,2.8c-60.1-4.7-120,11.6-168.6,46c-4.5,3.2-5.6,9.4-2.4,13.9c3.2,4.5,9.4,5.6,13.9,2.4c92.9-65.7,223.4-54.7,303.5,25.5c82.9,82.9,92.9,211.5,23.8,306c-3.3,4.5-2.3,10.7,2.2,14c1.8,1.3,3.8,1.9,5.9,1.9c3.1,0,6.1-1.4,8.1-4.1C498.5,359.5,515.7,299.3,511.3,238.7z"/>
                            <path d="M87.9,77.5c-3.9-3.9-10.3-3.9-14.1,0.1l-0.2,0.2c-3.9,3.9-3.9,10.3,0.1,14.1c1.9,1.9,4.5,2.9,7,2.9c2.6,0,5.1-1,7.1-3l0.2-0.2C91.9,87.8,91.8,81.4,87.9,77.5z"/>
                            <path d="M278.5,263.7c-1.8-3.1-5.1-5-8.6-5h-7.1l13.2-16.6c3.4-4.3,2.7-10.6-1.6-14c-4.3-3.4-10.6-2.7-14,1.6l-26,32.8c-2.4,3-2.8,7.1-1.2,10.6c1.7,3.5,5.2,5.6,9,5.6h10.7l-12.2,21.6c-2.7,4.8-1,10.9,3.8,13.6c1.6,0.9,3.2,1.3,4.9,1.3c3.5,0,6.9-1.8,8.7-5.1l20.7-36.5C280.4,270.6,280.3,266.8,278.5,263.7z"/>
                          </g>
                        </svg>
                      </li>
                      <li><span>Power: </span>3 Phase Power</li>
                    </ul>
                    <ul className="list-unstyled col-6 col-md-12">
                      <li className="list-icon">
                        <svg version="1.1" id="list_ic4" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 480 480" enableBackground="0 0 480 480">
                          <defs>
                              <linearGradient id="Icons_Color4" gradientTransform="rotate(0)">
                                  <stop offset="0"  stopColor="#235d6f" />
                                  <stop offset="1" stopColor="#44a57c" />
                              </linearGradient>
                            </defs>
                          <g fill="url('#Icons_Color4')">
                            <path d="M472,152h-56c-4.4,0-8,3.6-8,8v24h-72v-8c0-4.4-3.6-8-8-8h-32v-40c0-4.4-3.6-8-8-8h-24V72h23.2l47.8,9.6c18.5,3.7,36.6-8.3,40.3-26.9s-8.3-36.6-26.9-40.3c-4.4-0.9-9-0.9-13.4,0L287.2,24H264V8c0-4.4-3.6-8-8-8h-32c-4.4,0-8,3.6-8,8v16h-23.2l-47.9-9.6c-18.5-3.7-36.6,8.3-40.3,26.8c-3.7,18.5,8.3,36.6,26.8,40.3c2.2,0.4,4.5,0.7,6.7,0.7c2.3,0,4.5-0.2,6.8-0.7l47.9-9.5H216v48h-24c-4.4,0-8,3.6-8,8v40h-32c-4.4,0-8,3.6-8,8v16h-40C46.6,192.1,0.1,238.6,0,296v48c0,4.4,3.6,8,8,8h80c4.4,0,8-3.6,8-8v-48c0-4.4,3.6-8,8-8h40v16c0,4.4,3.6,8,8,8h176c4.4,0,8-3.6,8-8v-8h72v24c0,4.4,3.6,8,8,8h56c4.4,0,8-3.6,8-8V160C480,155.6,476.4,152,472,152zM264,40h24c0.5,0,1.1,0,1.6-0.2l48.6-9.7c9.9-2,19.5,4.4,21.4,14.3s-4.4,19.5-14.3,21.4c-2.4,0.5-4.8,0.5-7.1,0l-48.6-9.7c-0.5-0.1-1.1-0.2-1.6-0.2h-24L264,40L264,40z M144,272h-40c-13.3,0-24,10.7-24,24v40H16v-40c0.1-48.6,39.4-87.9,88-88h40V272z M232,16h16v8h-16V16zM232,40h16v16h-16V40zM232,72h16v48h-16V72zM192,56c-0.5,0-1.1,0-1.6,0.2l-48.6,9.7c-9.9,2-19.5-4.4-21.4-14.3s4.4-19.5,14.3-21.4c2.4-0.5,4.8-0.5,7.1,0l48.6,9.7c0.5,0.1,1.1,0.2,1.6,0.2h24v16H192zM200,136h80v32h-80L200,136L200,136zM320,296H160V184h160V296zM408,280h-72v-80h72V280zM464,312h-40V168h40V312z"/>
                            <path d="M83.6,425.3l-28.6-53.1c-2.5-3.9-7.6-5.1-11.5-2.6c-1,0.7-1.9,1.5-2.6,2.6l-28.6,53.1c-6.1,11.1-5.8,24.7,0.8,35.5c7.4,12.1,20.6,19.4,34.8,19.2c14.2,0.2,27.5-7.1,34.8-19.2C89.4,449.9,89.7,436.4,83.6,425.3zM69.1,452.6c-4.5,7.3-12.5,11.6-21.1,11.4c-8.6,0.2-16.6-4.1-21.1-11.4c-3.7-6-3.9-13.6-0.4-19.7l21.5-40l21.5,40C73,439,72.8,446.6,69.1,452.6z"/>
                          </g>
                        </svg>
                      </li>
                      <li><span>Water: </span>Borewell</li>
                    </ul>
                    <ul className="list-unstyled col-6 col-md-12">
                      <li className="list-icon">
                        <svg version="1.1" id="list_ic5" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" enableBackground="0 0 512 512">
                          <defs>
                              <linearGradient id="Icons_Color5" gradientTransform="rotate(0)">
                                  <stop offset="0"  stopColor="#235d6f" />
                                  <stop offset="1" stopColor="#44a57c" />
                              </linearGradient>
                          </defs>
                          <g fill="url('#Icons_Color5')">
                            <path d="M415.3,0H96.7c-37.5,0-68,30.5-68,68v300.7c0,37.5,30.5,68,68,68h115.6v20.9c0,5.5,4.5,10,10,10s10-4.5,10-10v-20.9h47.3V502c0,5.5,4.5,10,10,10s10-4.5,10-10v-65.3h115.6c37.5,0,68-30.5,68-68V68C483.3,30.5,452.8,0,415.3,0L415.3,0zM463.3,368.7c0,26.5-21.5,48-48,48H96.7c-26.5,0-48-21.5-48-48V68c0-26.5,21.5-48,48-48h318.6c26.5,0,48,21.5,48,48L463.3,368.7L463.3,368.7z"/>
                            <path d="M433.3,321.2c-5.5,0-10,4.5-10,10v35.3c0,5.6-4.6,10.2-10.2,10.2H98.9c-5.6,0-10.2-4.6-10.2-10.2V70.2c0-5.6,4.6-10.2,10.2-10.2h314.1c5.6,0,10.2,4.6,10.2,10.2v173c0,5.5,4.5,10,10,10s10-4.5,10-10v-173c0-16.7-13.6-30.2-30.2-30.2H98.9c-16.7,0-30.2,13.6-30.2,30.2v296.3c0,16.7,13.6,30.2,30.2,30.2h314.1c16.7,0,30.2-13.6,30.2-30.2v-35.3C443.3,325.7,438.8,321.2,433.3,321.2z"/>
                            <path d="M207.5,102.9c-18,0-32.7,14.7-32.7,32.7v165.6c0,18,14.7,32.7,32.7,32.7s32.7-14.7,32.7-32.7v-43.7h35.5c20.8,0,40.4-8.2,55.1-23.1c14.7-14.9,22.6-34.6,22.2-55.4c-0.6-42-35.8-76.1-78.3-76.1L207.5,102.9L207.5,102.9z M333,179.3c0.2,15.5-5.6,30-16.5,41.1c-10.9,11-25.4,17.1-40.8,17.1h-45.5c-5.5,0-10,4.5-10,10v53.7c0,7-5.7,12.7-12.7,12.7c-7,0-12.7-5.7-12.7-12.7V135.5c0-7,5.7-12.7,12.7-12.7h67.2C306.4,122.9,332.5,148.2,333,179.3L333,179.3z"/>
                            <path d="M220.2,158.2v43.9c0,5.5,4.5,10,10,10h45.5c17.6,0,32-14.3,32-32s-14.3-32-32-32h-45.5C224.7,148.2,220.2,152.7,220.2,158.2L220.2,158.2zM240.2,168.2h35.5c6.6,0,12,5.4,12,12s-5.4,12-12,12h-35.5L240.2,168.2z"/>
                            <path d="M442.5,283.5c-2.1-5-8-7.5-13.1-5.4c-5,2.1-7.5,8-5.4,13.1c2.1,5,8,7.5,13.1,5.4C442.1,294.5,444.6,288.5,442.5,283.5z"/>
                            <path d="M231.6,498.2c-2.1-5-8-7.5-13.1-5.4c-5,2.1-7.5,8-5.4,13c2.1,5,8,7.5,13.1,5.4C231.2,509.1,233.7,503.2,231.6,498.2z"/>
                          </g>
                        </svg>
                      </li>
                      <li><span>Parking: </span>{this.state.property_details.parking}</li>
                    </ul>
                    <ul className="list-unstyled col-6 col-md-12">
                      <li className="list-icon">
                        <svg version="1.1" id="list_ic6" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" enableBackground="0 0 512 512">
                          <defs>
                              <linearGradient id="Icons_Color6" gradientTransform="rotate(0)">
                                <stop offset="0"  stopColor="#235d6f" />
                                <stop offset="1" stopColor="#44a57c" />
                              </linearGradient>
                          </defs>
                          <g fill="url('#Icons_Color6')">
                            <path d="M162.3,367.2H38.4V210.1c0-5.1-4.1-9.2-9.2-9.2s-9.2,4.1-9.2,9.2v166.4c0,5.1,4.1,9.2,9.2,9.2H32v110.9c0,5.1,4.1,9.2,9.2,9.2s9.2-4.1,9.2-9.2v-69.3H141v69.3c0,5.1,4.1,9.2,9.2,9.2s9.2-4.1,9.2-9.2V385.7h2.8c5.1,0,9.2-4.1,9.2-9.2C171.5,371.4,167.4,367.2,162.3,367.2z M141,408.8H50.4v-23.1H141L141,408.8L141,408.8z"/>
                            <path d="M482.8,200.9c-5.1,0-9.2,4.1-9.2,9.2v157.1H349.7c-5.1,0-9.2,4.1-9.2,9.2s4.1,9.2,9.2,9.2h2.8v110.9c0,5.1,4.1,9.2,9.2,9.2s9.2-4.1,9.2-9.2v-69.3h90.6v69.3c0,5.1,4.1,9.2,9.2,9.2s9.2-4.1,9.2-9.2V385.7h2.8c5.1,0,9.2-4.1,9.2-9.2V210.1C492.1,205,487.9,200.9,482.8,200.9z M461.6,408.8H371v-23.1h90.6L461.6,408.8L461.6,408.8z"/>
                            <path d="M394.5,279.1H265.2V154c0-5.1-4.1-9.2-9.2-9.2c-5.1,0-9.2,4.1-9.2,9.2v125.1H117.5c-5.1,0-9.2,4.1-9.2,9.2s4.1,9.2,9.2,9.2h9.1v22.8c0,5.1,4.1,9.2,9.2,9.2h240.3c5.1,0,9.2-4.1,9.2-9.2v-22.8h9.1c5.1,0,9.2-4.1,9.2-9.2C403.7,283.2,399.6,279.1,394.5,279.1z M366.9,311.2H145.1v-13.6h221.8L366.9,311.2L366.9,311.2z"/>
                            <path d="M298.3,487.4h-33.1V351.2c0-5.1-4.1-9.2-9.2-9.2s-9.2,4.1-9.2,9.2v136.1h-33.1c-5.1,0-9.2,4.1-9.2,9.2s4.1,9.2,9.2,9.2h84.7c5.1,0,9.2-4.1,9.2-9.2S303.4,487.4,298.3,487.4z"/>
                            <path d="M508.6,116.1c-68.6-55.9-154.9-87.2-243.4-88.3V15.4c0-5.1-4.1-9.2-9.2-9.2s-9.2,4.1-9.2,9.2v12.4C158.3,28.9,72.1,60.1,3.4,116.1c-3,2.5-4.2,6.6-2.9,10.3c1.3,3.7,4.8,6.1,8.7,6.1h364.1c0,0,0,0,0,0s0,0,0,0h129.4c3.9,0,7.4-2.5,8.7-6.1C512.8,122.6,511.6,118.5,508.6,116.1z M36.8,114c45-31.5,96.6-52.7,150.5-62.2c-19.5,14.6-37.7,35.5-53.9,62.2H36.8zM155.3,114c29.1-43.8,63.8-67.8,98.7-67.8h4.1c34.9,0,69.6,23.9,98.7,67.8H155.3zM378.6,114c-16.2-26.7-34.4-47.6-53.9-62.2c53.9,9.5,105.5,30.7,150.5,62.2H378.6z"/>
                          </g>
                        </svg>
                      </li>
                      <li><span>Terrace: </span> Private Terrace </li>
                    </ul>
                    <ul className="list-unstyled col-6 col-md-12">
                      <li className="list-icon">
                        <svg version="1.1" id="list_ic7" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" enableBackground="0 0 512 512">
                          <defs>
                              <linearGradient id="Icons_Color7" gradientTransform="rotate(0)">
                                  <stop offset="0"  stopColor="#235d6f" />
                                  <stop offset="1" stopColor="#44a57c" />
                              </linearGradient>
                          </defs>
                          <g fill="url('#Icons_Color7')">
                            <path d="M298.7,384h-85.3c-4.7,0-8.5,3.8-8.5,8.5v59.7c0,4.7,3.8,8.5,8.5,8.5h85.3c4.7,0,8.5-3.8,8.5-8.5v-59.7C307.2,387.8,303.4,384,298.7,384z M290.1,443.7h-68.3v-42.7h68.3V443.7z"/>
                            <rect x="247.5" y="392.5" width="17.1" height="59.7"/>
                            <path d="M341.3,51.2H170.7c-4.7,0-8.5,3.8-8.5,8.5v392.5c0,4.7,3.8,8.5,8.5,8.5h170.7c4.7,0,8.5-3.8,8.5-8.5V59.7C349.9,55,346.1,51.2,341.3,51.2z M332.8,443.7H179.2V68.3h153.6V443.7z"/>
                            <path d="M170.7,85.3h-68.3c-4.7,0-8.5,3.8-8.5,8.5v358.4c0,4.7,3.8,8.5,8.5,8.5h68.3c4.7,0,8.5-3.8,8.5-8.5V93.9C179.2,89.2,175.4,85.3,170.7,85.3z M162.1,443.7h-51.2V102.4h51.2V443.7z"/>
                            <rect x="76.8" y="85.3" width="25.6" height="17.1"/>
                            <rect x="145.1" y="51.2" width="221.9" height="17.1"/>
                            <rect x="196.3" y="341.3" width="17.1" height="25.6"/>
                            <rect x="230.4" y="341.3" width="17.1" height="25.6"/>
                            <rect x="264.5" y="341.3" width="17.1" height="25.6"/>
                            <rect x="298.7" y="341.3" width="17.1" height="25.6"/>
                            <rect x="196.3" y="298.7" width="17.1" height="25.6"/>
                            <rect x="230.4" y="298.7" width="17.1" height="25.6"/>
                            <rect x="264.5" y="298.7" width="17.1" height="25.6"/>
                            <rect x="298.7" y="298.7" width="17.1" height="25.6"/>
                            <rect x="196.3" y="256" width="17.1" height="25.6"/>
                            <rect x="230.4" y="256" width="17.1" height="25.6"/>
                            <rect x="264.5" y="256" width="17.1" height="25.6"/>
                            <rect x="298.7" y="256" width="17.1" height="25.6"/>
                            <rect x="196.3" y="213.3" width="17.1" height="25.6"/>
                            <rect x="230.4" y="213.3" width="17.1" height="25.6"/>
                            <rect x="264.5" y="213.3" width="17.1" height="25.6"/>
                            <rect x="298.7" y="213.3" width="17.1" height="25.6"/>
                            <rect x="196.3" y="170.7" width="17.1" height="25.6"/>
                            <rect x="230.4" y="170.7" width="17.1" height="25.6"/>
                            <rect x="264.5" y="170.7" width="17.1" height="25.6"/>
                            <rect x="298.7" y="170.7" width="17.1" height="25.6"/>
                            <rect x="196.3" y="128" width="17.1" height="25.6"/>
                            <rect x="230.4" y="128" width="17.1" height="25.6"/>
                            <rect x="264.5" y="128" width="17.1" height="25.6"/>
                            <rect x="298.7" y="128" width="17.1" height="25.6"/>
                            <rect x="196.3" y="85.3" width="17.1" height="25.6"/>
                            <rect x="230.4" y="85.3" width="17.1" height="25.6"/>
                            <rect x="264.5" y="85.3" width="17.1" height="25.6"/>
                            <rect x="298.7" y="85.3" width="17.1" height="25.6"/>
                            <rect x="128" y="384" width="17.1" height="25.6"/>
                            <rect x="128" y="341.3" width="17.1" height="25.6"/>
                            <rect x="128" y="298.7" width="17.1" height="25.6"/>
                            <rect x="128" y="256" width="17.1" height="25.6"/>
                            <rect x="128" y="213.3" width="17.1" height="25.6"/>
                            <rect x="128" y="170.7" width="17.1" height="25.6"/>
                            <rect x="128" y="128" width="17.1" height="25.6"/>
                            <path d="M409.6,85.3h-68.3c-4.7,0-8.5,3.8-8.5,8.5v358.4c0,4.7,3.8,8.5,8.5,8.5h68.3c4.7,0,8.5-3.8,8.5-8.5V93.9C418.1,89.2,414.3,85.3,409.6,85.3z M401.1,443.7h-51.2V102.4h51.2V443.7z"/>
                            <rect x="409.6" y="85.3" width="25.6" height="17.1"/>
                            <rect x="366.9" y="384" width="17.1" height="25.6"/>
                            <rect x="366.9" y="341.3" width="17.1" height="25.6"/>
                            <rect x="366.9" y="298.7" width="17.1" height="25.6"/>
                            <rect x="366.9" y="256" width="17.1" height="25.6"/>
                            <rect x="366.9" y="213.3" width="17.1" height="25.6"/>
                            <rect x="366.9" y="170.7" width="17.1" height="25.6"/>
                            <rect x="366.9" y="128" width="17.1" height="25.6"/>
                            <rect y="443.7" width="102.4" height="17.1"/>
                            <rect x="409.6" y="443.7" width="102.4" height="17.1"/>
                            <rect x="34.1" y="273.1" width="17.1" height="179.2"/>
                            <polygon points="3.4,297 13.7,283.3 81.9,334.5 71.7,348.2"/>
                            <polygon points="3.4,334.5 71.7,283.3 81.9,297 13.6,348.2"/>
                            <rect x="460.8" y="273.1" width="17.1" height="179.2"/>
                            <polygon points="430.1,297 440.3,283.3 508.6,334.5 498.3,348.2"/>
                            <polygon points="430,334.5 498.3,283.4 508.5,297 440.3,348.2"/>
                          </g>
                        </svg>
                      </li>
                      <li><span>Age of Building: </span> {this.state.property_details.property_age}</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="details-card similar-properties d-none d-sm-none d-md-block">
                <h4>Similar Properties</h4>
                <div className="similarprop-row">
                  <div className="row">
                    <div className="col-5 nr-padding">
                      <div className="similarprop-img">
                        <img src={propertyimg1} className="img-fluid" width="100%" alt="Image" />
                      </div>
                    </div>
                    <div className="col-7 nl-padding">
                      <div className="similarprop-details">
                        <h5>Independent House Adambakkam</h5>
                        <p>3 BHK For Rent In Adambakkam</p>
                        <p>30,000, 1,750 Sq. Ft, 0.2 KM</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="similarprop-row">
                  <div className="row">
                    <div className="col-5 nr-padding">
                      <div className="similarprop-img">
                        <img src={propertyimg2} className="img-fluid" width="100%" alt="Image" />
                      </div>
                    </div>
                    <div className="col-7 nl-padding">
                      <div className="similarprop-details">
                        <h5>Independent House Adambakkam</h5>
                        <p>3 BHK For Rent In Adambakkam</p>
                        <p>30,000, 1,750 Sq. Ft, 0.2 KM</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="similarprop-row">
                  <div className="row">
                    <div className="col-5 nr-padding">
                      <div className="similarprop-img">
                        <img src={propertyimg3} className="img-fluid" width="100%" alt="Image" />
                      </div>
                    </div>
                    <div className="col-7 nl-padding">
                      <div className="similarprop-details">
                        <h5>Independent House Adambakkam</h5>
                        <p>3 BHK For Rent In Adambakkam</p>
                        <p>30,000, 1,750 Sq. Ft, 0.2 KM</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="similarprop-row">
                  <div className="row">
                    <div className="col-5 nr-padding">
                      <div className="similarprop-img">
                        <img src={propertyimg4} className="img-fluid" width="100%" alt="Image" />
                      </div>
                    </div>
                    <div className="col-7 nl-padding">
                      <div className="similarprop-details">
                        <h5>Independent House Adambakkam</h5>
                        <p>3 BHK For Rent In Adambakkam</p>
                        <p>30,000, 1,750 Sq. Ft, 0.2 KM</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="similarprop-row">
                  <div className="row">
                    <div className="col-5 nr-padding">
                      <div className="similarprop-img">
                        <img src={propertyimg5} className="img-fluid" width="100%" alt="Image" />
                      </div>
                    </div>
                    <div className="col-7 nl-padding">
                      <div className="similarprop-details">
                        <h5>Independent House Adambakkam</h5>
                        <p>3 BHK For Rent In Adambakkam</p>
                        <p>30,000, 1,750 Sq. Ft, 0.2 KM</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="similarprop-row">
                  <div className="row">
                    <div className="col-5 nr-padding">
                      <div className="similarprop-img">
                        <img src={propertyimg1} className="img-fluid" width="100%" alt="Image" />
                      </div>
                    </div>
                    <div className="col-7 nl-padding">
                      <div className="similarprop-details">
                        <h5>Independent House Adambakkam</h5>
                        <p>3 BHK For Rent In Adambakkam</p>
                        <p>30,000, 1,750 Sq. Ft, 0.2 KM</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="similarprop-row">
                  <div className="row">
                    <div className="col-5 nr-padding">
                      <div className="similarprop-img">
                        <img src={propertyimg2} className="img-fluid" width="100%" alt="Image" />
                      </div>
                    </div>
                    <div className="col-7 nl-padding">
                      <div className="similarprop-details">
                        <h5>Independent House Adambakkam</h5>
                        <p>3 BHK For Rent In Adambakkam</p>
                        <p>30,000, 1,750 Sq. Ft, 0.2 KM</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="similarprop-row">
                  <div className="row">
                    <div className="col-5 nr-padding">
                      <div className="similarprop-img">
                        <img src={propertyimg3} className="img-fluid" width="100%" alt="Image" />
                      </div>
                    </div>
                    <div className="col-7 nl-padding">
                      <div className="similarprop-details">
                        <h5>Independent House Adambakkam</h5>
                        <p>3 BHK For Rent In Adambakkam</p>
                        <p>30,000, 1,750 Sq. Ft, 0.2 KM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
        </div>
	)
  }
}

export default PropertySidebar;
