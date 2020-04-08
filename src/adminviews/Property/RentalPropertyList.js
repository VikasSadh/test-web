import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Badge, Pagination, PaginationItem, PaginationLink,  Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';


class RentalPropertyList extends Component {

  render() {


    return (
      <div className="animated fadeIn">
        <Row>
          <Col lg={12}>
            <Card className="users-pg">
              <CardHeader>
			  <Link to="/ez-admin/add-rental-property"> <Button color="primary" className="px-4"><i className="fa fa-plus"></i> Add</Button></Link>
                <strong><i className="icon-list pr-1"></i>Verified Property List</strong>
              </CardHeader>
              <CardBody>
                  <Table responsive bordered>
                  <thead>
                  <tr>
                    <th>PropertyId</th>
                    <th>User Name</th>
                    <th>Contact Detail</th>
                    <th>Business Type</th>
                    <th>Property Type</th>
					<th>Area</th>
                    <th>Pincode</th>
					<th>Package</th>
                    <th>Payment Mode</th>
                    { /* <th>Status</th> */ }
                    <th>Action</th>
                  </tr>
                  </thead>
                  <tbody>
					  <tr>
						<td>PR000001</td>
						<td>John</td>
						<td>9500182050<br/><a href="/">John@gmail.com</a></td>
						<td>Residential</td>
						<td>Apartment (2 BHK)</td>
						<td>Iyyappanthangal</td>
						<td>600056</td>
						<td>Economy</td>
						<td> Cash </td>
						{ /* <td> <Badge color="success">Approved</Badge> </td> */ }
						
						<td className="option-btns">
								<a href=""><i className="fa fa-edit"></i></a>
								<a href=""><i className="fa fa-eye"></i></a>
								<a href=""><i className="fa fa-close"></i></a>
								<a href=""><i className="fa fa-check"></i></a>
						</td> 
					  </tr>
					  
					   <tr>
						<td>PR000002</td>
						<td>John</td>
						<td>9500182050<br/><a href="/">John@gmail.com</a></td>
						<td>Commercial</td>
						<td>Shop</td>
						<td>Iyyappanthangal</td>
						<td>600056</td>
						<td>Economy</td>
						<td> Cash </td>
						{ /* <td> <Badge color="success">Approved</Badge> </td> */ }
						
						<td className="option-btns">
								<a href=""><i className="fa fa-edit"></i></a>
								<a href=""><i className="fa fa-eye"></i></a>
								<a href=""><i className="fa fa-close"></i></a>
								<a href=""><i className="fa fa-check"></i></a>
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

export default RentalPropertyList;
