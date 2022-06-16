
import  img1 from './img1.png';
import fb from './fb.png';
import you from './you.png';
import twit from './twit.png';
import LandingContent from './LandingContent';
import Experiment from './Experiment';
import Footer from './Footer';
import Header from './Header';
// router 
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import ExperimentHeader from './ExperimentHeader';
import ExperimentPage from './ExperimentPage';
import Practice from './Practice';
import TargetAudience from './TargetAudience';
import Simulation from './Simulation';
import References from './References';

const Landing =()=>{
    return (
        
        <Router>
         
            <Routes>
            
       
            
            <Route path='/' element={<><Header stl="text-red-500 underline" /><LandingContent/></>}/>
            <Route path='/Target_Audience' element={<><Header tr="text-red-500 underline"/><TargetAudience/></>}/>
            <Route path='/Experiment' element={<><Header tl="text-red-500 underline"/><Experiment/></>}/>
            <Route path='/Experiment/InsertionSort' element={<ExperimentPage/>}/> 
            <Route path='/Experiment/InsertionSort/Aim' element={<ExperimentPage/>}/>
            <Route path='/Experiment/InsertionSort/Aim' element={<ExperimentPage/>}/>
            <Route path='/Experiment/InsertionSort/References' element={<><ExperimentHeader rf="text-red-500 underline"/><References/></>}/>

            <Route path='/Experiment/InsertionSort/Practice' element={<><ExperimentHeader pr='text-red-500 underline'/><Practice/></>}/>
           
            <Route path='/Experiment/InsertionSort/Simulation' element={<><ExperimentHeader sml="text-red-500 underline"/><Simulation/></>}/>
            </Routes>
                
                <Footer/>
        
                </Router>
    );
}

export default Landing;