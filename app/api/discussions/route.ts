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
