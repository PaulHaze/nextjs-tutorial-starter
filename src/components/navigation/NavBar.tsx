'use client';

import { BiChevronsLeft } from 'react-icons/bi';

import { NavLink } from './NavLink';
import { DarkModeIconBtn } from './DarkModeIconBtn';

import { routes } from './routes';

import styles from './Nav.module.scss';

type NavBarProps = {
  showNav: boolean;
  handleNavClick: () => void;
};

export function NavBar({ showNav, handleNavClick }: NavBarProps) {
  const renderRoutes = routes.map((r) => (
    <NavLink key={r.key} linkRef={r.path} linkText={r.label} />
  ));
  return (
    <nav className={styles.sidebarContainer}>
      {/* NAV CONTAINER */}
      <div>
        {/* SHOW HIDE BUTTON */}
        <div className={styles.toggleBtnContainer}>
          <button
            type="button"
            onClick={handleNavClick}
            // onClick={handleNavClick}
            className={styles.toggleBtn}
          >
            <BiChevronsLeft
              className={`${styles.toggleIcon} ${
                showNav ? 'scale-x-100' : '-scale-x-100'
              }`}
            />
          </button>
        </div>
        {/* ROUTES */}
        <ul
          className={`${styles.linksList} ${
            !showNav ? 'opacity-0' : 'opacity-100'
          }`}
        >
          {renderRoutes}
        </ul>
      </div>
      {/* DARK MODE TOGGLE */}
      <DarkModeIconBtn />
    </nav>
  );
}
