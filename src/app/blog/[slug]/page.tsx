import type { Metadata } from 'next';
import { MOCK_BLOGS } from '@/lib/mockData';
import BlogDetailClient from './BlogDetailClient';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const blog = MOCK_BLOGS.find((b) => b.slug === slug);
  if (!blog) {
    return {
      title: 'Article Not Found | AAVORide Blog',
    };
  }
  return {
    title: `${blog.title} | AAVORide Blog`,
    description: blog.excerpt,
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      type: 'article',
      publishedTime: blog.publishDate,
      authors: [blog.author.name],
      images: [
        {
          url: blog.coverImage,
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: blog.title,
      description: blog.excerpt,
      images: [blog.coverImage],
    },
  };
}

export default async function Page({ params }: Props) {
  return <BlogDetailClient params={params} />;
}
