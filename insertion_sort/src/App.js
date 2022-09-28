import Landing from './Components/Routes/Landing';
import Feedbackk from './Components/Feedback/Feedbackk';
import Question from './Components/Feedback/Question';
// import ExperimentHeader from "./Components/ExperimentHeader";
import ExerciseState from './Context/ExerciseState';
const App =()=>{
  return (

    <ExerciseState>
    <Landing/>  
    </ExerciseState>

  );
}
export default App;