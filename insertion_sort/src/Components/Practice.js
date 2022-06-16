import React, { Component } from 'react'
import Bars from './Bars';
import './Practice.css';
import refresh from './refresh.png';
import start from './play.png';
// Algorithm
// import BubbleSort from './BubbleSort';
import PracticeIcon from './PracticeIcon.png';
import InsertionSort from './Algorithm/InsertionSort';
class Practice extends Component{
  state={
    array:[],
    steps:[],
    colorKey:[],
    colors:[],
    timeouts:[],
    currentStep:0,
    count:8,
    delay:1300,
    algorithm:'InsertionSort',
    value:'hii'
  };
 
  handleStart=()=>{
   let steps=this.state.steps;
   let colors=this.state.colors;
   this.clearTimeouts();
   let timeouts=[];
   let i=0;
   while(i<steps.length-this.state.currentStep){
     let timeout=setTimeout(()=>{
       let currentStep=this.state.currentStep;
       this.setState({
         array:steps[currentStep],
         colorKey:colors[currentStep],
         currentStep:currentStep+1
       });
       timeouts.push(timeout);

     },this.state.delay*i);
     i++;
   }
   this.setState({
     timeouts:timeouts,
   });
  };

  generateSteps=()=>{
    let array=this.state.array.slice();
    let steps=this.state.steps.slice();
    let colors=this.state.colors.slice();
    let value=this.state.value;
    // BubbleSort(array,0,steps,colors);
    InsertionSort(array,steps,colors,value);
    this.setState({
      steps:steps,
      colors:colors,
    });
  };
componentDidMount(){
  this.generateElements();
}
clearTimeouts=()=>{
  this.state.timeouts.forEach((timeout)=>clearTimeout(timeout));
  this.setState({timeouts:[]});
}

clearColorKey=()=>{
  let blank=new Array(this.state.count).fill(0);
  this.setState({colorKey:blank,colors:[blank]});
};
  generateRandomNumber =(min,max)=>{
     return Math.floor(Math.random()*(max-min)+min);
  }
 newArray=()=>{
    this.generateElements();
  }
  generateElements =()=>{
    this.clearTimeouts();
    this.clearColorKey();
    let count=this.state.count;
    let arr=[];
    for(let i=0;i<count;i++){
      arr.push(this.generateRandomNumber(40,180));
    }
    this.setState({
      array:arr,
      steps:[arr],
      count:count,
      currentStep:0
    },() =>this.generateSteps());
    // console.log(arr);
  };  
  
  changeArray=(index,value)=>{
    let array=this.state.array;
    array[index]=value;
    this.setState({
      array:array,
      steps:[array],
      currentStep:0,
    },()=>this.generateSteps());
  };
  render(){
    const bars=this.state.array.map((value,index)=>{
     return (<Bars 
     key={index}
      index={index}
       length={value}
        changeArray={this.changeArray}
        colorKey={this.state.colorKey[index]}
        />
     );  
  });
    return (
      <div>
        <h3 className='text-xl font-semibold mt-5 underline text-center mb-4'>Instructions</h3>
      <div className='m-5 p-2 flex justify-center rounded-md border border-black'>
      <ul className='text-xl text-stone-800 p-3 list-disc list-inside bg-black-400'>
        <li>Click on <img className='inline h-8 w-8' src={refresh}/> to generate a new array. </li>
        <li>Click on <img className='inline h-8 w-8' src={start}/> to start the sorting of the array. </li>
      </ul>
      </div>
      <div>
      <div className='app flex justify-end space-x-72'>
        <div className='frame'>
          <div className='card container self-center'>{bars}</div>
        </div>
      <img src={PracticeIcon} className='float-right h-96'></img>
      </div>
      
      <div className='text-center space-x-5'>
      <button onClick={this.newArray} ><img src={refresh}></img></button>

      <button onClick={this.handleStart} className=""><img src={start}></img></button>
      </div>
      </div>
      </div>

    );
  }
}
export default Practice;