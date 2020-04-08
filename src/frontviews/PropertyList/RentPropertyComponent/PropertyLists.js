import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Overlay,ButtonToolbar,OverlayTrigger,Tooltip,Button} from 'react-bootstrap';
import propertyimg1 from '../../../frontscss/img/others/p-img1.jpg';
import propertyimg2 from '../../../frontscss/img/others/p-img2.jpg';
import propertyimg3 from '../../../frontscss/img/others/p-img3.jpg';
import propertyimg4 from '../../../frontscss/img/others/p-img4.jpg';
import propertyimg5 from '../../../frontscss/img/others/p-img5.jpg';
import NotFoundImg from '../../../frontscss/img/others/NotFound.svg';
import {toastr} from 'react-redux-toastr';
import Moment from 'react-moment';
import NumberFormat from 'react-number-format';
import axios from 'axios';
const API_URL = process.env.REACT_APP_API_URL;
const image_path_large = API_URL+'/uploads/property/rental/large';
const image_path_thumb = API_URL+'/uploads/property/rental/thumb';

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

class PropertyLists extends Component {
  constructor(props) {
    super(props);
	this.state = { PropertyListData:[] }
	this.reloadlistdata = this.reloadlistdata.bind(this);
	this.ConstactNow = this.ConstactNow.bind(this);
  }
 componentWillMount() {
	 console.log(this.props.Searchdataprops);
	 let PostData = {
				business_type_id:this.props.Searchdataprops.business_type_id,
				servicetype_id: this.props.Searchdataprops.service_type,
				property_type_id: this.props.Searchdataprops.property_type_id,
				bhk_type: this.props.Searchdataprops.bhktype,
				property_area: this.props.Searchdataprops.area
	}
	 this.reloadlistdata(PostData);
}

componentWillReceiveProps(nextProps) {
	// Searchdataprops
	console.log("propertylist");
	let PostData = {
				business_type_id:this.props.Searchdataprops.business_type_id,
				servicetype_id: this.props.Searchdataprops.service_type,
				property_type_id: this.props.Searchdataprops.property_type_id,
				bhk_type: this.props.Searchdataprops.bhktype,
				property_area: this.props.Searchdataprops.area
			}
	if(this.props !== nextProps) {
		console.log("propertlist")
		console.log(this.props.Searchdataprops);
		// console.log("propertylist1"); console.log(nextProps.Searchdataprops)
		PostData['property_price_type'] = this.props.Searchdataprops.property_price_type;
		PostData['furnising_type'] = this.props.Searchdataprops.furnising_type;
		PostData['property_availability'] = this.props.Searchdataprops.property_availability;
		PostData['parking'] = this.props.Searchdataprops.parking;
		PostData['food_type'] = this.props.Searchdataprops.food_type;
		PostData['tenant_type'] = this.props.Searchdataprops.tenant_type;
		PostData['pet_type'] = this.props.Searchdataprops.pet_type;
			
		this.reloadlistdata(PostData);
	}
		
}
 
reloadlistdata (PostData) {
	let $this  = this;
	
		axios.post(API_URL+'/api/v1/getsearchrentalpropertylist',PostData).then(function(response){
			// console.log(response.data.Statuscode)
				if(response.data.Statuscode==200) {
					let resData = response.data.Data;
					console.log(resData);
					$this.setState({ PropertyListData: resData });	
				} else {  }
	    }).catch(function(error){  console.log(error); });   
	
	
	} 
ConstactNow() { toastr.success('Success', 'Request Send!', toastrSuccessOptions);}
render() {
let $this = this;
	return (
    <div className="property-lists">
      
	  { this.state.PropertyListData.length > 0 ?
		this.state.PropertyListData.map(function(item,index) {
		
		// let image_url = propertyimg1+""+index;
			let image_url = image_path_thumb+"/"+item.property_images_thumb;

		return (<div className="property-row">
        <div className="row">
          <div className="col-3 col-md-4 nr-padding">
            <div className="property-img">
              <Link to={`/property/details/${item.property_id}`}> <img src={image_url} className="img-fluid" alt="Image" /></Link>
              <span><Moment format="D MMM YYYY">{item.created_date}</Moment></span>
            </div>
          </div>
          <div className="col-9 col-md-8 nl-padding">
            <div className="property-contents">
              <h4><Link to={`/property/details/${item.property_id}`}>{item.property_name}</Link></h4>
              <div className="property-addr">
                <h6>Near by {item.land_mark}</h6>
                <span>Updated On <Moment format="D MMM YYYY">{item.created_date}</Moment></span>
              </div>                        
              <div className="property-info">
                <div className="row">
                  <div className="col-4 col-lg-4 nr-padding">
                    <div className="property-price">
                      <p>₹ <NumberFormat value={item.property_price} displayType={'text'} thousandSeparator={true} thousandsGroupStyle="lakh" />  {item.property_price_type=='Rent' ? '/Month' : 'Deposit' } </p>    
                      <ul className="list-unstyled">
                        <li>{item.furnishing_name}</li>
                      </ul>
                    </div>                              
                  </div>
                  <div className="col-5 col-lg-4 no-padding">
                    <div className="property-area">
                      <p><i className="fas fa-home"></i> {item.total_area} <span>{item.area_type}</span></p>                                
                      <ul className="list-unstyled">
                        <li>{item.parking} Parking</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-3 col-lg-4 nl-padding">
                    <div className="property-price">
                      <p>
							{ item.property_price_type=='Rent' ? "₹ "  :  "Lease for " }
						
							{ item.property_price_type=='Rent' ? <NumberFormat value={item.property_advance_price} displayType={'text'} thousandSeparator={true} thousandsGroupStyle="lakh" />  :  item.property_leaseduration }
						
							{ item.property_price_type=='Rent' ? " Deposit"  :  " Year" }
					  
						{ /*<OverlayTrigger key="" placement="top" overlay={ <Tooltip >Maintenance Charges</Tooltip> } >
                        <em variant="secondary"> <i className="fas fa-info-circle"></i></em> 
                      </OverlayTrigger>*/ }
                      </p>  
                      <a onClick={() => toastr.success('Success', 'Request Send!', toastrSuccessOptions) } className="btn d-block d-md-block d-lg-none" ><i className="fas fa-phone-alt" ></i><span>Contact Now</span></a>
                    </div>
                  </div>
                </div>
              </div>      
              <div className="property-spl">
                <div className="row">
                  <div className="col-md-8 pr-0">
                    <div className="property-details">
                      <ul className="list-unstyled d-inline-flex">
                        <li>{item.furnishing_name}</li>
                        <li>{item.parking} Parking</li>
                        <li>{item.property_availability}</li>
                      </ul>
                    </div>                              
                  </div>
                  <div className="col-md-4">
                    <div className="property-btn">
                      <a href="#" className="btn"><i className="fas fa-phone-alt"></i> Contact Now</a>
                    </div>
                  </div>
                </div>
              </div>    
            </div>
          </div>
        </div>
      </div>)
	  })
	   : <div className="notfound">
        <img src={NotFoundImg} className="img-fluid" alt="Image" />
        <h4>No Results Found...</h4>
      </div>
	  
	  }
	  
	 
    </div>
	)
  }
}

export default PropertyLists;
