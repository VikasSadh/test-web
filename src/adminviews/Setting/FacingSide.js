import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Badge, Pagination, PaginationItem, PaginationLink,  Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';


class FacingSide extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col lg={12}>
            <Card className="users-pg">
              <CardHeader>
			  <Link to="/ez-admin/facing-side"> <Button color="primary" className="px-4"><i className="fa fa-plus"></i> Add</Button></Link>
                <strong><i className="icon-info pr-1"></i>Facing Side</strong>
              </CardHeader>
              <CardBody>
                  <Table responsive bordered>
                  <thead>
                  <tr>
                    <th>S.No</th>
                    <th>Facing Side</th>
                   
                    <th>Created Date</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>East</td>
                      
                      <td>01-01-2020</td>
                      <td>
                        <Badge color="success">Active</Badge>
                      </td>
                      <td className="option-btns">
                        <a href=""><i className="fa fa-edit"></i></a>
                        <a href=""><i className="fa fa-eye"></i></a>
                        <a href=""><i className="fa fa-close"></i></a>
                        <a href=""><i className="fa fa-check"></i></a>
                        <a href=""><i className="fa fa-key"></i></a>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>West</td>
                      
                      <td>01-01-2020</td>
                      <td>
                        <Badge color="danger">Active</Badge>
                      </td>
                      <td className="option-btns">
                        <a href=""><i className="fa fa-edit"></i></a>
                        <a href=""><i className="fa fa-eye"></i></a>
                        <a href=""><i className="fa fa-close"></i></a>
                        <a href=""><i className="fa fa-check"></i></a>
                        <a href=""><i className="fa fa-key"></i></a>
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>North</td>
                      
                      <td>01-01-2020</td>
                      <td>
                        <Badge color="danger">Active</Badge>
                      </td>
                      <td className="option-btns">
                        <a href=""><i className="fa fa-edit"></i></a>
                        <a href=""><i className="fa fa-eye"></i></a>
                        <a href=""><i className="fa fa-close"></i></a>
                        <a href=""><i className="fa fa-check"></i></a>
                        <a href=""><i className="fa fa-key"></i></a>
                      </td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>South</td>
                      
                      <td>01-01-2020</td>
                      <td>
                        <Badge color="danger">Active</Badge>
                      </td>
                      <td className="option-btns">
                        <a href=""><i className="fa fa-edit"></i></a>
                        <a href=""><i className="fa fa-eye"></i></a>
                        <a href=""><i className="fa fa-close"></i></a>
                        <a href=""><i className="fa fa-check"></i></a>
                        <a href=""><i className="fa fa-key"></i></a>
                      </td>
                    </tr>
                  </tbody>
                </Table>
                <Pagination>
                  <PaginationItem>
                    <PaginationLink previous tag="button"></PaginationLink>
                  </PaginationItem>
                  <PaginationItem active>
                    <PaginationLink tag="button">1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink tag="button">2</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink tag="button">3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink tag="button">4</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink next tag="button"></PaginationLink>
                  </PaginationItem>
                </Pagination>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default FacingSide;
