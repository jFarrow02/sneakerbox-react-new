import React from 'react';
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
        <Nav/>
        <Content/>
        <Footer/>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
