import vlab from './vlab.jpg';
import college from './LOGO.png';
import {Link} from 'react-router-dom';
const Header=(props)=>{

    return (
        
<>
        <div className='flex justify-between py-3 px-14 mx-3'><img className='h-12 w-24' alt="Can't load." src={vlab}></img>
             <img className='h-12' alt="Can't load." src={college}></img>
            </div>
            <div>
                <ul className=' check flex justify-center space-x-12 font-bold items-center sm:space-x-5 md:space-x-10'>
                <Link  to='/'><li className={props.stl}>Home</li></Link>
                <Link to='/Introduction'>   <li className={props.in}>Introduction</li></Link>
                <Link to='/Experiment'>  <li className={props.tl}>Experiments</li></Link>
                <Link to='/Objective'> <li className={props.ob}>Objective</li></Link>
                <Link to='/Target_Audience'> <li className={props.tr}>Target Audience</li></Link>
                <Link to='/Feedback'><li className={props.fb}>Feedback</li></Link>
                </ul>
                <hr></hr>
    
            
            </div>
            </>
    );
}
export default Header;