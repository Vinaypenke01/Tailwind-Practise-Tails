import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, Code, ArrowLeftRight } from "lucide-react";
import { CodeBlock } from "./CodeBlock";

interface LivePreviewProps {
  code: string;
  preview: React.ReactNode;
  beforePreview?: React.ReactNode;
  title?: string;
  description?: string;
}

export const LivePreview = ({ 
  code, 
  preview, 
  beforePreview,
  title,
  description 
}: LivePreviewProps) => {
  const [activeTab, setActiveTab] = useState<"preview" | "code">("preview");
  const [showBefore, setShowBefore] = useState(false);

  return (
    <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-lg">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-border bg-muted/30">
        <div>
          {title && <h3 className="font-semibold text-foreground">{title}</h3>}
          {description && <p className="text-sm text-muted-foreground mt-0.5">{description}</p>}
        </div>
        
        <div className="flex items-center gap-2">
          {beforePreview && (
            <motion.button
              onClick={() => setShowBefore(!showBefore)}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                showBefore 
                  ? "bg-accent text-accent-foreground" 
                  : "bg-muted text-muted-foreground hover:text-foreground"
              }`}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowLeftRight className="w-4 h-4" />
              {showBefore ? "After" : "Before"}
            </motion.button>
          )}
          
          <div className="flex bg-muted rounded-lg p-1">
            <button
              onClick={() => setActiveTab("preview")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                activeTab === "preview" 
                  ? "bg-card text-foreground shadow-sm" 
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Eye className="w-4 h-4" />
              Preview
            </button>
            <button
              onClick={() => setActiveTab("code")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                activeTab === "code" 
                  ? "bg-card text-foreground shadow-sm" 
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Code className="w-4 h-4" />
              Code
            </button>
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="min-h-[200px]">
        <AnimatePresence mode="wait">
          {activeTab === "preview" ? (
            <motion.div
              key="preview"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="p-6 flex items-center justify-center bg-[linear-gradient(45deg,hsl(var(--muted))_25%,transparent_25%),linear-gradient(-45deg,hsl(var(--muted))_25%,transparent_25%),linear-gradient(45deg,transparent_75%,hsl(var(--muted))_75%),linear-gradient(-45deg,transparent_75%,hsl(var(--muted))_75%)] bg-[size:20px_20px] bg-[position:0_0,0_10px,10px_-10px,-10px_0px]"
            >
              <AnimatePresence mode="wait">
                {showBefore && beforePreview ? (
                  <motion.div
                    key="before"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                  >
                    {beforePreview}
                  </motion.div>
                ) : (
                  <motion.div
                    key="after"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                  >
                    {preview}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ) : (
            <motion.div
              key="code"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <CodeBlock code={code} showLineNumbers />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
