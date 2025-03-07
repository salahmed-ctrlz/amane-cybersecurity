import { useState, createContext, useContext, useEffect } from 'react';

type Theme = 'light' | 'dark';
type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  theme: 'dark', // Default theme is set to dark mode
  toggleTheme: () => {},
});

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>('dark'); // Default to dark mode

  // Ensure the theme is set from localStorage if available
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme) {
      setTheme(savedTheme);
      document.body.classList.add(savedTheme); // Set the theme on the body element
    } else {
      // Apply the default theme on initial load
      document.body.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.body.classList.toggle('dark', newTheme === 'dark');
    localStorage.setItem('theme', newTheme); // Save the user's theme preference in localStorage
  };

  return {
    theme,
    toggleTheme,
  };
};

export const useThemeContext = () => {
  return useContext(ThemeContext);
};
