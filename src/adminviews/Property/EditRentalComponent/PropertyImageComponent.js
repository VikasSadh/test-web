import React, { Component,useEffect, useState } from "react";
import ReactDOM from "react-dom";
import ReactWizard from "react-bootstrap-wizard";
import { Container, Row, Col,Card ,CardHeader,CardBody, FormGroup, Label,Input,Button,CardFooter} from "reactstrap";
import { AppSwitch } from '@coreui/react'

// import { UploaderComponent, Uploader, SelectedEventArgs, FileInfo, RemovingEventArgs } from '@syncfusion/ej2-react-inputs';

// import { createSpinner, showSpinner, hideSpinner } from '@syncfusion/ej2-react-popups';
// import { EmitType, detach, Browser, createElement, isNullOrUndefined, EventHandler } from '@syncfusion/ej2-base';
import {useDropzone} from 'react-dropzone';


import axios from 'axios';
const API_URL = process.env.REACT_APP_API_URL
const url = API_URL+"/api/admin/propertyimageupload";
const thumbsContainer = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginTop: 16
};

const thumb = { display: 'inline-flex', borderRadius: 2, border: '1px solid #eaeaea', marginBottom: 8, marginRight: 8, width: 100, height: 100, padding: 4,	boxSizing: 'border-box'
};
const thumbInner = { display: 'flex', minWidth: 0, overflow: 'hidden' };
const img = { display: 'block', width: 'auto', height: '100%' };

function VideoUploadFile(props) {
	const [files, setFiles] = useState([]);
	const {getRootProps, getInputProps} = useDropzone({
    accept: 'video/*',
	multiple:false,
    onDrop: acceptedFiles => {
      setFiles(acceptedFiles.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      })));
    },
	getFilesFromEvent:event => props.onclickfileevent(event)
  });
  
  
   let db_thumbs='';
 
	   if(props.property_video_path!='') {
			   db_thumbs = <div style={thumb} key={0}>
				  <div style={thumbInner}>
					  {/* <img src={item} style={img} /> */ }
						  {props.property_video_path}
				  </div>
				</div>
			  
  } 
  
  const thumbs = files.map(file => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
		  { /* <img src={file.preview} style={img} /> */ }
			  { file.name }
      </div>
    </div>
  ));

  useEffect(() => () => {
    // Make sure to revoke the data uris to avoid memory leaks
    files.forEach(file => URL.revokeObjectURL(file.preview));
  }, [files]);

  return (
    <section className="container">
      <div {...getRootProps({className: 'dropzone'})}>
        <input  name="videofiles" {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </div>
       { files!='' ?  
      <aside style={thumbsContainer}> {thumbs} </aside>
	   : <aside style={thumbsContainer}> {db_thumbs} </aside> }
    </section>
  );
	
}



function Previews(props) {
  const [files, setFiles] = useState([]);
  const {getRootProps, getInputProps} = useDropzone({
    accept: 'image/jpeg, image/png',
    onDrop: acceptedFiles => {
      setFiles(acceptedFiles.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      })));
    },
	getFilesFromEvent:event => props.onclickfileevent(event)
  });
   let db_thumbs='';
 
	   if(props.property_images_path!='') {
			   db_thumbs = props.property_images_path.map((item,index) => 
			 
				<div style={thumb} key={index}>
				  <div style={thumbInner}>
					<img src={item} style={img} />
				  </div>
				</div>
			  );
  } 
  
  const thumbs = files.map(file => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img src={file.preview} style={img}/>
      </div>
    </div>
  ));

  useEffect(() => () => {
    // Make sure to revoke the data uris to avoid memory leaks
    files.forEach(file => URL.revokeObjectURL(file.preview));
  }, [files]);

  return (
    <section className="container">
      <div {...getRootProps({className: 'dropzone'})}>
        <input name="imagesfiles" {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </div>
	   { files!='' ?  
      <aside style={thumbsContainer}> {thumbs} </aside>
	   : <aside style={thumbsContainer}> {db_thumbs} </aside>}
    </section>
  );

}



class PropertyImageComponent extends Component {
	fileObj = [];
    fileArray = [];

  constructor(props) {
    super(props);
			this.state = { fields: {imagesfiles: '', imageslargepath:'',imagesthumbpath:'', videofiles:''}, errors: {},property_images_path:'',property_video_path:'' };
		//	this.handleChange = this.handleChange.bind(this);
		// this.uploadMultipleFiles = this.uploadMultipleFiles.bind(this)
		// this.uploadFiles = this.uploadFiles.bind(this)
		   this.acceptedFiles = this.acceptedFiles.bind(this)
		   this.videoacceptedFiles = this.videoacceptedFiles.bind(this)
	}
   componentDidUpdate(prevProps, prevState) {
		let $this  = this;
		let fields = this.state.fields;
		if(prevProps.property_data!==this.props.property_data) {
			var  property_images_path = this.props.property_data.property_images_path;
			var  property_video_path = this.props.property_data.property_video_path;
			var  property_images = this.props.property_data.property_images;
			let ResImageslarge=[],ResImagesthumb=[],videofiles='';
			if(property_images.length > 0) {
				property_images.map(item => {
								if(item.property_image_type==0) {
										ResImageslarge.push(item.property_image_large);
										ResImagesthumb.push(item.property_image_thumb);
								}else{
									videofiles = item.property_video // video_url = video_path+"="+item.property_image_thumb;
								}
							});
			}
					fields['imageslargepath'] = ResImageslarge; 
					fields['imagesthumbpath'] = ResImagesthumb;
					fields['videofiles'] = videofiles; 
			$this.setState({ fields })
			$this.setState({ property_images_path: property_images_path,property_video_path:property_video_path })
		}
   }

async  acceptedFiles(event) {
	let $this = this;
	let fields = this.state.fields;
	let formData = new FormData();		
	let files = [];
	 const fileList = event.dataTransfer ? event.dataTransfer.files : event.target.files;
	 for (var i = 0; i < fileList.length; i++) {
    const file = fileList.item(i);
				formData.append('imagesfiles', file);
				formData.append("timestamp", (Date.now() / 1000) | 0);
		files.push(file);
	}
		fields['imagesfiles'] = files;
		this.setState({ fields });
		
		const config = { headers: { 'content-type': 'multipart/form-data' } };
		axios.post(API_URL+'/api/admin/propertyimageupload', formData,config).then(function(response){
			  if(response.data.Statuscode==200) {
					let ResImageslarge = response.data.ResImageslarge;
					let ResImagesthumb = response.data.ResImagesthumb;
					
					fields['imageslargepath'] = ResImageslarge; 
					fields['imagesthumbpath'] = ResImagesthumb;
					$this.setState({ fields });
					// console.log(resData)
				} 
		})
	
	return files;
	
 }
 
 
 async  videoacceptedFiles(event) {
	let $this = this;
	let fields = this.state.fields;
	let formData = new FormData();		
	let files = [];
	 const fileList = event.dataTransfer ? event.dataTransfer.files : event.target.files;
	 for (var i = 0; i < fileList.length; i++) {
    const file = fileList.item(i);
			formData.append('videofiles', file);
			formData.append("timestamp", (Date.now() / 1000) | 0);
		files.push(file);
	}
		fields['videofiles'] = files;
		this.setState({ fields });
		
		const config = { headers: { 'content-type': 'multipart/form-data' } };
		axios.post(API_URL+'/api/admin/propertyvideoupload', formData,config).then(function(response){
			  if(response.data.Statuscode==200) {
					let videofiles = response.data.Data;
					
					
					fields['videofiles'] = videofiles; 
					// fields['imagesthumbpath'] = ResImagesthumb;
							$this.setState({ fields });
					// console.log(resData)
				} 
		})
		
	
		return files;
	
 } 
	 
 
  
	
  
  render() {
    return ( 
			<div>
	  <Row>
          <Col xs="12" sm="12">
			
			
				<Row>
			   <Col md="12"> <p className="title-style">Property Images</p></Col>
			   </Row>
                <Row>
					<Col xs="12" sm="12">
						<Previews property_images_path={this.state.property_images_path} onclickfileevent={this.acceptedFiles} />
					</Col>
				</Row>
				<Row>
					<Col md="12"> <p className="title-style">Property Video</p></Col>
			   </Row>
			   <Row>
					<Col xs="12" sm="12">
						<VideoUploadFile property_video_path={this.state.property_video_path}  onclickfileevent={this.videoacceptedFiles} />
					</Col>
				</Row>
			  
				
				
				 
             
          </Col>
		</Row>
		
       
      </div>
	
	);
  }
}

export default PropertyImageComponent;