import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Modal, ModalHeader ,ModalBody, ModalFooter } from "react-bootstrap";
import './login.css'
import {toastr} from 'react-redux-toastr'

let obj = {}
class LoginPage extends Component {
 constructor(props) {
    super(props);	
    this.state = {
    	formData: {}
    }
 }
 
handleChange =(event) => {
	obj[event.target.name] = event.target.value
	this.setState({formData: obj})
}

handleSubmit = (event) => {
	event.preventDefault();
	let isValid = this.formValidation()
	debugger
}

formValidation = () => {
const {formData: {username, password}}	= this.state
debugger
if ( /^\d{10}$/.test(username)  ){
	if (/^\d{4}$/.test(password) == true ){
		if ( username == "9027280211" && password == "1234"){
			var apin = prompt("Please Enter Pin Again")
			if (/^\d{4}$/.test(apin) == true){
				if ( apin == "1234"){
					toastr.success("Login successfully")
					return true
				}
				else{
					toastr.error('Error', 'Invalid NUMBER AND PIN')
				}
			}else{
				toastr.error('Error', 'Please Enter Correct Pin')				
			}
		}else{
			return false
		}
	}else{
			toastr.error('Error', "Please Enter Correct Pin")
		}
	}
	else{
		toastr.error("Error","Please Enter Correct Number")
	}


}


render() {
	debugger
	return (
		 <Modal show={this.props.loginModal} className="modal2">
          <Modal.Header>
            <button type="button" onClick={() => this.props.closeModalPopup()} className="close" data-dismiss="modal" aria-label="Close"><i className="fas fa-times"></i></button>
          </Modal.Header>
          <Modal.Body>
          <div class="container-mdoal">
						<div class="main">
						<h2>Javascript Login Form Validation</h2>
						<form id="form_id" onSubmit={(event) => this.handleSubmit(event)}>
							<label>Number :</label>
							<input type="text" name="username" id="username" className="form-control" onChange={(event) => this.handleChange(event)}/>
							<label>Pin :</label>
							<input type="password" name="password" id="password"  className="form-control" onChange={(event) => this.handleChange(event)} maxlength="4"/>
							<input type="submit" className="btn btn-primary" value="Login" id="submit"/>
						</form>
						<span><b class="note">Note : </b>For this demo use following username and password. <br/><b class="valid">Number:9027280211<br/>Password : 1234</b></span>
						</div>
					</div>
          </Modal.Body>
        </Modal>)
  }
}

export default LoginPage;
