
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

import Introduction from './Introduction';
import Objective from './Objective';
import Feedback from './Feedback';
import FeedbackForm from './FeedbackForm';

import References from './References';

const Landing =()=>{
    return (
        
        <Router>
         
            <Routes>
            
       
            
            <Route path='/' element={<><Header stl="text-red-500 underline" /><LandingContent/><Footer/></>}/>


            <Route path='/Introduction' element={<><Header in="text-red-500 underline"/><Introduction/><Footer/></>}/>

            <Route path='/Objective' element={<><Header ob="text-red-500 underline"/><Objective/><Footer/></>}/>
            
            <Route path='/Feedback' element={<><Header fb="text-red-500 underline"/><Feedback/><Footer/></>}/>
            <Route path='/FeedbackForm' element={<FeedbackForm/>}/>



            <Route path='/Target_Audience' element={<><Header tr="text-red-500 underline"/><TargetAudience/><Footer/></>}/>
            <Route path='/Experiment' element={<><Header tl="text-red-500 underline"/><Experiment/><Footer/></>}/>
            <Route path='/Experiment/InsertionSort' element={<><ExperimentPage/><Footer/></>}/> 
            <Route path='/Experiment/InsertionSort/Aim' element={<><ExperimentPage/><Footer/></>}/>
            <Route path='/Experiment/InsertionSort/References' element={<><ExperimentHeader rf="text-red-500 underline"/><References/><Footer/></>}/>

            <Route path='/Experiment/InsertionSort/Practice' element={<><ExperimentHeader pr='text-red-500 underline'/><Practice/><Footer/></>}/>
           
            <Route path='/Experiment/InsertionSort/Simulation' element={<><ExperimentHeader sml="text-red-500 underline"/><Simulation/><Footer/></>}/>
             
            </Routes>
               
            
        
                </Router>
    );
}

export default Landing;