"use client";
import { useState, useEffect } from "react";
import cssQuiz from "@db_json/css-quiz";
import shortid from 'shortid';

const arrayQuestions = ['Answer', 'Distractor1', 'Distractor2', 'Distractor3' ];
console.log(cssQuiz.length)



function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  while (currentIndex > 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}





const QuizTest = () => {

  const [quiz, setQuiz] = useState([]);
  console.log(quiz)

  useEffect(() => {
    let arrayQ = [];
    let randomQ = shuffle(cssQuiz);
    for (let index = 0; index < 10; index++) {
      arrayQ.push(randomQ[index]);
    };
    setQuiz(arrayQ);
  }, [])
  
  
  return (
    <div>
      {quiz.map((el, index) =>{ 
        console.log(el)
      shuffle(arrayQuestions);
      
      return(
        <div key={shortid.generate()}>
          <h2>{el.Question}</h2>
          <button>{`1. ${el[arrayQuestions[0]]}`}</button> <br />
          <button>{`2. ${el[arrayQuestions[1]]}`}</button><br />
          <button>{`3. ${el[arrayQuestions[2]]}`}</button><br />
          <button>{`4. ${el[arrayQuestions[3]]}`}</button><br />
        </div>
      )}
      )}
    </div>
  );
};

export default QuizTest;
