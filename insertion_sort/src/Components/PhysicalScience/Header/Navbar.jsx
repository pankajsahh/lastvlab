import React, { useState } from 'react';
import './navbar.css' ;

// npm install react-icons --save 
import { RiMenu3Line , RiCloseLine } from 'react-icons/ri'
// importing logo 
import logo from '../../../assets/andc_logo.png';
import { Link } from 'react-router-dom';


// construncting menu 
const Menu = () =>(
    <>
        <p><Link to="/">Home</Link></p>
        <p><Link to="#about">About Us</Link></p>
        <p><Link to="#Contact Us">Contact Us</Link></p>
        
        
    </>
)

const Navbar = () => {
    // hooks
    const [toggleMenu, setToggleMenu] = useState(false);


    return (
        <div className='navbar section__padding gradient__bg' id='home'>
            <div className='navbar__links'>
                <div className='navbar__links-logo'>
                    <Link to="/">
                        <img src ={logo} alt ="logo__image" href="/"></img>
                    </Link>
                    <Link to="/">
                        <h6>Andc Virtual Labs</h6>
                    </Link>

                </div>
                <div className='navbar__links-container' >
                    <Menu/>
                </div>
            </div>
                <div className='navbar__menu' >
                  { toggleMenu 
                  ? <RiCloseLine color="#fff" size= {35} onClick={ ()=> setToggleMenu(false) } />  
                  : <RiMenu3Line color="#fff" size= {35} onClick={ ()=> setToggleMenu(true)} /> 
                  }  
                
                { toggleMenu && (
                    <div className='navbar__menu-container scale-up-center'>
                        <div className='navbar__menu__container-links'>
                            <Menu/>
                        </div>
                    </div>
                )
                }                   
                </div>
    
            
        </div>
    )
}

export default Navbar;
