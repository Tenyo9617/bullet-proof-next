'use server';

import { CreateDiscussionDTO } from './components/CreateDiscussion';

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

  return res.json();
}
