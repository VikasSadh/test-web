import React, { Component } from 'react';
import { Link } from 'react-router-dom';
const SearchSection = React.lazy(() => import('./Component/SearchSection'));
const WhatWeDo = React.lazy(() => import('./Component/WhatWeDo'));
const PropertyOwner = React.lazy(() => import('./Component/PropertyOwner'));
const BuyProperty = React.lazy(() => import('./Component/BuyProperty'));
const ReviewsSection = React.lazy(() => import('./Component/ReviewsSection'));

class Home extends Component {
 constructor(props) {
    super(props);
	
 }
 
render() {
	return (
		<div className="contents">
			<SearchSection />
			<WhatWeDo />
			<PropertyOwner />
			<BuyProperty />
			<ReviewsSection />
		</div>
		
	)
  }
}

export default Home;
