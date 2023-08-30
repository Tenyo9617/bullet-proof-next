import { PlusIcon } from '@heroicons/react/24/outline';
import * as z from 'zod';
import { Button } from '@/components/Elements';
import { Form, FormDrawer, InputField, TextAreaField } from '@/components/Form';

import { CreateDiscussionDTO, useCreateDiscussion } from '../client-api/createDiscussion';

const schema = z.object({
  title: z.string().min(1, 'Required'),
  body: z.string().min(1, 'Required'),
});

export default function CreateDiscussion() {
  const createDiscussionMutation = useCreateDiscussion();

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
