import './App.css';
import {Col,Row} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import { ReactComponent as BuyerPage } from './img/buyer_page.svg';
import {
  Link
} from 'react-router-dom';

function Buyer_Page() {
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
      <Link to="/buyer_purchase">
        <BuyerPage/>
      </Link>
      </header>
    </div>
    </>
  );
}

export default Buyer_Page;