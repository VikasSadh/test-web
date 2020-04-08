import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {  Button,Badge, Card, CardBody, CardHeader, CardFooter, Col,Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Fade,
  Form,
  FormGroup,
  FormText,
  FormFeedback,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupButtonDropdown,
  InputGroupText,
  Label,
  Row,Modal, ModalBody, ModalFooter, ModalHeader,Table } from 'reactstrap';


class AddAdminUser extends Component {
 constructor(props) {
    super(props);

  /*  this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.state = {
      collapse: true,
      fadeIn: true,
      timeout: 300
    }; */
  this.state = {
      role:"",showinput:false,modal: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
     this.toggle = this.toggle.bind(this);  
  }
toggle() {
    this.setState({
      modal: !this.state.modal,
    });
  }
handleChange(event) {
     console.log(event.target.value)
     if(event.target.value != "") {
       
       var showinput=true;
     } else {
      
      var showinput=false;
     }
    this.setState({role: event.target.value,showinput:showinput});
  }

  handleSubmit(event) {
    alert('Your favorite flavor is: ' + this.state.building);
    event.preventDefault();
  }
  
  /* toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  toggleFade() {
    this.setState((prevState) => { return { fadeIn: !prevState }});
  } */
  
  render() {


    return (
      <div className="animated fadeIn form-pgs">
    <Row>
          <Col xs="12" sm="12">
            <Card>
              <CardHeader>
                <strong>Add  User</strong>
                { /*<small> Form</small> */}
              </CardHeader>
              <CardBody >
                <Row>
          <Col md="6" xl="4">
                    <FormGroup>
                      <Label htmlFor="name">User Name <span>*</span></Label>
                      <Input type="text" id="name" placeholder="Enter your name" required />
                    </FormGroup>
                  </Col>
          <Col md="6" xl="4">
                    <FormGroup>
                      <Label htmlFor="mail">User Email <span>*</span></Label>
                      <Input type="email" id="mail" placeholder="Enter your mail id" required />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
          <Col md="6" xl="4">
                    <FormGroup>
                      <Label htmlFor="mobile">Mobile No. <span>*</span></Label>
                      <Input type="text" id="mobile" placeholder="Enter mobile no" required />
                    </FormGroup>
                  </Col>
          <Col md="6" xl="4">
                    <FormGroup>
                      <Label htmlFor="alternate-mobile">Alternate Mobile No. <span>*</span></Label>
                      <Input type="text" id="alternate-mobile" placeholder="Enter alternate mobile no" required />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
          <Col md="6" xl="4">
                    <FormGroup>
                      <Label htmlFor="area">Area <span>*</span></Label>
                      <Input type="text" id="area" placeholder="Enter your area" required />
                    </FormGroup>
                  </Col>
          <Col md="6" xl="4">
                    <FormGroup>
                      <Label htmlFor="street">Address <span>*</span></Label>
                      <Input type="text" id="street" placeholder="Enter your address" required />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
          <Col md="6" xl="4">
                    <FormGroup>
                      <Label htmlFor="city">City <span>*</span></Label>
                      <Input type="select" name="city" id="city">
                        <option value="1">Chennai</option>
                        <option value="2">Trichy</option>
                        <option value="3">Coimbatore</option>
                      </Input>
                    </FormGroup>
                  </Col>
          <Col md="6" xl="4">
                    <FormGroup>
                      <Label htmlFor="state">State <span>*</span></Label>
                      <Input type="text" id="state" placeholder="Enter your State" required />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
          <Col md="6" xl="4">
                    <FormGroup>
                      <Label htmlFor="landmark">Landmark <span>*</span></Label>
                      <Input type="text" id="landmark" placeholder="Enter Landmark" required />
                    </FormGroup>
                  </Col>
          <Col md="6" xl="4">
                    <FormGroup>
                      <Label htmlFor="pincode">Pincode <span>*</span></Label>
                      <Input type="text" id="pincode" placeholder="Enter Pincode" required />
                    </FormGroup>
                  </Col>
                </Row>
        <Row>
          <Col md="6" xl="4">
                    <FormGroup>
                      <Label htmlFor="city">Role Name<span>*</span></Label>
                      <Input onChange={this.handleChange}  value={this.state.role} type="select" name="role" id="role">
                        <option value="">Select Role</option>
                        <option value="1">Hr</option>
                        <option value="2">Sales</option>
                      </Input>
            
                    </FormGroup>
          </Col>
          { this.state.showinput ? 
          <Col md="1">
             <Button active block color="link" className="btn-pill" aria-pressed="true" onClick={this.toggle} >Custom</Button>
             <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                <ModalHeader toggle={this.toggle}>Custom Roles</ModalHeader>
                <ModalBody>
                    <Table responsive bordered>
                          <thead>
                          <tr>
                            <th>S.No</th>
                            <th>Module Name</th>
                            <th>Create</th>
                            <th>View</th>
                            <th>Delete</th>
                          </tr>
                          </thead>
                          <tbody>
                          <tr>
                            <td>1</td>
                            <td>User</td>
                            <td className="input-align">
                              <FormGroup check className="checkbox">
                                <Input className="form-check-input" type="checkbox" id="checkbox1" name="checkbox1" value="option1" />
                              </FormGroup>
                            </td>
                            <td className="input-align">
                              <FormGroup check className="checkbox">
                                <Input className="form-check-input" type="checkbox" id="checkbox2" name="checkbox2" value="option2" />
                              </FormGroup>
                            </td>
                            <td className="input-align">
                              <FormGroup check className="checkbox">
                                <Input className="form-check-input" type="checkbox" id="checkbox3" name="checkbox3" value="option3" />
                              </FormGroup>
                            </td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>Admin User</td>
                            <td className="input-align">
                              <FormGroup check className="checkbox">
                                <Input className="form-check-input" type="checkbox" id="checkbox1" name="checkbox1" value="option1" />
                              </FormGroup>
                            </td>
                            <td className="input-align">
                              <FormGroup check className="checkbox">
                                <Input className="form-check-input" type="checkbox" id="checkbox2" name="checkbox2" value="option2" />
                              </FormGroup>
                            </td>
                            <td className="input-align">
                              <FormGroup check className="checkbox">
                                <Input className="form-check-input" type="checkbox" id="checkbox3" name="checkbox3" value="option3" />
                              </FormGroup>
                            </td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>Seller Property</td>
                            <td className="input-align">
                              <FormGroup check className="checkbox">
                                <Input className="form-check-input" type="checkbox" id="checkbox1" name="checkbox1" value="option1" />
                              </FormGroup>
                            </td>
                            <td className="input-align">
                              <FormGroup check className="checkbox">
                                <Input className="form-check-input" type="checkbox" id="checkbox2" name="checkbox2" value="option2" />
                              </FormGroup>
                            </td>
                            <td className="input-align">
                              <FormGroup check className="checkbox">
                                <Input className="form-check-input" type="checkbox" id="checkbox3" name="checkbox3" value="option3" />
                              </FormGroup>
                            </td>
                          </tr>
                          <tr>
                            <td>4</td>
                            <td>Rental Property</td>
                            <td className="input-align">
                              <FormGroup check className="checkbox">
                                <Input className="form-check-input" type="checkbox" id="checkbox1" name="checkbox1" value="option1" />
                              </FormGroup>
                            </td>
                            <td className="input-align">
                              <FormGroup check className="checkbox">
                                <Input className="form-check-input" type="checkbox" id="checkbox2" name="checkbox2" value="option2" />
                              </FormGroup>
                            </td>
                            <td className="input-align">
                              <FormGroup check className="checkbox">
                                <Input className="form-check-input" type="checkbox" id="checkbox3" name="checkbox3" value="option3" />
                              </FormGroup>
                            </td>
                          </tr>
                          </tbody>
                        </Table>  
                </ModalBody>
                <ModalFooter>
                <Button color="primary" onClick={this.toggle}>Submit</Button>{' '}
                <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                </ModalFooter>
              </Modal>
        
                  </Col>
           : null }
                </Row>
        
              </CardBody>       
              <CardFooter>
                <Link to="/ez-admin/admin-users"><Button outline type="submit" size="sm" color="success"><i className="fa fa-dot-circle-o"></i> Submit</Button></Link>
                <Link to="/ez-admin/admin-users"><Button outline type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Back</Button></Link>
              </CardFooter>
            </Card>
          </Col>
    </Row>
    
       
      </div>
    )
  }
}

export default AddAdminUser;
