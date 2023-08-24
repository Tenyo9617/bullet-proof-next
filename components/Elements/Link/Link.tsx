import clsx from 'clsx';
import RouterLink, { LinkProps } from 'next/link';

type props = LinkProps & {
  className?: string;
  children: React.ReactNode;
};

export const Link = ({ className, children, ...props }: props) => {
  return (
    <RouterLink className={clsx('text-indigo-600 hover:text-indigo-900', className)} {...props}>
      {children}
    </RouterLink>
  );
};
