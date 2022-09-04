import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom'

import Aim from './components/pages/Experiment-1-Content/Aim';
import Quizz from './components/pages/Experiment-1-Content/Quizz';
import Objective from './components/pages/Experiment-1-Content/Objective';
import Theory from './components/pages/Experiment-1-Content/Theory';
import Procedure from './components/pages/Experiment-1-Content/procedure/Procedure';
import Reference from './components/pages/Experiment-1-Content/References';
import SimulationExp1 from './components/pages/Experiment-1-Content/Simulator/Simulation_exp1';
import PracticeExp1 from './components/pages/Experiment-1-Content/Practice_exp1';



import ExpNav from './components/pages/Experiment-Nav/ExpNav';
import Navbar from './components/Header/Navbar.jsx';
import Footer from './components/footer/Footer.jsx';
import Store from './components/context/store';


function App() {
  return (
    <div className="App">
      <Store>
        <Navbar />
        <Routes >
            <Route path='/' element={<ExpNav />}>
              <Route path='/' element={<Aim />} />
              <Route path='Quizz/' element={<Quizz />} />
              <Route path='Objective/' element={<Objective />} />
              <Route path='Theory/' element={<Theory />} />
              <Route path='Procedure/' element={<Procedure />} />
              <Route path='Reference/' element={<Reference />} />
              <Route path='Simulation/' element={<SimulationExp1 />} />
              <Route path='Practice/' element={<PracticeExp1 />} />
            </Route>
        </Routes>
        <Footer />
      </Store>
    </div>
  );
}


export default App;
