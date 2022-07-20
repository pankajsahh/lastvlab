// ## This component includes the buttons for sorting algorithms and also generating new array. ## //

import React, { Component } from "react";
import "./ButtonsBar.css";

export default class ButtonsBar extends Component {
  render() {
    return (

      <div className="buttons-bar">
        <button className="button bg-gradient-to-r from-sky-500 to-indigo-500" onClick={() => this.props.generateNewArray()} id="reset">
          Generate New Array
        </button>
        <button
          id="insertionSortButton"
          onClick={() => this.props.insertionSort()}
          className="buttonStyle1 button bg-gradient-to-r from-sky-500 to-indigo-500"
        >
          Sort Array
        </button>
      </div>
    );
  }
}
