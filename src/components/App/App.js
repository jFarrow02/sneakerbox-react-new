import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import './App.scss';
import {
  Banner,
  Content,
  Footer,
  Nav,
} from '../index';

/**
 * The App component is the top-level parent component in the application. It is wrapped in a BrowserRouter
 * in order to make use of React Router.
 */
function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <div id="row-1">
          <Banner title='SneakerBox'/>
        </div>
        <div id="row-2">
          <Nav/>
          <Content/>
        </div>
        <div id="row-3">
          <Footer/>
        </div>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
