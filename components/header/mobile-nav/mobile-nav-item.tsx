import Link from 'next/link';
import { ReactNode } from 'react';

interface MobileNavItemProps {
  page: string;
  children: ReactNode;
}

const MobileNavItem = ({ page, children }: MobileNavItemProps) => {
  return <Link href={`/${page}`}>{children}</Link>;
};

export default MobileNavItem;
