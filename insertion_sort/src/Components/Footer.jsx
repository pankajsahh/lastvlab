import  img1 from './img1.png';
import fb from './fb.png';
import you from './you.png';
import twit from './twit.png';
const Footer =()=>{
    return (
        <div className='bg-black pb-5 mt-5 absolute inset-x-0 bottom-0 align-bottom mb-0'>
        <div className='flex justify-evenly '>
            <div className='text-white'><b>Community Links</b>
            <hr></hr>
            <ul >
             <li className='hover:underline'><a href='http://proposal.sakshat.ac.in/scholarship'>Sakshat Portal </a></li>
             <li className='hover:underline'><a href='http://outreach.vlabs.ac.in/'>Outreach  Portal</a></li> 
             <li className='hover:underline'><a href='https://www.vlab.co.in/faq'>Vlab FAQ:</a></li>  
                </ul></div>
            <div className='text-white'><b>Contact Us</b>
            <hr></hr>
            <ul>
                <li>Phone: General Information: 011-26582050</li>
                <li>
                Email: support@vlabs.ac.in
                </li>
            </ul>
            </div>
            <div className='text-white'><b>Follow us</b>
            <hr>
            </hr>
            <ul className='flex'>
                <li className='hover:underline'><a href='https://www.facebook.com/VLabsIITDelhi/'><img  src={fb}></img></a></li>
                <li className='hover:underline'><a href='https://www.youtube.com/watch?v=asxRaOgk6a0'><img src={you}></img></a></li>
                <li className='hover:underline'><a href='https://twitter.com/TheVirtualLabs'><img src={twit}></img></a></li>
            </ul>
            </div>
        </div>
        <div className='relative items-center'><p className=' text-center'><a className='text-blue-500' href='https://www.gnu.org/licenses/agpl-3.0.en.html'>AGPL 3.0 </a> <span className='text-white'>&</span>  <a className='text-blue-500' href='https://creativecommons.org/licenses/by-nc-sa/4.0/'>Creative Commons (CC BY-NC-SA 4.0)</a> </p></div>
        </div>
    );
}
export default Footer;