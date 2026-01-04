import { useState } from "react";
import { motion } from "framer-motion";
import { Play, RotateCcw, Copy, Check } from "lucide-react";
import { Button } from "./ui/button";

interface InlinePlaygroundProps {
  initialCode: string;
  title?: string;
}

export const InlinePlayground = ({ initialCode, title }: InlinePlaygroundProps) => {
  const [code, setCode] = useState(initialCode);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleReset = () => {
    setCode(initialCode);
  };

  return (
    <div className="rounded-xl border border-border bg-card overflow-hidden">
      {title && (
        <div className="flex items-center justify-between p-3 border-b border-border bg-muted/30">
          <div className="flex items-center gap-2">
            <Play className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground">{title}</span>
          </div>
          <div className="flex items-center gap-1">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleCopy}
              className="h-7 w-7 p-0"
            >
              {copied ? (
                <Check className="w-3.5 h-3.5 text-green-500" />
              ) : (
                <Copy className="w-3.5 h-3.5" />
              )}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleReset}
              className="h-7 w-7 p-0"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </Button>
          </div>
        </div>
      )}
      
      <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border">
        {/* Code Editor */}
        <div className="p-3">
          <label className="text-xs font-medium text-muted-foreground mb-2 block">
            Edit Code
          </label>
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="w-full h-[200px] bg-[hsl(222,47%,11%)] text-[hsl(210,40%,98%)] font-mono text-xs p-3 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-primary/50"
            spellCheck={false}
          />
        </div>

        {/* Live Preview */}
        <div className="p-3">
          <label className="text-xs font-medium text-muted-foreground mb-2 block flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
            Live Preview
          </label>
          <div 
            className="h-[200px] overflow-auto rounded-lg bg-[linear-gradient(45deg,hsl(var(--muted))_25%,transparent_25%),linear-gradient(-45deg,hsl(var(--muted))_25%,transparent_25%),linear-gradient(45deg,transparent_75%,hsl(var(--muted))_75%),linear-gradient(-45deg,transparent_75%,hsl(var(--muted))_75%)] bg-[size:16px_16px] bg-[position:0_0,0_8px,8px_-8px,-8px_0px] p-3"
          >
            <div 
              dangerouslySetInnerHTML={{ __html: code }}
              className="[&_*]:transition-all"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
