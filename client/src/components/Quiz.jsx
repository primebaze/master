/* eslint-disable react/prop-types */
import  { useState } from 'react';

const Quiz = ({ questions }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      setShowScore(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowScore(false);
  };

  const getOptionLetter = (index) => {
    return String.fromCharCode(65 + index);
  };

  return (
    <div className="quiz-container">
      {showScore ? (<>
        <div className="score-section">
          You scored {score} out of {questions.length}
        </div>
            <button  className ="restart" onClick={restartQuiz}>Restart Quiz</button>
      </>
     
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestionIndex + 1}</span>/{questions.length}
            </div>
            <div className="question-text">{questions[currentQuestionIndex].question}</div>
          </div>
          <div className="answer-section">
            {questions[currentQuestionIndex].answers.map((answer, index) => (
              <button key={index} onClick={() => handleAnswerButtonClick(answer.isCorrect)}>
                {getOptionLetter(index)}. {answer.text}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Quiz;
