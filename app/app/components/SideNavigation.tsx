import { UserIcon, FolderIcon, HomeIcon, UsersIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export type SideNavigationItem = {
  name: string;
  href: string;
  icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
};

export const NAVIGATION = [
  { name: 'Dashboard', href: 'dashboard', icon: HomeIcon },
  { name: 'Discussions', href: 'discussions', icon: FolderIcon },
  {
    name: 'Users',
    href: 'users',
    icon: UsersIcon,
  },
].filter(Boolean) as SideNavigationItem[];

export const SideNavigation = () => {
  const pathname = usePathname();

  return (
    <>
      {NAVIGATION.map((item, index) => {
        const isActive = pathname === `/app/${item.href}`;

        // const isActive = pathname === item.href.replace(/[.]/g, '');
        return (
          <Link
            key={item.name}
            href={item.href}
            className={clsx(
              'text-gray-300 hover:bg-gray-700 hover:text-white',
              'group flex items-center px-2 py-2 text-base font-medium rounded-md',
              isActive && 'bg-gray-900 text-white'
            )}
          >
            <item.icon
              className={clsx('text-gray-400 group-hover:text-gray-300', 'mr-4 flex-shrink-0 h-6 w-6')}
              aria-hidden="true"
            />
            {item.name}
          </Link>
        );
      })}
    </>
  );
};
