import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Badge, Pagination, PaginationItem, PaginationLink,  Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';


class AttributeList extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col lg={12}>
            <Card className="users-pg">
              <CardHeader>
			  <Link to="/ez-admin/add-attribute"> <Button color="primary" className="px-4"><i className="fa fa-plus"></i> Add</Button></Link>
                <strong><i className="icon-info pr-1"></i>Attributes</strong>
              </CardHeader>
              <CardBody>
                  <Table responsive bordered>
                  <thead>
                  <tr>
                    <th>S.No</th>
                    <th>Attribute Name</th>
                    <th>Services Type</th>
                    <th>Tab Name</th>
                    <th>Field Name</th>
                    <th>Action</th>
                  </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>AC</td>
                      <td>Buyer</td>
                      <td>Amenties</td>
                      <td>Text</td>
                      <td className="option-btns">
                        <a href=""><i className="fa fa-edit"></i></a>
                        <a href=""><i className="fa fa-eye"></i></a>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Furnished</td>
                      <td>Seller</td>
                      <td>Properties</td>
                      <td>Checkbox</td>
                      <td className="option-btns">
                        <a href=""><i className="fa fa-edit"></i></a>
                        <a href=""><i className="fa fa-eye"></i></a>
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Non AC</td>
                      <td>Buyer, Seller</td>
                      <td>Amenties</td>
                      <td>Text</td>
                      <td className="option-btns">
                        <a href=""><i className="fa fa-edit"></i></a>
                        <a href=""><i className="fa fa-eye"></i></a>
                      </td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Bike Parking</td>
                      <td>Buyer, Seller</td>
                      <td>Amenties</td>
                      <td>Ratio</td>
                      <td className="option-btns">
                        <a href=""><i className="fa fa-edit"></i></a>
                        <a href=""><i className="fa fa-eye"></i></a>
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

export default AttributeList;
