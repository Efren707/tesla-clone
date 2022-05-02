import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/header';
import Home from './components/home';
import ModelS from './components/ModelS';
import Model3 from './components/Model3';

function App() {
  return (
    <div className="App">

      <Router>
        <Header/>

        <Routes>
          
          <Route path="/" element={<Home />} />

          <Route path="models" element={<ModelS />} />
          <Route path="model3" element={<Model3 />} />

        </Routes>
      
      </Router>

    </div>
  );
}

export default App;
