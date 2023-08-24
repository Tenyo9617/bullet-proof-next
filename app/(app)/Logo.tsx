import Image from 'next/image';
import Link from 'next/link';
import logo from '@/assets/logo.svg';

export const Logo = () => {
  return (
    <Link className="flex items-center text-white" href=".">
      <Image className="h-8 w-auto" src={logo} alt="Workflow" />
      <span className="text-xl text-white font-semibold">Bulletproof React</span>
    </Link>
  );
};
