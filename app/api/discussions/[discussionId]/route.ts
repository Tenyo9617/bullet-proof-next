import { NextResponse } from 'next/server';

export async function DELETE(_request: Request, { params }: { params: { discussionId: string } }) {
  const discussionId = params.discussionId;

  const result = await prisma.discussion.delete({
    where: {
      id: discussionId,
    },
  });

  return NextResponse.json(result);
}
