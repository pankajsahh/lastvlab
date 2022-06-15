
import { Link } from "react-router-dom";
import Eimage from './ExperimentsIcon.png';
const Experiment= ()=>{
    return (
      <>
      
        <div className="flex justify-around m-5">
           <div className="bg-red-900 w-60 h-32 text-center" >
             <h2 className="text-white font-semibold p-5 hover:underline"><Link to ='/InsertionSort '>Insertion Sort</Link></h2>
           </div>
           <img src={Eimage} className="float-left h-96"></img>
        </div>
        
        </>
    );
}

export default Experiment;