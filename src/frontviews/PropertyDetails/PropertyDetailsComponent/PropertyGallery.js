import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import Gallery from 'react-grid-gallery';
import galleryimg1 from '../../../frontscss/img/others/g-img1.jpg';
import galleryimg2 from '../../../frontscss/img/others/g-img2.jpg';
import galleryimg3 from '../../../frontscss/img/others/g-img3.jpg';
import galleryimg4 from '../../../frontscss/img/others/g-img4.jpg';
import galleryimg5 from '../../../frontscss/img/others/g-img5.jpg';
import galleryimg6 from '../../../frontscss/img/others/g-img6.jpg';
import galleryimg7 from '../../../frontscss/img/others/g-img7.jpg';
import galleryimg8 from '../../../frontscss/img/others/g-img8.jpg';
import galleryimg9 from '../../../frontscss/img/others/g-img9.jpg';
//import videos from './TestVideo.mp4';
import NumberFormat from 'react-number-format';
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;
const image_path_large = API_URL+'/uploads/property/rental/large';
const image_path_thumb = API_URL+'/uploads/property/rental/thumb';
const video_path = API_URL+'/api/admin/createvideoplay?video_name';

/* const IMAGES =
[{
        src: galleryimg1,
        thumbnail: galleryimg1,
        thumbnailWidth: 200,
        thumbnailHeight: 100,
        isSelected: false,
},
{
        src: galleryimg2,
        thumbnail: galleryimg2,
        thumbnailWidth: 200,
        thumbnailHeight: 100
},
{
        src: galleryimg3,
        thumbnail: galleryimg3,
        thumbnailWidth: 200,
        thumbnailHeight: 100
},
{
        src: galleryimg4,
        thumbnail: galleryimg4,
        thumbnailWidth: 200,
        thumbnailHeight: 100
},
{
        src: galleryimg5,
        thumbnail: galleryimg5,
        thumbnailWidth: 200,
        thumbnailHeight: 100
},
{
        src: galleryimg6,
        thumbnail: galleryimg6,
        thumbnailWidth: 200,
        thumbnailHeight: 100
},
{
        src: galleryimg7,
        thumbnail: galleryimg7,
        thumbnailWidth: 200,
        thumbnailHeight: 100
},
{
        src: galleryimg8,
        thumbnail: galleryimg8,
        thumbnailWidth: 200,
        thumbnailHeight: 100
},
{
        src: galleryimg9,
        thumbnail: galleryimg9,
        thumbnailWidth: 200,
        thumbnailHeight: 100,        
}]
 */

class PropertyGallery extends Component {
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
						let i=1
						property_images.map(item => {
								
								if(item.property_image_type==0 && i<=9) {
									let image_url_large = image_path_large+"/"+item.property_image_large;
									let image_url_thumb = image_path_thumb+"/"+item.property_image_thumb;
									let imgsrc = { src:image_url_large,thumbnail: image_url_thumb, thumbnailWidth: 200, thumbnailHeight: 100,isSelected: false}
									Images.push(imgsrc);
									i++
								}else{
									 video_url = video_path+"="+item.property_video;
								
								}
								
								
							});
							console.log("video_url");
							console.log(Images);
						
						$this.setState({  PropertyData: resData,basic_information:basic_information,property_price:property_price,property_location:property_location,property_attr_detail:property_attr_detail,property_amenities:property_amenities,property_furnshing:property_furnshing,property_images:property_images,property_details:property_details,PropertyImages:Images,PropertyVideos:video_url});
								
				 }
		}).catch(function(error){  console.log(error); });
	}
}		
	
render() {
	return (
        <div className="gallery-section">
        	<div className="row">
        		<div className="col-md-7">
        			<div className="property-video">
        				<ReactPlayer  url={[{src: 'http://localhost:3000/assets/img/propertyvideo.mp4' }]}  controls config={{ file: { 
            attributes: { controlsList: 'nodownload', disablepictureinpicture: 'true', } }}} />
        			</div>
        		</div>
        		<div className="col-md-5 nl-padding">
        			<div className="property-gallery">
					
					 <Gallery images={this.state.PropertyImages} /> 
					 
        			</div>
        		</div>
        	</div>
		</div>
	)
  }
}

export default PropertyGallery;
