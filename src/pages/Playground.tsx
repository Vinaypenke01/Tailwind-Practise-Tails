import { useState } from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CodeBlock } from "@/components/CodeBlock";
import { Play, RotateCcw, Sparkles, Copy, Check } from "lucide-react";

const defaultCode = `<!-- Try editing this code! -->
<div class="flex items-center justify-center min-h-[200px] bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl p-8">
  <div class="text-center">
    <h2 class="text-3xl font-bold text-white mb-2">
      Hello Tailwind! 👋
    </h2>
    <p class="text-white/80">
      Edit the code to see changes live
    </p>
    <button class="mt-4 px-6 py-2 bg-white text-blue-600 font-semibold rounded-lg hover:bg-white/90 transition-colors">
      Click me!
    </button>
  </div>
</div>`;

const templates = [
  {
    name: "Card Component",
    code: `<div class="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white">
  <div class="h-48 bg-gradient-to-br from-purple-500 to-pink-500"></div>
  <div class="p-6">
    <h3 class="font-bold text-xl mb-2 text-gray-900">Card Title</h3>
    <p class="text-gray-600 text-sm">
      This is a beautiful card component built with Tailwind CSS utilities.
    </p>
    <div class="mt-4 flex gap-2">
      <span class="px-3 py-1 bg-purple-100 text-purple-700 text-xs font-medium rounded-full">
        Tag 1
      </span>
      <span class="px-3 py-1 bg-pink-100 text-pink-700 text-xs font-medium rounded-full">
        Tag 2
      </span>
    </div>
  </div>
</div>`
  },
  {
    name: "Navigation Bar",
    code: `<nav class="flex items-center justify-between p-4 bg-gray-900 rounded-xl">
  <div class="text-white font-bold text-xl">Logo</div>
  <div class="flex items-center gap-6">
    <a href="#" class="text-white/80 hover:text-white transition-colors">Home</a>
    <a href="#" class="text-white/80 hover:text-white transition-colors">About</a>
    <a href="#" class="text-white/80 hover:text-white transition-colors">Contact</a>
    <button class="px-4 py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition-colors">
      Sign Up
    </button>
  </div>
</nav>`
  },
  {
    name: "Profile Card",
    code: `<div class="flex items-center gap-4 p-4 bg-white rounded-xl shadow-md">
  <div class="w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-cyan-500 flex items-center justify-center text-white text-2xl font-bold">
    JD
  </div>
  <div>
    <h4 class="font-semibold text-gray-900">John Doe</h4>
    <p class="text-sm text-gray-500">Software Developer</p>
    <div class="flex items-center gap-1 mt-1">
      <span class="w-2 h-2 bg-green-500 rounded-full"></span>
      <span class="text-xs text-green-600">Available for work</span>
    </div>
  </div>
</div>`
  },
  {
    name: "Button Group",
    code: `<div class="flex flex-col gap-4 items-center">
  <button class="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all hover:scale-105 shadow-lg shadow-blue-500/30">
    Primary Button
  </button>
  <button class="px-6 py-3 bg-transparent border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-gray-400 transition-colors">
    Secondary Button
  </button>
  <button class="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity">
    Gradient Button
  </button>
</div>`
  }
];

const Playground = () => {
  const [code, setCode] = useState(defaultCode);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleReset = () => {
    setCode(defaultCode);
  };

  const loadTemplate = (templateCode: string) => {
    setCode(templateCode);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <main className="flex-1 container px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-2">
            <Sparkles className="w-8 h-8 text-primary" />
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">
              Tailwind Playground
            </h1>
          </div>
          <p className="text-muted-foreground">
            Write Tailwind CSS code and see it render in real-time. Perfect for experimenting!
          </p>
        </motion.div>

        {/* Templates */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-6"
        >
          <p className="text-sm font-medium text-muted-foreground mb-3">Quick Templates:</p>
          <div className="flex flex-wrap gap-2">
            {templates.map((template) => (
              <motion.button
                key={template.name}
                onClick={() => loadTemplate(template.code)}
                className="px-4 py-2 rounded-lg bg-muted text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {template.name}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid lg:grid-cols-2 gap-6"
        >
          {/* Code Editor */}
          <div className="rounded-2xl border border-border bg-card overflow-hidden">
            <div className="flex items-center justify-between p-4 border-b border-border bg-muted/30">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-destructive/60"></div>
                <div className="w-3 h-3 rounded-full bg-accent/60"></div>
                <div className="w-3 h-3 rounded-full bg-success/60"></div>
                <span className="ml-2 text-sm font-medium text-muted-foreground">index.html</span>
              </div>
              <div className="flex items-center gap-2">
                <motion.button
                  onClick={handleCopy}
                  className="p-2 rounded-lg hover:bg-muted transition-colors"
                  whileTap={{ scale: 0.95 }}
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-success" />
                  ) : (
                    <Copy className="w-4 h-4 text-muted-foreground" />
                  )}
                </motion.button>
                <motion.button
                  onClick={handleReset}
                  className="p-2 rounded-lg hover:bg-muted transition-colors"
                  whileTap={{ scale: 0.95 }}
                >
                  <RotateCcw className="w-4 h-4 text-muted-foreground" />
                </motion.button>
              </div>
            </div>
            <div className="p-4">
              <textarea
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="w-full h-[400px] bg-[hsl(222,47%,11%)] text-[hsl(210,40%,98%)] font-mono text-sm p-4 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-primary/50"
                spellCheck={false}
              />
            </div>
          </div>

          {/* Preview */}
          <div className="rounded-2xl border border-border bg-card overflow-hidden">
            <div className="flex items-center justify-between p-4 border-b border-border bg-muted/30">
              <div className="flex items-center gap-2">
                <Play className="w-4 h-4 text-success" />
                <span className="text-sm font-medium text-muted-foreground">Live Preview</span>
              </div>
            </div>
            <div 
              className="p-6 min-h-[448px] bg-[linear-gradient(45deg,hsl(var(--muted))_25%,transparent_25%),linear-gradient(-45deg,hsl(var(--muted))_25%,transparent_25%),linear-gradient(45deg,transparent_75%,hsl(var(--muted))_75%),linear-gradient(-45deg,transparent_75%,hsl(var(--muted))_75%)] bg-[size:20px_20px] bg-[position:0_0,0_10px,10px_-10px,-10px_0px]"
            >
              <div 
                dangerouslySetInnerHTML={{ __html: code }}
                className="[&_*]:transition-all"
              />
            </div>
          </div>
        </motion.div>

        {/* Cheat Sheet */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-12"
        >
          <h2 className="text-2xl font-bold text-foreground mb-6">Quick Reference</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: "Spacing", examples: ["p-4", "m-2", "gap-4", "space-y-2"] },
              { title: "Flexbox", examples: ["flex", "items-center", "justify-between", "flex-col"] },
              { title: "Grid", examples: ["grid", "grid-cols-3", "col-span-2", "gap-6"] },
              { title: "Colors", examples: ["bg-blue-500", "text-white", "border-gray-200", "hover:bg-blue-600"] },
            ].map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="p-4 rounded-xl border border-border bg-card"
              >
                <h3 className="font-semibold text-foreground mb-3">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.examples.map((example) => (
                    <code
                      key={example}
                      className="px-2 py-1 bg-muted rounded text-xs font-mono text-primary cursor-pointer hover:bg-primary/10 transition-colors"
                      onClick={() => navigator.clipboard.writeText(example)}
                    >
                      {example}
                    </code>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Playground;
