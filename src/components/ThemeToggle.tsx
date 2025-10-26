import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/contexts/ThemeContext';
import { motion } from 'framer-motion';

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className="fixed top-6 right-6 z-50"
    >
      <Button
        variant="outline"
        size="icon"
        onClick={toggleTheme}
        className="rounded-full bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300"
      >
        {theme === 'light' ? (
          <Moon className="h-5 w-5 text-slate-700" />
        ) : (
          <Sun className="h-5 w-5 text-yellow-400" />
        )}
      </Button>
    </motion.div>
  );
};