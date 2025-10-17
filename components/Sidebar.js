'use client';

export default function Sidebar({
  allQuestions,
  filteredQuestions,
  currentIndex,
  onQuestionSelect,
  selectedDifficulty,
  onDifficultyChange,
  selectedCategory,
  onCategoryChange
}) {
  const difficulties = ['all', 'beginner', 'intermediate', 'advanced'];
  const categories = [
    'all',
    ...Array.from(new Set(allQuestions.map((question) => question.category)))
  ];

  const difficultyColors = {
    beginner: 'bg-green-500',
    intermediate: 'bg-yellow-500',
    advanced: 'bg-red-500'
  };

  return (
    <div className="h-full overflow-y-auto border-r border-gray-200 bg-gray-50 p-6">
      <h2 className="mb-4 text-xl font-bold text-gray-900">Questions</h2>

      {/* Difficulty Filter */}
      <div className="mb-6">
        <label className="mb-2 block text-sm font-semibold text-gray-700">
          Filter by Difficulty:
        </label>
        <select
          value={selectedDifficulty}
          onChange={(e) => onDifficultyChange(e.target.value)}
          className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {difficulties.map((diff) => (
            <option key={diff} value={diff}>
              {diff.charAt(0).toUpperCase() + diff.slice(1)}
            </option>
          ))}
        </select>
      </div>

      {/* Category Filter */}
      <div className="mb-6">
        <label className="mb-2 block text-sm font-semibold text-gray-700">
          Filter by Category:
        </label>
        <select
          value={selectedCategory}
          onChange={(e) => onCategoryChange(e.target.value)}
          className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Question List */}
      <div className="space-y-2">
        {filteredQuestions.map((question, index) => {
          const isActive = index === currentIndex;
          return (
            <button
              key={question.id}
              onClick={() => onQuestionSelect(index)}
              className={`w-full rounded-lg border p-3 text-left transition ${
                isActive
                  ? 'border-blue-500 bg-blue-50 shadow-md'
                  : 'border-gray-200 bg-white hover:border-blue-300 hover:bg-blue-50'
              }`}
            >
              <div className="mb-1 flex items-center gap-2">
                <span className={`h-2 w-2 rounded-full ${difficultyColors[question.difficulty]}`} />
                <span className="text-xs font-semibold text-gray-500">
                  Q{question.id}
                </span>
              </div>
              <p className="text-sm font-semibold text-gray-900">{question.title}</p>
              <p className="mt-1 text-xs text-gray-600">{question.category}</p>
            </button>
          );
        })}
      </div>

      {/* Stats */}
      <div className="mt-6 rounded-lg border border-gray-200 bg-white p-4">
        <h3 className="mb-2 text-sm font-semibold text-gray-700">Progress</h3>
        <p className="text-2xl font-bold text-gray-900">
          {filteredQuestions.length
            ? `${currentIndex + 1} / ${filteredQuestions.length}`
            : '0 / 0'}
        </p>
        <div className="mt-2 h-2 overflow-hidden rounded-full bg-gray-200">
          <div
            className="h-full bg-blue-600 transition-all duration-300"
            style={{
              width: filteredQuestions.length
                ? `${((currentIndex + 1) / filteredQuestions.length) * 100}%`
                : '0%'
            }}
          />
        </div>
      </div>
    </div>
  );
}
