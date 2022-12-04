import './App.css';
import {Col,Row} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import { ReactComponent as Release } from './img/release.svg';
import {
    Link
  } from 'react-router-dom';
  import abi from "./abi/abi.json";
  import Web3 from 'web3';
  import React, { useEffect, useState } from 'react';

function AddCarbon() {
  function getReserves() {
    // If Metamask is not available
    if (typeof window.ethereum == "undefined") {
        // rej("You should install Metamask to use it!");
        alert("Login to Metamask");
    }
    // Web3 Instance 
    let web3 = new Web3(window.ethereum);
    let contract = new web3.eth.Contract(abi, "0x53F25c2Ec1F0078bb91682340521F4b4c50Bdf8b");

    web3.eth.getAccounts(0).then((accounts) => {
        contract.methods.getReserves(0).send({ from: accounts[0] }).then((data) => {
            console.log("Credits included");
        });
    });
  }
  function addLiquidity() {
    // If Metamask is not available
    if (typeof window.ethereum == "undefined") {
        // rej("You should install Metamask to use it!");
        alert("Login to Metamask");
    }
    // Web3 Instance 
    let web3 = new Web3(window.ethereum);
    let contract = new web3.eth.Contract(abi, "0x53F25c2Ec1F0078bb91682340521F4b4c50Bdf8b");

    web3.eth.getAccounts().then((accounts) => {
        contract.methods.addLiquidity(0).send({ from: accounts[0] }).then((data) => {
            console.log("Credits included");
        });
    });
}
// let flag, SetFlag = useState(0)
// // useEffect(() => {
//   // Update the document title using the browser API
//   if (flag===0){
//   addLiquidity();
//   AddCarbon();
//   SetFlag(1);
//   }
// // });


  return (
    <>
    <Navbar bg="dark" variant="dark">
        <Container>
          {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
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
            <div class='start-heading-wallet'>WELCOME</div>
          </Row>
          <br></br><br></br>
          <Row >
            <div class='start-data'>Credits Available</div>
          </Row>
          <Row >
            <div class='start-data'>Current Marketprice</div>
          </Row>
          <br></br><br></br>
          <Row >
            <div class='start-heading-wallet'>DEPOSIT CREDITS</div>
          </Row>
          <br></br>
          <Row >
          <Col>
            <Form.Group className="mb-3">
        <Form.Control type="carbon" placeholder="Enter your Carbon Credits" />
      </Form.Group>
            </Col>
            <Col>
                <Link to="/pool"><Release className='button-home-2'/></Link>
            </Col>
          </Row>
          
          
        </Col>

      </header>
    </div>
    </>
  );
}

export default AddCarbon;