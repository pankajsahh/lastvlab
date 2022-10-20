import fb from './fb.png';
import you from './you.png';
import twit from './twit.png';
const Footer =()=>{
    return (
        <div className='bg-black   mb-0 fixed h-1/5 inset-x-0 bottom-0'>
        <div className='sm:flex justify-evenly text-center'>
            <div className='text-white'><p className='sm:font-bold'>Community Links</p>
            <hr></hr>
            <ul >
             <li className='hover:underline text-xs sm:text-base'><a href='http://proposal.sakshat.ac.in/scholarship'>Sakshat Portal </a></li>
             <li className='hover:underline text-xs sm:text-base'><a href='http://outreach.vlabs.ac.in/'>Outreach  Portal</a></li> 
             <li className='hover:underline text-xs sm:text-base'><a href='https://www.vlab.co.in/faq'>Vlab FAQ:</a></li>  
                </ul></div>
            <div className='text-white'><p className="sm:font-bold">Contact Us</p>
            <hr></hr>
            <ul>
                <li className='text-xs sm:text-base'>Phone: General Information: 011-26582050</li>
                <li className='text-xs sm:text-base'>
                Email: support@vlabs.ac.in
                </li>
            </ul>
            </div>
            <div className='text-white'><p className='sm:font-bold '>Follow us</p>
            <hr>
            </hr>
            <ul className='flex'>
                <li className='hover:underline text-xs sm:text-base'><a href='https://www.facebook.com/VLabsIITDelhi/'><img  src={fb} alt="Can't load."></img></a></li>
                <li className='hover:underline text-xs sm:text-base'><a href='https://www.youtube.com/watch?v=asxRaOgk6a0'><img src={you} alt="Can't load."></img></a></li>
                <li className='hover:underline text-xs sm:text-base'><a href='https://twitter.com/TheVirtualLabs'><img src={twit} alt="Can't load."></img></a></li>
            </ul>
            </div>
        </div>
        <div className='relative items-center'><p className=' text-center'><a className='text-blue-500' href='https://www.gnu.org/licenses/agpl-3.0.en.html'>AGPL 3.0 </a> <span className='text-white'>&</span>  <a className='text-blue-500' href='https://creativecommons.org/licenses/by-nc-sa/4.0/'>Creative Commons (CC BY-NC-SA 4.0)</a> </p></div>
        </div>
    );
}
export default Footer;