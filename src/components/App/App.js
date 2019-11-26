import React, {useState, useEffect} from 'react';
import {BrowserRouter} from 'react-router-dom';
import './App.scss';
import {
  Banner,
  Content,
  Footer,
  Nav,
} from '../index';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Banner title='SneakerBox'/>
        <Content/>
        <Footer/>
        <Nav/>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
