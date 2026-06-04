'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { Destination } from '@/lib/mockData';

interface DestinationCardProps {
  destination: Destination;
  index: number;
}

export default function DestinationCard({ destination, index }: DestinationCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      className="group relative overflow-hidden rounded-2xl bg-slate-900 border border-slate-200/10 shadow-md h-72 cursor-pointer flex flex-col justify-end"
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src={destination.image}
          alt={destination.title}
          fill
          sizes="(max-width: 768px) 50vw, 250px"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent z-1" />
      </div>

      <div className="relative z-10 p-5 flex flex-col space-y-1.5">
        <div className="flex items-center space-x-1 text-[10px] font-bold text-orange-400 tracking-wider uppercase">
          <MapPin className="h-3 w-3 inline text-[#FF4D30]" />
          <span>{destination.category}</span>
        </div>

        <h4 className="text-sm font-extrabold text-white leading-tight tracking-tight group-hover:text-orange-200 transition-colors duration-200">
          {destination.title}
        </h4>
      </div>
    </motion.div>
  );
}
