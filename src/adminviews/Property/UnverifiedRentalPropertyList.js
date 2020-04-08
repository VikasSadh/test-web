import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Badge, Pagination, PaginationItem, PaginationLink,  Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';

import {toastr} from 'react-redux-toastr';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';
import 'react-confirm-alert/src/react-confirm-alert.css';


import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import filterFactory, { textFilter,selectFilter  } from 'react-bootstrap-table2-filter';
import { confirmAlert } from 'react-confirm-alert';

import ScheduleDatetimeModal from "./RentalComponent/ScheduleDatetimeModal";

import axios from 'axios';
const API_URL = process.env.REACT_APP_API_URL;


class UnverifiedRentalPropertyList extends Component {
constructor(props) {
		super(props);
		let selectOptions = {  Residential: 'Residential',  Commercial: 'Commercial'};
		let columns = [
				{ dataField: 'propertyid', text: 'Property Id' ,filter: textFilter()},
				{ dataField: 'username', text: 'User Name' },
				{ dataField: 'contactdetail', text: 'Contact Detail' ,filter: textFilter() },
				{ dataField: 'businesstype', text: 'Business Type' ,filter:selectFilter({ options: selectOptions,  defaultValue: 0 }) },
				{ dataField: 'propertytype', text: 'Property Type' ,filter: textFilter() },
				{ dataField: 'area', text: 'Area' ,filter: textFilter()},
				// { dataField: 'pincode', text: 'Pincode' },
				{ dataField: 'package', text: 'Package' },
				{ dataField: 'paymentmode', text: 'Payment Mode' },
				{ dataField: 'paymentstatus', text: 'Payment Status' },
				{ dataField: 'inspectionschedule', text: 'Inspection Schedule' },
				// { dataField: 'action', text: 'Action' }
		  ];
		this.state = { columns: columns,TableData:'', isModalOpen: false,user_id:'',reload:1,property_id:'' }
		this.reloadlistdata = this.reloadlistdata.bind(this);
		
		 this.toggle = this.toggle.bind(this);
		  this.toggleclose = this.toggleclose.bind(this);
		  this.togglesave = this.togglesave.bind(this);
}
componentWillMount() {
	// const headerSortingStyle = { backgroundColor: '#c8e6c9' };
	this.reloadlistdata();
}
//Schedule Date & Time   
toggle(id) {
		this.setState({ isModalOpen: !this.state.isModalOpen, fade: !this.state.fade,property_id:id  });
	}
 toggleclose() {
		this.setState({  isModalOpen: !this.state.isModalOpen, fade: !this.state.fade });
	}
togglesave() {
		 this.reloadlistdata();
		this.setState({  isModalOpen: !this.state.isModalOpen, fade: !this.state.fade });
	}
	

 reloadlistdata() {
const paymentmodeObject = { "1": "Cash", "2": "Check",  "3": "Online", }
const paymentstatusObject = { "1": "Success", "2": "Pending" }
const packageObject = { "1": "Trial", "2": "Silver"  }

let $this  = this;
	
	axios.post(API_URL+'/api/admin/getrentalpropertylist').then(function(response){
			console.log(response.data.Statuscode)
				 if(response.data.Statuscode==200) {
						let resData = response.data.Data;
						let TableData = []; let i=1;
						
						resData.map(item => { 
						let datas ={};
						var Action = [];
						var contactdetail = [];
						// Action.push( <Link to={`/ez-admin/individual-users/edit/${item.user_id}`}><a className="option-btns" href=""><i className="fa fa-edit"></i></a></Link>);
						// Action.push(<Link to={`/ez-admin/rent-property/unverified-view/${item.property_id}`}><a className="option-btns" ><i className="fa fa-eye"></i></a></Link>)
          				// Action.push(<a className="option-btns" onClick={() =>  $this.delete_action(item.user_id)} ><i className="fa fa-close"></i></a>)
                       /* if(item.active_status==1) {
							Action.push(<a className="option-btns" onClick={() =>  $this.active_action(item.user_id)} ><i className="fa fa-ban"></i></a>)
                        }else {
							Action.push(<a className="option-btns" onClick={() =>  $this.inactive_action(item.user_id)} ><i className="fa fa-check"></i></a>)
						} */
						// Action.push( <a className="option-btns"  onClick={() =>  $this.resetpassword_action(item.user_id)} ><i className="fa fa-key"></i></a>);
						var ActiveStatus  = (item.active_status==0) ? 'Active' : 'InActive' ;
						// contactdetail.push(<div>{item.user_mobileno}<br/></div>);
						// contactdetail.push(<a href="/">{item.user_emailid}</a>);
							
							
						
						 datas['propertyid'] = item.property_regno;
						 datas['username'] = item.owner_name ? item.owner_name : item.user_fullname;
						 datas['contactdetail'] = item.owner_name ? item.owner_mobileno : item.user_mobileno +' '+item.user_emailid;
						 datas['businesstype'] =  item.business_name;
						 datas['propertytype'] =item.property_type_name+' ('+ item.bhk_type +')';
						 datas['area'] =item.localities;
						// datas['pincode'] = item.pincode;
						 datas['package'] = packageObject[item.package_id];
						 datas['paymentmode'] = paymentmodeObject[item.payment_mode];
						 datas['paymentstatus'] = paymentstatusObject[item.payment_status];
						 datas['inspectionschedule'] = <Button outline type="buttom" onClick={() => $this.toggle(item.property_id)} size="sm" color="success">Schedule</Button>;
						// datas['action'] =Action;
						 i++;
						 TableData.push(datas);
						})	
					$this.setState({ TableData: TableData });	
				} else { $this.setState({ TableData: [] }); }
				 
				
      })
     .catch(function(error){  console.log(error); }); 
	
}
  
  render() {
	
	function indication() { return 'Data Not Found'; }
		let pagination = paginationFactory({ page: 1,sizePerPage  :5,withFirstAndLast:true,sizePerPageList:[ { text: '5th', value: 5} , { text: '10th', value: 10 }, { text: 'All', value: this.state.TableData.length } ]
		});

    return (
      <div className="animated fadeIn">
	   <ScheduleDatetimeModal isOpen={this.state.isModalOpen} toggle={this.state.isModalOpen} onclicktoggle={this.toggleclose} PropertyId={this.state.property_id} ScheduleSave={this.togglesave} />
        <Row>
          <Col lg={12}>
            <Card className="users-pg">
              <CardHeader>
			  
                <strong><i className="icon-list pr-1"></i>UnVerified Property List</strong>
              </CardHeader>
              <CardBody>
			   <BootstrapTable keyField='id' data={ this.state.TableData } columns={ this.state.columns } pagination={ pagination }  filter={ filterFactory() }  striped hover condensed noDataIndication={ indication }  />
				  
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default UnverifiedRentalPropertyList;
