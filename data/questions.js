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
    explanation: "Tailwind encourages composition through small, single-purpose utilities that you stack on the className string. Here, rounded gives the button a softer silhouette, bg-blue-500 and text-white create a high-contrast palette, and the px/py spacing utilities define comfortable touch targets. Because these classes are just strings, you can remix or extend them later without ever editing a separate stylesheet."
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
  },
  {
    id: 21,
    difficulty: "beginner",
    category: "Next.js Routing Basics",
    title: "Creating Navigation with Link",
    question: `Create a simple navigation that links from the homepage to an About page using the Next.js Link component. Update the HomePage component to include a link to "/about" and render placeholder content for the page.`,
    hint: "Import Link from 'next/link' and wrap the text or element you want to make clickable.",
    starterCode: `import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="space-y-4">
      <h1 className="text-3xl font-bold">Welcome</h1>
      {/* Add the link here */}
    </main>
  );
}`,
    solution: `import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="space-y-4">
      <h1 className="text-3xl font-bold">Welcome</h1>
      <Link href="/about" className="text-blue-600 underline">
        Go to About
      </Link>
    </main>
  );
}`,
    explanation: "Next.js provides a built-in Link component that enables client-side navigation without full page reloads. Import it from 'next/link' and pass the destination route to the href prop."
  },
  {
    id: 22,
    difficulty: "beginner",
    category: "Next.js Image",
    title: "Using the Image Component",
    question: `Render a hero image using Next.js's Image component. Display an 800x400 image with the src "/images/hero.jpg" and alt text "Mountains at sunrise".`,
    hint: "Import Image from 'next/image'. Provide width, height, src, and alt props.",
    starterCode: `import Image from 'next/image';

export default function HeroImage() {
  return (
    <section className="rounded-lg bg-gray-100 p-6">
      <h2 className="text-2xl font-semibold">Our Latest Adventure</h2>
      {/* Add the Image component here */}
    </section>
  );
}`,
    solution: `import Image from 'next/image';

export default function HeroImage() {
  return (
    <section className="rounded-lg bg-gray-100 p-6">
      <h2 className="text-2xl font-semibold">Our Latest Adventure</h2>
      <Image
        src="/images/hero.jpg"
        alt="Mountains at sunrise"
        width={800}
        height={400}
        className="mt-4 rounded-lg object-cover"
      />
    </section>
  );
}`,
    explanation: "The Image component optimizes images automatically. Always supply width, height, and alt text so Next.js can calculate aspect ratios and improve accessibility."
  },
  {
    id: 23,
    difficulty: "beginner",
    category: "App Router Layouts",
    title: "Adding Shared Layout Content",
    question: `Update the RootLayout so every page shows a header with site navigation and a footer with the current year. The main content should still render children between the header and footer.`,
    hint: "Wrap children with header and footer inside the returned html/body structure.",
    starterCode: `export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Add shared layout UI here */}
        {children}
      </body>
    </html>
  );
}`,
    solution: `export default function RootLayout({ children }) {
  const year = new Date().getFullYear();

  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        <header className="border-b bg-white">
          <nav className="mx-auto flex max-w-5xl items-center justify-between p-4">
            <span className="text-lg font-bold">Learn Next.js</span>
            <a href="/lessons" className="text-sm text-blue-600">
              Lessons
            </a>
          </nav>
        </header>
        <main className="mx-auto max-w-5xl p-6">{children}</main>
        <footer className="border-t bg-white">
          <div className="mx-auto max-w-5xl p-4 text-sm text-gray-500">
            © {year} Learn Next.js
          </div>
        </footer>
      </body>
    </html>
  );
}`,
    explanation: "Layouts wrap every page in the route segment. Adding header/footer in RootLayout ensures consistent structure and avoids repeating markup in each page component."
  },
  {
    id: 24,
    difficulty: "beginner",
    category: "Forms & Inputs",
    title: "Building a Controlled Checkbox",
    question: `Create a checkbox that toggles a boolean state and displays "Subscribed" when checked and "Not subscribed" otherwise.`,
    hint: "Use useState to store the checked value and onChange to update it from event.target.checked.",
    starterCode: `'use client';
import { useState } from 'react';

export default function NewsletterToggle() {
  const [isSubscribed, setIsSubscribed] = useState(false);

  return (
    <div>
      <label className="flex items-center gap-2">
        <input type="checkbox" />
        Receive product updates
      </label>
      <p>Status: {isSubscribed ? "Subscribed" : "Not subscribed"}</p>
    </div>
  );
}`,
    solution: `'use client';
import { useState } from 'react';

export default function NewsletterToggle() {
  const [isSubscribed, setIsSubscribed] = useState(false);

  return (
    <div>
      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={isSubscribed}
          onChange={(event) => setIsSubscribed(event.target.checked)}
        />
        Receive product updates
      </label>
      <p>Status: {isSubscribed ? "Subscribed" : "Not subscribed"}</p>
    </div>
  );
}`,
    explanation: "Controlled inputs mirror UI state in React. The checkbox's checked prop reads from state, while onChange updates the state using event.target.checked."
  },
  {
    id: 25,
    difficulty: "beginner",
    category: "Array Rendering",
    title: "Fixing Missing Keys in Lists",
    question: `You have an array of items but forgot to provide React keys while rendering. Update the list so each item has a stable key.`,
    hint: "Use a unique identifier from each item, such as id, for the key prop.",
    starterCode: `const items = [
  { id: "a1", label: "Overview" },
  { id: "b2", label: "Features" },
  { id: "c3", label: "Pricing" }
];

export default function Sidebar() {
  return (
    <ul>
      {items.map((item) => (
        <li>{item.label}</li>
      ))}
    </ul>
  );
}`,
    solution: `const items = [
  { id: "a1", label: "Overview" },
  { id: "b2", label: "Features" },
  { id: "c3", label: "Pricing" }
];

export default function Sidebar() {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>{item.label}</li>
      ))}
    </ul>
  );
}`,
    explanation: "Keys help React identify which list items change. Using a stable value like an id prevents re-renders from causing component state to move around."
  },
  {
    id: 26,
    difficulty: "intermediate",
    category: "React Hooks - useCallback",
    title: "Stabilizing Event Handlers with useCallback",
    question: `Pass a stable onSelect handler to the ListItem component using useCallback so child components don't re-render unnecessarily.`,
    hint: "Wrap the handler in useCallback with dependencies that affect the callback body.",
    starterCode: `'use client';
import { useState } from 'react';

function ListItem({ item, onSelect }) {
  return (
    <button
      onClick={() => onSelect(item.id)}
      className="flex w-full justify-between rounded border px-3 py-2 text-left"
    >
      <span>{item.label}</span>
    </button>
  );
}

export default function ItemList({ items }) {
  const [selectedId, setSelectedId] = useState(null);

  function handleSelect(id) {
    setSelectedId(id);
  }

  return (
    <div className="space-y-3">
      {items.map((item) => (
        <ListItem key={item.id} item={item} onSelect={handleSelect} />
      ))}
      <p className="text-sm text-gray-600">Selected: {selectedId ?? "None"}</p>
    </div>
  );
}`,
    solution: `'use client';
import { useCallback, useState } from 'react';

function ListItem({ item, onSelect }) {
  return (
    <button
      onClick={() => onSelect(item.id)}
      className="flex w-full justify-between rounded border px-3 py-2 text-left"
    >
      <span>{item.label}</span>
    </button>
  );
}

export default function ItemList({ items }) {
  const [selectedId, setSelectedId] = useState(null);

  const handleSelect = useCallback((id) => {
    setSelectedId(id);
  }, []);

  return (
    <div className="space-y-3">
      {items.map((item) => (
        <ListItem key={item.id} item={item} onSelect={handleSelect} />
      ))}
      <p className="text-sm text-gray-600">Selected: {selectedId ?? "None"}</p>
    </div>
  );
}`,
    explanation: "useCallback memoizes a function reference until its dependencies change. Passing the stable callback prevents all ListItem children from re-rendering on every state update."
  },
  {
    id: 27,
    difficulty: "intermediate",
    category: "URL State Management",
    title: "Debounced Search Syncing with URL Params",
    question: `Create a search input that updates the URL's "q" query parameter after the user stops typing for 300ms. Initialize the input state from the existing search params.`,
    hint: "Use useEffect with setTimeout for debouncing and router.replace to update the URL.",
    starterCode: `'use client';
import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export default function SearchFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [term, setTerm] = useState(searchParams.get('q') ?? '');

  // Add debounced effect here

  return (
    <div>
      <input
        className="rounded border px-3 py-2"
        placeholder="Search posts..."
        value={term}
        onChange={(event) => setTerm(event.target.value)}
      />
      <p className="mt-2 text-sm text-gray-600">Searching for: {term}</p>
    </div>
  );
}`,
    solution: `'use client';
import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export default function SearchFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [term, setTerm] = useState(searchParams.get('q') ?? '');

  useEffect(() => {
    const handler = setTimeout(() => {
      const params = new URLSearchParams(searchParams);

      if (term) {
        params.set('q', term);
      } else {
        params.delete('q');
      }

      const query = params.toString();
      const path = window.location.pathname;
      router.replace(query ? \`\${path}?\${query}\` : path);
    }, 300);

    return () => clearTimeout(handler);
  }, [term, router, searchParams]);

  return (
    <div>
      <input
        className="rounded border px-3 py-2"
        placeholder="Search posts..."
        value={term}
        onChange={(event) => setTerm(event.target.value)}
      />
      <p className="mt-2 text-sm text-gray-600">Searching for: {term}</p>
    </div>
  );
}`,
    explanation: "Debouncing delays the URL update until the user pauses typing. Using router.replace avoids pushing a new history entry, keeping the back button behavior clean."
  },
  {
    id: 28,
    difficulty: "intermediate",
    category: "Server Actions",
    title: "Submitting a Form with a Server Action",
    question: `Implement a server action that receives a form submission, saves the data, and revalidates the "/newsletter" path.`,
    hint: "Define an async function inside the component, add 'use server', then call revalidatePath once the data is persisted.",
    starterCode: `import { revalidatePath } from 'next/cache';

export default function NewsletterSignup() {
  async function subscribe(formData) {
    'use server';
    // Persist the submission and revalidate here
  }

  return (
    <form action={subscribe} className="space-y-4">
      <input
        type="email"
        name="email"
        className="w-full rounded border px-3 py-2"
        placeholder="you@example.com"
        required
      />
      <button type="submit" className="rounded bg-blue-600 px-4 py-2 text-white">
        Subscribe
      </button>
    </form>
  );
}`,
    solution: `import { revalidatePath } from 'next/cache';

export default function NewsletterSignup() {
  async function subscribe(formData) {
    'use server';

    const email = formData.get('email');

    await fetch('https://api.example.com/newsletter', {
      method: 'POST',
      body: JSON.stringify({ email }),
      headers: { 'Content-Type': 'application/json' }
    });

    revalidatePath('/newsletter');
  }

  return (
    <form action={subscribe} className="space-y-4">
      <input
        type="email"
        name="email"
        className="w-full rounded border px-3 py-2"
        placeholder="you@example.com"
        required
      />
      <button type="submit" className="rounded bg-blue-600 px-4 py-2 text-white">
        Subscribe
      </button>
    </form>
  );
}`,
    explanation: "Server actions run on the server, so you can safely access secrets and perform fetches. After saving data, call revalidatePath so cached pages show the latest state."
  },
  {
    id: 29,
    difficulty: "intermediate",
    category: "Metadata & SEO",
    title: "Adding Metadata to a Page",
    question: `Add a metadata export so the blog index page has the title "Latest Articles" and description "Learn Next.js with curated content."`,
    hint: "Export a const metadata object above the component definition with title and description fields.",
    starterCode: `export default function BlogPage() {
  return (
    <main className="space-y-4">
      <h1 className="text-4xl font-bold">Blog</h1>
      {/* Blog content */}
    </main>
  );
}`,
    solution: `export const metadata = {
  title: 'Latest Articles',
  description: 'Learn Next.js with curated content.'
};

export default function BlogPage() {
  return (
    <main className="space-y-4">
      <h1 className="text-4xl font-bold">Blog</h1>
      {/* Blog content */}
    </main>
  );
}`,
    explanation: "In the App Router you configure document metadata per route by exporting a metadata object. Next.js merges it into the final HTML head for better SEO."
  },
  {
    id: 30,
    difficulty: "intermediate",
    category: "Loading & Error UI",
    title: "Creating a Route Loading State",
    question: `Implement the loading.js file for the dashboard route so it shows a skeleton while data loads.`,
    hint: "Return lightweight UI that matches the eventual layout. This file runs on the server.",
    starterCode: `export default function Loading() {
  // Add loading skeleton UI
  return null;
}`,
    solution: `export default function Loading() {
  return (
    <div className="space-y-4 rounded-lg border p-6 shadow-sm">
      <div className="h-6 w-1/3 animate-pulse rounded bg-gray-200" />
      <div className="space-y-2">
        {[...Array(3)].map((_, index) => (
          <div key={index} className="h-4 w-full animate-pulse rounded bg-gray-200" />
        ))}
      </div>
    </div>
  );
}`,
    explanation: "Route-level loading.js files render immediately during server suspense boundaries. Matching the shape of the final UI reduces layout shifts and improves perceived performance."
  },
  {
    id: 31,
    difficulty: "intermediate",
    category: "Loading & Error UI",
    title: "Handling Route Errors with a Reset",
    question: `Build the error.js component for the dashboard route so it displays the error message and provides a retry button that calls the reset function.`,
    hint: "error.js is a Client Component. Use useEffect to log the error and call reset when the retry button is clicked.",
    starterCode: `'use client';
import { useEffect } from 'react';

export default function Error({ error, reset }) {
  // Log the error and provide UI with a retry button
  return null;
}`,
    solution: `'use client';
import { useEffect } from 'react';

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="space-y-4 rounded border border-red-200 bg-red-50 p-6">
      <h2 className="text-xl font-semibold text-red-700">Something went wrong</h2>
      <p className="text-sm text-red-600">{error.message}</p>
      <button
        type="button"
        onClick={() => reset()}
        className="rounded bg-red-600 px-4 py-2 text-white"
      >
        Try again
      </button>
    </div>
  );
}`,
    explanation: "Route error boundaries are Client Components so you can respond to user interactions. Logging helps with debugging, and calling reset() reattempts rendering the segment."
  },
  {
    id: 32,
    difficulty: "advanced",
    category: "Caching Strategies",
    title: "Configuring Fetch Caching Modes",
    question: `Fetch analytics data where the product list can be revalidated every 10 minutes but the live stats must always be fresh. Configure each fetch with the correct caching options.`,
    hint: "Use next.revalidate for incremental static regeneration and cache: 'no-store' for uncached requests.",
    starterCode: `export default async function AnalyticsPage() {
  const productsResponse = await fetch('https://api.example.com/products');
  const statsResponse = await fetch('https://api.example.com/stats');

  const products = await productsResponse.json();
  const stats = await statsResponse.json();

  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold">Analytics</h1>
      <p>Products loaded: {products.length}</p>
      <p>Active users: {stats.activeUsers}</p>
    </section>
  );
}`,
    solution: `export default async function AnalyticsPage() {
  const productsResponse = await fetch('https://api.example.com/products', {
    next: { revalidate: 600 }
  });

  const statsResponse = await fetch('https://api.example.com/stats', {
    cache: 'no-store'
  });

  const products = await productsResponse.json();
  const stats = await statsResponse.json();

  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold">Analytics</h1>
      <p>Products loaded: {products.length}</p>
      <p>Active users: {stats.activeUsers}</p>
    </section>
  );
}`,
    explanation: "Static data can use revalidate to regenerate in the background, while cache: 'no-store' ensures live stats are always fetched on request. Choosing the right caching strategy balances freshness and performance."
  },
  {
    id: 33,
    difficulty: "advanced",
    category: "Caching Strategies",
    title: "Revalidating Tagged Fetches",
    question: `Tag the posts fetch so it can be revalidated after publishing new content. Update the server action to invalidate the tag once the post is created.`,
    hint: "Pass next.tags to fetch and call revalidateTag with the same tag inside the server action.",
    starterCode: `import { revalidateTag } from 'next/cache';

export async function PostsFeed() {
  const response = await fetch('https://api.example.com/posts');
  const posts = await response.json();

  return (
    <ul className="space-y-2">
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}

export default function PublishPost() {
  async function publish(formData) {
    'use server';
    // Save the post then revalidate feed
  }

  return (
    <form action={publish} className="space-y-4">
      <input
        type="text"
        name="title"
        className="w-full rounded border px-3 py-2"
        placeholder="Post title"
        required
      />
      <button type="submit" className="rounded bg-green-600 px-4 py-2 text-white">
        Publish
      </button>
    </form>
  );
}`,
    solution: `import { revalidateTag } from 'next/cache';

export async function PostsFeed() {
  const response = await fetch('https://api.example.com/posts', {
    next: { tags: ['posts'] }
  });
  const posts = await response.json();

  return (
    <ul className="space-y-2">
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}

export default function PublishPost() {
  async function publish(formData) {
    'use server';

    await fetch('https://api.example.com/posts', {
      method: 'POST',
      body: JSON.stringify({ title: formData.get('title') }),
      headers: { 'Content-Type': 'application/json' }
    });

    revalidateTag('posts');
  }

  return (
    <form action={publish} className="space-y-4">
      <input
        type="text"
        name="title"
        className="w-full rounded border px-3 py-2"
        placeholder="Post title"
        required
      />
      <button type="submit" className="rounded bg-green-600 px-4 py-2 text-white">
        Publish
      </button>
    </form>
  );
}`,
    explanation: "Tagging fetch requests groups cache entries. Calling revalidateTag invalidates every response with that tag, ensuring a newly published post appears immediately on the feed."
  },
  {
    id: 34,
    difficulty: "advanced",
    category: "Parallel Routes",
    title: "Suspending Parallel Sections",
    question: `Wrap the PostsFeed and TrendingTopics components in Suspense boundaries so they load independently with their own fallbacks.`,
    hint: "Import Suspense from 'react' and provide a fallback UI for each section.",
    starterCode: `import PostsFeed from './PostsFeed';
import TrendingTopics from './TrendingTopics';

export default function DashboardPage() {
  return (
    <div className="grid gap-6 md:grid-cols-[2fr_1fr]">
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Latest Posts</h2>
        <PostsFeed />
      </section>
      <aside className="space-y-4">
        <h2 className="text-2xl font-semibold">Trending Topics</h2>
        <TrendingTopics />
      </aside>
    </div>
  );
}`,
    solution: `import { Suspense } from 'react';
import PostsFeed from './PostsFeed';
import TrendingTopics from './TrendingTopics';

export default function DashboardPage() {
  return (
    <div className="grid gap-6 md:grid-cols-[2fr_1fr]">
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Latest Posts</h2>
        <Suspense
          fallback={
            <div className="space-y-3 rounded border p-4">
              <div className="h-4 w-1/2 animate-pulse rounded bg-gray-200" />
              <div className="h-4 w-2/3 animate-pulse rounded bg-gray-200" />
              <div className="h-4 w-1/3 animate-pulse rounded bg-gray-200" />
            </div>
          }
        >
          <PostsFeed />
        </Suspense>
      </section>
      <aside className="space-y-4">
        <h2 className="text-2xl font-semibold">Trending Topics</h2>
        <Suspense
          fallback={
            <div className="space-y-2 rounded border p-4">
              <div className="h-4 w-1/3 animate-pulse rounded bg-gray-200" />
              <div className="h-4 w-1/2 animate-pulse rounded bg-gray-200" />
            </div>
          }
        >
          <TrendingTopics />
        </Suspense>
      </aside>
    </div>
  );
}`,
    explanation: "Suspense lets each async child resolve independently. Wrapping sections in their own boundaries keeps the dashboard responsive even if one data source lags."
  },
  {
    id: 35,
    difficulty: "advanced",
    category: "Middleware",
    title: "Redirecting Unauthenticated Users",
    question: `Create middleware that redirects users without a "session" cookie to the /login page whenever they visit /dashboard routes.`,
    hint: "Read cookies from the request and return NextResponse.redirect when the session is missing.",
    starterCode: `import { NextResponse } from 'next/server';

export function middleware(request) {
  // Redirect users who do not have a session cookie
}

export const config = {
  matcher: ['/dashboard/:path*']
};
`,
    solution: `import { NextResponse } from 'next/server';

export function middleware(request) {
  const hasSession = request.cookies.has('session');

  if (!hasSession) {
    const url = new URL('/login', request.url);
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*']
};
`,
    explanation: "Middleware runs before the request reaches a route. Checking cookies lets you gate sections of the site and redirect unauthenticated users without rendering the page."
  },
  {
    id: 36,
    difficulty: "advanced",
    category: "TypeScript",
    title: "Typing Dynamic Route Params",
    question: `Add proper TypeScript types to the blog post page so the params prop is typed as a Promise that resolves to an object with a slug string.`,
    hint: "Define a Props type describing params: Promise<{ slug: string }>. Use it in the function signature.",
    starterCode: `type Props = {
  params: Promise<any>;
};

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;

  return (
    <article>
      <h1>Blog post: {slug}</h1>
    </article>
  );
}`,
    solution: `type Props = {
  params: Promise<{ slug: string }>;
};

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;

  return (
    <article>
      <h1>Blog post: {slug}</h1>
    </article>
  );
}`,
    explanation: "Typing params helps catch mistakes when accessing dynamic segments. In Next.js 15, params is a Promise in async server components, so type the resolved value accordingly."
  },
  {
    id: 37,
    difficulty: "advanced",
    category: "Performance Optimization",
    title: "Moving Fetching to a Server Component",
    question: `Convert this client component that fetches featured posts with useEffect into a server component that fetches on the server and caches for five minutes.`,
    hint: "Remove 'use client', make the component async, and use fetch with next.revalidate to cache the response.",
    starterCode: `'use client';
import { useEffect, useState } from 'react';

export default function FeaturedPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function loadPosts() {
      const response = await fetch('https://api.example.com/posts');
      const data = await response.json();
      setPosts(data);
    }

    loadPosts();
  }, []);

  return (
    <section>
      <h2 className="text-2xl font-bold">Featured Posts</h2>
      <ul className="mt-4 space-y-2">
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </section>
  );
}`,
    solution: `export default async function FeaturedPosts() {
  const response = await fetch('https://api.example.com/posts', {
    next: { revalidate: 300 }
  });
  const posts = await response.json();

  return (
    <section>
      <h2 className="text-2xl font-bold">Featured Posts</h2>
      <ul className="mt-4 space-y-2">
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </section>
  );
}`,
    explanation: "Server components run on the server before rendering, so fetching there removes client-side waterfalls. Adding revalidate caches the response and keeps it fresh without client JavaScript."
  },
  {
    id: 38,
    difficulty: "beginner",
    category: "Tailwind CSS",
    title: "Centering a Card on the Page",
    question: `Style the layout so the onboarding card sits centered both vertically and horizontally on a dark background. Give the card generous padding, rounded corners, a soft shadow, and tighten the spacing between elements. Make the primary button span the full width of the card.`,
    hint: "Use flexbox utilities like items-center and justify-center on a min-h-screen container, then apply padding, rounded, shadow, and space-y utilities on the card.",
    starterCode: `export default function CenteredCard() {
  return (
    <div className="min-h-screen bg-slate-100">
      <article className="max-w-md">
        <h2>Welcome to FlowState</h2>
        <p>
          Build habits that stick with guided rituals, streak tracking, and gentle reminders.
        </p>
        <button>Create account</button>
      </article>
    </div>
  );
}`,
    solution: `export default function CenteredCard() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-4">
      <article className="max-w-md space-y-4 rounded-3xl bg-white/10 p-8 text-slate-100 shadow-2xl backdrop-blur">
        <h2 className="text-3xl font-semibold">Welcome to FlowState</h2>
        <p className="text-slate-200">
          Build habits that stick with guided rituals, streak tracking, and gentle reminders.
        </p>
        <button className="w-full rounded-xl bg-emerald-400 py-3 text-center font-semibold text-emerald-950 transition hover:bg-emerald-300">
          Create account
        </button>
      </article>
    </div>
  );
}`,
    explanation: "Tailwind makes full-viewport centering a single utility away: combining min-h-screen with flex, items-center, and justify-center aligns the card in two dimensions. Layering background gradient utilities and backdrop-blur sets mood without writing CSS. Inside the card, space-y, padding, rounded, and shadow utilities create a polished surface while w-full on the button ensures a consistent call-to-action width."
  },
  {
    id: 39,
    difficulty: "beginner",
    category: "Tailwind CSS",
    title: "Building a Responsive Feature Grid",
    question: `Lay out the feature cards in a single column on mobile and two columns on medium screens and above. Add gap, padding, and subtle styling so each card feels clickable while keeping the section centered on the page.`,
    hint: "Use grid with grid-cols-1 and md:grid-cols-2, add gap utilities, and style each card with rounded, border, and hover effects.",
    starterCode: `const features = [
  { title: "Real-time sync", description: "Stay aligned across devices instantly." },
  { title: "Guided templates", description: "Start faster with curated workflows." },
  { title: "Focus mode", description: "Block distractions and get in the zone." },
  { title: "Insights", description: "Understand progress with weekly reports." }
];

export default function FeatureGrid() {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold">Why teams choose Aurora</h2>
        <p className="mt-2 text-slate-600">
          Modular components and opinionated defaults let you ship polished UI faster.
        </p>
        <div className="mt-10">
          {features.map((feature) => (
            <article key={feature.title}>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}`,
    solution: `const features = [
  { title: "Real-time sync", description: "Stay aligned across devices instantly." },
  { title: "Guided templates", description: "Start faster with curated workflows." },
  { title: "Focus mode", description: "Block distractions and get in the zone." },
  { title: "Insights", description: "Understand progress with weekly reports." }
];

export default function FeatureGrid() {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-3xl font-bold text-slate-900">Why teams choose Aurora</h2>
        <p className="mt-2 max-w-2xl text-slate-600">
          Modular components and opinionated defaults let you ship polished UI faster.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold text-slate-900">{feature.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}`,
    explanation: "Tailwind's responsive grid utilities make breakpoints declarative: grid-cols-1 establishes the mobile baseline and md:grid-cols-2 updates the template automatically at the medium breakpoint. Wrapping the section in a centered container with max-w and padding keeps the layout readable, while utility-driven hover shadows and borders provide interactive affordances without ever leaving JSX."
  },
  {
    id: 40,
    difficulty: "beginner",
    category: "Tailwind CSS",
    title: "Designing a Gradient Hero Section",
    question: `Transform the hero into a bold gradient banner with the content centered on small screens and left-aligned on medium screens and above. Give the call-to-action buttons distinct visual weight and ensure the layout has breathing room.`,
    hint: "Combine gradient background utilities with text-center md:text-left, use flex or inline-flex on the button group, and apply px/padding utilities for spacing.",
    starterCode: `export default function HeroSection() {
  return (
    <header>
      <div>
        <span>New</span>
        <h1>Build beautiful marketing pages in hours.</h1>
        <p>
          Craft responsive layouts with battle-tested components and thoughtful defaults.
        </p>
        <div>
          <button>Start building</button>
          <button>View components</button>
        </div>
      </div>
    </header>
  );
}`,
    solution: `export default function HeroSection() {
  return (
    <header className="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-6 py-20 text-center text-white md:items-start md:text-left">
        <span className="inline-flex items-center rounded-full bg-white/20 px-3 py-1 text-sm font-medium tracking-wide">
          New
        </span>
        <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
          Build beautiful marketing pages in hours.
        </h1>
        <p className="max-w-2xl text-lg text-white/80">
          Craft responsive layouts with battle-tested components and thoughtful defaults.
        </p>
        <div className="flex flex-col gap-3 md:flex-row">
          <button className="rounded-xl bg-white px-6 py-3 text-base font-semibold text-indigo-600 shadow-sm transition hover:shadow-lg">
            Start building
          </button>
          <button className="rounded-xl border border-white/60 px-6 py-3 text-base font-semibold text-white transition hover:bg-white/10">
            View components
          </button>
        </div>
      </div>
    </header>
  );
}`,
    explanation: "By shifting structure to a flex column, we can center-align content for smaller viewports and effortlessly switch to md:text-left with responsive modifiers. Layering gradient utilities on the header produces a modern hero without custom CSS. The button group illustrates how Tailwind's responsive variants (md:flex-row) and translucency utilities (white/20) let you orchestrate hierarchy and contrast directly in markup."
  },
  {
    id: 41,
    difficulty: "intermediate",
    category: "Tailwind CSS",
    title: "Presenting Key Metrics with Grid",
    question: `Display the stats in a responsive grid: two columns on small screens and four on large screens. Each stat card should use glassmorphism styling with backdrop blur, border, and evenly spaced content.`,
    hint: "Use grid grid-cols-2 with lg:grid-cols-4, apply gap utilities, and combine bg-white/10 with border-white/20 and backdrop-blur for the glass effect.",
    starterCode: `const stats = [
  { label: "Daily active", value: "48K" },
  { label: "Conversion", value: "6.2%" },
  { label: "NPS", value: "72" },
  { label: "Retention", value: "93%" }
];

export default function StatsPanel() {
  return (
    <section className="bg-slate-900 py-16">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-3xl font-semibold text-white">Team Signal</h2>
        <div className="mt-10">
          {stats.map((stat) => (
            <article key={stat.label}>
              <span>{stat.value}</span>
              <p>{stat.label}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}`,
    solution: `const stats = [
  { label: "Daily active", value: "48K" },
  { label: "Conversion", value: "6.2%" },
  { label: "NPS", value: "72" },
  { label: "Retention", value: "93%" }
];

export default function StatsPanel() {
  return (
    <section className="bg-slate-950 py-16">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-3xl font-semibold text-white">Team Signal</h2>
        <div className="mt-10 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {stats.map((stat) => (
            <article
              key={stat.label}
              className="flex flex-col items-center justify-center space-y-3 rounded-2xl border border-white/10 bg-white/10 px-6 py-8 text-center text-white shadow-lg backdrop-blur"
            >
              <span className="text-3xl font-bold tracking-tight">{stat.value}</span>
              <p className="text-sm uppercase tracking-wide text-white/70">{stat.label}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}`,
    explanation: "Tailwind's grid utilities let you define breakpoints declaratively, so grid-cols-2 and lg:grid-cols-4 deliver an adaptive layout for metrics without a media query. Combining translucent backgrounds with border-white/10 and backdrop-blur creates a glass panel aesthetic entirely from utility classes, while flex and space-y utilities keep content centered and evenly separated inside each tile."
  },
  {
    id: 42,
    difficulty: "intermediate",
    category: "Tailwind CSS",
    title: "Crafting a Responsive Navigation Bar",
    question: `Style the navigation so it has a blurred background, a centered max-width, and space between the logo and links. Stack the links vertically on small screens and switch to a horizontal layout on medium screens. Highlight the primary button.`,
    hint: "Use backdrop-blur, max-w-6xl mx-auto, flex utilities, and responsive modifiers like md:flex-row to change direction at the breakpoint.",
    starterCode: `export default function NavigationBar() {
  return (
    <header>
      <nav>
        <span>Pulse</span>
        <div>
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#docs">Docs</a>
        </div>
        <button>Get started</button>
      </nav>
    </header>
  );
}`,
    solution: `export default function NavigationBar() {
  return (
    <header className="sticky top-0 z-50 bg-white/60 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-4 md:flex-row md:justify-between">
        <span className="text-xl font-semibold text-slate-900">Pulse</span>
        <div className="flex flex-col items-center gap-3 text-sm font-medium text-slate-600 md:flex-row md:gap-6">
          <a href="#features" className="transition hover:text-slate-900">
            Features
          </a>
          <a href="#pricing" className="transition hover:text-slate-900">
            Pricing
          </a>
          <a href="#docs" className="transition hover:text-slate-900">
            Docs
          </a>
        </div>
        <button className="w-full rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white shadow md:w-auto">
          Get started
        </button>
      </nav>
    </header>
  );
}`,
    explanation: "Starting with a mobile-first flex column keeps the header readable on small screens, then md:flex-row and md:justify-between reorganize the layout instantly at the breakpoint. The translucent background with backdrop-blur gives the nav bar an elevated feel while remaining reusable. Applying w-full on the CTA ensures it reads as a prominent block button on phones, yet md:w-auto collapses it back to a compact pill on larger viewports."
  },
  {
    id: 43,
    difficulty: "intermediate",
    category: "Tailwind CSS",
    title: "Showcasing Testimonials Responsively",
    question: `Arrange the testimonials in a responsive grid with balanced spacing. Stack them in a single column on mobile, display three columns on large screens, and align each avatar with the customer name using flex utilities.`,
    hint: "Use grid with gap utilities (grid-cols-1 lg:grid-cols-3) and align avatar + text using flex items-center gap-x utilities.",
    starterCode: `const testimonials = [
  {
    name: "Elena Martinez",
    role: "Product Designer",
    quote: "The component library saved us weeks of work. Everything just fits together.",
    avatar: "https://i.pravatar.cc/80?img=68"
  },
  {
    name: "Noah Chen",
    role: "Engineering Manager",
    quote: "Tailwind and Next.js finally feel approachable for the whole team.",
    avatar: "https://i.pravatar.cc/80?img=12"
  },
  {
    name: "Priya Patel",
    role: "Founder, Northwind",
    quote: "We launched a polished marketing site in a weekend thanks to these layouts.",
    avatar: "https://i.pravatar.cc/80?img=33"
  }
];

export default function TestimonialsSection() {
  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-bold text-slate-900">Loved by builders</h2>
        <div className="mt-12">
          {testimonials.map((testimonial) => (
            <article key={testimonial.name}>
              <div>
                <img src={testimonial.avatar} alt={testimonial.name} />
                <div>
                  <p>{testimonial.name}</p>
                  <span>{testimonial.role}</span>
                </div>
              </div>
              <p>{testimonial.quote}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}`,
    solution: `const testimonials = [
  {
    name: "Elena Martinez",
    role: "Product Designer",
    quote: "The component library saved us weeks of work. Everything just fits together.",
    avatar: "https://i.pravatar.cc/80?img=68"
  },
  {
    name: "Noah Chen",
    role: "Engineering Manager",
    quote: "Tailwind and Next.js finally feel approachable for the whole team.",
    avatar: "https://i.pravatar.cc/80?img=12"
  },
  {
    name: "Priya Patel",
    role: "Founder, Northwind",
    quote: "We launched a polished marketing site in a weekend thanks to these layouts.",
    avatar: "https://i.pravatar.cc/80?img=33"
  }
];

export default function TestimonialsSection() {
  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-bold text-slate-900">Loved by builders</h2>
        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="flex flex-col gap-6 rounded-2xl border border-slate-200 bg-white p-8 shadow-lg"
            >
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="h-12 w-12 rounded-full ring-2 ring-slate-200"
                />
                <div>
                  <p className="text-base font-semibold text-slate-900">{testimonial.name}</p>
                  <span className="text-sm text-slate-500">{testimonial.role}</span>
                </div>
              </div>
              <p className="text-slate-600">{testimonial.quote}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}`,
    explanation: "Responsive grid utilities deliver a mobile-first single column and effortlessly graduate to three columns at the lg breakpoint. Within each card, pairing flex, items-center, and gap creates a tidy alignment between the avatar and text block. Utility-driven borders, rings, and shadows finish the testimonial styling, giving the section polish without a custom stylesheet."
  },
  {
    id: 44,
    difficulty: "intermediate",
    category: "Tailwind CSS",
    title: "Structuring a Dashboard with Sidebar",
    question: `Build a responsive dashboard shell where the sidebar appears above the content on mobile and snaps into a left column on large screens. Give the sidebar a frosted surface, highlight the active navigation item, and ensure the main panel has a card-like background.`,
    hint: "Wrap the layout in a grid with gap utilities (grid-cols-1 lg:grid-cols-[280px_1fr]) and use sticky or min-h-screen to maintain full-height context. Apply bg-white/10 + backdrop-blur on the sidebar and rounded-lg + shadow on the main card.",
    starterCode: `const navigation = [
  { name: "Overview", current: true },
  { name: "Projects", current: false },
  { name: "Team", current: false },
  { name: "Billing", current: false }
];

export default function DashboardLayout() {
  return (
    <div className="bg-slate-950">
      <div className="mx-auto max-w-7xl">
        <aside>
          <h2>Workspace</h2>
          <ul>
            {navigation.map((item) => (
              <li key={item.name}>
                <button>{item.name}</button>
              </li>
            ))}
          </ul>
        </aside>
        <main>
          <h1>Overview</h1>
          <p>Track goals, review sprints, and share updates with your team.</p>
          <section>
            <div />
            <div />
            <div />
          </section>
        </main>
      </div>
    </div>
  );
}`,
    solution: `const navigation = [
  { name: "Overview", current: true },
  { name: "Projects", current: false },
  { name: "Team", current: false },
  { name: "Billing", current: false }
];

export default function DashboardLayout() {
  return (
    <div className="bg-slate-950">
      <div className="mx-auto grid min-h-screen max-w-7xl gap-8 px-6 py-12 lg:grid-cols-[280px_1fr]">
        <aside className="space-y-8 rounded-3xl border border-white/10 bg-white/5 p-6 text-white shadow-xl backdrop-blur">
          <div>
            <h2 className="text-sm uppercase tracking-wide text-white/60">Workspace</h2>
            <p className="mt-1 text-2xl font-semibold">Product Pulse</p>
          </div>
          <ul className="space-y-2">
            {navigation.map((item) => (
              <li key={item.name}>
                <button
                  className={\`w-full rounded-2xl px-4 py-3 text-left text-sm font-medium transition \${item.current ? "bg-white text-slate-950 shadow-lg" : "hover:bg-white/10"}\`}
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </aside>
        <main className="rounded-3xl border border-white/10 bg-white/5 p-8 text-white shadow-xl backdrop-blur">
          <h1 className="text-3xl font-semibold">Overview</h1>
          <p className="mt-2 text-white/70">
            Track goals, review sprints, and share updates with your team.
          </p>
          <section className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/10 p-6 shadow">
              <h3 className="text-sm uppercase text-white/60">Velocity</h3>
              <p className="mt-4 text-3xl font-bold">42 pts</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/10 p-6 shadow">
              <h3 className="text-sm uppercase text-white/60">Active projects</h3>
              <p className="mt-4 text-3xl font-bold">7</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/10 p-6 shadow md:col-span-2 xl:col-span-1">
              <h3 className="text-sm uppercase text-white/60">Team health</h3>
              <p className="mt-4 text-3xl font-bold">87%</p>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}`,
    explanation: "Organizing the shell with a responsive grid means the sidebar and content stack naturally in one column and only snap into two panes when lg:grid-cols-[280px_1fr] kicks in. Tailwind's translucent and blur utilities provide the frosted-glass surfaces, while conditional utility strings highlight the active nav item. Nested grids and borders inside the content illustrate how you can assemble an entire dashboard aesthetic purely with utility classes."
  },
  {
    id: 45,
    difficulty: "advanced",
    category: "Tailwind CSS",
    title: "Creating an Asymmetric Content Showcase",
    question: `Build a gallery where the first story spans two columns on large screens and the remaining cards flow in a single column. Add responsive gaps, rounded corners, and overlays that keep text legible on image backgrounds.`,
    hint: "Use grid with responsive column definitions and apply conditional classes (e.g., index === 0) to span columns. Layer gradients with absolute positioning and text-white for readability.",
    starterCode: `const stories = [
  {
    title: "Design systems in weeks, not months",
    author: "Jules Kramer",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
  },
  {
    title: "Shipping faster with small teams",
    author: "Kenji Tanaka",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
  },
  {
    title: "Finding focus in a remote world",
    author: "Maya Gupta",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
  },
  {
    title: "Crafting rituals for deep work",
    author: "Alex Rivera",
    image: "https://images.unsplash.com/photo-1487014679447-9f8336841d58"
  }
];

export default function ContentShowcase() {
  return (
    <section className="bg-slate-900 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-semibold text-white">Latest stories</h2>
        <div className="mt-10">
          {stories.map((story) => (
            <article key={story.title}>
              <img src={story.image} alt={story.title} />
              <div>
                <p>{story.title}</p>
                <span>{story.author}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}`,
    solution: `const stories = [
  {
    title: "Design systems in weeks, not months",
    author: "Jules Kramer",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
  },
  {
    title: "Shipping faster with small teams",
    author: "Kenji Tanaka",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
  },
  {
    title: "Finding focus in a remote world",
    author: "Maya Gupta",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
  },
  {
    title: "Crafting rituals for deep work",
    author: "Alex Rivera",
    image: "https://images.unsplash.com/photo-1487014679447-9f8336841d58"
  }
];

export default function ContentShowcase() {
  return (
    <section className="bg-slate-900 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-semibold text-white">Latest stories</h2>
        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {stories.map((story, index) => (
            <article
              key={story.title}
              className={\`group relative overflow-hidden rounded-3xl shadow-lg transition hover:-translate-y-1 hover:shadow-2xl \${index === 0 ? "lg:col-span-2 lg:row-span-2" : ""}\`}
            >
              <img src={story.image} alt={story.title} className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 space-y-2 px-6 py-8 text-white">
                <p className="text-lg font-semibold leading-tight">{story.title}</p>
                <span className="text-sm text-white/70">{story.author}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}`,
    explanation: "By combining a responsive grid with conditional span utilities, you can create a magazine-style layout where the hero story commands more real estate on larger screens. Tailwind's template-literal-friendly class composition makes it easy to toggle lg:col-span-2 lg:row-span-2 based on index. Overlay gradients and group hover transitions keep text legible and add motion, all driven by utilities."
  },
  {
    id: 46,
    difficulty: "advanced",
    category: "Tailwind CSS",
    title: "Building a Responsive Video Gallery",
    question: `Display the videos in a responsive grid that maintains consistent thumbnail aspect ratios. Show three columns on large screens, two on small/medium, and ensure each card has padding, rounded corners, and metadata spacing.`,
    hint: "Use grid with sm:grid-cols-2 lg:grid-cols-3 and apply aspect-video on a wrapper div so images maintain their proportions. Add space-y utilities inside the card.",
    starterCode: `const videos = [
  { title: "Design tokens 101", duration: "12:34", thumbnail: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b" },
  { title: "Accessible component patterns", duration: "18:05", thumbnail: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429" },
  { title: "Advanced layout techniques", duration: "22:11", thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085" },
  { title: "Async data strategies", duration: "15:02", thumbnail: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6" },
  { title: "Design system governance", duration: "19:27", thumbnail: "https://images.unsplash.com/photo-1521791136064-7986c2920216" },
  { title: "Next.js deployment tips", duration: "11:48", thumbnail: "https://images.unsplash.com/photo-1522071820081-009f0129c71c" }
];

export default function VideoGallery() {
  return (
    <section className="bg-slate-100 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-semibold text-slate-900">Academy sessions</h2>
        <div className="mt-10">
          {videos.map((video) => (
            <article key={video.title}>
              <img src={video.thumbnail} alt={video.title} />
              <div>
                <p>{video.title}</p>
                <span>{video.duration}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}`,
    solution: `const videos = [
  { title: "Design tokens 101", duration: "12:34", thumbnail: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b" },
  { title: "Accessible component patterns", duration: "18:05", thumbnail: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429" },
  { title: "Advanced layout techniques", duration: "22:11", thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085" },
  { title: "Async data strategies", duration: "15:02", thumbnail: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6" },
  { title: "Design system governance", duration: "19:27", thumbnail: "https://images.unsplash.com/photo-1521791136064-7986c2920216" },
  { title: "Next.js deployment tips", duration: "11:48", thumbnail: "https://images.unsplash.com/photo-1522071820081-009f0129c71c" }
];

export default function VideoGallery() {
  return (
    <section className="bg-slate-100 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-semibold text-slate-900">Academy sessions</h2>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {videos.map((video) => (
            <article
              key={video.title}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="aspect-video">
                <img src={video.thumbnail} alt={video.title} className="h-full w-full object-cover" />
              </div>
              <div className="space-y-2 p-5">
                <p className="text-base font-semibold text-slate-900">{video.title}</p>
                <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-500">
                  {video.duration}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}`,
    explanation: "Using aspect-video ensures every thumbnail maintains the same ratio, avoiding uneven rows without additional CSS. Responsive columns (sm:grid-cols-2, lg:grid-cols-3) let the gallery expand gracefully as screen real estate grows. Card-level utilities like border, shadow, rounded, and hover transitions finish the layout, demonstrating how Tailwind handles both structural and aesthetic concerns in JSX."
  },
  {
    id: 47,
    difficulty: "advanced",
    category: "Tailwind CSS",
    title: "Polishing a Multi-Section Marketing Page",
    question: `Create a marketing page layout featuring a hero, feature columns, and a closing CTA. Use Tailwind's container pattern, vertical rhythm with space-y utilities, and responsive grids so the layout feels cohesive across breakpoints.`,
    hint: "Reach for max-w-7xl mx-auto px utilities for the container, space-y-* for consistent vertical spacing, and grid gap utilities to handle the feature list responsive behavior.",
    starterCode: `const features = [
  { title: "Composable blocks", description: "Drag, drop, and remix sections without touching custom CSS." },
  { title: "Accessible by default", description: "ARIA, color contrast, and keyboard flows are built in." },
  { title: "Performance tuned", description: "Optimized for Core Web Vitals out of the box." }
];

export default function MarketingPage() {
  return (
    <div>
      <section>
        <div>
          <span>Ship faster</span>
          <h1>Launch polished experiences in record time.</h1>
          <p>
            Pair Next.js with Tailwind to get opinionated building blocks without sacrificing flexibility.
          </p>
          <div>
            <button>Explore templates</button>
            <button>View pricing</button>
          </div>
        </div>
      </section>

      <section>
        <div>
          {features.map((feature) => (
            <article key={feature.title}>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section>
        <div>
          <h2>Ready to get started?</h2>
          <p>Join 7,200+ builders shipping with Bravo UI kits.</p>
          <button>Get access</button>
        </div>
      </section>
    </div>
  );
}`,
    solution: `const features = [
  { title: "Composable blocks", description: "Drag, drop, and remix sections without touching custom CSS." },
  { title: "Accessible by default", description: "ARIA, color contrast, and keyboard flows are built in." },
  { title: "Performance tuned", description: "Optimized for Core Web Vitals out of the box." }
];

export default function MarketingPage() {
  return (
    <div className="bg-white text-slate-900">
      <section className="bg-slate-900">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-24 text-center text-white md:items-center md:text-left">
          <span className="inline-flex items-center justify-center rounded-full bg-white/10 px-4 py-1 text-sm font-medium uppercase tracking-wide text-white/80">
            Ship faster
          </span>
          <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
            Launch polished experiences in record time.
          </h1>
          <p className="max-w-2xl text-lg text-white/80">
            Pair Next.js with Tailwind to get opinionated building blocks without sacrificing flexibility.
          </p>
          <div className="flex flex-col gap-3 md:flex-row">
            <button className="rounded-xl bg-white px-6 py-3 text-base font-semibold text-slate-900 shadow-md transition hover:shadow-xl">
              Explore templates
            </button>
            <button className="rounded-xl border border-white/50 px-6 py-3 text-base font-semibold text-white transition hover:bg-white/10">
              View pricing
            </button>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-8 md:grid-cols-3">
            {features.map((feature) => (
              <article
                key={feature.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-slate-900">{feature.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{feature.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-100">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-16 text-center md:flex-row md:justify-between md:text-left">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">Ready to get started?</h2>
            <p className="mt-2 text-slate-600">Join 7,200+ builders shipping with Bravo UI kits.</p>
          </div>
          <button className="rounded-full bg-slate-900 px-6 py-3 text-base font-semibold text-white shadow">
            Get access
          </button>
        </div>
      </section>
    </div>
  );
}`,
    explanation: "Applying Tailwind's container recipe—max-width constraints with centered margins and responsive padding—keeps every section aligned without custom wrappers. Space utilities establish a consistent vertical rhythm, while responsive grids ensure the feature list adapts smoothly from single to multi-column layouts. The hero and CTA blocks showcase how the same flex utilities can handle stacked mobile layouts and justified desktop alignments with only a couple of responsive modifiers."
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
  "React Hooks - useCallback",
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
  "Reusable Components",
  "Next.js Routing Basics",
  "Next.js Image",
  "App Router Layouts",
  "Forms & Inputs",
  "URL State Management",
  "Server Actions",
  "Metadata & SEO",
  "Loading & Error UI",
  "Caching Strategies",
  "Parallel Routes",
  "Middleware",
  "TypeScript",
  "Performance Optimization"
];
