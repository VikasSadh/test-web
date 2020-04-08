import React, { Component } from 'react';

class PostByDealer extends Component {
 constructor(props) {
    super(props);
	
 }
 
render() {
	return (
		<div className="dealer postproperty-name">
      <form>
        <div className="postproperty-row">                
          <div className="form-group">
            <div className="row">
              <div className="col-md-6 nr-padding">
                <div className="form-fields">
                  <select className="form-control">
                    <option value="Property Type">Property Type</option>
                    <option value="Residential">Residential</option>
                    <option value="Commercial">Commercial</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6 nl-padding">
                <div className="form-fields">
                  <select className="form-control">
                    <option value="Property Type">Property for</option>
                    <option value="Rent">Rent</option>
                    <option value="Sale">Sale</option>
                    <option value="ReSale">ReSale</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="form-group">
            <div className="row">
              <div className="col-md-6 nr-padding">
                <div className="form-fields">
                  <select className="form-control">
                    <option value="Property Details">Property Details</option>
                    <option value="Apartment">Apartment</option>
                    <option value="Villa">Villa</option>
                    <option value="Flat">Flat</option>
                    <option value="Individual">Individual</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6 nl-padding">
                <div className="form-fields">
                  <select className="form-control">
                    <option value="BHK Type">BHK Type</option>
                    <option value="1RK">1RK</option>
                    <option value="2BHK">2BHK</option>
                    <option value="3BHK">3BHK</option>
                    <option value="4BHK">4BHK</option>
                    <option value="4+BHK">4+BHK</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="form-btn text-center">
            <button className="btn cmn-btn btn1" type="button">Continue <i className="far fa-arrow-alt-circle-right"></i></button>
          </div>                
        </div>
        <div className="postproperty-row second-row">                
          <div className="form-group">
            <div className="row">
              <div className="col-md-6 nr-padding">
                <div className="form-fields">
                  <input type="text" placeholder="Address" className="form-control in1" />
                </div>
              </div>
              <div className="col-md-6 nl-padding">
                <div className="form-fields">
                  <input type="text" placeholder="Location" className="form-control in1" />
                </div>
              </div>
            </div>
          </div>             
          <div className="form-group">
            <div className="row">
              <div className="col-md-6 nr-padding">
                <div className="form-fields">
                  <select className="form-control">
                    <option value="Property Details">Available From</option>
                    <option value="Apartment">Apartment</option>
                    <option value="Villa">Villa</option>
                    <option value="Flat">Flat</option>
                    <option value="Individual">Individual</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6 nl-padding">
                <div className="form-fields">
                  <input type="text" placeholder="₹ Expected Rent" className="form-control" />
                </div>
              </div>
            </div>
          </div>
          <div className="form-btn text-center">
            <button className="btn cmn-btn btn2" type="submit">Submit <i className="far fa-arrow-alt-circle-right"></i></button>
          </div>                
        </div>
      </form>
    </div>	
	)
  }
}

export default PostByDealer;
