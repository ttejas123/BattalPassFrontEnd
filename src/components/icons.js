import React from 'react'
import './icons.css'
import img from '../assets/foxT.png';
import img1 from '../assets/ticket.png';
import img2 from '../assets/wepon.png';
import { Badge, Col, Row } from 'reactstrap';

const Icons = (argument) => {
	return (
		<Row>
			<div className="IconNew pt-3">
				<div class="section-content analysis">
					<Badge color="secondary" pill><div className="BadgeStyle">100,000</div></Badge>
					<div class="MainImage mt-2">
						<img class="containImg" src={img2}/>
					</div>
				</div>
				<div class="section-content analysis active">
					<Badge color="secondary" pill><div className="BadgeStyle">150,000</div></Badge>
					<div class="MainImage mt-2">
						<img class="containImg" src={img}/>
					</div>
				</div>
				<div class="section-content analysis">
					<Badge color="secondary" pill><div className="BadgeStyle">200,000</div></Badge>
					<div class="MainImage mt-2">
						<img class="containImg" src={img1}/>
					</div>
				</div>
				<div class="section-content analysis">
					<Badge color="secondary" pill><div className="BadgeStyle">250,000</div></Badge>
					<div class="MainImage mt-2">
						<img class="containImg" src={img1}/>
					</div>
				</div>
				<div class="section-content analysis">
					<Badge color="secondary" pill><div className="BadgeStyle">300,000</div></Badge>
					<div class="MainImage mt-2">
						<img class="containImg" src={img2}/>
					</div>
				</div>
			</div>

		</Row>
	)
}

export default Icons;
