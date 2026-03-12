import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Sun } from 'lucide-react';
import { useTheme } from './ThemeContext';

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const isNeon = theme === 'neon';

  return (
    <motion.button
      onClick={toggle}
      title={isNeon ? 'Switch to Minimalist Professional' : 'Switch to Neon Cyberpunk'}
      whileTap={{ scale: 0.92 }}
      className={`relative flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all duration-300 ${
        isNeon
          ? 'border-cyan-500/30 bg-cyan-500/10 text-cyan-300 hover:bg-cyan-500/20'
          : 'border-slate-300 bg-white text-slate-600 hover:bg-slate-100 shadow-sm'
      }`}
    >
      <AnimatePresence mode="wait" initial={false}>
        {isNeon ? (
          <motion.span
            key="neon"
            initial={{ opacity: 0, rotate: -30 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: 30 }}
            transition={{ duration: 0.2 }}
            className="flex items-center gap-1.5"
          >
            <Zap className="w-3.5 h-3.5" />
            Neon
          </motion.span>
        ) : (
          <motion.span
            key="minimal"
            initial={{ opacity: 0, rotate: -30 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: 30 }}
            transition={{ duration: 0.2 }}
            className="flex items-center gap-1.5"
          >
            <Sun className="w-3.5 h-3.5" />
            Minimal
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
