import React from "react";
import feedback from './feedback.png';
import {Link,BrowserRouter as Router,Route,Routes} from 'react-router-dom';

const Feedback=()=>{
    return (
        <div>
        <div className='flex justify-around pb-2'>
            <div className='m-5 p-5 mt-0'>
                <h1 className="text-3xl font-semibold mt-4 mb-4 text-center text-slate-500 ">Virtual lab on Sorting Algorithms</h1>
                <h3 className="text-xl font-medium mt-10 text-stone-900">Greetings, User</h3>
                <p className="text-xl font-light leading-relaxed mt-5 text-stone-800">
                Thank you for taking the time to visit Virtual Labs. Your opinion is incredibly helpful to us. We'd like to ask you a few questions about your experience of the lab to help us improve. It will just take a few minutes of your time, and your responses will assist us in enhancing Virtual Labs for you and other users.
                </p>
            </div>
            <img className="h-64 w-102 mb-0 mt-5" src={feedback}></img>
            </div>
        <button className="ml-10 bg-white hover:bg-blue-500 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
            <Link to='/FeedbackForm' target="_blank">Feedback Form</Link>
        </button>
        <p className="text-xl ml-10 font-light leading-relaxed mt-8 text-stone-800">
        Thank you for taking the time to read this.
        </p>
        <h3 className="text-xl ml-10 font-medium mt-2 text-stone-900">Virtual Labs' Team</h3>
        </div>
    );
}

export default Feedback;