import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Home';
import User from './User';
import Pool from './Pool';
import Buyer_Page from './Buyer_Page';
import Buyer_Purchase from './Buyer_Purchase';

import AddCarbon from './addCarbon';
import User_Buyer from './User_Buyer';
import BuyerWalletConnect from './BuyerWalletConnect';
import SellerWalletConnect from './SellerWalletConnect';
import reportWebVitals from './reportWebVitals';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route exact path='/' element={< Home />}></Route>
      <Route exact path='/buyer' element={< BuyerWalletConnect />}></Route>
      <Route exact path='/seller' element={< SellerWalletConnect />}></Route>
      <Route exact path='/user' element={< User />}></Route>
      <Route exact path='/addcarbon' element={< AddCarbon />}></Route>
      <Route exact path='/pool' element={< Pool />}></Route>
      <Route exact path='/user_buyer' element={< User_Buyer />}></Route>
      <Route exact path='/buyer_page' element={< Buyer_Page />}></Route>
      <Route exact path='/buyer_purchase' element={< Buyer_Purchase />}></Route>


    </Routes>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
