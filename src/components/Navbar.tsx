'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50 w-full px-4 py-6 md:px-8 select-none">
      <div className="mx-auto max-w-7xl bg-white rounded-full shadow-lg border border-slate-100/50 px-6 py-3 flex items-center justify-between md:px-8">
        
        <Link href="/" className="flex items-center space-x-1 group shrink-0">
          <span className="text-2xl font-black tracking-tight text-[#FF4D30] group-hover:scale-102 transition-transform duration-200">
            AAVORide
          </span>
        </Link>

        <nav className="hidden md:flex items-center space-x-8 text-sm font-bold text-slate-800">
          <Link href="/" className="hover:text-[#FF4D30] transition-colors duration-200">
            Home
          </Link>
          <Link href="#" className="hover:text-[#FF4D30] transition-colors duration-200">
            Services
          </Link>
          <Link href="#" className="hover:text-[#FF4D30] transition-colors duration-200">
            About Us
          </Link>
        </nav>

        <div className="hidden md:block shrink-0">
          <Link 
            href="#" 
            className="inline-flex items-center justify-center rounded-full bg-[#FF4D30] px-6 py-2.5 text-xs font-bold text-white shadow-md hover:bg-[#e03d20] hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-200"
          >
            Join as a AAVORide Partner
          </Link>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-full p-2 text-slate-600 hover:bg-slate-50 md:hidden focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute left-4 right-4 top-20 z-40 rounded-3xl bg-white p-6 shadow-xl border border-slate-100 md:hidden"
          >
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between text-base font-bold text-slate-800 hover:text-[#FF4D30] p-2 rounded-lg hover:bg-slate-50 transition-all"
              >
                <span>Home</span>
                <ChevronRight className="h-4 w-4 text-slate-400" />
              </Link>
              <Link
                href="#"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between text-base font-bold text-slate-800 hover:text-[#FF4D30] p-2 rounded-lg hover:bg-slate-50 transition-all"
              >
                <span>Services</span>
                <ChevronRight className="h-4 w-4 text-slate-400" />
              </Link>
              <Link
                href="#"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between text-base font-bold text-slate-800 hover:text-[#FF4D30] p-2 rounded-lg hover:bg-slate-50 transition-all"
              >
                <span>About Us</span>
                <ChevronRight className="h-4 w-4 text-slate-400" />
              </Link>
              
              <hr className="border-slate-100" />
              
              <Link
                href="#"
                onClick={() => setIsOpen(false)}
                className="flex w-full items-center justify-center rounded-full bg-[#FF4D30] py-3 text-sm font-semibold text-white shadow-md hover:bg-[#e03d20] transition-colors"
              >
                Join as a AAVORide Partner
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
