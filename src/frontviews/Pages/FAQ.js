import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Accordion, Card} from 'react-bootstrap';
// const Breadcrumb = React.lazy(() => import('../Home/Component/Breadcrumb'));
const PageBottomImage = React.lazy(() => import('../Home/Component/PageBottomImage'));

class FAQ extends Component {
 constructor(props) {
    super(props);
	
 }
 
render() {
	return (
		<div className="contents in-contents">   
			<div className="faq-section">				
				<div className="container">
					<div className="breadcrumb-section">
							<nav aria-label="breadcrumb">
									<ul className="breadcrumb">
										<li className="breadcrumb-item"><Link to="/">Home</Link></li>
										<li className="breadcrumb-item">FAQ</li>
								    </ul>
							</nav> 
					</div>						
					<div className="faq-contents">
						<div className="faq-title inner-heading">
							<h4>Frequently Asked Questions</h4>
							<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspern aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
						 </div>
						<div className="faq-details">
							<Accordion defaultActiveKey="0">
							  <Card>
								<Accordion.Toggle as={Card.Header} eventKey="0">
									1. Lorem ipsum dolor sit amet, consectetur adipiscing elit
								</Accordion.Toggle>
								<Accordion.Collapse eventKey="0">
									<Card.Body>
										<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
									</Card.Body>
								</Accordion.Collapse>
							  </Card>
							  <Card>
								<Accordion.Toggle as={Card.Header} eventKey="1">
									2. Lorem ipsum dolor sit amet, consectetur adipiscing elit
								</Accordion.Toggle>
								<Accordion.Collapse eventKey="1">
									<Card.Body>
										<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
									</Card.Body>
								</Accordion.Collapse>
							  </Card>
							  <Card>
								<Accordion.Toggle as={Card.Header} eventKey="3">
									3. Lorem ipsum dolor sit amet, consectetur adipiscing elit
								</Accordion.Toggle>
								<Accordion.Collapse eventKey="3">
									<Card.Body>
										<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
									</Card.Body>
								</Accordion.Collapse>
							  </Card>
							  <Card>
								<Accordion.Toggle as={Card.Header} eventKey="4">
									4. Lorem ipsum dolor sit amet, consectetur adipiscing elit
								</Accordion.Toggle>
								<Accordion.Collapse eventKey="4">
									<Card.Body>
										<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
									</Card.Body>
								</Accordion.Collapse>
							  </Card>
							  <Card>
								<Accordion.Toggle as={Card.Header} eventKey="5">
									5. Lorem ipsum dolor sit amet, consectetur adipiscing elit
								</Accordion.Toggle>
								<Accordion.Collapse eventKey="5">
									<Card.Body>
										<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
									</Card.Body>
								</Accordion.Collapse>
							  </Card>
							  <Card>
								<Accordion.Toggle as={Card.Header} eventKey="6">
									6. Lorem ipsum dolor sit amet, consectetur adipiscing elit
								</Accordion.Toggle>
								<Accordion.Collapse eventKey="6">
									<Card.Body>
										<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
									</Card.Body>
								</Accordion.Collapse>
							  </Card>
							  <Card>
								<Accordion.Toggle as={Card.Header} eventKey="7">
									7. Lorem ipsum dolor sit amet, consectetur adipiscing elit
								</Accordion.Toggle>
								<Accordion.Collapse eventKey="7">
									<Card.Body>
										<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
									</Card.Body>
								</Accordion.Collapse>
							  </Card>
							  <Card>
								<Accordion.Toggle as={Card.Header} eventKey="8">
									8. Lorem ipsum dolor sit amet, consectetur adipiscing elit
								</Accordion.Toggle>
								<Accordion.Collapse eventKey="8">
									<Card.Body>
										<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
									</Card.Body>
								</Accordion.Collapse>
							  </Card>
							  <Card>
								<Accordion.Toggle as={Card.Header} eventKey="9">
									9. Lorem ipsum dolor sit amet, consectetur adipiscing elit
								</Accordion.Toggle>
								<Accordion.Collapse eventKey="9">
									<Card.Body>
										<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
									</Card.Body>
								</Accordion.Collapse>
							  </Card>
							  <Card>
								<Accordion.Toggle as={Card.Header} eventKey="10">
									10. Lorem ipsum dolor sit amet, consectetur adipiscing elit
								</Accordion.Toggle>
								<Accordion.Collapse eventKey="10">
									<Card.Body>
										<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
									</Card.Body>
								</Accordion.Collapse>
							  </Card>
							</Accordion>
						</div>
					</div>
				</div>
			</div>
			<PageBottomImage />
		</div>
		
	)
  }
}

export default FAQ;
