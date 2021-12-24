import React,{useState} from 'react'
import  './Quiz.css';

export default function Quiz() {
      
        //Dummy Arrays of Questions
    const questions = [
        {
            questionText:"What is the capital of france?",
            answerOptions:[
                {answerText:'New York' ,isCorrect:false},
                {answerText:'London' ,isCorrect:false},
                {answerText:'Paris' ,isCorrect:true},
                {answerText:'Dublin' ,isCorrect:false},

            ]
        },
        {
            questionText:"Who is the CEO of Tesla?",
            answerOptions:[
                {answerText:'jeff Bezos' ,isCorrect:false},
                {answerText:'Elon Musk' ,isCorrect:true},
                {answerText:'Bill Gates' ,isCorrect:false},
                {answerText:'Tony Stark' ,isCorrect:false},

            ]
        },
        {
            questionText:"The iphone was created by which company?",
            answerOptions:[
                {answerText:'Apple' ,isCorrect:true},
                {answerText:'Intel' ,isCorrect:false},
                {answerText:'Amazon' ,isCorrect:false},
                {answerText:'Microsoft' ,isCorrect:false},

            ]
        },
        {
            questionText:"How many Harry Potter books are there?",
            answerOptions:[
                {answerText:'1' ,isCorrect:false},
                {answerText:'4' ,isCorrect:false},
                {answerText:'6' ,isCorrect:false},
                {answerText:'7' ,isCorrect:true},

            ]
        },
   
   
    ]

    const [currentQuestion,setCurrentQuestion] = useState(0);  //Setting state for questions

    const [showScore,setShowScore] = useState(false);

    const [score,setScore] = useState(0);

     //prebtn use for previous button
    const prevbtn =()=>
    {
        if(currentQuestion > 0)

        {
            setCurrentQuestion(currentQuestion-1);
            
        }
    }

    //option choosing wheather its right or wrong
    const clickOption =(isCorrect) =>
    {

        if(isCorrect === true)

        {
            setScore(score+1);
        }

        const nextQuestion = currentQuestion+1;

        if(nextQuestion < questions.length)

        {
        setCurrentQuestion(nextQuestion);
        }

        else

        {
          setShowScore(true)   
        }

    }

    //nextbtn use for previous button
    const nextbtn =()=>
    {
        const nextQuestion = currentQuestion+1;

        if(nextQuestion < questions.length)

        {
        setCurrentQuestion(nextQuestion);
        }
       
    }



    return (
        <div className='container'>
          
          {/* Using ternary Operator  */}
            {showScore ?(
            <div className='score'>You Scored {score} out of {questions.length}</div>

            ):(
                <>

            <div className='question-section'>
                <div className='question-counter'>
                    <span>Question {currentQuestion+1}</span>/{questions.length}
                </div>
                <div className='question-text'>{questions[currentQuestion].questionText}</div>
            </div>
            <div className='answer-section'>

                {/* Mapping the question and options */}
                {questions[currentQuestion].answerOptions.map((answerOption) =>(
                    <button className='answer-btn' onClick ={() => clickOption(answerOption.isCorrect)}>{answerOption.answerText}</button>
                ))}
               

            </div>
            <div className='btn-controller'>
            <button className='prev-btn' onClick ={prevbtn}>Prev</button>
            <button className='next-btn' onClick ={nextbtn}>Next</button>
            </div>
            </>
            )}
        </div>
    )
}
