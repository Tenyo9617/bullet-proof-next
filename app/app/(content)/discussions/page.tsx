'use client';
import { Table, Spinner, Link } from '@/components/Elements';
import { formatDate } from '@/utils/format';
import { useDiscussions } from './client-api/getDiscussions';
import { Discussion } from './types';
import prisma from '@/lib/prisma';

import { DeleteDiscussion } from './components/DeleteDiscussion';

// async function fetchDiscussList() {
//   const res = await prisma.discussion.findMany();

//   // The return value is *not* serialized
//   // You can return Date, Map, Set, etc.
//   console.log(res.ok);

//   if (!res.ok) {
//     // This will activate the closest `error.js` Error Boundary
//     throw new Error('Failed to fetch data');
//   }

//   return res.json();
// }

export default function DiscussionsList() {
  // const data = await fetchDiscussList();
  // const data = await prisma.discussion.findMany();
  // const data = [
  //   {
  //     id: 1,
  //     title: 'title!',
  //     body: 'body!\n',
  //     // teamId: 'VR9Dc1rSh9uTxOFm20Z2v',
  //     createdAt: 1693113081266,
  //   },
  // ];
  // const data = [];
  // const discussionsQuery = {
  //   isLoading: false,
  // };
  const discussionsQuery = useDiscussions();

  if (discussionsQuery.isLoading) {
    return (
      <div className="w-full h-48 flex justify-center items-center">
        <Spinner size="lg" />
      </div>
    );
  }

  if (!discussionsQuery.data) return null;

  return (
    <Table<Discussion>
      data={discussionsQuery.data}
      columns={[
        {
          title: 'Title',
          field: 'title',
        },
        {
          title: 'Created At',
          field: 'createdAt',
          Cell({ entry: { createdAt } }) {
            return <span>{formatDate(createdAt)}</span>;
          },
        },
        {
          title: '',
          field: 'id',
          Cell({ entry: { id } }) {
            return <Link href={`./${id}`}>View</Link>;
          },
        },
        {
          title: '',
          field: 'id',
          Cell({ entry: { id } }) {
            return <DeleteDiscussion id={id} />;
          },
        },
      ]}
    />
  );
}
