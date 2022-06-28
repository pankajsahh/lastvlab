import React,{useState} from "react";
// import './PostTest (1).css';

function PostTest(){
  
    const question=[
        {
          questionText: 'What is the running time of insertion sort if the input is pre-sorted?',
          answers: ["a. O(N^2)", "b. O(N log N)", "c. O(N)", "d. O(M log N)"],
          correct: "c"
        },
        {
          questionText: "What will be the number of passes to sort the elements using insertion sort ? 14,12,16,6,3,10",
          answers: ["a. 6","b. 5","c. 7","d. 1"],
          correct: "b"
        },
    
        {
          questionText:'for the following question, how will the array elements look like after the second pass?  34,8,64,51,32,21',
          answers: ["a. 8,21,32,34,51,64", "b. 8,32,34,51,64,21", "c. 8,34,51,64,32,21" , "d. 8,34,64,51,32,21"],
          correct: "d"
        },
      ];
      const [currentQuestion, setCurrentQuestion]=useState(0);
      const [showScore, setScore]=useState(false);
      const [score,setfinalScore]=useState(0);
      let correctAns;
      const handleButtonClick = (isCorrect) =>{
          if(isCorrect== question[currentQuestion].correct){
              setfinalScore(score+1);
              correctAns=question[currentQuestion].correct;
              const btn=document.getElementById(correctAns);
              btn.style.backgroundColor="Green";           
          }
          if("a"!= question[currentQuestion].correct){
              const btn=document.getElementById("a");
              btn.style.backgroundColor="Red";
            }else{
              const btn=document.getElementById("a");
              btn.style.backgroundColor="Green";
            }
            if("b"!= question[currentQuestion].correct){
              const btn=document.getElementById("b");
              btn.style.backgroundColor="Red";
            }else{
              const btn=document.getElementById("b");
              btn.style.backgroundColor="Green";
            }
            if("c"!= question[currentQuestion].correct){
              const btn=document.getElementById("c");
              btn.style.backgroundColor="Red";
            }else{
              const btn=document.getElementById("c");
              btn.style.backgroundColor="Green";
            }
            if("d"!= question[currentQuestion].correct){
              const btn=document.getElementById("d");
              btn.style.backgroundColor="Red";
            }else{
              const btn=document.getElementById("d");
              btn.style.backgroundColor="Green";
            }
          }
        
        const handleNextButton=()=> {
          const btn1=document.getElementById("a");
          btn1.style.backgroundColor="#7cc6fe";
          const btn2=document.getElementById("b");
          btn2.style.backgroundColor="#7cc6fe";
          const btn3=document.getElementById("c");
          btn3.style.backgroundColor="#7cc6fe";
          const btn4=document.getElementById("d");
          btn4.style.backgroundColor="#7cc6fe";
          const nextQuestion=currentQuestion+1;
          if(nextQuestion<question.length){
            setCurrentQuestion(nextQuestion);
           
          }else{
              setScore(true); 
          }
        }
        
     
      return(
        < div className='app'>
          {showScore? (
            <div className='score-Section'> You scored {score} out of {question.length}</div>
          ):(
            <>
              <div className='question-section'>
                <div className='question-count'>
                  <span>Question{currentQuestion+1}</span>/{question.length}
                </div>
                <div className='question-text'>{question[currentQuestion].questionText}</div>
              </div>
    
              <div className='answer-section'>
                <button id="a" onClick={()=> handleButtonClick("a")}>{question[currentQuestion].answers[0]}</button>
                <button id="b" onClick={()=> handleButtonClick("b")}>{question[currentQuestion].answers[1]}</button>
                <button id="c" onClick={()=> handleButtonClick("c")}>{question[currentQuestion].answers[2]}</button>
                <button id="d" onClick={()=> handleButtonClick("d")}>{question[currentQuestion].answers[3]}</button>
              </div>

              <div className="next">
                <button id="nxt" onClick={()=> handleNextButton()}>Next</button>
              </div>
            </>
          )}
        </div>
      );
}

export default PostTest;