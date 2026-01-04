import { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProgressTracker } from "@/components/ProgressTracker";
import { LessonCard } from "@/components/LessonCard";
import { CategoryTabs } from "@/components/CategoryTabs";
import { LessonContent } from "@/components/LessonContent";
import { lessonContent } from "@/data/lessonContent";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { 
  Box, 
  Layout, 
  Type, 
  Palette, 
  Smartphone, 
  Zap,
  Move,
  Grid3X3,
  Sparkles,
  Layers,
  Plug,
  FileCode2,
  Gauge,
  Home,
} from "lucide-react";

const categories = [
  { id: "all", label: "All", icon: <Sparkles className="w-4 h-4" /> },
  { id: "basics", label: "Basics", icon: <Box className="w-4 h-4" /> },
  { id: "layout", label: "Layout", icon: <Layout className="w-4 h-4" /> },
  { id: "typography", label: "Typography", icon: <Type className="w-4 h-4" /> },
  { id: "colors", label: "Colors", icon: <Palette className="w-4 h-4" /> },
  { id: "responsive", label: "Responsive", icon: <Smartphone className="w-4 h-4" /> },
  { id: "animations", label: "Animations", icon: <Zap className="w-4 h-4" /> },
  { id: "advanced", label: "Advanced", icon: <Gauge className="w-4 h-4" /> },
];

const allLessons = [
  {
    id: "utility-classes",
    title: "Utility-First Fundamentals",
    description: "Learn the core philosophy of utility-first CSS and how Tailwind changes the way you style.",
    icon: Box,
    category: "basics",
    difficulty: "beginner" as const,
    duration: "10 min",
    isCompleted: true,
  },
  {
    id: "spacing",
    title: "Spacing & Sizing",
    description: "Master padding, margin, width, height, and the spacing scale system.",
    icon: Move,
    category: "basics",
    difficulty: "beginner" as const,
    duration: "15 min",
    isCompleted: true,
  },
  {
    id: "flexbox",
    title: "Flexbox Layout",
    description: "Build flexible layouts with flex containers, alignment, and distribution.",
    icon: Layout,
    category: "layout",
    difficulty: "beginner" as const,
    duration: "20 min",
    isCompleted: false,
  },
  {
    id: "grid",
    title: "CSS Grid Mastery",
    description: "Create complex grid layouts with template columns, rows, and areas.",
    icon: Grid3X3,
    category: "layout",
    difficulty: "intermediate" as const,
    duration: "25 min",
    isCompleted: false,
  },
  {
    id: "typography",
    title: "Typography & Text",
    description: "Style text with font sizes, weights, colors, and text utilities.",
    icon: Type,
    category: "typography",
    difficulty: "beginner" as const,
    duration: "15 min",
    isCompleted: false,
  },
  {
    id: "colors",
    title: "Colors & Gradients",
    description: "Work with Tailwind's color palette, custom colors, and gradient utilities.",
    icon: Palette,
    category: "colors",
    difficulty: "beginner" as const,
    duration: "15 min",
    isCompleted: false,
  },
  {
    id: "responsive",
    title: "Responsive Design",
    description: "Build mobile-first responsive layouts with breakpoint prefixes.",
    icon: Smartphone,
    category: "responsive",
    difficulty: "intermediate" as const,
    duration: "20 min",
    isCompleted: false,
  },
  {
    id: "hover-states",
    title: "Hover & Focus States",
    description: "Add interactivity with hover, focus, active, and group modifiers.",
    icon: Sparkles,
    category: "animations",
    difficulty: "beginner" as const,
    duration: "15 min",
    isCompleted: false,
  },
  {
    id: "transitions",
    title: "Transitions & Transforms",
    description: "Create smooth animations with transition and transform utilities.",
    icon: Zap,
    category: "animations",
    difficulty: "intermediate" as const,
    duration: "20 min",
    isCompleted: false,
  },
  {
    id: "dark-mode",
    title: "Dark Mode",
    description: "Implement dark mode with the dark: variant and theme switching.",
    icon: Palette,
    category: "colors",
    difficulty: "intermediate" as const,
    duration: "15 min",
    isCompleted: false,
  },
  {
    id: "custom-themes",
    title: "Custom Themes",
    description: "Extend Tailwind with custom colors, fonts, and design tokens.",
    icon: Layers,
    category: "colors",
    difficulty: "advanced" as const,
    duration: "30 min",
    isCompleted: false,
  },
  {
    id: "animations-advanced",
    title: "Custom Animations",
    description: "Create custom keyframe animations and complex motion effects.",
    icon: Zap,
    category: "animations",
    difficulty: "advanced" as const,
    duration: "25 min",
    isCompleted: false,
  },
  {
    id: "plugins",
    title: "Tailwind Plugins",
    description: "Extend Tailwind with official plugins and create your own custom utilities.",
    icon: Plug,
    category: "advanced",
    difficulty: "advanced" as const,
    duration: "30 min",
    isCompleted: false,
  },
  {
    id: "component-extraction",
    title: "Component Extraction",
    description: "Learn when and how to use @apply for reusable component classes.",
    icon: FileCode2,
    category: "advanced",
    difficulty: "intermediate" as const,
    duration: "20 min",
    isCompleted: false,
  },
  {
    id: "performance",
    title: "Performance Optimization",
    description: "Optimize bundle size, configure purging, and production best practices.",
    icon: Gauge,
    category: "advanced",
    difficulty: "advanced" as const,
    duration: "25 min",
    isCompleted: false,
  },
];

const Lessons = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedLesson, setSelectedLesson] = useState<string | null>(null);

  // Check for lesson ID in URL on mount
  useEffect(() => {
    const lessonId = searchParams.get("lesson");
    if (lessonId && lessonContent[lessonId]) {
      setSelectedLesson(lessonId);
    }
  }, [searchParams]);

  const handleBack = () => {
    setSelectedLesson(null);
    setSearchParams({});
  };

  const handleSelectLesson = (lessonId: string) => {
    setSelectedLesson(lessonId);
    setSearchParams({ lesson: lessonId });
  };

  const filteredLessons = activeCategory === "all" 
    ? allLessons 
    : allLessons.filter((lesson) => lesson.category === activeCategory);

  const currentLessonContent = selectedLesson 
    ? lessonContent[selectedLesson]
    : null;

  // Show detailed lesson content
  if (selectedLesson && currentLessonContent) {
    const currentLessonTitle = allLessons.find(l => l.id === selectedLesson)?.title || "Lesson";
    
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container px-4 py-8">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6"
          >
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/" className="flex items-center gap-1.5">
                      <Home className="w-4 h-4" />
                      Home
                    </Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/lessons" onClick={handleBack}>Lessons</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>{currentLessonTitle}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </motion.div>
          <LessonContent 
            lesson={currentLessonContent}
            lessonId={selectedLesson}
            onBack={handleBack}
          />
        </main>
        <Footer />
      </div>
    );
  }

  // Show lesson grid
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            All Lessons
          </h1>
          <p className="text-muted-foreground mb-8">
            Track your progress and continue learning Tailwind CSS
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <ProgressTracker
            completedLessons={2}
            totalLessons={allLessons.length}
            streak={5}
            xp={450}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8 overflow-x-auto pb-2"
        >
          <CategoryTabs
            categories={categories}
            activeCategory={activeCategory}
            onChange={setActiveCategory}
          />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredLessons.map((lesson, index) => (
            <LessonCard
              key={lesson.id}
              {...lesson}
              delay={index}
              onClick={() => handleSelectLesson(lesson.id)}
            />
          ))}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Lessons;
