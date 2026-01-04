import { motion } from "framer-motion";
import { useState } from "react";
import { LivePreview } from "./LivePreview";
import { InteractiveDemo } from "./InteractiveDemo";

export const InteractiveExamples = () => {
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  return (
    <section className="py-20 bg-muted/30">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Learn by Doing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Interactive examples that let you see Tailwind in action. Hover, click, and explore!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Live Preview Example */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <LivePreview
              title="Flexbox Alignment"
              description="See how justify and align utilities work"
              code={`<div className="flex items-center justify-between gap-4 p-4 bg-blue-100 rounded-lg">
  <div className="w-12 h-12 bg-blue-500 rounded-lg"></div>
  <div className="w-12 h-12 bg-blue-500 rounded-lg"></div>
  <div className="w-12 h-12 bg-blue-500 rounded-lg"></div>
</div>`}
              beforePreview={
                <div className="p-4 bg-muted rounded-lg">
                  <div className="w-12 h-12 bg-primary rounded-lg mb-2"></div>
                  <div className="w-12 h-12 bg-primary rounded-lg mb-2"></div>
                  <div className="w-12 h-12 bg-primary rounded-lg"></div>
                </div>
              }
              preview={
                <div className="flex items-center justify-between gap-4 p-4 bg-primary/10 rounded-lg w-full max-w-sm">
                  <div className="w-12 h-12 bg-primary rounded-lg"></div>
                  <div className="w-12 h-12 bg-primary rounded-lg"></div>
                  <div className="w-12 h-12 bg-primary rounded-lg"></div>
                </div>
              }
            />
          </motion.div>

          {/* Hover State Demo */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <InteractiveDemo
              title="Hover States"
              description="Hover over the button to see the effect"
              hint="Hover over the button!"
            >
              <motion.button
                className="px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold transition-all duration-300 hover:bg-accent hover:scale-105 hover:shadow-glow-accent"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {hovered ? "Hover effect! 🎉" : "Hover me"}
              </motion.button>
            </InteractiveDemo>
          </motion.div>

          {/* Transition Demo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <InteractiveDemo
              title="Click Transitions"
              description="Click to see a smooth state transition"
              hint="Click the card!"
            >
              <motion.div
                className={`w-32 h-32 rounded-2xl cursor-pointer transition-all duration-500 flex items-center justify-center text-lg font-bold ${
                  clicked 
                    ? "bg-gradient-to-br from-accent to-accent/80 text-accent-foreground rotate-180 rounded-full" 
                    : "bg-gradient-to-br from-primary to-primary/80 text-primary-foreground"
                }`}
                onClick={() => setClicked(!clicked)}
                whileTap={{ scale: 0.9 }}
              >
                {clicked ? "🎨" : "Click!"}
              </motion.div>
            </InteractiveDemo>
          </motion.div>

          {/* Responsive Demo */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <LivePreview
              title="Responsive Grid"
              description="Grid that adapts from 1 to 3 columns"
              code={`<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <div className="p-4 bg-purple-100 rounded-lg">Item 1</div>
  <div className="p-4 bg-purple-200 rounded-lg">Item 2</div>
  <div className="p-4 bg-purple-300 rounded-lg">Item 3</div>
</div>`}
              preview={
                <div className="grid grid-cols-3 gap-2 w-full max-w-sm">
                  <div className="p-4 bg-secondary text-secondary-foreground rounded-lg text-center font-medium text-sm">1</div>
                  <div className="p-4 bg-secondary/80 text-secondary-foreground rounded-lg text-center font-medium text-sm">2</div>
                  <div className="p-4 bg-secondary/60 text-secondary-foreground rounded-lg text-center font-medium text-sm">3</div>
                </div>
              }
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
