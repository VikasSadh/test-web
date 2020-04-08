import React, { Component } from 'react';
import { Link,Redirect, Route, Switch } from 'react-router-dom';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import {toastr} from 'react-redux-toastr';

import logo from '../../assets/img/brand/logo.png';

import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;
let adminsession = (localStorage.getItem("admin_session")!=null) ? JSON.parse(localStorage.getItem("admin_session")) : null;
let admin_session = adminsession;

class Login extends Component {
	  constructor(props) {
	  super(props);
		this.state = { fields: {}, errors: {} }
	  
		 this.handleChange = this.handleChange.bind(this);
		 this.handleSubmit = this.handleSubmit.bind(this);
		 
		// console.log(admin_session);
		
	}
	componentWillMount() {
		  if(admin_session!=null  && admin_session.user_id!='') {  this.props.history.push('/ez-admin/dashboard') }
		   
	}
  handleChange(e) {
      let fields = this.state.fields;
      fields[e.target.name] = e.target.value;
      this.setState({ fields });
}

    handleSubmit(e) {
      e.preventDefault();
      if (this.validateForm()) {
          let fields = {};
        //  fields["user_name"] = "";
        // fields["user_password"] = "";
        //  this.setState({fields:fields});
        // alert("Form submitted");
		   const user = {
			user_name: this.state.fields.user_name,
			password: this.state.fields.user_password
		};
			const { history } = this.props;
		axios.post(API_URL+'/api/admin/adminlogin', user).then(function(response){
				 if(response.data.Statuscode==200) {
						  localStorage.setItem("admin_session", JSON.stringify(response.data.Data[0]));
					      toastr.success('Login', response.data.Message);
							// history.push('/ez-admin/dashboard');
							window.location.href = '/ez-admin/dashboard';
					} else {
						toastr.error('Login', response.data.Message);
				    }
				 
				// console.log(response);
      })
     .catch(function(error){  console.log(error); });	
      
	  
	  
	  }

    }
	

 validateForm() {

      let fields = this.state.fields;
      let errors = {};
      let formIsValid = true;
	// user_name
	if (!fields["user_name"]) {
        formIsValid = false;
        errors["user_name"] = "Please enter your user name.";
      }

    // user_password
      if (!fields["user_password"]) {
        formIsValid = false;
        errors["user_password"] = "Please enter your password.";
      }

    this.setState({ errors: errors });
    return formIsValid;


    }
  
  render() {
	  
    return (
      <div className="app flex-row align-items-center bg-clr">
        <Container>
          <Row className="justify-content-center">
            <Col md="6" lg="4">
              <CardGroup className="login-pg">
                <Card className="p-4">
                  <CardBody >
                    <Form method="post"  name="LoginForm"  onSubmit={this.handleSubmit}>
					<img src={logo} width="200" />
                      <h1>Login</h1>
					  <InputGroup className="mb-2">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="text" placeholder="Username"  name="user_name" value={this.state.fields.user_name} onChange={this.handleChange} />
						
                      </InputGroup>
					  <div className="errorMsg">{this.state.errors.user_name}</div>
                      <InputGroup className="mb-2">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="password" placeholder="Password"   name="user_password" value={this.state.fields.user_password} onChange={this.handleChange} />
						
                      </InputGroup>
					  <div className="errorMsg">{this.state.errors.user_password}</div>
                      <Row>
                        <Col xs="12">
                          <Button type="submit" color="primary" className="px-4">Login</Button>
                        </Col>
                       
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
				
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Login;
