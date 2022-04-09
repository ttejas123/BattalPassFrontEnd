import logo from './logo.svg';
import './App.css';
import img from './assets/aa1.png';
import ICON from './components/icons.js'
import SLIDER from './components/slider.js'
import HEADER from './components/header.js'
import CARD from './components/card.js'
import { Col, Row, Badge } from 'reactstrap';

function App() {
  return (
    <div className="App mx-2 my-5">
        <div className="startOFG">
        </div>
        <div className="newData">
          <div className="mx-3 my-5">
            <HEADER text="Battle Pass" size="50px" shadow="5px 0 0 #000, -5px 0 0 #000, 0 5px 0 #000, 0 -5px 0 #000, 5px 5px #000, -4px -4px 0 #000, 5px -4px 0 #000, -4px 5px 0 #000"/>
            <div className="badgeCenterDiv">
              <img className="peroBadgeImg" src={img} />
              <Badge color="secondary" style={{fontSize: 16, paddingLeft: "30px"}} className="BadgeStyle" pill>5000 unite next unlocked</Badge>
            </div>
          </div>
          <Row className='d-flex mx-1'>
            <Col lg='4' md='4' sm='12' xm='12'><CARD /></Col>
            <Col lg='8' md='8' sm='12' xm='12'><SLIDER /></Col>
          </Row>
        </div>
    </div>
  );
}

export default App;
