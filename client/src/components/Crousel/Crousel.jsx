import './Crousel.css'
import React from 'react';


// import Buttons from '../Exp-Nav-Buttons/Buttons';

import logo from '../../assets/1.jpg'; // Note photo should 800px width and 350px height
import { Link } from 'react-router-dom';


export default function App() {
    return (
        <div>
            <div className="text-container section__padding">
                <div className="txt">
                    <div className="txt-box">
                        <h2 className="h2-part-1">Welcome to <span className="h2-part-2">ANDC Virtual Labs</span></h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, dignissimos.
                        </p>
                        <div className="button-set">
                            <p className='button'><Link to="/DataAnalysis/Aim">Explore Experiments</Link></p>
                            <p className='button'><Link to="/feedback">Feedback</Link></p>
                           
                        </div>
                    </div>
                </div>
                <div className="img-part">
                    <img src={logo} alt="image1" />
                </div>
            </div>
        </div>

    );
}