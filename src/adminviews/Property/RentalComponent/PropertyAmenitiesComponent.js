import React, { Component } from "react";
import ReactDOM from "react-dom";
import ReactWizard from "react-bootstrap-wizard";
import { Container, Row, Col,Card ,CardHeader,CardBody, FormGroup, Label,Input,Button,CardFooter} from "reactstrap";
import { AppSwitch } from '@coreui/react'

import axios from 'axios';
const API_URL = process.env.REACT_APP_API_URL;

class PropertyAmenitiesComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {  fields: {dynamic_attributes_aminities:{}}, errors: {},AttributeData:[]};
	this.handleChange = this.handleChange.bind(this);
  }
  
  componentWillMount() {
	let $this  = this;
	let fields = this.state.fields;
	let uoption = [],boption=[],foption=[],ftoption=[];
	// Get Attributes data
const PostData = { servicetype_id:'2',attribute_tab_by:'2' };
		axios.post(API_URL+'/api/admin/getattributesdata', PostData).then(function(response){
				 if(response.data.Statuscode==200) {
						let resData = response.data.Data;
						console.log(resData)
						$this.setState({ AttributeData: resData });
						
			} 
	})
  }
  handleChange(e,field_info,id,keyname) {
	  let $this = this;
		let fields = this.state.fields;
	  if(field_info==undefined) {
			if(e.target.type=='checkbox') {
					if(keyname!='add_rooms')	{	
						let target_value = e.target.checked ? 'Yes' :'No'; 
						let key = 'key_'+id;
						fields[keyname][key] =  target_value;
					} else { 
						e.target.checked ?  fields[keyname][id] =  e.target.value :  fields[keyname] = fields[keyname].filter(function(val) { return val!==e.target.value}) ; 
					}
			 } else { fields[e.target.name] = e.target.value; }
			
		} else { fields[field_info.name] = e; 
		}
		 this.setState({ fields });
  }
  render() {
	  	let $this = this;
    return ( 
			<div>
			
	  <Row className="property-wizards">
          <Col xs="12" sm="12">
				<Row>
					<Col md="12"> <p className="title-style">Property Amenities</p></Col>
			   </Row>
                
				<Row>
				{ this.state.AttributeData!='' ?
				this.state.AttributeData.map(function(item,index) {
						 if(item.attribute_field=='0') { 
						 let key = 'key_'+item.attribute_id;
							return ( <Col md="6" lg="6" xl="3">
								<FormGroup className="switchOptions">
								<Label xs="9" className="nl-padding">{item.attribute_name}</Label>
								<AppSwitch className={'col-3 nr-padding'} size={'lg'} variant={'pill'} color={'success'} outline={'alt'}  label dataOn={'Yes'} dataOff={'No'} checked={ $this.state.fields.dynamic_attributes_aminities[key]==='Yes' ? true : false } name={`dynamic_attributes_aminities[${key}]`}  value={$this.state.fields.dynamic_attributes_aminities[key]} onChange={(e) => $this.handleChange(e,undefined,item.attribute_id,'dynamic_attributes_aminities')} />
						</FormGroup>
					</Col>)
						 
						 }
				
				})
				
				:(null)	
					
				}
				</Row>
          </Col>
		</Row>
		
       
      </div>
	
	);
  }
}

export default PropertyAmenitiesComponent;