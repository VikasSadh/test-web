import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Badge,  Card, CardBody, CardHeader,CardFooter,Form, Col, Row ,Modal, ModalHeader, ModalBody, ModalFooter,FormGroup,Label,Input, } from 'reactstrap';
import Select from 'react-select';
import {toastr} from 'react-redux-toastr';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";



import axios from 'axios';
const API_URL = process.env.REACT_APP_API_URL;

class ScheduleDatetimeModal extends Component {
 constructor(props) {
    super(props);
		this.state = { fields: {schedule_date: new Date(),property_id:''}, errors: {},ScheduleTimeoption:[] }
			this.mobileerror = React.createRef();
		 this.handleChange = this.handleChange.bind(this);
		 this.handleSubmit = this.handleSubmit.bind(this);
		
  }


componentWillMount() {
	
		 let $this  = this;
		 let fields = this.state.fields;
		
		// Get all Setting Data select box option data
	axios.get(API_URL+'/api/admin/getallsettingdata').then(function(response){
			if(response.data.Statuscode==200) {
						let resData = response.data;
					resData.propertyoptionData.map(function(item) {
						console.log(item)
							if(item.setting_option_name=='time_option') { $this.setState({ ScheduleTimeoption: JSON.parse(item.setting_option_value)}); 	}
					});
			} 
	})
		
		
}
	
	componentWillReceiveProps(newProps) {    
		 console.log(newProps.PropertyId);
	  // console.log('Component WILL RECIEVE PROPS!:'+newProps.isOpen)
	  let fields = this.state.fields;
	  let errors = {};
	  fields['property_id'] = newProps.PropertyId;
	  if(newProps.isOpen===false) { 
			// document.getElementById("add_individualuser_form").reset();
		
		
		this.setState({ errors:errors,fields });
	  }
   }
	
 handleChangeDate = date => {
		
		let $this = this;
		let fields = this.state.fields;
		fields['schedule_date'] = date;
		this.setState({ fields });
  };	
 handleChange(e,field_info) {
		console.log(e)
		let $this = this;
		let fields = this.state.fields;
		fields[field_info.name] = e;
	  this.setState({ fields });
	   
	
}
 handleSubmit(e) {
	 let $this = this;
      e.preventDefault();
      if (this.validateForm()) {
         console.log(this.state.fields);
         
		    const PostData = {
					schedule_date: this.state.fields.schedule_date,
					schedule_time: this.state.fields.schedule_time.value,
					property_id: this.state.fields.property_id,
			};
			const { history } = this.props;
		 axios.post(API_URL+'/api/admin/insertinspectionschedule', PostData).then(function(response){
				 if(response.data.Statuscode==200) {
						    toastr.success('Inspection Schedule', response.data.Message);
							$this.props.ScheduleSave();
							
					} else {
						toastr.error('error', response.data.Message);
				    }
				 
				// console.log(response);
      }).catch(function(error){  console.log(error); });
      

	  
	  
	  }

    }


validateForm() {

      let fields = this.state.fields;
      let user_area = this.state.user_area;
      let errors = {};
      let formIsValid = true;

// schedule_date
	if (!fields["schedule_date"]) {
        formIsValid = false;
        errors["schedule_date"] = "Please Select Date.";
      }
// schedule_date	  
 if (!fields["schedule_time"]) {
        formIsValid = false;
        errors["schedule_time"] = "Please Select Time.";
      }
    this.setState({ errors: errors });
    return formIsValid;


    }


 
  render() {
	

    return (
      <div className="animated fadeIn">
        <Row>
			 <Col>
           
                
                <Modal isOpen={this.props.isOpen} toggle={this.toggle} className={'modal-lg'}>
                  <ModalHeader toggle={this.toggle}>Schedule Date and Time </ModalHeader>
                  <ModalBody>
								<Row>
          <Col xs="12" sm="12">
            <Card>
			<Form id="add_individualuser_form" method="post"  name="UserForm"  onSubmit={this.handleSubmit}>
              <CardBody >
							
							<FormGroup row>
                            <Col md="5">
                              <Label htmlFor="date-input">Assign Date</Label>
                            </Col>
                            <Col xs="12" md="7">
									<DatePicker	className="form-control" name="schedule_date" selected={this.state.fields.schedule_date} onChange={this.handleChangeDate} dateFormat="dd-MM-yyyy"  minDate={new Date()} />
									<div className="errorMsg">{this.state.errors.schedule_date}</div>	
							 </Col>
                          </FormGroup>
						  
                          <FormGroup row>
								<Col md="5">
								<Label htmlFor="assign-time">Assign Time</Label>
                            </Col>
                            <Col xs="12" md="7">
                              <Select  options={this.state.ScheduleTimeoption} name="schedule_time" value={this.state.fields.schedule_time} onChange={this.handleChange} ></Select>
							  <div className="errorMsg">{this.state.errors.schedule_time}</div>
                            </Col>
                          </FormGroup>
						   	
                          
					
              </CardBody>			  
              <CardFooter>
                <Button outline type="submit" size="sm" color="success"><i className="fa fa-dot-circle-o"></i> Submit</Button>
                { /* <Link to="/ez-admin/individual-users"><Button outline type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Back</Button></Link> */ }
				<Button type="reset" outline size="sm" color="danger" onClick={this.props.onclicktoggle}>Close</Button>	
              </CardFooter>
			  </Form>
            </Card>
          </Col>
		</Row>
						
            </ModalBody>
          
                </Modal>
					
				
				</Col>
				
        </Row>
      </div>
    )
  }
}

export default ScheduleDatetimeModal;
