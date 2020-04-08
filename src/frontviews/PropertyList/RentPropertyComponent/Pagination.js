import React, { Component } from 'react';
import $ from 'jquery';
import { Form,Button, FormGroup, FormControl, ControlLabel, Modal, ModalHeader, ModalBody, ModalFooter } from "react-bootstrap";

class Pagination extends Component {
 constructor(props) {
    super(props);
    this.state = {modal: false};
    this.toggle = this.toggle.bind(this);
 }
 toggle() { this.setState({modal: !this.state.modal}); };
 componentDidMount(){
    $(".flr-btn3").click(function(e) {
      $('.card1').slideToggle(50);
    });
    $(".flr-btn2").click(function(e) {
      $('.card2').slideToggle(50);
    });
    $(".card-btn a").click(function(e) {
      $(this).parents('.card').fadeOut(300);
    });
  }

render() {
  return (
    <div className="listing-pagination">
      <Modal show={this.state.modal} className="modal2">
          <Modal.Header>
            <button type="button" onClick={this.toggle} className="close" data-dismiss="modal" aria-label="Close"><i className="fas fa-times"></i></button>
          </Modal.Header>
          <Modal.Body>
            <div className="sort-popup text-center">
              <div className="sidebar-filters">                        
                  <div className="listing-options">
                    <h4>Sort By</h4>
                    <ul className="row list-unstyled">
                      <li className="col-12">
                        <input type="radio" id="Newest" name="sortby" value="Newest" />
                        <label for="Newest">Newest</label>
                      </li>
                      <li className="col-12">
                        <input type="radio" id="Oldest" name="sortby" value="Oldest" />
                        <label for="Oldest">Oldest</label>
                      </li>
                      <li className="col-12">
                        <input type="radio" id="Price High" name="sortby" value="Price High" />
                        <label for="Price High">Price High</label>
                      </li>
                      <li className="col-12">
                        <input type="radio" id="Price Low" name="sortby" value="Price Low" />
                        <label for="Price Low">Price Low</label>
                      </li>
                    </ul>
                    <button className="btn cmn-btn">Continue</button>
                  </div>
              </div>
              </div>
          </Modal.Body>
        </Modal>
      {/*<div className="paginations-sec">
        <div className="row">
          <div className="col-md-3">
            <div className="page-counts">
              <p>Page 1 of 5</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="list-pagination">
              <nav aria-label="Page navigation">
                <ul className="pagination">
                  <li className="active"><a href="#" className="btn">1</a></li>
                  <li><a href="#" className="btn">2</a></li>                                              
                  <li><a href="#" className="btn">3</a></li>
                  <li><a href="#" className="btn">4</a></li>
                  <li><a href="#" className="btn">5</a></li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="col-md-3">
            <div className="page-next">
              <a href="#">Next Page <i className="fas fa-angle-double-right"></i></a>
            </div>
          </div>
        </div>                
      </div> */}
      <div className="filters-btns">
        <ul className="row list-unstyled m-0">
          <li className="col-6 p-0"><a href="javascript:void(0);" onClick={this.toggle} className="btn flr-btn1"><i className="fas fa-sort"></i> Sort</a></li>                                             
          { /*<li className="col-4 p-0"><a href="javascript:void(0);" className="btn flr-btn2"><i className="fas fa-filter"></i> Advance Filter</a></li> */}
          <li className="col-6 p-0"><a href="javascript:void(0);" className="btn flr-btn3"><i className="fas fa-filter"></i> Filter</a></li> 
        </ul>              
      </div> 
    </div>
  )
  }
}

export default Pagination;
