import './App.css';
import {Col,Row} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import { ReactComponent as Unlock } from './img/unlock.svg';
import {
    Link
  } from 'react-router-dom';

function User_Buyer() {

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
    <div className="App">
      <header className="wallet-header">
        <Col>
          <Row >
            <div class='start-heading-wallet'>ENTER YOUR VERRA ID</div>
          </Row>
          <Row>
          <div class='start-next'>Enter your 48-digit VCID to continue</div>
          </Row>
          <Row>
            <Col>
            <Form.Group className="mb-3">
        <Form.Control type="VCPID" placeholder="Enter your VCID" />
      </Form.Group>
            </Col>
            <Col>
                <Link to="/buyer_page" ><Unlock className='button-home-2'/></Link>
            </Col>
          </Row>
        </Col>

      </header>
    </div>
    </>
  );
}

export default User_Buyer;
