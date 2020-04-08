import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Badge,  Card, CardBody, CardHeader, Col, Row ,Modal, ModalHeader, ModalBody, ModalFooter,FormGroup,Label,Input, } from 'reactstrap';

import axios from 'axios';
const API_URL = process.env.REACT_APP_API_URL;

class ViewIndividualUser extends Component {
 constructor(props) {
    super(props);
	this.state = { UserData: '' }
 }
	componentWillReceiveProps (newProps) {
		
		let $this  = this;
		
		//if(this.props.user_id!='') {
			 let PostData = { user_id: newProps.UserId, };
		axios.post(API_URL+'/api/admin/get_userdetailbyid',PostData).then(function(response){
				 if(response.data.Statuscode==200) {
						let resData = response.data.Data[0];
						
						$this.setState({ UserData: resData });		
				 }
		}).catch(function(error){  console.log(error); });   
		
		//}
	 
	}
  render() {


    return (
      <div className="animated fadeIn">
        <Row>
			 <Col>
           
                
                <Modal isOpen={this.props.isOpen} toggle={this.toggle} className={'modal-lg'}>
                  <ModalHeader toggle={this.toggle}>Individual User View <span>UserID : {this.state.UserData.user_regno}</span></ModalHeader>
                  <ModalBody>
						 <Row>
							<Col md="4">
								<FormGroup>
									<Label htmlFor="name">User Name : {this.state.UserData.user_fullname}</Label>
								</FormGroup>
							</Col>
							<Col md="4">
								<FormGroup>
									<Label htmlFor="name">User Email : {this.state.UserData.user_emailid}</Label>
								</FormGroup>
								
							</Col>
							<Col md="4">
									<FormGroup>
										<Label htmlFor="name">Mobile No. :{this.state.UserData.user_mobileno} </Label>
									</FormGroup>
							</Col>
						</Row>	
						 <Row>
							<Col md="4">
								<FormGroup>
									<Label htmlFor="name">Alternate Mobile No. :{this.state.UserData.user_alternumber}</Label>
								</FormGroup>
							</Col>
							<Col md="4">
								<FormGroup>
									<Label htmlFor="name">State : {this.state.UserData.state_name} </Label>
								</FormGroup>
								
							</Col>
							<Col md="4">
									<FormGroup>
										<Label htmlFor="name">City : {this.state.UserData.city_name} </Label>
									</FormGroup>
							</Col>
						</Row>
						<Row>
							<Col md="4">
								<FormGroup>
									<Label htmlFor="name">Area : {this.state.UserData.localities}</Label>
								</FormGroup>
							</Col>
							<Col md="4">
								<FormGroup>
									<Label htmlFor="name">Address : {this.state.UserData.address}</Label>
								</FormGroup>
								
							</Col>
							<Col md="4">
									<FormGroup>
										<Label htmlFor="name">Landmark : {this.state.UserData.land_mark}</Label>
									</FormGroup>
							</Col>
						</Row>
						<Row>
							<Col md="4">
								<FormGroup>
									<Label htmlFor="name">Pincode : {this.state.UserData.pincode}</Label>
								</FormGroup>
							</Col>
							<Col md="4">
								<FormGroup>
									<Label htmlFor="name">Latitude : {this.state.UserData.latitude} </Label>
								</FormGroup>
								
							</Col>
							<Col md="4">
									<FormGroup>
										<Label htmlFor="name">Longitude : {this.state.UserData.longitude}</Label>
									</FormGroup>
							</Col>
						</Row>
						
                  </ModalBody>
                  <ModalFooter>
                    
                    <Button color="secondary" onClick={this.props.onclicktoggle}>Close</Button>
                  </ModalFooter>
                </Modal>
					
				
				</Col>
				
        </Row>
      </div>
    )
  }
}

export default ViewIndividualUser;
