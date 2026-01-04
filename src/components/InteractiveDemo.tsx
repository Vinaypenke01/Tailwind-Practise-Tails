import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

interface InteractiveDemoProps {
  title: string;
  description: string;
  children: React.ReactNode;
  hint?: string;
}

export const InteractiveDemo = ({ 
  title, 
  description, 
  children,
  hint 
}: InteractiveDemoProps) => {
  const [hasInteracted, setHasInteracted] = useState(false);

  return (
    <motion.div
      className="rounded-2xl border border-border bg-card overflow-hidden shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="p-4 border-b border-border bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-primary" />
          <h3 className="font-semibold text-foreground">{title}</h3>
        </div>
        <p className="text-sm text-muted-foreground mt-1">{description}</p>
      </div>
      
      <div 
        className="p-8 flex items-center justify-center min-h-[200px]"
        onClick={() => setHasInteracted(true)}
        onMouseEnter={() => setHasInteracted(true)}
      >
        {children}
      </div>
      
      {hint && !hasInteracted && (
        <motion.div 
          className="px-4 pb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <p className="text-xs text-center text-muted-foreground bg-muted/50 rounded-lg py-2 px-3">
            💡 {hint}
          </p>
        </motion.div>
      )}
    </motion.div>
  );
};
