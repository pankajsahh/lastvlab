
import { Link } from "react-router-dom";
import Eimage from './experiment.png';
const Experiment= ()=>{
    return (
    
      
        <div className="sm:flex justify-around  pb-5 mt-5 ">
           <div className="bg-gradient-to-r from-sky-500 to-indigo-500 lg:w-60 lg:h-max rounded lg:rounded lg:hover:opacity-50 transition ease-in duration-300 w-28 h-28 m-4 lg:m-10 p-5" >
             <h2 className="text-white font-semibold text-center hover:underline "><Link to ='/Experiment/InsertionSort/Aim'>Insertion Sort</Link></h2>
           </div>
           <img src={Eimage}  alt="Can't load." className="float-left lg: h-48 md:h-96 xl:h-fit"></img>
        </div>
        
        
    );
}

export default Experiment;