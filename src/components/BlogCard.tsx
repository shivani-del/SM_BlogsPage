'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Clock, User } from 'lucide-react';
import { motion } from 'framer-motion';
import { Blog } from '@/lib/mockData';

interface BlogCardProps {
  blog: Blog;
  index: number;
}

export default function BlogCard({ blog, index }: BlogCardProps) {
  // Map tags to specific colors
  const getTagStyles = (tag: string) => {
    switch (tag.toUpperCase()) {
      case 'SPIRITUAL':
        return 'bg-amber-400/90 text-amber-950 border-amber-300';
      case 'LUXURY':
        return 'bg-amber-700/95 text-white border-amber-600';
      case 'ADVENTURE':
        return 'bg-sky-500/90 text-sky-950 border-sky-400';
      default:
        return 'bg-emerald-500/90 text-emerald-950 border-emerald-400';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group relative overflow-hidden rounded-3xl bg-slate-900 shadow-xl border border-slate-800 h-[450px] cursor-pointer flex flex-col justify-end"
    >
      <Link href={`/blog/${blog.slug}`} className="absolute inset-0 z-10">
        <span className="sr-only">Read {blog.title}</span>
      </Link>

      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src={blog.coverImage}
          alt={blog.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          priority={index < 3}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent z-1" />
        <div className="absolute inset-0 bg-orange-950/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-1" />
      </div>

      <div className="absolute top-4 left-4 z-20">
        <span className={`inline-flex items-center rounded-full border px-3 py-1 text-[10px] font-bold tracking-wider uppercase backdrop-blur-sm ${getTagStyles(blog.tag)}`}>
          {blog.tag}
        </span>
      </div>

      <div className="relative z-20 p-6 flex flex-col space-y-3">
        <h3 className="text-xl font-extrabold text-white leading-tight tracking-tight group-hover:text-orange-200 transition-colors duration-200">
          {blog.title}
        </h3>

        <p className="text-xs text-slate-300 font-medium line-clamp-2 leading-relaxed opacity-90 group-hover:text-slate-200 transition-all duration-200">
          {blog.excerpt}
        </p>

        <div className="h-[1px] w-full bg-slate-800 my-2" />

        <div className="flex items-center justify-between text-[11px] text-slate-400 font-semibold">
          <div className="flex items-center space-x-1.5">
            <Clock className="h-3.5 w-3.5 text-[#FF4D30]" />
            <span>{blog.readTime}</span>
          </div>
          <div className="flex items-center space-x-1.5">
            <User className="h-3.5 w-3.5 text-slate-400" />
            <span>By {blog.author.name}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
