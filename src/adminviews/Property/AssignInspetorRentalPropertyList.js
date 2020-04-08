import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Badge, Pagination,  Card, CardBody, CardHeader, Col, Row,FormGroup, Label,Input } from 'reactstrap';
import Select from 'react-select';
import Moment from 'react-moment';
import NumberFormat from 'react-number-format';
//import 'moment-timezone';
import AssignInspectorModal from "./RentalComponent/AssignInspectorModal";
import axios from 'axios';
const API_URL = process.env.REACT_APP_API_URL;
const SearchAssignStatus = [{value:"0",label:"Assign Inspector"},{value:"1",label:"Pending Inspector"}];
const SearchArea = [{value:"1",label:"Assign Inspector"},{value:"2",label:"Pending Inspector"}];
const SearchSoryby = [{value:"desc",label:"Recent Property"},{value:"asc",label:"Old Property"}];
const SearchSorybyPrice = [{value:"desc",label:"Highest-Lowest"},{value:"asc",label:"Lowest-Highest"}];

class AssignInspetorRentalPropertyList extends Component {
constructor(props) {
    super(props);
		this.state = { fields:{search_status:'0',search_area:'',search_sortby:'',search_sortbyprice:''}, errors:{}, AssignInspectorData:'',isModalOpen: false,property_id:'',SearchArea:[] }
			
			this.toggle = this.toggle.bind(this);
			this.toggleclose = this.toggleclose.bind(this);
			this.togglesave = this.togglesave.bind(this);
			
			this.handleChange = this.handleChange.bind(this);
			this.handleSubmit = this.handleSubmit.bind(this);
			this.assignpropertydataLoad = this.assignpropertydataLoad.bind(this);
	}
 // Assign Inspector Date & Time   
toggle(schedule_id,property_id) {
			this.setState({ isModalOpen: !this.state.isModalOpen, fade: !this.state.fade,property_id:property_id, schedule_id:schedule_id  });
	}
toggleclose() {
			this.setState({  isModalOpen: !this.state.isModalOpen, fade: !this.state.fade });
	}
togglesave() {
		this.setState({  isModalOpen: !this.state.isModalOpen, fade: !this.state.fade });
		this.assignpropertydataLoad();
	}
handleChange(e,field_info) {
	let $this = this;
	let fields = this.state.fields;
		if(field_info.action=='select-option') {
				fields[field_info.name] = e.value;
				this.setState({ fields });
		}
		
		
	console.log(this.state.fields);
}	
componentWillMount() {
		
	this.assignpropertydataLoad();
}
 handleSubmit(e) {
	 // console.log(this.state.fields);
	 let $this = this;
      e.preventDefault();
      this.assignpropertydataLoad();

    }
assignpropertydataLoad() {
				let $this  = this;
				let areadata =[]
				
					axios.get(API_URL+'/api/admin/getarealistbyassigninspector').then(function(response){
						if(response.data.Statuscode==200) {
								let resData = response.data.Data;
								console.log(resData)
								resData.map((item) => areadata.push({value: item.localities , label: item.localities }) )
								$this.setState({ SearchArea:areadata });
						} 
					});
					
					let PostData = {
						search_status: this.state.fields.search_status,
						search_area: this.state.fields.search_area,
						search_sortby: this.state.fields.search_sortby,
						search_sortbyprice: this.state.fields.search_sortbyprice,
					}
					axios.post(API_URL+'/api/admin/getassigninspectorlistbysearch',PostData).then(function(response){
						if(response.data.Statuscode==200) {
							
							let resData = response.data.Data;
							if(resData) {resData =resData }else { resData='';}
							$this.setState({ AssignInspectorData:resData });
						} 
				});
				/* axios.get(API_URL+'/api/admin/getassigninspectorlist').then(function(response){
						if(response.data.Statuscode==200) {
							let resData = response.data.Data;
							$this.setState({ AssignInspectorData:resData });
						} 
				}); */
				
		

	}	  
 
 render() {
	let $this = this;

    return (
      <div className="animated fadeIn">
	  <AssignInspectorModal isOpen={this.state.isModalOpen} toggle={this.state.isModalOpen} onclicktoggle={this.toggleclose}  ScheduleSave={this.togglesave} schedule_id={this.state.schedule_id} />
        <Row>
          <Col lg={12}>
            <Card className="users-pg">
              <CardHeader>
				<strong><i className="icon-list pr-1"></i>Assign Inspector Property List</strong>
              </CardHeader>
              <CardBody>
			  <form onSubmit={this.handleSubmit}>
                  <Row>
					<Col md="3">
						<FormGroup>
						<Label htmlFor="phone">Status </Label>
						<Select  placeholder='Select Status' options={SearchAssignStatus} name="search_status" value={SearchAssignStatus.filter(({value}) => value == this.state.fields.search_status)} onChange={this.handleChange} ></Select>
						
						</FormGroup>
					</Col>
					<Col md="3">
						<FormGroup>
						<Label htmlFor="phone">Area  </Label>
							<Select  options={this.state.SearchArea} name="search_area" value={this.state.SearchArea.filter(({value}) => value == this.state.fields.search_area)} onChange={this.handleChange} ></Select>
						</FormGroup>
					</Col>
					<Col md="2">
						<FormGroup>
						<Label htmlFor="phone">Sory by  </Label>
							<Select  options={SearchSoryby} name="search_sortby" value={SearchSoryby.filter(({value}) => value == this.state.fields.search_sortby)} onChange={this.handleChange} ></Select>
						</FormGroup>
					</Col>
					<Col md="2">
						<FormGroup>
						<Label htmlFor="phone">Price  </Label>
							<Select  options={SearchSorybyPrice} name="search_sortbyprice" value={SearchSorybyPrice.filter(({value}) => value == this.state.fields.search_sortbyprice)} onChange={this.handleChange} ></Select>
						</FormGroup>
					</Col>
						<Col md="2">
							<Button outline type="submit" size="sm" color="success"><i className="fa fa-dot-circle-o"></i> Search</Button>
						</Col>
				  </Row>
				  </form>
				  <Row>
				  { this.state.AssignInspectorData.length > 0 ?
				  this.state.AssignInspectorData.map(function(item,index) {
								return (<Col className="assign-pg"  md="4" xl="3">
									<Card>
									<CardHeader> Property Deatils </CardHeader>
										<CardBody>				
											<ul className="list-unstyled">
												<li><strong>Date:</strong><Moment format="DD/MM/YYYY" date={item.schedule_date} />   </li>
												<li><strong>Time:</strong> {item.schedule_time} </li>
												<li><strong>Location:</strong>{item.localities}</li>
												<li><strong>Apartment Type</strong> : {item.property_type_name}</li>
												<li><strong>BHK Type:</strong> {item.bhk_type}</li>
												 <li><strong>Amount :</strong><NumberFormat value={item.payment_amount} displayType={'text'} thousandSeparator={true } thousandsGroupStyle="lakh" /></li>
													 { item.assign_status=='1' ? <li><strong>Sales Person:</strong> {item.user_name}</li>   : null }
														<li><strong>Product Id:</strong>{item.property_regno}</li>
													{ item.owner_name ? <li><strong>Owner Name:</strong>{item.owner_name}</li> : <li><strong>Owner Name:</strong>{item.user_fullname}</li> }
													{ item.owner_mobileno ?	<li><strong>Owner Mobile:</strong>{item.owner_mobileno}</li> : <li><strong>Owner Mobile:</strong>{item.usermobileno}</li> }
														
												 { item.assign_status!='1' ? <li><Button outline type="button" size="sm" color="success" onClick={() => $this.toggle(item.inspection_schedule_id,item.property_id)}>Assign Inspector</Button></li> : 
												 <li><Button outline type="button" size="sm" color="success" onClick={() => $this.toggle(item.inspection_schedule_id,item.property_id)}><i class="fa fa-clock-o"></i> ReSchedule</Button> <Link to={`/ez-admin/rent-property/edit/${item.property_id}/inpectoredit`} ><Button outline type="button" size="sm" color="success"> <i class="fa fa-pencil"></i> Edit</Button></Link></li>
													
												 }
													
										</ul>
										</CardBody>
									</Card>
								</Col>)
						})
					
					: 'Not Found'
				  }
				 </Row>
             
			 </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default AssignInspetorRentalPropertyList;
