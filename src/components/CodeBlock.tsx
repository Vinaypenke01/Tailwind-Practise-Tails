import { useState } from "react";
import { Highlight, themes } from "prism-react-renderer";
import { Check, Copy } from "lucide-react";
import { motion } from "framer-motion";

interface CodeBlockProps {
  code: string;
  language?: string;
  showLineNumbers?: boolean;
  className?: string;
}

export const CodeBlock = ({ 
  code, 
  language = "tsx", 
  showLineNumbers = false,
  className = ""
}: CodeBlockProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`relative group ${className}`}>
      <motion.button
        onClick={handleCopy}
        className="absolute top-3 right-3 p-2 rounded-lg bg-muted/80 hover:bg-muted border border-border/50 opacity-0 group-hover:opacity-100 transition-all duration-200 z-10"
        whileTap={{ scale: 0.95 }}
        aria-label="Copy code"
      >
        {copied ? (
          <Check className="w-4 h-4 text-success" />
        ) : (
          <Copy className="w-4 h-4 text-muted-foreground" />
        )}
      </motion.button>
      
      <Highlight theme={themes.nightOwl} code={code.trim()} language={language}>
        {({ className: hlClassName, style, tokens, getLineProps, getTokenProps }) => (
          <pre
            className={`${hlClassName} rounded-xl p-4 overflow-x-auto text-sm font-mono`}
            style={{ ...style, background: 'hsl(222 47% 11%)' }}
          >
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line })} className="table-row">
                {showLineNumbers && (
                  <span className="table-cell text-right pr-4 select-none text-muted-foreground/50 text-xs">
                    {i + 1}
                  </span>
                )}
                <span className="table-cell">
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token })} />
                  ))}
                </span>
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  );
};
