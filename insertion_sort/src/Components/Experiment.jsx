
import { Link } from "react-router-dom";
import Eimage from './ExperimentsIcon.png';
const Experiment= ()=>{
    return (
    
      
        <div className="flex justify-around  pb-5 mt-5">
           <div className="bg-red-900 w-60 h-32 text-center m-10 p-5" >
             <h2 className="text-white font-semibold p-5 hover:underline"><Link to ='/Experiment/InsertionSort/Aim'>Insertion Sort</Link></h2>
           </div>
           <img src={Eimage} alt="Can't load." className="float-left"></img>
        </div>
        
        
    );
}

export default Experiment;