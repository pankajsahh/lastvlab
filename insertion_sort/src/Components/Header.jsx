import vlab from './vlab.jpg';
import college from './LOGO.png';
import { useState } from 'react';
import {Link,BrowserRouter as Router,Route,Routes} from 'react-router-dom';
const Header=(props)=>{
    const style='hover:bg-green-400 p-3 hover:text-white hover:underline';

    return (
        
        <>
        <div className='flex justify-between py-3 px-14 mx-3'><img className='h-12 w-24' src={vlab}></img>
             <img className='h-12' src={college}></img>
            </div>
            <div>
                <ul className=' check flex justify-center space-x-12 font-medium items-center'>
                    <li className={props.stl}><Link  to='/'>Home</Link></li>
                    <li className=''>Introduction</li>
                    <li className={props.tl}><Link to='/Experiment'>Experiments</Link></li>
                    <li className=''>Objective</li>
                    <li className={props.tr}><Link to='/Target_Audience'>Target Audience</Link></li>
                    <li className=''>Feedback</li>
                </ul>
                <hr></hr>
            </div>
            
            </>
    );
}
export default Header;