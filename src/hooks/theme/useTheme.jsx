import { useEffect } from 'react';
import { useState } from 'react';

const useTheme = () => {
  const [theme, updateTheme] = useState(localStorage.getItem('theme') || 'light');

  const toggleTheme = () => (theme === 'light' ? updateTheme('dark') : updateTheme('light'));

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return { theme, toggleTheme };
};

export { useTheme };
