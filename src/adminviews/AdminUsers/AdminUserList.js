import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Badge, Pagination, PaginationItem, PaginationLink,  Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';


class AdminUserList extends Component {

  render() {


    return (
      <div className="animated fadeIn">
        <Row>
          <Col lg={12}>
            <Card className="users-pg">
              <CardHeader>
			  <Link to="/ez-admin/add-admin-user"> <Button color="primary" className="px-4"><i className="fa fa-plus"></i> Add</Button></Link>
                <strong><i className="icon-info pr-1"></i>Admin User List</strong>
              </CardHeader>
              <CardBody>
                  <Table responsive bordered>
                  <thead>
                  <tr>
                    <th>S.No</th>
                    <th>Reg No</th>
                    <th>User Name</th>
                    <th>Role Name</th>
					<th>Email</th>
                    <th>Mobile</th>
                    <th>Address</th>
                    <th>City</th>
                    <th>Pincode</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>1</td>
                    <td>EZ001</td>
                    <td>Danny</td>
                    <td>Sales</td>
                    <td>danny@gmail.com</td>
                    <td>8888888888</td>
                    <td>No, Street Name, Area, Landmark</td>
                    <td>Chennai</td>
                    <td>600018</td>
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
                    <td>EZ002</td>
                    <td>sasipriya</td>
                    <td>HR</td>
                    <td>sasipriya@gmail.com</td>
                    <td>8888888888</td>
                    <td>No, Street Name, Area, Landmark</td>
                    <td>Chennai</td>
                    <td>600018</td>
                    <td>
                      <Badge color="danger">Pending</Badge>
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

export default AdminUserList;
