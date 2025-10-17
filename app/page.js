'use client';
import { useEffect, useMemo, useState } from 'react';
import { questions } from '@/data/questions';
import QuizQuestion from '@/components/QuizQuestion';
import Sidebar from '@/components/Sidebar';

export default function Home() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredQuestions = useMemo(() => {
    return questions.filter((question) => {
      const matchesDifficulty =
        selectedDifficulty === 'all' || question.difficulty === selectedDifficulty;
      const matchesCategory =
        selectedCategory === 'all' || question.category === selectedCategory;
      return matchesDifficulty && matchesCategory;
    });
  }, [selectedCategory, selectedDifficulty]);

  useEffect(() => {
    setCurrentQuestionIndex(0);
  }, [selectedDifficulty, selectedCategory]);

  useEffect(() => {
    if (currentQuestionIndex >= filteredQuestions.length && filteredQuestions.length) {
      setCurrentQuestionIndex(0);
    }
  }, [currentQuestionIndex, filteredQuestions.length]);

  const currentQuestion = filteredQuestions[currentQuestionIndex];

  const handleNext = () => {
    if (currentQuestionIndex < filteredQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleDifficultyChange = (difficulty) => {
    setSelectedDifficulty(difficulty);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-80 flex-shrink-0">
        <Sidebar
          allQuestions={questions}
          filteredQuestions={filteredQuestions}
          currentIndex={currentQuestionIndex}
          onQuestionSelect={setCurrentQuestionIndex}
          selectedDifficulty={selectedDifficulty}
          onDifficultyChange={handleDifficultyChange}
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
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
            Practice with real patterns from production applications. 
          </p>
        </header>

        {/* Quiz Question */}
        {currentQuestion ? (
          <QuizQuestion
            question={currentQuestion}
            onNext={handleNext}
            onPrevious={handlePrevious}
            isFirst={currentQuestionIndex === 0}
            isLast={currentQuestionIndex === filteredQuestions.length - 1}
          />
        ) : (
          <div className="mx-auto max-w-3xl rounded-lg border border-dashed border-gray-300 bg-white p-10 text-center text-gray-600">
            <p className="text-lg font-semibold">
              No questions match the selected filters yet.
            </p>
            <p className="mt-2 text-sm">
              Adjust the difficulty or category filters in the sidebar to continue practicing.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
