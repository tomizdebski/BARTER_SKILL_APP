"use client";
import { useState, useEffect } from "react";
import shortid from "shortid";
import { useCountdown } from "@hooks/useCoundown";
import { formatTime } from "@utils/formatTime";

import cssQuiz from "@db_json/css-quiz";
import javascriptQuiz from "@db_json/javascript-quiz";
import accessibilityQuiz from "@db_json/accessibility-quiz";
import agileQuiz from "@db_json/agile-quiz";
import cloudComputingQuiz from "@db_json/cloud-computing-quiz";
import devopsQuiz from "@db_json/devops-quiz";
import generalCSQuiz from "@db_json/general-cs-quiz";
import gitQuiz from "@db_json/git-quiz";
import htmlQuiz from "@db_json/html-quiz";
import informationTechnologyQuiz from "@db_json/information-technology-quiz"; //sieci
import linuxQuiz from "@db_json/linux-quiz";
import pythonQuiz from "@db_json/python-quiz";
import qualityAssuranceQuiz from "@db_json/quality-assurance-quiz"; //testowanie
import regexQuiz from "@db_json/regex-quiz";
import securityQuiz from "@db_json/security-quiz";// bezp
import sqlQuiz from "@db_json/sql-quiz";




function shuffle(array) {
  let currentIndex = array.length;
  let randomIndex;
  while (currentIndex > 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
}


const QuizTest = ({ onGoClick, onScore, theme }) => {

  const [quiz, setQuiz] = useState(false);
  const [counter, setCounter] = useState(1);
  const countdown = useCountdown(240);
  const [answer, setAnswer] = useState("");
  const [scoreQ, setScoreQ] = useState(0);

  
  const handleClick = (e) => {
    console.log("click")
    if (answer == currentQuestion.Answer) {
      setCounter(counter + 1);
      setScoreQ(scoreQ + 1);
    } else {
      setCounter(counter + 1);
    }
  };

  const arrayQuestions = [
    "Answer",
    "Distractor1",
    "Distractor2",
    "Distractor3",
  ];
  // brak szuffle pytan

  

  useEffect(() => {
    let nameQuiz;
    if(theme === "Css"){nameQuiz = cssQuiz};
    if(theme === "Python"){nameQuiz = pythonQuiz};
    if(theme === "Linux"){nameQuiz = linuxQuiz};
    if(theme === "JS"){nameQuiz = javascriptQuiz};
    if(theme === "Sieci"){nameQuiz = informationTechnologyQuiz};
    if(theme === "HTML"){nameQuiz = htmlQuiz};
    if(theme === "Git"){nameQuiz = gitQuiz};
    if(theme === "DevOps"){nameQuiz = devopsQuiz};
    if(theme === "DB"){nameQuiz = generalCSQuiz};
    if(theme === "Cloud"){nameQuiz = cloudComputingQuiz};
    if(theme === "Agile"){nameQuiz = agileQuiz};
    if(theme === "Testowanie"){nameQuiz = qualityAssuranceQuiz};
    if(theme === "Regex"){nameQuiz = regexQuiz};
    if(theme === "Bezpieczeństow"){nameQuiz = securityQuiz};
    if(theme === "Sql"){nameQuiz = sqlQuiz};


    let arrayQ = [];
    let randomQ = shuffle(nameQuiz);
    for (let index = 0; index < 10; index++) {
      arrayQ.push(randomQ[index]);
    }
    setQuiz(arrayQ);
  }, []);

  const currentQuestion = quiz[counter];
  if (counter === 10 || countdown === 0) {
    onScore(scoreQ);
    onGoClick();
  }

  return (
    <div
      key={shortid.generate()}
      className="min-h-screen flex flex-col items-center pl-40 pr-40"
    >
      <div className="mt-12 mb-12 head_text ">
        <span className="blue_gradient">Test </span>
      </div>
      {currentQuestion?.Question && (
        <>
          <div className=" flex items-center gap-80 pb-10">
            <div>
              <span className="font-medium text-blue-600">{counter}</span>
              <span className="font-medium text-green-600">/10</span>
            </div>

            <div className="flex">
              <div className="flex  items-center">
                <img
                  src="/assets/icons/quiz/time.svg"
                  alt="timer"
                  className="h-10 w-10"
                />
                <span className="font-medium ml-2 text-red-800">{`${formatTime(countdown)}`}</span>
              </div>
            </div>
          </div>
          <h2 className="font-bold mb-6 text-gray-900 wrap">
            {currentQuestion.Question}
          </h2>
          <button
            className="text-gray-800 font-normal w-[70vh]  bg-white cursor-pointer border border-gray-400 rounded-lg mb-4 hover:bg-green-300 focus:bg-blue-gray-500"
            onClick={() => setAnswer(currentQuestion[arrayQuestions[0]])}
          >
            <label className="p-4 flex cursor-pointer ">
              {`A. ${currentQuestion[arrayQuestions[0]]}`}
            </label>
          </button>
          <button
            className="text-gray-800 font-normal w-[70vh]  bg-white cursor-pointer border border-gray-400 rounded-lg mb-4 hover:bg-green-300 focus:bg-blue-gray-500"
            onClick={() => setAnswer(currentQuestion[arrayQuestions[1]])}
          >
            <label className="p-4 flex cursor-pointer ">
              {`B. ${currentQuestion[arrayQuestions[1]]}`}
            </label>
          </button>
          <button
            className="text-gray-800 font-normal w-[70vh]  bg-white cursor-pointer border border-gray-400 rounded-lg mb-4 hover:bg-green-300 focus:bg-blue-gray-500"
            onClick={() => setAnswer(currentQuestion[arrayQuestions[2]])}
          >
            <label className="p-4 flex cursor-pointer ">
              {`C. ${currentQuestion[arrayQuestions[2]]}`}
            </label>
          </button>
          <button
            className="text-gray-800 font-normal w-[70vh]  bg-white cursor-pointer border border-gray-400 rounded-lg mb-4 hover:bg-green-300 focus:bg-blue-gray-500"
            onClick={() => setAnswer(currentQuestion[arrayQuestions[3]])}
          >
            <label className="p-4 flex cursor-pointer ">
              {`D. ${currentQuestion[arrayQuestions[3]]}`}
            </label>
          </button>

          
          <button
            onClick={handleClick}
            className=" text-gray-800 w-[70vh] font-normal flex justify-center items-center border border-blue-600 rounded-lg hover:bg-gray-300 p-4 bg-blue-200"
          >
            Następne
          </button>
          {counter === 10 && <button onClick={onGoClick}>Koniec</button>}
        </>
      )}
    </div>
  );
};

export default QuizTest;
