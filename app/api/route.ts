import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
  const discussions = await prisma.discussion.findMany();
  return NextResponse.json(discussions);
}

export async function POST(request: Request) {
  const req = await request.json();
  const result = await prisma.discussion.create({
    data: req,
  });
  return NextResponse.json(result);
}

export async function DELETE(request: Request) {
  const req = await request.json();
  console.log('api-delete', req);

  const result = await prisma.discussion.delete({
    where: {
      id: req.id,
    },
  });
  return NextResponse.json(result);
}

// export async function POST(request: Request) {
//   const req = await request.json();
//   await prisma.post.create({ data: req });

//   return NextResponse.json(req);
// }
