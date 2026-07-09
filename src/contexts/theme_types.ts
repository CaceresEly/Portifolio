export type Theme = 'dark' | 'light';

export type ThemeContextValue = {
  theme: Theme;
  toggleTheme: () => void;
};