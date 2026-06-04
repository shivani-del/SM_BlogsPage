import { NextRequest, NextResponse } from 'next/server';
import { MOCK_BLOGS } from '@/lib/mockData';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  // Simulate network latency
  await new Promise((resolve) => setTimeout(resolve, 400));

  const { slug } = await params;
  const blog = MOCK_BLOGS.find((b) => b.slug === slug);

  if (!blog) {
    return NextResponse.json(
      { error: 'Blog post not found' },
      { status: 404 }
    );
  }

  return NextResponse.json(blog);
}
