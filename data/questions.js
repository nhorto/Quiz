// Quiz questions organized by difficulty level
// Based on patterns from the Holistic Bravo website codebase

export const questions = [
  // ============================================
  // BEGINNER LEVEL
  // ============================================
  {
    id: 1,
    difficulty: "beginner",
    category: "React Basics",
    title: "Creating a Simple Component",
    question: `Create a React component called 'WelcomeMessage' that displays "Welcome to Next.js!" in an h1 tag.`,
    hint: "Remember to export default and return JSX",
    starterCode: `export default function WelcomeMessage() {
  // Your code here
}`,
    solution: `export default function WelcomeMessage() {
  return <h1>Welcome to Next.js!</h1>;
}`,
    explanation: "A basic React component is a function that returns JSX. JSX looks like HTML but it's JavaScript. Always export your component so it can be used elsewhere."
  },
  {
    id: 2,
    difficulty: "beginner",
    category: "Props",
    title: "Component with Props",
    question: `Create a component called 'Greeting' that accepts a 'name' prop and displays "Hello, [name]!"`,
    hint: "Props are passed as the first parameter to your component function",
    starterCode: `export default function Greeting(/* add parameter here */) {
  // Your code here
}`,
    solution: `export default function Greeting({ name }) {
  return <h2>Hello, {name}!</h2>;
}`,
    explanation: "Props are passed to components as an object. We use destructuring { name } to extract the prop directly. Curly braces {} let us use JavaScript expressions in JSX."
  },
  {
    id: 3,
    difficulty: "beginner",
    category: "Props",
    title: "Props with Default Values",
    question: `Create a 'Button' component that accepts 'text' and 'variant' props. If no variant is provided, default to 'primary'.`,
    hint: "You can set default values in the parameter destructuring",
    starterCode: `export default function Button({ text, variant }) {
  return <button>{text}</button>;
}`,
    solution: `export default function Button({ text, variant = "primary" }) {
  return <button>{text}</button>;
}`,
    explanation: "Default values are set using = in the destructuring. This is a pattern used throughout the Holistic Bravo codebase (see ContentCard.js with variant = 'blog')."
  },
  {
    id: 4,
    difficulty: "beginner",
    category: "Array Rendering",
    title: "Rendering JSON Data - Blog Posts",
    question: `You fetched blog posts from an API. Map over the posts array and display each post's title in an h2 tag. Don't forget the key prop!`,
    hint: "Use .map() and remember each item needs a unique 'key' prop",
    starterCode: `const posts = [
  { id: 1, title: "Learning React" },
  { id: 2, title: "Next.js Basics" },
  { id: 3, title: "Tailwind CSS" }
];

export default function BlogList() {
  return (
    <div>
      {/* Your code here */}
    </div>
  );
}`,
    solution: `const posts = [
  { id: 1, title: "Learning React" },
  { id: 2, title: "Next.js Basics" },
  { id: 3, title: "Tailwind CSS" }
];

export default function BlogList() {
  return (
    <div>
      {posts.map((post) => (
        <h2 key={post.id}>{post.title}</h2>
      ))}
    </div>
  );
}`,
    explanation: "The .map() method transforms each item in an array. The 'key' prop helps React track which items changed. Always use a unique identifier like 'id' for keys, not array indices."
  },
  {
    id: 5,
    difficulty: "beginner",
    category: "Tailwind CSS",
    title: "Styling with Tailwind",
    question: `Style this button with Tailwind classes to have: rounded corners, blue background, white text, and padding.`,
    hint: "Use classes like 'rounded', 'bg-blue-500', 'text-white', 'px-4', 'py-2'",
    starterCode: `export default function StyledButton() {
  return <button>Click Me</button>;
}`,
    solution: `export default function StyledButton() {
  return (
    <button className="rounded bg-blue-500 px-4 py-2 text-white">
      Click Me
    </button>
  );
}`,
    explanation: "Tailwind uses utility classes for styling. 'rounded' adds border-radius, 'bg-blue-500' sets background color, 'px-4' is horizontal padding, 'py-2' is vertical padding. These compose together for complete styling."
  },
  {
    id: 6,
    difficulty: "beginner",
    category: "Conditional Rendering",
    title: "Show/Hide Content",
    question: `Display "Loading..." if 'isLoading' is true, otherwise display "Content loaded!"`,
    hint: "Use a ternary operator: condition ? ifTrue : ifFalse",
    starterCode: `export default function LoadingState({ isLoading }) {
  return (
    <div>
      {/* Your code here */}
    </div>
  );
}`,
    solution: `export default function LoadingState({ isLoading }) {
  return (
    <div>
      {isLoading ? "Loading..." : "Content loaded!"}
    </div>
  );
}`,
    explanation: "The ternary operator (? :) is perfect for conditional rendering in JSX. This pattern is used throughout React apps to show different UI based on state."
  },

  // ============================================
  // INTERMEDIATE LEVEL
  // ============================================
  {
    id: 7,
    difficulty: "intermediate",
    category: "React Hooks - useState",
    title: "Managing Button Click State",
    question: `Create a button that toggles between "Show" and "Hide" when clicked using useState.`,
    hint: "Import useState from 'react', initialize state with a boolean, toggle it in onClick",
    starterCode: `export default function ToggleButton() {
  // Add useState here

  return <button>Show</button>;
}`,
    solution: `'use client';
import { useState } from 'react';

export default function ToggleButton() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <button onClick={() => setIsVisible(!isVisible)}>
      {isVisible ? "Hide" : "Show"}
    </button>
  );
}`,
    explanation: "useState returns [currentValue, setterFunction]. We initialize with 'true'. onClick toggles the value using !isVisible. Note: interactive components need 'use client' at the top in Next.js 13+."
  },
  {
    id: 8,
    difficulty: "intermediate",
    category: "Data Rendering",
    title: "Building a Recipe Card from Sanity Data",
    question: `You receive this data from Sanity. Create a RecipeCard component that displays the title, description, and category with appropriate HTML tags.`,
    hint: "Destructure the props and use semantic HTML (article, h3, p, span)",
    starterCode: `const recipeData = {
  _id: "recipe-1",
  title: "Chocolate Chip Cookies",
  description: "Classic homemade cookies",
  category: "Desserts",
  cookTime: "25 minutes"
};

export default function RecipeCard(/* add props */) {
  // Your code here
}`,
    solution: `const recipeData = {
  _id: "recipe-1",
  title: "Chocolate Chip Cookies",
  description: "Classic homemade cookies",
  category: "Desserts",
  cookTime: "25 minutes"
};

export default function RecipeCard({ title, description, category, cookTime }) {
  return (
    <article>
      <h3>{title}</h3>
      <p>{description}</p>
      <span>{category}</span>
      <span>{cookTime}</span>
    </article>
  );
}`,
    explanation: "When you receive data from an API or CMS like Sanity, you destructure the fields you need as props. This pattern is used in ContentCard.js in the Holistic Bravo codebase."
  },
  {
    id: 9,
    difficulty: "intermediate",
    category: "Array Methods",
    title: "Filtering and Mapping Data",
    question: `Filter the posts to only show ones in the "Tech" category, then map over them to display title and author.`,
    hint: "Chain .filter() then .map(). Filter returns true/false for each item",
    starterCode: `const posts = [
  { id: 1, title: "React Hooks", category: "Tech", author: "Jane" },
  { id: 2, title: "Cooking Tips", category: "Food", author: "Bob" },
  { id: 3, title: "CSS Grid", category: "Tech", author: "Alice" }
];

export default function TechPosts() {
  return (
    <div>
      {/* Your code here */}
    </div>
  );
}`,
    solution: `const posts = [
  { id: 1, title: "React Hooks", category: "Tech", author: "Jane" },
  { id: 2, title: "Cooking Tips", category: "Food", author: "Bob" },
  { id: 3, title: "CSS Grid", category: "Tech", author: "Alice" }
];

export default function TechPosts() {
  return (
    <div>
      {posts
        .filter((post) => post.category === "Tech")
        .map((post) => (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>By {post.author}</p>
          </div>
        ))}
    </div>
  );
}`,
    explanation: "Array methods can be chained. filter() returns a new array with items that match the condition. Then map() transforms each filtered item into JSX. This pattern is used in BlogListing.js."
  },
  {
    id: 10,
    difficulty: "intermediate",
    category: "Conditional Styling",
    title: "Dynamic CSS Classes with Tailwind",
    question: `Create a button that has different styles when 'isActive' is true (blue background, white text) vs false (white background, blue text).`,
    hint: "Use template literals and ternary operator inside className",
    starterCode: `export default function FilterButton({ isActive, label }) {
  return (
    <button className="/* Your dynamic classes here */">
      {label}
    </button>
  );
}`,
    solution: `export default function FilterButton({ isActive, label }) {
  return (
    <button
      className={\`rounded px-4 py-2 transition \${
        isActive
          ? "bg-blue-500 text-white"
          : "bg-white text-blue-500"
      }\`}
    >
      {label}
    </button>
  );
}`,
    explanation: "Template literals (\`\`) let us inject dynamic values with ${}. We use a ternary to switch between class sets. This exact pattern is used in BlogListing.js for category filter buttons."
  },
  {
    id: 11,
    difficulty: "intermediate",
    category: "Event Handlers",
    title: "Form Input Handling",
    question: `Create a search input that updates 'searchTerm' state as the user types and displays the current value below.`,
    hint: "Use onChange event, target.value to get input value, and update state",
    starterCode: `'use client';
import { useState } from 'react';

export default function SearchBox() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
      />
      <p>You searched for: {searchTerm}</p>
    </div>
  );
}`,
    solution: `'use client';
import { useState } from 'react';

export default function SearchBox() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <p>You searched for: {searchTerm}</p>
    </div>
  );
}`,
    explanation: "Controlled inputs in React have their value tied to state. onChange fires on every keystroke. 'e.target.value' gets the current input value. Setting it as state triggers a re-render."
  },
  {
    id: 12,
    difficulty: "intermediate",
    category: "Client vs Server Components",
    title: "When to Use 'use client'",
    question: `This component needs to handle clicks. Add the necessary directive to make it a Client Component.`,
    hint: "Add 'use client'; at the very top of the file",
    starterCode: `import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}`,
    solution: `'use client';
import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}`,
    explanation: "In Next.js 13+ App Router, components are Server Components by default. Add 'use client' at the top when you need: useState, useEffect, event handlers (onClick, onChange), or browser APIs."
  },

  // ============================================
  // ADVANCED LEVEL
  // ============================================
  {
    id: 13,
    difficulty: "advanced",
    category: "useEffect Hook",
    title: "Syncing State with URL Parameters",
    question: `When 'selectedCategory' changes, update the URL search params. If category is "All", remove it from the URL. Otherwise, set ?category=[value].`,
    hint: "Use useEffect, useRouter, useSearchParams, usePathname from 'next/navigation'",
    starterCode: `'use client';
import { useState, useEffect } from 'react';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';

export default function CategoryFilter() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Add useEffect here

  return (
    <select
      value={selectedCategory}
      onChange={(e) => setSelectedCategory(e.target.value)}
    >
      <option>All</option>
      <option>Tech</option>
      <option>Food</option>
    </select>
  );
}`,
    solution: `'use client';
import { useState, useEffect } from 'react';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';

export default function CategoryFilter() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    const params = new URLSearchParams(searchParams);

    if (selectedCategory === "All") {
      params.delete("category");
    } else {
      params.set("category", selectedCategory);
    }

    const queryString = params.toString();
    router.replace(queryString ? \`\${pathname}?\${queryString}\` : pathname);
  }, [selectedCategory, pathname, router, searchParams]);

  return (
    <select
      value={selectedCategory}
      onChange={(e) => setSelectedCategory(e.target.value)}
    >
      <option>All</option>
      <option>Tech</option>
      <option>Food</option>
    </select>
  );
}`,
    explanation: "useEffect runs after render when dependencies change. URLSearchParams manages query strings. router.replace updates URL without adding browser history. This exact pattern is in BlogListing.js:70-84."
  },
  {
    id: 14,
    difficulty: "advanced",
    category: "useMemo Hook",
    title: "Memoizing Expensive Calculations",
    question: `Extract unique categories from posts array and sort them alphabetically. Memoize the result so it only recalculates when posts change.`,
    hint: "Use useMemo with posts as dependency. Use Set for unique values, Array.from to convert, then sort()",
    starterCode: `'use client';
import { useMemo } from 'react';

export default function CategoryList({ posts }) {
  // Add useMemo here to calculate categories

  return (
    <div>
      {categories.map((cat) => (
        <span key={cat}>{cat}</span>
      ))}
    </div>
  );
}`,
    solution: `'use client';
import { useMemo } from 'react';

export default function CategoryList({ posts }) {
  const categories = useMemo(() => {
    const unique = Array.from(
      new Set(posts.map((post) => post.category).filter(Boolean))
    ).sort();
    return ["All", ...unique];
  }, [posts]);

  return (
    <div>
      {categories.map((cat) => (
        <span key={cat}>{cat}</span>
      ))}
    </div>
  );
}`,
    explanation: "useMemo caches the result of a calculation until dependencies change. This prevents recalculating on every render. Use it for expensive operations like filtering/sorting large arrays. This is from BlogListing.js:46-51."
  },
  {
    id: 15,
    difficulty: "advanced",
    category: "API Data to Component",
    title: "Building a Complete Blog Card",
    question: `You receive this data from your API. Build a complete BlogCard component with an image, title, description, category badge, and date. Use Tailwind for styling.`,
    hint: "Use <article>, <img>, semantic tags. Style with Tailwind classes for card layout",
    starterCode: `const blogPost = {
  _id: "post-1",
  title: "Getting Started with Next.js",
  description: "Learn the basics of Next.js and React",
  category: "Tech",
  publishedAt: "2024-01-15",
  mainImage: {
    url: "https://via.placeholder.com/400x200",
    alt: "Next.js tutorial"
  },
  slug: "getting-started-nextjs"
};

export default function BlogCard(/* props */) {
  // Your code here
}`,
    solution: `const blogPost = {
  _id: "post-1",
  title: "Getting Started with Next.js",
  description: "Learn the basics of Next.js and React",
  category: "Tech",
  publishedAt: "2024-01-15",
  mainImage: {
    url: "https://via.placeholder.com/400x200",
    alt: "Next.js tutorial"
  },
  slug: "getting-started-nextjs"
};

export default function BlogCard({
  title,
  description,
  category,
  publishedAt,
  mainImage,
  slug
}) {
  return (
    <article className="overflow-hidden rounded-lg border bg-white shadow-md">
      <img
        src={mainImage.url}
        alt={mainImage.alt}
        className="h-48 w-full object-cover"
      />
      <div className="p-6">
        <span className="inline-block rounded bg-blue-100 px-3 py-1 text-sm text-blue-800">
          {category}
        </span>
        <h2 className="mt-3 text-2xl font-bold">{title}</h2>
        <p className="mt-2 text-gray-600">{description}</p>
        <time className="mt-4 block text-sm text-gray-400">
          {new Date(publishedAt).toLocaleDateString()}
        </time>
      </div>
    </article>
  );
}`,
    explanation: "Real-world components combine data structure, semantic HTML, and styling. Notice: destructured props, nested object access (mainImage.url), Tailwind utility classes for layout/spacing, and Date formatting. Based on ContentCard.js pattern."
  },
  {
    id: 16,
    difficulty: "advanced",
    category: "Async/Await",
    title: "Server Component Data Fetching",
    question: `Create a server component that fetches blog posts from an API and displays them. Handle the loading state with proper async/await.`,
    hint: "Server components can be async. No 'use client' needed. Use Promise.all for multiple fetches.",
    starterCode: `// This is a Server Component (no 'use client')
export default function BlogPage() {
  // Add async keyword and fetch data here

  return (
    <div>
      {/* Display posts */}
    </div>
  );
}`,
    solution: `// This is a Server Component (no 'use client')
export default async function BlogPage() {
  const response = await fetch('https://api.example.com/posts', {
    next: { revalidate: 3600 } // Cache for 1 hour
  });
  const posts = await response.json();

  return (
    <div>
      {posts.map((post) => (
        <article key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </article>
      ))}
    </div>
  );
}`,
    explanation: "Server Components in Next.js 13+ can be async functions. Data fetching happens on the server before rendering. The 'next' option controls caching. This pattern is used in page.js throughout your codebase."
  },
  {
    id: 17,
    difficulty: "advanced",
    category: "Dynamic Routes",
    title: "Creating a Dynamic Blog Post Page",
    question: `Create a dynamic route page component that receives a slug parameter and fetches the post data. Use notFound() if the post doesn't exist.`,
    hint: "Dynamic routes receive params as a prop. In Next.js 15, await params. Import notFound from 'next/navigation'",
    starterCode: `import { notFound } from 'next/navigation';

export default function BlogPostPage({ params }) {
  // Add async, await params, fetch data, handle not found

  return (
    <article>
      {/* Display post */}
    </article>
  );
}`,
    solution: `import { notFound } from 'next/navigation';

export default async function BlogPostPage({ params }) {
  const { slug } = await params;

  const response = await fetch(\`https://api.example.com/posts/\${slug}\`);

  if (!response.ok) {
    notFound();
  }

  const post = await response.json();

  return (
    <article>
      <h1>{post.title}</h1>
      <div>{post.body}</div>
    </article>
  );
}`,
    explanation: "Dynamic routes use [slug] folder names. Next.js 15 requires awaiting params. notFound() renders your 404 page. This pattern is in blog/[slug]/page.js:8-18 in your codebase."
  },
  {
    id: 18,
    difficulty: "advanced",
    category: "Complex Data Transformation",
    title: "Sorting and Paginating Posts",
    question: `Given posts data, implement sorting by date (newest/oldest) and pagination (10 per page). Display the current page of sorted results.`,
    hint: "Sort with .sort() and date comparison. Paginate with .slice(start, end). Calculate start/end from currentPage",
    starterCode: `'use client';
import { useState, useMemo } from 'react';

export default function PostList({ posts }) {
  const [sortOrder, setSortOrder] = useState("newest");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  // Add useMemo for sorted and paginated posts

  return (
    <div>
      <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
        <option value="newest">Newest First</option>
        <option value="oldest">Oldest First</option>
      </select>

      {/* Display paginatedPosts */}

      <button onClick={() => setCurrentPage(currentPage - 1)}>Previous</button>
      <button onClick={() => setCurrentPage(currentPage + 1)}>Next</button>
    </div>
  );
}`,
    solution: `'use client';
import { useState, useMemo } from 'react';

export default function PostList({ posts }) {
  const [sortOrder, setSortOrder] = useState("newest");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  const sortedPosts = useMemo(() => {
    return [...posts].sort((a, b) => {
      const dateA = new Date(a.publishedAt);
      const dateB = new Date(b.publishedAt);
      return sortOrder === "newest" ? dateB - dateA : dateA - dateB;
    });
  }, [posts, sortOrder]);

  const paginatedPosts = useMemo(() => {
    const start = (currentPage - 1) * postsPerPage;
    const end = start + postsPerPage;
    return sortedPosts.slice(start, end);
  }, [sortedPosts, currentPage, postsPerPage]);

  const totalPages = Math.ceil(posts.length / postsPerPage);

  return (
    <div>
      <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
        <option value="newest">Newest First</option>
        <option value="oldest">Oldest First</option>
      </select>

      {paginatedPosts.map((post) => (
        <article key={post.id}>
          <h2>{post.title}</h2>
        </article>
      ))}

      <button
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      <span>Page {currentPage} of {totalPages}</span>
      <button
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
}`,
    explanation: "This combines multiple concepts: spread operator ([...posts]) to avoid mutating original array, .sort() with date comparison, useMemo for performance, .slice() for pagination, and disabled states. This pattern is from BlogListing.js:86-120."
  },
  {
    id: 19,
    difficulty: "advanced",
    category: "Error Handling",
    title: "Handling API Errors with Try/Catch",
    question: `Fetch data from an API with proper error handling. Show loading state, error state, or the data.`,
    hint: "Use try/catch, useState for loading/error/data states, useEffect to fetch on mount",
    starterCode: `'use client';
import { useState, useEffect } from 'react';

export default function DataFetcher() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Add useEffect with fetch logic

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {/* Display data */}
    </div>
  );
}`,
    solution: `'use client';
import { useState, useEffect } from 'react';

export default function DataFetcher() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://api.example.com/data');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}`,
    explanation: "Client-side data fetching requires managing loading, error, and success states. try/catch handles errors, finally runs regardless of success/failure. Empty dependency array [] means useEffect runs once on mount. This is a common pattern for client-side API calls."
  },
  {
    id: 20,
    difficulty: "advanced",
    category: "Reusable Components",
    title: "Building a Flexible Content Card",
    question: `Create a reusable ContentCard that works for both blog posts and recipes. Use a 'variant' prop to determine styling and layout differences.`,
    hint: "Create a variantStyles object that maps variant names to Tailwind classes. Use props with default values.",
    starterCode: `export default function ContentCard({
  title,
  description,
  category,
  image,
  variant = "blog"
}) {
  // Define variantStyles object
  // Apply appropriate styles based on variant

  return (
    <article>
      {/* Your JSX here */}
    </article>
  );
}`,
    solution: `export default function ContentCard({
  title,
  description,
  category,
  image,
  variant = "blog"
}) {
  const variantStyles = {
    blog: {
      card: "rounded-lg border shadow-md",
      badge: "bg-blue-100 text-blue-800",
      title: "text-2xl font-bold text-gray-900"
    },
    recipe: {
      card: "rounded-xl border-2 shadow-lg",
      badge: "bg-green-100 text-green-800",
      title: "text-3xl font-bold text-green-900"
    }
  };

  const styles = variantStyles[variant];

  return (
    <article className={\`overflow-hidden bg-white \${styles.card}\`}>
      <img src={image} alt={title} className="h-48 w-full object-cover" />
      <div className="p-6">
        <span className={\`inline-block rounded px-3 py-1 text-sm \${styles.badge}\`}>
          {category}
        </span>
        <h2 className={\`mt-3 \${styles.title}\`}>{title}</h2>
        <p className="mt-2 text-gray-600">{description}</p>
      </div>
    </article>
  );
}`,
    explanation: "The variant pattern makes components reusable across different content types. Create an object mapping variants to styles, then access with variantStyles[variant]. This exact pattern is in ContentCard.js:23-37 in your codebase."
  }
];

// Helper functions to filter questions
export function getQuestionsByDifficulty(difficulty) {
  return questions.filter(q => q.difficulty === difficulty);
}

export function getQuestionsByCategory(category) {
  return questions.filter(q => q.category === category);
}

export function getQuestionById(id) {
  return questions.find(q => q.id === id);
}

export const difficulties = ["beginner", "intermediate", "advanced"];
export const categories = [
  "React Basics",
  "Props",
  "Array Rendering",
  "Tailwind CSS",
  "Conditional Rendering",
  "React Hooks - useState",
  "Data Rendering",
  "Array Methods",
  "Conditional Styling",
  "Event Handlers",
  "Client vs Server Components",
  "useEffect Hook",
  "useMemo Hook",
  "API Data to Component",
  "Async/Await",
  "Dynamic Routes",
  "Complex Data Transformation",
  "Error Handling",
  "Reusable Components"
];
