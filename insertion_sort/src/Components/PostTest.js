import React,{useState} from "react";
import './PostTest.css';
import  crown from './crown.png'
import quiz from './quiz.png'
function PostTest(){
  let ch=<>
  <ul className="list-disc list-inside">
    <li className="font-bold text-left text-lg">This quiz consists of three questions.</li>
    <li className="font-bold text-left text-lg">Four options will be given to each question.</li>
    <li className="font-bold text-left text-lg">You cannot change your answer once it is selected.</li>
    <li className="font-bold text-left text-lg">You cannot move to next question before attempting the current question.</li>
    <li className="font-bold text-left text-lg">At the end of the quiz, your score will be displayed.</li>
    <li className="font-bold text-left text-lg">Move to next question by clicking "Next" button.</li>
    <li className="font-bold text-left text-lg">Restart the quiz by clicking "Try Again" button.</li>
    <li className="font-bold text-left text-lg">Start the quiz by clicking "Start Quiz" button.</li>

    </ul></>
    const question=[
      {
        questionText:ch,
        
        answersOptions:[
          {answerText:'Start Quiz',isCorrect:true}
        ]
      }
      ,
        {
          questionText: 'What is the running time of insertion sort if the input is reverse-sorted?',
          answersOptions:[
            {answerText: 'O(N^2)',isCorrect: true},
            {answerText: 'O(N log N)',isCorrect: false},
            {answerText: 'O(N)',isCorrect: false},
            {answerText: 'O(M log N)',isCorrect: false},
          ],
        },
        {
          questionText:'What will be the number of passes to sort the elements using insertion sort ? 14,12,16,6,3,10',
          answersOptions:[
            {answerText: '6',isCorrect: false},
            {answerText: '5',isCorrect: true},
            {answerText: '7',isCorrect: false},
            {answerText: '1',isCorrect: false},
          ],
        },
    
        {
          questionText:'For the following question, how will the array elements look like after the second pass?  34,8,64,51,32,21',
          answersOptions:[
            {answerText: '8,21,32,34,51,64',isCorrect: false},
            {answerText: '8,32,34,51,64,21',isCorrect: false},
            {answerText: '8,34,51,64,32,21',isCorrect: false},
            {answerText: '8,34,64,51,32,21',isCorrect: true},
          ],
        },
      ];
      const [currentQuestion, setCurrentQuestion]=useState(0);
      const [showScore, setScore]=useState(false);
      const [score,setfinalScore]=useState(0);
      const [visiblity,setVisiblity]=useState('invisible');

      // handle selected answer 
      const handleButtonClick = (isCorrect,ind) =>{
        // console.log("id is ",ind.target.id)
        // enable next button after answer selection 
        document.getElementById('nxt').disabled=false;

        // disable options once one is selected 
        const btns= document.querySelectorAll('.btn');
        btns.forEach(btn=>btn.disabled=true)

          if(isCorrect===true){
              setfinalScore(score+1);
              document.getElementById(ind.target.id).style.backgroundColor="Green";
          }else document.getElementById(ind.target.id).style.backgroundColor="Red";

          // mark the correct option on selection of wrong answer 
          question[currentQuestion].answersOptions.filter((value,index)=>{
            if(value.isCorrect){
              document.getElementById(index).style.backgroundColor="Green"
            }
          })
          
          if(currentQuestion==0){
            nextQue();
          }
          
      }
      // move to next question 
      const nextQue=()=>{
        // enable the option selection 
        const btns= document.querySelectorAll('.btn');
        btns.forEach(btn=>btn.disabled=false)

        // set bg colour of all the options to the default 
        if(currentQuestion!=0){
        document.getElementById(0).style.backgroundColor="#252d4a";
        document.getElementById(1).style.backgroundColor="#252d4a";
        document.getElementById(2).style.backgroundColor="#252d4a";
        document.getElementById(3).style.backgroundColor="#252d4a";
        // document.querySelectorAll('.btn').disabled=false;

        }else document.getElementById(0).style.backgroundColor="#252d4a";

        if(currentQuestion==0){
          setVisiblity('visible')
        }

        const nextQuestion=currentQuestion+1;
        if(nextQuestion<question.length){
          
          setCurrentQuestion(nextQuestion); 
          
        }else{
            setScore(true); 
        }
        // disable next button before answer selection 
        document.getElementById('nxt').disabled=true;
      }

      // function to restart the quiz 
      const restart =()=>{
        setScore(false);
        setCurrentQuestion(0);
        setfinalScore(0);
        setVisiblity('invisible');
      }
      return(
        <div className="main">
        <div className='appTest'>
          {showScore? (

             
               <> 
            <div className='score-Section'>
              <div>
            <img src={crown} alt="Can't load." className="pl-10"></img> 
              <p> You scored {score-1} out of {question.length-1}</p></div>

              </div>
              <div className="float-right ml-12">
              <button className="w-max h-max text-white bg-blue-900 rounded-2xl border-4 p-2 border-blue-500 hover:opacity-50 px-2 shadow-emerald-500" onClick={restart}>Try Again</button>
</div>
              </>
              

          ):(
            <>
            
              <div className='question-section'>
                <div className={visiblity} id="question-count">
                  <span >Question{currentQuestion}</span>/{question.length-1}
                </div>
                <div className='question-text'>{question[currentQuestion].questionText}</div>
              </div>
    
              <div className='answer-section'>
                {question[currentQuestion].answersOptions.map((answersOption,index) => (
                <button className="btn" id={index} onClick={(event)=>handleButtonClick(answersOption.isCorrect,event)}>{answersOption.answerText}</button>))}
                <button className={visiblity} id="nxt" onClick={nextQue}>Next</button>
              </div>
              
              
            </>
          )}
        </div>
        <img className="float-right" src={quiz} alt="Can't load."></img>

        </div>
      );
}

export default PostTest;