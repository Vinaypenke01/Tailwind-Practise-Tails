import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, Sparkles, Code2, Layers, Palette } from "lucide-react";
import { Link } from "react-router-dom";

const FloatingElement = ({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) => (
  <motion.div
    className={`absolute ${className}`}
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay, duration: 0.5, type: "spring" }}
  >
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay }}
    >
      {children}
    </motion.div>
  </motion.div>
);

const AnimatedCounter = ({ target }: { target: number }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const controls = animate(count, target, { duration: 2, delay: 0.5 });
    const unsubscribe = rounded.on("change", (latest) => setDisplayValue(latest));
    return () => {
      controls.stop();
      unsubscribe();
    };
  }, [count, rounded, target]);

  return <span>{displayValue}</span>;
};

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-[linear-gradient(135deg,hsl(var(--background))_0%,hsl(200_60%_95%)_50%,hsl(187_40%_94%)_100%)]" />
      
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      {/* Floating Elements */}
      <FloatingElement delay={0.2} className="top-[15%] left-[10%]">
        <div className="p-4 rounded-2xl bg-card shadow-lg border border-border">
          <Code2 className="w-8 h-8 text-primary" />
        </div>
      </FloatingElement>
      
      <FloatingElement delay={0.4} className="top-[20%] right-[15%]">
        <div className="p-4 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/10 border border-accent/20">
          <Palette className="w-8 h-8 text-accent" />
        </div>
      </FloatingElement>
      
      <FloatingElement delay={0.6} className="bottom-[25%] left-[15%]">
        <div className="p-4 rounded-2xl bg-gradient-to-br from-success/20 to-success/10 border border-success/20">
          <Layers className="w-8 h-8 text-success" />
        </div>
      </FloatingElement>

      <FloatingElement delay={0.8} className="bottom-[20%] right-[10%]">
        <div className="px-4 py-2 rounded-xl bg-card shadow-lg border border-border font-mono text-sm">
          <span className="text-primary">class</span>=<span className="text-accent">"flex items-center"</span>
        </div>
      </FloatingElement>

      {/* Content */}
      <div className="container relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8"
          >
            <Sparkles className="w-4 h-4" />
            <span>Learn by doing, not by reading</span>
          </motion.div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
            <span className="block text-foreground">Master</span>
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary to-accent">
              Tailwind CSS
            </span>
            <span className="block text-foreground">The Fun Way</span>
          </h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            Interactive lessons, live code examples, and hands-on challenges. 
            Go from zero to hero with the most popular CSS framework.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/lessons"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-primary to-primary/80 text-primary-foreground font-semibold text-lg shadow-glow hover:shadow-lg transition-all"
              >
                Start Learning Free
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/playground"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-card border border-border text-foreground font-semibold text-lg hover:bg-muted transition-colors"
              >
                <Code2 className="w-5 h-5" />
                Try Playground
              </Link>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto"
          >
            {[
              { value: 50, label: "Lessons", suffix: "+" },
              { value: 100, label: "Examples", suffix: "+" },
              { value: 25, label: "Challenges", suffix: "" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-foreground">
                  <AnimatedCounter target={stat.value} />
                  {stat.suffix}
                </p>
                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};
