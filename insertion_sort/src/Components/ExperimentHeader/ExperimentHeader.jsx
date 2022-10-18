import vlab from '../Header/vlab.jpg';
import college from '../Header/LOGO.png';
import { Link } from 'react-router-dom';
const ExperimentHeader=(props)=>{
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
        list.classList.add('mx-10')
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
        
        <div className=' bg-gradient-to-r from-sky-300 to-indigo-200'>
        <div className='flex justify-between py-3 px-14 mx-3 sticky sm:flex sm:justify-between sm:py-3 sm:px-14 sm:mx-3 flex justify-between p-2 '><img className='h-16 w-24' src={vlab} alt="Can't load."></img>
         <img className='h-16' src={college} alt="Can't load."></img>
        </div>
        <div className=' justify-end'>
        <span  className='text-3xl cursor-pointer sm:hidden block'><ion-icon id="menu" name="menu-outline" onClick={menuSelect}></ion-icon></span>
            <ul className='sm:flex sm:justify-center sm:space-x-5 sm:font-bold sm:items-center font-semibold hidden  '>
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