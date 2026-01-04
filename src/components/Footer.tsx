import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { GraduationCap, Github, Twitter, Heart } from "lucide-react";

export const Footer = () => {
  const footerLinks = {
    learn: [
      { label: "Lessons", href: "/lessons" },
      { label: "Playground", href: "/playground" },
      { label: "Challenges", href: "/lessons" },
      { label: "Quiz", href: "/lessons" },
    ],
    resources: [
      { label: "Tailwind Docs", href: "https://tailwindcss.com/docs", external: true },
      { label: "Cheat Sheet", href: "/lessons" },
      { label: "Examples", href: "/playground" },
      { label: "Templates", href: "/playground" },
    ],
    community: [
      { label: "GitHub", href: "https://github.com", external: true },
      { label: "Twitter", href: "https://twitter.com", external: true },
      { label: "Discord", href: "#" },
      { label: "Blog", href: "#" },
    ],
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <motion.div
                className="w-10 h-10 rounded-xl overflow-hidden"
                whileHover={{ scale: 1.05, rotate: 5 }}
              >
                <img src="/logo.png" alt="Tailwind Tales Logo" className="w-full h-full object-cover" />
              </motion.div>
              <span className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                Tailwind Tales
              </span>
            </Link>
            <p className="text-sm text-muted-foreground mb-4">
              Master Tailwind CSS through interactive lessons and hands-on practice.
            </p>
            <div className="flex items-center gap-3">
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github className="w-5 h-5 text-muted-foreground" />
              </motion.a>
              <motion.a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Twitter className="w-5 h-5 text-muted-foreground" />
              </motion.a>
            </div>
          </div>

          {/* Learn */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Learn</h4>
            <ul className="space-y-2">
              {footerLinks.learn.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Resources</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Community</h4>
            <ul className="space-y-2">
              {footerLinks.community.map((link) => (
                <li key={link.label}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 TailwindMaster. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-destructive fill-destructive" /> for the web community
          </p>
        </div>
      </div>
    </footer>
  );
};
