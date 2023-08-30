'use client';
import { PlusIcon } from '@heroicons/react/24/outline';
import * as z from 'zod';
import prisma from '@/lib/prisma';
import { Button } from '@/components/Elements';
import { Form, FormDrawer, InputField, TextAreaField } from '@/components/Form';
import { data } from 'autoprefixer';
import { redirect, useRouter } from 'next/navigation';
import { useState } from 'react';
// import { createDiscussion } from '../actions';

import { CreateDiscussionDTO, useCreateDiscussion } from '../client-api/createDiscussion';

// async function createDiscuss(data: CreateDiscussionDTO['data']) {
//   const res = await fetch('http://localhost:3000/api', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       title: data.title,
//       body: data.body,
//     }),
//   });
//   // The return value is *not* serialized
//   // You can return Date, Map, Set, etc.

//   if (!res.ok) {
//     // This will activate the closest `error.js` Error Boundary
//     throw new Error('Failed to fetch data');
//   }

//   return res.json();
// }
// export async function createDiscussion(data: CreateDiscussionDTO['data']) {
//   const res = await fetch('http://localhost:3000/api', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       title: data.title,
//       body: data.body,
//     }),
//   });
//   // The return value is *not* serialized
//   // You can return Date, Map, Set, etc.

//   if (!res.ok) {
//     // This will activate the closest `error.js` Error Boundary
//     throw new Error('Failed to fetch data');
//   }
// }
const schema = z.object({
  title: z.string().min(1, 'Required'),
  body: z.string().min(1, 'Required'),
});

export default function CreateDiscussion() {
  // const [isSuccess, setIsSuccess] = useState(false);
  // const router = useRouter();
  // // 仮置き
  // const createDiscussionMutation = {
  //   isSuccess: false,
  //   isLoading: false,
  // };
  const createDiscussionMutation = useCreateDiscussion();

  // const result = prisma.discussion.create({
  //   data: {
  //     body: "I'm body",
  //     title: "I'm title",
  //   },
  // });
  // console.log(result);
  return (
    <FormDrawer
      isDone={createDiscussionMutation.isSuccess}
      triggerButton={
        <Button size="sm" startIcon={<PlusIcon className="h-4 w-4" />}>
          Create Discussion
        </Button>
      }
      title="Create Discussion"
      submitButton={
        <Button form="create-discussion" type="submit" size="sm" isLoading={createDiscussionMutation.isLoading}>
          Submit
        </Button>
      }
    >
      <Form<CreateDiscussionDTO['data'], typeof schema>
        id="create-discussion"
        onSubmit={async (values) => {
          await createDiscussionMutation.mutateAsync({ data: values });
          // onSubmit={async (values) => {
          //   setIsSuccess(false);
          //   const data = await createDiscussion(values);
          //   setIsSuccess(true);

          //   router.refresh();
        }}
        schema={schema}
      >
        {({ register, formState }) => (
          <>
            <InputField label="Title" error={formState.errors['title']} registration={register('title')} />

            <TextAreaField label="Body" error={formState.errors['body']} registration={register('body')} />
          </>
        )}
      </Form>
    </FormDrawer>
  );
}
