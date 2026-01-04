import { motion } from "framer-motion";

interface Category {
  id: string;
  label: string;
  icon: React.ReactNode;
}

interface CategoryTabsProps {
  categories: Category[];
  activeCategory: string;
  onChange: (id: string) => void;
}

export const CategoryTabs = ({ categories, activeCategory, onChange }: CategoryTabsProps) => {
  return (
    <div className="flex flex-wrap gap-2 p-1 bg-muted/50 rounded-2xl">
      {categories.map((category) => (
        <motion.button
          key={category.id}
          onClick={() => onChange(category.id)}
          className={`relative flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
            activeCategory === category.id
              ? "text-primary-foreground"
              : "text-muted-foreground hover:text-foreground"
          }`}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {activeCategory === category.id && (
            <motion.div
              layoutId="activeTab"
              className="absolute inset-0 bg-primary rounded-xl"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          <span className="relative z-10">{category.icon}</span>
          <span className="relative z-10">{category.label}</span>
        </motion.button>
      ))}
    </div>
  );
};
