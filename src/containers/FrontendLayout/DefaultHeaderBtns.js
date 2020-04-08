import React, { Component } from 'react';
import { Link, NavLink,Redirect } from 'react-router-dom';
import { Form,Button, FormGroup, FormControl, ControlLabel,Modal, ModalHeader ,ModalBody, ModalFooter } from "react-bootstrap";
// import {  } from 'react-bootstrap';
import {toastr} from 'react-redux-toastr';
import logo from '../../frontscss/img/others/login-logo.png'

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

class DefaultHeaderBtns extends Component {	
  constructor(props) {
    super(props);
    this.state = { fields: {}, errors: {},modal: false, urlpath:'',redirect:false };
		this.toggle = this.toggle.bind(this);
		
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
  };

  toggle() { this.setState({modal: !this.state.modal}); };
  
  handleChange(e) {
		let $this = this;
		let fields = this.state.fields;
		
		fields[e.target.name] = e.target.value;
		this.setState({ fields });
}

handleSubmit(e) {
      e.preventDefault();
	  let $this = this;
      if (this.validateForm()) {
          let fields = {};
         fields["user_name"] = "";
         fields["user_password"] = "";
       
			this.setState({fields:fields,modal: !this.state.modal});
        //  alert("Form submitted");
			toastr.success('Login', 'Successfully!', toastrSuccessOptions);
		  $this.setState({ redirect: true });
		 
	 }
}
validateForm() {

      let fields = this.state.fields;
      let user_area = this.state.user_area;
      let errors = {};
      let formIsValid = true;
// user_name
	if (!fields["user_name"]) {
        formIsValid = false;
        errors["user_name"] = "This is Required field";
      }
// user_emailid	  
 if (!fields["user_password"]) {
        formIsValid = false;
        errors["user_password"] = "This is Required field";
      }

    this.setState({ errors: errors });
    return formIsValid;


    }
	
  componentDidMount() {
		//console.log(window.location.href);
		// console.log(window.location.pathname);
		let urlpath = window.location.pathname;
		console.log(urlpath)
		 this.setState({urlpath:urlpath});
}
  render() {
	  const { redirect } = this.state;
		if (redirect) { return <Redirect to='/user-profile'/>; }
    return (     	
      <div className="header-btns">
	      <Modal show={this.state.modal} className="modal1">
          <Modal.Header>
            <button type="button" onClick={this.toggle} className="close" data-dismiss="modal" aria-label="Close"><i className="fas fa-times"></i></button>
          </Modal.Header>
          <Modal.Body>
            <div className="login-popup text-center">
              <a href="/"><img src={logo} className="img-fluid" alt="Logo" /></a>
              <h4>Login / Sign up</h4>
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <div className="form-option form-option1">
                    <div className="form-fields">
                      <input type="text" placeholder="User Name" className="form-control in1" name="user_name" value={this.state.fields.user_name} onChange={this.handleChange} />
                    </div>
					<div className="errorMsg">{this.state.errors.user_name}</div>
                    <div className="form-fields">
                      <input type="text" placeholder="Phone Number" className="form-control in2" name="user_password" value={this.state.fields.user_password} onChange={this.handleChange}  />
                    </div>  
					<div className="errorMsg">{this.state.errors.user_password}</div>					
                    <div className="form-btns">
                      <button type="submit" className="btn frm-btn1">Continue</button>                    
                    </div> 
                  </div> 
                  <div className="form-option form-option2">
                    <div className="form-fields input-group">
                      <label>Enter OTP</label>
                      <input className="form-control" type="text" maxlength="1" />
                      <input className="form-control" type="text" maxlength="1" />
                      <input className="form-control" type="text" maxlength="1" />
                      <input className="form-control" type="text" maxlength="1" />
                    </div>
                    <div className="form-fields">
                      <div className="input-group">
                        <input type="text" className="form-control" placeholder="Enter 4 Digit pin" />
                        <div className="input-group-append">
                          <a href="#" className="btn" type="submit"><i className="fas fa-eye"></i></a>
                        </div>
                      </div>
                    </div>   
                    <div className="form-btns">
                      <button type="submit" className="btn frm-btn2">Submit</button>                    
                    </div>   
                    <a href="#">Resend OTP</a>                             
                  </div> 
                </div>
              </form>
              <div className="login-social">
                <h6>or connect with</h6>
                <ul className="list-unstyled d-inline-flex">
                  <li><a href="https://www.facebook.com/ezeehousing" target="_blank"><i className="fab fa-facebook-f"></i></a></li>
                  <li><a href="https://aboutme.google.com/u/0/?referer=gplus" target="_blank"><i className="fab fa-google"></i></a></li>
                  <li><a href="https://www.linkedin.com/in/ezeehousing-com-70174a19a" target="_blank"><i className="fab fa-linkedin-in"></i></a></li>
                </ul>
              </div>  
            </div>
          </Modal.Body>
        </Modal>
        <ul className="list-unstyled d-inline-flex">
			<li><a href="/post-a-property" className="btn"><i className="far fa-building"></i> Post a Property</a></li>
			<li>
        <a href="javascript:void(0);" onClick={() => this.props.openModalPopup()} className="btn login-btn" className="btn login-btn"><i className="far fa-user"></i> Login</a>
       
      </li>
        </ul>		
      </div>  		
    );
  }
}



export default DefaultHeaderBtns;
