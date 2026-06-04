'use client';

import React, { useState, use } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Clock, Loader2, Compass } from 'lucide-react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { useBlogDetail, useInfiniteBlogs } from '@/hooks/useBlogs';
import { MOCK_BLOGS, CATEGORIES } from '@/lib/mockData';
import { Skeleton } from '@/components/ui/skeleton';
import BlogRow from '@/components/BlogRow';

export default function BlogDetailClient({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const { data: blog, isLoading, isError } = useBlogDetail(slug);

  const [activeCategory, setActiveCategory] = useState('All Stories');

  // React Query Fetch using Infinite Scroll
  const {
    data: recentData,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading: isRecentLoading,
  } = useInfiniteBlogs(activeCategory, '', 3);

  const recentBlogs = recentData?.pages.flatMap((page) => page.blogs) || [];

  // Set up dynamic reading progress bar using framer-motion scroll hooks
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Share handler helper
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: blog?.title,
        text: blog?.excerpt,
        url: window.location.href,
      }).catch(console.error);
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  if (isLoading) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-16 space-y-8">
        <Skeleton className="h-10 w-24 rounded-full" />
        <Skeleton className="h-64 w-full rounded-3xl" />
        <div className="space-y-4 max-w-2xl mx-auto">
          <Skeleton className="h-10 w-3/4" />
          <div className="flex space-x-4">
            <Skeleton className="h-5 w-24" />
            <Skeleton className="h-5 w-32" />
          </div>
          <Skeleton className="h-5 w-full" />
          <Skeleton className="h-5 w-full" />
          <Skeleton className="h-5. w-5/6" />
        </div>
      </div>
    );
  }

  if (isError || !blog) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-24 text-center space-y-6">
        <div className="inline-flex rounded-full bg-orange-50 p-4 text-[#FF4D30]">
          <ArrowLeft className="h-12 w-12" />
        </div>
        <h2 className="text-2xl font-black text-slate-800">Article Not Found</h2>
        <p className="text-sm text-slate-500 max-w-sm mx-auto">
          We couldn&apos;t load the requested travel story. It might have been moved or deleted.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-full bg-[#FF4D30] px-6 py-2.5 text-xs font-semibold text-white shadow-md hover:bg-[#e03d20]"
        >
          Back to Stories
        </Link>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen pb-16 bg-white">
      {/* Scroll indicator reading progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-[#FF4D30] z-50 origin-left"
        style={{ scaleX }}
      />

      {/* 1. ARTICLE BANNER HERO SECTION */}
      <section className="relative overflow-hidden w-full h-[350px] md:h-[500px]">
        {/* Banner cover image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={blog.coverImage}
            alt={blog.title}
            fill
            sizes="100vw"
            priority
            className="object-cover select-none"
          />
          {/* Cover vignette gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
          <div className="absolute inset-0 bg-slate-950/20" />
        </div>

        {/* Content over banner */}
        <div className="absolute inset-0 z-10 flex items-center pt-16">
          <div className="mx-auto max-w-7xl w-full px-6 md:px-8">
            <div className="max-w-3xl space-y-4 text-left flex flex-col items-start">
              {/* Title */}
              <motion.h1 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tight drop-shadow-sm font-sans"
              >
                {blog.title}
              </motion.h1>
 
              {/* Meta Tags */}
              <div className="flex items-center space-x-2 text-xs md:text-sm font-semibold text-slate-300">
                <Clock className="h-4 w-4 text-slate-300 shrink-0" />
                <span>{blog.readTime}</span>
                <span className="text-slate-500 font-bold">•</span>
                <span>By {blog.author.name}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. BODY CONTENT SECTION */}
      <section className="px-4 py-12 md:py-16">
        <article className="mx-auto max-w-3xl bg-white px-4 md:px-0 py-8 relative z-20 space-y-8">
          
          {/* Render blog body sections */}
          {blog.sections.map((section, idx) => {
            switch (section.type) {
              case 'paragraph':
                return (
                  <p key={idx} className="text-slate-600 font-medium text-base md:text-lg leading-relaxed">
                    {section.content}
                  </p>
                );
              case 'heading':
                return (
                  <h2 key={idx} className="text-2xl md:text-3xl font-extrabold text-slate-800 tracking-tight pt-4">
                    {section.content}
                  </h2>
                );
              case 'quote':
                return (
                  <blockquote key={idx} className="border-l-4 border-[#FF4D30] bg-orange-50/50 rounded-r-2xl p-6 italic text-slate-700 text-base md:text-lg font-medium leading-relaxed">
                    &ldquo;{section.content}&rdquo;
                  </blockquote>
                );
              case 'image':
                return (
                  <figure key={idx} className="overflow-hidden rounded-2xl my-8">
                    <Image
                      src={section.imageUrl || ''}
                      alt={section.caption || 'Article image'}
                      width={800}
                      height={450}
                      className="w-full h-auto object-cover max-h-[380px]"
                    />
                  </figure>
                );
              default:
                return null;
            }
          })}

          {/* Premium Callout Box (Figma matching CTA) */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="flex flex-col sm:flex-row items-center justify-between bg-white border border-slate-100 rounded-3xl p-6 md:p-8 shadow-sm space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <div className="flex items-center space-x-4">
              <div className="rounded-full bg-orange-50 p-3.5 text-[#FF4D30] shrink-0 flex items-center justify-center">
                <Compass className="h-6 w-6" />
              </div>
              <div className="text-center sm:text-left">
                <h4 className="text-base font-extrabold text-slate-800 leading-snug">Loved this destination?</h4>
                <p className="text-xs text-slate-500 font-semibold">
                  Get a personalized itinerary for your {blog.title.split(':')[0]} trip.
                </p>
              </div>
            </div>
            <button className="rounded-full bg-[#FF4D30] hover:bg-[#e03d20] px-6 py-3.5 text-xs font-bold text-white shadow-md hover:shadow-lg transition-all w-full sm:w-auto shrink-0 select-none font-semibold">
              Get Aavoride App
            </button>
          </motion.div>

          {/* Must Visit Spots (Figma section) */}
          {blog.mustVisitSpots && blog.mustVisitSpots.length > 0 && (
            <div className="space-y-6 pt-6 border-t border-slate-100">
              <h3 className="text-2xl font-black text-slate-800 tracking-tight flex items-center space-x-2">
                <span className="block h-5 w-1.5 bg-[#FF4D30] rounded-full" />
                <span>Must-Visit Spots</span>
              </h3>
              <div className="space-y-4 text-slate-600 font-medium text-sm md:text-base leading-relaxed">
                {blog.mustVisitSpots.map((spot, spotIdx) => (
                  <p key={spotIdx}>
                    <strong className="font-extrabold text-slate-850">{spot.name}:</strong> {spot.description}
                  </p>
                ))}
              </div>
            </div>
          )}

          {/* Author footer banner */}
          <div className="pt-8 border-t border-slate-100 flex items-center space-x-4">
            <Image
              src={blog.author.avatar}
              alt={blog.author.name}
              width={48}
              height={48}
              className="rounded-full object-cover border border-slate-200"
            />
            <div className="flex flex-col">
              <span className="text-sm font-bold text-slate-800">Written by {blog.author.name}</span>
              <span className="text-xs text-slate-400 font-semibold">{blog.author.role}</span>
            </div>
          </div>

        </article>
      </section>

      {/* 3. RECENT STORIES LIST SECTION */}
      <section className="mx-auto max-w-4xl px-4 py-8 space-y-8 z-10 relative">
        
        {/* Category Tabs Navigation */}
        <div className="w-full overflow-x-auto flex scrollbar-none space-x-2 py-2 border-b-0 md:border-b border-slate-200 justify-start md:justify-center">
          {CATEGORIES.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`relative px-4 py-2 text-xs md:text-sm font-bold rounded-full transition-all duration-200 shrink-0 select-none ${
                  isActive 
                    ? 'text-white bg-[#FF4D30] shadow-md' 
                    : 'text-slate-500 hover:text-slate-800 hover:bg-slate-100'
                }`}
              >
                <span>{category}</span>
                {isActive && (
                  <motion.div
                    layoutId="activeDetailCategoryIndicator"
                    className="absolute inset-0 bg-[#FF4D30] rounded-full -z-10 shadow-sm"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Heading */}
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-black text-slate-800 tracking-tight flex items-center space-x-2">
            <span className="block h-6 w-1 bg-[#FF4D30] rounded-full" />
            <span>Recent Stories</span>
          </h2>
        </div>

        {/* Stories List */}
        {isRecentLoading ? (
          <div className="space-y-4">
            {[1, 2].map((s) => (
              <div key={s} className="bg-white rounded-3xl p-5 border border-slate-100 flex flex-col md:flex-row gap-6 items-center">
                <Skeleton className="w-full md:w-56 h-36 rounded-2xl shrink-0" />
                <div className="flex-grow space-y-3 w-full">
                  <div className="flex space-x-2">
                    <Skeleton className="h-4 w-16 rounded-full" />
                    <Skeleton className="h-4 w-24" />
                  </div>
                  <Skeleton className="h-6 w-3/4" />
                  <Skeleton className="h-4 w-full" />
                  <div className="flex justify-between items-center pt-2">
                    <div className="flex items-center space-x-2">
                      <Skeleton className="h-8 w-8 rounded-full" />
                      <Skeleton className="h-4 w-20" />
                    </div>
                    <Skeleton className="h-4 w-16" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            <AnimatePresence mode="popLayout">
              {recentBlogs.length > 0 ? (
                recentBlogs.map((rBlog, idx) => (
                  <BlogRow key={rBlog.id} blog={rBlog} index={idx} />
                ))
              ) : (
                <div className="bg-white border border-slate-100 rounded-3xl p-12 text-center flex flex-col items-center justify-center space-y-2">
                  <h3 className="text-base font-bold text-slate-700">No articles found</h3>
                  <p className="text-xs text-slate-500 max-w-xs">
                    We couldn&apos;t find any articles under this category choice.
                  </p>
                </div>
              )}
            </AnimatePresence>
          </div>
        )}

        {/* Load More Button */}
        {hasNextPage && (
          <div className="flex justify-center pt-2">
            <button
              onClick={() => fetchNextPage()}
              disabled={isFetchingNextPage}
              className="inline-flex cursor-pointer items-center justify-center rounded-full border-2 border-slate-200 bg-white hover:border-[#FF4D30] hover:text-[#FF4D30] px-8 py-3.5 text-xs font-bold text-slate-600 shadow-sm transition-all duration-200 select-none disabled:opacity-75 disabled:cursor-not-allowed w-full sm:w-auto"
            >
              {isFetchingNextPage ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin text-[#FF4D30]" />
                  <span>Loading Inspiring Stories...</span>
                </>
              ) : (
                <span>Load More Inspiring Stories</span>
              )}
            </button>
          </div>
        )}

      </section>

    </div>
  );
}
