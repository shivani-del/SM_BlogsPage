import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden w-full bg-[#FFF5F1] pt-16 pb-8 px-6 md:px-12 border-t border-orange-100 z-10">
      
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-[120px] md:text-[160px] lg:text-[200px] font-extrabold text-[#FF4D30]/[0.03] tracking-tighter select-none pointer-events-none z-0 text-center uppercase whitespace-nowrap">
        AAVORide
      </div>

      <div className="relative mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 pb-12 border-b border-orange-200/50 z-10">
        
        <div className="md:col-span-5 flex flex-col space-y-5">
          <Link href="/" className="flex items-center space-x-1">
            <span className="text-3xl font-black tracking-tight text-[#FF4D30]">
              AAVORide
            </span>
          </Link>
          
          <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">
            Powered by AAVORide Premium Mobility.
          </p>
          
          <p className="text-sm text-slate-600 font-medium leading-relaxed max-w-md">
            Book affordable cabs with transparent pricing, verified drivers, and smooth rides across India. From quick city trips to long-distance journeys, AAVORide makes every ride stress-free and budget-friendly.
          </p>
          
          <div className="flex items-center space-x-3 pt-2">
            {[
              {
                label: 'Instagram',
                icon: (
                  <svg className="h-4 w-4 stroke-[#FF4D30] fill-none stroke-[2]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                  </svg>
                )
              },
              {
                label: 'Twitter',
                icon: (
                  <svg className="h-3.5 w-3.5 fill-[#FF4D30]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                )
              },
              {
                label: 'LinkedIn',
                icon: (
                  <svg className="h-3.5 w-3.5 fill-[#FF4D30]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                )
              },
              {
                label: 'Facebook',
                icon: (
                  <svg className="h-4 w-4 fill-[#FF4D30]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.8c4.56-.93 8-4.96 8-9.8z"/>
                  </svg>
                )
              },
              {
                label: 'YouTube',
                icon: (
                  <svg className="h-4 w-4 fill-[#FF4D30]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.518 3.5 12 3.5 12 3.5s-7.517 0-9.388.553a3.002 3.002 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.871.553 9.388.553 9.388.553s7.518 0 9.388-.553a3.002 3.002 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                )
              }
            ].map((social, idx) => (
              <Link
                key={idx}
                href="#"
                className="flex items-center justify-center h-9 w-9 rounded-full bg-white border border-orange-200 hover:border-[#FF4D30] hover:scale-105 active:scale-95 transition-all shadow-sm group"
                aria-label={social.label}
              >
                {social.icon}
              </Link>
            ))}
          </div>
        </div>

        <div className="md:col-span-3 flex flex-col space-y-4 md:pl-6">
          <h4 className="text-sm font-extrabold text-slate-800 tracking-wide">Quick Links</h4>
          <nav className="flex flex-col space-y-3.5 text-sm text-slate-600 font-semibold">
            <Link href="/" className="hover:text-[#FF4D30] transition-colors">
              Home
            </Link>
            <Link href="#" className="hover:text-[#FF4D30] transition-colors">
              Our Services
            </Link>
            <Link href="#" className="hover:text-[#FF4D30] transition-colors">
              Become a Partner
            </Link>
            <Link href="#" className="hover:text-[#FF4D30] transition-colors">
              Blog
            </Link>
            <Link href="#" className="hover:text-[#FF4D30] transition-colors">
              FAQ
            </Link>
          </nav>
        </div>

        <div className="md:col-span-4 flex flex-col space-y-4">
          <h4 className="text-sm font-extrabold text-slate-800 tracking-wide">Contact Us</h4>
          
          <div className="flex flex-col space-y-4">
            
            <div className="flex items-center space-x-4 bg-white rounded-3xl p-4 border border-orange-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="rounded-full bg-[#FFF5F1] p-3 text-[#FF4D30] shrink-0">
                <svg className="h-5 w-5 stroke-current fill-none stroke-[2]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <div>
                <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-1">
                  Email Support
                </span>
                <span className="block text-sm font-bold text-slate-800">
                  support@aavoride.in
                </span>
              </div>
            </div>

            <div className="flex items-center space-x-4 bg-white rounded-3xl p-4 border border-orange-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="rounded-full bg-[#FFF5F1] p-3 text-[#FF4D30] shrink-0">
                <svg className="h-5 w-5 stroke-current fill-none stroke-[2]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <div>
                <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-1">
                  Headquarter
                </span>
                <span className="block text-sm font-bold text-slate-800">
                  Ahmedabad, India
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>

      <div className="relative mx-auto max-w-7xl pt-8 flex flex-col md:flex-row items-center justify-between gap-4 z-10 text-xs text-slate-500 font-semibold">
        <p className="text-center md:text-left leading-relaxed">
          © 2026 AAVORide Premium Mobility. All rights reserved. Driven by Excellence.
        </p>

        <div className="flex items-center justify-center bg-white border border-orange-100 shadow-sm rounded-full py-1.5 px-4 select-none shrink-0">
          <span className="h-2 w-2 rounded-full bg-[#FF4D30] mr-2 animate-pulse" />
          <span className="text-xs font-black tracking-tight text-slate-800">AAVORide</span>
        </div>

        <div className="flex space-x-6 shrink-0">
          <Link href="#" className="hover:text-[#FF4D30] transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-[#FF4D30] transition-colors">Terms of Service</Link>
          <Link href="#" className="hover:text-[#FF4D30] transition-colors">Sitemap</Link>
        </div>
      </div>

    </footer>
  );
}
