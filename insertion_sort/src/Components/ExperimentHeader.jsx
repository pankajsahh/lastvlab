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
<<<<<<< HEAD
                <Link to='/'> <li className=''>Home</li></Link>
                <Link to='/Experiment/InsertionSort/Aim'><li className={props.stl}>Aim</li></Link>
                    <li className=''>Theory</li>
                    <Link to='/Experiment/InsertionSort/Practice'><li className={props.pr}>Practice</li></Link>
=======
                    <li className=''><Link to='/'>Home</Link></li>
                    <li className={props.stl}><Link to='/Experiment/InsertionSort/Aim'>Aim</Link></li>
                    <li className={props.th}><Link to='/Experiment/InsertionSort/Theory'>Theory</Link></li>
                    <li className={props.pr}><Link to='/Experiment/InsertionSort/Practice'>Practice</Link></li>
>>>>>>> 4297c85812bef688c45fec967b46d9c04be9241a
                    <li className=''>Procedure</li>
                    <Link to='/Experiment/InsertionSort/Simulation'><li className={props.sml}>Simulation</li></Link>
                    <li className=''>Posttest</li>
<<<<<<< HEAD

                    <Link to='/Experiment/InsertionSort/References'><li className={props.rf}>References</li></Link>

=======
                    <li className={props.rf}><Link to='/Experiment/InsertionSort/References'>References</Link></li>
>>>>>>> 4297c85812bef688c45fec967b46d9c04be9241a
                </ul>
                <hr></hr>
                
            </div>
            </div>
               
    );
}
export default ExperimentHeader;