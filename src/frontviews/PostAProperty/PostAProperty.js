import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//const Breadcrumb = React.lazy(() => import('../Home/Component/Breadcrumb'));
const PageBottomImage = React.lazy(() => import('../Home/Component/PageBottomImage'));
const PostaAPropertyType = React.lazy(() => import('./PostAPropertyComponent/PostaAPropertyType'));
const PostByOwner = React.lazy(() => import('./PostAPropertyComponent/PostByOwner'));
const PostByDealer = React.lazy(() => import('./PostAPropertyComponent/PostByDealer'));
const PostByBuilder = React.lazy(() => import('./PostAPropertyComponent/PostByBuilder'));

class PropertyDetails extends Component {
 constructor(props) {
    super(props);
 }
 
render() {
	return (
		<div className="contents in-contents">   
			<div className="details-section">				
				<div className="container">
					<div className="breadcrumb-section">
						 <nav aria-label="breadcrumb">
								<ul className="breadcrumb">
									<li className="breadcrumb-item"><a href="/">Home</a></li>
									<li className="breadcrumb-item">Post a Property</li>
								</ul>
						</nav> 
					</div>		
					<div className="postproperty-contents">
						<PostaAPropertyType />
						<div className="postproperty-form">
							<PostByOwner />
							<PostByDealer />
							<PostByBuilder />
						</div>	
					</div>		
				</div>
			</div>
			<PageBottomImage />
		</div>
		
	)
  }
}

export default PropertyDetails;
