'use client';

import { useState } from 'react';
import { ThemeProvider } from 'next-themes';

import { NavBar } from '../navigation/NavBar';

export type MainLayoutProps = {
  children: React.ReactNode;
};

export function MainTemplate({ children }: MainLayoutProps) {
  const [showNav, setShowNav] = useState(true);
  const handleNavClick = () => setShowNav((prev) => !prev);

  return (
    <ThemeProvider enableSystem={false} defaultTheme="dark" attribute="class">
      <div className="flex flex-grow">
        <div
          className={`transition-all duration-700 ease-in-out ${
            showNav ? 'w-[150px] min-w-[150px]' : 'w-[40px] min-w-[40px]'
          }`}
        >
          <NavBar showNav={showNav} handleNavClick={handleNavClick} />
        </div>
        <main className="w-full">{children}</main>
      </div>
    </ThemeProvider>
  );
}
