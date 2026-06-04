import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';
import Providers from '@/components/Providers';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  weight: ['300', '400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'AAVORide Blogs | Travel Stories & Road Trip Guides',
  description: 'Stories that inform and inspire. Read travel tips, pilgrimage guides, luxury cab rental ideas, and discover the best routes in India with AAVORide.',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'AAVORide Blogs | Travel Stories & Road Trip Guides',
    description: 'Stories that inform and inspire. Read travel tips, pilgrimage guides, luxury cab rental ideas, and discover the best routes in India with AAVORide.',
    url: 'https://aavoride.in/blog',
    siteName: 'AAVORide Blogs',
    images: [
      {
        url: '/aavoride_blog_hero.png',
        width: 1200,
        height: 630,
        alt: 'AAVORide Blogs - Stories That Inform and Inspire',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AAVORide Blogs | Travel Stories & Road Trip Guides',
    description: 'Stories that inform and inspire. Read travel tips, pilgrimage guides, luxury cab rental ideas, and discover the best routes in India with AAVORide.',
    images: ['/aavoride_blog_hero.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.variable} font-sans bg-slate-50 text-slate-900 antialiased min-h-screen flex flex-col`}
      >
        <Providers>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
