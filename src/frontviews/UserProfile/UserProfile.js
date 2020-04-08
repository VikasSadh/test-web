import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Nav, Tab, TabContainer, TabContent, TabPane, Table } from 'react-bootstrap';
import userimg from '../../frontscss/img/others/user-img.jpg';
const Breadcrumb = React.lazy(() => import('../Home/Component/Breadcrumb'));
const PageBottomImage = React.lazy(() => import('../Home/Component/PageBottomImage'));
const MyProfile = React.lazy(() => import('./UserProfileComponent/MyProfile'));
const MyProperties = React.lazy(() => import('./UserProfileComponent/MyProperties'));
const MyFavoritedProperties = React.lazy(() => import('./UserProfileComponent/MyFavoritedProperties'));

class UserProfile extends Component {
 constructor(props) {
    super(props);
 }
 
render() {
	return (
		<div className="contents in-contents">   
			<div className="userprofile-section">				
				<div className="container">
					<Breadcrumb />		
					<div className="userprofile-contents">
						<Tab.Container id="userprofiles" defaultActiveKey="user-profile">
						  <Row>
						    <Col md={4} lg={3} className="nr-padding">
						    	<div className="userprofile-info">
					                <div className="userprofile-details">
					                  	<div className="userprofile-img">
					                    	<img src={userimg} className="img-fluid rounded-circle" alt="Image" />
					                  	</div>
					                  	<ul className="list-unstyled">
					                    	<li><i className="fas fa-user"></i> John Victor</li>
					                    	<li><a href="#"><i className="fas fa-phone-alt"></i> 888 888 8888</a></li>
					                    	<li><a href="#"><i className="fas fa-envelope"></i> john@gmail.com</a></li>
					                  	</ul>
					                </div>
					                <div className="userprofile-menus">
					                  	<Nav variant="pills" className="flex-column">
								        	<Nav.Item>
								          		<Nav.Link eventKey="user-profile"><i className="fas fa-user-edit"></i> Profile</Nav.Link>
								        	</Nav.Item>
								        	<Nav.Item>
								          		<Nav.Link eventKey="user-properties"><i className="fas fa-home"></i> My Properties</Nav.Link>
								        	</Nav.Item>
								        	<Nav.Item>
								          		<Nav.Link eventKey="user-fav-properties"><i className="fas fa-heart"></i> Favorited Properties</Nav.Link>
								        	</Nav.Item>
								        	<Nav.Item>
								          		<Nav.Link href="/home/post-a-property"><i className="fas fa-plus-circle"></i> Post a Properties</Nav.Link>
								        	</Nav.Item>
								        	<Nav.Item>
								          		<Nav.Link href="/home"><i className="fas fa-sign-out-alt"></i> Logout</Nav.Link>
								        	</Nav.Item>
								      	</Nav>
					                </div>  
					            </div>						      
						    </Col>
						    <Col md={8} lg={9} className="nl-padding">
						      <Tab.Content>
						        <Tab.Pane eventKey="user-profile">
						          <MyProfile />
						        </Tab.Pane>
						        <Tab.Pane eventKey="user-properties">
						          <MyProperties />
						        </Tab.Pane>
						        <Tab.Pane eventKey="user-fav-properties">
						          <MyFavoritedProperties />
						        </Tab.Pane>
						      </Tab.Content>
						    </Col>
						  </Row>
						</Tab.Container>
					</div>		
				</div>
			</div>
			<PageBottomImage />
		</div>
		
	)
  }
}

export default UserProfile;
