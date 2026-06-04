'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Loader2, AlertCircle } from 'lucide-react';
import { useInfiniteBlogs } from '@/hooks/useBlogs';
import { CATEGORIES, MOCK_DESTINATIONS, MOCK_BLOGS } from '@/lib/mockData';
import BlogCard from '@/components/BlogCard';
import BlogRow from '@/components/BlogRow';
import DestinationCard from '@/components/DestinationCard';
import { Skeleton } from '@/components/ui/skeleton';

export default function BlogListingPage() {
  const [activeCategory, setActiveCategory] = useState('All Stories');
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');

  // Handle search term input debounce
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    const timer = setTimeout(() => {
      setDebouncedSearch(e.target.value);
    }, 400);
    return () => clearTimeout(timer);
  };

  // React Query Fetch using Infinite Scroll
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
    refetch,
  } = useInfiniteBlogs(activeCategory, debouncedSearch, 3);

  // Flatten the pages of blogs
  const allRecentBlogs = data?.pages.flatMap((page) => page.blogs) || [];

  // Filter static featured posts from mock data
  const featuredBlogs = MOCK_BLOGS.filter((blog) => blog.featured);

  return (
    <div className="w-full flex flex-col min-h-screen">
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden w-full h-[450px] md:h-[600px] flex items-center bg-slate-950"
      >
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="/aavoride_blog_hero.png"
            alt="Majestic Mountains and Hot Air Balloons"
            fill
            sizes="100vw"
            priority
            className="object-cover object-center opacity-90 scale-100 select-none"
          />
          {/* Subtle overlays to enhance text readability while maintaining bright sunset colors */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/40 via-transparent to-transparent" />
        </div>

        {/* Content Container - aligned with the grid of the main content */}
        <div className="relative z-10 mx-auto max-w-7xl w-full px-6 md:px-8 pt-24 md:pt-32">
          <div className="max-w-full space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-tight font-sans lg:whitespace-nowrap">
              <span className="text-[#FF4D30]">Stories</span> That Inform and Inspire.
            </h1>
          </div>
        </div>
      </motion.section>

      <div className="mx-auto max-w-7xl w-full px-4 py-12 md:px-8 space-y-16">
      <section className="flex flex-col lg:flex-row items-center justify-between gap-6 pb-2 border-b border-slate-200">
        <div className="w-full lg:w-auto overflow-x-auto flex scrollbar-none space-x-2 py-2">
          {CATEGORIES.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`relative cursor-pointer px-4 py-2 text-xs md:text-sm font-bold rounded-full transition-all duration-200 shrink-0 select-none ${
                  isActive 
                    ? 'text-white bg-[#FF4D30] shadow-md' 
                    : 'text-slate-500 hover:text-slate-800 hover:bg-slate-100'
                }`}
              >
                <span>{category}</span>
                {isActive && (
                  <motion.div
                    layoutId="activeCategoryIndicator"
                    className="absolute inset-0 bg-[#FF4D30] rounded-full -z-10 shadow-sm"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        <div className="relative w-full lg:w-72">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search stories..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="w-full pl-10 pr-4 py-2.5 rounded-full border border-slate-200 bg-white text-sm font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-[#FF4D30] shadow-sm transition-all"
          />
        </div>
      </section>

      {activeCategory === 'All Stories' && !debouncedSearch && (
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-black text-slate-800 tracking-tight flex items-center space-x-2">
              <span className="block h-6 w-1 bg-[#FF4D30] rounded-full" />
              <span>Featured Guides</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {featuredBlogs.map((blog, idx) => (
              <BlogCard key={blog.id} blog={blog} index={idx} />
            ))}
          </div>
        </section>
      )}

      <section className="space-y-6">
        <h2 className="text-2xl font-black text-slate-800 tracking-tight flex items-center space-x-2">
          <span className="block h-6 w-1 bg-[#FF4D30] rounded-full" />
          <span>{activeCategory === 'All Stories' ? 'Recent Stories' : `${activeCategory} Articles`}</span>
        </h2>

        {isError && (
          <div className="bg-red-50 border border-red-200 rounded-3xl p-8 text-center flex flex-col items-center justify-center space-y-3">
            <AlertCircle className="h-10 w-10 text-red-500" />
            <h3 className="text-lg font-bold text-red-800">Something went wrong</h3>
            <p className="text-sm text-red-600">Failed to load articles. Please check your connection and try again.</p>
            <button
              onClick={() => refetch()}
              className="px-5 py-2 text-xs font-semibold text-white bg-red-600 rounded-full hover:bg-red-500 transition-colors"
            >
              Retry Fetching
            </button>
          </div>
        )}

        {isLoading && (
          <div className="space-y-4">
            {[1, 2, 3].map((s) => (
              <div key={s} className="bg-white rounded-3xl p-5 border border-slate-100 flex flex-col md:flex-row gap-6 items-center">
                <Skeleton className="w-full md:w-56 h-36 rounded-2xl shrink-0" />
                <div className="flex-grow space-y-3 w-full">
                  <div className="flex space-x-2">
                    <Skeleton className="h-4 w-16 rounded-full" />
                    <Skeleton className="h-4 w-24" />
                  </div>
                  <Skeleton className="h-6 w-3/4" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-2/3" />
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
        )}

        {!isLoading && !isError && (
          <div className="space-y-4">
            <AnimatePresence mode="popLayout">
              {allRecentBlogs.length > 0 ? (
                allRecentBlogs.map((blog, idx) => (
                  <BlogRow key={blog.id} blog={blog} index={idx} />
                ))
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="bg-white border border-slate-100 rounded-3xl p-12 text-center flex flex-col items-center justify-center space-y-2"
                >
                  <Search className="h-8 w-8 text-slate-300 mb-2" />
                  <h3 className="text-base font-bold text-slate-700">No articles found</h3>
                  <p className="text-xs text-slate-500 max-w-xs">
                    We couldn&apos;t find any articles matching your search or category choice. Try a different query.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}

        {hasNextPage && (
          <div className="flex justify-center pt-6">
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

      <section className="space-y-6">
        <h2 className="text-2xl font-black text-slate-800 tracking-tight flex items-center space-x-2">
          <span className="block h-6 w-1 bg-[#FF4D30] rounded-full" />
          <span>Trending Destinations</span>
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {MOCK_DESTINATIONS.map((dest, idx) => (
            <DestinationCard key={dest.id} destination={dest} index={idx} />
          ))}
        </div>
      </section>
      
      </div>
    </div>
  );
}
