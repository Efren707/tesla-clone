import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './components/header';
import Home from './components/home';

function App() {
  return (
    <div className="App">
      <Home/>
      {/* <Header/> */}
    </div>
  );
}

export default App;
