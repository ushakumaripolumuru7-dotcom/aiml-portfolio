import { createContext, useContext, useState, useEffect } from 'react';

export const ThemeContext = createContext(null);

const themes = {
  neon: {
    '--bg-primary': '#0a0a0f',
    '--bg-secondary': '#12121a',
    '--bg-card': 'rgba(255, 255, 255, 0.03)',
    '--neon-blue': '#00d4ff',
    '--neon-purple': '#7c3aed',
    '--neon-pink': '#ec4899',
    '--text-primary': '#f0f0f5',
    '--text-secondary': '#8888a0',
    '--glass-border': 'rgba(255, 255, 255, 0.08)',
    '--particle-color': '0, 212, 255',
    '--particle-secondary': '124, 58, 237',
  },
  minimal: {
    '--bg-primary': '#f8f9fc',
    '--bg-secondary': '#eef0f6',
    '--bg-card': 'rgba(0, 0, 0, 0.02)',
    '--neon-blue': '#0ea5e9',
    '--neon-purple': '#6d28d9',
    '--neon-pink': '#db2777',
    '--text-primary': '#0f172a',
    '--text-secondary': '#64748b',
    '--glass-border': 'rgba(0, 0, 0, 0.08)',
    '--particle-color': '14, 165, 233',
    '--particle-secondary': '109, 40, 217',
  },
};

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('neon');

  useEffect(() => {
    const root = document.documentElement;
    const vars = themes[theme];
    Object.entries(vars).forEach(([key, val]) => {
      root.style.setProperty(key, val);
    });
    root.setAttribute('data-theme', theme);
    document.body.style.background = vars['--bg-primary'];
    document.body.style.color = vars['--text-primary'];
  }, [theme]);

  const toggle = () => setTheme((t) => (t === 'neon' ? 'minimal' : 'neon'));

  return (
    <ThemeContext.Provider value={{ theme, toggle, themes }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
