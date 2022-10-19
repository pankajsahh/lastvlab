import React from 'react'
import { useContext } from 'react'
import { CommentText } from 'semantic-ui-react';
import {ExerciseContext} from '../../Context/ExerciseState'
const ExerciseQuestions = (props) => {
  // import the useContext
  const count=useContext(ExerciseContext);

  const que0=<pre>for(i=0;i&#60; <input maxLength='1' className='w-4' id='res'></input>; i++)</pre>
  const que1=<pre><input maxlength='4' className='w-12' id='res1'/> = <input maxLength='6' className='w-16' id='res'></input>;</pre>

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
      }
//       {
//         question:"Complete for loop syntax to run a code 5 times.",
//         code:que,
//         answer:4
//     },
//     {
//       question:"Complete for loop syntax to run a code 5 times.",
//       code:que,
//       answer:4
//   },
//   {
//     question:"Complete for loop syntax to run a code 5 times.",
//     code:que,
//     answer:4
// }
    ]

    // function to check answer
    // store the default html
    let defaultHTML='';
    const handleSubmit=()=>{
    
     
      // fill in the blamk box 
         const ele=document.getElementById('res');
        //  access the first input box with id =res1
        const ele1=document.getElementById('res1')
         const ans=document.getElementById('ansBox');
        //  access submit button
        const submitBtn=document.getElementById('answerButton');


        // function to make changes when correct answer is selected
        const correct=()=>{
          ans.style.backgroundColor='rgb(111 228 111)';
          const right= "<h1 className='text-3xl tracking-wide'>Correct !</h1>"
          ans.innerHTML=right
          document.getElementById('answerButton').innerText='Next Exercise'
        }
        // function to make changes when wrong answer is selected
        const inCorrect=()=>{
          ans.style.backgroundColor='rgb(255,0,0)';
          const wrong= "<h1 className='text-3xl tracking-wide'>Wrong !</h1>"
          ans.innerHTML=wrong
          document.getElementById('answerButton').innerText='Try Again'
        }
        // case 1: user submits the answer
        
        if(submitBtn.innerText=='Submit Answer'){
          defaultHTML=ans.innerHTML;
               console.log(defaultHTML)
           //  validate answer

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
        }

        //  case 2: User clicks Try Again

        }else if (submitBtn.innerText=='Try Again'){
          // set the HTML to default 
          ans.innerHTML=defaultHTML;
          console.log(ans.innerHTML)
          // set the bg color to default 
          ans.style.backgroundColor='rgb(229 231 235)';
          // set the button text 
          submitBtn.innerText='Submit Answer'
          document.getElementById('showButton').addEventListener('click',showAnswer)

        }
        // case 3: If user clicks on next exercise 
        else if(submitBtn.innerText=='Next Exercise'){
          count.nextExercise();
          count.setExerciseBackground(count.li+1)
          ans.innerHTML=defaultHTML;
          ans.style.backgroundColor='rgb(229 231 235)';
          // set the button text 
          submitBtn.innerText='Submit Answer'
          document.getElementById('showButton').addEventListener('click',showAnswer);

        }
        
         
  
    }

    
    // function to show answer to the user
    const showAnswer=()=>{
      console.log("Show answer button.")
      // access the button 
      const btn=document.getElementById('showButton');
      const ele=document.getElementById('res');
      if(btn.innerText=='Show Answer'){
        console.log("hii")
        btn.innerText='Hide Answer';
       ele.value=4;
      //  disable the submit button
      document.getElementById('answerButton').style.display='none'

    }
       else{ 
        btn.innerText='Show Answer';
        ele.value=''
        // enable the submit button
        document.getElementById('answerButton').style.display='block'
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
        <button className='bg-black text-white py-2 px-2 text-xl tracking-wider float-right rounded-xl  absolute bottom-2 right-1'id='showButton' onClick={showAnswer}>Show Answer</button>
        </div>    
        <button className='bg-green-400 text-white py-2 px-2 text-xl tracking-wider rounded-xl relative top-4' onClick={handleSubmit} id='answerButton' >Submit Answer</button>
        
    
        </div>

    </div>
  )
}

export default ExerciseQuestions