import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, BookOpen, Code, Lightbulb, CheckCircle, HelpCircle, ChevronDown, ChevronUp } from "lucide-react";
import { LivePreview } from "./LivePreview";
import { CodeBlock } from "./CodeBlock";
import { Quiz } from "./Quiz";
import { Button } from "./ui/button";
import { InlinePlayground } from "./InlinePlayground";
import { LessonContentItem } from "@/data/lessonContent";

interface LessonContentProps {
  lesson: LessonContentItem;
  lessonId: string;
  onBack: () => void;
  onComplete?: () => void;
}

export const LessonContent = ({ lesson, lessonId, onBack, onComplete }: LessonContentProps) => {
  const [activeTab, setActiveTab] = useState<"learn" | "examples" | "challenges" | "quiz">("learn");
  const [expandedSteps, setExpandedSteps] = useState<number[]>([0]);
  const [completedChallenges, setCompletedChallenges] = useState<number[]>([]);
  const [showSolution, setShowSolution] = useState<number | null>(null);

  const toggleStep = (index: number) => {
    setExpandedSteps(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const tabs = [
    { id: "learn", label: "Learn", icon: <BookOpen className="w-4 h-4" /> },
    { id: "examples", label: "Examples", icon: <Code className="w-4 h-4" /> },
    { id: "challenges", label: "Challenges", icon: <Lightbulb className="w-4 h-4" /> },
    { id: "quiz", label: "Quiz", icon: <HelpCircle className="w-4 h-4" /> },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container px-4 py-4">
          <motion.button
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={onBack}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-4 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Lessons
          </motion.button>
          
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl md:text-3xl font-bold text-foreground mb-2"
          >
            {lesson.title}
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground mb-4"
          >
            {lesson.introduction}
          </motion.p>

          {/* Tab Navigation */}
          <div className="flex gap-1 overflow-x-auto pb-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm whitespace-nowrap transition-all ${
                  activeTab === tab.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {tab.icon}
                {tab.label}
                {tab.id === "challenges" && lesson.challenges.length > 0 && (
                  <span className="ml-1 px-1.5 py-0.5 text-xs bg-accent text-white rounded-full">
                    {lesson.challenges.length}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container px-4 py-8">
        <AnimatePresence mode="wait">
          {/* Learn Tab */}
          {activeTab === "learn" && (
            <motion.div
              key="learn"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6"
            >
              {/* Learning Objectives */}
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  Learning Objectives
                </h3>
                <ul className="space-y-2">
                  {lesson.learningObjectives.map((objective, index) => (
                    <li key={index} className="flex items-start gap-2 text-muted-foreground">
                      <span className="w-5 h-5 rounded-full bg-primary/20 text-primary text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                        {index + 1}
                      </span>
                      {objective}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Step-by-Step */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">Step-by-Step Guide</h3>
                {lesson.steps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="border border-border rounded-xl overflow-hidden"
                  >
                    <button
                      onClick={() => toggleStep(index)}
                      className="w-full flex items-center justify-between p-4 bg-card hover:bg-muted/50 transition-colors text-left"
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold flex items-center justify-center">
                          {index + 1}
                        </span>
                        <span className="font-medium text-foreground">{step.title}</span>
                      </div>
                      {expandedSteps.includes(index) ? (
                        <ChevronUp className="w-5 h-5 text-muted-foreground" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-muted-foreground" />
                      )}
                    </button>
                    
                    <AnimatePresence>
                      {expandedSteps.includes(index) && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="p-4 pt-0 space-y-4">
                            <p className="text-muted-foreground leading-relaxed">
                              {step.explanation}
                            </p>
                            {step.code && (
                              <CodeBlock code={step.code} language="html" />
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>

              {/* Key Takeaways */}
              <div className="bg-accent/10 border border-accent/20 rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-accent" />
                  Key Takeaways
                </h3>
                <ul className="space-y-2">
                  {lesson.keyTakeaways.map((takeaway, index) => (
                    <li key={index} className="flex items-start gap-2 text-muted-foreground">
                      <span className="text-accent">•</span>
                      {takeaway}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Next Button */}
              <div className="flex justify-end">
                <Button onClick={() => setActiveTab("examples")} className="gap-2">
                  Continue to Examples
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </motion.div>
          )}

          {/* Examples Tab */}
          {activeTab === "examples" && (
            <motion.div
              key="examples"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-8"
            >
              <p className="text-muted-foreground">
                Interactive examples to see the concepts in action. Toggle between before/after views and copy the code.
              </p>
              
              {lesson.examples.map((example, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <LivePreview
                    title={example.title}
                    description={example.description}
                    code={example.code}
                    preview={example.preview}
                    beforePreview={example.beforePreview}
                  />
                </motion.div>
              ))}

              <div className="flex justify-between">
                <Button variant="outline" onClick={() => setActiveTab("learn")} className="gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  Back to Learn
                </Button>
                <Button onClick={() => setActiveTab("challenges")} className="gap-2">
                  Try Challenges
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </motion.div>
          )}

          {/* Challenges Tab */}
          {activeTab === "challenges" && (
            <motion.div
              key="challenges"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-8"
            >
              <p className="text-muted-foreground">
                Put your knowledge to the test! Complete these challenges to reinforce what you learned.
              </p>
              
              {lesson.challenges.map((challenge, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card border border-border rounded-xl overflow-hidden"
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                          {completedChallenges.includes(index) && (
                            <CheckCircle className="w-5 h-5 text-green-500" />
                          )}
                          Challenge {index + 1}: {challenge.title}
                        </h3>
                        <p className="text-muted-foreground mt-1">{challenge.description}</p>
                      </div>
                    </div>

                    {/* Inline Playground */}
                    <div className="mb-4">
                      <InlinePlayground 
                        initialCode={challenge.starterCode} 
                        title="Try it yourself"
                      />
                    </div>

                    {/* Hints */}
                    <div className="bg-muted/50 rounded-lg p-4 mb-4">
                      <h4 className="text-sm font-medium text-foreground mb-2 flex items-center gap-2">
                        <Lightbulb className="w-4 h-4 text-yellow-500" />
                        Hints
                      </h4>
                      <ul className="space-y-1">
                        {challenge.hints.map((hint, hintIndex) => (
                          <li key={hintIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="text-yellow-500">•</span>
                            {hint}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Solution Toggle */}
                    <div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setShowSolution(showSolution === index ? null : index)}
                      >
                        {showSolution === index ? "Hide Solution" : "Show Solution"}
                      </Button>
                      
                      <AnimatePresence>
                        {showSolution === index && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="mt-4 overflow-hidden"
                          >
                            <h4 className="text-sm font-medium text-green-600 mb-2">Solution:</h4>
                            <CodeBlock code={challenge.solution} language="html" />
                            <Button
                              variant="ghost"
                              size="sm"
                              className="mt-2 text-green-600"
                              onClick={() => {
                                if (!completedChallenges.includes(index)) {
                                  setCompletedChallenges([...completedChallenges, index]);
                                }
                              }}
                            >
                              <CheckCircle className="w-4 h-4 mr-2" />
                              Mark as Completed
                            </Button>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </motion.div>
              ))}

              <div className="flex justify-between">
                <Button variant="outline" onClick={() => setActiveTab("examples")} className="gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  Back to Examples
                </Button>
                <Button onClick={() => setActiveTab("quiz")} className="gap-2">
                  Take Quiz
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </motion.div>
          )}

          {/* Quiz Tab */}
          {activeTab === "quiz" && (
            <motion.div
              key="quiz"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-8"
            >
              <p className="text-muted-foreground">
                Test your understanding with this quiz. Get all answers right to complete the lesson!
              </p>
              
              <div className="max-w-2xl">
                <Quiz 
                  title={`${lesson.title} Quiz`}
                  questions={lesson.quiz}
                />
              </div>

              <div className="flex justify-start">
                <Button variant="outline" onClick={() => setActiveTab("challenges")} className="gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  Back to Challenges
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
