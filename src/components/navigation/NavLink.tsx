'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import styles from './Nav.module.scss';

export type NavLinkProps = {
  linkRef: string;
  linkText: string;
};

export function NavLink({ linkRef, linkText }: NavLinkProps) {
  const pathname = usePathname();
  return (
    <li>
      <Link
        href={linkRef}
        className={`${styles.sidebarLink} ${
          pathname === linkRef && styles.active
        }`}
      >
        {linkText}
      </Link>
    </li>
  );
}
