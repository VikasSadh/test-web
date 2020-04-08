import React, { Component } from 'react';
import userpropimg from '../../../frontscss/img/others/usr-img1.jpg';

class MyProperties extends Component {
 constructor(props) {
    super(props);
 }

render() {
	return (
    <div className="tab-sections">
      <table className="main-table">
        <thead>
          <tr>
            <th scope="col">Property Details</th>
            <th scope="col">Post Status</th>
            <th scope="col">Date Created</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <table>
                <tr>
                  <td><img src={userpropimg} className="img-fluid" alt="Image" /></td>
                  <td>
                    <h5>Office Space For Rent</h5>
                    <p>Rajiv Gandhi Salai, City Union Bank</p>
                    <h6><span>₹ 75,000/</span> Month</h6>
                  </td>
                </tr>
              </table>
            </td>
            <td>Published</td>
            <td>21 Feb 2020</td>
            <td>
              <ul className="list-unstyled d-inline-flex">
                <li><a href="#"><i className="far fa-eye"></i> View</a></li>
                <li><a href="#"><i className="far fa-edit"></i> Edit</a></li>
                <li><a href="#"><i className="far fa-trash-alt"></i> Delete</a></li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>
              <table>
                <tr>
                  <td><img src={userpropimg} className="img-fluid" alt="Image" /></td>
                  <td>
                    <h5>Office Space For Rent</h5>
                    <p>Rajiv Gandhi Salai, City Union Bank</p>
                    <h6><span>₹ 75,000/</span> Month</h6>
                  </td>
                </tr>
              </table>
            </td>
            <td>Published</td>
            <td>21 Feb 2020</td>
            <td>
              <ul className="list-unstyled d-inline-flex">
                <li><a href="#"><i className="far fa-eye"></i> View</a></li>
                <li><a href="#"><i className="far fa-edit"></i> Edit</a></li>
                <li><a href="#"><i className="far fa-trash-alt"></i> Delete</a></li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>
              <table>
                <tr>
                  <td><img src={userpropimg} className="img-fluid" alt="Image" /></td>
                  <td>
                    <h5>Office Space For Rent</h5>
                    <p>Rajiv Gandhi Salai, City Union Bank</p>
                    <h6><span>₹ 75,000/</span> Month</h6>
                  </td>
                </tr>
              </table>
            </td>
            <td>Published</td>
            <td>21 Feb 2020</td>
            <td>
              <ul className="list-unstyled d-inline-flex">
                <li><a href="#"><i className="far fa-eye"></i> View</a></li>
                <li><a href="#"><i className="far fa-edit"></i> Edit</a></li>
                <li><a href="#"><i className="far fa-trash-alt"></i> Delete</a></li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
	)
  }
}

export default MyProperties;
