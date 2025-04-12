export default function QuestionSelector({ onSelectQuestionCount }) {
  return (
    <div className="futuristic-container">
      <div className="main-frame fadeIn">
        <h1 className="text-2xl font-bold mb-4 text-center heading-glow">
          Java Bronze 模擬試験
        </h1>
        
        <div className="question-frame fadeIn">
          <p>問題数を選択してください</p>
        </div>
        
        <div className="question-options mt-6">
          <button 
            className="nav-button w-full mb-4 py-3 text-center"
            onClick={() => onSelectQuestionCount(3)}
          >
            3問
          </button>
          
          <button 
            className="nav-button w-full mb-4 py-3 text-center"
            onClick={() => onSelectQuestionCount(5)}
          >
            5問
          </button>
          
          <button 
            className="nav-button w-full py-3 text-center"
            onClick={() => onSelectQuestionCount(10)}
          >
            10問
          </button>
        </div>
      </div>
    </div>
  );
}