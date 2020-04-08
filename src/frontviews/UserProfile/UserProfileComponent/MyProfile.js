import React, { Component } from 'react';
import userimg from '../../../frontscss/img/others/user-img.jpg';

class MyProfile extends Component {
 constructor(props) {
    super(props);
	
 }

render() {
	return (
    <div className="tab-sections">
      <form>
        <div className="form-fields">
          <div className="row">
            <div className="col-md-4 col-lg-3">
              <div className="changeuser-img">
                <img src={userimg} className="img-fluid" alt="Image" />
                <a href="#" className="btn"><i className="fas fa-camera"></i> Change Photo</a>
              </div>
            </div>
            <div className="col-md-8 col-lg-9">
              <div className="user-fields">
                <div className="form-group row">
                  <label for="fullName" className="col-3 col-form-label">Full Name:</label>
                  <div className="col-9">
                    <input type="text" className="form-control" id="fullName" placeholder="John Victor" />
                  </div>
                </div>
                <div className="form-group row">
                  <label for="Mail" className="col-3 col-form-label">Email:</label>
                  <div className="col-9">
                    <input type="email" className="form-control" id="Mail" placeholder="john@gmail.com" />
                  </div>
                </div>
                <div className="form-group row">
                  <label for="Phone" className="col-3 col-form-label">Phone:</label>
                  <div className="col-9">
                    <input type="text" className="form-control" id="Phone" placeholder="Phone" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="form-fields">
            <textarea className="form-control" placeholder="Bio" rows="6"></textarea>
        </div>
        <div className="form-btn text-center">
          <button type="submit" className="btn cmn-btn">Submit <i className="far fa-arrow-alt-circle-right"></i></button>
        </div>
      </form>
    </div>
	)
  }
}

export default MyProfile;
