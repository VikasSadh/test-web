import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Badge, Pagination, PaginationItem, PaginationLink,  Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';


class SellerPropertyList extends Component {

  render() {


    return (
      <div className="animated fadeIn">
        <Row>
          <Col lg={12}>
            <Card className="users-pg">
              <CardHeader>
			  <Link to="/ez-admin/add-rental-property"> <Button color="primary" className="px-4"><i className="fa fa-plus"></i> Add</Button></Link>
                <strong><i className="icon-list pr-1"></i>Seller Property List</strong>
              </CardHeader>
              <CardBody>
                  <Table responsive bordered>
                  <thead>
                  <tr>
                    <th>S.No</th>
                    <th>Property Reg.no.</th>
                    <th>User Name</th>
                    <th>Business Type</th>
					<th>Area</th>
                    <th>Pincode</th>
					<th>Package</th>
                    <th>Payment Status</th>
                    <th>Property Status</th>
                    <th>Action</th>
                  </tr>
                  </thead>
                  <tbody>
					  <tr>
						<td>1</td>
						<td>PR000001</td>
						<td>John</td>
						<td>Residential</td>
						<td>Iyyappanthangal</td>
						<td>600056</td>
						<td>Economy Package</td>
						<td> <Badge color="success">success</Badge> </td>
						<td> <Badge color="success">Approved</Badge> </td>
						
						<td className="option-btns">
								<a href=""><i className="fa fa-edit"></i></a>
								<a href=""><i className="fa fa-eye"></i></a>
								<a href=""><i className="fa fa-close"></i></a>
								<a href=""><i className="fa fa-check"></i></a>
							</td>
					  </tr>
					  
					   <tr>
						<td>2</td>
						<td>PR000002</td>
						<td>John</td>
						<td>Commercial</td>
						<td>Iyyappanthangal</td>
						<td>600056</td>
						<td>Economy Package</td>
						<td> <Badge color="success">success</Badge> </td>
						<td> <Badge color="success">Approved</Badge> </td>
						
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

export default SellerPropertyList;
