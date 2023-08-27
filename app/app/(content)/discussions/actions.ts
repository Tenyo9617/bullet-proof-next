'use server';

import { revalidatePath } from 'next/cache';
import { CreateDiscussionDTO } from './@createDiscussion/page';
import prisma from '@/lib/prisma';
import { redirect } from 'next/navigation';

export async function createDiscussion(data: CreateDiscussionDTO['data']) {
  const res = await fetch('http://localhost:3000/api', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title: data.title,
      body: data.body,
    }),
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }
  redirect('/app/discussions');
}
// export async function createDiscussion(data: CreateDiscussionDTO['data']) {
//   const result = await prisma.discussion.create({
//     data,
//   });
//   console.log('result', result);
//   redirect('/app/discussions/aaa');
// }
