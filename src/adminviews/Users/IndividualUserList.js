import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Badge, Pagination, PaginationItem, PaginationLink,  Card, CardBody, CardHeader, Col, Row, Table,Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {toastr} from 'react-redux-toastr';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';
import 'react-confirm-alert/src/react-confirm-alert.css';


import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import filterFactory, { textFilter,selectFilter  } from 'react-bootstrap-table2-filter';
import { confirmAlert } from 'react-confirm-alert';


import ViewIndividualUser from "./ViewIndividualUser";


import axios from 'axios';
const API_URL = process.env.REACT_APP_API_URL;


class IndividualUserList extends Component {
 constructor(props) {
		super(props);
		this.state = { columns: '',TableData:'', isModalOpen: false,user_id:'',reload:1 }
		   this.reloadlistdata = this.reloadlistdata.bind(this);
		  this.toggle = this.toggle.bind(this);
		  this.toggleclose = this.toggleclose.bind(this);
		  this.inactive_action = this.inactive_action.bind(this);
		  this.active_action = this.active_action.bind(this);
		  this.delete_action = this.delete_action.bind(this);
		  this.resetpassword_action = this.resetpassword_action.bind(this);
		  
		 
  }
 toggle(id) {
		this.setState({ isModalOpen: !this.state.isModalOpen, fade: !this.state.fade,user_id:id  });
    }
 toggleclose() {
       this.setState({  isModalOpen: !this.state.isModalOpen, fade: !this.state.fade });
    }
inactive_action(user_id) {
	confirmAlert({
		customUI: ({ onClose }) => {
			return (
				<div className='custom-ui-confirm-alert'>
					<h1>Are you sure?</h1><p>You want to Inactive this ?</p>
					<button onClick={onClose}>No</button> <button onClick={() => { this.handleClickInactive(user_id,'inactive'); onClose(); }} > Yes, Inactive it! </button>
				</div>
			);
		}
	});
}
delete_action(user_id) {
	confirmAlert({
		  customUI: ({ onClose }) => {
				return (
				  <div className='custom-ui-confirm-alert'>
					<h1>Are you sure?</h1><p>You want to Delete this ?</p>
						<button onClick={onClose}>No</button>
						<button onClick={() => { this.handleClickInactive(user_id,'deleted'); onClose(); }} > Yes, Delete it! </button>
				  </div>
				);
			}
	});
}	
active_action(user_id) {
	confirmAlert({
		  customUI: ({ onClose }) => {
				return (
				  <div className='custom-ui-confirm-alert'>
					<h1>Are you sure?</h1><p>You want to Active this ?</p>
						<button onClick={onClose}>No</button>
						<button onClick={() => { this.handleClickInactive(user_id,'active'); onClose(); }} > Yes, Active it! </button>
				  </div>
				);
			}
	});
}	
resetpassword_action(user_id) {
	confirmAlert({
		  customUI: ({ onClose }) => {
				return (
				  <div className='custom-ui-confirm-alert'>
					<h1>Are you sure?</h1><p>You want to Reset Password this ?</p>
						<button onClick={onClose}>No</button>
						<button onClick={() => { this.handleClickResetPassword(user_id); onClose(); }} > Yes, Reset Password it! </button>
				  </div>
				);
			}
	});
}
handleClickResetPassword(user_id) {
	let $this  = this;
	const PostData = { user_id: user_id};
	 axios.post(API_URL+'/api/admin/update_user_password', PostData).then(function(response){
				 if(response.data.Statuscode==200) {
						    toastr.success('User', response.data.Message);
							$this.reloadlistdata()
					} else { toastr.error('Error', response.data.Message); }
		}).catch(function(error){  console.log(error); });
}
handleClickInactive(user_id,action_type) {
	let $this  = this;
	const PostData = { user_id: user_id, action_type: action_type };
			// const { history } = this.props;
		 axios.post(API_URL+'/api/admin/updateuseractiondata', PostData).then(function(response){
				 if(response.data.Statuscode==200) {
						    toastr.success('User', response.data.Message);
							$this.reloadlistdata()
							
					} else {
						toastr.error('Error', response.data.Message);
				    }
				 
				// console.log(response);
      }).catch(function(error){  console.log(error); });	 
      
}

reloadlistdata (){
	let selectOptions = {  Active: 'Active',  InActive: 'Inactive'};
		let columns = [
				{ dataField: 'sno', text: 'S.No'},
				{ dataField: 'userregno', text: 'User Reg.no.', sort: true },
				{ dataField: 'username', text: 'User Name'},
				{ dataField: 'email', text: 'Email Id' ,filter: textFilter() },
				{ dataField: 'mobileno', text: 'Mobile No.' ,filter: textFilter() },
				{ dataField: 'address', text: 'Address' },
				{ dataField: 'area', text: 'Area' ,filter: textFilter()},
				{ dataField: 'city', text: 'City' },
				{ dataField: 'pincode', text: 'Pincode' },
				{ dataField: 'status', text: 'Status' ,filter:selectFilter({ options: selectOptions,  defaultValue: 0 })},
				{ dataField: 'action', text: 'Action' }
		  ];
		   this.setState({ columns:columns });
		   
	let $this  = this;
		axios.get(API_URL+'/api/admin/get_user_list').then(function(response){
			console.log(response.data.Statuscode)
				 if(response.data.Statuscode==200) {
						let resData = response.data.Data;
						let TableData = []; let i=1;
						
						resData.map(item => { 
						let datas ={};
						var Action = [];
						Action.push( <Link to={`/ez-admin/individual-users/edit/${item.user_id}`}><a className="option-btns" href=""><i className="fa fa-edit"></i></a></Link>);
						Action.push(<a className="option-btns"  onClick={() => $this.toggle(item.user_id)}><i className="fa fa-eye"></i></a>)
          				Action.push(<a className="option-btns" onClick={() =>  $this.delete_action(item.user_id)} ><i className="fa fa-close"></i></a>)
                        if(item.active_status==1) {
							Action.push(<a className="option-btns" onClick={() =>  $this.active_action(item.user_id)} ><i className="fa fa-ban"></i></a>)
                        }else {
							Action.push(<a className="option-btns" onClick={() =>  $this.inactive_action(item.user_id)} ><i className="fa fa-check"></i></a>)
						}
						Action.push( <a className="option-btns"  onClick={() =>  $this.resetpassword_action(item.user_id)} ><i className="fa fa-key"></i></a>);
						  // let Action  = <a href=""><i className="fa fa-edit"></i></a><a href=""><i className="fa fa-edit"></i></a>;
						var ActiveStatus  = (item.active_status==0) ? 'Active' : 'InActive' ;
						
						 datas['sno'] = i;
						 datas['username'] =item.user_fullname;
						 datas['userregno'] =item.user_regno;
						 datas['email'] =item.user_emailid;
						 datas['mobileno'] =item.user_mobileno;
						 datas['address'] =item.address;
						 datas['area'] =item.localities;
						 datas['city'] =item.city_name;
						 datas['pincode'] =item.pincode;
						 datas['status'] = ActiveStatus;
						 datas['action'] =Action;
						 i++;
						 TableData.push(datas);
						})	
					$this.setState({ TableData: TableData });	
				}else { $this.setState({ TableData: [] }); }
				 
				
      })
     .catch(function(error){  console.log(error); });   
	
	
} 

componentWillMount() {
	// const headerSortingStyle = { backgroundColor: '#c8e6c9' };
	this.reloadlistdata();
}

  render() {
		
		function indication() { return 'Data Not Found'; }
		let pagination = paginationFactory({ page: 1,sizePerPage  :5,withFirstAndLast:true,sizePerPageList:[ { text: '5th', value: 5} , { text: '10th', value: 10 }, { text: 'All', value: this.state.TableData.length } ]
		});
		

    return (
      <div className="animated fadeIn">
	  <ViewIndividualUser isOpen={this.state.isModalOpen} toggle={this.state.isModalOpen} onclicktoggle={this.toggleclose} user_id={this.state.user_id} />
        <Row>
          <Col lg={12}>
            <Card className="users-pg">
              <CardHeader>
			  <Link to="/ez-admin/individual-users/add"> <Button color="primary" className="px-4"><i className="fa fa-plus"></i> Add</Button></Link>
                <strong><i className="icon-info pr-1"></i>Individual Users List</strong>
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

export default IndividualUserList;
