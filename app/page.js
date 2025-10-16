'use client';
import { useState } from 'react';
import { questions } from '@/data/questions';
import QuizQuestion from '@/components/QuizQuestion';
import Sidebar from '@/components/Sidebar';

export default function Home() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');

  const currentQuestion = questions[currentQuestionIndex];

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleQuestionSelect = (index) => {
    setCurrentQuestionIndex(index);
  };

  const handleDifficultyChange = (difficulty) => {
    setSelectedDifficulty(difficulty);
    // Reset to first question when filtering
    setCurrentQuestionIndex(0);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-80 flex-shrink-0">
        <Sidebar
          questions={questions}
          currentIndex={currentQuestionIndex}
          onQuestionSelect={handleQuestionSelect}
          selectedDifficulty={selectedDifficulty}
          onDifficultyChange={handleDifficultyChange}
        />
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto bg-gray-100 p-8">
        {/* Header */}
        <header className="mb-8">
          <h1 className="mb-2 text-4xl font-bold text-gray-900">
            Learn Next.js & React
          </h1>
          <p className="text-lg text-gray-600">
            Practice with real patterns from the Holistic Bravo codebase
          </p>
        </header>

        {/* Quiz Question */}
        <QuizQuestion
          question={currentQuestion}
          onNext={handleNext}
          onPrevious={handlePrevious}
          isFirst={currentQuestionIndex === 0}
          isLast={currentQuestionIndex === questions.length - 1}
        />
      </div>
    </div>
  );
}
