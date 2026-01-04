import { motion } from "framer-motion";
import { ChevronRight, Clock, CheckCircle2 } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface LessonCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  difficulty: "beginner" | "intermediate" | "advanced";
  duration: string;
  isCompleted?: boolean;
  onClick?: () => void;
  delay?: number;
}

const difficultyColors = {
  beginner: "bg-success/10 text-success border-success/20",
  intermediate: "bg-accent/10 text-accent border-accent/20",
  advanced: "bg-destructive/10 text-destructive border-destructive/20",
};

const difficultyLabels = {
  beginner: "Beginner",
  intermediate: "Intermediate",
  advanced: "Advanced",
};

export const LessonCard = ({
  title,
  description,
  icon: Icon,
  difficulty,
  duration,
  isCompleted = false,
  onClick,
  delay = 0,
}: LessonCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: delay * 0.1, duration: 0.5 }}
      whileHover={{ y: -4, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="group cursor-pointer"
    >
      <div className="h-full p-6 rounded-2xl border border-border bg-card hover:border-primary/50 hover:shadow-glow transition-all duration-300">
        <div className="flex items-start justify-between mb-4">
          <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
            <Icon className="w-6 h-6 text-primary" />
          </div>
          {isCompleted && (
            <CheckCircle2 className="w-6 h-6 text-success" />
          )}
        </div>
        
        <h3 className="font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {description}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className={`category-badge border ${difficultyColors[difficulty]}`}>
              {difficultyLabels[difficulty]}
            </span>
            <span className="flex items-center gap-1 text-xs text-muted-foreground">
              <Clock className="w-3 h-3" />
              {duration}
            </span>
          </div>
          <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
        </div>
      </div>
    </motion.div>
  );
};
