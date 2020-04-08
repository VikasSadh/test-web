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
  Row, Table,} from 'reactstrap';


class AddRoles extends Component {
 constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.state = {
      collapse: true,
      fadeIn: true,
      timeout: 300
    };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  toggleFade() {
    this.setState((prevState) => { return { fadeIn: !prevState }});
  }
  render() {


    return (
      <div className="animated fadeIn form-pgs">
    <Row>
          <Col xs="12" sm="12">
            <Card>
              <CardHeader>
                <strong>Add Roles</strong>
                { /*<small> Form</small> */}
              </CardHeader>
              <CardBody >
                <Row>
                  <Col md="12" xl="6">
                    <FormGroup row>
                      <Col md="3">
                        <Label>Role Name</Label>
                      </Col>
                      <Col xs="12" md="9">
                        <Input type="text" id="rolename" placeholder="Enter role name" required />
                      </Col>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md="12">
                    <FormGroup row>                      
                      <Col md="12">
                        <Label>Permissions</Label>                        
                      </Col>                   
                      <Col md="12" xl="6">
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
                      </Col>

                    </FormGroup>
                  </Col>
                </Row>
              </CardBody>       
              <CardFooter>
                <Link to="/ez-admin/roles"><Button outline type="submit" size="sm" color="success"><i className="fa fa-dot-circle-o"></i> Submit</Button></Link>
                <Link to="/ez-admin/roles"><Button outline type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Back</Button></Link>
              </CardFooter>
            </Card>
          </Col>
        </Row>       
      </div>
    )
  }
}

export default AddRoles;
