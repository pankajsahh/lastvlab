 import vlab from './vlab.jpg';
import college from './LOGO.png';
import {Link} from 'react-router-dom';
import { ListTwoTone } from '@material-ui/icons';
const Header=(props)=>{
   
    const menuSelect=()=>{
        let list =document.querySelector('ul');
        let ico=document.querySelector('#menu');
        if(ico.name=="menu-outline"){ico.name="close-outline"
        list.classList.remove('hidden')
        
        list.classList.add('bg-blue-200');
        list.classList.add('absolute');
        list.classList.add('top-24');
        list.classList.add('left-0');
        list.classList.add('z-50');
        list.classList.add('transition');

        list.classList.add('duration-700');
        list.classList.add('ease-in-out')
        
        
    }else {ico.name="menu-outline"
       list.classList.add('hidden');
       list.classList.remove('transition');
       list.classList.remove('ease-in-out')

       list.classList.remove('duration-700');
    //    list.classList.remove('bg-blue-500');
       list.classList.remove('bg-blue-200');
       list.classList.remove('z-50');
       list.classList.remove('absolute');
        list.classList.remove('top-24');
        list.classList.remove('left-0');
        list.classList.remove('opacity-50')
        
    }      

        
    }
    return (
        
<div className='bg-gradient-to-r from-sky-300 to-indigo-200'>
        <div className='sticky sm:flex sm:justify-between sm:py-3 sm:px-14 sm:mx-3 flex justify-between p-2 '><a href='https://vlab.co.in/' target="_blank"><img className='h-14 w-24 ' alt="Can't load." src={vlab}></img></a>
             <a href='https://www.andcollege.du.ac.in/' target='_blank'><img className='h-16' alt="Can't load." src={college}></img></a>
            </div>
            <div className=' justify-end'>
                <span  className='text-3xl cursor-pointer sm:hidden block'><ion-icon id="menu" name="menu-outline" onClick={menuSelect}></ion-icon></span>
                <ul className=' check sm:flex sm:justify-center sm:space-x-5 sm:font-bold sm:items-center font-semibold hidden '>
                <Link  to='/'><li className={props.stl}>Home</li></Link>

                <Link to='/Introduction'>   <li className={props.in}>Introduction</li></Link>

                <Link to='/Experiment'>  <li className={props.tl}>Experiments</li></Link>

                <Link to='/Objective'> <li className={props.ob}>Objective</li></Link>

                <Link to='/Target_Audience'> <li className={props.tr}>Target Audience</li></Link>
                
                <Link to='/Feedback'><li className={props.fb}>Feedback</li></Link>
                </ul>
                <hr></hr>
    
            
            </div>
            </div>
    );
}
export default Header;