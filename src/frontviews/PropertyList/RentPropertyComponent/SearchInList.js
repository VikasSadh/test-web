import React, { Component } from 'react';
import Select from 'react-select';

const options = [
  { value: 'Newest', label: 'Newest' },
  { value: 'Oldest', label: 'Oldest' },
  { value: 'Price Low', label: 'Price Low' },
  { value: 'Price High', label: 'Price High' }
]
const stylesSelect = {
  fontSize: '14px',
  fontFamily: 'Muli',
  color: '#7e7e7e'
}
class SearchInList extends Component {
 constructor(props) {
    super(props);
	
 }

render() {
	return (
    <div className="lists-search">
      <div className="row">
        <div className="col-md-8">
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Enter Localities" />
            <div className="input-group-append">
              <button className="btn" type="submit"><i className="fas fa-search"></i></button>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="sort-sec">
            <Select options={options} placeholder={'Sort By:'} clearable={false} style={stylesSelect.select}/>
          </div>
        </div>
      </div>
    </div>
	)
  }
}

export default SearchInList;
