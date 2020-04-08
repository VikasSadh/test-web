import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import makeAnimated from 'react-select';
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


class AddAttribute extends Component {
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

    const servicesTypes = [
      { value: 'seller', label: 'Seller' },
      { value: 'buyer', label: 'Buyer' },
      { value: 'renter', label: 'Renter' }
    ]
    const attributesFields = [
      { value: 'Text', label: 'Text' },
      { value: 'Input', label: 'Input' },
      { value: 'Select', label: 'Select' },
      { value: 'Checkbox', label: 'Checkbox' },
      { value: 'Radio', label: 'Radio' },
      { value: 'Switch', label: 'Switch' }
    ]
    const tabNames = [
      { value: 'Properties', label: 'Properties' },
      { value: 'Amenities', label: 'Amenities' }
    ]
    return (
      <div className="animated fadeIn form-pgs">
    <Row>
          <Col xs="12" sm="12">
            <Card>
              <CardHeader>
                <strong>Add Attribute</strong>
                { /*<small> Form</small> */}
              </CardHeader>
              <CardBody >
                <Row>
                  <Col md="12" xl="8">
                    <FormGroup row>
                      <Col md="3">
                        <Label htmlFor="attributename">Attribute Name</Label>
                      </Col>
                      <Col xs="12" md="9">
                        <Input type="text" id="attributename" placeholder="Enter Attribute Name" required />
                      </Col>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md="12" xl="8">
                    <FormGroup row>
                      <Col md="3">
                        <Label htmlFor="services-type">Services Type</Label>
                      </Col>
                      <Col xs="12" md="9">
                        {/*<Input type="select" name="services-type" id="services-type" multiple>
                          <option value="1">Seller</option>
                          <option value="2">Buyer</option>
                          <option value="3">Renter</option>
                        </Input> */}
                        <Select options={servicesTypes} isMulti />
                      </Col>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md="12" xl="8">
                    <FormGroup row>
                      <Col md="3">
                        <Label htmlFor="attribute-field">Attribute Field</Label>
                      </Col>
                      <Col xs="12" md="9">
                        <Select options={attributesFields} />
                      </Col>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md="12" xl="8">
                    <FormGroup row>
                      <Col md="3">
                        <p>Attribute Required</p>
                      </Col>
                      <Col xs="12" md="9">
                        <FormGroup check inline>
                        <Input className="form-check-input" type="radio" id="inline-radio1" name="inline-radios" value="option1" />
                        <Label className="form-check-label" check htmlFor="inline-radio1">Yes</Label>
                      </FormGroup>
                      <FormGroup check inline>
                        <Input className="form-check-input" type="radio" id="inline-radio2" name="inline-radios" value="option2" />
                        <Label className="form-check-label" check htmlFor="inline-radio2">No</Label>
                      </FormGroup>
                      </Col>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md="12" xl="8">
                    <FormGroup row>
                      <Col md="3">
                        <Label htmlFor="tab-name">Tab Name</Label>
                      </Col>
                      <Col xs="12" md="9">
                        <Select options={tabNames} />
                      </Col>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md="12" xl="8">
                    <FormGroup row>
                      <Col md="3">
                        <Label htmlFor="attribute">Attribute Value</Label>
                      </Col>
                      <Col xs="12" md="9">
                        <Input type="textarea" name="attribute" id="attribute" rows="2"  placeholder="Enter Option1, Option2.. etc " />
                      </Col>
                    </FormGroup>
                  </Col>
                </Row>
              </CardBody>       
              <CardFooter>
                <Link to="/ez-admin/attributes"><Button outline type="submit" size="sm" color="success"><i className="fa fa-dot-circle-o"></i> Submit</Button></Link>
                <Link to="/ez-admin/attributes"><Button outline type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Back</Button></Link>
              </CardFooter>
            </Card>
          </Col>
        </Row>       
      </div>
    )
  }
}

export default AddAttribute;
