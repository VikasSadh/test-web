import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Base64 } from 'js-base64';

const Sidebar = React.lazy(() => import('./RentPropertyComponent/Sidebar'));
const Breadcrumb = React.lazy(() => import('../Home/Component/Breadcrumb'));
const PropertyLists = React.lazy(() => import('./RentPropertyComponent/PropertyLists'));
const Pagination = React.lazy(() => import('./RentPropertyComponent/Pagination'));
const PageBottomImage = React.lazy(() => import('../Home/Component/PageBottomImage'));
const SearchInList = React.lazy(() => import('./RentPropertyComponent/SearchInList'));

class RentPropertyList extends Component {
 constructor(props) {
    super(props);
		// console.log(this.props.match.params);
		this.FilterEvent = this.FilterEvent.bind(this);
	
	let queryStr = Base64.decode(this.props.match.params.search);
		var querydata = queryStr.split("&");
		let SearchData = {}
		querydata.map(function(item) {
				let splitArr = item.split("=");
				SearchData[splitArr[0]] = splitArr[1]; 
		})	
			// console.log(decodeURI(this.props.match.params.area))
			// SearchData['area'] = this.props.match.params.area;		
			SearchData['area'] = decodeURI(this.props.match.params.area);		
			SearchData['service_type'] = 2;		
			SearchData['property_price_type'] = 'Rent';		
		this.state = {SearchData:SearchData}
		// this.setState({SearchData:SearchData}); 
 }
 
 FilterEvent(fields) {
	
	  let { SearchData } = this.state;
	  console.log(SearchData);
	 Object.keys(fields).map(key => (
			SearchData[key] = fields[key]
		))
		 //  console.log(SearchData);
		// SearchData[key] = value;
	 
		this.setState({SearchData:SearchData}); 
 }
 
 
render() {
	return (
		<div className="contents in-contents">   
			<div className="listing-section">				
				<div className="container">
					<Breadcrumb />
					<div className="row">
						<div className="col-md-4 col-lg-3 nr-padding">
							<Sidebar PropsFilterEvent={this.FilterEvent} Searchdataprops={this.state.SearchData} />
						</div>
						<div className="col-md-8 col-lg-9 nl-padding">
							<SearchInList  />
							<PropertyLists Searchdataprops={this.state.SearchData} />
							<Pagination /> 
						</div>
					</div>
				</div>
			</div>
			<PageBottomImage />
		</div>
		
	)
  }
}

export default RentPropertyList;
