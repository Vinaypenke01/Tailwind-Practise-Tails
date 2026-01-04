import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, XCircle, HelpCircle, ArrowRight, RotateCcw } from "lucide-react";
import confetti from "canvas-confetti";

interface QuizQuestion {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

interface QuizProps {
  title: string;
  questions: QuizQuestion[];
}

export const Quiz = ({ title, questions }: QuizProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const handleAnswer = (index: number) => {
    if (selectedAnswer !== null) return;
    
    setSelectedAnswer(index);
    setShowResult(true);
    
    if (index === questions[currentQuestion].correctIndex) {
      setScore(score + 1);
      if (currentQuestion === questions.length - 1 && index === questions[currentQuestion].correctIndex) {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      }
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setIsComplete(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setIsComplete(false);
  };

  const question = questions[currentQuestion];
  const isCorrect = selectedAnswer === question.correctIndex;

  return (
    <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-lg">
      <div className="p-4 border-b border-border bg-gradient-to-r from-secondary to-secondary/50">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-primary" />
            <h3 className="font-semibold text-foreground">{title}</h3>
          </div>
          <span className="text-sm text-muted-foreground">
            {currentQuestion + 1} / {questions.length}
          </span>
        </div>
        {/* Progress bar */}
        <div className="mt-3 h-2 bg-muted rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-primary"
            initial={{ width: 0 }}
            animate={{ width: `${((currentQuestion + (showResult ? 1 : 0)) / questions.length) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      <AnimatePresence mode="wait">
        {!isComplete ? (
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="p-6"
          >
            <p className="text-lg font-medium text-foreground mb-6">
              {question.question}
            </p>

            <div className="space-y-3">
              {question.options.map((option, index) => {
                let optionStyle = "border-border hover:border-primary/50 hover:bg-muted/50";
                
                if (showResult) {
                  if (index === question.correctIndex) {
                    optionStyle = "border-success bg-success/10";
                  } else if (index === selectedAnswer) {
                    optionStyle = "border-destructive bg-destructive/10";
                  }
                }

                return (
                  <motion.button
                    key={index}
                    onClick={() => handleAnswer(index)}
                    disabled={selectedAnswer !== null}
                    className={`w-full p-4 rounded-xl border text-left transition-all ${optionStyle} ${
                      selectedAnswer === null ? "cursor-pointer" : "cursor-default"
                    }`}
                    whileHover={selectedAnswer === null ? { scale: 1.01 } : {}}
                    whileTap={selectedAnswer === null ? { scale: 0.99 } : {}}
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-sm font-medium">
                        {String.fromCharCode(65 + index)}
                      </span>
                      <span className="flex-1">{option}</span>
                      {showResult && index === question.correctIndex && (
                        <CheckCircle2 className="w-5 h-5 text-success" />
                      )}
                      {showResult && index === selectedAnswer && index !== question.correctIndex && (
                        <XCircle className="w-5 h-5 text-destructive" />
                      )}
                    </div>
                  </motion.button>
                );
              })}
            </div>

            <AnimatePresence>
              {showResult && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6"
                >
                  <div className={`p-4 rounded-xl ${isCorrect ? "bg-success/10 border border-success/20" : "bg-destructive/10 border border-destructive/20"}`}>
                    <p className={`text-sm font-medium ${isCorrect ? "text-success" : "text-destructive"}`}>
                      {isCorrect ? "🎉 Correct!" : "Not quite right"}
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      {question.explanation}
                    </p>
                  </div>
                  
                  <motion.button
                    onClick={nextQuestion}
                    className="mt-4 w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {currentQuestion < questions.length - 1 ? (
                      <>Next Question <ArrowRight className="w-4 h-4" /></>
                    ) : (
                      <>See Results <ArrowRight className="w-4 h-4" /></>
                    )}
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ) : (
          <motion.div
            key="results"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-8 text-center"
          >
            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <span className="text-3xl font-bold text-primary-foreground">{score}</span>
            </div>
            <h4 className="text-2xl font-bold text-foreground mb-2">
              {score === questions.length ? "Perfect Score! 🎉" : score >= questions.length / 2 ? "Great Job! 👏" : "Keep Learning! 💪"}
            </h4>
            <p className="text-muted-foreground mb-6">
              You got {score} out of {questions.length} questions correct
            </p>
            <button
              onClick={resetQuiz}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-muted text-foreground font-medium hover:bg-muted/80 transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
              Try Again
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
