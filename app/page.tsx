'use client ';
import { Link } from '@/components/Elements';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>hello!</div>
      <Link href={'/app/discussions'}>Go To Discussions→</Link>
    </main>
  );
}
