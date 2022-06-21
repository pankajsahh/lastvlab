import ExperimentHeader from "./ExperimentHeader";
import Aim from "./InsertionSort/Aim";
import Footer from "./Footer";
import {Link,
    Routes,
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
const ExperimentPage=(props)=>{
    return (
        <>
       <ExperimentHeader stl='text-red-500 underline'/>
       <Aim/>
       {/* <Footer/> */}
       </>
    );
}
export default ExperimentPage;