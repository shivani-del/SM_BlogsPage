import { NextRequest, NextResponse } from 'next/server';
import { MOCK_BLOGS } from '@/lib/mockData';

export async function GET(request: NextRequest) {
  await new Promise((resolve) => setTimeout(resolve, 600));

  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category') || 'All Stories';
  const search = searchParams.get('search') || '';
  const page = parseInt(searchParams.get('page') || '1', 10);
  const limit = parseInt(searchParams.get('limit') || '3', 10);

  let filtered = [...MOCK_BLOGS];

  // Filter by category
  if (category !== 'All Stories') {
    filtered = filtered.filter(
      (blog) => blog.category.toLowerCase() === category.toLowerCase()
    );
  }

  // Filter by search term
  if (search.trim()) {
    const term = search.toLowerCase().trim();
    filtered = filtered.filter(
      (blog) =>
        blog.title.toLowerCase().includes(term) ||
        blog.excerpt.toLowerCase().includes(term) ||
        blog.category.toLowerCase().includes(term) ||
        blog.author.name.toLowerCase().includes(term)
    );
  }

  // Calculate pagination
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const paginatedBlogs = filtered.slice(startIndex, endIndex);
  const hasMore = endIndex < filtered.length;

  return NextResponse.json({
    blogs: paginatedBlogs,
    total: filtered.length,
    hasMore,
  });
}
