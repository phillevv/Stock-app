import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header';
import Stocks from './components/apireq';


function App() {
  return (
    <div className="App">
<Header></Header>
<Stocks></Stocks>
    </div>
  );
}

export default App;
