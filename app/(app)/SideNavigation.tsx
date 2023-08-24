import { UserIcon, FolderIcon, HomeIcon, UsersIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export type SideNavigationItem = {
  name: string;
  to: string;
  icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
};

export const NAVIGATION = [
  { name: 'Dashboard', to: '.', icon: HomeIcon },
  { name: 'Discussions', to: './discussions', icon: FolderIcon },
].filter(Boolean) as SideNavigationItem[];

export const SideNavigation = () => {
  const pathname = usePathname();

  return (
    <>
      {NAVIGATION.map((item, index) => (
        <Link
          key={item.name}
          href={item.to}
          className={clsx(
            'text-gray-300 hover:bg-gray-700 hover:text-white',
            'group flex items-center px-2 py-2 text-base font-medium rounded-md',
            pathname === item.to.replace(/[.]/g, '') && 'bg-gray-900 text-white'
          )}
        >
          <item.icon
            className={clsx('text-gray-400 group-hover:text-gray-300', 'mr-4 flex-shrink-0 h-6 w-6')}
            aria-hidden="true"
          />
          {item.name}
        </Link>
      ))}
    </>
  );
};
