import vlab from './vlab.jpg';
import college from './LOGO.png';
import { Link } from 'react-router-dom';
const ExperimentHeader=(props)=>{
    return (
        
            <div className=' bg-white'>
            <div className='flex justify-between py-3 px-14 mx-3'><img className='h-12 w-24' src={vlab} alt="Can't load."></img>
             <img className='h-12' src={college} alt="Can't load."></img>
            </div>
            <div>
                <ul className='check flex justify-center space-x-12 font-bold items-center'>
                <Link to='/'> <li className=''>Home</li></Link>
                <Link to='/Experiment/InsertionSort/Aim'><li className={props.stl}>Aim</li></Link>
                  <Link to='/Experiment/InsertionSort/Theory'> <li className={props.th}>Theory</li></Link>
                    <Link to='/Experiment/InsertionSort/Practice'><li className={props.pr}>Practice</li></Link>
                    <li className=''>Procedure</li>
                    <Link to='/Experiment/InsertionSort/Simulation'><li className={props.sml}>Simulation</li></Link>
                    <Link to='/Experiment/InsertionSort/Posttest'><li className={props.pst}>Posttest</li></Link>

                    <Link to='/Experiment/InsertionSort/References'><li className={props.rf}>References</li></Link>

                </ul>
                <hr></hr>
                
            </div>
            </div>
               
    );
}
export default ExperimentHeader;