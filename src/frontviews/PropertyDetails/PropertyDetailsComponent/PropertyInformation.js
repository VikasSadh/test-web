import React, { Component } from 'react';
import {Overlay,ButtonToolbar,OverlayTrigger,Tooltip,Button} from 'react-bootstrap';
import NumberFormat from 'react-number-format';
import {toastr} from 'react-redux-toastr';

import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;
const image_path = 'http://localhost:6001/uploads/property/rental/thumb';
const video_path = 'http://localhost:6001/api/admin/createvideoplay?video_name';

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

class PropertyInformation extends Component {
 constructor(props) {
    super(props); 
	this.state = {PropertyData:'',basic_information:'',property_price:'',property_location:'',property_attr_detail:'',property_amenities:'',property_furnshing:'',property_images:'',property_details:'',PropertyImages:'',PropertyVideos:'', }
	this.ConstactNow = this.ConstactNow.bind(this)
  }
  
  ConstactNow() {
	
	toastr.success('Success', 'Request Send!', toastrSuccessOptions);
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
            
						// console.log(response.data.Data);
						// console.log(response.data.Data.basic_information);
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

  let LeaseAmt;
  if(this.state.property_price.property_price_type=='Rent') {
    LeaseAmt ="₹ " +this.state.property_price.property_advance_price+" Deposit"
  } else {
    LeaseAmt = this.state.property_price.property_leaseduration + " Year"
  }

	return (
    <div className="single-property-info">
      <div className="row">
        <div className="col-12 col-md-12 col-lg-5 nr-padding">
          <div className="property-title">
            <h4>{this.state.basic_information.property_name}</h4>
            <h6>Near by {this.state.property_location.land_mark}</h6>
          </div>
        </div>
        <div className="col-12 col-md-12 col-lg-7 nl-padding">
          <div className="row">
            <div className="col-4 col-md-3 col-lg-4 np-padding">
              <div className="single-property-price">
                <p className="d-none d-md-block">₹ <NumberFormat value={this.state.property_price.property_price} displayType={'text'} thousandSeparator={true} thousandsGroupStyle="lakh" /> {this.state.property_price.property_price_type=='Rent' ? '/Month' : 'Deposit' } 
                  {/* <OverlayTrigger key="" placement="top" overlay={ <Tooltip >Maintenance Charges</Tooltip> } >
                    <em variant="secondary"> <i className="fas fa-info-circle"></i></em>
                  </OverlayTrigger> */}       
                         
                 <span>{this.state.property_price.property_price_negotiable=='Yes' ? 'Negotiable' : 'Not Negotiable'} </span>
                  
                 </p>                      
                <p className="d-block d-md-none">₹ <NumberFormat value={this.state.property_price.property_price} displayType={'text'} thousandSeparator={true} thousandsGroupStyle="lakh" /> {this.state.property_price.property_price_type=='Rent' ? '/M' : 'Dep' } <em><i className="fas fa-info-circle"></i></em> <span>{this.state.property_price.property_price_negotiable=='Yes' ? 'Neg' : 'N.Neg'}</span></p>  
              </div> 
            </div>
            <div className="col-4 col-md-3 col-lg-2 np-padding">
              <div className="single-property-area">
                <p><i className="fas fa-home"></i> {this.state.property_details.total_area} <span>{this.state.property_details.area_type}</span></p>      
              </div>
            </div>
            <div className="col-4 col-md-3 col-lg-3 np-padding">
              <div className="single-property-price">
                <p className="d-none d-md-block">{LeaseAmt} <NumberFormat displayType={'text'} thousandSeparator={true} thousandsGroupStyle="lakh" /> 
                {/* <OverlayTrigger key="" placement="top" overlay={ <Tooltip >Maintenance Charges</Tooltip> } >
                  <em variant="secondary"> <i className="fas fa-info-circle"></i></em> 
                </OverlayTrigger> */}
                {this.state.property_price.property_price_type=='Rent' ?      
                <span>{this.state.property_price.property_advance_price_negotiable=='Yes' ? 'Negotiable' : 'Not Negotiable'}</span>
                : <span>Duration</span>}
                </p>            
                {this.state.property_price.property_price_type=='Rent' ?           
                <p className="d-block d-md-none">₹ <NumberFormat value={this.state.property_price.property_advance_price} displayType={'text'} thousandSeparator={true} thousandsGroupStyle="lakh" />  Dep <em><i className="fas fa-info-circle"></i></em><span>{this.state.property_price.property_advance_price_negotiable=='Yes' ? 'Neg' : 'N.Neg'}</span></p> 
                : <p className="d-block d-md-none">{LeaseAmt} <span className="lease-time">Dur</span></p>}
              </div>
            </div>
            <div className="d-none d-sm-none d-md-block col-md-3 col-lg-3 nlp-padding">
              <div className="single-property-contact">
                <a onClick={this.ConstactNow} className="btn reach-btn"><i className="fas fa-phone-alt"></i><span> Contact</span></a>                    
              </div>
            </div>
          </div>                                           
        </div>
      </div>
    </div>
	)
  }
}

export default PropertyInformation;
