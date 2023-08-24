import { TrashIcon } from '@heroicons/react/24/outline';

import { Button, ConfirmationDialog } from '@/components/Elements';

// import { useDeleteDiscussion } from '../api/deleteDiscussion';

type DeleteDiscussionProps = {
  id: string;
};

export const DeleteDiscussion = ({ id }: DeleteDiscussionProps) => {
  const deleteDiscussionMutation = {
    isLoading: false,
  };
  // const deleteDiscussionMutation = useDeleteDiscussion();

  return (
    <ConfirmationDialog
      icon="danger"
      title="Delete Discussion"
      body="Are you sure you want to delete this discussion?"
      triggerButton={
        <Button variant="danger" startIcon={<TrashIcon className="h-4 w-4" />}>
          Delete Discussion
        </Button>
      }
      confirmButton={
        <Button
          isLoading={deleteDiscussionMutation.isLoading}
          type="button"
          className="bg-red-600"
          onClick={async () => {
            console.log(12);
          }}
          // onClick={async () => await deleteDiscussionMutation.mutateAsync({ discussionId: id })}
        >
          Delete Discussion
        </Button>
      }
    />
  );
};
