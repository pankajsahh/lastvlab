import vlab from './vlab.jpg';
import college from './LOGO.png';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
import Landing from './Landing';
const ExperimentHeader=(props)=>{
    return (
        
            <div className=' bg-white'>
            <div className='flex justify-between py-3 px-14 mx-3'><img className='h-12 w-24' src={vlab}></img>
             <img className='h-12' src={college}></img>
            </div>
            <div>
                <ul className='check flex justify-center space-x-12 font-bold items-center'>
                    <li className=''><Link to='/'>Home</Link></li>
                    <li className={props.stl}><Link to='/Experiment/InsertionSort/Aim'>Aim</Link></li>
                    <li className=''>Theory</li>
                    <li className={props.pr}><Link to='/Experiment/InsertionSort/Practice'>Practice</Link></li>
                    <li className=''>Procedure</li>
                    <li className={props.sml}><Link to='/Experiment/InsertionSort/Simulation'>Simulation</Link></li>
                    <li className=''>Posttest</li>

                    <li className={props.rf}><Link to='/Experiment/InsertionSort/References'>References</Link></li>

                </ul>
                <hr></hr>
                
            </div>
            </div>
               
    );
}
export default ExperimentHeader;