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
        <Banner title='SneakerBox'/>
        <Nav/>
        <Content/>
        <Footer/>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
