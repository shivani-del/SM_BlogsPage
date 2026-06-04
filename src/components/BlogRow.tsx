'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import { Blog } from '@/lib/mockData';

interface BlogRowProps {
  blog: Blog;
  index: number;
}

export default function BlogRow({ blog, index }: BlogRowProps) {
  const getTagColor = (tag: string) => {
    switch (tag.toUpperCase()) {
      case 'SPIRITUAL':
      case 'PILGRIMAGE':
        return 'text-amber-600 bg-amber-50';
      case 'LUXURY':
        return 'text-amber-800 bg-amber-100';
      case 'ADVENTURE':
        return 'text-sky-600 bg-sky-50';
      case 'CULTURE':
        return 'text-rose-600 bg-rose-50';
      default:
        return 'text-orange-600 bg-orange-50';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group bg-white rounded-3xl p-4 md:p-5 border border-slate-100 shadow-sm hover:shadow-md hover:border-orange-100 transition-all duration-300 flex flex-col md:flex-row gap-5 md:gap-6 items-center"
    >
      <div className="relative w-full md:w-56 h-40 md:h-36 rounded-2xl overflow-hidden shrink-0">
        <Image
          src={blog.coverImage}
          alt={blog.title}
          fill
          sizes="(max-width: 768px) 100vw, 224px"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-orange-950/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="flex-grow flex flex-col space-y-2.5 w-full">

        <div className="flex items-center space-x-3 text-xs font-semibold">
          <span className={`px-2.5 py-0.5 rounded-full tracking-wider uppercase text-[10px] ${getTagColor(blog.tag)}`}>
            {blog.tag}
          </span>
          <span className="text-slate-400 font-medium flex items-center space-x-1">
            <Calendar className="h-3 w-3 inline mr-0.5" />
            {blog.publishDate}
          </span>
        </div>

        <Link href={`/blog/${blog.slug}`}>
          <h3 className="text-lg md:text-xl font-extrabold text-slate-800 leading-snug tracking-tight hover:text-[#FF4D30] transition-colors duration-200">
            {blog.title}
          </h3>
        </Link>

        <p className="text-sm text-slate-500 font-medium leading-relaxed line-clamp-2 md:line-clamp-2">
          {blog.excerpt}
        </p>

        <div className="h-[1px] w-full bg-slate-100 md:hidden my-1" />

        <div className="flex items-center justify-between pt-1">

          <div className="flex items-center space-x-2.5">
            <Image
              src={blog.author.avatar}
              alt={blog.author.name}
              width={28}
              height={28}
              className="rounded-full object-cover border border-slate-100 shadow-sm"
            />
            <div className="flex flex-col">
              <span className="text-xs font-bold text-slate-800 leading-none">{blog.author.name}</span>
              <span className="text-[10px] text-slate-400 font-semibold">{blog.author.role}</span>
            </div>
          </div>

          <Link
            href={`/blog/${blog.slug}`}
            className="inline-flex items-center text-xs font-bold text-[#FF4D30] hover:text-[#e03d20] transition-colors group/link"
          >
            <span>Read More</span>
            <ArrowRight className="h-3.5 w-3.5 ml-1 transition-transform duration-200 group-hover/link:translate-x-1 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
