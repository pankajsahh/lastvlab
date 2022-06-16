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
    InsertionSort(array,steps,colors);
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
      <div>
      <div className='app flex justify-end space-x-72'>
        <div className='self-center px-5'>
          
          <ul className='list-disc px-5'>
            <li><b className='mb-1' >Key index is coloured <span className='text-red-500'>RED.</span></b></li><br/>
           <li><b className='mb-1' >Two comparing indexes are coloured <span className='text-blue-500'>BLUE.</span></b></li> <br/>
           <li><b className='mb-1'>Sorted numbers are coloured <span className='text-green-500'>GREEN.</span></b></li><br/>
           <li><b className='mb-1'>Change array value manually using <i className='underline'>Increment</i> and <i className='underline'>Decrement</i> symbol.</b></li></ul>
           
        </div>
        <div className='frame'>
          <div className='card container self-center'>{bars}</div>
        </div>
      <img src={PracticeIcon} className='float-right h-96'></img>
      </div>
      
      <div className='text-center space-x-5'>
      <button onClick={this.newArray} className='hover:opacity-30' ><img src={refresh}></img></button>

      <button onClick={this.handleStart} className="hover:opacity-30"><img src={start}></img></button>
      </div>
      </div>
      </div>

    );
  }
}
export default Practice;