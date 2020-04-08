import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Badge, Pagination, PaginationItem, PaginationLink,  Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';


class BuilderUserList extends Component {

  render() {


    return (
      <div className="animated fadeIn">
        <Row>
          <Col lg={12}>
            <Card className="users-pg">
              <CardHeader>
			  <Link to="/ez-admin/add-individual-user"> <Button color="primary" className="px-4"><i className="fa fa-plus"></i> Add</Button></Link>
                <strong><i className="icon-info pr-1"></i>User List</strong>
              </CardHeader>
              <CardBody>
                  <Table responsive bordered>
                  <thead>
                  <tr>
                    <th>S.No</th>
                    <th>User Id</th>
                    <th>User Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Area</th>
                    <th>Pincode</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>1</td>
                    <td>0001</td>
                    <td>John</td>
                    <td>name@gmail.com</td>
                    <td>8888888888</td>
                    <td>Chennai</td>
                    <td>600018</td>
                    <td>
                      <Badge color="success">Active</Badge>
                    </td>
                    <td>
						<a href=""><i className="fa fa-edit"></i></a>
						<a href=""><i className="fa fa-eye"></i></a>
						<a href=""><i className="fa fa-close"></i></a>
					</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>0002</td>
                    <td>Joe</td>
                    <td>name@gmail.com</td>
                    <td>8888888888</td>
                    <td>Chennai</td>
                    <td>600018</td>
                    <td>
                      <Badge color="danger">Pending</Badge>
                    </td>
                    <td>
						<a href=""><i className="fa fa-edit"></i></a>
						<a href=""><i className="fa fa-eye"></i></a>
						<a href=""><i className="fa fa-close"></i></a>
					</td>
                  </tr>
				  <tr>
                    <td>3</td>
                    <td>0003</td>
                    <td>Lara</td>
                    <td>name@gmail.com</td>
                    <td>8888888888</td>
                    <td>Chennai</td>
                    <td>600018</td>
                    <td>
                      <Badge color="secondary">Inactive</Badge>
                    </td>
                    <td>
						<a href=""><i className="fa fa-edit"></i></a>
						<a href=""><i className="fa fa-eye"></i></a>
						<a href=""><i className="fa fa-close"></i></a>
					</td>
                  </tr>
				  <tr>
                    <td>4</td>
                    <td>0004</td>
                    <td>John</td>
                    <td>name@gmail.com</td>
                    <td>8888888888</td>
                    <td>Chennai</td>
                    <td>600018</td>
                    <td>
                      <Badge color="success">Active</Badge>
                    </td>
                    <td>
						<a href=""><i className="fa fa-edit"></i></a>
						<a href=""><i className="fa fa-eye"></i></a>
						<a href=""><i className="fa fa-close"></i></a>
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

export default BuilderUserList;
