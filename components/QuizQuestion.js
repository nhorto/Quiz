'use client';
import { useState } from 'react';
import CodeEditor from './CodeEditor';

export default function QuizQuestion({ question, onNext, onPrevious, isFirst, isLast }) {
  const [userCode, setUserCode] = useState(question.starterCode || '');
  const [showAnswer, setShowAnswer] = useState(false);
  const [showHint, setShowHint] = useState(false);

  const handleReset = () => {
    setUserCode(question.starterCode || '');
    setShowAnswer(false);
    setShowHint(false);
  };

  const handleNext = () => {
    handleReset();
    onNext();
  };

  const handlePrevious = () => {
    handleReset();
    onPrevious();
  };

  const difficultyColors = {
    beginner: 'bg-green-100 text-green-800 border-green-300',
    intermediate: 'bg-yellow-100 text-yellow-800 border-yellow-300',
    advanced: 'bg-red-100 text-red-800 border-red-300'
  };

  return (
    <div className="mx-auto max-w-6xl">
      {/* Header */}
      <div className="mb-6">
        <div className="mb-3 flex items-center gap-3">
          <span className={`rounded-full border px-3 py-1 text-sm font-semibold ${difficultyColors[question.difficulty]}`}>
            {question.difficulty.charAt(0).toUpperCase() + question.difficulty.slice(1)}
          </span>
          <span className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm text-blue-700">
            {question.category}
          </span>
        </div>
        <h1 className="text-3xl font-bold text-gray-900">{question.title}</h1>
      </div>

      {/* Question */}
      <div className="mb-6 rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
        <h2 className="mb-3 text-lg font-semibold text-gray-700">Challenge:</h2>
        <p className="whitespace-pre-wrap text-gray-800">{question.question}</p>

        {/* Hint */}
        {question.hint && (
          <div className="mt-4">
            {!showHint ? (
              <button
                onClick={() => setShowHint(true)}
                className="text-sm text-blue-600 hover:text-blue-800 hover:underline"
              >
                Show hint
              </button>
            ) : (
              <div className="rounded border border-yellow-200 bg-yellow-50 p-3">
                <p className="text-sm text-yellow-900">
                  <span className="font-semibold">Hint:</span> {question.hint}
                </p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Code Editor */}
      <div className="mb-6">
        <div className="mb-2 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-700">Your Code:</h2>
          <button
            onClick={handleReset}
            className="rounded bg-gray-200 px-3 py-1 text-sm text-gray-700 transition hover:bg-gray-300"
          >
            Reset
          </button>
        </div>
        <CodeEditor value={userCode} onChange={setUserCode} />
      </div>

      {/* Answer Section */}
      <div className="mb-6">
        {!showAnswer ? (
          <button
            onClick={() => setShowAnswer(true)}
            className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white shadow-md transition hover:bg-blue-700"
          >
            Show Solution
          </button>
        ) : (
          <div>
            <h2 className="mb-3 text-lg font-semibold text-gray-700">Solution:</h2>
            <CodeEditor value={question.solution} onChange={() => {}} readOnly />

            {question.explanation && (
              <div className="mt-4 rounded-lg border border-green-200 bg-green-50 p-4">
                <h3 className="mb-2 font-semibold text-green-900">Explanation:</h3>
                <p className="text-green-800">{question.explanation}</p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between border-t border-gray-200 pt-6">
        <button
          onClick={handlePrevious}
          disabled={isFirst}
          className="rounded-lg border border-gray-300 bg-white px-6 py-2 font-semibold text-gray-700 shadow-sm transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Previous
        </button>

        <button
          onClick={handleNext}
          disabled={isLast}
          className="rounded-lg bg-gray-800 px-6 py-2 font-semibold text-white shadow-md transition hover:bg-gray-900 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Next Question
        </button>
      </div>
    </div>
  );
}
