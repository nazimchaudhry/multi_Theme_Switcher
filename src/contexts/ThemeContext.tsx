import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { ThemeType, ThemeContextType } from '../types/theme.ts';

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState<ThemeType>('theme1');
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('selectedTheme') as ThemeType;
    if (savedTheme && ['theme1', 'theme2', 'theme3'].includes(savedTheme)) {
      setCurrentTheme(savedTheme);
    }
  }, []);

  const setTheme = (theme: ThemeType) => {
    if (theme === currentTheme) return;
    
    setIsTransitioning(true);
    
    setTimeout(() => {
      setCurrentTheme(theme);
      localStorage.setItem('selectedTheme', theme);
      
      setTimeout(() => {
        setIsTransitioning(false);
      }, 100);
    }, 150);
  };

  const value: ThemeContextType = {
    currentTheme,
    setTheme,
    isTransitioning,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};