import React from "react";
import { Sparkles } from "lucide-react";

export interface LessonStep {
  title: string;
  explanation: string;
  code?: string;
}

export interface LessonExample {
  title: string;
  description: string;
  code: string;
  preview: React.ReactNode;
  beforePreview?: React.ReactNode;
}

export interface CodeChallenge {
  title: string;
  description: string;
  starterCode: string;
  solution: string;
  hints: string[];
}

export interface LessonQuiz {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface LessonContentItem {
  title: string;
  introduction: string;
  learningObjectives: string[];
  steps: LessonStep[];
  examples: LessonExample[];
  challenges: CodeChallenge[];
  quiz: LessonQuiz[];
  keyTakeaways: string[];
}

export const lessonContent: Record<string, LessonContentItem> = {
  "utility-classes": {
    title: "Utility-First Fundamentals",
    introduction: "Utility-first CSS is a methodology where you style elements using small, single-purpose classes directly in your HTML. Instead of writing custom CSS, you compose styles from a predefined set of utilities.",
    learningObjectives: [
      "Understand the utility-first approach",
      "Compare traditional CSS with Tailwind",
      "Learn to compose multiple utilities",
      "Build components using only utility classes"
    ],
    steps: [
      {
        title: "What is Utility-First CSS?",
        explanation: "Traditional CSS requires you to write custom classes and define styles in separate files. With utility-first CSS, each class does one thing—like 'p-4' for padding or 'text-center' for text alignment. You combine these utilities to build any design.",
        code: `<!-- Traditional approach -->
<style>
  .btn { padding: 8px 16px; background: blue; color: white; border-radius: 4px; }
</style>
<button class="btn">Click me</button>

<!-- Utility-first approach -->
<button class="px-4 py-2 bg-blue-500 text-white rounded">Click me</button>`
      },
      {
        title: "The Tailwind Mental Model",
        explanation: "Think of utilities as LEGO blocks. Each block serves a purpose: spacing (p-, m-), colors (bg-, text-), layout (flex, grid), sizing (w-, h-), etc. You snap them together to build anything.",
        code: `<!-- Each class is a building block -->
<div class="
  flex          /* Layout: flexbox container */
  items-center  /* Alignment: center vertically */
  gap-4         /* Spacing: 1rem gap between items */
  p-6           /* Padding: 1.5rem all sides */
  bg-white      /* Background: white */
  rounded-xl    /* Border radius: extra large */
  shadow-lg     /* Shadow: large shadow */
">
  Content here
</div>`
      },
      {
        title: "Benefits of Utility-First",
        explanation: "No more naming things! No more switching between files. Your styles live right where your markup is, making it easier to understand and modify. Plus, you never write CSS that goes unused.",
      }
    ],
    examples: [
      {
        title: "Traditional CSS vs Tailwind",
        description: "Compare the two approaches side by side",
        code: `<!-- Traditional CSS requires separate stylesheet -->
<div class="card">
  <h2 class="card-title">Hello</h2>
  <p class="card-text">World</p>
</div>

/* styles.css - separate file */
.card { padding: 1.5rem; background: white; border-radius: 0.75rem; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
.card-title { font-size: 1.25rem; font-weight: 600; margin-bottom: 0.5rem; }
.card-text { color: #666; }

<!-- Tailwind - everything in one place -->
<div class="p-6 bg-white rounded-xl shadow-md">
  <h2 class="text-xl font-semibold mb-2">Hello</h2>
  <p class="text-gray-600">World</p>
</div>`,
        preview: (
          <div className="p-6 bg-card rounded-xl shadow-md border border-border">
            <h2 className="text-xl font-semibold mb-2 text-foreground">Hello</h2>
            <p className="text-muted-foreground">World</p>
          </div>
        ),
      },
      {
        title: "Building a Profile Card",
        description: "See how utilities compose together",
        code: `<div class="flex items-center gap-4 p-4 bg-white rounded-lg shadow">
  <img class="w-12 h-12 rounded-full" src="avatar.jpg" alt="User" />
  <div>
    <h3 class="font-semibold text-gray-900">Jane Doe</h3>
    <p class="text-sm text-gray-500">Product Designer</p>
  </div>
</div>`,
        preview: (
          <div className="flex items-center gap-4 p-4 bg-card rounded-lg shadow-md border border-border">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold">JD</div>
            <div>
              <h3 className="font-semibold text-foreground">Jane Doe</h3>
              <p className="text-sm text-muted-foreground">Product Designer</p>
            </div>
          </div>
        ),
      },
      {
        title: "Button Variations",
        description: "Create multiple button styles with utilities",
        code: `<!-- Primary button -->
<button class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
  Primary
</button>

<!-- Secondary button -->
<button class="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300">
  Secondary
</button>

<!-- Outline button -->
<button class="px-4 py-2 border-2 border-blue-500 text-blue-500 rounded-lg hover:bg-blue-50">
  Outline
</button>`,
        preview: (
          <div className="flex flex-wrap gap-3">
            <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity">Primary</button>
            <button className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:opacity-90 transition-opacity">Secondary</button>
            <button className="px-4 py-2 border-2 border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors">Outline</button>
          </div>
        ),
      }
    ],
    challenges: [
      {
        title: "Build a Notification Badge",
        description: "Create a notification badge using only Tailwind utilities. It should have a colored background, white text, rounded corners, and small padding.",
        starterCode: `<span class="">
  5
</span>`,
        solution: `<span class="px-2 py-1 bg-red-500 text-white text-xs font-bold rounded-full">
  5
</span>`,
        hints: [
          "Use 'px-2 py-1' for small padding",
          "Try 'bg-red-500 text-white' for colors",
          "Add 'rounded-full' for a pill shape"
        ]
      },
      {
        title: "Create an Alert Box",
        description: "Build a warning alert with an icon placeholder, title, and message.",
        starterCode: `<div class="">
  <span>⚠️</span>
  <div>
    <h4>Warning</h4>
    <p>Something needs attention</p>
  </div>
</div>`,
        solution: `<div class="flex items-start gap-3 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
  <span class="text-2xl">⚠️</span>
  <div>
    <h4 class="font-semibold text-yellow-800">Warning</h4>
    <p class="text-sm text-yellow-700">Something needs attention</p>
  </div>
</div>`,
        hints: [
          "Use 'flex items-start gap-3' for layout",
          "Add 'p-4' for padding and 'rounded-lg' for corners",
          "Try 'bg-yellow-50 border border-yellow-200' for the warning look"
        ]
      }
    ],
    quiz: [
      {
        question: "What is the main philosophy of utility-first CSS?",
        options: [
          "Write custom CSS for every component",
          "Use small, single-purpose classes directly in HTML",
          "Only use component libraries",
          "Avoid using CSS classes entirely"
        ],
        correctIndex: 1,
        explanation: "Utility-first CSS uses small, composable utility classes directly in your HTML for rapid styling."
      },
      {
        question: "Which is a benefit of utility-first CSS?",
        options: [
          "Larger CSS file sizes",
          "More files to manage",
          "Styles are colocated with markup",
          "Requires JavaScript"
        ],
        correctIndex: 2,
        explanation: "With utility classes in your HTML, you can see styles right where the markup is, making it easier to understand and maintain."
      },
      {
        question: "What does 'p-4' do in Tailwind?",
        options: [
          "Sets font size to 4px",
          "Adds 1rem (16px) padding on all sides",
          "Creates 4 columns",
          "Sets position to relative"
        ],
        correctIndex: 1,
        explanation: "The 'p-4' utility adds 1rem (16px) of padding on all sides. The number 4 refers to Tailwind's spacing scale (4 × 0.25rem = 1rem)."
      }
    ],
    keyTakeaways: [
      "Utility-first means using small, single-purpose classes",
      "Classes live in HTML, not separate CSS files",
      "Utilities compose together like LEGO blocks",
      "Common patterns: p- (padding), m- (margin), bg- (background), text- (text color/size)"
    ]
  },

  "spacing": {
    title: "Spacing & Sizing",
    introduction: "Tailwind's spacing scale is the foundation of consistent layouts. Understanding padding, margin, width, and height utilities will let you build pixel-perfect designs effortlessly.",
    learningObjectives: [
      "Master the spacing scale (0-96)",
      "Use padding and margin utilities",
      "Control width and height",
      "Understand min/max sizing"
    ],
    steps: [
      {
        title: "The Spacing Scale",
        explanation: "Tailwind uses a consistent spacing scale where each unit equals 0.25rem (4px). So p-1 = 4px, p-2 = 8px, p-4 = 16px, and so on. This creates harmonious, consistent spacing.",
        code: `<!-- Common spacing values -->
p-0    → 0px
p-1    → 0.25rem (4px)
p-2    → 0.5rem (8px)
p-4    → 1rem (16px)
p-6    → 1.5rem (24px)
p-8    → 2rem (32px)
p-12   → 3rem (48px)
p-16   → 4rem (64px)`
      },
      {
        title: "Padding Utilities",
        explanation: "Use p- for all sides, px- for horizontal, py- for vertical, pt/pr/pb/pl for individual sides.",
        code: `p-4    → padding: 1rem (all sides)
px-4   → padding-left: 1rem; padding-right: 1rem
py-4   → padding-top: 1rem; padding-bottom: 1rem
pt-4   → padding-top: 1rem
pr-4   → padding-right: 1rem
pb-4   → padding-bottom: 1rem
pl-4   → padding-left: 1rem`
      },
      {
        title: "Margin Utilities",
        explanation: "Margin follows the same pattern as padding, just with 'm' instead of 'p'. You can also use negative margins with -m-.",
        code: `m-4    → margin: 1rem
mx-auto → margin-left: auto; margin-right: auto (centering!)
mt-8   → margin-top: 2rem
-mt-4  → margin-top: -1rem (negative margin)`
      },
      {
        title: "Width & Height",
        explanation: "Control dimensions with w- and h- utilities. Use fractions for responsive widths, fixed values for specific sizes.",
        code: `w-full    → width: 100%
w-1/2     → width: 50%
w-1/3     → width: 33.333%
w-64      → width: 16rem (256px)
w-screen  → width: 100vw

h-full    → height: 100%
h-screen  → height: 100vh
h-64      → height: 16rem`
      }
    ],
    examples: [
      {
        title: "Spacing Scale Visualization",
        description: "See how spacing values translate to actual sizes",
        code: `<div class="space-y-2">
  <div class="p-1 bg-blue-500">p-1 (4px)</div>
  <div class="p-2 bg-blue-500">p-2 (8px)</div>
  <div class="p-4 bg-blue-500">p-4 (16px)</div>
  <div class="p-6 bg-blue-500">p-6 (24px)</div>
  <div class="p-8 bg-blue-500">p-8 (32px)</div>
</div>`,
        preview: (
          <div className="space-y-2">
            <div className="p-1 bg-primary text-primary-foreground rounded text-xs">p-1 (4px)</div>
            <div className="p-2 bg-primary text-primary-foreground rounded text-sm">p-2 (8px)</div>
            <div className="p-4 bg-primary text-primary-foreground rounded">p-4 (16px)</div>
            <div className="p-6 bg-primary text-primary-foreground rounded">p-6 (24px)</div>
            <div className="p-8 bg-primary text-primary-foreground rounded">p-8 (32px)</div>
          </div>
        ),
      },
      {
        title: "Directional Padding",
        description: "Apply padding to specific sides",
        code: `<div class="pt-8 pr-4 pb-2 pl-6 bg-blue-100 border-2 border-dashed border-blue-500">
  Different padding on each side
</div>`,
        beforePreview: (
          <div className="p-4 bg-muted border-2 border-dashed border-muted-foreground rounded">
            <span className="text-muted-foreground">Equal padding</span>
          </div>
        ),
        preview: (
          <div className="pt-8 pr-4 pb-2 pl-6 bg-primary/10 border-2 border-dashed border-primary rounded">
            <span className="text-foreground text-sm">pt-8, pr-4, pb-2, pl-6</span>
          </div>
        ),
      },
      {
        title: "Centering with mx-auto",
        description: "Center a fixed-width element horizontally",
        code: `<div class="w-full bg-gray-100 p-4">
  <div class="w-48 mx-auto bg-blue-500 text-white text-center p-4 rounded">
    Centered!
  </div>
</div>`,
        preview: (
          <div className="w-full bg-muted p-4 rounded">
            <div className="w-48 mx-auto bg-primary text-primary-foreground text-center p-4 rounded">
              Centered!
            </div>
          </div>
        ),
      },
      {
        title: "Gap Utility for Spacing Children",
        description: "Use gap instead of margins between flex/grid children",
        code: `<!-- Using gap (cleaner) -->
<div class="flex gap-4">
  <div class="p-4 bg-blue-500">1</div>
  <div class="p-4 bg-blue-500">2</div>
  <div class="p-4 bg-blue-500">3</div>
</div>

<!-- vs using margins (messier) -->
<div class="flex">
  <div class="p-4 bg-blue-500 mr-4">1</div>
  <div class="p-4 bg-blue-500 mr-4">2</div>
  <div class="p-4 bg-blue-500">3</div>
</div>`,
        beforePreview: (
          <div className="flex">
            <div className="p-4 bg-primary text-primary-foreground rounded mr-4">1</div>
            <div className="p-4 bg-primary text-primary-foreground rounded mr-4">2</div>
            <div className="p-4 bg-primary text-primary-foreground rounded">3</div>
          </div>
        ),
        preview: (
          <div className="flex gap-4">
            <div className="p-4 bg-primary text-primary-foreground rounded">1</div>
            <div className="p-4 bg-primary text-primary-foreground rounded">2</div>
            <div className="p-4 bg-primary text-primary-foreground rounded">3</div>
          </div>
        ),
      }
    ],
    challenges: [
      {
        title: "Create a Centered Card",
        description: "Create a card that is 320px wide, centered horizontally, with 24px padding inside.",
        starterCode: `<div class="">
  <h2>Card Title</h2>
  <p>Card content goes here</p>
</div>`,
        solution: `<div class="w-80 mx-auto p-6 bg-white rounded-lg shadow">
  <h2 class="font-bold text-lg mb-2">Card Title</h2>
  <p class="text-gray-600">Card content goes here</p>
</div>`,
        hints: [
          "w-80 gives you 320px width (80 × 4px)",
          "mx-auto centers horizontally",
          "p-6 adds 24px padding (6 × 4px)"
        ]
      },
      {
        title: "Build a Spaced List",
        description: "Create a vertical list with 16px gap between items using the space-y utility.",
        starterCode: `<ul class="">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>`,
        solution: `<ul class="space-y-4">
  <li class="p-3 bg-gray-100 rounded">Item 1</li>
  <li class="p-3 bg-gray-100 rounded">Item 2</li>
  <li class="p-3 bg-gray-100 rounded">Item 3</li>
</ul>`,
        hints: [
          "space-y-4 adds margin-top to all children except first",
          "4 in the scale = 16px",
          "This is cleaner than adding mb-4 to each item"
        ]
      }
    ],
    quiz: [
      {
        question: "What is the base unit of Tailwind's spacing scale?",
        options: ["1px", "0.25rem (4px)", "0.5rem (8px)", "1rem (16px)"],
        correctIndex: 1,
        explanation: "Each unit in Tailwind's spacing scale equals 0.25rem (4px). So p-1 = 4px, p-4 = 16px, etc."
      },
      {
        question: "How do you add horizontal padding of 32px?",
        options: ["ph-8", "px-8", "p-x-8", "padding-x-8"],
        correctIndex: 1,
        explanation: "px-8 adds padding-left and padding-right of 2rem (32px). The 'x' stands for the x-axis (horizontal)."
      },
      {
        question: "Which utility centers a fixed-width element horizontally?",
        options: ["center", "justify-center", "mx-auto", "text-center"],
        correctIndex: 2,
        explanation: "mx-auto sets margin-left and margin-right to 'auto', which centers block elements with a defined width."
      },
      {
        question: "What does 'space-y-4' do?",
        options: [
          "Adds 4px space around the element",
          "Adds 1rem margin-top to all children except first",
          "Creates 4 columns with space between",
          "Adds padding-y of 1rem"
        ],
        correctIndex: 1,
        explanation: "space-y-4 adds margin-top: 1rem to all direct children except the first one, creating consistent vertical spacing."
      }
    ],
    keyTakeaways: [
      "Spacing scale: each unit = 0.25rem (4px)",
      "p- for padding, m- for margin",
      "x/y suffixes for horizontal/vertical",
      "mx-auto centers fixed-width elements",
      "gap and space-y/space-x for child spacing"
    ]
  },

  "flexbox": {
    title: "Flexbox Layout",
    introduction: "Flexbox is the go-to layout method for one-dimensional layouts. Tailwind makes it incredibly easy to create flexible, responsive layouts with intuitive utility classes.",
    learningObjectives: [
      "Create flex containers",
      "Align items horizontally and vertically",
      "Control item distribution",
      "Use flex-grow, flex-shrink, and flex-basis"
    ],
    steps: [
      {
        title: "Creating a Flex Container",
        explanation: "Add 'flex' to any element to make it a flex container. Children become flex items that flow horizontally by default.",
        code: `<!-- Basic flex container -->
<div class="flex">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>

<!-- Vertical with flex-col -->
<div class="flex flex-col">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>`
      },
      {
        title: "Alignment with items-* and justify-*",
        explanation: "Use 'items-*' for cross-axis alignment (vertical in row, horizontal in column) and 'justify-*' for main-axis distribution.",
        code: `<!-- Center everything -->
<div class="flex items-center justify-center h-32">
  Perfectly centered!
</div>

<!-- Space between items -->
<div class="flex items-center justify-between">
  <span>Left</span>
  <span>Right</span>
</div>

<!-- Align to start/end -->
<div class="flex items-start justify-end">
  Top-right aligned
</div>`
      },
      {
        title: "Gap for Spacing",
        explanation: "Use 'gap-*' to add consistent spacing between flex items without margin hacks.",
        code: `<div class="flex gap-4">
  <div>Spaced</div>
  <div>Evenly</div>
  <div>Apart</div>
</div>

<!-- Different horizontal and vertical gaps -->
<div class="flex flex-wrap gap-x-4 gap-y-2">
  <div>Item</div>
  <div>Item</div>
  <div>Item</div>
</div>`
      },
      {
        title: "Flex Grow, Shrink, and Basis",
        explanation: "Control how items grow to fill space, shrink when needed, or have a specific base size.",
        code: `<!-- Item takes remaining space -->
<div class="flex">
  <div class="w-20">Fixed</div>
  <div class="flex-1">Grows to fill remaining space</div>
</div>

<!-- Prevent shrinking -->
<div class="flex">
  <div class="flex-shrink-0 w-48">Won't shrink below 12rem</div>
  <div class="flex-1">Will shrink first</div>
</div>`
      }
    ],
    examples: [
      {
        title: "Navigation Bar",
        description: "Classic header with logo left, nav right",
        code: `<nav class="flex items-center justify-between p-4 bg-white shadow">
  <div class="font-bold text-xl">Logo</div>
  <div class="flex gap-6">
    <a href="#" class="hover:text-blue-500">Home</a>
    <a href="#" class="hover:text-blue-500">About</a>
    <a href="#" class="hover:text-blue-500">Contact</a>
  </div>
</nav>`,
        preview: (
          <nav className="flex items-center justify-between p-4 bg-card shadow-md rounded-lg border border-border">
            <div className="font-bold text-xl text-foreground">Logo</div>
            <div className="flex gap-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Home</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">About</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Contact</a>
            </div>
          </nav>
        ),
      },
      {
        title: "Centered Content",
        description: "Perfect vertical and horizontal centering",
        code: `<div class="flex items-center justify-center h-48 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl">
  <div class="text-white text-2xl font-bold">
    Perfectly Centered
  </div>
</div>`,
        beforePreview: (
          <div className="h-48 bg-muted rounded-xl p-4">
            <div className="text-muted-foreground">Not centered, just top-left</div>
          </div>
        ),
        preview: (
          <div className="flex items-center justify-center h-48 bg-gradient-to-r from-primary to-accent rounded-xl">
            <div className="text-primary-foreground text-2xl font-bold">
              Perfectly Centered
            </div>
          </div>
        ),
      },
      {
        title: "Card with Footer",
        description: "Push footer to bottom using flex-1",
        code: `<div class="flex flex-col h-64 p-4 bg-white rounded-xl shadow">
  <h3 class="font-bold text-lg">Card Title</h3>
  <p class="flex-1 text-gray-600">This content area grows to push the footer down.</p>
  <div class="pt-4 border-t">
    <button class="px-4 py-2 bg-blue-500 text-white rounded">Action</button>
  </div>
</div>`,
        preview: (
          <div className="flex flex-col h-64 p-4 bg-card rounded-xl shadow-md border border-border">
            <h3 className="font-bold text-lg text-foreground">Card Title</h3>
            <p className="flex-1 text-muted-foreground">This content area grows to push the footer down.</p>
            <div className="pt-4 border-t border-border">
              <button className="px-4 py-2 bg-primary text-primary-foreground rounded hover:opacity-90 transition-opacity">Action</button>
            </div>
          </div>
        ),
      },
      {
        title: "Alignment Options Comparison",
        description: "See all justify-content options",
        code: `<!-- justify-start (default) -->
<div class="flex justify-start gap-2 p-2 bg-gray-100">
  <div class="p-2 bg-blue-500">1</div>
  <div class="p-2 bg-blue-500">2</div>
</div>

<!-- justify-center -->
<div class="flex justify-center gap-2 p-2 bg-gray-100">...</div>

<!-- justify-end -->
<div class="flex justify-end gap-2 p-2 bg-gray-100">...</div>

<!-- justify-between -->
<div class="flex justify-between gap-2 p-2 bg-gray-100">...</div>

<!-- justify-around -->
<div class="flex justify-around gap-2 p-2 bg-gray-100">...</div>

<!-- justify-evenly -->
<div class="flex justify-evenly gap-2 p-2 bg-gray-100">...</div>`,
        preview: (
          <div className="space-y-3">
            <div>
              <span className="text-xs text-muted-foreground mb-1 block">justify-start</span>
              <div className="flex justify-start gap-2 p-2 bg-muted rounded">
                <div className="p-2 bg-primary text-primary-foreground rounded text-sm">1</div>
                <div className="p-2 bg-primary text-primary-foreground rounded text-sm">2</div>
              </div>
            </div>
            <div>
              <span className="text-xs text-muted-foreground mb-1 block">justify-center</span>
              <div className="flex justify-center gap-2 p-2 bg-muted rounded">
                <div className="p-2 bg-primary text-primary-foreground rounded text-sm">1</div>
                <div className="p-2 bg-primary text-primary-foreground rounded text-sm">2</div>
              </div>
            </div>
            <div>
              <span className="text-xs text-muted-foreground mb-1 block">justify-between</span>
              <div className="flex justify-between gap-2 p-2 bg-muted rounded">
                <div className="p-2 bg-primary text-primary-foreground rounded text-sm">1</div>
                <div className="p-2 bg-primary text-primary-foreground rounded text-sm">2</div>
              </div>
            </div>
            <div>
              <span className="text-xs text-muted-foreground mb-1 block">justify-evenly</span>
              <div className="flex justify-evenly gap-2 p-2 bg-muted rounded">
                <div className="p-2 bg-primary text-primary-foreground rounded text-sm">1</div>
                <div className="p-2 bg-primary text-primary-foreground rounded text-sm">2</div>
              </div>
            </div>
          </div>
        ),
      }
    ],
    challenges: [
      {
        title: "Build a Social Media Bar",
        description: "Create a horizontal bar with a profile picture on the left, name in the middle (taking remaining space), and a follow button on the right.",
        starterCode: `<div class="">
  <img src="avatar.jpg" alt="Avatar" />
  <span>Username</span>
  <button>Follow</button>
</div>`,
        solution: `<div class="flex items-center gap-3 p-3 bg-white rounded-lg shadow">
  <img class="w-10 h-10 rounded-full" src="avatar.jpg" alt="Avatar" />
  <span class="flex-1 font-medium">Username</span>
  <button class="px-4 py-1 bg-blue-500 text-white rounded-full text-sm">Follow</button>
</div>`,
        hints: [
          "Start with 'flex items-center gap-3'",
          "Add 'flex-1' to the username to make it grow",
          "The button stays fixed size, pushed to the right"
        ]
      },
      {
        title: "Center a Login Form",
        description: "Create a full-height container that centers a login form both vertically and horizontally.",
        starterCode: `<div class="">
  <form class="p-8 bg-white rounded-xl shadow-lg">
    <h2>Login</h2>
    <input type="email" placeholder="Email" />
    <input type="password" placeholder="Password" />
    <button>Sign In</button>
  </form>
</div>`,
        solution: `<div class="flex items-center justify-center min-h-screen bg-gray-100">
  <form class="p-8 bg-white rounded-xl shadow-lg space-y-4 w-80">
    <h2 class="text-2xl font-bold text-center">Login</h2>
    <input type="email" placeholder="Email" class="w-full p-2 border rounded" />
    <input type="password" placeholder="Password" class="w-full p-2 border rounded" />
    <button class="w-full py-2 bg-blue-500 text-white rounded">Sign In</button>
  </form>
</div>`,
        hints: [
          "The outer div needs 'flex items-center justify-center'",
          "Add 'min-h-screen' to make it full viewport height",
          "The form is just a regular box that gets centered"
        ]
      }
    ],
    quiz: [
      {
        question: "Which class creates a flex container?",
        options: ["display-flex", "flex", "flexbox", "flex-container"],
        correctIndex: 1,
        explanation: "The 'flex' class sets display: flex on an element, making it a flex container."
      },
      {
        question: "How do you vertically center items in a flex row?",
        options: ["justify-center", "align-center", "items-center", "vertical-center"],
        correctIndex: 2,
        explanation: "items-center aligns items on the cross-axis (vertical in a row layout)."
      },
      {
        question: "Which class makes a flex item grow to fill available space?",
        options: ["flex-fill", "flex-1", "grow", "expand"],
        correctIndex: 1,
        explanation: "flex-1 is shorthand for flex: 1 1 0%, which allows the item to grow and shrink equally."
      },
      {
        question: "How do you create a vertical flex layout?",
        options: ["flex-vertical", "flex-y", "flex-col", "flex-column"],
        correctIndex: 2,
        explanation: "flex-col sets flex-direction: column, stacking items vertically."
      }
    ],
    keyTakeaways: [
      "flex creates a flex container",
      "flex-col for vertical stacking",
      "items-* for cross-axis alignment",
      "justify-* for main-axis distribution",
      "flex-1 makes items grow to fill space",
      "gap-* for consistent spacing"
    ]
  },

  "grid": {
    title: "CSS Grid Mastery",
    introduction: "CSS Grid is perfect for two-dimensional layouts. Tailwind provides intuitive utilities for creating complex grid structures with minimal code.",
    learningObjectives: [
      "Create grid containers with columns and rows",
      "Span items across multiple cells",
      "Use gap for consistent spacing",
      "Build responsive grid layouts"
    ],
    steps: [
      {
        title: "Basic Grid Setup",
        explanation: "Use 'grid' and 'grid-cols-*' to create a grid with a specific number of columns. Items automatically flow into cells.",
        code: `<!-- 3-column grid -->
<div class="grid grid-cols-3 gap-4">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
  <div>6</div>
</div>`
      },
      {
        title: "Column Spans",
        explanation: "Make items span multiple columns with 'col-span-*'. Great for featured content or varying layouts.",
        code: `<div class="grid grid-cols-3 gap-4">
  <div class="col-span-2">Spans 2 columns</div>
  <div>Normal</div>
  <div>Normal</div>
  <div class="col-span-2">Spans 2 columns</div>
</div>`
      },
      {
        title: "Row Spans",
        explanation: "Similarly, 'row-span-*' makes items span multiple rows.",
        code: `<div class="grid grid-cols-3 grid-rows-2 gap-4">
  <div class="row-span-2">Tall item</div>
  <div>Normal</div>
  <div>Normal</div>
  <div>Normal</div>
  <div>Normal</div>
</div>`
      },
      {
        title: "Auto-fit and Responsive Grids",
        explanation: "Use responsive prefixes to change grid columns at different breakpoints.",
        code: `<!-- Responsive grid: 1 col on mobile, 2 on tablet, 4 on desktop -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
  <div>Card 1</div>
  <div>Card 2</div>
  <div>Card 3</div>
  <div>Card 4</div>
</div>`
      }
    ],
    examples: [
      {
        title: "Basic Grid Layout",
        description: "A simple 3-column grid with items",
        code: `<div class="grid grid-cols-3 gap-4">
  <div class="p-4 bg-blue-500 text-white rounded">1</div>
  <div class="p-4 bg-blue-500 text-white rounded">2</div>
  <div class="p-4 bg-blue-500 text-white rounded">3</div>
  <div class="p-4 bg-blue-500 text-white rounded">4</div>
  <div class="p-4 bg-blue-500 text-white rounded">5</div>
  <div class="p-4 bg-blue-500 text-white rounded">6</div>
</div>`,
        preview: (
          <div className="grid grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map(n => (
              <div key={n} className="p-4 bg-primary text-primary-foreground rounded text-center font-bold">{n}</div>
            ))}
          </div>
        ),
      },
      {
        title: "Dashboard Layout",
        description: "Complex layout with spanning items",
        code: `<div class="grid grid-cols-4 grid-rows-3 gap-4 h-64">
  <div class="col-span-2 row-span-2 bg-blue-500 rounded p-4">Main Chart</div>
  <div class="bg-green-500 rounded p-4">Stat 1</div>
  <div class="bg-yellow-500 rounded p-4">Stat 2</div>
  <div class="bg-purple-500 rounded p-4">Stat 3</div>
  <div class="bg-pink-500 rounded p-4">Stat 4</div>
  <div class="col-span-4 bg-gray-500 rounded p-4">Footer</div>
</div>`,
        preview: (
          <div className="grid grid-cols-4 grid-rows-3 gap-2 h-48">
            <div className="col-span-2 row-span-2 bg-primary rounded p-3 flex items-center justify-center text-primary-foreground font-medium text-sm">Main Chart</div>
            <div className="bg-green-500 rounded p-2 flex items-center justify-center text-white text-xs">Stat 1</div>
            <div className="bg-yellow-500 rounded p-2 flex items-center justify-center text-white text-xs">Stat 2</div>
            <div className="bg-purple-500 rounded p-2 flex items-center justify-center text-white text-xs">Stat 3</div>
            <div className="bg-pink-500 rounded p-2 flex items-center justify-center text-white text-xs">Stat 4</div>
            <div className="col-span-4 bg-muted rounded p-2 flex items-center justify-center text-muted-foreground text-sm">Footer</div>
          </div>
        ),
      },
      {
        title: "Image Gallery",
        description: "Masonry-style grid with varying spans",
        code: `<div class="grid grid-cols-3 gap-2">
  <div class="row-span-2 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg aspect-square"></div>
  <div class="bg-blue-500 rounded-lg aspect-square"></div>
  <div class="bg-green-500 rounded-lg aspect-square"></div>
  <div class="col-span-2 bg-yellow-500 rounded-lg aspect-video"></div>
</div>`,
        preview: (
          <div className="grid grid-cols-3 gap-2">
            <div className="row-span-2 bg-gradient-to-br from-primary to-accent rounded-lg"></div>
            <div className="bg-blue-500 rounded-lg aspect-square"></div>
            <div className="bg-green-500 rounded-lg aspect-square"></div>
            <div className="col-span-2 bg-yellow-500 rounded-lg aspect-video"></div>
          </div>
        ),
      },
      {
        title: "Responsive Card Grid",
        description: "Grid that adapts to screen size",
        code: `<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
  <div class="p-4 bg-white rounded-lg shadow">Card 1</div>
  <div class="p-4 bg-white rounded-lg shadow">Card 2</div>
  <div class="p-4 bg-white rounded-lg shadow">Card 3</div>
  <div class="p-4 bg-white rounded-lg shadow">Card 4</div>
  <div class="p-4 bg-white rounded-lg shadow">Card 5</div>
  <div class="p-4 bg-white rounded-lg shadow">Card 6</div>
</div>`,
        preview: (
          <div className="grid grid-cols-3 gap-3">
            {[1, 2, 3, 4, 5, 6].map(n => (
              <div key={n} className="p-3 bg-card rounded-lg shadow-sm border border-border text-foreground text-sm">Card {n}</div>
            ))}
          </div>
        ),
      }
    ],
    challenges: [
      {
        title: "Build a Photo Grid",
        description: "Create a 3-column grid where the first item spans 2 rows and 2 columns (featured photo), and the rest are regular 1x1 items.",
        starterCode: `<div class="">
  <div>Featured</div>
  <div>Photo 2</div>
  <div>Photo 3</div>
  <div>Photo 4</div>
  <div>Photo 5</div>
</div>`,
        solution: `<div class="grid grid-cols-3 gap-2">
  <div class="col-span-2 row-span-2 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg p-4 text-white font-bold">Featured</div>
  <div class="bg-gray-200 rounded-lg p-4">Photo 2</div>
  <div class="bg-gray-200 rounded-lg p-4">Photo 3</div>
  <div class="bg-gray-200 rounded-lg p-4">Photo 4</div>
  <div class="bg-gray-200 rounded-lg p-4">Photo 5</div>
</div>`,
        hints: [
          "Start with 'grid grid-cols-3 gap-2'",
          "Add 'col-span-2 row-span-2' to the featured item",
          "Other items flow automatically into remaining cells"
        ]
      },
      {
        title: "Create a Pricing Table",
        description: "Build a 3-column pricing layout where the middle card (featured) is taller using row spans.",
        starterCode: `<div class="">
  <div>Basic</div>
  <div>Pro (featured)</div>
  <div>Enterprise</div>
</div>`,
        solution: `<div class="grid grid-cols-3 gap-4 items-center">
  <div class="p-6 bg-white rounded-xl shadow text-center">
    <h3 class="font-bold text-lg">Basic</h3>
    <p class="text-3xl font-bold my-4">$9</p>
    <p class="text-gray-600">For individuals</p>
  </div>
  <div class="p-8 bg-gradient-to-b from-blue-500 to-blue-600 rounded-xl shadow-xl text-white text-center transform scale-105">
    <h3 class="font-bold text-lg">Pro</h3>
    <p class="text-4xl font-bold my-4">$29</p>
    <p class="text-blue-100">Most popular</p>
  </div>
  <div class="p-6 bg-white rounded-xl shadow text-center">
    <h3 class="font-bold text-lg">Enterprise</h3>
    <p class="text-3xl font-bold my-4">$99</p>
    <p class="text-gray-600">For teams</p>
  </div>
</div>`,
        hints: [
          "Use 'grid grid-cols-3 gap-4 items-center'",
          "Make the middle card stand out with 'scale-105' and more padding",
          "items-center keeps cards vertically aligned at center"
        ]
      }
    ],
    quiz: [
      {
        question: "Which class creates a 4-column grid?",
        options: ["grid-4", "cols-4", "grid-cols-4", "columns-4"],
        correctIndex: 2,
        explanation: "grid-cols-4 sets grid-template-columns to create 4 equal columns."
      },
      {
        question: "How do you make an item span 2 columns?",
        options: ["span-2", "col-span-2", "colspan-2", "grid-span-2"],
        correctIndex: 1,
        explanation: "col-span-2 makes a grid item span across 2 columns."
      },
      {
        question: "What's the difference between grid and flex?",
        options: [
          "Grid is for older browsers, flex is modern",
          "Grid is 2D (rows & columns), flex is 1D (row or column)",
          "There is no difference",
          "Flex is for grids, grid is for flexing"
        ],
        correctIndex: 1,
        explanation: "Grid excels at 2D layouts (controlling both rows and columns), while Flexbox is best for 1D layouts (a single row or column)."
      }
    ],
    keyTakeaways: [
      "grid + grid-cols-* creates columns",
      "col-span-* and row-span-* for spanning",
      "gap-* for consistent spacing",
      "Use responsive prefixes for adaptive grids",
      "Grid is best for 2D layouts, flex for 1D"
    ]
  },

  "typography": {
    title: "Typography & Text",
    introduction: "Typography is crucial for readability and visual hierarchy. Tailwind provides comprehensive utilities for font sizes, weights, colors, line heights, and more.",
    learningObjectives: [
      "Control font sizes and weights",
      "Set line heights and letter spacing",
      "Style text with colors and decorations",
      "Create readable, beautiful text"
    ],
    steps: [
      {
        title: "Font Size Scale",
        explanation: "Tailwind's font size scale ranges from text-xs to text-9xl. Each size includes a sensible default line-height.",
        code: `text-xs    → 0.75rem (12px)
text-sm    → 0.875rem (14px)
text-base  → 1rem (16px) - default
text-lg    → 1.125rem (18px)
text-xl    → 1.25rem (20px)
text-2xl   → 1.5rem (24px)
text-3xl   → 1.875rem (30px)
text-4xl   → 2.25rem (36px)
text-5xl   → 3rem (48px)`
      },
      {
        title: "Font Weight",
        explanation: "Control the boldness of text with font-* utilities.",
        code: `font-thin       → 100
font-light      → 300
font-normal     → 400
font-medium     → 500
font-semibold   → 600
font-bold       → 700
font-extrabold  → 800
font-black      → 900`
      },
      {
        title: "Line Height & Letter Spacing",
        explanation: "Fine-tune readability with leading-* (line-height) and tracking-* (letter-spacing).",
        code: `<!-- Line height -->
leading-none    → 1
leading-tight   → 1.25
leading-normal  → 1.5
leading-relaxed → 1.625
leading-loose   → 2

<!-- Letter spacing -->
tracking-tighter → -0.05em
tracking-tight   → -0.025em
tracking-normal  → 0
tracking-wide    → 0.025em
tracking-wider   → 0.05em
tracking-widest  → 0.1em`
      },
      {
        title: "Text Alignment & Decoration",
        explanation: "Align text and add decorations like underline or line-through.",
        code: `<!-- Alignment -->
text-left, text-center, text-right, text-justify

<!-- Decoration -->
underline, line-through, no-underline

<!-- Decoration style -->
decoration-solid, decoration-dashed, decoration-dotted, decoration-wavy

<!-- Transform -->
uppercase, lowercase, capitalize, normal-case`
      }
    ],
    examples: [
      {
        title: "Font Size Showcase",
        description: "Visual comparison of font sizes",
        code: `<div class="space-y-2">
  <p class="text-xs">text-xs (12px)</p>
  <p class="text-sm">text-sm (14px)</p>
  <p class="text-base">text-base (16px)</p>
  <p class="text-lg">text-lg (18px)</p>
  <p class="text-xl">text-xl (20px)</p>
  <p class="text-2xl">text-2xl (24px)</p>
  <p class="text-3xl">text-3xl (30px)</p>
</div>`,
        preview: (
          <div className="space-y-1">
            <p className="text-xs text-foreground">text-xs (12px)</p>
            <p className="text-sm text-foreground">text-sm (14px)</p>
            <p className="text-base text-foreground">text-base (16px)</p>
            <p className="text-lg text-foreground">text-lg (18px)</p>
            <p className="text-xl text-foreground">text-xl (20px)</p>
            <p className="text-2xl text-foreground">text-2xl (24px)</p>
            <p className="text-3xl text-foreground">text-3xl (30px)</p>
          </div>
        ),
      },
      {
        title: "Font Weights",
        description: "All available font weights",
        code: `<div class="space-y-1 text-lg">
  <p class="font-thin">font-thin (100)</p>
  <p class="font-light">font-light (300)</p>
  <p class="font-normal">font-normal (400)</p>
  <p class="font-medium">font-medium (500)</p>
  <p class="font-semibold">font-semibold (600)</p>
  <p class="font-bold">font-bold (700)</p>
  <p class="font-extrabold">font-extrabold (800)</p>
  <p class="font-black">font-black (900)</p>
</div>`,
        preview: (
          <div className="space-y-1 text-lg text-foreground">
            <p className="font-thin">font-thin (100)</p>
            <p className="font-light">font-light (300)</p>
            <p className="font-normal">font-normal (400)</p>
            <p className="font-medium">font-medium (500)</p>
            <p className="font-semibold">font-semibold (600)</p>
            <p className="font-bold">font-bold (700)</p>
            <p className="font-extrabold">font-extrabold (800)</p>
          </div>
        ),
      },
      {
        title: "Article Typography",
        description: "Proper hierarchy for readable content",
        code: `<article class="max-w-prose">
  <h1 class="text-4xl font-bold mb-4">Article Title</h1>
  <p class="text-lg text-gray-600 mb-6 leading-relaxed">
    This is the introduction paragraph with larger text and relaxed line height for better readability.
  </p>
  <h2 class="text-2xl font-semibold mb-3">Section Heading</h2>
  <p class="text-base text-gray-700 leading-relaxed mb-4">
    Body text should be comfortable to read with proper line height. The max-w-prose utility limits width to ~65 characters for optimal reading.
  </p>
</article>`,
        preview: (
          <article className="max-w-prose">
            <h1 className="text-3xl font-bold mb-3 text-foreground">Article Title</h1>
            <p className="text-base text-muted-foreground mb-4 leading-relaxed">
              This is the introduction with larger text and relaxed line height.
            </p>
            <h2 className="text-xl font-semibold mb-2 text-foreground">Section Heading</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Body text with proper line height. The max-w-prose limits width for optimal reading.
            </p>
          </article>
        ),
      },
      {
        title: "Text Decorations",
        description: "Underlines, strikethroughs, and styles",
        code: `<div class="space-y-2">
  <p class="underline">Underlined text</p>
  <p class="underline decoration-wavy decoration-red-500">Wavy red underline</p>
  <p class="underline decoration-dashed">Dashed underline</p>
  <p class="line-through text-gray-400">Strikethrough text</p>
  <p class="uppercase tracking-widest text-sm">Uppercase with wide tracking</p>
</div>`,
        preview: (
          <div className="space-y-2 text-foreground">
            <p className="underline">Underlined text</p>
            <p className="underline decoration-wavy decoration-accent">Wavy colored underline</p>
            <p className="underline decoration-dashed">Dashed underline</p>
            <p className="line-through text-muted-foreground">Strikethrough text</p>
            <p className="uppercase tracking-widest text-sm">Uppercase with wide tracking</p>
          </div>
        ),
      }
    ],
    challenges: [
      {
        title: "Style a Blog Post Header",
        description: "Create a blog post header with a large title, author name, and publication date.",
        starterCode: `<header class="">
  <h1>Understanding CSS Grid</h1>
  <p>By John Doe</p>
  <p>December 15, 2024</p>
</header>`,
        solution: `<header class="mb-8">
  <h1 class="text-4xl font-bold text-gray-900 mb-2">Understanding CSS Grid</h1>
  <p class="text-lg text-gray-600">By <span class="font-medium">John Doe</span></p>
  <p class="text-sm text-gray-400 uppercase tracking-wide">December 15, 2024</p>
</header>`,
        hints: [
          "Use text-4xl font-bold for the title",
          "The author can be text-lg with a font-medium span",
          "Date looks good with text-sm uppercase tracking-wide"
        ]
      },
      {
        title: "Create a Pull Quote",
        description: "Style a pull quote that stands out in an article—large italic text with decorative borders.",
        starterCode: `<blockquote class="">
  Design is not just what it looks like. Design is how it works.
  <cite>Steve Jobs</cite>
</blockquote>`,
        solution: `<blockquote class="border-l-4 border-blue-500 pl-6 my-8">
  <p class="text-2xl italic text-gray-700 leading-relaxed mb-2">
    "Design is not just what it looks like. Design is how it works."
  </p>
  <cite class="text-sm text-gray-500 not-italic">— Steve Jobs</cite>
</blockquote>`,
        hints: [
          "Use border-l-4 for a thick left border",
          "Large italic text: text-2xl italic",
          "leading-relaxed improves readability for quotes"
        ]
      }
    ],
    quiz: [
      {
        question: "What is the default font size in Tailwind?",
        options: ["text-sm (14px)", "text-base (16px)", "text-md (15px)", "text-lg (18px)"],
        correctIndex: 1,
        explanation: "text-base is 1rem (16px), which is the browser default and Tailwind's base size."
      },
      {
        question: "Which class makes text bold (700 weight)?",
        options: ["text-bold", "font-bold", "weight-bold", "bold"],
        correctIndex: 1,
        explanation: "font-bold sets font-weight: 700. All font weight classes start with 'font-'."
      },
      {
        question: "How do you add extra space between letters?",
        options: ["spacing-wide", "letter-wide", "tracking-wide", "kerning-wide"],
        correctIndex: 2,
        explanation: "tracking-* controls letter-spacing. 'tracking' is the typographic term for letter spacing."
      },
      {
        question: "What does 'leading-relaxed' do?",
        options: [
          "Makes text italic",
          "Increases line height to 1.625",
          "Adds margin below paragraphs",
          "Makes text wider"
        ],
        correctIndex: 1,
        explanation: "leading-relaxed sets line-height to 1.625, giving text more breathing room between lines."
      }
    ],
    keyTakeaways: [
      "text-* for font sizes, font-* for weights",
      "leading-* for line height, tracking-* for letter spacing",
      "max-w-prose limits width for readable text",
      "Use hierarchy: larger/bolder for headings, smaller/lighter for meta info"
    ]
  },

  "colors": {
    title: "Colors & Gradients",
    introduction: "Tailwind comes with a carefully crafted color palette. Learn to use background colors, text colors, gradients, and opacity to create vibrant designs.",
    learningObjectives: [
      "Use Tailwind's color palette",
      "Apply background and text colors",
      "Create gradients with from/via/to",
      "Control opacity and transparency"
    ],
    steps: [
      {
        title: "The Color Palette",
        explanation: "Tailwind includes colors like slate, gray, red, orange, yellow, green, blue, indigo, purple, and pink. Each has shades from 50 (lightest) to 950 (darkest).",
        code: `<!-- Color scale example (blue) -->
blue-50   → Lightest (almost white)
blue-100
blue-200
blue-300
blue-400
blue-500  → Base color
blue-600
blue-700
blue-800
blue-900
blue-950  → Darkest (almost black)`
      },
      {
        title: "Background & Text Colors",
        explanation: "Use bg-* for backgrounds and text-* for text color. The pattern is always: prefix-color-shade.",
        code: `<!-- Backgrounds -->
<div class="bg-blue-500">Blue background</div>
<div class="bg-red-100">Light red background</div>

<!-- Text colors -->
<p class="text-gray-900">Dark text</p>
<p class="text-blue-600">Blue text</p>

<!-- Combining -->
<div class="bg-blue-500 text-white">White text on blue</div>`
      },
      {
        title: "Gradients",
        explanation: "Create gradients with bg-gradient-to-* direction, then define colors with from-*, via-* (optional), and to-*.",
        code: `<!-- Simple two-color gradient -->
<div class="bg-gradient-to-r from-blue-500 to-purple-500">
  Left to right gradient
</div>

<!-- Three-color gradient with via -->
<div class="bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500">
  Diagonal with middle color
</div>

<!-- Directions -->
to-t   → top
to-tr  → top-right
to-r   → right
to-br  → bottom-right (diagonal)
to-b   → bottom
to-bl  → bottom-left
to-l   → left
to-tl  → top-left`
      },
      {
        title: "Opacity",
        explanation: "Control transparency with opacity-* or color opacity like bg-black/50 (black at 50% opacity).",
        code: `<!-- Element opacity -->
<div class="opacity-50">50% transparent</div>
<div class="opacity-75">75% opaque</div>

<!-- Color opacity (modern syntax) -->
<div class="bg-black/50">Black at 50% opacity</div>
<div class="bg-white/75">White at 75% opacity</div>
<div class="text-blue-500/80">Blue text at 80% opacity</div>`
      }
    ],
    examples: [
      {
        title: "Color Palette Sampler",
        description: "See how color shades progress",
        code: `<div class="flex gap-1">
  <div class="w-8 h-8 bg-blue-100 rounded"></div>
  <div class="w-8 h-8 bg-blue-200 rounded"></div>
  <div class="w-8 h-8 bg-blue-300 rounded"></div>
  <div class="w-8 h-8 bg-blue-400 rounded"></div>
  <div class="w-8 h-8 bg-blue-500 rounded"></div>
  <div class="w-8 h-8 bg-blue-600 rounded"></div>
  <div class="w-8 h-8 bg-blue-700 rounded"></div>
  <div class="w-8 h-8 bg-blue-800 rounded"></div>
  <div class="w-8 h-8 bg-blue-900 rounded"></div>
</div>`,
        preview: (
          <div className="space-y-2">
            <div className="flex gap-1">
              {[100, 200, 300, 400, 500, 600, 700, 800, 900].map(shade => (
                <div key={shade} className={`w-6 h-6 rounded`} style={{ backgroundColor: `hsl(${200 + (shade/100) * 5}, 80%, ${100 - shade/15}%)` }}></div>
              ))}
            </div>
            <div className="flex gap-1">
              {[100, 200, 300, 400, 500, 600, 700, 800, 900].map(shade => (
                <div key={shade} className={`w-6 h-6 rounded`} style={{ backgroundColor: `hsl(${340 + (shade/100) * 2}, 80%, ${100 - shade/15}%)` }}></div>
              ))}
            </div>
          </div>
        ),
      },
      {
        title: "Gradient Buttons",
        description: "Eye-catching gradient button styles",
        code: `<div class="flex gap-3">
  <button class="px-6 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg">
    Ocean
  </button>
  <button class="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg">
    Sunset
  </button>
  <button class="px-6 py-2 bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-lg">
    Forest
  </button>
</div>`,
        preview: (
          <div className="flex flex-wrap gap-3">
            <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg text-sm font-medium">Ocean</button>
            <button className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg text-sm font-medium">Sunset</button>
            <button className="px-4 py-2 bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-lg text-sm font-medium">Forest</button>
          </div>
        ),
      },
      {
        title: "Glass Morphism Card",
        description: "Translucent card with backdrop blur",
        code: `<div class="relative p-8 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500">
  <div class="bg-white/20 backdrop-blur-md rounded-lg p-6 border border-white/30">
    <h3 class="text-white font-bold text-xl mb-2">Glass Card</h3>
    <p class="text-white/80">Frosted glass effect using opacity and backdrop-blur.</p>
  </div>
</div>`,
        preview: (
          <div className="relative p-6 rounded-xl bg-gradient-to-br from-primary to-accent">
            <div className="bg-white/20 backdrop-blur-md rounded-lg p-4 border border-white/30">
              <h3 className="text-white font-bold text-lg mb-1">Glass Card</h3>
              <p className="text-white/80 text-sm">Frosted glass effect using opacity and backdrop-blur.</p>
            </div>
          </div>
        ),
      },
      {
        title: "Status Indicators",
        description: "Semantic colors for different states",
        code: `<div class="space-y-2">
  <div class="flex items-center gap-2 p-3 bg-green-100 border border-green-200 rounded-lg">
    <div class="w-3 h-3 bg-green-500 rounded-full"></div>
    <span class="text-green-800">Success message</span>
  </div>
  <div class="flex items-center gap-2 p-3 bg-yellow-100 border border-yellow-200 rounded-lg">
    <div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
    <span class="text-yellow-800">Warning message</span>
  </div>
  <div class="flex items-center gap-2 p-3 bg-red-100 border border-red-200 rounded-lg">
    <div class="w-3 h-3 bg-red-500 rounded-full"></div>
    <span class="text-red-800">Error message</span>
  </div>
</div>`,
        preview: (
          <div className="space-y-2">
            <div className="flex items-center gap-2 p-2 bg-green-100 border border-green-200 rounded-lg">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-green-800 text-sm">Success</span>
            </div>
            <div className="flex items-center gap-2 p-2 bg-yellow-100 border border-yellow-200 rounded-lg">
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              <span className="text-yellow-800 text-sm">Warning</span>
            </div>
            <div className="flex items-center gap-2 p-2 bg-red-100 border border-red-200 rounded-lg">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              <span className="text-red-800 text-sm">Error</span>
            </div>
          </div>
        ),
      }
    ],
    challenges: [
      {
        title: "Create a Sunset Gradient Hero",
        description: "Build a hero section with a warm sunset gradient background and white text.",
        starterCode: `<section class="">
  <h1>Welcome</h1>
  <p>Discover something amazing</p>
</section>`,
        solution: `<section class="bg-gradient-to-br from-orange-400 via-pink-500 to-purple-600 p-12 rounded-xl">
  <h1 class="text-4xl font-bold text-white mb-4">Welcome</h1>
  <p class="text-xl text-white/90">Discover something amazing</p>
</section>`,
        hints: [
          "Use bg-gradient-to-br for diagonal gradient",
          "Try from-orange-400 via-pink-500 to-purple-600",
          "White text: text-white, slightly transparent: text-white/90"
        ]
      },
      {
        title: "Build a Tag System",
        description: "Create colorful tags for different categories using various background colors.",
        starterCode: `<div class="">
  <span>Technology</span>
  <span>Design</span>
  <span>Business</span>
  <span>Health</span>
</div>`,
        solution: `<div class="flex gap-2 flex-wrap">
  <span class="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Technology</span>
  <span class="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">Design</span>
  <span class="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">Business</span>
  <span class="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium">Health</span>
</div>`,
        hints: [
          "Use light backgrounds (100) with darker text (700)",
          "rounded-full makes pill shapes",
          "Consistent padding: px-3 py-1"
        ]
      }
    ],
    quiz: [
      {
        question: "What shade is the 'base' color in Tailwind's scale?",
        options: ["100", "300", "500", "700"],
        correctIndex: 2,
        explanation: "Shade 500 is considered the base/primary shade. Lower numbers are lighter, higher are darker."
      },
      {
        question: "How do you create a gradient from left to right?",
        options: [
          "gradient-left-right",
          "bg-gradient-to-r",
          "bg-lr-gradient",
          "gradient-x"
        ],
        correctIndex: 1,
        explanation: "bg-gradient-to-r creates a gradient going 'to right'. The 'r' stands for right."
      },
      {
        question: "What does 'bg-black/50' mean?",
        options: [
          "Black background divided by 50",
          "Black background at 50% opacity",
          "50% black, 50% white",
          "Black with 50px blur"
        ],
        correctIndex: 1,
        explanation: "The /50 syntax sets the opacity to 50%. It works with any color and opacity value."
      }
    ],
    keyTakeaways: [
      "Colors range from 50 (lightest) to 950 (darkest)",
      "bg-* for backgrounds, text-* for text colors",
      "Gradients: bg-gradient-to-* with from-*/via-*/to-*",
      "Opacity: opacity-* or color/opacity syntax"
    ]
  },

  "responsive": {
    title: "Responsive Design",
    introduction: "Tailwind's mobile-first responsive design makes it effortless to create layouts that work on any screen size. Prefix any utility with a breakpoint to apply it conditionally.",
    learningObjectives: [
      "Understand mobile-first design",
      "Use responsive breakpoint prefixes",
      "Create adaptive layouts",
      "Hide/show elements at different sizes"
    ],
    steps: [
      {
        title: "Mobile-First Approach",
        explanation: "Tailwind is mobile-first: utilities without prefixes apply to all screen sizes. Prefixed utilities apply at that breakpoint AND UP.",
        code: `<!-- Mobile first thinking -->
<div class="text-sm md:text-base lg:text-lg">
  - On mobile (default): text-sm
  - On medium screens and up (md:): text-base
  - On large screens and up (lg:): text-lg
</div>`
      },
      {
        title: "Breakpoint Reference",
        explanation: "Tailwind's default breakpoints cover common device sizes.",
        code: `sm:   640px  and up (landscape phones, small tablets)
md:   768px  and up (tablets)
lg:   1024px and up (laptops)
xl:   1280px and up (desktops)
2xl:  1536px and up (large desktops)`
      },
      {
        title: "Responsive Patterns",
        explanation: "Common patterns for responsive layouts.",
        code: `<!-- Stack on mobile, row on larger screens -->
<div class="flex flex-col md:flex-row gap-4">
  <div>Item 1</div>
  <div>Item 2</div>
</div>

<!-- 1 column mobile, 2 tablet, 4 desktop -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
  ...
</div>

<!-- Full width mobile, fixed width desktop -->
<div class="w-full md:w-96">
  Content
</div>`
      },
      {
        title: "Hiding Elements",
        explanation: "Use hidden and responsive display utilities to show/hide elements at different breakpoints.",
        code: `<!-- Only visible on mobile -->
<div class="block md:hidden">Mobile only</div>

<!-- Hidden on mobile, visible on md+ -->
<div class="hidden md:block">Desktop only</div>

<!-- Only visible between md and lg -->
<div class="hidden md:block lg:hidden">Tablet only</div>`
      }
    ],
    examples: [
      {
        title: "Responsive Navigation",
        description: "Navigation that transforms across breakpoints",
        code: `<nav class="flex items-center justify-between p-4 bg-white shadow">
  <div class="font-bold text-xl">Logo</div>
  
  <!-- Mobile menu button (hidden on md+) -->
  <button class="md:hidden p-2">
    <svg class="w-6 h-6">...</svg>
  </button>
  
  <!-- Desktop nav (hidden on mobile) -->
  <div class="hidden md:flex gap-6">
    <a href="#">Home</a>
    <a href="#">About</a>
    <a href="#">Contact</a>
  </div>
</nav>`,
        preview: (
          <nav className="flex items-center justify-between p-3 bg-card shadow-md rounded-lg border border-border">
            <div className="font-bold text-lg text-foreground">Logo</div>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary text-sm">Home</a>
              <a href="#" className="text-muted-foreground hover:text-primary text-sm">About</a>
              <a href="#" className="text-muted-foreground hover:text-primary text-sm">Contact</a>
            </div>
          </nav>
        ),
      },
      {
        title: "Responsive Card Grid",
        description: "Grid that adapts from 1 to 4 columns",
        code: `<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
  <div class="p-4 bg-white rounded-lg shadow">Card 1</div>
  <div class="p-4 bg-white rounded-lg shadow">Card 2</div>
  <div class="p-4 bg-white rounded-lg shadow">Card 3</div>
  <div class="p-4 bg-white rounded-lg shadow">Card 4</div>
</div>`,
        preview: (
          <div className="grid grid-cols-2 gap-2">
            {[1, 2, 3, 4].map(n => (
              <div key={n} className="p-3 bg-card rounded-lg shadow-sm border border-border text-foreground text-sm">Card {n}</div>
            ))}
          </div>
        ),
      },
      {
        title: "Responsive Padding",
        description: "Padding that increases with screen size",
        code: `<div class="p-4 md:p-8 lg:p-12 xl:p-16 bg-blue-500 text-white rounded-xl">
  <h2 class="text-lg md:text-2xl lg:text-3xl font-bold">
    Responsive Padding
  </h2>
  <p class="mt-2 text-sm md:text-base">
    Notice how padding increases at each breakpoint.
  </p>
</div>`,
        preview: (
          <div className="p-4 bg-primary text-primary-foreground rounded-xl">
            <h2 className="text-lg font-bold">Responsive Padding</h2>
            <p className="mt-2 text-sm opacity-90">Padding increases at each breakpoint.</p>
          </div>
        ),
      },
      {
        title: "Stack to Row Layout",
        description: "Common pattern for form or content layouts",
        code: `<div class="flex flex-col md:flex-row gap-4">
  <div class="md:w-1/3">
    <h3 class="font-bold">Sidebar</h3>
    <p class="text-gray-600">Navigation or filters here</p>
  </div>
  <div class="md:w-2/3">
    <h3 class="font-bold">Main Content</h3>
    <p class="text-gray-600">Primary content area</p>
  </div>
</div>`,
        beforePreview: (
          <div className="space-y-4">
            <div className="p-3 bg-muted rounded-lg">
              <h3 className="font-bold text-sm text-foreground">Sidebar</h3>
              <p className="text-xs text-muted-foreground">Stacked above</p>
            </div>
            <div className="p-3 bg-primary/10 rounded-lg">
              <h3 className="font-bold text-sm text-foreground">Main Content</h3>
              <p className="text-xs text-muted-foreground">Stacked below</p>
            </div>
          </div>
        ),
        preview: (
          <div className="flex gap-4">
            <div className="w-1/3 p-3 bg-muted rounded-lg">
              <h3 className="font-bold text-sm text-foreground">Sidebar</h3>
              <p className="text-xs text-muted-foreground">Side by side</p>
            </div>
            <div className="w-2/3 p-3 bg-primary/10 rounded-lg">
              <h3 className="font-bold text-sm text-foreground">Main Content</h3>
              <p className="text-xs text-muted-foreground">Takes more space</p>
            </div>
          </div>
        ),
      }
    ],
    challenges: [
      {
        title: "Build a Responsive Hero",
        description: "Create a hero section that stacks content vertically on mobile but shows side-by-side on desktop.",
        starterCode: `<section class="">
  <div>
    <h1>Welcome to our site</h1>
    <p>Discover amazing things</p>
    <button>Get Started</button>
  </div>
  <div>
    <img src="hero.jpg" alt="Hero" />
  </div>
</section>`,
        solution: `<section class="flex flex-col md:flex-row items-center gap-8 p-8">
  <div class="md:w-1/2 text-center md:text-left">
    <h1 class="text-3xl md:text-5xl font-bold mb-4">Welcome to our site</h1>
    <p class="text-lg text-gray-600 mb-6">Discover amazing things</p>
    <button class="px-6 py-3 bg-blue-500 text-white rounded-lg">Get Started</button>
  </div>
  <div class="md:w-1/2">
    <img src="hero.jpg" alt="Hero" class="rounded-xl shadow-xl" />
  </div>
</section>`,
        hints: [
          "Use 'flex flex-col md:flex-row' for the layout",
          "Add 'md:w-1/2' to split space on desktop",
          "text-center md:text-left aligns text differently per breakpoint"
        ]
      },
      {
        title: "Create Breakpoint Indicators",
        description: "Build a debug tool that shows which breakpoint is currently active.",
        starterCode: `<div class="">
  <span>Mobile</span>
  <span>Tablet</span>
  <span>Desktop</span>
</div>`,
        solution: `<div class="fixed bottom-4 right-4 p-2 bg-black text-white text-sm rounded">
  <span class="sm:hidden">📱 xs</span>
  <span class="hidden sm:inline md:hidden">📱 sm</span>
  <span class="hidden md:inline lg:hidden">📟 md</span>
  <span class="hidden lg:inline xl:hidden">💻 lg</span>
  <span class="hidden xl:inline 2xl:hidden">🖥️ xl</span>
  <span class="hidden 2xl:inline">🖥️ 2xl</span>
</div>`,
        hints: [
          "Use 'hidden' combined with responsive prefixes",
          "Each span should only show at one breakpoint range",
          "Pattern: 'hidden md:inline lg:hidden' shows only on md"
        ]
      }
    ],
    quiz: [
      {
        question: "What does 'mobile-first' mean in Tailwind?",
        options: [
          "You must design mobile layouts first",
          "Unprefixed utilities apply to all sizes, prefixed ones apply at that breakpoint and UP",
          "Mobile styles override desktop styles",
          "Tailwind only works on mobile devices"
        ],
        correctIndex: 1,
        explanation: "Mobile-first means base styles apply to all sizes, and you add breakpoint prefixes to modify styles for larger screens."
      },
      {
        question: "At what width does the 'md:' breakpoint apply?",
        options: ["480px", "640px", "768px", "1024px"],
        correctIndex: 2,
        explanation: "The md breakpoint applies at 768px and up, which typically targets tablets."
      },
      {
        question: "How do you show an element only on desktop (lg and up)?",
        options: [
          "lg:visible",
          "hidden lg:block",
          "desktop:show",
          "lg:display"
        ],
        correctIndex: 1,
        explanation: "hidden lg:block hides by default and shows as block at lg breakpoint and up."
      }
    ],
    keyTakeaways: [
      "Tailwind is mobile-first: no prefix = all sizes",
      "Breakpoints: sm (640), md (768), lg (1024), xl (1280), 2xl (1536)",
      "Prefixed utilities apply at that size AND UP",
      "Common pattern: flex-col md:flex-row for stacking to row"
    ]
  },

  "hover-states": {
    title: "Hover & Focus States",
    introduction: "Interactive states make your UI feel alive. Tailwind makes it easy to style hover, focus, active, and even group hover states with simple prefixes.",
    learningObjectives: [
      "Apply hover and focus styles",
      "Use active and disabled states",
      "Implement group and peer modifiers",
      "Create interactive components"
    ],
    steps: [
      {
        title: "Basic State Modifiers",
        explanation: "Prefix any utility with a state modifier to apply it conditionally.",
        code: `<!-- Hover -->
<button class="bg-blue-500 hover:bg-blue-600">
  Darkens on hover
</button>

<!-- Focus -->
<input class="border focus:border-blue-500 focus:ring-2">

<!-- Active (while clicking) -->
<button class="bg-blue-500 active:bg-blue-700">
  Darker while pressed
</button>

<!-- Disabled -->
<button class="bg-blue-500 disabled:bg-gray-300 disabled:cursor-not-allowed" disabled>
  Disabled
</button>`
      },
      {
        title: "Focus Rings",
        explanation: "Tailwind provides accessible focus rings for keyboard navigation.",
        code: `<!-- Default focus ring -->
<button class="focus:ring-2 focus:ring-blue-500">
  Has focus ring
</button>

<!-- Focus visible (only for keyboard) -->
<button class="focus-visible:ring-2 focus-visible:ring-blue-500">
  Ring only on keyboard focus
</button>

<!-- Ring offset for better visibility -->
<button class="focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
  With offset
</button>`
      },
      {
        title: "Group Hover",
        explanation: "Style child elements when a parent is hovered using the 'group' class and 'group-hover:' prefix.",
        code: `<div class="group p-4 bg-white rounded-lg hover:bg-blue-500 transition">
  <h3 class="text-gray-900 group-hover:text-white">Card Title</h3>
  <p class="text-gray-600 group-hover:text-blue-100">Card description</p>
</div>`
      },
      {
        title: "Peer Modifier",
        explanation: "Style an element based on a sibling's state using 'peer' and 'peer-*:' modifiers.",
        code: `<div>
  <input type="checkbox" class="peer" id="toggle" />
  <label class="peer-checked:text-blue-500" for="toggle">
    Turns blue when checked
  </label>
</div>

<!-- Form validation example -->
<input class="peer" type="email" required />
<p class="hidden peer-invalid:block text-red-500">
  Please enter a valid email
</p>`
      }
    ],
    examples: [
      {
        title: "Interactive Button",
        description: "Button with multiple state styles",
        code: `<button class="
  px-6 py-3 
  bg-blue-500 text-white font-medium rounded-lg
  hover:bg-blue-600 
  active:bg-blue-700 
  focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
  disabled:bg-gray-300 disabled:cursor-not-allowed
  transition-colors
">
  Click Me
</button>`,
        preview: (
          <button className="px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:opacity-90 active:opacity-80 focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all">
            Click Me
          </button>
        ),
      },
      {
        title: "Group Hover Card",
        description: "Card where hovering changes multiple children",
        code: `<div class="group p-6 bg-white rounded-xl shadow-md hover:shadow-xl hover:bg-blue-500 transition-all duration-300 cursor-pointer">
  <div class="w-12 h-12 bg-blue-100 group-hover:bg-white/20 rounded-lg mb-4 flex items-center justify-center transition-colors">
    <svg class="w-6 h-6 text-blue-500 group-hover:text-white transition-colors">...</svg>
  </div>
  <h3 class="font-bold text-gray-900 group-hover:text-white transition-colors">Feature Title</h3>
  <p class="text-gray-600 group-hover:text-blue-100 transition-colors">Description text here</p>
</div>`,
        preview: (
          <div className="group p-4 bg-card rounded-xl shadow-md hover:shadow-xl hover:bg-primary border border-border transition-all duration-300 cursor-pointer">
            <div className="w-10 h-10 bg-primary/10 group-hover:bg-white/20 rounded-lg mb-3 flex items-center justify-center transition-colors">
              <Sparkles className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
            </div>
            <h3 className="font-bold text-foreground group-hover:text-white transition-colors">Feature Title</h3>
            <p className="text-sm text-muted-foreground group-hover:text-white/80 transition-colors">Description text here</p>
          </div>
        ),
      },
      {
        title: "Interactive Form Input",
        description: "Input with focus and validation states",
        code: `<div class="space-y-1">
  <label class="text-sm font-medium text-gray-700">Email</label>
  <input 
    type="email" 
    class="
      w-full px-4 py-2 
      border border-gray-300 rounded-lg
      focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20
      invalid:border-red-500 invalid:focus:ring-red-500/20
      transition-colors
    " 
    placeholder="you@example.com"
  />
</div>`,
        preview: (
          <div className="space-y-1">
            <label className="text-sm font-medium text-foreground">Email</label>
            <input 
              type="email" 
              className="w-full px-3 py-2 border border-border rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 bg-background text-foreground transition-colors" 
              placeholder="you@example.com"
            />
          </div>
        ),
      },
      {
        title: "Hover Reveal",
        description: "Show content on hover",
        code: `<div class="group relative overflow-hidden rounded-xl">
  <img src="photo.jpg" class="w-full h-48 object-cover" />
  <div class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
    <button class="px-4 py-2 bg-white text-black rounded-lg transform translate-y-4 group-hover:translate-y-0 transition-transform">
      View Details
    </button>
  </div>
</div>`,
        preview: (
          <div className="group relative overflow-hidden rounded-xl w-48">
            <div className="w-full h-32 bg-gradient-to-br from-primary to-accent"></div>
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <button className="px-3 py-1.5 bg-white text-black rounded-lg transform translate-y-4 group-hover:translate-y-0 transition-transform text-sm">
                View Details
              </button>
            </div>
          </div>
        ),
      }
    ],
    challenges: [
      {
        title: "Create a Like Button",
        description: "Build a like button that changes color on hover and shows a filled heart when active.",
        starterCode: `<button class="">
  ❤️ Like
</button>`,
        solution: `<button class="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-full hover:border-red-500 hover:text-red-500 active:bg-red-50 transition-colors">
  <span class="text-gray-400 hover:text-red-500 transition-colors">❤️</span>
  <span>Like</span>
</button>`,
        hints: [
          "Use 'hover:border-red-500 hover:text-red-500'",
          "Add 'active:bg-red-50' for click feedback",
          "Don't forget transition-colors for smooth effect"
        ]
      },
      {
        title: "Build a Menu Item with Nested Hover",
        description: "Create a navigation item where hovering shows a dropdown indicator and changes colors.",
        starterCode: `<a href="#" class="">
  Products
  <span>▼</span>
</a>`,
        solution: `<a href="#" class="group flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-blue-500 hover:bg-blue-50 rounded-lg transition-colors">
  <span>Products</span>
  <span class="text-xs opacity-0 group-hover:opacity-100 transition-opacity">▼</span>
</a>`,
        hints: [
          "Add 'group' to the parent anchor",
          "Use 'group-hover:opacity-100' on the arrow",
          "The arrow starts with 'opacity-0'"
        ]
      }
    ],
    quiz: [
      {
        question: "How do you apply a style only when an element is hovered?",
        options: [
          ":hover then the class",
          "hover:class-name",
          "onHover='class'",
          "hover(class-name)"
        ],
        correctIndex: 1,
        explanation: "Tailwind uses the prefix pattern: hover:class-name. For example, hover:bg-blue-500."
      },
      {
        question: "What does the 'group' class enable?",
        options: [
          "Groups elements visually",
          "Allows styling children based on parent hover state",
          "Creates a flexbox group",
          "Combines multiple classes"
        ],
        correctIndex: 1,
        explanation: "The 'group' class on a parent allows you to use 'group-hover:' on children to style them when the parent is hovered."
      },
      {
        question: "Which modifier is best for keyboard accessibility?",
        options: ["hover:", "focus:", "focus-visible:", "active:"],
        correctIndex: 2,
        explanation: "focus-visible: only applies when the element is focused via keyboard, not mouse click, making it ideal for accessible focus indicators."
      }
    ],
    keyTakeaways: [
      "State prefixes: hover:, focus:, active:, disabled:",
      "group + group-hover: for parent-child interactions",
      "peer + peer-* for sibling interactions",
      "focus-visible: for keyboard-only focus styles",
      "Always add transition-* for smooth effects"
    ]
  },

  "transitions": {
    title: "Transitions & Transforms",
    introduction: "Smooth transitions and transforms bring your UI to life. Learn to animate changes and manipulate elements with scale, rotate, translate, and skew.",
    learningObjectives: [
      "Add smooth transitions to state changes",
      "Use transform utilities (scale, rotate, translate)",
      "Control animation timing and duration",
      "Combine transforms for complex effects"
    ],
    steps: [
      {
        title: "Basic Transitions",
        explanation: "Add transition utilities to smoothly animate property changes.",
        code: `<!-- Transition all properties -->
<button class="transition hover:bg-blue-600">
  Smooth background change
</button>

<!-- Transition specific properties -->
<button class="transition-colors hover:bg-blue-600">Colors only</button>
<button class="transition-transform hover:scale-105">Transform only</button>
<button class="transition-opacity hover:opacity-75">Opacity only</button>
<button class="transition-shadow hover:shadow-lg">Shadow only</button>

<!-- Transition none -->
<button class="transition-none hover:bg-blue-600">No transition</button>`
      },
      {
        title: "Duration & Timing",
        explanation: "Control how long and how the transition happens.",
        code: `<!-- Duration -->
duration-75    → 75ms
duration-100   → 100ms
duration-150   → 150ms (default)
duration-200   → 200ms
duration-300   → 300ms
duration-500   → 500ms
duration-700   → 700ms
duration-1000  → 1000ms

<!-- Timing functions -->
ease-linear      → linear
ease-in          → ease-in (slow start)
ease-out         → ease-out (slow end)
ease-in-out      → ease-in-out (slow both)

<!-- Example -->
<div class="transition-all duration-300 ease-out hover:scale-105">
  Smooth 300ms scale with ease-out
</div>`
      },
      {
        title: "Transform Utilities",
        explanation: "Manipulate elements with scale, rotate, translate, and skew.",
        code: `<!-- Scale -->
scale-75     → 75% size
scale-100    → 100% (normal)
scale-105    → 105% size
scale-110    → 110% size
scale-125    → 125% size
scale-150    → 150% size

<!-- Rotate -->
rotate-0, rotate-45, rotate-90, rotate-180
-rotate-45 (negative rotation)

<!-- Translate -->
translate-x-4  → move right 1rem
-translate-x-4 → move left 1rem
translate-y-4  → move down 1rem

<!-- Skew -->
skew-x-6, skew-y-6, -skew-x-6`
      },
      {
        title: "Combining Transforms",
        explanation: "Apply multiple transforms to the same element.",
        code: `<div class="hover:scale-105 hover:rotate-3 hover:-translate-y-1 transition-transform duration-300">
  Scales, rotates, and lifts on hover
</div>`
      }
    ],
    examples: [
      {
        title: "Lift Card on Hover",
        description: "Card that lifts and adds shadow on hover",
        code: `<div class="p-6 bg-white rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
  <h3 class="font-bold">Hover Me</h3>
  <p class="text-gray-600">I lift up smoothly!</p>
</div>`,
        preview: (
          <div className="p-4 bg-card rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-border cursor-pointer">
            <h3 className="font-bold text-foreground">Hover Me</h3>
            <p className="text-sm text-muted-foreground">I lift up smoothly!</p>
          </div>
        ),
      },
      {
        title: "Rotate Icon on Hover",
        description: "Icon that spins when parent is hovered",
        code: `<button class="group flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg">
  <span>Settings</span>
  <svg class="w-4 h-4 group-hover:rotate-180 transition-transform duration-300">
    ⚙️
  </svg>
</button>`,
        preview: (
          <button className="group flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg">
            <span>Settings</span>
            <span className="group-hover:rotate-180 transition-transform duration-300">⚙️</span>
          </button>
        ),
      },
      {
        title: "Scale Button",
        description: "Button that grows slightly on hover",
        code: `<button class="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-lg hover:scale-105 active:scale-95 transition-transform duration-200">
  Scale Effect
</button>`,
        preview: (
          <button className="px-6 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground font-bold rounded-lg hover:scale-105 active:scale-95 transition-transform duration-200">
            Scale Effect
          </button>
        ),
      },
      {
        title: "Slide-in Animation",
        description: "Element that slides in from below on hover",
        code: `<div class="relative overflow-hidden bg-blue-500 text-white p-8 rounded-xl group">
  <h3 class="font-bold text-xl mb-2">Card Title</h3>
  <p class="text-blue-100">Some description text</p>
  
  <div class="absolute bottom-0 left-0 right-0 p-4 bg-blue-600 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
    <button class="w-full py-2 bg-white text-blue-600 rounded-lg font-medium">
      Learn More
    </button>
  </div>
</div>`,
        preview: (
          <div className="relative overflow-hidden bg-primary text-primary-foreground p-6 rounded-xl group cursor-pointer h-36">
            <h3 className="font-bold text-lg mb-1">Card Title</h3>
            <p className="text-sm opacity-90">Some description</p>
            
            <div className="absolute bottom-0 left-0 right-0 p-3 bg-primary/80 backdrop-blur transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <button className="w-full py-1.5 bg-white text-primary rounded-lg text-sm font-medium">
                Learn More
              </button>
            </div>
          </div>
        ),
      }
    ],
    challenges: [
      {
        title: "Create a Flip Card",
        description: "Build a card that rotates to reveal back content on hover (hint: use rotate-y-180 with backface-hidden).",
        starterCode: `<div class="">
  <div>Front</div>
  <div>Back</div>
</div>`,
        solution: `<div class="group [perspective:1000px] w-48 h-32">
  <div class="relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
    <div class="absolute inset-0 [backface-visibility:hidden] bg-blue-500 text-white rounded-lg flex items-center justify-center">
      Front
    </div>
    <div class="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] bg-purple-500 text-white rounded-lg flex items-center justify-center">
      Back
    </div>
  </div>
</div>`,
        hints: [
          "Use arbitrary values with [] for 3D transforms",
          "The container needs [perspective:1000px]",
          "Both faces need [backface-visibility:hidden]"
        ]
      },
      {
        title: "Animated Menu Icon",
        description: "Create a hamburger icon that transforms into an X when clicked (focus on the hover state for demo).",
        starterCode: `<button class="">
  <span></span>
  <span></span>
  <span></span>
</button>`,
        solution: `<button class="group flex flex-col gap-1 p-2">
  <span class="w-6 h-0.5 bg-gray-800 group-hover:translate-y-1.5 group-hover:rotate-45 transition-all duration-300 origin-center"></span>
  <span class="w-6 h-0.5 bg-gray-800 group-hover:opacity-0 transition-opacity duration-300"></span>
  <span class="w-6 h-0.5 bg-gray-800 group-hover:-translate-y-1.5 group-hover:-rotate-45 transition-all duration-300 origin-center"></span>
</button>`,
        hints: [
          "Use translate-y to move lines together",
          "Add rotate-45 and -rotate-45 to form X",
          "Middle line can fade with opacity-0"
        ]
      }
    ],
    quiz: [
      {
        question: "What does 'transition-all' do?",
        options: [
          "Animates all elements on the page",
          "Applies transition to all CSS properties",
          "Creates infinite animation",
          "Transitions all children"
        ],
        correctIndex: 1,
        explanation: "transition-all applies smooth transitions to all CSS properties that change, making any state change animate."
      },
      {
        question: "Which duration is the default for transitions?",
        options: ["100ms", "150ms", "200ms", "300ms"],
        correctIndex: 1,
        explanation: "Tailwind's default transition duration is 150ms, which provides a quick but noticeable animation."
      },
      {
        question: "How do you make an element 110% of its size on hover?",
        options: [
          "hover:size-110",
          "hover:scale-110",
          "hover:grow-110",
          "hover:zoom-110"
        ],
        correctIndex: 1,
        explanation: "scale-110 sets transform: scale(1.1), making the element 110% of its original size."
      }
    ],
    keyTakeaways: [
      "transition + duration-* for smooth animations",
      "scale-*, rotate-*, translate-* for transforms",
      "Combine with hover: for interactive effects",
      "Use ease-* for natural-feeling animations",
      "transition-transform is more performant than transition-all"
    ]
  },

  "dark-mode": {
    title: "Dark Mode",
    introduction: "Dark mode is a user favorite. Tailwind makes it simple to add dark mode variants to any utility, creating beautiful themes that work automatically with system preferences.",
    learningObjectives: [
      "Enable dark mode in Tailwind",
      "Apply dark: variant styles",
      "Toggle between light and dark themes",
      "Create cohesive dark color schemes"
    ],
    steps: [
      {
        title: "Dark Mode Setup",
        explanation: "Tailwind supports dark mode through the dark: variant. Configure it in tailwind.config.js to use 'media' (system preference) or 'class' (manual toggle).",
        code: `// tailwind.config.js
module.exports = {
  darkMode: 'class', // or 'media'
  // ...
}

// 'media': Uses OS preference (prefers-color-scheme)
// 'class': Requires adding 'dark' class to <html> or parent`
      },
      {
        title: "Using the dark: Variant",
        explanation: "Prefix any utility with dark: to apply it only in dark mode.",
        code: `<div class="bg-white dark:bg-gray-900">
  <h1 class="text-gray-900 dark:text-white">
    Title
  </h1>
  <p class="text-gray-600 dark:text-gray-300">
    Description text
  </p>
</div>`
      },
      {
        title: "Dark Mode Color Patterns",
        explanation: "Common patterns for effective dark mode design.",
        code: `<!-- Backgrounds -->
bg-white          → dark:bg-gray-900 (or dark:bg-slate-900)
bg-gray-50        → dark:bg-gray-800
bg-gray-100       → dark:bg-gray-700

<!-- Text -->
text-gray-900     → dark:text-white (or dark:text-gray-100)
text-gray-600     → dark:text-gray-300
text-gray-400     → dark:text-gray-500

<!-- Borders -->
border-gray-200   → dark:border-gray-700

<!-- Shadows (often subtle or none in dark) -->
shadow-lg         → dark:shadow-none (or use colored shadows)`
      },
      {
        title: "Toggle Theme with JavaScript",
        explanation: "When using class-based dark mode, toggle the 'dark' class on the html element.",
        code: `// Toggle dark mode
function toggleDarkMode() {
  document.documentElement.classList.toggle('dark');
}

// Check system preference and apply
if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.documentElement.classList.add('dark');
}

// Store preference in localStorage
localStorage.setItem('theme', 'dark'); // or 'light'`
      }
    ],
    examples: [
      {
        title: "Dark Mode Card",
        description: "Card that adapts to dark mode",
        code: `<div class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg dark:shadow-none border border-gray-200 dark:border-gray-700">
  <h3 class="text-gray-900 dark:text-white font-bold text-lg mb-2">Card Title</h3>
  <p class="text-gray-600 dark:text-gray-300">This card looks great in both light and dark mode.</p>
  <button class="mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg">Action</button>
</div>`,
        preview: (
          <div className="bg-card p-4 rounded-xl shadow-lg border border-border">
            <h3 className="text-foreground font-bold text-lg mb-2">Card Title</h3>
            <p className="text-muted-foreground text-sm">This card adapts to your theme.</p>
            <button className="mt-3 px-4 py-2 bg-primary hover:opacity-90 text-primary-foreground rounded-lg text-sm">Action</button>
          </div>
        ),
      },
      {
        title: "Theme Toggle Button",
        description: "Button to switch between themes",
        code: `<button 
  onclick="document.documentElement.classList.toggle('dark')"
  class="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700"
>
  <span class="dark:hidden">🌙</span>
  <span class="hidden dark:inline">☀️</span>
</button>`,
        preview: (
          <button className="p-2 rounded-lg bg-muted text-foreground hover:bg-muted/80">
            <span>🌙</span>
          </button>
        ),
      },
      {
        title: "Dark Mode Form",
        description: "Form inputs styled for both modes",
        code: `<form class="space-y-4 p-6 bg-white dark:bg-gray-900 rounded-xl">
  <div>
    <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
      Email
    </label>
    <input 
      type="email"
      class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
             bg-white dark:bg-gray-800 
             text-gray-900 dark:text-white
             focus:border-blue-500 dark:focus:border-blue-400"
    />
  </div>
  <button class="w-full py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg">
    Submit
  </button>
</form>`,
        preview: (
          <form className="space-y-3 p-4 bg-card rounded-xl border border-border">
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">Email</label>
              <input 
                type="email"
                className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:border-primary"
                placeholder="you@example.com"
              />
            </div>
            <button className="w-full py-2 bg-primary hover:opacity-90 text-primary-foreground rounded-lg text-sm">Submit</button>
          </form>
        ),
      },
      {
        title: "Dark Mode Status Badges",
        description: "Badges that work in both themes",
        code: `<div class="flex gap-2">
  <span class="px-2 py-1 text-xs font-medium rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400">
    Active
  </span>
  <span class="px-2 py-1 text-xs font-medium rounded-full bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400">
    Pending
  </span>
  <span class="px-2 py-1 text-xs font-medium rounded-full bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400">
    Inactive
  </span>
</div>`,
        preview: (
          <div className="flex gap-2">
            <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-700">Active</span>
            <span className="px-2 py-1 text-xs font-medium rounded-full bg-yellow-100 text-yellow-700">Pending</span>
            <span className="px-2 py-1 text-xs font-medium rounded-full bg-red-100 text-red-700">Inactive</span>
          </div>
        ),
      }
    ],
    challenges: [
      {
        title: "Dark Mode Navigation",
        description: "Create a navigation bar that looks great in both light and dark mode.",
        starterCode: `<nav class="">
  <div>Logo</div>
  <div>
    <a href="#">Home</a>
    <a href="#">About</a>
    <a href="#">Contact</a>
  </div>
</nav>`,
        solution: `<nav class="flex items-center justify-between p-4 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
  <div class="font-bold text-xl text-gray-900 dark:text-white">Logo</div>
  <div class="flex gap-6">
    <a href="#" class="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">Home</a>
    <a href="#" class="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">About</a>
    <a href="#" class="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">Contact</a>
  </div>
</nav>`,
        hints: [
          "Background: bg-white dark:bg-gray-900",
          "Border: border-gray-200 dark:border-gray-700",
          "Text: text-gray-600 dark:text-gray-300"
        ]
      },
      {
        title: "Create a Theme Toggle",
        description: "Build a toggle switch that shows sun/moon icons for theme switching.",
        starterCode: `<button class="">
  Toggle Theme
</button>`,
        solution: `<button class="relative w-14 h-7 bg-gray-300 dark:bg-gray-600 rounded-full p-1 transition-colors">
  <div class="absolute left-1 top-1 w-5 h-5 bg-white rounded-full shadow-md transform dark:translate-x-7 transition-transform flex items-center justify-center text-xs">
    <span class="dark:hidden">☀️</span>
    <span class="hidden dark:inline">🌙</span>
  </div>
</button>`,
        hints: [
          "Use a relative container with absolute positioned circle",
          "dark:translate-x-* moves the toggle",
          "Icons can use dark:hidden and hidden dark:inline"
        ]
      }
    ],
    quiz: [
      {
        question: "What are the two dark mode strategies in Tailwind?",
        options: [
          "'auto' and 'manual'",
          "'media' and 'class'",
          "'system' and 'toggle'",
          "'light' and 'dark'"
        ],
        correctIndex: 1,
        explanation: "'media' uses the operating system's color scheme preference, while 'class' requires manually adding the 'dark' class to enable dark mode."
      },
      {
        question: "How do you apply a style only in dark mode?",
        options: [
          "mode-dark:class-name",
          "dark:class-name",
          "night:class-name",
          "theme-dark:class-name"
        ],
        correctIndex: 1,
        explanation: "The dark: prefix applies the utility only when dark mode is active. Example: dark:bg-gray-900."
      },
      {
        question: "Which is a good dark mode background for a card?",
        options: [
          "dark:bg-black",
          "dark:bg-white",
          "dark:bg-gray-800",
          "dark:bg-gray-50"
        ],
        correctIndex: 2,
        explanation: "dark:bg-gray-800 provides enough contrast without being pure black, which can be harsh. Pure black (gray-900/950) is often reserved for the main background."
      }
    ],
    keyTakeaways: [
      "Configure darkMode in tailwind.config.js",
      "Use dark: prefix for dark mode styles",
      "Pattern: light color → darker equivalent",
      "Consider reducing shadows in dark mode",
      "Test both modes for proper contrast"
    ]
  },

  "custom-themes": {
    title: "Custom Themes",
    introduction: "Extend Tailwind beyond its defaults by customizing colors, fonts, spacing, and more. Create a design system that matches your brand perfectly.",
    learningObjectives: [
      "Customize the Tailwind config",
      "Add custom colors and fonts",
      "Extend vs replace default values",
      "Create reusable design tokens"
    ],
    steps: [
      {
        title: "The Config File",
        explanation: "tailwind.config.js is where all customization happens. You can extend or override the default theme.",
        code: `// tailwind.config.js
module.exports = {
  theme: {
    // Override entirely (replaces defaults)
    colors: {
      primary: '#3B82F6',
    },
    
    // Extend (adds to defaults)
    extend: {
      colors: {
        brand: '#FF5733',
      },
      fontFamily: {
        display: ['Poppins', 'sans-serif'],
      },
    },
  },
}`
      },
      {
        title: "Custom Colors",
        explanation: "Add your brand colors with full shade scales or simple single values.",
        code: `// Simple color
extend: {
  colors: {
    brand: '#FF5733',
  }
}
// Usage: bg-brand, text-brand

// Full scale
extend: {
  colors: {
    brand: {
      50: '#fff7ed',
      100: '#ffedd5',
      200: '#fed7aa',
      300: '#fdba74',
      400: '#fb923c',
      500: '#f97316', // Base
      600: '#ea580c',
      700: '#c2410c',
      800: '#9a3412',
      900: '#7c2d12',
    }
  }
}
// Usage: bg-brand-500, text-brand-200`
      },
      {
        title: "Custom Fonts",
        explanation: "Add custom font families and control font weights.",
        code: `// tailwind.config.js
extend: {
  fontFamily: {
    sans: ['Inter', 'system-ui', 'sans-serif'],
    display: ['Cal Sans', 'sans-serif'],
    mono: ['JetBrains Mono', 'monospace'],
  },
}

// Usage in HTML
<h1 class="font-display text-4xl">Display Heading</h1>
<p class="font-sans">Body text with Inter</p>
<code class="font-mono">Code block</code>`
      },
      {
        title: "Custom Spacing & Sizing",
        explanation: "Extend the spacing scale for custom values.",
        code: `extend: {
  spacing: {
    '18': '4.5rem',   // 72px
    '88': '22rem',    // 352px
    '128': '32rem',   // 512px
  },
  maxWidth: {
    '8xl': '88rem',   // 1408px
    'prose-wide': '75ch',
  },
  borderRadius: {
    '4xl': '2rem',
  },
}`
      }
    ],
    examples: [
      {
        title: "Brand Color System",
        description: "Custom brand colors in action",
        code: `<!-- Using custom brand colors -->
<button class="bg-brand-500 hover:bg-brand-600 text-white px-6 py-3 rounded-lg">
  Brand Button
</button>

<div class="bg-brand-50 border border-brand-200 text-brand-800 p-4 rounded-lg">
  Brand alert message
</div>`,
        preview: (
          <div className="space-y-3">
            <button className="bg-primary hover:opacity-90 text-primary-foreground px-4 py-2 rounded-lg">Brand Button</button>
            <div className="bg-primary/10 border border-primary/20 text-foreground p-3 rounded-lg text-sm">
              Brand alert message
            </div>
          </div>
        ),
      },
      {
        title: "Custom Font Pairing",
        description: "Display + body font combination",
        code: `<article class="max-w-prose">
  <h1 class="font-display text-4xl font-bold mb-4">
    Beautiful Typography
  </h1>
  <p class="font-sans text-lg leading-relaxed">
    Body text uses a comfortable reading font with relaxed line height.
  </p>
  <pre class="font-mono text-sm bg-gray-100 p-4 rounded mt-4">
    const code = "uses monospace";
  </pre>
</article>`,
        preview: (
          <article className="max-w-prose">
            <h1 className="font-display text-2xl font-bold mb-2 text-foreground">Beautiful Typography</h1>
            <p className="font-sans text-base leading-relaxed text-muted-foreground">Body text with comfortable reading settings.</p>
            <pre className="font-mono text-xs bg-muted p-3 rounded mt-3 text-foreground">const code = "monospace";</pre>
          </article>
        ),
      },
      {
        title: "CSS Variables for Theming",
        description: "Using CSS custom properties for dynamic themes",
        code: `/* In your CSS */
:root {
  --color-primary: 59 130 246; /* RGB values */
  --color-accent: 236 72 153;
}

.dark {
  --color-primary: 96 165 250;
  --color-accent: 244 114 182;
}

/* tailwind.config.js */
colors: {
  primary: 'rgb(var(--color-primary) / <alpha-value>)',
  accent: 'rgb(var(--color-accent) / <alpha-value>)',
}

/* Usage with opacity */
<div class="bg-primary/50">50% opacity primary</div>`,
        preview: (
          <div className="space-y-2">
            <div className="p-3 bg-primary text-primary-foreground rounded-lg text-sm">Full primary</div>
            <div className="p-3 bg-primary/50 text-foreground rounded-lg text-sm">50% opacity primary</div>
            <div className="p-3 bg-accent text-white rounded-lg text-sm">Accent color</div>
          </div>
        ),
      },
      {
        title: "Custom Animation",
        description: "Adding custom keyframe animations",
        code: `// tailwind.config.js
extend: {
  keyframes: {
    wiggle: {
      '0%, 100%': { transform: 'rotate(-3deg)' },
      '50%': { transform: 'rotate(3deg)' },
    },
    fadeIn: {
      '0%': { opacity: '0', transform: 'translateY(10px)' },
      '100%': { opacity: '1', transform: 'translateY(0)' },
    },
  },
  animation: {
    wiggle: 'wiggle 1s ease-in-out infinite',
    fadeIn: 'fadeIn 0.5s ease-out',
  },
}

// Usage
<div class="animate-wiggle">I wiggle!</div>
<div class="animate-fadeIn">I fade in!</div>`,
        preview: (
          <div className="flex gap-4">
            <div className="p-3 bg-primary text-primary-foreground rounded-lg animate-pulse">Pulsing</div>
            <div className="p-3 bg-accent text-white rounded-lg animate-bounce">Bouncing</div>
          </div>
        ),
      }
    ],
    challenges: [
      {
        title: "Create a Custom Color Palette",
        description: "Define a complete brand color scale (50-900) in the Tailwind config and use it in a component.",
        starterCode: `// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        // Add your brand color here
      }
    }
  }
}`,
        solution: `// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        ocean: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        }
      }
    }
  }
}

// Usage
<button class="bg-ocean-500 hover:bg-ocean-600 text-white px-4 py-2 rounded">
  Ocean Button
</button>`,
        hints: [
          "Put colors inside theme.extend.colors",
          "Use an object with number keys for shades",
          "500 is typically the 'base' shade",
          "Lighter shades (50-200) for backgrounds, darker (700-900) for text"
        ]
      },
      {
        title: "Add Custom Fonts",
        description: "Configure a display font for headings and a body font for paragraphs.",
        starterCode: `// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        // Add fonts here
      }
    }
  }
}`,
        solution: `// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        body: ['Source Sans Pro', 'sans-serif'],
      }
    }
  }
}

// Don't forget to import fonts in CSS or HTML!
// Usage
<h1 class="font-display text-4xl">Elegant Heading</h1>
<p class="font-body text-lg">Readable body text.</p>`,
        hints: [
          "fontFamily takes an array of font names",
          "First font is primary, rest are fallbacks",
          "Remember to load the font via Google Fonts or similar",
          "Use font-display and font-body in your HTML"
        ]
      }
    ],
    quiz: [
      {
        question: "What's the difference between 'theme' and 'theme.extend' in config?",
        options: [
          "They are the same",
          "'theme' replaces defaults, 'extend' adds to them",
          "'theme' is for colors, 'extend' is for fonts",
          "'extend' only works in production"
        ],
        correctIndex: 1,
        explanation: "Using 'theme' directly replaces Tailwind's defaults entirely. Using 'theme.extend' adds your customizations while keeping the defaults."
      },
      {
        question: "How do you add a custom color called 'brand'?",
        options: [
          "colors.brand = '#FF5733'",
          "theme: { colors: { brand: '#FF5733' }}",
          "theme: { extend: { colors: { brand: '#FF5733' }}}",
          "brand: { color: '#FF5733' }"
        ],
        correctIndex: 2,
        explanation: "To add a new color while keeping defaults, use theme.extend.colors. You can then use it as bg-brand, text-brand, etc."
      },
      {
        question: "Which is the best way to support opacity with custom colors?",
        options: [
          "Just use hex codes",
          "Use RGB with CSS variables and <alpha-value>",
          "Opacity doesn't work with custom colors",
          "Define separate classes for each opacity"
        ],
        correctIndex: 1,
        explanation: "Using CSS variables with RGB values and <alpha-value> placeholder lets you use opacity modifiers like bg-primary/50."
      }
    ],
    keyTakeaways: [
      "extend adds to defaults, direct theme replaces them",
      "Create full color scales (50-900) for flexibility",
      "Use CSS variables for theme-able designs",
      "Custom fonts go in fontFamily",
      "Custom animations need keyframes + animation config"
    ]
  },

  "animations-advanced": {
    title: "Custom Animations",
    introduction: "Go beyond built-in animations with custom keyframes, complex timing, and scroll-based effects. Create memorable, delightful interactions.",
    learningObjectives: [
      "Create custom keyframe animations",
      "Control animation timing and delays",
      "Build scroll-triggered animations",
      "Combine animations for complex effects"
    ],
    steps: [
      {
        title: "Defining Custom Keyframes",
        explanation: "Add custom animations in tailwind.config.js with keyframes and animation properties.",
        code: `// tailwind.config.js
extend: {
  keyframes: {
    float: {
      '0%, 100%': { transform: 'translateY(0)' },
      '50%': { transform: 'translateY(-10px)' },
    },
    shimmer: {
      '0%': { backgroundPosition: '-200% 0' },
      '100%': { backgroundPosition: '200% 0' },
    },
    slideInRight: {
      '0%': { transform: 'translateX(100%)', opacity: '0' },
      '100%': { transform: 'translateX(0)', opacity: '1' },
    },
  },
  animation: {
    float: 'float 3s ease-in-out infinite',
    shimmer: 'shimmer 2s linear infinite',
    'slide-in-right': 'slideInRight 0.5s ease-out',
  },
}`
      },
      {
        title: "Animation Properties",
        explanation: "The animation shorthand format: name duration timing-function delay iteration-count direction fill-mode",
        code: `// Animation shorthand breakdown
animation: {
  // name | duration | timing | infinite
  bounce: 'bounce 1s ease-in-out infinite',
  
  // name | duration | timing | delay | iterations
  'fade-in-slow': 'fadeIn 1s ease-out 0.5s 1',
  
  // With fill mode (forwards keeps end state)
  'slide-up': 'slideUp 0.5s ease-out forwards',
}

// Arbitrary values in HTML
<div class="animate-[wiggle_1s_ease-in-out_infinite]">
  Inline animation definition
</div>`
      },
      {
        title: "Staggered Animations",
        explanation: "Create staggered effects with animation-delay utilities.",
        code: `<!-- Built-in delay utilities -->
<div class="animate-fade-in delay-0">First</div>
<div class="animate-fade-in delay-75">Second</div>
<div class="animate-fade-in delay-150">Third</div>
<div class="animate-fade-in delay-300">Fourth</div>

<!-- Or use custom delays -->
<div class="animate-fade-in" style="animation-delay: 0ms">First</div>
<div class="animate-fade-in" style="animation-delay: 100ms">Second</div>
<div class="animate-fade-in" style="animation-delay: 200ms">Third</div>`
      },
      {
        title: "Scroll-Based Animations",
        explanation: "Use Intersection Observer or CSS scroll-driven animations for scroll effects.",
        code: `// React example with Intersection Observer
function useInView(ref) {
  const [isInView, setIsInView] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);
  
  return isInView;
}

// Usage
<div className={\`transition-all duration-700 \${ 
  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
}\`}>
  Animates when scrolled into view
</div>`
      }
    ],
    examples: [
      {
        title: "Floating Elements",
        description: "Gentle floating animation for decorative elements",
        code: `<div class="relative h-32">
  <div class="absolute top-0 left-1/4 w-8 h-8 bg-blue-500 rounded-full animate-float"></div>
  <div class="absolute top-4 left-1/2 w-6 h-6 bg-purple-500 rounded-full animate-float animation-delay-300"></div>
  <div class="absolute top-2 left-3/4 w-10 h-10 bg-pink-500 rounded-full animate-float animation-delay-700"></div>
</div>`,
        preview: (
          <div className="relative h-24">
            <div className="absolute top-0 left-1/4 w-6 h-6 bg-primary rounded-full animate-bounce"></div>
            <div className="absolute top-4 left-1/2 w-5 h-5 bg-accent rounded-full animate-bounce" style={{ animationDelay: '200ms' }}></div>
            <div className="absolute top-2 left-3/4 w-8 h-8 bg-primary/50 rounded-full animate-bounce" style={{ animationDelay: '400ms' }}></div>
          </div>
        ),
      },
      {
        title: "Skeleton Loading",
        description: "Shimmer effect for loading states",
        code: `<div class="space-y-3 p-4 bg-white rounded-lg">
  <div class="h-4 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded animate-shimmer bg-[length:200%_100%]"></div>
  <div class="h-4 w-3/4 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded animate-shimmer bg-[length:200%_100%]"></div>
  <div class="h-4 w-1/2 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded animate-shimmer bg-[length:200%_100%]"></div>
</div>`,
        preview: (
          <div className="space-y-2 p-3 bg-card rounded-lg border border-border">
            <div className="h-3 bg-muted rounded animate-pulse"></div>
            <div className="h-3 w-3/4 bg-muted rounded animate-pulse"></div>
            <div className="h-3 w-1/2 bg-muted rounded animate-pulse"></div>
          </div>
        ),
      },
      {
        title: "Staggered List Animation",
        description: "Items that animate in sequence",
        code: `<ul class="space-y-2">
  <li class="opacity-0 animate-slide-in-right" style="animation-delay: 0ms; animation-fill-mode: forwards">Item 1</li>
  <li class="opacity-0 animate-slide-in-right" style="animation-delay: 100ms; animation-fill-mode: forwards">Item 2</li>
  <li class="opacity-0 animate-slide-in-right" style="animation-delay: 200ms; animation-fill-mode: forwards">Item 3</li>
  <li class="opacity-0 animate-slide-in-right" style="animation-delay: 300ms; animation-fill-mode: forwards">Item 4</li>
</ul>`,
        preview: (
          <ul className="space-y-2">
            {[1, 2, 3, 4].map((n, i) => (
              <li key={n} className="p-2 bg-card border border-border rounded text-foreground text-sm animate-fade-in" style={{ animationDelay: `${i * 100}ms` }}>
                Item {n}
              </li>
            ))}
          </ul>
        ),
      },
      {
        title: "Pulse Notification",
        description: "Attention-grabbing pulse animation",
        code: `<button class="relative">
  <span class="absolute -top-1 -right-1 flex h-3 w-3">
    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
    <span class="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
  </span>
  <span class="px-4 py-2 bg-gray-100 rounded-lg">Notifications</span>
</button>`,
        preview: (
          <button className="relative">
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
            </span>
            <span className="px-4 py-2 bg-muted rounded-lg text-foreground text-sm">Notifications</span>
          </button>
        ),
      }
    ],
    challenges: [
      {
        title: "Create a Typing Animation",
        description: "Build a typewriter effect that reveals text character by character.",
        starterCode: `// Define keyframes for typing and cursor blink
// tailwind.config.js
keyframes: {
  // Add your keyframes
}`,
        solution: `// tailwind.config.js
keyframes: {
  typing: {
    'from': { width: '0' },
    'to': { width: '100%' },
  },
  blink: {
    '0%, 100%': { borderColor: 'transparent' },
    '50%': { borderColor: 'black' },
  },
},
animation: {
  typing: 'typing 3s steps(30) forwards',
  blink: 'blink 0.7s step-end infinite',
}

// Usage
<div class="overflow-hidden whitespace-nowrap border-r-2 border-black animate-typing animate-blink font-mono">
  Hello, I'm a typewriter effect!
</div>`,
        hints: [
          "Use width animation from 0 to 100%",
          "steps() creates the character-by-character effect",
          "Border-right creates the cursor",
          "Combine typing and blink animations"
        ]
      },
      {
        title: "Build a Loading Spinner",
        description: "Create a custom spinning loader with gradient colors.",
        starterCode: `<div class="">
  Loading...
</div>`,
        solution: `<div class="relative w-12 h-12">
  <div class="absolute inset-0 rounded-full border-4 border-gray-200"></div>
  <div class="absolute inset-0 rounded-full border-4 border-transparent border-t-blue-500 animate-spin"></div>
</div>

// Or with a gradient effect (requires custom CSS)
<div class="w-12 h-12 rounded-full bg-gradient-conic from-blue-500 via-transparent to-blue-500 animate-spin p-1">
  <div class="w-full h-full rounded-full bg-white"></div>
</div>`,
        hints: [
          "Use animate-spin for the rotation",
          "Border-transparent with border-t-color creates the arc",
          "Layer two circles: one for background, one for spinner",
          "For gradient spinner, use conic-gradient"
        ]
      }
    ],
    quiz: [
      {
        question: "What's the animation shorthand order?",
        options: [
          "duration name timing iterations",
          "name duration timing iterations",
          "timing name duration delay",
          "name timing duration iterations"
        ],
        correctIndex: 1,
        explanation: "The CSS animation shorthand is: name duration timing-function delay iteration-count direction fill-mode."
      },
      {
        question: "How do you keep an element at its final animation state?",
        options: [
          "animation-keep: true",
          "animation-fill-mode: forwards",
          "animation-end: stay",
          "animation-persist"
        ],
        correctIndex: 1,
        explanation: "animation-fill-mode: forwards keeps the element at the end state of the animation after it completes."
      },
      {
        question: "Which built-in Tailwind animation creates a ping effect?",
        options: ["animate-pulse", "animate-ping", "animate-bounce", "animate-ripple"],
        correctIndex: 1,
        explanation: "animate-ping creates a ripple/ping effect that expands outward while fading, perfect for notification indicators."
      }
    ],
    keyTakeaways: [
      "Define keyframes and animation in config",
      "Use animation-delay for staggered effects",
      "animation-fill-mode: forwards keeps end state",
      "Combine with transition for interactive + animated elements",
      "animate-ping and animate-pulse are great for attention"
    ]
  },

  "plugins": {
    title: "Tailwind Plugins",
    introduction: "Tailwind plugins extend the framework with custom utilities, components, and variants. Learn how to use official plugins and create your own to supercharge your workflow.",
    learningObjectives: [
      "Understand the plugin ecosystem",
      "Use official Tailwind plugins",
      "Create custom plugins",
      "Add new utilities and components"
    ],
    steps: [
      {
        title: "What Are Tailwind Plugins?",
        explanation: "Plugins are JavaScript functions that register new styles with Tailwind. They can add utilities, components, base styles, and custom variants. Official plugins include forms, typography, aspect-ratio, and container-queries.",
        code: `// Installing official plugins
npm install @tailwindcss/forms @tailwindcss/typography @tailwindcss/aspect-ratio

// tailwind.config.js
module.exports = {
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}`
      },
      {
        title: "@tailwindcss/forms Plugin",
        explanation: "The forms plugin provides a basic reset for form elements that makes them easy to style with utilities. It normalizes inputs, selects, textareas, and checkboxes.",
        code: `<!-- Without forms plugin: default browser styles -->
<input type="email" class="block w-full" />

<!-- With forms plugin: styled and ready to customize -->
<input type="email" class="block w-full rounded-md border-gray-300 shadow-sm 
  focus:border-indigo-500 focus:ring-indigo-500" />

<!-- Checkbox styling -->
<input type="checkbox" class="rounded border-gray-300 text-indigo-600 
  focus:ring-indigo-500" />`
      },
      {
        title: "@tailwindcss/typography Plugin",
        explanation: "The typography plugin adds a 'prose' class that applies beautiful typographic defaults to content blocks—perfect for markdown or CMS content.",
        code: `<!-- Apply prose for beautiful typography -->
<article class="prose lg:prose-xl">
  <h1>Article Title</h1>
  <p>This paragraph will have perfect line-height, 
     font-size, and spacing.</p>
  <ul>
    <li>Lists are styled automatically</li>
    <li>No custom CSS needed</li>
  </ul>
  <blockquote>Quotes look great too!</blockquote>
</article>

<!-- Customize prose colors -->
<article class="prose prose-slate prose-headings:text-blue-600">
  <!-- Content here -->
</article>`
      },
      {
        title: "Creating Custom Plugins",
        explanation: "Create your own plugins to add reusable utilities across projects. Use the plugin function and register utilities, components, or variants.",
        code: `// tailwind.config.js
const plugin = require('tailwindcss/plugin')

module.exports = {
  plugins: [
    plugin(function({ addUtilities, addComponents, theme }) {
      // Add custom utilities
      addUtilities({
        '.text-shadow': {
          textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
        },
        '.text-shadow-lg': {
          textShadow: '4px 4px 8px rgba(0,0,0,0.2)',
        },
      })

      // Add custom components
      addComponents({
        '.btn-primary': {
          padding: theme('spacing.2') + ' ' + theme('spacing.4'),
          backgroundColor: theme('colors.blue.500'),
          color: '#fff',
          borderRadius: theme('borderRadius.lg'),
          fontWeight: '600',
          '&:hover': {
            backgroundColor: theme('colors.blue.600'),
          },
        },
      })
    })
  ],
}`
      }
    ],
    examples: [
      {
        title: "Typography Plugin in Action",
        description: "See how prose class transforms raw content",
        code: `<article class="prose prose-lg prose-headings:text-indigo-600">
  <h2>Getting Started</h2>
  <p>Tailwind's typography plugin handles all the 
     typographic details you'd normally spend hours on.</p>
  <pre><code>npm install @tailwindcss/typography</code></pre>
</article>`,
        beforePreview: (
          <article className="text-foreground">
            <h2 className="text-xl">Getting Started</h2>
            <p>Unstyled content looks plain and needs manual styling for readability.</p>
          </article>
        ),
        preview: (
          <article className="max-w-none">
            <h2 className="text-xl font-bold text-primary mb-3">Getting Started</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Tailwind's typography plugin handles all the typographic details you'd normally spend hours on.
            </p>
            <pre className="bg-muted p-3 rounded-md text-sm font-mono text-foreground">npm install @tailwindcss/typography</pre>
          </article>
        ),
      },
      {
        title: "Custom Utility Plugin",
        description: "Add text-shadow utilities via plugin",
        code: `// Custom plugin
addUtilities({
  '.text-shadow-sm': { textShadow: '1px 1px 2px rgba(0,0,0,0.1)' },
  '.text-shadow': { textShadow: '2px 2px 4px rgba(0,0,0,0.15)' },
  '.text-shadow-lg': { textShadow: '4px 4px 8px rgba(0,0,0,0.2)' },
})

// Usage
<h1 class="text-4xl font-bold text-shadow-lg">
  Shadowed Heading
</h1>`,
        preview: (
          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-foreground" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.1)' }}>text-shadow-sm</h2>
            <h2 className="text-2xl font-bold text-foreground" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.15)' }}>text-shadow</h2>
            <h2 className="text-2xl font-bold text-foreground" style={{ textShadow: '4px 4px 8px rgba(0,0,0,0.2)' }}>text-shadow-lg</h2>
          </div>
        ),
      },
      {
        title: "Custom Component Plugin",
        description: "Create reusable component classes",
        code: `// Add component classes via plugin
addComponents({
  '.card-glass': {
    background: 'rgba(255,255,255,0.1)',
    backdropFilter: 'blur(10px)',
    borderRadius: theme('borderRadius.xl'),
    border: '1px solid rgba(255,255,255,0.2)',
    padding: theme('spacing.6'),
  }
})

// Usage
<div class="card-glass">
  Glass morphism card
</div>`,
        preview: (
          <div className="p-6 rounded-xl border border-border/20 bg-card/50 backdrop-blur-sm">
            <p className="text-foreground font-medium">Glass morphism card</p>
            <p className="text-muted-foreground text-sm mt-1">Created with a custom plugin</p>
          </div>
        ),
      }
    ],
    challenges: [
      {
        title: "Create a Gradient Text Plugin",
        description: "Build a plugin that adds gradient text utilities.",
        starterCode: `// tailwind.config.js
const plugin = require('tailwindcss/plugin')

module.exports = {
  plugins: [
    plugin(function({ addUtilities }) {
      // Add your gradient text utilities
    })
  ]
}`,
        solution: `const plugin = require('tailwindcss/plugin')

module.exports = {
  plugins: [
    plugin(function({ addUtilities }) {
      addUtilities({
        '.text-gradient-primary': {
          background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'background-clip': 'text',
        },
        '.text-gradient-sunset': {
          background: 'linear-gradient(135deg, #f97316, #ec4899)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'background-clip': 'text',
        },
      })
    })
  ]
}`,
        hints: [
          "Use addUtilities to register new utilities",
          "Gradient text requires background-clip: text",
          "Also add -webkit prefixed properties"
        ]
      },
      {
        title: "Build a Button Component Plugin",
        description: "Create btn-sm, btn-md, btn-lg size variants as a plugin.",
        starterCode: `plugin(function({ addComponents, theme }) {
  // Create button size variants
})`,
        solution: `plugin(function({ addComponents, theme }) {
  addComponents({
    '.btn-sm': {
      padding: theme('spacing.1') + ' ' + theme('spacing.3'),
      fontSize: theme('fontSize.sm'),
      borderRadius: theme('borderRadius.md'),
    },
    '.btn-md': {
      padding: theme('spacing.2') + ' ' + theme('spacing.4'),
      fontSize: theme('fontSize.base'),
      borderRadius: theme('borderRadius.lg'),
    },
    '.btn-lg': {
      padding: theme('spacing.3') + ' ' + theme('spacing.6'),
      fontSize: theme('fontSize.lg'),
      borderRadius: theme('borderRadius.xl'),
    },
  })
})`,
        hints: [
          "Use addComponents for component-level classes",
          "Access theme values with theme('spacing.X')",
          "Create consistent size scaling"
        ]
      }
    ],
    quiz: [
      {
        question: "What does the @tailwindcss/typography plugin provide?",
        options: [
          "Custom font loading",
          "A 'prose' class for beautiful content styling",
          "Icon fonts",
          "Variable fonts support"
        ],
        correctIndex: 1,
        explanation: "The typography plugin adds a 'prose' class that applies beautiful typographic defaults to long-form content."
      },
      {
        question: "Which function adds custom utilities in a plugin?",
        options: ["addClasses", "addUtilities", "registerUtilities", "createUtilities"],
        correctIndex: 1,
        explanation: "The addUtilities function is used to register new utility classes in a Tailwind plugin."
      },
      {
        question: "How do you access theme values in a plugin?",
        options: [
          "config.theme.colors",
          "theme('colors.blue.500')",
          "tailwind.colors",
          "getTheme('colors')"
        ],
        correctIndex: 1,
        explanation: "Use the theme() function to access configured theme values like colors, spacing, etc."
      }
    ],
    keyTakeaways: [
      "Plugins extend Tailwind with new utilities/components",
      "@tailwindcss/forms normalizes form element styles",
      "@tailwindcss/typography adds the 'prose' class",
      "Create custom plugins with addUtilities/addComponents",
      "Access theme values with theme() function"
    ]
  },

  "component-extraction": {
    title: "Component Extraction with @apply",
    introduction: "Learn when and how to extract repeated utility patterns into reusable component classes using @apply, and understand the tradeoffs of this approach.",
    learningObjectives: [
      "Understand when to use @apply",
      "Extract patterns into component classes",
      "Know the tradeoffs of @apply",
      "Use CSS components effectively"
    ],
    steps: [
      {
        title: "When to Use @apply",
        explanation: "@apply lets you compose Tailwind utilities into custom CSS classes. Use it sparingly—mainly for highly repeated patterns that can't be extracted as framework components (like with React).",
        code: `/* Before: Repeated utility patterns */
<button class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
<button class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
<button class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">

/* After: Extract with @apply */
/* styles.css */
.btn-primary {
  @apply px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600;
}

<button class="btn-primary">Click</button>
<button class="btn-primary">Submit</button>
<button class="btn-primary">Save</button>`
      },
      {
        title: "Component Layer",
        explanation: "Place your extracted components in the @layer components directive. This ensures proper specificity and allows utilities to override them when needed.",
        code: `/* index.css or globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
  .btn {
    @apply inline-flex items-center justify-center px-4 py-2 
           font-medium rounded-lg transition-colors;
  }
  
  .btn-primary {
    @apply btn bg-blue-500 text-white hover:bg-blue-600;
  }
  
  .btn-secondary {
    @apply btn bg-gray-200 text-gray-800 hover:bg-gray-300;
  }
  
  .card {
    @apply bg-white rounded-xl shadow-md p-6;
  }
}`
      },
      {
        title: "Multi-Element Components",
        explanation: "For components with multiple elements, create related classes that work together. Prefix them consistently for clarity.",
        code: `@layer components {
  .form-group {
    @apply mb-4;
  }
  
  .form-label {
    @apply block text-sm font-medium text-gray-700 mb-1;
  }
  
  .form-input {
    @apply block w-full px-3 py-2 border border-gray-300 rounded-lg
           focus:ring-2 focus:ring-blue-500 focus:border-transparent;
  }
  
  .form-error {
    @apply mt-1 text-sm text-red-600;
  }
}

/* Usage */
<div class="form-group">
  <label class="form-label">Email</label>
  <input class="form-input" type="email" />
  <span class="form-error">Invalid email</span>
</div>`
      },
      {
        title: "Tradeoffs of @apply",
        explanation: "While @apply is useful, it has downsides: you lose visibility into what styles are applied, it can lead to the same naming problems as traditional CSS, and you can't use responsive/state modifiers directly.",
        code: `/* ❌ Can't do this */
.btn {
  @apply hover:md:bg-blue-600;  /* Won't work as expected */
}

/* ✅ Must handle states in the @apply */
.btn {
  @apply bg-blue-500 hover:bg-blue-600;
}

/* Better approach: Use component framework */
// Button.tsx
const Button = ({ children }) => (
  <button className="px-4 py-2 bg-blue-500 text-white rounded-lg 
    hover:bg-blue-600 md:px-6 md:py-3">
    {children}
  </button>
);`
      }
    ],
    examples: [
      {
        title: "Badge Component Extraction",
        description: "Create reusable badge variants",
        code: `@layer components {
  .badge {
    @apply inline-flex items-center px-2.5 py-0.5 
           rounded-full text-xs font-medium;
  }
  
  .badge-blue { @apply badge bg-blue-100 text-blue-800; }
  .badge-green { @apply badge bg-green-100 text-green-800; }
  .badge-red { @apply badge bg-red-100 text-red-800; }
  .badge-yellow { @apply badge bg-yellow-100 text-yellow-800; }
}`,
        preview: (
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">New</span>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">Active</span>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">Urgent</span>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">Pending</span>
          </div>
        ),
      },
      {
        title: "Input Styles with Focus States",
        description: "Extract form input patterns",
        code: `@layer components {
  .input-base {
    @apply block w-full px-4 py-2 border rounded-lg
           transition-colors duration-200
           focus:outline-none focus:ring-2;
  }
  
  .input-default {
    @apply input-base border-gray-300 
           focus:border-blue-500 focus:ring-blue-500/20;
  }
  
  .input-error {
    @apply input-base border-red-500 
           focus:border-red-500 focus:ring-red-500/20;
  }
}`,
        beforePreview: (
          <input 
            type="text" 
            placeholder="Default browser input" 
            className="block w-full px-2 py-1 border rounded"
          />
        ),
        preview: (
          <div className="space-y-3">
            <input 
              type="text" 
              placeholder="Styled input" 
              className="block w-full px-4 py-2 border border-border rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:border-primary focus:ring-primary/20 bg-background text-foreground"
            />
            <input 
              type="text" 
              placeholder="Error state" 
              className="block w-full px-4 py-2 border border-red-500 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500/20 bg-background text-foreground"
            />
          </div>
        ),
      },
      {
        title: "Alert Component Patterns",
        description: "Consistent alert styling across types",
        code: `@layer components {
  .alert {
    @apply flex items-start gap-3 p-4 rounded-lg border;
  }
  .alert-icon {
    @apply flex-shrink-0 w-5 h-5;
  }
  .alert-content {
    @apply flex-1;
  }
  .alert-title {
    @apply font-semibold;
  }
  .alert-info {
    @apply alert bg-blue-50 border-blue-200 text-blue-800;
  }
  .alert-success {
    @apply alert bg-green-50 border-green-200 text-green-800;
  }
  .alert-warning {
    @apply alert bg-yellow-50 border-yellow-200 text-yellow-800;
  }
  .alert-error {
    @apply alert bg-red-50 border-red-200 text-red-800;
  }
}`,
        preview: (
          <div className="space-y-3">
            <div className="flex items-start gap-3 p-4 rounded-lg border bg-blue-50 border-blue-200 text-blue-800">
              <span>ℹ️</span>
              <div><span className="font-semibold">Info:</span> Informational message</div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-lg border bg-green-50 border-green-200 text-green-800">
              <span>✅</span>
              <div><span className="font-semibold">Success:</span> Operation completed</div>
            </div>
          </div>
        ),
      }
    ],
    challenges: [
      {
        title: "Extract a Card Component",
        description: "Create card, card-header, and card-body classes using @apply.",
        starterCode: `@layer components {
  /* Create your card classes here */
}`,
        solution: `@layer components {
  .card {
    @apply bg-white rounded-xl shadow-md overflow-hidden;
  }
  
  .card-header {
    @apply px-6 py-4 border-b border-gray-100 font-semibold;
  }
  
  .card-body {
    @apply px-6 py-4;
  }
  
  .card-footer {
    @apply px-6 py-4 border-t border-gray-100 bg-gray-50;
  }
}

/* Usage */
<div class="card">
  <div class="card-header">Title</div>
  <div class="card-body">Content</div>
  <div class="card-footer">Actions</div>
</div>`,
        hints: [
          "Use @layer components to ensure proper cascade",
          "Create semantic class names for each part",
          "Consider border and background relationships"
        ]
      },
      {
        title: "Create Navigation Link Styles",
        description: "Extract nav-link and nav-link-active classes with hover/active states.",
        starterCode: `@layer components {
  .nav-link {
    /* Add your styles */
  }
}`,
        solution: `@layer components {
  .nav-link {
    @apply px-3 py-2 text-gray-600 rounded-md font-medium
           transition-colors duration-200
           hover:text-gray-900 hover:bg-gray-100;
  }
  
  .nav-link-active {
    @apply px-3 py-2 text-blue-600 rounded-md font-medium
           bg-blue-50 hover:bg-blue-100;
  }
}

/* Usage */
<nav class="flex gap-2">
  <a href="/" class="nav-link-active">Home</a>
  <a href="/about" class="nav-link">About</a>
  <a href="/contact" class="nav-link">Contact</a>
</nav>`,
        hints: [
          "Include transition for smooth hover effects",
          "Create separate class for active state",
          "Consider focus states for accessibility"
        ]
      }
    ],
    quiz: [
      {
        question: "When should you use @apply?",
        options: [
          "For every repeated pattern",
          "Only for highly repeated patterns that can't be framework components",
          "Never - it's deprecated",
          "Only in JavaScript files"
        ],
        correctIndex: 1,
        explanation: "@apply is best for patterns that repeat often and can't easily be extracted as framework components (React, Vue, etc.)."
      },
      {
        question: "Which layer should extracted components go in?",
        options: ["@layer base", "@layer components", "@layer utilities", "@layer custom"],
        correctIndex: 1,
        explanation: "@layer components is the correct place for extracted component classes, ensuring utilities can still override them."
      },
      {
        question: "What's a limitation of @apply?",
        options: [
          "Can't use color classes",
          "Can't combine responsive variants like hover:md:",
          "Can't use padding classes",
          "Can't use in CSS files"
        ],
        correctIndex: 1,
        explanation: "Complex responsive/state combinations don't work as expected in @apply. Framework components are better for this."
      }
    ],
    keyTakeaways: [
      "@apply extracts repeated utilities into classes",
      "Use @layer components for proper specificity",
      "Prefer framework components when possible",
      "Best for patterns repeated 3+ times",
      "Keep component names semantic and consistent"
    ]
  },

  "performance": {
    title: "Performance Optimization",
    introduction: "Learn how to optimize your Tailwind CSS setup for the fastest possible load times in production, including purging unused styles, minimizing bundle size, and best practices.",
    learningObjectives: [
      "Configure content purging correctly",
      "Minimize production bundle size",
      "Use JIT mode effectively",
      "Implement performance best practices"
    ],
    steps: [
      {
        title: "Content Configuration",
        explanation: "Tailwind's JIT compiler scans your files to generate only the CSS you use. The 'content' array tells it where to look. Misconfiguring this is the #1 cause of bloated or missing styles.",
        code: `// tailwind.config.js
module.exports = {
  // ✅ Correct: Include all files that use Tailwind classes
  content: [
    './src/**/*.{js,ts,jsx,tsx,html}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  
  // ❌ Wrong: Too broad (scans node_modules)
  content: ['./**/*.{js,jsx}'],
  
  // ❌ Wrong: Missing file extensions
  content: ['./src/**/*'],
}`
      },
      {
        title: "Safelist for Dynamic Classes",
        explanation: "If you construct class names dynamically, Tailwind can't detect them. Use the safelist to ensure these classes are always generated.",
        code: `// tailwind.config.js
module.exports = {
  safelist: [
    // Specific classes
    'bg-red-500',
    'text-center',
    
    // Pattern matching
    {
      pattern: /bg-(red|green|blue)-(100|500|700)/,
    },
    
    // With variants
    {
      pattern: /text-(sm|base|lg|xl)/,
      variants: ['hover', 'md'],
    },
  ],
}

// Why you need this:
const color = 'red';
<div className={\`bg-\${color}-500\`}>  // Dynamic - won't be detected!
  Content
</div>`
      },
      {
        title: "Minimizing CSS with cssnano",
        explanation: "PostCSS can further optimize your CSS. Use cssnano for minification and autoprefixer for browser compatibility.",
        code: `// postcss.config.js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    // Only minify in production
    ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {}),
  },
}

// Or with options
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    cssnano: {
      preset: ['default', {
        discardComments: { removeAll: true },
        normalizeWhitespace: true,
      }],
    },
  },
}`
      },
      {
        title: "Avoiding Class Bloat",
        explanation: "Write efficient utility combinations. Avoid redundant classes and leverage Tailwind's built-in utilities instead of custom CSS.",
        code: `<!-- ❌ Redundant classes -->
<div class="flex flex-row">  <!-- flex-row is default -->
<div class="flex justify-start">  <!-- justify-start is default -->
<div class="m-0 p-0">  <!-- 0 is default for most elements -->

<!-- ✅ Clean utilities -->
<div class="flex">
<div class="flex">
<div>

<!-- ❌ Using inline styles -->
<div class="p-4" style="margin-top: 20px;">

<!-- ✅ Use utilities -->
<div class="p-4 mt-5">

<!-- ❌ Overly specific -->
<div class="w-[143px] h-[87px] mt-[13px]">

<!-- ✅ Use scale values when close enough -->
<div class="w-36 h-24 mt-3">`
      },
      {
        title: "Code Splitting CSS",
        explanation: "For very large apps, consider splitting CSS per page or feature. This ensures users only download styles they need.",
        code: `// Modern frameworks handle this automatically
// But you can optimize further:

// 1. Separate critical CSS
// critical.css - Above-the-fold styles
@import './base.css';
@import './header.css';
@import './hero.css';

// 2. Lazy load non-critical styles
// In your component:
useEffect(() => {
  import('./features/charts.css');
}, []);

// 3. Use dynamic imports for feature CSS
const Dashboard = lazy(() => import('./Dashboard'));
// Dashboard.tsx imports its own CSS module`
      }
    ],
    examples: [
      {
        title: "Content Configuration Comparison",
        description: "See the difference between correct and incorrect content config",
        code: `// ✅ Production-ready config
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

// This generates ~10KB of CSS (only what you use)`,
        preview: (
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-3 bg-green-50 border border-green-200 rounded-lg">
              <span className="text-green-600 text-lg">✓</span>
              <div>
                <p className="font-medium text-green-800">Optimized: ~10KB</p>
                <p className="text-sm text-green-700">Only used classes included</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-red-50 border border-red-200 rounded-lg">
              <span className="text-red-600 text-lg">✗</span>
              <div>
                <p className="font-medium text-red-800">Unoptimized: ~3MB</p>
                <p className="text-sm text-red-700">All utilities included</p>
              </div>
            </div>
          </div>
        ),
      },
      {
        title: "Safelist Patterns",
        description: "Protect dynamic classes from purging",
        code: `// Dynamic colors in a dashboard
const statusColors = {
  success: 'bg-green-500',
  warning: 'bg-yellow-500',
  error: 'bg-red-500',
};

// These MUST be safelisted
safelist: [
  { pattern: /bg-(green|yellow|red)-500/ },
]

// Now this works:
<div className={statusColors[status]}>
  {message}
</div>`,
        preview: (
          <div className="flex gap-2">
            <div className="px-3 py-1 bg-green-500 text-white rounded-full text-sm font-medium">Success</div>
            <div className="px-3 py-1 bg-yellow-500 text-white rounded-full text-sm font-medium">Warning</div>
            <div className="px-3 py-1 bg-red-500 text-white rounded-full text-sm font-medium">Error</div>
          </div>
        ),
      },
      {
        title: "Bundle Size Analysis",
        description: "Understand what affects bundle size",
        code: `// Check your bundle size:
// 1. Build for production
npm run build

// 2. Analyze CSS size
ls -la dist/assets/*.css

// Common issues and solutions:
// - Using all of Tailwind: Configure content paths
// - Font files: Use font-display: swap
// - Large custom CSS: Move to Tailwind utilities
// - Unused components: Enable tree-shaking`,
        preview: (
          <div className="space-y-2 font-mono text-sm">
            <div className="flex justify-between p-2 bg-muted rounded">
              <span className="text-muted-foreground">base.css</span>
              <span className="text-green-600 font-bold">2.1KB</span>
            </div>
            <div className="flex justify-between p-2 bg-muted rounded">
              <span className="text-muted-foreground">components.css</span>
              <span className="text-green-600 font-bold">4.8KB</span>
            </div>
            <div className="flex justify-between p-2 bg-muted rounded">
              <span className="text-muted-foreground">utilities.css</span>
              <span className="text-green-600 font-bold">3.2KB</span>
            </div>
            <div className="flex justify-between p-2 bg-primary/10 rounded border border-primary/20">
              <span className="text-foreground font-medium">Total (gzipped)</span>
              <span className="text-primary font-bold">~10KB</span>
            </div>
          </div>
        ),
      }
    ],
    challenges: [
      {
        title: "Configure Content Paths",
        description: "Set up a proper content configuration for a Next.js project.",
        starterCode: `// tailwind.config.js
module.exports = {
  content: [
    // Add your paths here
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}`,
        solution: `// tailwind.config.js
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}`,
        hints: [
          "Include all directories that contain JSX/TSX",
          "Don't forget MDX if using it",
          "Include both pages and app directories for Next.js 13+"
        ]
      },
      {
        title: "Safelist Dynamic Classes",
        description: "Create a safelist for a theme system with dynamic colors.",
        starterCode: `// You have: theme.color = 'blue' | 'purple' | 'green'
// Used in: bg-{color}-500, text-{color}-600, border-{color}-300

// Configure safelist:`,
        solution: `module.exports = {
  safelist: [
    {
      pattern: /bg-(blue|purple|green)-500/,
    },
    {
      pattern: /text-(blue|purple|green)-600/,
    },
    {
      pattern: /border-(blue|purple|green)-300/,
    },
    // Or more flexible:
    {
      pattern: /^(bg|text|border)-(blue|purple|green)-(300|500|600)$/,
    },
  ],
}`,
        hints: [
          "Use pattern matching for dynamic values",
          "Only safelist what you actually use",
          "Consider grouping related patterns"
        ]
      }
    ],
    quiz: [
      {
        question: "What happens if content paths are misconfigured?",
        options: [
          "Tailwind generates all possible classes",
          "Classes from those files won't be included",
          "Build fails with an error",
          "Classes are generated twice"
        ],
        correctIndex: 1,
        explanation: "If content paths miss your files, Tailwind won't detect the classes used there, resulting in missing styles."
      },
      {
        question: "When should you use safelist?",
        options: [
          "For all important classes",
          "For dynamically constructed class names",
          "For hover states",
          "For responsive classes"
        ],
        correctIndex: 1,
        explanation: "Safelist is needed when class names are constructed dynamically (like `bg-${color}-500`) since Tailwind can't detect them."
      },
      {
        question: "What is Tailwind's JIT mode?",
        options: [
          "A slower but more accurate compiler",
          "Generates utilities on-demand as you author",
          "A JavaScript runtime for Tailwind",
          "A testing framework"
        ],
        correctIndex: 1,
        explanation: "JIT (Just-In-Time) mode generates styles on-demand as you write them, resulting in faster builds and smaller CSS files."
      },
      {
        question: "Which is a performance anti-pattern?",
        options: [
          "Using @apply sparingly",
          "Constructing class names dynamically without safelist",
          "Using content configuration",
          "Using the theme() function"
        ],
        correctIndex: 1,
        explanation: "Dynamic class construction without safelisting causes missing styles in production since JIT can't detect them."
      }
    ],
    keyTakeaways: [
      "Configure content paths to include all template files",
      "Safelist dynamic class patterns that can't be detected",
      "Use cssnano for additional minification",
      "Avoid arbitrary values when standard scale works",
      "JIT mode generates only used styles automatically"
    ]
  },
};
