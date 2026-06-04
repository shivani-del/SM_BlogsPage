# AAVORide Travel Blogs & Guides Portal

A premium, interactive, and responsive Travel Guide & Blog portal built for the **AAVORide** travel ecosystem. This application is designed with state-of-the-art web design standards (vibrant colors, glassmorphism, responsive scales, and micro-animations) utilizing Next.js 15, React 19, and Tailwind CSS v4.

---

## 🌟 Key Features

1. **Vibrant & Full-Width Hero Section**:
   - Spans edge-to-edge behind a floating absolute navigation pill bar.
   - Large bold typography ("Stories That Inform and Inspire.") with solid branding accent colors.
   - Responsive scaling: stays in a single line on desktop (`lg:whitespace-nowrap`) and wraps cleanly on mobile devices.

2. **TanStack React Query (v5) Integration**:
   - Integrates offset pagination for infinite list loading ("Load More Stories").
   - Implements frontend caching: searching queries and category switches resolve instantly from local React Query client cache.
   - Handles network delays gracefully with custom Shadcn skeleton placeholders.

3. **Polished Interactive Detail View**:
   - **Horizontal and Vertical Centering**: Banner text details are vertically centered and horizontally left-aligned to the container grid.
   - **Bullet-Separated Meta Tag**: Clean and unified reading tags (`15 min read  •  By Amit Das`).
   - **Scroll-Linked Progress Indicator**: High-fidelity reading meter at the top of the viewport tracking scroll state.
   - **Compass-Location Callout Card**: White card layout matching Figma CTA details prompting user app downloads.
   - **Must-Visit Spots**: List view detailing recommendations as clean, bold inline spot titles and body text.

4. **Highly Responsive Layout (Mobile-First)**:
   - Floating header adapts into a clean, sliding sidebar drawer on mobile viewports.
   - Horizontal category scrollbars switch alignment (`justify-start md:justify-center`) on mobile to allow swipeable layouts without viewport clippings.

---

## 🛠️ Technology Stack

- **Framework**: Next.js 15 (App Router)
- **Runtime & Compilation**: React 19 & Turbopack
- **Styling**: Tailwind CSS v4 & Lucide Icons
- **State Management & Caching**: TanStack Query (React Query)
- **Animations**: Framer Motion
- **Language**: TypeScript

---

## 📂 Codebase Directory Structure

```text
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── blogs/
│   │   │   │   ├── route.ts                 # Mock API - searches, category filters, offset lists
│   │   │   │   └── [slug]/
│   │   │   │       └── route.ts             # Mock API - dynamic detailed single post lookup
│   │   │   └── ...
│   │   ├── blog/
│   │   │   └── [slug]/
│   │   │       └── page.tsx                 # Dynamic Blog Details page template
│   │   ├── globals.css                      # Global theme and styling configurations
│   │   ├── layout.tsx                       # Outlines the viewport structure and header/footer wrapper
│   │   └── page.tsx                         # Core Blog Listing homepage portal
│   ├── components/
│   │   ├── ui/                              # Base Shadcn design nodes (Button, Card, Tabs, Skeleton)
│   │   ├── Navbar.tsx                       # Floating Pill shaped adaptive navigation bar
│   │   ├── Footer.tsx                       # Custom footer layout with support widgets
│   │   ├── BlogCard.tsx                     # Featured visual grid item with zoom animation
│   │   ├── BlogRow.tsx                      # Category item rows for standard list
│   │   ├── DestinationCard.tsx              # Grid items listing trending visual targets
│   │   └── Providers.tsx                    # TanStack QueryClient wrapper context
│   ├── hooks/
│   │   └── useBlogs.ts                      # Custom query hooks (useInfiniteBlogs, useBlogDetail)
│   ├── lib/
│   │   └── mockData.ts                      # Structured blog entries database
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have **Node.js (v18+)** installed.

### Setup and Installation

1. Install project dependencies:
   ```bash
   npm install
   ```

2. Start the development server (with Next.js Turbopack):
   ```bash
   npm run dev
   ```

3. Open **[http://localhost:3000](http://localhost:3000)** (or the port specified in terminal outputs) to view the application.

### Build and Production Deployment

To package the application for optimized production serving:

```bash
npm run build
npm run start
```

---

## 💾 Cache Optimization & Mechanics

- **Images**: Remote configurations set up in `next.config.ts` for Unsplash. Next.js image component takes care of responsive sizes, format selection, and local caching of assets.
- **Client Cache**: TanStack client caching is set up inside `Providers.tsx` with a standard `staleTime` of 5 minutes, preventing redundant network hits when flipping between categories or typing queries.
