import { useQuery, useInfiniteQuery } from '@tanstack/react-query';
import { Blog } from '@/lib/mockData';

interface BlogsResponse {
  blogs: Blog[];
  total: number;
  hasMore: boolean;
}

// Fetch list of blogs from the internal Next.js API
async function fetchBlogs({
  category = 'All Stories',
  search = '',
  page = 1,
  limit = 3,
}): Promise<BlogsResponse> {
  const url = new URL('/api/blogs', window.location.origin);
  url.searchParams.set('category', category);
  if (search) url.searchParams.set('search', search);
  url.searchParams.set('page', page.toString());
  url.searchParams.set('limit', limit.toString());

  const response = await fetch(url.toString());
  if (!response.ok) {
    throw new Error('Failed to fetch blogs');
  }
  return response.json();
}

// Fetch a single blog from the internal Next.js API
async function fetchBlogDetail(slug: string): Promise<Blog> {
  const response = await fetch(`/api/blogs/${slug}`);
  if (!response.ok) {
    throw new Error('Failed to fetch blog detail');
  }
  return response.json();
}

// Custom hook to query list of blogs using TanStack Infinite Query v5
export function useInfiniteBlogs(
  category: string,
  search: string,
  limit: number = 3
) {
  return useInfiniteQuery<BlogsResponse, Error>({
    queryKey: ['blogs', category, search, limit],
    queryFn: ({ pageParam = 1 }) =>
      fetchBlogs({
        category,
        search,
        page: pageParam as number,
        limit,
      }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.hasMore ? allPages.length + 1 : undefined;
    },
  });
}

// Custom hook to query a single blog detail
export function useBlogDetail(slug: string) {
  return useQuery<Blog, Error>({
    queryKey: ['blog', slug],
    queryFn: () => fetchBlogDetail(slug),
    enabled: !!slug,
  });
}
