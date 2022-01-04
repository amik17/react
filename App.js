import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Main from './Main.js';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="main">
      <Footer/>
      <Main/>
     
      </div>
    </div>
  );
}

export default App;
