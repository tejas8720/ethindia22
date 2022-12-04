import './App.css';
import {Col,Row} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Card from 'react-bootstrap/Card';
import { ReactComponent as Metamask } from './img/metamask.svg';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import {
  Link
} from 'react-router-dom';
import { ReactComponent as Proc } from './img/proc.svg';
import abi from "./abi/abi.json";
import Web3 from 'web3';


function BuyerWalletConnect() {
  function buyCarbonCredits() {
    // If Metamask is not available
    if (typeof window.ethereum == "undefined") {
        // rej("You should install Metamask to use it!");
        alert("Login to Metamask");
    }
    // Web3 Instance 
    let web3 = new Web3(window.ethereum);
    let contract = new web3.eth.Contract(abi, "0xcDff5C0f38dce9091370ab868fbC15BEb2591Af9");

    web3.eth.getAccounts(0).then((accounts) => {
        contract.methods.buyCarbonCredits(0).send({ from: accounts[0] }).then((data) => {
            console.log("Credits included");
        });
    });
}
  const [WalletAddress, setWalletAddress] = useState('');
  const [Flag, setFlag] = useState(0);
  // let ethereum;
  const connectWallet = async () => {
    // Check if MetaMask is installed on user's browser
    let account;
        // let button = event.target;
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        console.log(accounts);
        setWalletAddress(accounts);
        if (WalletAddress!='')
        setFlag(1);
        // ethereum.request({method: 'eth_requestAccounts'}).then(accounts => {
        //   account = accounts[0];
        //   console.log(account);
        //   setWalletAddress(account);
        //   // button.textContent = account;

        //   ethereum.request({method: 'eth_getBalance' , params: [account, 'latest']}).then(result => {
        //     console.log(result);
        //     let wei = parseInt(result,16);
        //     let balance = wei / (10**18);
        //     console.log(balance + " ETH");
        //   });
        // });
  }
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
        <Row>
          <Col md={7} >
            <Row>
            <div class='start-heading-wallet'>CONNECT YOUR METAMASK</div></Row>
            {/* <Button variant="primary">Primary</Button> */}
            <Row>
          <div class='start-next'>Welcome Connect Your MetaMask Wallet</div>
          </Row>
          </Col>
          <Col md={{ span: 1, offset: 4 }}>
          <Card className='text-center' style={{ marginRight:'20%',width: '20rem',backgroundColor:'#1D1F21' }}>
      <Card.Body>
        <Metamask/>
        <Card.Text>
        <br></br>
          Click Connect to connect you wallet
        </Card.Text>
          <button className="btn btn-light text-dark" onClick=    {connectWallet}>Connect</button>
        
      </Card.Body>
    </Card>
    
          </Col>
          
        </Row>
        { (Flag==1) ? (
        <Link to="/user_buyer">
        <Proc className='button-home-2'/>
        </Link>):''
        }

      </header>
    </div>
    </>
  );
}

export default BuyerWalletConnect;
