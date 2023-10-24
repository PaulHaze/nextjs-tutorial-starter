import { useTheme as useNextTheme } from 'next-themes';

export function useTheme() {
  const { theme, setTheme } = useNextTheme();
  const isDarkMode = theme === 'dark';
  return { theme, setTheme, isDarkMode };
}
