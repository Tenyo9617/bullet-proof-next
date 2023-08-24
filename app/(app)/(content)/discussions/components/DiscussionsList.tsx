import { Table, Spinner, Link } from '@/components/Elements';
import { formatDate } from '@/utils/format';

// import { useDiscussions } from '../api/getDiscussions';
import { Discussion } from '../types';

import { DeleteDiscussion } from './DeleteDiscussion';
import { use } from 'react';

async function fetchDiscussList() {
  const res = await fetch('http://localhost:3000/api', {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}
export const DiscussionsList = () => {
  const data = use(fetchDiscussList());

  const discussionsQuery = {
    isLoading: false,
  };
  // const discussionsQuery = useDiscussions();

  if (discussionsQuery.isLoading) {
    return (
      <div className="w-full h-48 flex justify-center items-center">
        <Spinner size="lg" />
      </div>
    );
  }

  if (!data) return null;

  return (
    <Table<Discussion>
      data={data}
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
};
