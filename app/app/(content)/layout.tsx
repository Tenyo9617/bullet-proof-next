'use client';
import { usePathname } from 'next/navigation';
import * as React from 'react';
import { NAVIGATION, SideNavigationItem } from '../components/SideNavigation';

// import { Head } from '../Head';

type ContentLayoutProps = {
  children: React.ReactNode;
};

const getTitle = (pathname: string, navigation: SideNavigationItem[]) => {
  const title = navigation.find((nav) => pathname === `/app/${nav.href}`);
  return title?.name;
};

export default function ContentLayout({ children }: ContentLayoutProps) {
  const pathname = usePathname();
  const title = getTitle(pathname, NAVIGATION);
  return (
    <>
      {/* TODO 現在使用中の機能によってmetadataを動的に生成する */}
      {/* <Head title={title} /> */}
      <div className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <h1 className="text-2xl font-semibold text-gray-900">{title ?? ''}</h1>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">{children}</div>
      </div>
    </>
  );
}
