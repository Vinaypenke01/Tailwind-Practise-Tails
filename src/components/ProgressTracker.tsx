import { motion } from "framer-motion";
import { Trophy, Flame, Star } from "lucide-react";

interface ProgressTrackerProps {
  completedLessons: number;
  totalLessons: number;
  streak: number;
  xp: number;
}

export const ProgressTracker = ({
  completedLessons,
  totalLessons,
  streak,
  xp,
}: ProgressTrackerProps) => {
  const progress = (completedLessons / totalLessons) * 100;

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-wrap items-center gap-6 p-4 rounded-2xl bg-card border border-border shadow-sm"
    >
      {/* Progress */}
      <div className="flex-1 min-w-[200px]">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-foreground">Progress</span>
          <span className="text-sm text-muted-foreground">
            {completedLessons}/{totalLessons} lessons
          </span>
        </div>
        <div className="h-3 bg-muted rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-primary to-accent"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
        </div>
      </div>

      {/* Stats */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-accent/10">
          <Flame className="w-5 h-5 text-accent" />
          <div>
            <p className="text-lg font-bold text-foreground">{streak}</p>
            <p className="text-xs text-muted-foreground">Day Streak</p>
          </div>
        </div>
        
        <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-primary/10">
          <Star className="w-5 h-5 text-primary" />
          <div>
            <p className="text-lg font-bold text-foreground">{xp}</p>
            <p className="text-xs text-muted-foreground">XP</p>
          </div>
        </div>
        
        <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-success/10">
          <Trophy className="w-5 h-5 text-success" />
          <div>
            <p className="text-lg font-bold text-foreground">{Math.round(progress)}%</p>
            <p className="text-xs text-muted-foreground">Complete</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
