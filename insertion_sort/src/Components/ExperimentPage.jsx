import ExperimentHeader from "./ExperimentHeader";
import LandingContent from "./LandingContent";
import Footer from "./Footer";
import {Link,
    Routes,
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
const ExperimentPage=()=>{
    return (
        <>

       <ExperimentHeader stl='text-blue-500 underline'/>
       <LandingContent/>

       {/* <Aim/> */}

       {/* <Footer/> */}
       </>
    );
}
export default ExperimentPage;