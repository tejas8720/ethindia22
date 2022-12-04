// import logo from './logo.svg';
import './App.css';
import {Col,Row} from 'react-bootstrap';
import { ReactComponent as Buyer } from './img/Group_9.svg';
import { ReactComponent as Seller } from './img/Group_91.svg';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import {
  Link
} from 'react-router-dom';
// import Logo from './img/logo.svg';


function Home() {
  return (
    <>
    <Navbar bg="dark" variant="dark"> 
        <Navbar.Brand href="/">
            <img
              src="./img/logo.png"
              // width="30"
              height="35"
              className="d-inline-block text-left align-top extra"
              alt="React Bootstrap logo"
              style={{marginLeft:'30%'}}
            />
          </Navbar.Brand>
          <Container>
          <Nav className="me-auto">
            
            {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
          </Nav>
          <Navbar.Collapse className="justify-content-end">
          <Nav>
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="#features">Documentation</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    <div className="App_Home">
      <header className="App-header">
        <Col>
          <Row >
            <div className='start-heading'>Carbon <br></br>On-chained.</div>
          </Row>
          <Row>
            <div className='start-intro'>
              TFNFT’s infrastructure brings programmable carbon to<br></br> Web3, unlocking its potential for a regenerative economy.
            </div>
          </Row>
          <Row>
          <span><Link to="/buyer"><Buyer className='button-home-2'/></Link>              <Link to="/seller"><Seller className='button-home-2'/></Link></span>

          </Row>
        </Col>

         
        {/* <div data-unit="px" data-container="grid" id="b65822dc-f812-402b-a472-3d694f09ce5d" data-type="image" class="page-content__component image_b65822dc-f812-402b-a472-3d694f09ce5d" style="background-image:url('data:image/svg+xml;utf8,%3Csvg%20width%3D%22316%22%20height%3D%2282%22%20viewBox%3D%220%200%20316%2082%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Crect%20width%3D%22315.495%22%20height%3D%2281.5934%22%20rx%3D%2240.7967%22%20fill%3D%22url(%23paint0_linear_9_240)%22%2F%3E%0A%3Cdefs%3E%0A%3ClinearGradient%20id%3D%22paint0_linear_9_240%22%20x1%3D%22157.747%22%20y1%3D%220%22%20x2%3D%22157.747%22%20y2%3D%2281.5934%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%0A%3Cstop%20stop-color%3D%22%23212426%22%2F%3E%0A%3Cstop%20offset%3D%221%22%2F%3E%0A%3C%2FlinearGradient%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E%0A');" data-bg="image"> <div class="strw-shape"></div> </div> */}

      </header>
    </div>
    </>
  );
}

export default Home;
