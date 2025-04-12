'use client';

import { useState, useEffect } from 'react';
import { quizData } from '../data/quiz-data';
import Loading from './Loading';
import QuestionSelector from './QuestionSelector';

export default function JavaQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(true);
  const [questionCount, setQuestionCount] = useState(null);
  const [selectedQuestions, setSelectedQuestions] = useState([]);
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);

  useEffect(() => {
    // ページロード時のアニメーション用のタイマー
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);

  // 問題数が選択されたときの処理
  const handleSelectQuestionCount = (count) => {
    setQuestionCount(count);
    
    // 選択された問題数分のランダムな問題を選ぶ
    const shuffled = [...quizData].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, count);
    
    setSelectedQuestions(selected);
    setQuizStarted(true);
    setCurrentQuestion(0);
    setScore(0);
    setSelectedOption(null);
    setShowAnswer(false);
    setQuizCompleted(false);
  };

  const handleOptionSelect = (optionIndex) => {
    setSelectedOption(optionIndex);
    setShowAnswer(true);
    
    if (optionIndex === selectedQuestions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < selectedQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
      setShowAnswer(false);
    } else {
      // 最後の問題が終わった場合
      setQuizCompleted(true);
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedOption(null);
      setShowAnswer(false);
    }
  };

  const handleRestart = () => {
    setQuizStarted(false);
    setQuestionCount(null);
    setSelectedQuestions([]);
    setCurrentQuestion(0);
    setSelectedOption(null);
    setShowAnswer(false);
    setScore(0);
    setQuizCompleted(false);
  };

  if (loading) {
    return <Loading />;
  }

  // 問題数選択画面
  if (!quizStarted) {
    return <QuestionSelector onSelectQuestionCount={handleSelectQuestionCount} />;
  }

  // クイズ完了画面
  if (quizCompleted) {
    return (
      <div className="futuristic-container">
        <div className="main-frame fadeIn">
          <h1 className="text-2xl font-bold mb-4 text-center heading-glow">
            クイズ完了！
          </h1>
          
          <div className="question-frame fadeIn">
            <p className="text-center">あなたのスコア: {score} / {questionCount}</p>
            <p className="text-center mt-4">
              {score === questionCount 
                ? 'すべて正解！素晴らしい！' 
                : score >= questionCount * 0.8 
                  ? '良い成績です！' 
                  : score >= questionCount * 0.6 
                    ? 'もう少し頑張りましょう！' 
                    : 'もっと練習が必要です。'}
            </p>
          </div>
          
          <div className="flex justify-center mt-6">
            <button 
              className="nav-button" 
              onClick={handleRestart}
            >
              トップに戻る
            </button>
          </div>
        </div>
      </div>
    );
  }

  // クイズ実行中画面
  return (
    <div className="futuristic-container">
      <div className="main-frame fadeIn">
        <h1 className="text-2xl font-bold mb-4 text-center heading-glow">
          Java Bronze 模擬試験
        </h1>
        
        <div className="flex justify-between items-center mb-4">
          <p>問題 {currentQuestion + 1} / {questionCount}</p>
          <p>スコア: {score} / {questionCount}</p>
        </div>
        
        <div className="question-frame fadeIn">
          {selectedQuestions[currentQuestion].question}
        </div>
        
        <div className="options-container">
          {selectedQuestions[currentQuestion].options.map((option, index) => (
            <button 
              key={index}
              className={`option-button fadeIn ${selectedOption === index ? 'selected' : ''} ${
                showAnswer
                  ? index === selectedQuestions[currentQuestion].correctAnswer
                    ? 'correct'
                    : selectedOption === index && selectedOption !== selectedQuestions[currentQuestion].correctAnswer
                      ? 'incorrect'
                      : ''
                  : ''
              }`}
              onClick={() => handleOptionSelect(index)}
              disabled={showAnswer}
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              {String.fromCharCode(65 + index)}. {option}
            </button>
          ))}
        </div>
        
        {showAnswer && (
          <div className={`explanation-frame fadeIn ${
            selectedOption === selectedQuestions[currentQuestion].correctAnswer
              ? 'correct-frame'
              : 'incorrect-frame'
          }`}>
            <p>
              {selectedOption === selectedQuestions[currentQuestion].correctAnswer
                ? <span style={{ color: 'var(--correct)' }}>正解です！</span>
                : <span style={{ color: 'var(--incorrect)' }}>
                    不正解です。正解は {String.fromCharCode(65 + selectedQuestions[currentQuestion].correctAnswer)} です。
                  </span>
              }
            </p>
            <p className="mt-2">{selectedQuestions[currentQuestion].explanation}</p>
          </div>
        )}
        
        <div className="flex justify-between mt-6">
          <button 
            className="nav-button" 
            onClick={handlePrevQuestion} 
            disabled={currentQuestion === 0}
          >
            前の問題
          </button>
          
          {currentQuestion < selectedQuestions.length - 1 ? (
            <button 
              className="nav-button" 
              onClick={handleNextQuestion} 
              disabled={!showAnswer}
            >
              次の問題
            </button>
          ) : (
            showAnswer && (
              <button 
                className="nav-button" 
                onClick={handleNextQuestion}
              >
                結果を見る
              </button>
            )
          )}
        </div>
      </div>
    </div>
  );
}