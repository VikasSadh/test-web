import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import logo from '../../../assets/img/brand/logo.png'

class ComingSoon extends Component {
  render() {
    return (
      <div className="app flex-row align-items-center bg-clr cmgsn-pg">
        <Container>
          <Row className="justify-content-center">
            <Col md="6">
              <CardGroup className="login-pg">
                <Card className="p-4">
                  <CardBody >
                    <img src={logo} width="200" />
                      <h1>Coming Soon</h1>
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

export default ComingSoon;
