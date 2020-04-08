import React, { Component } from 'react';
import pagebottomimg from '../../../frontscss/img/others/city-img.jpg'

class PageBottomImage extends Component {
 constructor(props) {
    super(props);
	
 }

render() {
	return (
		<div className="ftimg-section">
			<div className="ftimg-img">
				<img src={pagebottomimg} className="img-fluid" width="100%" alt="Image" />
			</div>
		</div>
	)
  }
}

export default PageBottomImage;
