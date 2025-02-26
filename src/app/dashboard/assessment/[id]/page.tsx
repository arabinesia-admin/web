"use client";
import { useState, useEffect } from "react";
import {
  questions1,
  questions2,
  questions3,
  questions4,
  questions5,
} from "@/data/questions";
import { ExamResult } from "@/components/exam-result";

type Question = {
  question: string;
  options: string[];
  correct: string;
};

type Params = {
  params: { id: string };
};

const questionSets: { [key: string]: Question[] } = {
  "1": questions1,
  "2": questions2,
  "3": questions3,
  "4": questions4,
  "5": questions5,
};

export default function AssessmentTest({ params }: Params) {
  const { id } = params;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showScore, setShowScore] = useState(false);
  const [questions, setQuestions] = useState<Question[]>([]);

  useEffect(() => {
    const questionSet = questionSets[id];
    if (questionSet) {
      setQuestions(questionSet);
    }
  }, [id]);

  if (questions.length === 0) {
    return (
      <div className="bg-white shadow-lg rounded-lg p-6 mt-6 max-w-xl mx-auto text-center text-red-500 font-tajawal">
        الاختبار المطلوب غير موجود
      </div>
    );
  }

  const handleAnswerSelect = (option: string) => {
    setSelectedAnswer(option);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === questions[currentQuestion].correct) {
      setScore((prevScore) => prevScore + 1);
    }
    setSelectedAnswer(null);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setShowScore(true);
    }
  };

  const resetTest = () => {
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswer(null);
    setShowScore(false);
  };

  return (
    <div className="quiz-container mt-6 bg-white shadow-lg rounded-lg p-6 max-w-xl mx-auto border border-gray-200">
      {showScore ? (
        <ExamResult
          score={score}
          totalQuestions={questions.length}
          resetTest={resetTest}
          examId={id}
        />
      ) : (
        <>
          <span className="flex mb-3 items-end justify-end">
            السؤال {currentQuestion + 1}/ {questions.length}
          </span>
          <div className="question-section bg-emerald-50 p-4 rounded-md mb-4">
            <div className="question-count text-gray-600 text-lg font-medium text-right"></div>
            <div className="question-text text-xl font-semibold text-gray-800 mt-2">
              {questions[currentQuestion].question}
            </div>
          </div>
          <div className="answer-section flex flex-col gap-3">
            {questions[currentQuestion].options.map(
              (option: string, index: number) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(option)}
                  className={`px-4 py-2 text-lg rounded-md border transition duration-300 ${
                    selectedAnswer === option
                      ? "bg-emerald-500 text-white"
                      : "bg-white border-gray-300 hover:bg-emerald-100"
                  }`}
                >
                  {String.fromCharCode(65 + index)}. {option}
                </button>
              )
            )}
          </div>
          <div className="navigation mt-6 text-center">
            <button
              onClick={handleNextQuestion}
              disabled={!selectedAnswer}
              className={`px-6 py-2 text-lg font-arabic rounded-md transition duration-300 ${
                selectedAnswer
                  ? "bg-emerald-500 text-white hover:bg-emerald-600"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            >
              {currentQuestion === questions.length - 1 ? "إنهاء" : "التالي"}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
