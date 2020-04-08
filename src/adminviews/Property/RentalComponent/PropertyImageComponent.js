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

const thumb = {
  display: 'inline-flex',
  borderRadius: 2,
  border: '1px solid #eaeaea',
  marginBottom: 8,
  marginRight: 8,
  width: 100,
  height: 100,
  padding: 4,
  boxSizing: 'border-box'
};

const thumbInner = {
  display: 'flex',
  minWidth: 0,
  overflow: 'hidden'
};

const img = {
  display: 'block',
  width: 'auto',
  height: '100%'
};

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
      <aside style={thumbsContainer}>
        {thumbs}
      </aside>
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
  
  const thumbs = files.map(file => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img
          src={file.preview}
          style={img}
        />
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
      <aside style={thumbsContainer}>
        {thumbs}
      </aside>
    </section>
  );

}



class PropertyImageComponent extends Component {
	    fileObj = [];
    fileArray = [];

  constructor(props) {
    super(props);
    this.state = { fields: {imagesfiles: '', imageslargepath:'',imagesthumbpath:'', videofiles:''}, errors: {} };
//	this.handleChange = this.handleChange.bind(this);
	// this.uploadMultipleFiles = this.uploadMultipleFiles.bind(this)
	// this.uploadFiles = this.uploadFiles.bind(this)
	this.acceptedFiles = this.acceptedFiles.bind(this)
	this.videoacceptedFiles = this.videoacceptedFiles.bind(this)
	


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
						<Previews onclickfileevent={this.acceptedFiles} />
					</Col>
				</Row>
				<Row>
					<Col md="12"> <p className="title-style">Property Video</p></Col>
			   </Row>
			   <Row>
					<Col xs="12" sm="12">
						<VideoUploadFile onclickfileevent={this.videoacceptedFiles} />
					</Col>
				</Row>
			  
				
				
				 
             
          </Col>
		</Row>
		
       
      </div>
	
	);
  }
}

export default PropertyImageComponent;