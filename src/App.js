import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Header from './components/header';
import Home from './components/home';
import ModelSX from './components/ModelS';
import Model3Y from './components/Model3';

import modelS from './images/model-s.jpg';
import modelX from './images/model-x.jpg';
import model3 from './images/model-3.jpg';
import modelY from './images/model-y.jpg';

function App() {
  return (
    <div className="App">

      <Router>
      
        <Header/>
        
        <Routes>

          <Route path="/tesla-clone" element={<Home />} />

          <Route path="/tesla-clone/models"element={<ModelSX title={"Model S"} bgimg={modelS} range={396} zerotosixty={1.99} topSpeed={200} hp={1020}/>} />
          
          <Route path="/tesla-clone/modelx" element={<ModelSX title={"Model X"} bgimg={modelX} range={333} zerotosixty={2.5} topSpeed={155} hp={1020} />} />
          
          <Route path="/tesla-clone/model3" element={<Model3Y title={"Model 3"} bgimg={model3} range={358} stat={3.1} />} />
          
          <Route path="/tesla-clone/modely" element={<Model3Y title={"Model Y"} bgimg={modelY} range={330} stat={76} />} />

        </Routes>
      
      </Router>

    </div>
  );
}

export default App;
