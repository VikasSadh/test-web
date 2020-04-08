import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import cusimg1 from '../../../frontscss/img/others/cus-img1.jpg';
import cityimg from '../../../frontscss/img/others/city-img.jpg';
class ReviewsSection extends Component {
 constructor(props) {
    super(props);
	
 }

render() {
	return (
		<div className="reviews-section">
			<div className="container">
				<div className="reviews-wrap">
					<div className="reviews-heading section-heading text-center">
						<h3>Customer Reviews</h3>
					</div>
					<OwlCarousel className="owl-theme" items={1} autoplay={true} loop={true} margin={0} nav={false} dots={true} mouseDrag={true} touchDrag={true}>
			            <div className="item">
			            	<div className="reviews-contents text-center">
								<p>No words to explain to part of excellence the Ezee Housing a marvellous friendly approach and best gentle team thanks Anitha & Manoj. Best of Luck.</p>
								<div className="reviews-img">
									<img src={cusimg1} className="img-fluid rounded-circle" alt="Image" />
								</div>
								<h4>Dhanalakshmi</h4>
								<h6>Chennai (Alwarpet)</h6>
							</div>
			            </div>
			            <div className="item">
			            	<div className="reviews-contents text-center">
								<p>No words to explain to part of excellence the Ezee Housing a marvellous friendly approach and best gentle team thanks Anitha & Manoj. Best of Luck.</p>
								<div className="reviews-img">
									<img src={cusimg1} className="img-fluid rounded-circle" alt="Image" />
								</div>
								<h4>Dhanalakshmi</h4>
								<h6>Chennai (Alwarpet)</h6>
							</div>
			            </div>
			            <div className="item">
			            	<div className="reviews-contents text-center">
								<p>No words to explain to part of excellence the Ezee Housing a marvellous friendly approach and best gentle team thanks Anitha & Manoj. Best of Luck.</p>
								<div className="reviews-img">
									<img src={cusimg1} className="img-fluid rounded-circle" alt="Image" />
								</div>
								<h4>Dhanalakshmi</h4>
								<h6>Chennai (Alwarpet)</h6>
							</div>
			            </div>
			        </OwlCarousel>					
				</div>      
			</div>
			<div className="city-img">
				<img src={cityimg} className="img-fluid" width="100%" alt="Image" />
			</div>
		</div>
	)
  }
}

export default ReviewsSection;
