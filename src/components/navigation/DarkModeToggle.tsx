import * as React from 'react';

import { useTheme } from '@/hooks';

import styles from './DarkModeToggle.module.scss';

export function DarkModeToggle() {
  const { setTheme, isDarkMode } = useTheme();

  return (
    <div className={styles.toggle}>
      {
        <span
          className={
            isDarkMode
              ? 'cursor-default text-offwhite'
              : 'cursor-pointer text-gray-500 hover:text-gray-900'
          }
          onClick={() => setTheme('dark')}
          aria-hidden="true"
        >
          Dark
        </span>
      }

      <input
        type="checkbox"
        role="switch"
        checked={!isDarkMode}
        aria-checked={!isDarkMode}
        aria-label="dark light theme switch"
        onChange={() => setTheme(isDarkMode ? 'light' : 'dark')}
      />
      {
        <span
          className={
            isDarkMode
              ? 'cursor-pointer text-gray-500 hover:text-gray-100'
              : 'cursor-default text-gray-900'
          }
          onClick={() => setTheme('light')}
          aria-hidden="true"
        >
          Light
        </span>
      }
    </div>
  );
}
