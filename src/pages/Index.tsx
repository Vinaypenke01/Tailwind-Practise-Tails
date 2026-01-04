import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { LessonsGrid } from "@/components/LessonsGrid";
import { InteractiveExamples } from "@/components/InteractiveExamples";
import { Footer } from "@/components/Footer";
import { Quiz } from "@/components/Quiz";
import { motion } from "framer-motion";

const quizQuestions = [
  {
    question: "What does the 'flex' utility class do in Tailwind?",
    options: [
      "Makes the element flexible in width",
      "Sets display: flex on the element",
      "Adds flexbox styling to children",
      "Creates a flexible grid layout"
    ],
    correctIndex: 1,
    explanation: "The 'flex' utility sets display: flex on the element, making it a flex container."
  },
  {
    question: "How do you add left margin in Tailwind CSS?",
    options: [
      "margin-left-4",
      "left-4",
      "ml-4",
      "pl-4"
    ],
    correctIndex: 2,
    explanation: "In Tailwind, 'ml' stands for margin-left. The number represents the spacing scale (4 = 1rem)."
  },
  {
    question: "Which utility makes an element full width?",
    options: [
      "w-full",
      "width-100",
      "full-width",
      "max-w"
    ],
    correctIndex: 0,
    explanation: "The 'w-full' utility sets width: 100%, making the element span its container's full width."
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <Hero />
        <LessonsGrid />
        <InteractiveExamples />
        
        {/* Quiz Section */}
        <section className="py-20 bg-background">
          <div className="container px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Test Your Knowledge
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Take a quick quiz to reinforce what you've learned and earn XP!
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto"
            >
              <Quiz title="Tailwind Basics Quiz" questions={quizQuestions} />
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
