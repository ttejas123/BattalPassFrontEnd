import React, {useState} from 'react'
import './slider.css'
import img from '../assets/aa.png';
import ICON from './icons.js'
import { Col, Row } from 'reactstrap';


const Icons = (argument) => {
	const [width, setWidth] = useState('7%'); 
	return (
		<Row>
		<Col lg='1' md='1'></Col>
		<Col lg='10' md='10'>
			<div>
				<div id="progress-bar-container">
					<ul>
						<li class="step step01" onClick={() => setWidth('7%')}><img class="tabImg" src={img} /></li>
						<li class="step step02" onClick={() => setWidth('28%')}><img class="tabImg" src={img} /></li>
						<li class="step step03" onClick={() => setWidth('50%')}><img class="tabImg" src={img} /></li>
						<li class="step step04" onClick={() => setWidth('73%')}><img class="tabImg" src={img} /></li>
						<li class="step step05" onClick={() => setWidth('100%')}><img class="tabImg" src={img} /></li>
					</ul>
					
					<div id="line">
						<div id="line-progress" style={{width: width}}></div>
					</div>
				</div>
				<ICON />
			</div>
		</Col>
		<Col lg='1' md='1'></Col>
		</Row>
	)
}

export default Icons;