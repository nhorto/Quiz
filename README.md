# Learn Next.js & React - Interactive Quiz App

An interactive learning platform to master Next.js, React, and JavaScript through hands-on coding challenges. All questions are based on real-world patterns from the Holistic Bravo website codebase.

## Features

- **20 Interactive Coding Challenges** covering beginner to advanced topics
- **Live Code Editor** - Write your code and see the solution
- **Real-World Examples** - Learn from actual production code patterns
- **Progress Tracking** - Visual progress bar and question navigation
- **Difficulty Filtering** - Focus on beginner, intermediate, or advanced questions
- **Tailwind CSS Practice** - Learn styling while building components

## Topics Covered

### Beginner
- React component basics
- Props and destructuring
- Array rendering with `.map()`
- Tailwind CSS styling
- Conditional rendering

### Intermediate
- React Hooks (`useState`, `useEffect`, `useMemo`)
- Event handlers and form inputs
- Array methods (filter, map, sort)
- Dynamic CSS classes
- Client vs Server Components
- API data rendering

### Advanced
- URL search params synchronization
- Performance optimization with `useMemo`
- Dynamic routes and data fetching
- Complex data transformations
- Error handling with try/catch
- Reusable component patterns

## Getting Started

### Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
npm start
```

## Deploy to Vercel

The easiest way to deploy this app is using Vercel:

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Next.js and deploy

Or use the Vercel CLI:

```bash
npm i -g vercel
vercel
```

## Project Structure

```
learn-nextjs-quiz/
├── app/
│   ├── layout.js          # Root layout with metadata
│   └── page.js            # Main quiz interface
├── components/
│   ├── CodeEditor.js      # Textarea-based code editor
│   ├── QuizQuestion.js    # Question display and solution reveal
│   └── Sidebar.js         # Navigation and filtering
├── data/
│   └── questions.js       # All quiz questions and solutions
└── README.md
```

## How to Use

1. **Select a question** from the sidebar (organized by difficulty)
2. **Read the challenge** and try to solve it in the code editor
3. **Click "Show Hint"** if you need guidance
4. **Click "Show Solution"** to see the correct answer and explanation
5. **Navigate** between questions using Next/Previous buttons or the sidebar
6. **Filter by difficulty** to focus on specific skill levels

## Learning Tips

- Try to solve each question without looking at the hint first
- After seeing the solution, read the explanation carefully
- Compare your code to the solution - different approaches can work!
- The solutions show real patterns used in production code
- Practice the same question multiple times to build muscle memory

## Tech Stack

- **Next.js 15** - App Router with Server & Client Components
- **React 19** - Latest features and hooks
- **Tailwind CSS 4** - Utility-first styling
- **JavaScript (JSX)** - No TypeScript (keeping it simple)

## Adding Your Own Questions

Edit `/data/questions.js` and add new question objects:

```javascript
{
  id: 21,
  difficulty: "beginner", // "beginner" | "intermediate" | "advanced"
  category: "Your Category",
  title: "Question Title",
  question: "The challenge description...",
  hint: "Optional hint text",
  starterCode: `// Starting code here`,
  solution: `// Full solution here`,
  explanation: "Why this solution works..."
}
```

## License

MIT - Feel free to use this for your own learning!

## Acknowledgments

All code patterns are inspired by the Holistic Bravo website codebase, demonstrating real-world Next.js and React practices.
