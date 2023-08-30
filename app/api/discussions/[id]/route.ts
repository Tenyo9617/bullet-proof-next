import { NextResponse } from 'next/server';

export async function DELETE(_request: Request, { params }: { params: { id: string } }) {
  const discussionId = params.id;

  const result = await prisma.discussion.delete({
    where: {
      id: discussionId,
    },
  });

  return NextResponse.json(result);
}
