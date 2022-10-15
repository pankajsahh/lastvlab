import React from 'react'
import { useContext } from 'react'
import { CommentText } from 'semantic-ui-react';
import {ExerciseContext} from '../../Context/ExerciseState'
const ExerciseQuestions = (props) => {
  // import the useContext
  const count=useContext(ExerciseContext);

  const que0=<pre>for(i=0;i&#60; <input maxLength='1' className='w-4' id='res'></input>; i++)</pre>
  const que1=<pre><input maxLength='4' className='w-16' id='res'/> = <input maxLength='6' className='w-16' id='res1'></input>;</pre>

  const que2=<pre><input maxLength='11' className='w-32' id='res'></input>{}</pre>
const ans=<pre><h1 className='text-3xl tracking-wide'>Correct!</h1></pre>
const wro=<pre><h1 className='text-3xl tracking-wide'>Wrong!</h1></pre>
  const que3=<pre>temp   =<input maxLength='6' className='w-16 ml-4 mb-2' id='res'></input>
    <br/><input maxLength='6' className='w-16 mr-4 mb-2' id='res1'></input>=<input maxLength='6' className='w-16 ml-4' id='res2'></input>
    <br/><input maxLength='6' className='w-16 mr-4' id='res3'></input>=<input maxLength='6' className='w-16 ml-4' id='res4'></input></pre>
   const question=[
        {
            question:"Complete for loop syntax to run a code 5 times.",
            code:que0,
            answer:4
        },
        {
          question:"Store the third element of array arr[]={3,1,2,5,4} in a varible 'temp'.",
          code:que1,
          answer:'temp',
          answer1:'arr[2]'
      },
      {
        question:"Write a while loop syntax that executes the code untill i variable has value greater than or equal to zero.",
        code:que2,
        answer:'while(i>=0)'
    },
    {
      question:"Swap the first and second element of the array arr[]={3,1,2,4,5} using temporary vaiable temp.",
      code:que3,
      answer:"arr[0]",
      answer1:"arr[1]",
      answer2:"temp"
  },
  {
    question:"Complete for loop syntax to run a code 5 times.",
    code:que0,
    answer:4
},
{
  question:'',
  code:ans
},
{
  question:'',
  code:wro
}
    ]

    // function to check answer
    const handleSubmit=()=>{
    
     
      // fill in the blamk box 
      const ele=document.getElementById('res');
      //  access the first input box with id =res1
      const ele1=document.getElementById('res1');
       const ans=document.getElementById('ansBox');
        //  access submit button
        const submitBtn=document.getElementById('answerButton');


        // function to make changes when correct answer is selected
        const correct=()=>{
          // set the color of the answer box to green
          ans.style.backgroundColor='lightgreen'
          
          console.log('Classlist after correct answer',ans.classList)
          count.changeExercise(5);
          document.getElementById('answerButton').innerText='Next Exercise' 
          document.getElementById('showButton').style.visibility='hidden'         
        }
        // function to make changes when wrong answer is selected
        const inCorrect=()=>{
          // set the color of the answer box to red
          ans.style.backgroundColor='#f04c4c';
         count.changeExercise(6)
          document.getElementById('answerButton').innerText='Try Again'
          document.getElementById('showButton').style.visibility='hidden'         

        }
        // case 1: user submits the answer
        
        if(submitBtn.innerText=='Submit Answer'){
          
          //  validate answer for exercise 1\
          if(count.exerciseCount==0){
         if(ele.value==question[count.exerciseCount].answer){
         correct();
         }else{
         inCorrect();
         }
        }
        // validate answer for exercise 2
        else if(count.exerciseCount==1){
          
          if(ele.value==question[count.exerciseCount].answer1 && ele1.value==question[count.exerciseCount].answer){
               correct();
          }else inCorrect();
        }// validate answer for exercise 3
        else if(count.exerciseCount==2){
          // access the value of all the input box 
          
          if(ele.value==question[count.exerciseCount].answer){
            correct();
          }else inCorrect();
        }
        // validate the answer for exercise 3
        else if (count.exerciseCount==3){
          const ele1=document.getElementById('res').value;
          const ele2=document.getElementById('res1').value;
          const ele3=document.getElementById('res2').value;
          const ele4=document.getElementById('res3').value;
          const ele5=document.getElementById('res4').value;
          // console.log(ele.value)
          if(ele1==question[count.exerciseCount].answer && ele2==ele1 && ele3==question[count.exerciseCount].answer1 && ele4==ele3 && ele5==question[count.exerciseCount].answer2){
            correct();
        }else inCorrect();
      }
        

        

        //  case 2: User clicks Try Again

        }else if (submitBtn.innerText=='Try Again'){
          // set the HTML to default 
          // remove the red background
          // set the color of the ans box to gray
          ans.style.backgroundColor='rgb(229 231 235)'
          console.log("countLi is",count.li)
          count.changeExercise(count.li)
          submitBtn.innerText='Submit Answer'
          document.getElementById('showButton').addEventListener('click',showAnswer)
          document.getElementById('showButton').style.visibility='visible'         


        }
        // case 3: If user clicks on next exercise 
        else if(submitBtn.innerText=='Next Exercise'){
          // remove the green background
          // set the color of the answer box to gray
          ans.style.backgroundColor='rgb(229 231 235)'

          console.log("Classlist after new exercise",ans.classList)
          count.nextExercise();
          count.setExerciseBackground(count.li+1)
          
          console.log("hello I am here. ")
          // ans.style.backgroundColor='rgb(229 231 235)';
          // set the button text 
          submitBtn.innerText='Submit Answer'
          document.getElementById('showButton').addEventListener('click',showAnswer);
          // make the show Button visible
          document.getElementById('showButton').style.visibility='visible'

        }
        
         
  
    }

    
    // function to show answer to the user
    const showAnswer=()=>{
      
      console.log("Show answer button.",count.exerciseCount)
      // access the button 
      const btn=document.getElementById('showButton');
      const ele1=document.getElementById('res');
      ele1.value=question[count.exerciseCount].answer;
      if(count.exerciseCount==1){
        
      const ele2=document.getElementById('res1');
      console.log(ele2)
      console.log(ele2.value)

      ele2.value=question[count.exerciseCount].answer1;
    console.log(ele2.value)}
      if(count.exerciseCount==3){
        console.log("hello I am running at ",count.exerciseCount)
      const ele3=document.getElementById('res2');
      const ele4=document.getElementById('res3');
      const ele5=document.getElementById('res4');
      const ele2=document.getElementById('res1');
      ele2.value=question[count.exerciseCount].answer;
      ele3.value=question[count.exerciseCount].answer1;
      ele4.value=question[count.exerciseCount].answer1;
      ele5.value=question[count.exerciseCount].answer2;
    }
      if(btn.innerText=='Show Answer'){
        console.log("hii")
        btn.innerText='Hide Answer';
       ele1.value=question[count.exerciseCount].answer;
       
       
      //  disable the submit button
      document.getElementById('answerButton').style.visibility='hidden'

    }
       else{ 
        btn.innerText='Show Answer';
        ele1.value='';
        if(count.exerciseCount>=1 && count.exerciseCount!=2 ){
          const ele2=document.getElementById('res1');

          ele2.value=''
        }
        if(count.exerciseCount==3){
          const ele3=document.getElementById('res2');
      const ele4=document.getElementById('res3');
      const ele5=document.getElementById('res4');
          ele3.value=ele4.value=ele5.value=''
        }
        // enable the submit button
        document.getElementById('answerButton').style.visibility='visible'
       }
     
    }
  return (
    <div className='bg-black w-[84%] relative left-10 h-max py-5'>
        <h1 className='text-3xl tracking-wider text-white pl-10'>Try Yourself with exercises.</h1>
        <div className='bg-white h-[500px] mx-1 my-2 mt-5 pl-10'>
        <div className='text-3xl tracking-wide my-5 font-semibold'>Exercise:</div>
        <div className='my-2 text-xl tracking-wide font-semibold'>{question[count.exerciseCount].question}</div>
        <div className='bg-gray-200 py-4 px-4 h-[200px] relative rounded-md pr-5' id='ansBox'>
          <div className='text-xl tracking-wide'> {question[count.exerciseCount].code}</div>
          {console.log("I am updating. ")}

        <button className='bg-black text-white py-2 px-2 text-xl tracking-wider float-right rounded-xl  absolute bottom-2 right-1'id='showButton' onClick={showAnswer}>Show Answer</button>
        </div>    
        <button className='bg-green-400 text-white py-2 px-2 text-xl tracking-wider rounded-xl relative top-4' onClick={handleSubmit} id='answerButton' >Submit Answer</button>
        
    
        </div>

    </div>
  )
}

export default ExerciseQuestions