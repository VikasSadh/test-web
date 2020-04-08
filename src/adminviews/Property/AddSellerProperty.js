import React, { Component } from "react";
import ReactDOM from "react-dom";
import ReactWizard from "react-bootstrap-wizard";
import { Container, Row, Col,Card ,CardHeader,CardBody} from "reactstrap";

import PropTypes from "prop-types";
import classnames from "classnames";

// import "bootstrap/dist/css/bootstrap.css";
// Component

// const BasicinformationComponent = React.lazy(() => import('./RentalComponent/BasicinformationComponent'));
import BasicinformationComponent from "./SellerComponent/BasicinformationComponent";
import PropertyDetailComponent from "./SellerComponent/PropertyDetailComponent";
import PropertyPriceComponent from "./SellerComponent/PropertyPriceComponent";
import PropertyAmenitiesComponent from "./SellerComponent/PropertyAmenitiesComponent";
import PropertyImageComponent from "./SellerComponent/PropertyImageComponent";
import PropertyPaymentComponent from "./SellerComponent/PropertyPaymentComponent";



class FirstStep extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstStep: "first step here"
    };
  }
  render() {
    return <div>Hey from First</div>;
  }
}
class SecondStep extends Component {
  constructor(props) {
    super(props);
    this.state = {
      secondStep: "second step here"
    };
  }
  isValidated() {
    // do some validations
    // decide if you will
    return true;
    // or you will
    // return false;
  }
  render() {
    return <div>Hey from Second</div>;
  }
}
class ThirdStep extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      thirdStep: "third step here"
    };
  }
  render() {
    return <div>Hey from Third</div>;
  }
}

var steps = [
  // this step hasn't got a isValidated() function, so it will be considered to be true
  { stepName: "BASIC INFORMATION", component: BasicinformationComponent },
  // this step will be validated to false
  { stepName: "PROPERTY DETAILS", component: PropertyDetailComponent },
  // this step will never be reachable because of the seconds isValidated() steps function that will always return false
  { stepName: "PROPERTY PRICE", component: PropertyPriceComponent },
  { stepName: "AMENITIES", component: PropertyAmenitiesComponent },
  { stepName: "IMAGE - VIDEO ", component: PropertyImageComponent },
  { stepName: "PAYMENT", component: PropertyPaymentComponent },
];

class AddSellerProperty extends React.Component {
  finishButtonClick(allStates) {
    console.log(allStates);
  }
  render() {
    return (
      <div className="animated fadeIn">
       
         
		  <Card>
              <CardHeader><strong>Add Seller Property</strong> </CardHeader>
			   <CardBody >
					<Row>
						 <Col xs={12} md={12} className="mr-auto ml-auto">
						<ReactWizard
						  steps={steps}
						  navSteps
						  title=""
						  description=""
						  headerTextCenter
						  validate
						  color="success"
						  finishButtonClick={this.finishButtonClick}
						/>
          </Col>
        </Row>
		  </CardBody>	
		   </Card>
      </div>
    );
  }
}

ReactWizard.defaultProps = {
  validate: true,
  previousButtonText: "Previous",
  finishButtonText: "Finish",
  nextButtonText: "Next",
  color: "success ",
  progressbar: false
};

ReactWizard.propTypes = {
  color: PropTypes.oneOf(["primary", "green", "orange", "red", "blue"]),
  previousButtonClasses: PropTypes.string,
  finishButtonClasses: PropTypes.string,
  nextButtonClasses: PropTypes.string,
  headerTextCenter: PropTypes.bool,
  navSteps: PropTypes.bool,
  validate: PropTypes.bool,
  finishButtonClick: PropTypes.func,
  previousButtonText: PropTypes.node,
  finishButtonText: PropTypes.node,
  nextButtonText: PropTypes.node,
  title: PropTypes.node,
  description: PropTypes.node,
  progressbar: PropTypes.bool,
  steps: PropTypes.arrayOf(
  PropTypes.shape({
      stepName: PropTypes.string.isRequired,
      stepIcon: PropTypes.string,
      component: PropTypes.func.isRequired,
      stepProps: PropTypes.object
    })
  ).isRequired
};
export default AddSellerProperty;