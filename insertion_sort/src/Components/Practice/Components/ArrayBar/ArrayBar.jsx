// ## This component includes all the 3D bars/containers and array values. ## //

import React, { Component } from "react";
import "./ArrayBar.css";

export default class BarContainer extends Component {
  render() {
    return (
      <div className="bar-container ">
        <div className="shadow-2xl px-10 py-5 rounded-3xl mr-7 bg-gradient-to-r from-indigo-100 to-sky-200"><ul className='list-disc px-5'>
					<li><b className='mb-1' >Unsorted numbers are coloured <span className='text-cyan-500'>AQUA.</span></b></li><br/>
            <li><b className='mb-1' >Two swapping indexes will be coloured <span className='text-yellow-500'>YELLOW.</span></b></li><br/>
           <li><b className='mb-1' >Two comparing indexes will be coloured <span className='text-blue-500'>BLUE.</span></b></li> <br/>
           <li><b className='mb-1'>Sorted numbers will be coloured <span className='text-green-500'>GREEN.</span></b></li><br/>
           <li><b className='mb-1'>Click on Sort Array button to start visualizer.</b></li><br/>

		  </ul>
					</div>
        {/* Create n bars, where n - size of the array */}
        {this.props.array.map((value, i) => (
          <div className="bar" key={i}>
            <div className="side top"></div>
            <div className="side bottom"></div>
            <div className="side right">
              <div
                className="color-bar right-color-bar"
                style={{
                  height: `${value}vh`,
                  transform: `translateY(${70 - value}vh)`,
                }}
              ></div>
            </div>
            <div className="side left">
              <div
                className="color-bar left-color-bar"
                style={{
                  height: `${value}vh`,
                  transform: `translateY(${70 - value}vh)`,
                }}
              ></div>
            </div>
            <div className="side front">
              <div
                className="color-bar front-color-bar"
                style={{
                  height: `${value}vh`,
                  transform: `translateY(${70 - value}vh)`,
                }}
              ></div>
            </div>
            <div className="side back">
              <div
                className="color-bar back-color-bar"
                style={{
                  height: `${value}vh`,
                  transform: `translateY(${70 - value}vh)`,
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
