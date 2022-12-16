

import LandingContent from '../Home/LandingContent';
import Experiment from '../Experiment/Experiment';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
// router 
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
  
} from "react-router-dom";
import ExperimentHeader from '../ExperimentHeader/ExperimentHeader';
import ExperimentPage from '../Experiment/ExperimentPage';
import Practice from "../Practice/SortingVisualizer.jsx";
// import Practice1 from './Practice1';

import TargetAudience from '../TargetAudience/TargetAudience';
import Simulation from '../Simulation/Simulation';
import Procedure from '../Procedure/Procedure';

import Introduction from '../Introduction/Introduction';
import Objective from '../Objective/Objective';
import Feedback from '../Feedback/Feedback';
import Question from '../Feedback/Question';

import References from '../References/References';
import Theory from '../Theory/Theory';
import PostTest from '../Posttest/PostTest';
import UserTest from '../Simulation/UserTest';
import Thankyou from '../Feedback/Thankyou';

import Navbar from '../PhysicalScience/Header/Navbar'
import PandasFooter from '../PhysicalScience/footer/Footer'
import ExpNav from '../PhysicalScience/pages/Experiment-Nav/ExpNav'
import PandasAim from '../PhysicalScience/pages/Experiment-1-Content/PandasAim'
import PandasQuizz from '../PhysicalScience/pages/Experiment-1-Content/PandasQuizz'
import PandasTheory from '../PhysicalScience/pages/Experiment-1-Content/PandasTheory'
import PandasProcedure from '../PhysicalScience/pages/Experiment-1-Content/procedure/Procedure'
import PandasReference from '../PhysicalScience/pages/Experiment-1-Content/PandasReferences'
import PandasSimulationExp1 from '../PhysicalScience/pages/Experiment-1-Content/Simulator/Simulation_exp1'
import PandasPracticeExp1 from '../PhysicalScience/pages/Experiment-1-Content/PandasPractice_exp1'
import PandasObjective from '../PhysicalScience/pages/Experiment-1-Content/PandasObjective'
import ExperimentsList from '../PhysicalScience/pages/Experiment-1-Content/ExperimentsList';


const Landing =()=>{
    return (
        
        <Router>      
            <Routes>

            <Route path='/' element={<><Navbar /><LandingContent/><PandasFooter /></>}/>
            <Route path='/physical-science/' element={<><Navbar /><ExperimentsList /><PandasFooter /></> }/>
            
            <Route path='/physical-science/Pandas/' element={<><Navbar /><ExpNav /><PandasFooter /></> }>
              <Route path='' element={<PandasAim />} />
              <Route path='Quizz/' element={<PandasQuizz /> } />
              <Route path='Objective/' element={<PandasObjective />} />
              <Route path='Theory/' element={<PandasTheory />} />
              <Route path='Procedure/' element={<PandasProcedure />} />
              <Route path='Reference/' element={<PandasReference />} />
              <Route path='Simulation/' element={<PandasSimulationExp1 />} />
              <Route path='Practice/' element={<PandasPracticeExp1 />} />
            </Route>
           


            <Route path='/Introduction' element={<><Header in="text-white underline"/><Introduction/><Footer/></>}/>

            <Route path='/Objective' element={<><Header ob="text-white underline"/><Objective/><Footer/></>}/>
            
            <Route path='/Feedback' element={<><Header fb="text-white underline"/><Feedback/><Footer/></>}/>

            <Route path='/Feedback/Question' element={<Question/>}/>

            <Route path='/Thankyou' element={<><Header fb="text-white underline"/><Thankyou/></>}/>

            <Route path='/Target_Audience' element={<><Header tr="text-white underline"/><TargetAudience/><Footer/></>}/>

            <Route path='/Experiment' element={<><Header tl="text-white underline"/><Experiment/><Footer/></>}/>

            <Route path='/Experiment/InsertionSort' element={<><ExperimentPage/><Footer/></>}/> 

            <Route path='/Experiment/InsertionSort/Aim' element={<><ExperimentPage/><Footer/></>}/>

            <Route path='/Experiment/InsertionSort/References' element={<><ExperimentHeader rf="text-white underline"/><References/><Footer/></>}/>

            <Route path='/Experiment/InsertionSort/Practice' element={<><ExperimentHeader pr='text-white underline'/><Practice/></>}/>

            <Route path='/Experiment/InsertionSort/Aim' element={<><ExperimentPage/><Footer/></>}/>
            <Route path='/Experiment/InsertionSort/References' element={<><ExperimentHeader rf="text-red-500 underline"/><References/><Footer/></>}/>

            <Route path='/Experiment/InsertionSort/Theory' element={<><Theory/></>}/>
            <Route path='/Experiment/InsertionSort/Practice' element={<><ExperimentHeader pr='text-red-500 underline'/><Practice/></>}/>

            <Route path='/Experiment/InsertionSort/Procedure' element={<><ExperimentHeader pc="text-white underline"/><Procedure/></>}/>

            <Route path='/Experiment/InsertionSort/Simulation' element={<><ExperimentHeader sml="text-white underline"/><Simulation/><Footer/></>}/>

            <Route path='/Experiment/InsertionSort/Simulation/Test' element={<><ExperimentHeader sml="text-white underline"/><UserTest/><Footer/></>}/>

            <Route path='/Experiment/InsertionSort/Posttest' element={<><ExperimentHeader pst='text-white underline'></ExperimentHeader><PostTest ></PostTest><Footer/></>}/>
             
            </Routes>
      </Router>
    );
}

export default Landing;