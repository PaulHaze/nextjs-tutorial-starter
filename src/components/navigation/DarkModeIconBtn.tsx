import { BsSunFill, BsMoonFill } from 'react-icons/bs';

import { useTheme } from '@/hooks';

export function DarkModeIconBtn() {
  const { setTheme, isDarkMode } = useTheme();
  return (
    <button
      className="bb"
      onClick={() => setTheme(isDarkMode ? 'light' : 'dark')}
    >
      {isDarkMode ? (
        <BsMoonFill size="20px" />
      ) : (
        <BsSunFill color="#fafafa" size="20px" />
      )}
    </button>
  );
}
