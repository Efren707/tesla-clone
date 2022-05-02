import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/header';
import Home from './components/home';
import ModelSX from './components/ModelS';
import Model3 from './components/Model3';

function App() {
  return (
    <div className="App">

      <Router>
        <Header/>

        <Routes>
          
          <Route path="/" element={<Home />} />

          <Route path="models" element={<ModelSX title={"Model S"} bgimg={"model-s.jpg"} range={396} zerotosixty={1.99} topSpeed={200} hp={1020} />} />
          <Route path="modelx" element={<ModelSX title={"Model X"} bgimg={"model-x.jpg"} range={333} zerotosixty={2.5} topSpeed={155} hp={1020} />} />
          <Route path="model3" element={<Model3 />} />

        </Routes>
      
      </Router>

    </div>
  );
}

export default App;
